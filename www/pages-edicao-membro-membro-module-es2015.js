(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edicao-membro-membro-module"],{

/***/ "2r89":
/*!******************************************************!*\
  !*** ./src/app/pages/edicao/membro/membro.module.ts ***!
  \******************************************************/
/*! exports provided: MembroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroPageModule", function() { return MembroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _membro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./membro-routing.module */ "5g7D");
/* harmony import */ var _membro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./membro.page */ "pzDh");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "/oCc");








let MembroPageModule = class MembroPageModule {
};
MembroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _membro_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembroPageRoutingModule"]
        ],
        declarations: [_membro_page__WEBPACK_IMPORTED_MODULE_6__["MembroPage"]]
    })
], MembroPageModule);



/***/ }),

/***/ "5g7D":
/*!**************************************************************!*\
  !*** ./src/app/pages/edicao/membro/membro-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MembroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroPageRoutingModule", function() { return MembroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _membro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./membro.page */ "pzDh");




const routes = [
    {
        path: '',
        component: _membro_page__WEBPACK_IMPORTED_MODULE_3__["MembroPage"]
    }
];
let MembroPageRoutingModule = class MembroPageRoutingModule {
};
MembroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MembroPageRoutingModule);



/***/ }),

/***/ "T/z0":
/*!******************************************************!*\
  !*** ./src/app/pages/edicao/membro/membro.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content,\nion-item,\nion-input,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-select,\nion-input,\n.titulo-dado,\n.titulo-dado-select-acesso,\n.titulo-dado-select,\nh2 {\n  color: #2e2e3c;\n}\n\nion-title,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-input {\n  text-transform: uppercase;\n  font-size: 9pt;\n}\n\n#email {\n  text-transform: lowercase;\n}\n\nion-select {\n  font-size: 10pt;\n}\n\n#cabecalho {\n  --background: #2e2e3c;\n  color: #fff;\n}\n\n.titulo-dado {\n  font-size: 11pt;\n}\n\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-size: 8.3pt;\n}\n\n.titulo-dado-select {\n  margin-left: 5.3%;\n}\n\n.titulo-dado-select-acesso {\n  margin-left: 1%;\n}\n\n.titulo-dado-batismo {\n  margin-left: 4%;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\nspan {\n  color: #eb445a;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lbWJyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0VBUUksZ0NBQUE7QUFDSjs7QUFFQTs7O0VBR0kscUJBQUE7QUFDSjs7QUFFQTs7Ozs7O0VBTUksY0FBQTtBQUNKOztBQUVBOztFQUVJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTs7O0VBR0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJtZW1icm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsXG5pb24taXRlbSxcbmlvbi1pbnB1dCxcbmlvbi1zZWxlY3QsXG4udGl0dWxvLWRhZG8sXG4udGl0dWxvLWRhZG8tc2VsZWN0LFxuLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28sXG4udGl0dWxvLWRhZG8tYmF0aXNtbyB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1jb250ZW50LFxuaW9uLWl0ZW0sXG4jcm9kYXBlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbmlvbi1zZWxlY3QsXG5pb24taW5wdXQsXG4udGl0dWxvLWRhZG8sXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcbi50aXR1bG8tZGFkby1zZWxlY3QsXG5oMiB7XG4gICAgY29sb3I6ICMyZTJlM2M7XG59XG5cbmlvbi10aXRsZSxcbmgyIHtcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDlwdDtcbn1cblxuI2VtYWlsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDEwcHQ7XG59XG5cbiNjYWJlY2FsaG8ge1xuICAgIC0tYmFja2dyb3VuZDogIzJlMmUzYztcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpdHVsby1kYWRvIHtcbiAgICBmb250LXNpemU6IDExcHQ7XG59XG5cbi50aXR1bG8tZGFkby1zZWxlY3QsXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcbi50aXR1bG8tZGFkby1iYXRpc21vIHtcbiAgICBmb250LXNpemU6IDguM3B0O1xufVxuXG4udGl0dWxvLWRhZG8tc2VsZWN0IHtcbiAgICBtYXJnaW4tbGVmdDogNS4zJTtcbn1cblxuLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28ge1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbn1cblxuLnRpdHVsby1kYWRvLWJhdGlzbW8ge1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbn1cblxuc3BhbiB7XG4gICAgY29sb3I6ICNlYjQ0NWE7XG59XG5cbjo6bmctZGVlcCAubXljb21wb25lbnQtd2lkZXItcG9wb3ZlciB7XG4gICAgLS13aWR0aDogOTUlO1xuICAgIC0tbWF4LXdpZHRoOiA2MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "pzDh":
/*!****************************************************!*\
  !*** ./src/app/pages/edicao/membro/membro.page.ts ***!
  \****************************************************/
