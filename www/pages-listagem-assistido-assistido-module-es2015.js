(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-listagem-assistido-assistido-module"],{

/***/ "42T8":
/*!**************************************************************!*\
  !*** ./src/app/pages/listagem/assistido/assistido.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\n.bt-editar {\n  background: #a7a7aa;\n}\n\n.bt-associar {\n  background: #2e2e3c;\n}\n\n.bt-deletar {\n  background: #a57d51;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2lzdGlkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFRTs7O0VBR0UsaUNBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiYXNzaXN0aWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIGlvbi10aXRsZSxcbiAgaDEsXG4gIC5pbmZvcm1hY2FvLW1lbWJybyB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgXG4gIC5idC1lZGl0YXIge1xuICAgIGJhY2tncm91bmQ6ICNhN2E3YWE7XG4gIH1cbiAgXG4gIC5idC1hc3NvY2lhciB7XG4gICAgYmFja2dyb3VuZDogIzJlMmUzYztcbiAgfVxuICBcbiAgLmJ0LWRlbGV0YXIge1xuICAgIGJhY2tncm91bmQ6ICNhNTdkNTE7XG4gIH1cbiAgXG4gIC5pY29uZXMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAiXX0= */");

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
        moment__WEBPACK_IMPORTED_MODULE_0__["locale"]('pt-br');
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
        return data.split('/').reverse().join('-');
    }
    static dateFormatterBrazil(data) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(data).format('DD/MM/YYYY');
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
        return moment__WEBPACK_IMPORTED_MODULE_0__(data).add(dias, 'year').subtract(1, 'days').format('YYYY-MM-DD');
    }
    static verificarIntervaloHora(horaI, horaF) {
        let horaInicial = Number(horaI.substring(0, 2)) < 12 ? moment__WEBPACK_IMPORTED_MODULE_0__(horaI.concat('am'), 'hh:mma') : moment__WEBPACK_IMPORTED_MODULE_0__(horaI.concat('pm'), 'hh:mmp');
        let horaFinal = Number(horaF.substring(0, 2)) < 12 ? moment__WEBPACK_IMPORTED_MODULE_0__(horaF.concat('am'), 'hh:mma') : moment__WEBPACK_IMPORTED_MODULE_0__(horaF.concat('pm'), 'hh:mmp');
        return horaInicial.isBefore(horaFinal);
    }
    static isIdadeMaiorDozeAnos(dataNasc) {
        let idade = moment__WEBPACK_IMPORTED_MODULE_0__().diff(this.dateFormatterAmerica(dataNasc), 'years');
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Total de assistidos cadastrados: {{numTotalAssistidos}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 *ngIf=\"numTotalAssistidos == 0\"> Não há assistidos.</h2>\n  <ion-searchbar\n  (ionChange)=\"onSearchTerm($event)\"\n    placeholder=\"Digite o nome do assistido\"\n    color=\"tertiary\"\n  ></ion-searchbar>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col>\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let assistido of listaAssistidosFiltrados\" >\n            <ion-item text-wrap class=\"item-text-wrap\">\n              <ion-label class=\"informacao-membro\" text-wrap>\n                <h1 class=\"content-title\">{{assistido.nomeCompleto}}</h1>\n                Data de nascimento: {{formatarDataDeNascimento(assistido.dataNascimento)}} \n                <br />\n                {{assistido.whatsapp? 'Whatsapp: '.concat(assistido.whatsapp) : '' }}\n                <br />\n                {{assistido.projetos ? 'Projetos: '.concat(assistido.projetos) : ''}}\n                <br />\n                {{assistido.observacoes? 'Observações: '.concat(assistido.observacoes) : '' }}\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <button\n                ion-button\n                (click)=\"editarAssistido(assistido)\"\n                class=\"bt-editar\"\n              >\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

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
        this.navCtrl.navigateForward('/editar/assistido', {
            state: { content: assistido },
        });
    }
    formatarDataDeNascimento(data) {
        return data.includes('/') ? data : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_6__["DateUtil"].dateFormatterBrazil(data);
    }
    onSearchTerm(ev) {
        this.listaAssistidosFiltrados = this.listaAssistidos;
        const val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.listaAssistidosFiltrados = this.listaAssistidosFiltrados.filter((term) => {
                return term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
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
        selector: 'app-assistido',
        template: _raw_loader_assistido_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assistido_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AssistidoPage);



/***/ }),

/***/ "sZxV":
/*!***************************************!*\
  !*** ./src/app/util/MensagensUtil.ts ***!
  \***************************************/
/*! exports provided: MensagensUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagensUtil", function() { return MensagensUtil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class MensagensUtil {
    constructor(aviso) {
        this.aviso = aviso;
    }
    ;
    mensagemSucesso(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const exibirMensagem = this.aviso.create({ id: 'sucesso', position: 'top', message: message, duration: 3000, color: 'success' });
            (yield exibirMensagem).present();
        });
    }
    mensagemError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const exibirMensagem = this.aviso.create({ id: 'error', position: 'top', message: error, duration: 3000, color: 'danger' });
            (yield exibirMensagem).present();
        });
    }
    mensagemAlerta(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const exibirMensagem = this.aviso.create({ id: 'alerta', position: 'top', message: message, duration: 3000, color: 'warning' });
            (yield exibirMensagem).present();
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-listagem-assistido-assistido-module-es2015.js.map