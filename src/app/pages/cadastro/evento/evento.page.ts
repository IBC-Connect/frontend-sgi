import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { EventoMapper } from 'src/app/mapper/Evento';
import { Endereco } from 'src/app/modelo/Endereco';
import { Evento } from 'src/app/modelo/Evento';
import { Membro } from 'src/app/modelo/Membro';
import { ConsultaCEPService } from 'src/app/servicos/ConsultaCEP';
import { EventoService } from 'src/app/servicos/Evento';
import { MembroService } from 'src/app/servicos/Membro';
import { DateUtil } from 'src/app/util/DateUtil';
import { DiaDaSemanaEHorarioUtil } from 'src/app/util/DiaDaSemanaEHorarioUtil';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage {
  formulario: FormGroup;
  evento: Evento;
  mensagens: MensagensUtil;
  horarios: any;
  origens : any;
  membrosAtivos: Membro[];
  listaMembrosObservable: Observable<any[]>;

  constructor(
    private formulador: FormBuilder,
    private eventoService: EventoService,
    private aviso: ToastController,
    private consultaCep: ConsultaCEPService,
    private membroService: MembroService
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.inicializar();
  }

  public inicializar(): void {
    this.evento = new Evento();
    this.evento.local = new Endereco();
    this.horarios = DiaDaSemanaEHorarioUtil.horarios();
    this.origens = ["IBC", "TRANSFORMAR"];
    this.membroService.listar().subscribe((response) => {
      this.membrosAtivos = response;
      this.membrosAtivos = this.membrosAtivos.filter(
        (m) => m.situacao == 'Ativo'
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
  }

  public criarFormulario(): void {
    this.formulario = this.formulador.group({
      key: [this.evento.key],
      data: [this.evento.data, [Validators.required, this.validarData]],
      horarioInicio: [this.evento.horarioInicio, Validators.required],
      horarioFim: [this.evento.horarioFim, Validators.required],
      origem: [this.evento.origem, Validators.required],
      nome: [this.evento.nome, Validators.required],
      observacoes: [this.evento.observacoes],
      responsavel: [this.evento.responsavel, Validators.required],
      cep: [this.evento.local.cep, Validators.required],
      logradouro: [this.evento.local.logradouro, Validators.required],
      numero: [this.evento.local.numero, Validators.required],
      complemento: [this.evento.local.complemento],
      bairro: [this.evento.local.bairro, Validators.required],
      cidade: [this.evento.local.cidade, Validators.required],
      estado: [this.evento.local.estado, Validators.required],
    });
  }

  public async buscarEndereco(event) {
    if (event.target.value) {
      await this.consultaCep.buscaEndereco(event.target.value).then(
        (data) => {
          const resultadoJson: any = data;

          if (resultadoJson.erro) {
            this.mensagens.mensagemAlerta(
              'Cep não encontrado, por favor insira os dados manualmente.'
            );

          } else {
            this.formulario.controls['bairro'].setValue(resultadoJson.bairro);
            this.formulario.controls['cidade'].setValue(
              resultadoJson.localidade
            );
            this.formulario.controls['estado'].setValue(resultadoJson.uf);
            this.formulario.controls['logradouro'].setValue(
              resultadoJson.logradouro
            );
            this.disableEndereco(true);
          }
        },
        (erro) => {
          this.mensagens.mensagemAlerta(
            'Cep não encontrado, por favor insira os dados manualmente.'
          );
        }
      );
    }
  }

  private disableEndereco(disable: boolean): void {
    if (disable) {
      this.formulario.controls['bairro'].disable();
      this.formulario.controls['cidade'].disable();
      this.formulario.controls['estado'].disable();
      this.formulario.controls['logradouro'].disable();
    } else {
      this.formulario.controls['bairro'].enable();
      this.formulario.controls['cidade'].enable();
      this.formulario.controls['estado'].enable();
      this.formulario.controls['logradouro'].enable();
    }
  }

  formatarData(event: any) {
    let input = event.target.value.replace(/\D/g, '').substring(0, 8);
    let dia = input.substring(0, 2);
    let mes = input.substring(2, 4);
    let ano = input.substring(4, 8);

    if (input.length > 4) {
      event.target.value = `${dia}/${mes}/${ano}`;
    } else if (input.length > 2) {
      event.target.value = `${dia}/${mes}`;
    } else if (input.length > 0) {
      event.target.value = `${dia}`;
    }
  }

  validarData(control: AbstractControl) {
    const data = control.value;
    if (!data) return null;

    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(data) ? null : { dataInvalida: true };
  }

  public cadastrar(): void {
    if (this.formulario.value) {
      if (this.formulario.value.data && !DateUtil.verificarIsDataValida(this.formulario.value.data)) {
        this.mensagens.mensagemError("A data informada no campo 'Data' não é válida.");
      } else {
        this.disableEndereco(false);
        this.evento = EventoMapper.formularioToEvento(this.formulario.value);
        this.eventoService.adicionarOuAtualizar(this.evento);
        this.mensagens.mensagemSucesso('Cadastro realizado com sucesso!');
        this.inicializar();
      }
    }
  }

  public verificarHorariosEncontro(event: any) {

    if (this.evento.horarioInicio && this.evento.horarioFim) {

      // Se o horario final é antes do inicial
      let retorno = DateUtil.verificarIntervaloHora(
        this.evento.horarioInicio,
        this.evento.horarioFim
      )

      if (!retorno) {
        this.mensagens.mensagemAlerta(
          'O horário final deve ser maior que o horário inicial.'
        );

        this.evento.horarioFim = ""
      }
    }
  }
}
