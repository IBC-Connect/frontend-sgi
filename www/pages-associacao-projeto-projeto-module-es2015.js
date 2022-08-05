(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-associacao-projeto-projeto-module"],{

/***/ "1upU":
/*!***********************************!*\
  !*** ./src/app/mapper/Projeto.ts ***!
  \***********************************/
/*! exports provided: ProjetoMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoMapper", function() { return ProjetoMapper; });
class ProjetoMapper {
    static formularioToProjeto(form, projeto) {
        projeto.responsavel = form.responsavel;
        projeto.dataInicioResponsavel = form.dataInicio;
        projeto.dataFimResponsavel = form.dataFim;
        return projeto;
    }
}


/***/ }),

/***/ "VT+I":
/*!************************************************************!*\
  !*** ./src/app/pages/associacao/projeto/projeto.module.ts ***!
  \************************************************************/
/*! exports provided: ProjetoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoPageModule", function() { return ProjetoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projeto-routing.module */ "wHlF");
/* harmony import */ var _projeto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projeto.page */ "z4wp");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "/oCc");








let ProjetoPageModule = class ProjetoPageModule {
};
ProjetoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"],
        ],
        declarations: [_projeto_page__WEBPACK_IMPORTED_MODULE_6__["ProjetoPage"]]
    })
], ProjetoPageModule);



/***/ }),

/***/ "ms6B":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/associacao/projeto/projeto.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"lista/projeto/ativos\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Associar projeto</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"formulario\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Projeto</ion-label>\n                        <ion-input mode=\"md\" [disabled]=\"true\" formControlName=\"nome\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Responsável</ion-label>\n                    <ion-select [selectedText]=\"formulario.get('responsavel').value\" placeholder=\"Selecione uma opção\" formControlName=\"responsavel\" multiple=\"false\" interface=\"popover\">\n                        <ion-select-option *ngFor=\"let item of membrosAtivos\" [value]=\"item.nomeCompleto\">\n                            {{item.nomeCompleto}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data de Início</ion-label>\n                        <ion-input mode=\"md\" formControlName=\"dataInicio\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data Fim</ion-label>\n                        <ion-input mode=\"md\" formControlName=\"dataFim\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar no-padding id=\"rodape\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-button mode=\"md\" (click)=\"associar()\" [disabled]=\"formulario.invalid\" type=\"submit\" fill=\"solid\" expand=\"full\"> Associar</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "sO3I":
/*!************************************************************!*\
  !*** ./src/app/pages/associacao/projeto/projeto.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content,\nion-item,\nion-input,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-select,\nion-input,\n.titulo-dado,\n.titulo-dado-select-acesso,\n.titulo-dado-select,\nh2 {\n  color: #2e2e3c;\n}\n\nion-title, h2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-input {\n  text-transform: uppercase;\n  font-size: 9pt;\n}\n\nion-select {\n  font-size: 10pt;\n}\n\n#cabecalho {\n  --background: #2e2e3c;\n  color: #fff;\n}\n\n.titulo-dado {\n  font-size: 11pt;\n}\n\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-size: 8.3pt;\n}\n\n.titulo-dado-select {\n  margin-left: 1%;\n}\n\n.titulo-dado-batismo {\n  margin-left: 4%;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\nspan {\n  color: #eb445a;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2pldG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztFQVFHLGdDQUFBO0FBQ0g7O0FBRUE7OztFQUdJLHFCQUFBO0FBQ0o7O0FBRUE7Ozs7OztFQU1JLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVDOzs7RUFHRyxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoicHJvamV0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCwgIFxuaW9uLWl0ZW0sIFxuaW9uLWlucHV0LCBcbmlvbi1zZWxlY3QsXG4udGl0dWxvLWRhZG8sXG4udGl0dWxvLWRhZG8tc2VsZWN0LFxuLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28sXG4udGl0dWxvLWRhZG8tYmF0aXNtbyB7XG4gICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWNvbnRlbnQsIFxuaW9uLWl0ZW0sXG4jcm9kYXBlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbmlvbi1zZWxlY3QsXG5pb24taW5wdXQsXG4udGl0dWxvLWRhZG8sXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcbi50aXR1bG8tZGFkby1zZWxlY3QsXG5oMiB7XG4gICAgY29sb3I6IzJlMmUzYztcbn0gXG5cbmlvbi10aXRsZSwgaDJ7XG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xufVxuXG5pb24taW5wdXR7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDlwdDtcbiB9XG5cbmlvbi1zZWxlY3R7XG4gICAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4jY2FiZWNhbGhve1xuICAgIC0tYmFja2dyb3VuZDogIzJlMmUzYzsgXG4gICAgY29sb3I6ICNmZmY7XG59XG4gICAgXG4udGl0dWxvLWRhZG97XG4gICAgZm9udC1zaXplOiAxMXB0O1xuIH1cblxuIC50aXR1bG8tZGFkby1zZWxlY3QsXG4gLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28sXG4gLnRpdHVsby1kYWRvLWJhdGlzbW97XG4gICAgZm9udC1zaXplOiA4LjNwdDtcbiB9XG5cbi50aXR1bG8tZGFkby1zZWxlY3R7XG4gICAgbWFyZ2luLWxlZnQ6IDElOyAgXG59XG5cbi50aXR1bG8tZGFkby1iYXRpc21ve1xuICAgIG1hcmdpbi1sZWZ0OiA0JTsgIFxufVxuIFxuaDIge1xuICAgIGZvbnQtc2l6ZToxM3B0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLWxlZnQ6MSU7XG59XG5cbnNwYW4ge1xuICAgIGNvbG9yOiAjZWI0NDVhO1xufVxuXG46Om5nLWRlZXAgLm15Y29tcG9uZW50LXdpZGVyLXBvcG92ZXJcbntcbiAgLS13aWR0aDogOTUlO1xuICAtLW1heC13aWR0aDogNjAwcHg7XG59Il19 */");

