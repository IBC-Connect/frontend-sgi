import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { EventoMapper } from 'src/app/mapper/Evento';
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
export class EventoPage implements OnInit {

  formulario: FormGroup;
  evento: Evento;
  mensagens: MensagensUtil;
  horarios: any;
  membrosAtivos: Membro[];
  listaMembrosObservable: Observable<any[]>;

  constructor(
    private formulador: FormBuilder,
    private eventoService: EventoService,
    private aviso: ToastController,
    private consultaCep: ConsultaCEPService,
    private membroService: MembroService,
    private router: Router
  ) {
    const nav = this.router.getCurrentNavigation();
    this.evento = nav.extras.state.content;
  }

  ngOnInit() {
    this.inicializar();
  }

  public inicializar(): void {
    this.listaMembrosObservable = this.membroService.listar();
    this.mensagens = new MensagensUtil(this.aviso);
    this.horarios = DiaDaSemanaEHorarioUtil.horarios();
    this.listaMembrosObservable.subscribe(response => {
      this.membrosAtivos = response;
      this.membrosAtivos = this.membrosAtivos.filter(m => m.situacao == 'Ativo');
      this.membrosAtivos.sort((a, b) => (a.nomeCompleto > b.nomeCompleto) ? 1 : ((b.nomeCompleto > a.nomeCompleto) ? -1 : 0));
    });
    this.evento.data = this.evento.data.includes('/') ? this.evento.data : DateUtil.dateFormatterBrazil(this.evento.data);
    this.criarFormulario();
  }

  public criarFormulario(): void {
    this.formulario = this.formulador.group({
      key: [this.evento.key],
      data: [this.evento.data, Validators.required],
      horarioInicio: [this.evento.horarioInicio, Validators.required],
      horarioFim: [this.evento.horarioFim, Validators.required],
      nome: [this.evento.nome, Validators.required],
      observacoes: [this.evento.observacoes ? this.evento.observacoes : ''],
      responsavel: [this.evento.responsavel, Validators.required],
      cep: [this.evento.local.cep, Validators.required],
      logradouro: [this.evento.local.logradouro, Validators.required],
      numero: [this.evento.local.numero, Validators.required],
      complemento: [this.evento.local.complemento],
      bairro: [this.evento.local.bairro, Validators.required],
      cidade: [this.evento.local.cidade, Validators.required],
      estado: [this.evento.local.estado, Validators.required],
    })
  }

  public async buscarEndereco(event) {
    if (event.target.value) {
      await this.consultaCep.buscaEndereco(event.target.value).then((data) => {
        const resultadoJson: any = data;
        if (resultadoJson) {
          this.formulario.controls['bairro'].setValue(resultadoJson.bairro);
          this.formulario.controls['cidade'].setValue(resultadoJson.localidade);
          this.formulario.controls['estado'].setValue(resultadoJson.uf);
          this.formulario.controls['logradouro'].setValue(resultadoJson.logradouro);
          this.disableEndereco(true);
        }
      }, (erro) => {
        this.mensagens.mensagemAlerta("Cep não encontrado, por favor insira os dados manualmente.");
      })
    }
    else {
      this.formulario.controls['bairro'].setValue(null);
      this.formulario.controls['cidade'].setValue(null);
      this.formulario.controls['estado'].setValue(null);
      this.formulario.controls['logradouro'].setValue(null);
      this.disableEndereco(false);
    }
  }

  private disableEndereco(disable: boolean): void {
    if (disable) {
      this.formulario.controls['bairro'].disable();
      this.formulario.controls['cidade'].disable();
      this.formulario.controls['estado'].disable();
      this.formulario.controls['logradouro'].disable();
    }
    else {
      this.formulario.controls['bairro'].enable();
      this.formulario.controls['cidade'].enable();
      this.formulario.controls['estado'].enable();
      this.formulario.controls['logradouro'].enable();
    }
  }

  public editar(): void {
    if (this.formulario.value) {
      if (this.evento.data && !DateUtil.verificarIsDataValida(this.evento.data)) {
        this.mensagens.mensagemError("A data do campo 'Data' informada não é válida.");
      }
      else if (!this.verificarHorariosEncontro()) {
        this.mensagens.mensagemError("O horário final deve ser maior que o horário inicial.");
      }
      else {
        this.disableEndereco(false);
        this.evento = EventoMapper.formularioToEvento(this.formulario.value);
        this.eventoService.adicionarOuAtualizar(this.evento);
        this.mensagens.mensagemSucesso("Edição realizada com sucesso!");
        this.disableEndereco(true);
      }
    }
  }

  public verificarHorariosEncontro() {
    let retorno = false;
    if (this.evento.horarioInicio && this.evento.horarioFim) {
      if (DateUtil.verificarIntervaloHora(this.evento.horarioInicio, this.evento.horarioFim)) {
        retorno = true;
      }
    }
    return retorno;
  }
}