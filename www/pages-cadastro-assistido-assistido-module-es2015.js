(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-assistido-assistido-module"],{

/***/ "69od":
/*!************************************************************!*\
  !*** ./src/app/pages/cadastro/assistido/assistido.page.ts ***!
  \************************************************************/
/*! exports provided: AssistidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistidoPage", function() { return AssistidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_assistido_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./assistido.page.html */ "zVJV");
/* harmony import */ var _assistido_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assistido.page.scss */ "wio9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_mapper_Assistido__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/mapper/Assistido */ "LNr/");
/* harmony import */ var src_app_modelo_Assistido__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modelo/Assistido */ "MXSQ");
/* harmony import */ var src_app_modelo_Endereco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modelo/Endereco */ "/FaQ");
/* harmony import */ var src_app_servicos_Assistido__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicos/Assistido */ "cn//");
/* harmony import */ var src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/servicos/ConsultaCEP */ "Gchg");
/* harmony import */ var src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/servicos/Projeto */ "MoJo");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/util/InformacoesPessoaisUtil */ "0z2X");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");
/* harmony import */ var src_app_validador_ValidadorInformacoesPessoais__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/validador/ValidadorInformacoesPessoais */ "VFuG");
/* harmony import */ var _modelo_Familiar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../modelo/Familiar */ "N3aT");

















