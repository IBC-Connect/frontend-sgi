import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { AssistidoMapper } from "src/app/mapper/Assistido";
import { Assistido } from "src/app/modelo/Assistido";
import { Endereco } from "src/app/modelo/Endereco";
import { Projeto } from "src/app/modelo/Projeto";
import { AssistidoService } from "src/app/servicos/Assistido";
import { ConsultaCEPService } from "src/app/servicos/ConsultaCEP";
import { ProjetoService } from "src/app/servicos/Projeto";
import { DateUtil } from "src/app/util/DateUtil";
import { InformacoesPessoaisUtil } from "src/app/util/InformacoesPessoaisUtil";
import { MensagensUtil } from "src/app/util/MensagensUtil";
import { ValidadorInformacoesPessoais } from "src/app/validador/ValidadorInformacoesPessoais";

import { Familiar } from "./../../../modelo/Familiar";

@Component({
  selector: "app-assistido",
  templateUrl: "./assistido.page.html",
  styleUrls: ["./assistido.page.scss"],
})
export class AssistidoPage implements OnInit {
  formulario: FormGroup;
  mensagens: MensagensUtil;
  assistido: Assistido;
  estadoCivil: Array<any> = [];
  escolaridade: Array<any> = [];
  parentesco: Array<any> = [];
  familiar: Familiar;

  //Projetos
  listaProjetos: Projeto[];
  listaProjetosFiltrados: Projeto[];
  numTotalProjetos: number;
  listaProjetosObservable: Observable<any[]>;

  constructor(
    private formulador: FormBuilder,
    private aviso: ToastController,
    private consultaCep: ConsultaCEPService,
    private assistidoService: AssistidoService,
    private projetoService: ProjetoService
  ) {
    this.familiar = new Familiar();
  }

  get familiares(): FormArray {
    return this.formulario.controls["familiares"] as FormArray;
  }

  adicionarFamiliar() {
    this.familiares.push(this.novoFamiliarForm());
  }

  removerFamiliar(index: number) {
    this.familiares.removeAt(index);
  }

  novoFamiliarForm(): FormGroup {
    return this.formulador.group({
      nome: [this.familiar.nome, Validators.required],
      parentesco: [this.familiar.parentesco, Validators.required],
      beneficiadoPelaIgreja: [
        this.familiar.beneficiadoPelaIgreja,
        Validators.required,
      ],
      descricaoBeneficios: [this.familiar.descricaoBeneficios],
      precisaAjuda: [this.familiar.precisaAjuda],
    });
  }

  ngOnInit() {
    this.inicializar();
    this.inicializarProjetos();
  }

