(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-listagem-assistido-assistido-module"],{

/***/ "42T8":
/*!**************************************************************!*\
  !*** ./src/app/pages/listagem/assistido/assistido.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\n.bt-editar {\n  background: #a7a7aa;\n}\n\n.bt-associar {\n  background: #2e2e3c;\n}\n\n.bt-deletar {\n  background: #a57d51;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzaXN0aWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVFOzs7RUFHRSxpQ0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJhc3Npc3RpZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZSxcclxuICBoMSxcclxuICAuaW5mb3JtYWNhby1tZW1icm8ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0LWVkaXRhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTdhN2FhO1xyXG4gIH1cclxuICBcclxuICAuYnQtYXNzb2NpYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzJlMmUzYztcclxuICB9XHJcbiAgXHJcbiAgLmJ0LWRlbGV0YXIge1xyXG4gICAgYmFja2dyb3VuZDogI2E1N2Q1MTtcclxuICB9XHJcbiAgXHJcbiAgLmljb25lcyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgIl19 */");

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

/***/ "N3wM":
/*!**************************************************************!*\
  !*** ./src/app/pages/listagem/assistido/assistido.module.ts ***!
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
/* harmony import */ var _assistido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assistido-routing.module */ "gZn3");
/* harmony import */ var _assistido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assistido.page */ "jO1R");







let AssistidoPageModule = class AssistidoPageModule {
};
AssistidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assistido_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssistidoPageRoutingModule"]
        ],
        declarations: [_assistido_page__WEBPACK_IMPORTED_MODULE_6__["AssistidoPage"]]
    })
], AssistidoPageModule);



/***/ }),

/***/ "RRlf":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/assistido/assistido.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Total de assistidos cadastrados: {{numTotalAssistidos}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <h2 *ngIf=\"numTotalAssistidos == 0\"> Não há assistidos.</h2>\r\n  <ion-searchbar\r\n  (ionChange)=\"onSearchTerm($event)\"\r\n    placeholder=\"Digite o nome do assistido\"\r\n    color=\"tertiary\"\r\n  ></ion-searchbar>\r\n  <ion-grid>\r\n    <ion-row align-items-center justify-content-center>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item-sliding *ngFor=\"let assistido of listaAssistidosFiltrados\" >\r\n            <ion-item text-wrap class=\"item-text-wrap\">\r\n              <ion-label class=\"informacao-membro\" text-wrap>\r\n                <h1 class=\"content-title\">{{assistido.nomeCompleto}}</h1>\r\n                Data de nascimento: {{formatarDataDeNascimento(assistido.dataNascimento)}} \r\n                <br />\r\n                {{assistido.whatsapp? 'Whatsapp: '.concat(assistido.whatsapp) : '' }}\r\n                <br />\r\n                {{assistido.projetos ? 'Projetos: '.concat(assistido.projetos[0]) : ''}}\r\n                <br />\r\n                {{assistido.observacoes? 'Observações: '.concat(assistido.observacoes) : '' }}\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item-options side=\"start\">\r\n              <button\r\n                ion-button\r\n                (click)=\"editarAssistido(assistido)\"\r\n                class=\"bt-editar\"\r\n              >\r\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\r\n              </button>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "gZn3":
/*!**********************************************************************!*\
  !*** ./src/app/pages/listagem/assistido/assistido-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AssistidoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistidoPageRoutingModule", function() { return AssistidoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _assistido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assistido.page */ "jO1R");




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

/***/ "jO1R":
/*!************************************************************!*\
  !*** ./src/app/pages/listagem/assistido/assistido.page.ts ***!
  \************************************************************/
/*! exports provided: AssistidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistidoPage", function() { return AssistidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_assistido_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./assistido.page.html */ "RRlf");
/* harmony import */ var _assistido_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assistido.page.scss */ "42T8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_servicos_Assistido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/Assistido */ "cn//");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");
/* harmony import */ var src_app_util_RedirecionadorUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/RedirecionadorUtil */ "YAOL");









let AssistidoPage = class AssistidoPage {
    constructor(assistidoService, aviso, navCtrl, alertController) {
        this.assistidoService = assistidoService;
        this.aviso = aviso;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.inicializar();
    }
    inicializar() {
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_7__["MensagensUtil"](this.aviso);
        this.redirecionador = new src_app_util_RedirecionadorUtil__WEBPACK_IMPORTED_MODULE_8__["RedirecionadorUtil"](this.navCtrl);
        this.listaAssistidosObservable = this.assistidoService.listar();
        this.listaAssistidosObservable.subscribe((response) => {
            this.listaAssistidos = response;
            this.listaAssistidosFiltrados = response;
            this.numTotalAssistidos = this.listaAssistidos.length;
            this.listaAssistidosFiltrados.sort((a, b) => a.nomeCompleto > b.nomeCompleto
                ? 1
                : b.nomeCompleto > a.nomeCompleto
                    ? -1
                    : 0);
        });
    }
    editarAssistido(assistido) {
        this.navCtrl.navigateForward("/editar/assistido", {
            state: { content: assistido },
        });
    }
    formatarDataDeNascimento(data) {
        return data.includes("/") ? data : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_6__["DateUtil"].dateFormatterBrazil(data);
    }
    onSearchTerm(ev) {
        this.listaAssistidosFiltrados = this.listaAssistidos;
        const val = ev.detail.value;
        if (val && val.trim() !== "") {
            this.listaAssistidosFiltrados = this.listaAssistidosFiltrados.filter((term) => {
                return (term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
                    -1);
            });
        }
    }
};
AssistidoPage.ctorParameters = () => [
    { type: src_app_servicos_Assistido__WEBPACK_IMPORTED_MODULE_5__["AssistidoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
AssistidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-assistido",
        template: _raw_loader_assistido_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assistido_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AssistidoPage);



/***/ })

}]);
//# sourceMappingURL=pages-listagem-assistido-assistido-module-es2015.js.map