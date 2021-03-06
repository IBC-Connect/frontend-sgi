import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CargoMapper } from 'src/app/mapper/Cargo';
import { Cargo } from 'src/app/modelo/Cargo';
import { Membro } from 'src/app/modelo/Membro';
import { CargoService } from 'src/app/servicos/Cargo';
import { MembroService } from 'src/app/servicos/Membro';
import { DateUtil } from 'src/app/util/DateUtil';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.page.html',
  styleUrls: ['./cargo.page.scss'],
})
export class CargoPage {
  formulario: FormGroup;
  cargo: Cargo;
  mensagens: MensagensUtil;
  dataDeHoje: string;
  membrosAtivos: Membro[];
  listaMembrosObservable: Observable<any[]>;

  constructor(
    private formulador: FormBuilder,
    private membroService: MembroService,
    private aviso: ToastController,
    private cargoService: CargoService,
    private router: Router
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    const nav = this.router.getCurrentNavigation();
    this.cargo = nav.extras.state.content;
    this.ajustarDatas();
    this.inicializar();
  }

  private inicializar(): void {
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe((response) => {
      this.membrosAtivos = response;
      this.membrosAtivos = this.membrosAtivos.filter(
        (m) => m.situacao === 'Ativo'
      );
      this.membrosAtivos.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
    });

    this.criarFormulario();
    this.formulario.controls['responsavel'].setValue(this.cargo.responsavel);
  }

  private criarFormulario(): void {
    this.formulario = this.formulador.group({
      key: [this.cargo.key, Validators.required],
      responsavel: [this.cargo.responsavel, Validators.required],
      dataInicio: [this.cargo.dataInicioResponsavel, Validators.required],
      dataFim: [this.cargo.dataFimResponsavel, Validators.required],
      descricao: [this.cargo.descricao],
      nome: [this.cargo.nome, Validators.required],
    });
  }

  private ajustarDatas() : void {
    if(this.cargo.dataInicioResponsavel)
    this.cargo.dataInicioResponsavel = this.cargo.dataInicioResponsavel.includes('/')? this.cargo.dataInicioResponsavel : DateUtil.dateFormatterBrazil(this.cargo.dataInicioResponsavel);
    if(this.cargo.dataFimResponsavel)
    this.cargo.dataFimResponsavel= this.cargo.dataFimResponsavel.includes('/')? this.cargo.dataFimResponsavel : DateUtil.dateFormatterBrazil(this.cargo.dataFimResponsavel);
  }

  public associar(): void {
    if (this.formulario.value) {
      this.isDataFimEnable(true);
      this.formulario.controls['dataFim'].enable();

      if(this.formulario.value.dataFim && !DateUtil.verificarIsDataValida(this.formulario.value.dataFim)){
        this.mensagens.mensagemError("A data informada no campo 'Data Fim' n??o ?? v??lida.")
    }
      else if(this.formulario.value.dataInicio && !DateUtil.verificarIsDataValida(this.formulario.value.dataInicio)){
        this.mensagens.mensagemError("A data informada no campo 'Data In??cio' n??o ?? v??lida.")
    }
      else if (DateUtil.isDataFutura(this.formulario.value.dataInicio)) {
        this.mensagens.mensagemError(
          "N??o ?? permitido data futura para o campo 'Data In??cio'"
        );
      } else if (
        DateUtil.isDataDoisMaiorDataUm(
          this.formulario.value.dataInicio,
          this.formulario.value.dataFim
        ) &&
        !DateUtil.isDatasIguais(
          this.formulario.value.dataFim,
          this.formulario.value.dataInicio
        )
      ) {
        this.mensagens.mensagemError(
          "A 'Data In??cio' n??o pode ser maior que a 'Data Fim'."
        );
      } else if (
        DateUtil.isDatasIguais(
          this.formulario.value.dataInicio,
          this.formulario.value.dataFim
        )
      ) {
        this.mensagens.mensagemError(
          "As datas 'Data In??cio' e 'Data Fim' n??o podem ser iguais."
        );
      } else if (
        DateUtil.numeroDiasEntreDuasDatas(
          this.formulario.value.dataInicio,
          this.formulario.value.dataFim
        ) >= 731
      ) {
        this.mensagens.mensagemError(
          'O respons??vel pode assumir um cargo com dura????o m??xima de dois anos.'
        );
      } else {
        this.cargo = CargoMapper.formularioToCargo(this.formulario.value);
        this.cargoService.adicionarOuAtualizar(this.cargo);
        this.mensagens.mensagemSucesso('Associa????o realizada com sucesso!');
      }
      this.isDataFimEnable(false);
    }
  }

  public calcularDataFinal(event: any): void {
    let dataInicial = event.target.value;
    if (DateUtil.verificarIsDataValida(dataInicial)) {
      this.formulario.controls['dataFim'].setValue(
        DateUtil.calcularData(dataInicial, 2)
      );
      this.isDataFimEnable(false);
    }
  }

  private isDataFimEnable(valor: boolean): void {
    if (valor) this.formulario.controls['dataFim'].enable();
    else this.formulario.controls['dataFim'].disable();
  }
}
