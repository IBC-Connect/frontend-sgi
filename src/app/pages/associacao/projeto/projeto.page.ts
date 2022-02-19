import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ProjetoMapper } from 'src/app/mapper/Projeto';
import { Membro } from 'src/app/modelo/Membro';
import { Projeto } from 'src/app/modelo/Projeto';
import { MembroService } from 'src/app/servicos/Membro';
import { ProjetoService } from 'src/app/servicos/Projeto';
import { DateUtil } from 'src/app/util/DateUtil';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.page.html',
  styleUrls: ['./projeto.page.scss'],
})
export class ProjetoPage implements OnInit {
  
  formulario: FormGroup;
  projeto: Projeto;
  mensagens: MensagensUtil;
  dataDeHoje: string;
  membrosAtivos: Membro[];
  listaMembrosObservable: Observable<any[]>;

  constructor(
    private formulador: FormBuilder,
    private membroService: MembroService,
    private aviso: ToastController,
    private projetoService: ProjetoService,
    private router: Router
  ) {
    const nav = this.router.getCurrentNavigation();
    this.projeto = nav.extras.state.content;
    this.ajustarDatas();

   }

  ngOnInit() {
    this.inicializar();
  }

  private inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe((response) => {
      this.membrosAtivos = response;
      this.membrosAtivos = this.membrosAtivos.filter((m) => m.situacao === 'Ativo');
      this.membrosAtivos.sort((a, b) => a.nomeCompleto > b.nomeCompleto  ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0 );
    });

    this.criarFormulario();

}

private criarFormulario(): void {
  this.formulario = this.formulador.group({
    key: [this.projeto.key, Validators.required],
    responsavel: [this.projeto.responsavel, Validators.required],
    dataInicio: [this.projeto.dataInicioResponsavel, Validators.required],
    dataFim: [this.projeto.dataFimResponsavel, Validators.required],
    nome: [this.projeto.nome, Validators.required],
  });
}

private ajustarDatas() : void {
  if(this.projeto.dataInicioResponsavel)
  this.projeto.dataInicioResponsavel = this.projeto.dataInicioResponsavel.includes('/')? this.projeto.dataInicioResponsavel : DateUtil.dateFormatterBrazil(this.projeto.dataInicioResponsavel);
  if(this.projeto.dataFimResponsavel)
  this.projeto.dataFimResponsavel= this.projeto.dataFimResponsavel.includes('/')? this.projeto.dataFimResponsavel : DateUtil.dateFormatterBrazil(this.projeto.dataFimResponsavel);
}

public associar(): void {
  if (this.formulario.value) {

    if(this.formulario.value.dataFim && !DateUtil.verificarIsDataValida(this.formulario.value.dataFim)){
        this.mensagens.mensagemError("A data informada no campo 'Data Fim' não é válida.")
    }
      else if(this.formulario.value.dataInicio && !DateUtil.verificarIsDataValida(this.formulario.value.dataInicio)){
        this.mensagens.mensagemError("A data informada no campo 'Data Início' não é válida.")
    }
      else if (DateUtil.isDataFutura(this.formulario.value.dataInicio)) {
      this.mensagens.mensagemError("Não é permitido data futura para o campo 'Data Início'");
    } else if (DateUtil.isDataDoisMaiorDataUm(this.formulario.value.dataInicio, this.formulario.value.dataFim) 
               && !DateUtil.isDatasIguais(this.formulario.value.dataFim, this.formulario.value.dataInicio)) {
                    this.mensagens.mensagemError("A 'Data Início' não pode ser maior que a 'Data Fim'.");
    } else if (DateUtil.isDatasIguais(this.formulario.value.dataInicio,this.formulario.value.dataFim)) {
      this.mensagens.mensagemError("As datas 'Data Início' e 'Data Fim' não podem ser iguais.");
    } else if ( DateUtil.numeroDiasEntreDuasDatas(this.formulario.value.dataInicio, this.formulario.value.dataFim) >= 731 ) {
      this.mensagens.mensagemError( 'O responsável pode assumir um cargo com duração máxima de dois anos.');
    } else {
      this.projeto = ProjetoMapper.formularioToProjeto(this.formulario.value, this.projeto);
      this.projetoService.adicionarOuAtualizar(this.projeto);
      this.mensagens.mensagemSucesso('Associação realizada com sucesso!');
    }
  }
}
}
