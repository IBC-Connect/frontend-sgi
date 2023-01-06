(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-evento-evento-module"],{

/***/ "ameo":
/*!********************************************************!*\
  !*** ./src/app/pages/cadastro/evento/evento.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content,\nion-item,\nion-input,\nion-select,\nion-textarea,\n.titulo-dado,\n.titulo-dado-select-acesso {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-select,\nion-input,\nion-textarea,\n.titulo-dado,\n.titulo-dado-select-acesso,\nh2 {\n  color: #2e2e3c;\n}\n\nion-title, h2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-input, ion-textarea {\n  text-transform: uppercase;\n  font-size: 11pt;\n}\n\nion-select {\n  font-size: 10pt;\n}\n\n.titulo-dado {\n  font-size: 13pt;\n}\n\n.titulo-dado-select-acesso {\n  font-size: 10pt;\n  margin-left: 2.5%;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\nspan {\n  color: #eb445a;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXZlbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztFQU9PLGdDQUFBO0FBQ1A7O0FBRUE7OztFQUdJLHFCQUFBO0FBQ0o7O0FBRUE7Ozs7OztFQU1JLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQztFQUNHLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoiZXZlbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LCAgXHJcbmlvbi1pdGVtLCBcclxuaW9uLWlucHV0LCBcclxuaW9uLXNlbGVjdCxcclxuaW9uLXRleHRhcmVhLFxyXG4udGl0dWxvLWRhZG8sXHJcbi50aXR1bG8tZGFkby1zZWxlY3QtYWNlc3Nve1xyXG4gICAgICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LCBcclxuaW9uLWl0ZW0sXHJcbiNyb2RhcGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG59XHJcblxyXG5pb24tc2VsZWN0LFxyXG5pb24taW5wdXQsXHJcbmlvbi10ZXh0YXJlYSxcclxuLnRpdHVsby1kYWRvLFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcclxuaDIge1xyXG4gICAgY29sb3I6IzJlMmUzYztcclxufSBcclxuXHJcbmlvbi10aXRsZSwgaDJ7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCwgaW9uLXRleHRhcmVhe1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuIH1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuICAgXHJcbi50aXR1bG8tZGFkb3tcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuIH1cclxuXHJcbiAudGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzb3tcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyLjUlOyAgXHJcbiB9XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6MTNwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tbGVmdDoxJTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogI2ViNDQ1YTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5teWNvbXBvbmVudC13aWRlci1wb3BvdmVyXHJcbntcclxuICAtLXdpZHRoOiA5NSU7XHJcbiAgLS1tYXgtd2lkdGg6IDYwMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "mGz3":
/*!********************************************************!*\
  !*** ./src/app/pages/cadastro/evento/evento.module.ts ***!
  \********************************************************/
/*! exports provided: EventoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoPageModule", function() { return EventoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _evento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./evento-routing.module */ "yn3m");
/* harmony import */ var _evento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evento.page */ "oo1W");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "/oCc");








let EventoPageModule = class EventoPageModule {
};
EventoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _evento_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventoPageRoutingModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_evento_page__WEBPACK_IMPORTED_MODULE_6__["EventoPage"]]
    })
], EventoPageModule);



/***/ }),

/***/ "oo1W":
/*!******************************************************!*\
  !*** ./src/app/pages/cadastro/evento/evento.page.ts ***!
  \******************************************************/
/*! exports provided: EventoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoPage", function() { return EventoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_evento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./evento.page.html */ "x70v");
/* harmony import */ var _evento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evento.page.scss */ "ameo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_mapper_Evento__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/mapper/Evento */ "tHhQ");
/* harmony import */ var src_app_modelo_Endereco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modelo/Endereco */ "/FaQ");
/* harmony import */ var src_app_modelo_Evento__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modelo/Evento */ "U7Ex");
/* harmony import */ var src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicos/ConsultaCEP */ "Gchg");
/* harmony import */ var src_app_servicos_Evento__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/servicos/Evento */ "662k");
/* harmony import */ var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/servicos/Membro */ "fX5e");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_DiaDaSemanaEHorarioUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/util/DiaDaSemanaEHorarioUtil */ "itSG");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");