  private inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.estadoCivil = InformacoesPessoaisUtil.estadoCivil();
    this.escolaridade = InformacoesPessoaisUtil.escolaridade();
    this.parentesco = InformacoesPessoaisUtil.parentesco();
    this.assistido = new Assistido();
    this.assistido.endereco = new Endereco();
    this.criarFormulario();
  }

  private async inicializarProjetos() {
    this.listaProjetosObservable = this.projetoService.listar();
    this.listaProjetosObservable.subscribe((response) => {
      this.listaProjetos = response.filter(
        (projeto) => projeto.situacao === "Ativo"
      );
      this.listaProjetosFiltrados = this.listaProjetos;
      this.numTotalProjetos = this.listaProjetos.length;
      this.listaProjetosFiltrados.sort((a, b) =>
        a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0
      );
    });
  }

  private criarFormulario(): void {
    this.formulario = this.formulador.group({
      key: [this.assistido.key],
      nomeCompleto: [this.assistido.nomeCompleto, Validators.required],
      dataNascimento: [this.assistido.dataNascimento, Validators.required],
      telefone: [this.assistido.telefone, Validators.required],
      whatsapp: [this.assistido.whatsapp],
      email: [this.assistido.email],
      profissao: [this.assistido.profissao, Validators.required],
      estadoCivil: [this.assistido.estadoCivil, Validators.required],
      escolaridade: [this.assistido.escolaridade, Validators.required],
      observacoes: [this.assistido.observacoes],
      trabalhandoAtualmente: [
        this.assistido.trabalhandoAtualmente,
        Validators.required,
      ],
      cep: [this.assistido.endereco.cep, Validators.required],
      logradouro: [this.assistido.endereco.logradouro, Validators.required],
      numero: [this.assistido.endereco.numero, Validators.required],
      complemento: [this.assistido.endereco.complemento],
      bairro: [this.assistido.endereco.bairro, Validators.required],
      cidade: [this.assistido.endereco.cidade, Validators.required],
      estado: [this.assistido.endereco.estado, Validators.required],
      projetosAssistidos: [this.assistido.projetos],
      cpf: [this.assistido.cpf],
      rg: [this.assistido.rg],
      familiares: this.formulador.array([]),
    });
  }

  public validarCpf(event): void {
    if (event.target.value)
      if (!ValidadorInformacoesPessoais.cpfCnpjIsValid(event.target.value)) {
        this.mensagens.mensagemError("CPF inválido.");
        this.formulario.controls["cpf"].setValue(null);
        this.formulario.controls["senha"].setValue(null);
        return;
      } else {
        this.formulario.controls["senha"].setValue(
          event.target.value.replace(".", "").replace(".", "").replace("-", "")
        );
      }
  }

  public async buscarEndereco(event) {
    if (event.target.value) {
      await this.consultaCep.buscaEndereco(event.target.value).then(
        (data) => {
          const resultadoJson: any = data;
          if (resultadoJson.erro) {
            this.erroAoBuscarCep();
          } else if (resultadoJson) {
            this.formulario.controls["bairro"].setValue(resultadoJson.bairro);
            this.formulario.controls["cidade"].setValue(
              resultadoJson.localidade
            );
            this.formulario.controls["estado"].setValue(resultadoJson.uf);
            this.formulario.controls["logradouro"].setValue(
              resultadoJson.logradouro
            );
            this.disableEndereco(true);
          }
        },
        (erro) => {
          this.erroAoBuscarCep();
        }
      );
    } else {
      this.preencherComNullEndereco();
      this.disableEndereco(false);
    }
  }

  public retirarEspacamentoEmail(): void {
    if (this.formulario.controls["email"].value)
      this.formulario.controls["email"].setValue(
        this.formulario.controls["email"].value.replace(/\s+/g, "")
      );
  }

  public validarEmail(event): void {
    if (event.target.value && !event.target.value.includes("@")) {
      this.mensagens.mensagemError("E-mail inválido.");
      this.formulario.controls["email"].setValue(null);
      return;
    }
  }

  private erroAoBuscarCep(): void {
    this.mensagens.mensagemAlerta(
      "Cep não encontrado, por favor insira os dados manualmente."
    );
    this.preencherComNullEndereco();
    this.disableEndereco(false);
  }

  private preencherComNullEndereco(): void {
    this.formulario.controls["bairro"].setValue(null);
    this.formulario.controls["cidade"].setValue(null);
    this.formulario.controls["estado"].setValue(null);
    this.formulario.controls["logradouro"].setValue(null);
  }

  private disableEndereco(disable: boolean): void {
    if (disable) {
      this.formulario.controls["bairro"].disable();
      this.formulario.controls["cidade"].disable();
      this.formulario.controls["estado"].disable();
      this.formulario.controls["logradouro"].disable();
    } else {
      this.formulario.controls["bairro"].enable();
      this.formulario.controls["cidade"].enable();
      this.formulario.controls["estado"].enable();
      this.formulario.controls["logradouro"].enable();
    }
  }

  public cadastrar(): void {
    if (this.formulario.value) {
      if (
        this.formulario.value.dataNascimento &&
        !DateUtil.verificarIsDataValida(this.formulario.value.dataNascimento)
      ) {
        this.mensagens.mensagemError(
          "A data informada no campo 'Data de nascimento' não é válida."
        );
      } else {
        this.disableEndereco(false);
        this.assistido = AssistidoMapper.formularioToAssistido(
          this.formulario.value
        );

        this.assistidoService.adicionarOuAtualizar(
          this.assistido,
          "Cadastro realizado com sucesso!"
        );

        this.disableEndereco(true);
        this.inicializar();
      }
    }
  }
}