let AssistidoPage = class AssistidoPage {
    constructor(formulador, aviso, consultaCep, assistidoService, projetoService) {
        this.formulador = formulador;
        this.aviso = aviso;
        this.consultaCep = consultaCep;
        this.assistidoService = assistidoService;
        this.projetoService = projetoService;
        this.estadoCivil = [];
        this.escolaridade = [];
        this.familiar = new _modelo_Familiar__WEBPACK_IMPORTED_MODULE_16__["Familiar"]();
    }
    get familiares() {
        return this.formulario.controls["familiares"];
    }
    adicionarFamiliar() {
        this.familiares.push(this.novoFamiliarForm());
    }
    removerFamiliar(index) {
        this.familiares.removeAt(index);
    }
    novoFamiliarForm() {
        return this.formulador.group({
            nome: [this.familiar.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            parentesco: [this.familiar.parentesco, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            beneficiadoPelaIgreja: [
                this.familiar.beneficiadoPelaIgreja,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ],
            descricaoBeneficios: [this.familiar.descricaoBeneficios],
            precisaAjuda: [this.familiar.precisaAjuda],
        });
    }
    ngOnInit() {
        this.inicializar();
        this.inicializarProjetos();
    }
    inicializar() {
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_14__["MensagensUtil"](this.aviso);
        this.estadoCivil = src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_13__["InformacoesPessoaisUtil"].estadoCivil();
        this.escolaridade = src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_13__["InformacoesPessoaisUtil"].escolaridade();
        this.assistido = new src_app_modelo_Assistido__WEBPACK_IMPORTED_MODULE_7__["Assistido"]();
        this.assistido.endereco = new src_app_modelo_Endereco__WEBPACK_IMPORTED_MODULE_8__["Endereco"]();
        this.criarFormulario();
    }
    inicializarProjetos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.listaProjetosObservable = this.projetoService.listar();
            this.listaProjetosObservable.subscribe((response) => {
                this.listaProjetos = response.filter((projeto) => projeto.situacao === "Ativo");
                this.listaProjetosFiltrados = this.listaProjetos;
                this.numTotalProjetos = this.listaProjetos.length;
                this.listaProjetosFiltrados.sort((a, b) => a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0);
            });
        });
    }
    criarFormulario() {
        this.formulario = this.formulador.group({
            nomeCompleto: [this.assistido.nomeCompleto, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataNascimento: [this.assistido.dataNascimento, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            telefone: [this.assistido.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            whatsapp: [this.assistido.whatsapp],
            email: [this.assistido.email],
            profissao: [this.assistido.profissao, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            estadoCivil: [this.assistido.estadoCivil, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            escolaridade: [this.assistido.escolaridade, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            observacoes: [this.assistido.observacoes],
            trabalhandoAtualmente: [
                this.assistido.trabalhandoAtualmente,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ],
            cep: [this.assistido.endereco.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            logradouro: [this.assistido.endereco.logradouro, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numero: [this.assistido.endereco.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            complemento: [this.assistido.endereco.complemento],
            bairro: [this.assistido.endereco.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cidade: [this.assistido.endereco.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            estado: [this.assistido.endereco.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            projetosAssistidos: [this.assistido.projetos],
            cpf: [this.assistido.cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rg: [this.assistido.rg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            familiares: this.formulador.array([]),
        });
    }
    validarCpf(event) {
        if (event.target.value)
            if (!src_app_validador_ValidadorInformacoesPessoais__WEBPACK_IMPORTED_MODULE_15__["ValidadorInformacoesPessoais"].cpfCnpjIsValid(event.target.value)) {
                this.mensagens.mensagemError("CPF inválido.");
                this.formulario.controls["cpf"].setValue(null);
                this.formulario.controls["senha"].setValue(null);
                return;
            }
            else {
                this.formulario.controls["senha"].setValue(event.target.value.replace(".", "").replace(".", "").replace("-", ""));
            }
    }
    buscarEndereco(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.target.value) {
                yield this.consultaCep.buscaEndereco(event.target.value).then((data) => {
                    const resultadoJson = data;
                    if (resultadoJson.erro) {
                        this.erroAoBuscarCep();
                    }
                    else if (resultadoJson) {
                        this.formulario.controls["bairro"].setValue(resultadoJson.bairro);
                        this.formulario.controls["cidade"].setValue(resultadoJson.localidade);
                        this.formulario.controls["estado"].setValue(resultadoJson.uf);
                        this.formulario.controls["logradouro"].setValue(resultadoJson.logradouro);
                        this.disableEndereco(true);
                    }
                }, (erro) => {
                    this.erroAoBuscarCep();
                });
            }
            else {
                this.preencherComNullEndereco();
                this.disableEndereco(false);
            }
        });
    }
    retirarEspacamentoEmail() {
        if (this.formulario.controls["email"].value)
            this.formulario.controls["email"].setValue(this.formulario.controls["email"].value.replace(/\s+/g, ""));
    }
    validarEmail(event) {
        if (event.target.value && !event.target.value.includes("@")) {
            this.mensagens.mensagemError("E-mail inválido.");
            this.formulario.controls["email"].setValue(null);
            return;
        }
    }
    erroAoBuscarCep() {
        this.mensagens.mensagemAlerta("Cep não encontrado, por favor insira os dados manualmente.");
        this.preencherComNullEndereco();
        this.disableEndereco(false);
    }
    preencherComNullEndereco() {
        this.formulario.controls["bairro"].setValue(null);
        this.formulario.controls["cidade"].setValue(null);
        this.formulario.controls["estado"].setValue(null);
        this.formulario.controls["logradouro"].setValue(null);
    }
    disableEndereco(disable) {
        if (disable) {
            this.formulario.controls["bairro"].disable();
            this.formulario.controls["cidade"].disable();
            this.formulario.controls["estado"].disable();
            this.formulario.controls["logradouro"].disable();
        }
        else {
            this.formulario.controls["bairro"].enable();
            this.formulario.controls["cidade"].enable();
            this.formulario.controls["estado"].enable();
            this.formulario.controls["logradouro"].enable();
        }
    }
    cadastrar() {
        if (this.formulario.value) {
            if (this.formulario.value.dataNascimento &&
                !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_12__["DateUtil"].verificarIsDataValida(this.formulario.value.dataNascimento)) {
                this.mensagens.mensagemError("A data informada no campo 'Data de nascimento' não é válida.");
            }
            else {
                this.disableEndereco(false);
                this.assistido = src_app_mapper_Assistido__WEBPACK_IMPORTED_MODULE_6__["AssistidoMapper"].formularioToAssistido(this.formulario.value);
                this.assistidoService.adicionarOuAtualizar(this.assistido, "Cadastro realizado com sucesso!");
                this.disableEndereco(true);
                this.inicializar();
            }
        }
    }
};
AssistidoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_10__["ConsultaCEPService"] },
    { type: src_app_servicos_Assistido__WEBPACK_IMPORTED_MODULE_9__["AssistidoService"] },
    { type: src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_11__["ProjetoService"] }
];
AssistidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-assistido",
        template: _raw_loader_assistido_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assistido_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AssistidoPage);



/***/ }),

/***/ "DElZ":
/*!**************************************************************!*\
  !*** ./src/app/pages/cadastro/assistido/assistido.module.ts ***!
  \**************************************************************/
/*! exports provided: AssistidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistidoPageModule", function() { return AssistidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _assistido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assistido-routing.module */ "LTYl");
/* harmony import */ var _assistido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assistido.page */ "69od");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "/oCc");








let AssistidoPageModule = class AssistidoPageModule {
};
AssistidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assistido_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssistidoPageRoutingModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_assistido_page__WEBPACK_IMPORTED_MODULE_6__["AssistidoPage"]]
    })
], AssistidoPageModule);