let EventoPage = class EventoPage {
    constructor(formulador, eventoService, aviso, consultaCep, membroService) {
        this.formulador = formulador;
        this.eventoService = eventoService;
        this.aviso = aviso;
        this.consultaCep = consultaCep;
        this.membroService = membroService;
        this.listaMembrosObservable = this.membroService.listar();
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_14__["MensagensUtil"](this.aviso);
        this.inicializar();
    }
    inicializar() {
        this.evento = new src_app_modelo_Evento__WEBPACK_IMPORTED_MODULE_8__["Evento"]();
        this.evento.local = new src_app_modelo_Endereco__WEBPACK_IMPORTED_MODULE_7__["Endereco"]();
        this.horarios = src_app_util_DiaDaSemanaEHorarioUtil__WEBPACK_IMPORTED_MODULE_13__["DiaDaSemanaEHorarioUtil"].horarios();
        this.listaMembrosObservable.subscribe((response) => {
            this.membrosAtivos = response;
            this.membrosAtivos = this.membrosAtivos.filter((m) => m.situacao == 'Ativo');
            this.membrosAtivos.sort((a, b) => a.nomeCompleto > b.nomeCompleto
                ? 1
                : b.nomeCompleto > a.nomeCompleto
                    ? -1
                    : 0);
        });
        this.criarFormulario();
    }
    criarFormulario() {
        this.formulario = this.formulador.group({
            data: [this.evento.data, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            horarioInicio: [this.evento.horarioInicio, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            horarioFim: [this.evento.horarioFim, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nome: [this.evento.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            observacoes: [this.evento.observacoes],
            responsavel: [this.evento.responsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cep: [this.evento.local.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            logradouro: [this.evento.local.logradouro, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numero: [this.evento.local.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            complemento: [this.evento.local.complemento],
            bairro: [this.evento.local.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cidade: [this.evento.local.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            estado: [this.evento.local.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    buscarEndereco(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.target.value) {
                yield this.consultaCep.buscaEndereco(event.target.value).then((data) => {
                    const resultadoJson = data;
                    if (resultadoJson) {
                        this.formulario.controls['bairro'].setValue(resultadoJson.bairro);
                        this.formulario.controls['cidade'].setValue(resultadoJson.localidade);
                        this.formulario.controls['estado'].setValue(resultadoJson.uf);
                        this.formulario.controls['logradouro'].setValue(resultadoJson.logradouro);
                        this.disableEndereco(true);
                    }
                }, (erro) => {
                    this.mensagens.mensagemAlerta('Cep não encontrado, por favor insira os dados manualmente.');
                });
            }
            else {
                this.formulario.controls['bairro'].setValue(null);
                this.formulario.controls['cidade'].setValue(null);
                this.formulario.controls['estado'].setValue(null);
                this.formulario.controls['logradouro'].setValue(null);
                this.disableEndereco(false);
            }
        });
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
    cadastrar() {
        if (this.formulario.value) {
            if (this.formulario.value.data && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_12__["DateUtil"].verificarIsDataValida(this.formulario.value.data)) {
                this.mensagens.mensagemError("A data informada no campo 'Data' não é válida.");
            }
            else if (!this.verificarHorariosEncontro()) {
                this.mensagens.mensagemError('O horário final deve ser maior que o horário inicial.');
            }
            else {
                this.disableEndereco(false);
                this.evento = src_app_mapper_Evento__WEBPACK_IMPORTED_MODULE_6__["EventoMapper"].formularioToEvento(this.formulario.value);
                this.eventoService.adicionarOuAtualizar(this.evento);
                this.mensagens.mensagemSucesso('Cadastro realizado com sucesso!');
                this.disableEndereco(true);
                this.inicializar();
            }
        }
    }
    verificarHorariosEncontro() {
        let retorno = false;
        if (this.evento.horarioInicio && this.evento.horarioFim) {
            if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_12__["DateUtil"].verificarIntervaloHora(this.evento.horarioInicio, this.evento.horarioFim)) {
                retorno = true;
            }
        }
        return retorno;
    }
};
EventoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_servicos_Evento__WEBPACK_IMPORTED_MODULE_10__["EventoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_9__["ConsultaCEPService"] },
    { type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_11__["MembroService"] }
];
EventoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-evento',
        template: _raw_loader_evento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_evento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventoPage);



/***/ }),

/***/ "x70v":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/evento/evento.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Cadastro de evento</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"formulario\">\r\n        <ion-grid>\r\n            <h2>Informações do Evento</h2>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"nome\" minlength=\"3\" type=\"text\" maxlength=\"100\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" placeholder=\"dd/mm/yyyy\" formControlName=\"data\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <h2>Local e Horário</h2>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">CEP <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" (ionBlur)=\"buscarEndereco($event)\" formControlName=\"cep\" maxlength=\"9\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Logradouro <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"logradouro\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Número <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" [min]=\"0\" [max]=\"99999\" formControlName=\"numero\" type=\"number\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Complemento</ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"complemento\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Bairro <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"bairro\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Cidade <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"cidade\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label class=\"titulo-dado\" position=\"stacked\">Estado <span>*</span></ion-label>\r\n                        <ion-input formControlName=\"estado\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label mode=\"md\" class=\"titulo-dado-select-acesso\" position=\"stacked\">Horário inicial <span>*</span></ion-label>\r\n                    <ion-select [(ngModel)]=\"evento.horarioInicio\" formControlName=\"horarioInicio\" class=\"horario\" placeholder=\"Selecione um horário\" multiple=\"false\" interface=\"popover\">\r\n                        <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                            {{item}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-label mode=\"md\" class=\"titulo-dado-select-acesso\" position=\"stacked\">Horário final <span>*</span></ion-label>\r\n                    <ion-select [(ngModel)]=\"evento.horarioFim\" formControlName=\"horarioFim\" class=\"horario\" placeholder=\"Selecione um horário\" multiple=\"false\" interface=\"popover\">\r\n                        <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                            {{item}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <h2>Informações Gerais</h2>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label mode=\"md\" class=\"titulo-dado-select-acesso\" position=\"stacked\">Membro responsável<span>*</span></ion-label>\r\n                    <ion-select formControlName=\"responsavel\" class=\"horario\" placeholder=\"Selecione um membro\" multiple=\"false\" interface=\"popover\">\r\n                        <ion-select-option *ngFor=\"let item of membrosAtivos\" [value]=\"item.nomeCompleto\">\r\n                            {{item.nomeCompleto}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Observações</ion-label>\r\n                        <ion-textarea mode=\"md\" formControlName=\"observacoes\" maxlength=\"100\" type=\"text\"></ion-textarea>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n\r\n\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar no-padding id=\"rodape\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button mode=\"md\" (click)=\"cadastrar()\" [disabled]=\"formulario.invalid\" type=\"submit\" fill=\"solid\" expand=\"full\">\r\n                        Cadastrar</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "yn3m":
/*!****************************************************************!*\
  !*** ./src/app/pages/cadastro/evento/evento-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EventoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoPageRoutingModule", function() { return EventoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evento.page */ "oo1W");




const routes = [
    {
        path: '',
        component: _evento_page__WEBPACK_IMPORTED_MODULE_3__["EventoPage"]
    }
];
let EventoPageRoutingModule = class EventoPageRoutingModule {
};
EventoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-evento-evento-module-es2015.js.map