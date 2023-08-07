import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, ToastController } from "@ionic/angular";
import { MembroMapper } from "src/app/mapper/Membro";
import { Endereco } from "src/app/modelo/Endereco";
import { Membro } from "src/app/modelo/Membro";
import { AutenticacaoService } from "src/app/servicos/Autenticacao";
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

  constructor(
    private formulador: FormBuilder,
    private membroService: MembroService,
    private autenticacao: AutenticacaoService,
    private aviso: ToastController,
    private consultaCep: ConsultaCEPService,
    private alertController: AlertController,
    private route: Router
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.estadoCivil = InformacoesPessoaisUtil.estadoCivil();
    this.escolaridade = InformacoesPessoaisUtil.escolaridade();

    this.inicializar();
  }

  private inicializar(): void {
    this.membro = new Membro();
    this.membro.endereco = new Endereco();
    this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formulario = this.formulador.group({
      cpf: [this.membro.cpf],
      rg: [this.membro.rg],
      nomeCompleto: [this.membro.nomeCompleto, Validators.required],
      dataNascimento: [this.membro.dataNascimento, Validators.required],
      telefone: [this.membro.telefone, Validators.required],
      whatsapp: [this.membro.whatsapp],
      email: [this.membro.email, Validators.required],
      profissao: [this.membro.profissao, Validators.required],
      estadoCivil: [this.membro.estadoCivil, Validators.required],
      escolaridade: [this.membro.escolaridade, Validators.required],
      trabalhandoAtualmente: [
        this.membro.trabalhandoAtualmente,
        Validators.required,
      ],
      membroTransformar: [
        this.membro.membroTransformar,
        Validators.required,
      ],
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
        return;
      }
  }

  public validarRG(event): void {
    if (event.target.value)
    console.log(event.target.value)
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

  public async cadastrar() {
    if (this.formulario.value) {
      if (
        this.formulario.value.dataBatismo &&
        !DateUtil.verificarIsDataValida(this.formulario.value.dataBatismo)
      ) {
        this.mensagens.mensagemError(
          "A data informada no campo 'Data de Batismo' não é válida."
        );
      } else if (
        this.formulario.value.membroDesde &&
        !DateUtil.verificarIsDataValida(this.formulario.value.membroDesde)
      ) {
        this.mensagens.mensagemError(
          "A data informada no campo 'Membro desde' não é válida."
        );
      } else if (
        this.formulario.value.dataNascimento &&
        !DateUtil.verificarIsDataValida(this.formulario.value.dataNascimento)
      ) {
        this.mensagens.mensagemError(
          "A data informada no campo 'Data de nascimento' não é válida."
        );
      } else {
        this.disableEndereco(false);
        this.membro = MembroMapper.formularioToMembro(this.formulario.value);
        const usuarioCriado: any = await this.autenticacao.criarUsuario(
          this.membro
        );

        if (usuarioCriado) {

          if(usuarioCriado.message){
            return this.mensagens.mensagemError(
              "E-mail já cadastrado na base de dados."
            );
          }

          this.membro.uId = usuarioCriado.user.uid;
          this.membroService.adicionarOuAtualizar(this.membro, "Membro atualizado com sucesso!");
          await this.verResultado();
        }
      }
    }
  }

  public async confirmarCadastro() {
    const alert = await this.alertController.create({
      header: "Confirmação de cadastro",
      message:
        "Tem certeza que deseja concluir o cadastro? Após isso, <b>não será possível alterar o e-mail cadastrado</b>.",
      buttons: [
        {
          text: "Não",
          handler: () => {
            this.alertController.dismiss();
          },
        },
        {
          text: "Sim",
          handler: () => {
            this.cadastrar();
          },
        },
      ],
    });
    await alert.present();
  }

  private async verResultado() {
    const alert = await this.alertController.create({
      header: "Confirmação de cadastro",
      message: "O membro foi cadastrado com sucesso. O que deseja fazer?",
      buttons: [
        {
          text: "Cadastrar Um Novo Membro",
          handler: () => {
            this.alertController.dismiss();
            this.disableEndereco(true);
            this.inicializar();
          },
        },
        {
          text: "Ver Membro Cadastrado",
          handler: () => {
            this.verMembroCadastrado();
          },
        },
      ],
    });

    await alert.present();
  }

  private verMembroCadastrado() {
    this.route.navigateByUrl("lista/membro");
  }
}
