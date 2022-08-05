(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-projeto-projeto-module"],{

/***/ "21SU":
/*!******************************************************************!*\
  !*** ./src/app/pages/cadastro/projeto/projeto-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProjetoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoPageRoutingModule", function() { return ProjetoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _projeto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projeto.page */ "fbZH");




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

/***/ "H+Lx":
/*!**********************************************************!*\
  !*** ./src/app/pages/cadastro/projeto/projeto.module.ts ***!
  \**********************************************************/
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
/* harmony import */ var _projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projeto-routing.module */ "21SU");
/* harmony import */ var _projeto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projeto.page */ "fbZH");
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
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"],
        ],
        declarations: [_projeto_page__WEBPACK_IMPORTED_MODULE_6__["ProjetoPage"]]
    })
], ProjetoPageModule);



/***/ }),

/***/ "Ro42":
/*!**********************************************************!*\
  !*** ./src/app/pages/cadastro/projeto/projeto.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content,\nion-item,\nion-input,\nion-select,\nion-textarea,\n.titulo-dado,\n.dia-da-semana {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-title, h2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-select,\nion-input,\nion-textarea,\n.titulo-dado,\n.dia-da-semana,\nh2 {\n  color: #2e2e3c;\n}\n\nion-label {\n  --color:#997045;\n}\n\nion-input, ion-textarea {\n  text-transform: uppercase;\n  font-size: 11pt;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\n.dia-da-semana {\n  font-size: 11pt;\n  margin-left: 3%;\n}\n\n.horario {\n  font-size: 11pt;\n}\n\nspan {\n  color: #eb445a;\n}\n\n.titulo-dado {\n  font-size: 13pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2pldG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0csZ0NBQUE7QUFDSDs7QUFFQTs7O0VBR0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7Ozs7OztFQU1JLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJwcm9qZXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LCAgXG5pb24taXRlbSwgXG5pb24taW5wdXQsIFxuaW9uLXNlbGVjdCxcbmlvbi10ZXh0YXJlYSxcbi50aXR1bG8tZGFkbyxcbi5kaWEtZGEtc2VtYW5hIHtcbiAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tY29udGVudCwgXG5pb24taXRlbSxcbiNyb2RhcGUge1xuICAgIC0tYmFja2dyb3VuZDogI2U2ZTZlNjtcbn1cblxuaW9uLXRpdGxlLCBoMntcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1zZWxlY3QsXG5pb24taW5wdXQsXG5pb24tdGV4dGFyZWEsIFxuLnRpdHVsby1kYWRvLFxuLmRpYS1kYS1zZW1hbmEsXG5oMntcbiAgICBjb2xvcjojMmUyZTNjO1xufSBcblxuaW9uLWxhYmVse1xuICAgIC0tY29sb3I6Izk5NzA0NTtcbn1cblxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWF7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDExcHQ7XG4gfVxuXG5oMiB7XG4gICAgZm9udC1zaXplOjEzcHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tbGVmdDoxJTtcbn0gXG5cbi5kaWEtZGEtc2VtYW5he1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5ob3Jhcmlve1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbn1cblxuc3BhbiB7XG4gICAgY29sb3I6ICNlYjQ0NWE7XG59XG5cbi50aXR1bG8tZGFkb3tcbiAgICBmb250LXNpemU6IDEzcHQ7XG59Il19 */");

/***/ }),

/***/ "Tz11":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/projeto/projeto.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Cadastro de projeto </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <h2>Informações do Projeto</h2>\n        <ion-row>\n            <ion-col>\n                <ion-item class=\"row-item\">\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome<span>*</span></ion-label>\n                    <ion-input mode=\"md\" [(ngModel)]=\"projeto.nome\" type=\"text\" maxlength=\"100\"></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item class=\"row-item\">\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data de início <span>*</span></ion-label>\n                    <ion-input mode=\"md\" placeholder=\"dd/mm/yyyy\" [brmasker]=\"{mask:'00/00/0000', len:10}\" [(ngModel)]=\"projeto.dataInicio\" maxlength=\"10\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-item>\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Descrição <span>*</span></ion-label>\n            <ion-textarea mode=\"md\" [(ngModel)]=\"projeto.descricao\"></ion-textarea>\n        </ion-item>\n\n        <h2>Dias e horários das atividades</h2>\n\n        <ion-row>\n            <ion-col>\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Segunda-feira</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[0].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[0].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Terça-feira</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[1].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[1].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Quarta-feira</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[2].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[2].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Quinta-feira</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[3].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[3].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Sexta-feira</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[4].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[4].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Sábado</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[5].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[5].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Domingo</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[6].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n            <ion-col>\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[6].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\n                        {{item}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar no-padding id=\"rodape\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-button mode=\"md\" [disabled]=\"disabledBotaoCadastrar()\" color=\"primary\" (click)=\"cadastrar()\" type=\"submit\" fill=\"solid\" expand=\"full\">\n                        Cadastrar</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "e/6e":
/*!***********************************!*\
  !*** ./src/app/modelo/Projeto.ts ***!
  \***********************************/
