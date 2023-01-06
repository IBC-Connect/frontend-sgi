(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voluntario-voluntario-module"],{

/***/ "5T/8":
/*!***********************************************************************!*\
  !*** ./src/app/pages/listagem/membro/voluntario/voluntario.module.ts ***!
  \***********************************************************************/
/*! exports provided: VoluntarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoluntarioPageModule", function() { return VoluntarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _voluntario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voluntario-routing.module */ "plBp");
/* harmony import */ var _voluntario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voluntario.page */ "JuXP");







let VoluntarioPageModule = class VoluntarioPageModule {
};
VoluntarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _voluntario_routing_module__WEBPACK_IMPORTED_MODULE_5__["VoluntarioPageRoutingModule"]
        ],
        declarations: [_voluntario_page__WEBPACK_IMPORTED_MODULE_6__["VoluntarioPage"]]
    })
], VoluntarioPageModule);



/***/ }),

/***/ "IEQJ":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/membro/voluntario/voluntario.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Total de Voluntarios: {{totalVoluntarios}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <h2 *ngIf=\"totalVoluntarios == 0\"> Não há voluntários.</h2>\r\n  <ion-searchbar\r\n  *ngIf=\"totalVoluntarios > 0\"\r\n  (ionChange)=\"pesquisarVoluntarios($event)\"\r\n    placeholder=\"Digite o nome do voluntário.\"\r\n    color=\"tertiary\"\r\n  ></ion-searchbar>\r\n  <ion-grid>\r\n    <ion-row align-items-center justify-content-center>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item-sliding *ngFor=\"let voluntario of membrosVoluntariosFiltrados\">\r\n            <ion-item text-wrap class=\"item-text-wrap\">\r\n              <ion-label class=\"informacao-membro\" text-wrap>\r\n                <h1 class=\"content-title\">{{voluntario.nomeCompleto}}</h1>\r\n                Data de nascimento: {{formatarDataDeNascimento(voluntario.dataNascimento)}} <br />\r\n                {{voluntario.whatsapp? 'Whatsapp: '.concat(voluntario.whatsapp) : '' }}  <br />\r\n                Profissão: {{voluntario.profissao}}\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item-options side=\"start\">\r\n              <button\r\n                ion-button\r\n                (click)=\"editarVoluntario(voluntario)\"\r\n                class=\"bt-editar\"\r\n              >\r\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\r\n              </button>\r\n              <button (click)=\"confirmarExclusao(voluntario)\" ion-button class=\"bt-deletar\">\r\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\r\n                </button>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "JM5f":
/*!**********************************!*\
  !*** ./src/app/util/DateUtil.ts ***!
  \**********************************/
/*! exports provided: DateUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtil", function() { return DateUtil; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

class DateUtil {
    constructor() {
        moment__WEBPACK_IMPORTED_MODULE_0__["locale"]("pt-br");
    }
    static isDataDoisMaiorDataUm(dataUm, dataDois) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(dataDois)).isBefore(this.dateFormatterAmerica(dataUm));
    }
    static isDataFutura(data) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(data)).isAfter(this.dateFormatterAmerica(new Date().toLocaleDateString()));
    }
    static isDatasIguais(dataUm, dataDois) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(dataDois)).isSame(this.dateFormatterAmerica(dataUm));
    }
    static dateFormatterAmerica(data) {
        return data.split("/").reverse().join("-");
    }
    static dateFormatterBrazil(data) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(data).format("DD/MM/YYYY");
    }
    static numeroDiasEntreDuasDatas(dataUm, dataDois) {
        const dataInicio = moment__WEBPACK_IMPORTED_MODULE_0__(dataUm);
        const dataFim = moment__WEBPACK_IMPORTED_MODULE_0__(dataDois);
        const numeroDias = moment__WEBPACK_IMPORTED_MODULE_0__["duration"](dataFim.diff(dataInicio));
        return numeroDias.asDays();
    }
    static verificarIsDataValida(data) {
        const dataValida = moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(data));
        return dataValida.isValid();
    }
    static calcularData(data, dias) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(data)
            .add(dias, "year")
            .subtract(1, "days")
            .format("YYYY-MM-DD");
    }
    static verificarIntervaloHora(horaI, horaF) {
        let horaInicial = Number(horaI.substring(0, 2)) < 12
            ? moment__WEBPACK_IMPORTED_MODULE_0__(horaI.concat("am"), "hh:mma")
            : moment__WEBPACK_IMPORTED_MODULE_0__(horaI.concat("pm"), "hh:mmp");
        let horaFinal = Number(horaF.substring(0, 2)) < 12
            ? moment__WEBPACK_IMPORTED_MODULE_0__(horaF.concat("am"), "hh:mma")
            : moment__WEBPACK_IMPORTED_MODULE_0__(horaF.concat("pm"), "hh:mmp");
        return horaInicial.isBefore(horaFinal);
    }
    static isIdadeMaiorDozeAnos(dataNasc) {
        let idade = moment__WEBPACK_IMPORTED_MODULE_0__().diff(this.dateFormatterAmerica(dataNasc), "years");
        return idade >= 12;
    }
}


/***/ }),