/***/ }),

/***/ "wHlF":
/*!********************************************************************!*\
  !*** ./src/app/pages/associacao/projeto/projeto-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ProjetoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoPageRoutingModule", function() { return ProjetoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _projeto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projeto.page */ "z4wp");




const routes = [
    {
        path: '',
        component: _projeto_page__WEBPACK_IMPORTED_MODULE_3__["ProjetoPage"]
    }
];
let ProjetoPageRoutingModule = class ProjetoPageRoutingModule {
};
ProjetoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjetoPageRoutingModule);



/***/ }),

/***/ "z4wp":
/*!**********************************************************!*\
  !*** ./src/app/pages/associacao/projeto/projeto.page.ts ***!
  \**********************************************************/
/*! exports provided: ProjetoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoPage", function() { return ProjetoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projeto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projeto.page.html */ "ms6B");
/* harmony import */ var _projeto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projeto.page.scss */ "sO3I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_mapper_Projeto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/mapper/Projeto */ "1upU");
/* harmony import */ var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicos/Membro */ "fX5e");
/* harmony import */ var src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicos/Projeto */ "MoJo");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");












let ProjetoPage = class ProjetoPage {
    constructor(formulador, membroService, aviso, projetoService, router) {
        this.formulador = formulador;
        this.membroService = membroService;
        this.aviso = aviso;
        this.projetoService = projetoService;
        this.router = router;
        const nav = this.router.getCurrentNavigation();
        this.projeto = nav.extras.state.content;
        this.ajustarDatas();
    }
    ngOnInit() {
        this.inicializar();
    }
    inicializar() {
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_11__["MensagensUtil"](this.aviso);
        this.listaMembrosObservable = this.membroService.listar();
        this.listaMembrosObservable.subscribe((response) => {
            this.membrosAtivos = response;
            this.membrosAtivos = this.membrosAtivos.filter((m) => m.situacao === 'Ativo');
            this.membrosAtivos.sort((a, b) => a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0);
        });
        this.criarFormulario();
    }
    criarFormulario() {
        this.formulario = this.formulador.group({
            key: [this.projeto.key, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            responsavel: [this.projeto.responsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataInicio: [this.projeto.dataInicioResponsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataFim: [this.projeto.dataFimResponsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nome: [this.projeto.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ajustarDatas() {
        if (this.projeto.dataInicioResponsavel)
            this.projeto.dataInicioResponsavel = this.projeto.dataInicioResponsavel.includes('/') ? this.projeto.dataInicioResponsavel : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.projeto.dataInicioResponsavel);
        if (this.projeto.dataFimResponsavel)
            this.projeto.dataFimResponsavel = this.projeto.dataFimResponsavel.includes('/') ? this.projeto.dataFimResponsavel : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.projeto.dataFimResponsavel);
    }
    associar() {
        if (this.formulario.value) {
            if (this.formulario.value.dataFim && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.dataFim)) {
                this.mensagens.mensagemError("A data informada no campo 'Data Fim' não é válida.");
            }
            else if (this.formulario.value.dataInicio && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.dataInicio)) {
                this.mensagens.mensagemError("A data informada no campo 'Data Início' não é válida.");
            }
            else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataFutura(this.formulario.value.dataInicio)) {
                this.mensagens.mensagemError("Não é permitido data futura para o campo 'Data Início'");
            }
            else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataDoisMaiorDataUm(this.formulario.value.dataInicio, this.formulario.value.dataFim)
                && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDatasIguais(this.formulario.value.dataFim, this.formulario.value.dataInicio)) {
                this.mensagens.mensagemError("A 'Data Início' não pode ser maior que a 'Data Fim'.");
            }
            else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDatasIguais(this.formulario.value.dataInicio, this.formulario.value.dataFim)) {
                this.mensagens.mensagemError("As datas 'Data Início' e 'Data Fim' não podem ser iguais.");
            }
            else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].numeroDiasEntreDuasDatas(this.formulario.value.dataInicio, this.formulario.value.dataFim) >= 731) {
                this.mensagens.mensagemError('O responsável pode assumir um cargo com duração máxima de dois anos.');
            }
            else {
                this.projeto = src_app_mapper_Projeto__WEBPACK_IMPORTED_MODULE_7__["ProjetoMapper"].formularioToProjeto(this.formulario.value, this.projeto);
                this.projetoService.adicionarOuAtualizar(this.projeto);
                this.mensagens.mensagemSucesso('Associação realizada com sucesso!');
            }
        }
    }
};
ProjetoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_8__["MembroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_9__["ProjetoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProjetoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projeto',
        template: _raw_loader_projeto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projeto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjetoPage);



/***/ })

}]);
//# sourceMappingURL=pages-associacao-projeto-projeto-module-es2015.js.map