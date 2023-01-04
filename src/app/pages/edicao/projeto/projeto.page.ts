import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Projeto } from 'src/app/modelo/Projeto';
import { ProjetoService } from 'src/app/servicos/Projeto';
import { DateUtil } from 'src/app/util/DateUtil';
import { DiaDaSemanaEHorarioUtil } from 'src/app/util/DiaDaSemanaEHorarioUtil';
import { EncontroUtil } from 'src/app/util/EncontroUtil';
import { MensagensUtil } from 'src/app/util/MensagensUtil';
import { ValidadorCamposObrigatorios } from 'src/app/validador/ValidadorCamposObrigatorios';

@Component({
  selector: "app-projeto",
  templateUrl: "./projeto.page.html",
  styleUrls: ["./projeto.page.scss"],
})
export class ProjetoPage implements OnInit {
  projeto: Projeto;
  mensagens: MensagensUtil;
  diasDaSemana: any[];
  horarios: any[];

  constructor(
    private projetoService: ProjetoService,
    private aviso: ToastController,
    private router: Router
  ) {
    moment.locale("pt-br");
    const nav = this.router.getCurrentNavigation();
    this.projeto = nav.extras.state.content;
  }

  ngOnInit() {
    this.inicializar();
  }

  public inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.diasDaSemana = DiaDaSemanaEHorarioUtil.diasDaSemana();
    this.horarios = DiaDaSemanaEHorarioUtil.horarios();
    this.projeto.diasEncontro = EncontroUtil.arrayEncontro();
    this.projeto.dataInicio = this.projeto.dataInicio.includes("/")
      ? this.projeto.dataInicio
      : DateUtil.dateFormatterBrazil(this.projeto.dataInicio);
  }

  public disabledBotaoEditar(): boolean {
    return (
      !ValidadorCamposObrigatorios.isCampoPreenchido(this.projeto.nome) ||
      !ValidadorCamposObrigatorios.isCampoPreenchido(this.projeto.dataInicio) ||
      !ValidadorCamposObrigatorios.isCampoPreenchido(this.projeto.descricao)
    );
  }

  public editar(): void {
    if (this.projeto) {
      if (
        this.projeto.dataInicio &&
        !DateUtil.verificarIsDataValida(this.projeto.dataInicio)
      ) {
        this.mensagens.mensagemError(
          "A data do campo 'Data de início' informada não é válida."
        );
      } else if (!this.verificarHorariosEncontro()) {
        this.mensagens.mensagemError(
          "O horário final deve ser maior que o horário inicial."
        );
      } else {
        this.projeto.nome = this.projeto.nome.toUpperCase();
        this.projeto.descricao = this.projeto.descricao.toUpperCase();
        this.projeto.situacao = "Ativo";
        this.projetoService.adicionarOuAtualizar(
          this.projeto,
          "Edição realizada com sucesso!"
        );
      }
    }
  }

  public verificarHorariosEncontro() {
    let retorno = false;

    this.projeto.diasEncontro.forEach((element) => {
      if (element.horarioInicial && element.horarioFinal) {
        if (
          DateUtil.verificarIntervaloHora(
            element.horarioInicial,
            element.horarioFinal
          )
        ) {
          retorno = true;
        }
      }
    });
    return retorno;
  }
}