/***/ }),

/***/ "LTYl":
/*!**********************************************************************!*\
  !*** ./src/app/pages/cadastro/assistido/assistido-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AssistidoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistidoPageRoutingModule", function() { return AssistidoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _assistido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assistido.page */ "69od");




const routes = [
    {
        path: '',
        component: _assistido_page__WEBPACK_IMPORTED_MODULE_3__["AssistidoPage"]
    }
];
let AssistidoPageRoutingModule = class AssistidoPageRoutingModule {
};
AssistidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssistidoPageRoutingModule);



/***/ }),

/***/ "N3aT":
/*!************************************!*\
  !*** ./src/app/modelo/Familiar.ts ***!
  \************************************/
/*! exports provided: Familiar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Familiar", function() { return Familiar; });
class Familiar {
}


/***/ }),

/***/ "wio9":
/*!**************************************************************!*\
  !*** ./src/app/pages/cadastro/assistido/assistido.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content,\nion-item,\nion-input,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-item {\n  width: 100%;\n}\n\nion-card {\n  width: 100%;\n}\n\nion-button {\n  margin-left: 89%;\n}\n\nion-card-content {\n  width: 100%;\n}\n\nion-select,\nion-input,\n.titulo-dado,\n.titulo-dado-select-acesso,\n.titulo-dado-select,\nh2 {\n  color: #2e2e3c;\n}\n\nion-list {\n  background-color: #e6e6e6;\n}\n\nion-title,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-input {\n  text-transform: uppercase;\n  font-size: 11pt;\n}\n\n#email {\n  text-transform: lowercase;\n}\n\nion-select {\n  font-size: 10pt;\n}\n\n#cabecalho {\n  --background: #2e2e3c;\n  color: #fff;\n}\n\n.titulo-dado {\n  font-size: 13pt;\n}\n\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-size: 10pt;\n}\n\n.titulo-dado-select {\n  margin-left: 5.3%;\n}\n\n.titulo-dado-select-acesso {\n  margin-left: 2.5%;\n}\n\n.titulo-dado-batismo {\n  margin-left: 4%;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\nspan {\n  color: #eb445a;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzaXN0aWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUFRRSxnQ0FBQTtBQUNGOztBQUVBOzs7RUFHRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTs7Ozs7O0VBTUUsY0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiYXNzaXN0aWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LFxyXG5pb24taXRlbSxcclxuaW9uLWlucHV0LFxyXG5pb24tc2VsZWN0LFxyXG4udGl0dWxvLWRhZG8sXHJcbi50aXR1bG8tZGFkby1zZWxlY3QsXHJcbi50aXR1bG8tZGFkby1zZWxlY3QtYWNlc3NvLFxyXG4udGl0dWxvLWRhZG8tYmF0aXNtbyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQsXHJcbmlvbi1pdGVtLFxyXG4jcm9kYXBlIHtcclxuICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogODklO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNlbGVjdCxcclxuaW9uLWlucHV0LFxyXG4udGl0dWxvLWRhZG8sXHJcbi50aXR1bG8tZGFkby1zZWxlY3QtYWNlc3NvLFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LFxyXG5oMiB7XHJcbiAgY29sb3I6ICMyZTJlM2M7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG59XHJcblxyXG5pb24tdGl0bGUsXHJcbmgyIHtcclxuICBmb250LWZhbWlseTogXCJMZXhlbmRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTFwdDtcclxufVxyXG5cclxuI2VtYWlsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbiNjYWJlY2FsaG8ge1xyXG4gIC0tYmFja2dyb3VuZDogIzJlMmUzYztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRpdHVsby1kYWRvIHtcclxuICBmb250LXNpemU6IDEzcHQ7XHJcbn1cclxuXHJcbi50aXR1bG8tZGFkby1zZWxlY3QsXHJcbi50aXR1bG8tZGFkby1zZWxlY3QtYWNlc3NvLFxyXG4udGl0dWxvLWRhZG8tYmF0aXNtbyB7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4udGl0dWxvLWRhZG8tc2VsZWN0IHtcclxuICBtYXJnaW4tbGVmdDogNS4zJTtcclxufVxyXG5cclxuLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG59XHJcblxyXG4udGl0dWxvLWRhZG8tYmF0aXNtbyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAxM3B0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBjb2xvcjogI2ViNDQ1YTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5teWNvbXBvbmVudC13aWRlci1wb3BvdmVyIHtcclxuICAtLXdpZHRoOiA5NSU7XHJcbiAgLS1tYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "zVJV":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/assistido/assistido.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Cadastro de assistido</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"formulario\">\r\n    <ion-grid>\r\n      <h2>Informações Pessoais</h2>\r\n      <ion-item class=\"row-item\">\r\n        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n          >Nome Completo <span>*</span></ion-label\r\n        >\r\n        <ion-input\r\n          mode=\"md\"\r\n          formControlName=\"nomeCompleto\"\r\n          type=\"text\"\r\n          maxlength=\"100\"\r\n        ></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Data de nascimento <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              placeholder=\"dd/mm/yyyy\"\r\n              formControlName=\"dataNascimento\"\r\n              [brmasker]=\"{mask:'00/00/0000', len:10}\"\r\n            >\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Telefone <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              formControlName=\"telefone\"\r\n              [brmasker]=\"{phone: true}\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Whatsapp\r\n            </ion-label>\r\n            <ion-input\r\n              mode=\"md\"\r\n              formControlName=\"whatsapp\"\r\n              [brmasker]=\"{phone: true}\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >E-mail\r\n            </ion-label>\r\n            <ion-input\r\n              mode=\"md\"\r\n              id=\"email\"\r\n              (keyup)=\"retirarEspacamentoEmail()\"\r\n              (ionBlur)=\"validarEmail($event)\"\r\n              formControlName=\"email\"\r\n              maxlength=\"100\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br />\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\"\r\n            >Estado Civil<span>*</span></ion-label\r\n          >\r\n          <ion-select\r\n            placeholder=\"Selecione uma opção\"\r\n            formControlName=\"estadoCivil\"\r\n            multiple=\"false\"\r\n            interface=\"action-sheet\"\r\n          >\r\n            <ion-select-option\r\n              *ngFor=\"let item of estadoCivil\"\r\n              [value]=\"item.id\"\r\n            >\r\n              {{item.valor}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\"\r\n            >Escolaridade<span>*</span></ion-label\r\n          >\r\n          <ion-select\r\n            placeholder=\"Selecione uma opção\"\r\n            formControlName=\"escolaridade\"\r\n            multiple=\"false\"\r\n            interface=\"popover\"\r\n            [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n          >\r\n            <ion-select-option\r\n              *ngFor=\"let item of escolaridade\"\r\n              [value]=\"item.id\"\r\n            >\r\n              {{item.valor}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\"\r\n            >Trabalhando atualmente <span>*</span></ion-label\r\n          >\r\n          <ion-select\r\n            placeholder=\"Selecione uma opção\"\r\n            interface=\"action-sheet\"\r\n            formControlName=\"trabalhandoAtualmente\"\r\n          >\r\n            <ion-select-option value=\"true\">Sim</ion-select-option>\r\n            <ion-select-option value=\"false\">Não</ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Profissão <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              formControlName=\"profissao\"\r\n              maxlength=\"100\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br />\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Cpf <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              [brmasker]=\"{person: true}\"\r\n              (ionBlur)=\"validarCpf($event)\"\r\n              formControlName=\"cpf\"\r\n              maxlength=\"14\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >RG <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              formControlName=\"rg\"\r\n              maxlength=\"10\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <h2>Endereço</h2>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >CEP <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              (ionBlur)=\"buscarEndereco($event)\"\r\n              formControlName=\"cep\"\r\n              maxlength=\"9\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Logradouro <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              formControlName=\"logradouro\"\r\n              maxlength=\"100\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Número <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              [min]=\"0\"\r\n              [max]=\"99999\"\r\n              formControlName=\"numero\"\r\n              type=\"number\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Complemento</ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              formControlName=\"complemento\"\r\n              maxlength=\"100\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Bairro <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              formControlName=\"bairro\"\r\n              maxlength=\"100\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Cidade <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              formControlName=\"cidade\"\r\n              maxlength=\"100\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Estado <span>*</span></ion-label\r\n            >\r\n            <ion-input\r\n              mode=\"md\"\r\n              formControlName=\"estado\"\r\n              maxlength=\"100\"\r\n              type=\"text\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n              >Observações</ion-label\r\n            >\r\n            <ion-textarea\r\n              mode=\"md\"\r\n              formControlName=\"observacoes\"\r\n              maxlength=\"1000\"\r\n              type=\"text\"\r\n            ></ion-textarea>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <h2>Familiares</h2>\r\n      <ion-row>\r\n        <ion-button (click)=\"adicionarFamiliar()\">Adicionar</ion-button>\r\n        <div formArrayName=\"familiares\">\r\n          <div *ngFor=\"let skill of familiares.controls; let i=index\">\r\n            <div [formGroupName]=\"i\">\r\n              <div style=\"margin-left: 20px\">Familiar - {{i + 1}}</div>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n                      >Nome <span>*</span></ion-label\r\n                    >\r\n                    <ion-input\r\n                      mode=\"md\"\r\n                      formControlName=\"nome\"\r\n                      maxlength=\"100\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n                      >Parentesco <span>*</span></ion-label\r\n                    >\r\n                    <ion-select\r\n                      placeholder=\"Escolha uma opção\"\r\n                      formControlName=\"parentesco\"\r\n                    >\r\n                      <ion-select-option value=\"Pai\">Pai</ion-select-option>\r\n                      <ion-select-option value=\"Mae\">Mãe</ion-select-option>\r\n                      <ion-select-option value=\"Tio\">Tio(a)</ion-select-option>\r\n                      <ion-select-option value=\"Irmao\"\r\n                        >Irmã(o)</ion-select-option\r\n                      >\r\n                      <ion-select-option value=\"Avo\">Avô(ó)</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n                      >Foi beneficiado pela igreja? <span>*</span></ion-label\r\n                    >\r\n                    <ion-select\r\n                      placeholder=\"Escolha uma opção\"\r\n                      formControlName=\"beneficiadoPelaIgreja\"\r\n                    >\r\n                      <ion-select-option value=\"Sim\">Sim</ion-select-option>\r\n                      <ion-select-option value=\"Não\">Não</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n                      >Descrição do Benefício\r\n                    </ion-label>\r\n                    <ion-input\r\n                      mode=\"md\"\r\n                      formControlName=\"descricaoBeneficios\"\r\n                      maxlength=\"100\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\"\r\n                      >Precisa de Ajuda?</ion-label\r\n                    >\r\n                    <ion-input\r\n                      maxlength=\"100\"\r\n                      formControlName=\"precisaAjuda\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-button (click)=\"removerFamiliar(i)\" mode=\"md\"\r\n                      >Remover Familiar</ion-button\r\n                    >\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-row>\r\n      <h2>Projetos Que Ele Participa</h2>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-select\r\n                mode=\"ios\"\r\n                placeholder=\"Selecione os projetos\"\r\n                [multiple]=\"true\"\r\n                formControlName=\"projetosAssistidos\"\r\n              >\r\n                <ion-select-option\r\n                  *ngFor=\"let projeto of listaProjetosFiltrados\"\r\n                  [value]=\"projeto.nome\"\r\n                  >{{projeto.nome}}</ion-select-option\r\n                >\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar no-padding id=\"rodape\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button\r\n            mode=\"md\"\r\n            (click)=\"cadastrar()\"\r\n            [disabled]=\"formulario.invalid\"\r\n            type=\"submit\"\r\n            fill=\"solid\"\r\n            expand=\"full\"\r\n          >\r\n            Cadastrar</ion-button\r\n          >\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=pages-cadastro-assistido-assistido-module-es2015.js.map