/*! exports provided: MembroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroPage", function() { return MembroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_membro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./membro.page.html */ "yETG");
/* harmony import */ var _membro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./membro.page.scss */ "T/z0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_mapper_Membro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/mapper/Membro */ "JpJ2");
/* harmony import */ var src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicos/ConsultaCEP */ "Gchg");
/* harmony import */ var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicos/Membro */ "fX5e");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/util/InformacoesPessoaisUtil */ "0z2X");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");
/* harmony import */ var src_app_validador_ValidadorInformacoesPessoais__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/validador/ValidadorInformacoesPessoais */ "VFuG");














let MembroPage = class MembroPage {
    constructor(formulador, membroService, aviso, consultaCep, router) {
        this.formulador = formulador;
        this.membroService = membroService;
        this.aviso = aviso;
        this.consultaCep = consultaCep;
        this.router = router;
        this.estadoCivil = [];
        this.escolaridade = [];
        this.desabilitarCampoEmail = true;
        const nav = this.router.getCurrentNavigation();
        this.membro = nav.extras.state.content;
        this.ajustarDatas();
        this.inicializar();
    }
    inicializar() {
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_12__["MensagensUtil"](this.aviso);
        this.estadoCivil = src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_11__["InformacoesPessoaisUtil"].estadoCivil();
        this.escolaridade = src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_11__["InformacoesPessoaisUtil"].escolaridade();
        this.criarFormulario();
    }
    ajustarDatas() {
        if (this.membro.dataBatismo)
            this.membro.dataBatismo = this.membro.dataBatismo.includes('/') ? this.membro.dataBatismo : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.membro.dataBatismo);
        if (this.membro.dataNascimento)
            this.membro.dataNascimento = this.membro.dataNascimento.includes('/') ? this.membro.dataNascimento : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.membro.dataNascimento);
        if (this.membro.membroDesde)
            this.membro.membroDesde = this.membro.membroDesde.includes('/') ? this.membro.membroDesde : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.membro.membroDesde);
    }
    criarFormulario() {
        this.formulario = this.formulador.group({
            key: [this.membro.key, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cpf: [this.membro.cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            nomeCompleto: [this.membro.nomeCompleto, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            dataNascimento: [this.membro.dataNascimento, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            telefone: [this.membro.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            whatsapp: [this.membro.whatsapp],
            email: [this.membro.email],
            profissao: [this.membro.profissao, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            estadoCivil: [this.membro.estadoCivil, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            escolaridade: [this.membro.escolaridade, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            trabalhandoAtualmente: [
                this.membro.trabalhandoAtualmente,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ],
            classificacao: [
                this.membro.classificacao,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ],
            dataBatismo: [this.membro.dataBatismo],
            membroDesde: [this.membro.membroDesde],
            cep: [this.membro.endereco.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            logradouro: [this.membro.endereco.logradouro, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            numero: [this.membro.endereco.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            complemento: [this.membro.endereco.complemento],
            bairro: [this.membro.endereco.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cidade: [this.membro.endereco.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            estado: [this.membro.endereco.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            perfil: [this.membro.perfil, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            senha: [this.membro.senha, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
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
                        this.formulario.controls['bairro'].setValue(resultadoJson.bairro);
                        this.formulario.controls['cidade'].setValue(resultadoJson.localidade);
                        this.formulario.controls['estado'].setValue(resultadoJson.uf);
                        this.formulario.controls['logradouro'].setValue(resultadoJson.logradouro);
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
    validarCpf(event) {
        if (event.target.value)
            if (!src_app_validador_ValidadorInformacoesPessoais__WEBPACK_IMPORTED_MODULE_13__["ValidadorInformacoesPessoais"].cpfCnpjIsValid(event.target.value)) {
                this.mensagens.mensagemError('CPF inválido.');
                this.formulario.controls['cpf'].setValue(null);
                this.formulario.controls['senha'].setValue(null);
                return;
            }
            else {
                this.formulario.controls['senha'].setValue(event.target.value.replace('.', '').replace('.', '').replace('-', ''));
            }
    }
    validarEmail(event) {
        if (event.target.value && !event.target.value.includes('@')) {
            this.mensagens.mensagemError('E-mail inválido.');
            this.formulario.controls['email'].setValue(null);
            return;
        }
    }
    validarDataNascimento(event) {
        if (event.target.value)
            if (!src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isIdadeMaiorDozeAnos(event.target.value)) {
                this.mensagens.mensagemError('De acordo com estatuto da IBC, os novos membros deverão ter ao mínimo 12 anos de idade.');
                this.formulario.controls['dataNascimento'].setValue(null);
                return;
            }
    }
    retirarEspacamentoEmail() {
        if (this.formulario.controls['email'].value)
            this.formulario.controls['email'].setValue(this.formulario.controls['email'].value.replace(/\s+/g, ''));
    }
    preencherComNullEndereco() {
        this.formulario.controls['bairro'].setValue(null);
        this.formulario.controls['cidade'].setValue(null);
        this.formulario.controls['estado'].setValue(null);
        this.formulario.controls['logradouro'].setValue(null);
    }
    erroAoBuscarCep() {
        this.mensagens.mensagemAlerta('Cep não encontrado, por favor insira os dados manualmente.');
        this.preencherComNullEndereco();
        this.disableEndereco(false);
    }
    disableEndereco(disable) {
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
    editar() {
        if (this.formulario.value) {
            if (this.formulario.value.dataBatismo &&
                !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.dataBatismo)) {
                this.mensagens.mensagemError("A data do campo'Data de Batismo' informada não é válida.");
            }
            else if (this.formulario.value.membroDesde &&
                !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.membroDesde)) {
                this.mensagens.mensagemError(" A data do campo 'Membro desde' informada não é válida.");
            }
            else if (this.formulario.value.dataNascimento &&
                !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.dataNascimento)) {
                this.mensagens.mensagemError(" A data do campo 'Data de nascimento' informada não é válida.");
            }
            else if (this.formulario.value.dataBatismo &&
                this.formulario.value.membroDesde) {
                if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataFutura(this.formulario.value.dataBatismo) ||
                    src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataFutura(this.formulario.value.membroDesde)) {
                    this.mensagens.mensagemError("Não são permitidas datas futuras para o campo 'Data do Batismo' e o campo 'Membro desde.'");
                }
                else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataDoisMaiorDataUm(this.formulario.value.dataBatismo, this.formulario.value.membroDesde) &&
                    !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDatasIguais(this.formulario.value.dataBatismo, this.formulario.value.membroDesde)) {
                    this.mensagens.mensagemError("A data 'Membro desde' não pode ser maior que a 'Data do Batismo'.");
                }
            }
            else {
                this.disableEndereco(false);
                this.membro = src_app_mapper_Membro__WEBPACK_IMPORTED_MODULE_7__["MembroMapper"].formularioToMembro(this.formulario.value);
                this.membroService.adicionarOuAtualizar(this.membro);
                this.mensagens.mensagemSucesso('Atualização realizada com sucesso!');
            }
        }
    }
};
MembroPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_9__["MembroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_8__["ConsultaCEPService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MembroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-membro',
        template: _raw_loader_membro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_membro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MembroPage);



/***/ }),

/***/ "yETG":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edicao/membro/membro.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Editar membro</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"formulario\">\n        <ion-grid>\n            <h2>Informações Pessoais</h2>\n            <ion-item class=\"row-item\">\n                <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome Completo <span>*</span></ion-label>\n                <ion-input mode=\"md\" formControlName=\"nomeCompleto\" type=\"text\" maxlength=\"100\"></ion-input>\n            </ion-item>\n\n            <ion-row>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data de nascimento <span>*</span></ion-label>\n                        <ion-input mode=\"md\" (ionBlur)=\"validarDataNascimento($event)\" formControlName=\"dataNascimento\" [brmasker]=\"{mask:'00/00/0000', len:10}\">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Telefone <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"telefone\" [brmasker]=\"{phone: true}\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Whatsapp </ion-label>\n                        <ion-input mode=\"md\" formControlName=\"whatsapp\" [brmasker]=\"{phone: true}\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">E-mail </ion-label>\n                        <ion-input [disabled]=\"true\" mode=\"md\" id=\"email\" (keyup)=\"retirarEspacamentoEmail()\" (ionBlur)=\"validarEmail($event)\" formControlName=\"email\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <br />\n            <ion-row>\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Estado Civil<span>*</span></ion-label>\n                    <ion-select placeholder=\"Selecione uma opção\" formControlName=\"estadoCivil\" multiple=\"false\" interface=\"action-sheet\">\n                        <ion-select-option *ngFor=\"let item of estadoCivil\" [value]=\"item.id\">\n                            {{item.valor}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-col>\n\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Escolaridade<span>*</span></ion-label>\n                    <ion-select placeholder=\"Selecione uma opção\" formControlName=\"escolaridade\" multiple=\"false\" interface=\"popover\" [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\n                        <ion-select-option *ngFor=\"let item of escolaridade\" [value]=\"item.id\">\n                            {{item.valor}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-col>\n\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Trabalhando atualmente <span>*</span></ion-label>\n                    <ion-select placeholder=\"Selecione uma opção\" interface=\"action-sheet\" formControlName=\"trabalhandoAtualmente\">\n                        <ion-select-option value=\"true\">Sim</ion-select-option>\n                        <ion-select-option value=\"false\">Não</ion-select-option>\n                    </ion-select>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Profissão <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"profissao\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Classificação <span>*</span></ion-label>\n                    <ion-select placeholder=\"Selecione uma opção\" interface=\"action-sheet\" formControlName=\"classificacao\">\n                        <ion-select-option value=\"Membro\">Membro</ion-select-option>\n                        <ion-select-option value=\"Congregado\">Congregado</ion-select-option>\n                        <ion-select-option value=\"Voluntario\">Voluntário</ion-select-option>\n                    </ion-select>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data do batismo </ion-label>\n                        <ion-input mode=\"md\" formControlName=\"dataBatismo\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Membro desde </ion-label>\n                        <ion-input mode=\"md\" formControlName=\"membroDesde\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <h2>Endereço</h2>\n            <ion-row>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">CEP <span>*</span></ion-label>\n                        <ion-input mode=\"md\" (ionBlur)=\"buscarEndereco($event)\" formControlName=\"cep\" maxlength=\"9\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Logradouro <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"logradouro\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Número <span>*</span></ion-label>\n                        <ion-input mode=\"md\" [min]=\"0\" [max]=\"99999\" formControlName=\"numero\" type=\"number\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Complemento</ion-label>\n                        <ion-input mode=\"md\" formControlName=\"complemento\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Bairro <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"bairro\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Cidade <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"cidade\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Estado <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"estado\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <h2>Informações de Acesso </h2>\n            <ion-row>\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select-acesso\" position=\"stacked\">Perfil<span>*</span></ion-label>\n                    <ion-select placeholder=\"Selecione uma opção\" interface=\"action-sheet\" formControlName=\"perfil\">\n                        <ion-select-option value=\"ADMIN\">Administrador</ion-select-option>\n                        <ion-select-option value=\"FIN\">Financeiro</ion-select-option>\n                        <ion-select-option value=\"MEM\">Membro</ion-select-option>\n                        <ion-select-option value=\"SEC\">Secretariado</ion-select-option>\n                    </ion-select>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar no-padding id=\"rodape\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-button mode=\"md\" (click)=\"editar()\" [disabled]=\"formulario.invalid\" type=\"submit\" fill=\"solid\" expand=\"full\"> Atualizar</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=pages-edicao-membro-membro-module-es2015.js.map