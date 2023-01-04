import { Component } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { Projeto } from "src/app/modelo/Projeto";
import { ProjetoService } from "src/app/servicos/Projeto";
import { DateUtil } from "src/app/util/DateUtil";
import { DiaDaSemanaEHorarioUtil } from "src/app/util/DiaDaSemanaEHorarioUtil";
import { EncontroUtil } from "src/app/util/EncontroUtil";
import { MensagensUtil } from "src/app/util/MensagensUtil";
import { ValidadorCamposObrigatorios } from "src/app/validador/ValidadorCamposObrigatorios";
import * as moment from "moment";

@Component({
  selector: "app-projeto",
  templateUrl: "./projeto.page.html",
  styleUrls: ["./projeto.page.scss"],
})
export class ProjetoPage {
  projeto: Projeto;
  mensagens: MensagensUtil;
  diasDaSemana: any[];
  horarios: any[];

  constructor(
    private projetoService: ProjetoService,
    private aviso: ToastController
  ) {
    moment.locale("pt-br");
    this.inicializar();
  }

  public inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.diasDaSemana = DiaDaSemanaEHorarioUtil.diasDaSemana();
    this.horarios = DiaDaSemanaEHorarioUtil.horarios();
    this.projeto = new Projeto();
    this.projeto.diasEncontro = EncontroUtil.arrayEncontro();
  }

  public disabledBotaoCadastrar(): boolean {
    return (
      !ValidadorCamposObrigatorios.isCampoPreenchido(this.projeto.nome) ||
      !ValidadorCamposObrigatorios.isCampoPreenchido(this.projeto.dataInicio) ||
      !ValidadorCamposObrigatorios.isCampoPreenchido(this.projeto.descricao)
    );
  }

  public cadastrar(): void {
    if (this.projeto) {
      if (!DateUtil.verificarIsDataValida(this.projeto.dataInicio)) {
        this.mensagens.mensagemError(
          "A data informada no campo 'Data de início' não é válida."
        );
      } else if (this.verificarHorariosEncontro()) {
        /*Verificar horários dos encontros */
        this.mensagens.mensagemError(
          "O horário final deve ser maior que o horário inicial."
        );
      } else {
        this.projeto.nome = this.projeto.nome.toUpperCase();
        this.projeto.descricao = this.projeto.descricao.toUpperCase();
        this.projeto.situacao = "Ativo";
        this.projetoService.adicionarOuAtualizar(this.projeto, "Projeto cadastrado com sucesso.");
        this.inicializar();
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
