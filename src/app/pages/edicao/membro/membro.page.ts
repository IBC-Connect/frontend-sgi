import { AutenticacaoService } from "./../../../servicos/Autenticacao";
import { ChangeDetectorRef, Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { MembroMapper } from "src/app/mapper/Membro";
import { Membro } from "src/app/modelo/Membro";
import { ConsultaCEPService } from "src/app/servicos/ConsultaCEP";
import { MembroService } from "src/app/servicos/Membro";
import { DateUtil } from "src/app/util/DateUtil";
import { InformacoesPessoaisUtil } from "src/app/util/InformacoesPessoaisUtil";
import { MensagensUtil } from "src/app/util/MensagensUtil";
import { ValidadorInformacoesPessoais } from "src/app/validador/ValidadorInformacoesPessoais";

@Component({
  selector: "app-membro",
  templateUrl: "./membro.page.html",
  styleUrls: ["./membro.page.scss"],
})
export class MembroPage {
  formulario: FormGroup;
  membro: Membro;
  mensagens: MensagensUtil;
  estadoCivil: Array<any> = [];
  escolaridade: Array<any> = [];
  dataDeHoje: string;
  desabilitarCampoEmail: boolean = true;

  constructor(
    private formulador: FormBuilder,
    private membroService: MembroService,
    private aviso: ToastController,
    private consultaCep: ConsultaCEPService,
    private router: Router,
    private changes: ChangeDetectorRef,
    private autenticacaoService: AutenticacaoService
  ) {
    const nav = this.router.getCurrentNavigation();
    this.membro = nav.extras.state.content;
    this.ajustarDatas();
    this.inicializar();
  }

  private inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.estadoCivil = InformacoesPessoaisUtil.estadoCivil();
    this.escolaridade = InformacoesPessoaisUtil.escolaridade();
    this.criarFormulario();
  }

  private ajustarDatas(): void {
    if (this.membro.dataBatismo)
      this.membro.dataBatismo = this.membro.dataBatismo.includes("/")
        ? this.membro.dataBatismo
        : DateUtil.dateFormatterBrazil(this.membro.dataBatismo);
    if (this.membro.dataNascimento)
      this.membro.dataNascimento = this.membro.dataNascimento.includes("/")
        ? this.membro.dataNascimento
        : DateUtil.dateFormatterBrazil(this.membro.dataNascimento);
    if (this.membro.membroDesde)
      this.membro.membroDesde = this.membro.membroDesde.includes("/")
        ? this.membro.membroDesde
        : DateUtil.dateFormatterBrazil(this.membro.membroDesde);
  }

  private criarFormulario(): void {
    this.formulario = this.formulador.group({
      key: [this.membro.key, Validators.required],
      cpf: [this.membro.cpf, Validators.required],
      rg: [this.membro.rg],
      nomeCompleto: [this.membro.nomeCompleto, Validators.required],
      dataNascimento: [this.membro.dataNascimento, Validators.required],
      telefone: [this.membro.telefone, Validators.required],
      whatsapp: [this.membro.whatsapp],
      email: [this.membro.email],
      profissao: [this.membro.profissao, Validators.required],
      estadoCivil: [this.membro.estadoCivil, Validators.required],
      escolaridade: [this.membro.escolaridade, Validators.required],
      trabalhandoAtualmente: [
        this.membro.trabalhandoAtualmente,
        Validators.required,
      ],
      membroTransformar: [this.membro.membroTransformar],
      classificacao: [this.membro.classificacao, Validators.required],
      dataBatismo: [this.membro.dataBatismo],
      membroDesde: [this.membro.membroDesde],
      cep: [this.membro.endereco.cep, Validators.required],
      logradouro: [this.membro.endereco.logradouro, Validators.required],
      numero: [this.membro.endereco.numero, Validators.required],
      complemento: [this.membro.endereco.complemento],
      bairro: [this.membro.endereco.bairro, Validators.required],
      cidade: [this.membro.endereco.cidade, Validators.required],
      estado: [this.membro.endereco.estado, Validators.required],
      perfil: [this.membro.perfil, Validators.required],
      senha: [this.membro.senha, Validators.required],
    });
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

  public validarRG(event): void {
    if (event.target.value)
      if (!ValidadorInformacoesPessoais.validarRG(event.target.value)) {
        this.mensagens.mensagemError("RG inválido.");
        this.formulario.controls["rg"].setValue(null);
        return;
      }
  }

  public validarEmail(event): void {
    if (event.target.value && !event.target.value.includes("@")) {
      this.mensagens.mensagemError("E-mail inválido.");
      this.formulario.controls["email"].setValue(null);
      return;
    }
  }

  public validarDataNascimento(event): void {
    if (event.target.value)
      if (!DateUtil.isIdadeMaiorDozeAnos(event.target.value)) {
        this.mensagens.mensagemError(
          "De acordo com estatuto da IBC, os novos membros deverão ter ao mínimo 12 anos de idade."
        );
        this.formulario.controls["dataNascimento"].setValue(null);
        return;
      }
  }

  public retirarEspacamentoEmail(): void {
    if (this.formulario.controls["email"].value)
      this.formulario.controls["email"].setValue(
        this.formulario.controls["email"].value.replace(/\s+/g, "")
      );
  }

  private preencherComNullEndereco(): void {
    this.formulario.controls["bairro"].setValue(null);
    this.formulario.controls["cidade"].setValue(null);
    this.formulario.controls["estado"].setValue(null);
    this.formulario.controls["logradouro"].setValue(null);
  }

  private erroAoBuscarCep(): void {
    this.mensagens.mensagemAlerta(
      "Cep não encontrado, por favor insira os dados manualmente."
    );
    this.preencherComNullEndereco();
    this.disableEndereco(false);
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

  public async editar(): Promise<void> {
    const formulario = this.formulario.value;

    if (!formulario) {
      console.log("O formulário não foi preenchido.");
      return;
    }

    const dataNascimentoValida = DateUtil.verificarIsDataValida(
      formulario.dataNascimento
    );

    if (!dataNascimentoValida) {
      this.mensagens.mensagemError(
        "A data do campo 'Data de nascimento' informada não é válida."
      );
      return;
    }

    if (formulario.dataBatismo && formulario.membroDesde) {
      if (
        DateUtil.isDataDoisMaiorDataUm(
          formulario.dataBatismo,
          formulario.membroDesde
        ) &&
        !DateUtil.isDatasIguais(formulario.dataBatismo, formulario.membroDesde)
      ) {
        this.mensagens.mensagemError(
          "A data 'Membro desde' não pode ser maior que a 'Data do Batismo'."
        );
        return;
      }
    }

    this.disableEndereco(false);
    this.membro = MembroMapper.formularioToMembro(formulario);
    this.membroService.adicionarOuAtualizar(this.membro, "Atualização realizada com sucesso!");
    this.changes.detectChanges();
  }
}