/***/ "JuXP":
/*!*********************************************************************!*\
  !*** ./src/app/pages/listagem/membro/voluntario/voluntario.page.ts ***!
  \*********************************************************************/
/*! exports provided: VoluntarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoluntarioPage", function() { return VoluntarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_voluntario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./voluntario.page.html */ "IEQJ");
/* harmony import */ var _voluntario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voluntario.page.scss */ "Sakc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/Autenticacao */ "tTKV");
/* harmony import */ var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/Membro */ "fX5e");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");









let VoluntarioPage = class VoluntarioPage {
    constructor(membroService, navCtrl, aviso, autenticacaoService, alertController) {
        this.membroService = membroService;
        this.navCtrl = navCtrl;
        this.aviso = aviso;
        this.autenticacaoService = autenticacaoService;
        this.alertController = alertController;
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__["MensagensUtil"](this.aviso);
        this.inicializar();
    }
    inicializar() {
        this.listaMembrosObservable = this.membroService.listar();
        this.listaMembrosObservable.subscribe((response) => {
            this.membrosVoluntarios = response;
            this.membrosVoluntariosFiltrados = response;
            this.membrosVoluntarios = this.membrosVoluntarios.filter((m) => m.classificacao === 'Voluntario');
            this.membrosVoluntariosFiltrados = this.membrosVoluntariosFiltrados.filter((m) => m.classificacao === 'Voluntario');
            this.totalVoluntarios = this.membrosVoluntarios.length;
            this.membrosVoluntariosFiltrados.sort((a, b) => a.nomeCompleto > b.nomeCompleto
                ? 1
                : b.nomeCompleto > a.nomeCompleto
                    ? -1
                    : 0);
            this.membrosVoluntarios.map((m) => (m.escolaridade = Number(m.escolaridade)));
            this.membrosVoluntarios.map((m) => (m.estadoCivil = Number(m.estadoCivil)));
        });
    }
    editarVoluntario(membro) {
        this.navCtrl.navigateForward('/editar/membro', {
            state: { content: membro },
        });
    }
    formatarDataDeNascimento(data) {
        return data.includes('/') ? data : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].dateFormatterBrazil(data);
    }
    pesquisarVoluntarios(ev) {
        this.membrosVoluntariosFiltrados = this.membrosVoluntarios;
        const val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.membrosVoluntariosFiltrados = this.membrosVoluntariosFiltrados.filter((term) => {
                return (term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
                    -1);
            });
            this.membrosVoluntariosFiltrados.sort((a, b) => a.nomeCompleto > b.nomeCompleto
                ? 1
                : b.nomeCompleto > a.nomeCompleto
                    ? -1
                    : 0);
        }
    }
    confirmarExclusao(membro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmação de exclusão',
                message: 'Tem certeza que deseja excluir o voluntário selecionado?',
                buttons: [
                    {
                        text: 'Não',
                        handler: () => {
                            this.alertController.dismiss();
                        },
                    },
                    {
                        text: 'Sim',
                        handler: () => {
                            this.excluirMembro(membro);
                        },
                    },
                ],
            });
            yield alert.present();
            this.formArray.clear();
        });
    }
    excluirMembro(membro) {
        this.membroService.deletar(membro.key);
        this.autenticacaoService.deletarMembro(membro);
        this.mensagens.mensagemSucesso('Voluntário excluído com sucesso!');
        this.inicializar();
    }
};
VoluntarioPage.ctorParameters = () => [
    { type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__["MembroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
VoluntarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-voluntario',
        template: _raw_loader_voluntario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_voluntario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VoluntarioPage);



/***/ }),

/***/ "Sakc":
/*!***********************************************************************!*\
  !*** ./src/app/pages/listagem/membro/voluntario/voluntario.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-editar {\n  background: #2e2e3c;\n}\n\n.bt-inativar {\n  background: #a57d51;\n}\n\n.bt-deletar {\n  background: #35291c;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZvbHVudGFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUU7Ozs7RUFJRSxpQ0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InZvbHVudGFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZSxcclxuICBoMSxcclxuICAuaW5mb3JtYWNhby1tZW1icm8sXHJcbiAgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICNhNTdkNTE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5idC1lZGl0YXIge1xyXG4gICAgYmFja2dyb3VuZDogIzJlMmUzYztcclxuICB9XHJcbiAgXHJcbiAgLmJ0LWluYXRpdmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICNhNTdkNTE7XHJcbiAgfVxyXG5cclxuICAuYnQtZGVsZXRhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzUyOTFjO1xyXG4gIH1cclxuICBcclxuICAuaWNvbmVzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "plBp":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/listagem/membro/voluntario/voluntario-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: VoluntarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoluntarioPageRoutingModule", function() { return VoluntarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _voluntario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voluntario.page */ "JuXP");




const routes = [
    {
        path: '',
        component: _voluntario_page__WEBPACK_IMPORTED_MODULE_3__["VoluntarioPage"]
    }
];
let VoluntarioPageRoutingModule = class VoluntarioPageRoutingModule {
};
VoluntarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VoluntarioPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=voluntario-voluntario-module-es2015.js.map