/*! exports provided: Projeto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projeto", function() { return Projeto; });
class Projeto {
}


/***/ }),

/***/ "fbZH":
/*!********************************************************!*\
  !*** ./src/app/pages/cadastro/projeto/projeto.page.ts ***!
  \********************************************************/
/*! exports provided: ProjetoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoPage", function() { return ProjetoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projeto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projeto.page.html */ "Tz11");
/* harmony import */ var _projeto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projeto.page.scss */ "Ro42");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modelo_Projeto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modelo/Projeto */ "e/6e");
/* harmony import */ var src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/Projeto */ "MoJo");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_DiaDaSemanaEHorarioUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/DiaDaSemanaEHorarioUtil */ "itSG");
/* harmony import */ var src_app_util_EncontroUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/util/EncontroUtil */ "RoIt");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");
/* harmony import */ var src_app_validador_ValidadorCamposObrigatorios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/validador/ValidadorCamposObrigatorios */ "tyGv");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













let ProjetoPage = class ProjetoPage {
    constructor(projetoService, aviso) {
        this.projetoService = projetoService;
        this.aviso = aviso;
        moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('pt-br');
        this.inicializar();
    }
    inicializar() {
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_10__["MensagensUtil"](this.aviso);
        this.diasDaSemana = src_app_util_DiaDaSemanaEHorarioUtil__WEBPACK_IMPORTED_MODULE_8__["DiaDaSemanaEHorarioUtil"].diasDaSemana();
        this.horarios = src_app_util_DiaDaSemanaEHorarioUtil__WEBPACK_IMPORTED_MODULE_8__["DiaDaSemanaEHorarioUtil"].horarios();
        this.projeto = new src_app_modelo_Projeto__WEBPACK_IMPORTED_MODULE_5__["Projeto"]();
        this.projeto.diasEncontro = src_app_util_EncontroUtil__WEBPACK_IMPORTED_MODULE_9__["EncontroUtil"].arrayEncontro();
    }
    disabledBotaoCadastrar() {
        return !src_app_validador_ValidadorCamposObrigatorios__WEBPACK_IMPORTED_MODULE_11__["ValidadorCamposObrigatorios"].isCampoPreenchido(this.projeto.nome)
            || !src_app_validador_ValidadorCamposObrigatorios__WEBPACK_IMPORTED_MODULE_11__["ValidadorCamposObrigatorios"].isCampoPreenchido(this.projeto.dataInicio)
            || !src_app_validador_ValidadorCamposObrigatorios__WEBPACK_IMPORTED_MODULE_11__["ValidadorCamposObrigatorios"].isCampoPreenchido(this.projeto.descricao);
    }
    cadastrar() {
        if (this.projeto) {
            if (!src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].verificarIsDataValida(this.projeto.dataInicio)) {
                this.mensagens.mensagemError("A data informada no campo 'Data de início' não é válida.");
            }
            /*Verificar horários dos encontros */
            else if (this.verificarHorariosEncontro()) {
                this.mensagens.mensagemError("O horário final deve ser maior que o horário inicial.");
            }
            else {
                this.projeto.nome = this.projeto.nome.toUpperCase();
                this.projeto.descricao = this.projeto.descricao.toUpperCase();
                this.projeto.situacao = 'Ativo';
                this.projetoService.adicionarOuAtualizar(this.projeto);
                this.mensagens.mensagemSucesso("Cadastro realizado com sucesso!");
                this.inicializar();
            }
        }
    }
    verificarHorariosEncontro() {
        let retorno = false;
        this.projeto.diasEncontro.forEach(element => {
            if (element.horarioInicial && element.horarioFinal) {
                if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].verificarIntervaloHora(element.horarioInicial, element.horarioFinal)) {
                    retorno = true;
                }
            }
        });
        return retorno;
    }
};
ProjetoPage.ctorParameters = () => [
    { type: src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_6__["ProjetoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
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
//# sourceMappingURL=pages-cadastro-projeto-projeto-module-es2015.js.map