(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["congregado-congregado-module"],{

/***/ "Ewl5":
/*!***********************************************************************!*\
  !*** ./src/app/pages/listagem/membro/congregado/congregado.module.ts ***!
  \***********************************************************************/
/*! exports provided: CongregadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongregadoPageModule", function() { return CongregadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _congregado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./congregado-routing.module */ "u1jN");
/* harmony import */ var _congregado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./congregado.page */ "a0sz");







let CongregadoPageModule = class CongregadoPageModule {
};
CongregadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _congregado_routing_module__WEBPACK_IMPORTED_MODULE_5__["CongregadoPageRoutingModule"]
        ],
        declarations: [_congregado_page__WEBPACK_IMPORTED_MODULE_6__["CongregadoPage"]]
    })
], CongregadoPageModule);



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

/***/ "NpYO":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/membro/congregado/congregado.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Total de congregados: {{totalCongregados}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <h2 *ngIf=\"totalCongregados == 0\"> Não há congregados.</h2>\r\n  <ion-searchbar\r\n  *ngIf=\"totalCongregados > 0\"\r\n  (ionChange)=\"pesquisarCongregados($event)\"\r\n    placeholder=\"Digite o nome do congregado.\"\r\n    color=\"tertiary\"\r\n  ></ion-searchbar>\r\n  <ion-grid>\r\n    <ion-row align-items-center justify-content-center>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item-sliding *ngFor=\"let congregado of membrosCongregadosFiltrados\">\r\n            <ion-item text-wrap class=\"item-text-wrap\">\r\n              <ion-label class=\"informacao-membro\" text-wrap>\r\n                <h1 class=\"content-title\">{{congregado.nomeCompleto}}</h1>\r\n                Data de nascimento: {{formatarDataDeNascimento(congregado.dataNascimento)}} <br />\r\n                {{congregado.whatsapp? 'Whatsapp: '.concat(congregado.whatsapp) : '' }}\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item-options side=\"start\">\r\n              <button\r\n                ion-button\r\n                (click)=\"editarCongregado(congregado)\"\r\n                class=\"bt-editar\"\r\n              >\r\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\r\n              </button>\r\n              <button (click)=\"confirmarExclusao(congregado)\" ion-button class=\"bt-deletar\">\r\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\r\n                </button>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "a0sz":
/*!*********************************************************************!*\
  !*** ./src/app/pages/listagem/membro/congregado/congregado.page.ts ***!
  \*********************************************************************/
/*! exports provided: CongregadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongregadoPage", function() { return CongregadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_congregado_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./congregado.page.html */ "NpYO");
/* harmony import */ var _congregado_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./congregado.page.scss */ "dkqW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/Autenticacao */ "tTKV");
/* harmony import */ var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/Membro */ "fX5e");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");









let CongregadoPage = class CongregadoPage {
    constructor(membroService, navCtrl, aviso, alertController, autenticacaoService) {
        this.membroService = membroService;
        this.navCtrl = navCtrl;
        this.aviso = aviso;
        this.alertController = alertController;
        this.autenticacaoService = autenticacaoService;
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__["MensagensUtil"](this.aviso);
        this.inicializar();
    }
    inicializar() {
        this.listaMembrosObservable = this.membroService.listar();
        this.listaMembrosObservable.subscribe((response) => {
            this.membrosCongregados = response;
            this.membrosCongregadosFiltrados = response;
            this.membrosCongregados = this.membrosCongregados.filter((m) => m.classificacao === "Congregado");
            this.membrosCongregadosFiltrados =
                this.membrosCongregadosFiltrados.filter((m) => m.classificacao === "Congregado");
            this.totalCongregados = this.membrosCongregados.length;
            this.membrosCongregadosFiltrados.sort((a, b) => a.nomeCompleto > b.nomeCompleto
                ? 1
                : b.nomeCompleto > a.nomeCompleto
                    ? -1
                    : 0);
            this.membrosCongregados.map((m) => (m.escolaridade = Number(m.escolaridade)));
            this.membrosCongregados.map((m) => (m.estadoCivil = Number(m.estadoCivil)));
        });
    }
    editarCongregado(membro) {
        this.navCtrl.navigateForward("/editar/membro", {
            state: { content: membro },
        });
    }
    formatarDataDeNascimento(data) {
        return data.includes("/") ? data : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].dateFormatterBrazil(data);
    }
    pesquisarCongregados(ev) {
        this.membrosCongregadosFiltrados = this.membrosCongregados;
        const val = ev.detail.value;
        if (val && val.trim() !== "") {
            this.membrosCongregadosFiltrados =
                this.membrosCongregadosFiltrados.filter((term) => {
                    return (term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
                        -1);
                });
            this.membrosCongregadosFiltrados.sort((a, b) => a.nomeCompleto > b.nomeCompleto
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
                message: 'Tem certeza que deseja excluir o congregado selecionado?',
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
        });
    }
    excluirMembro(membro) {
        this.membroService.deletar(membro.key);
        this.autenticacaoService.deletarMembro(membro);
        this.mensagens.mensagemSucesso('Congregado excluído com sucesso!');
        this.inicializar();
    }
};
CongregadoPage.ctorParameters = () => [
    { type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__["MembroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"] }
];
CongregadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-congregado",
        template: _raw_loader_congregado_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_congregado_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CongregadoPage);



/***/ }),

/***/ "dkqW":
/*!***********************************************************************!*\
  !*** ./src/app/pages/listagem/membro/congregado/congregado.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-editar {\n  background: #2e2e3c;\n}\n\n.bt-inativar {\n  background: #a57d51;\n}\n\n.bt-deletar {\n  background: #35291c;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbmdyZWdhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImNvbmdyZWdhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRpdGxlLFxyXG5oMSxcclxuLmluZm9ybWFjYW8tbWVtYnJvLFxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogI2E1N2Q1MTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idC1lZGl0YXIge1xyXG4gIGJhY2tncm91bmQ6ICMyZTJlM2M7XHJcbn1cclxuXHJcbi5idC1pbmF0aXZhciB7XHJcbiAgYmFja2dyb3VuZDogI2E1N2Q1MTtcclxufVxyXG5cclxuLmJ0LWRlbGV0YXIge1xyXG4gIGJhY2tncm91bmQ6ICMzNTI5MWM7XHJcbn1cclxuXHJcbi5pY29uZXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "u1jN":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/listagem/membro/congregado/congregado-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CongregadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongregadoPageRoutingModule", function() { return CongregadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _congregado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./congregado.page */ "a0sz");




const routes = [
    {
        path: '',
        component: _congregado_page__WEBPACK_IMPORTED_MODULE_3__["CongregadoPage"]
    }
];
let CongregadoPageRoutingModule = class CongregadoPageRoutingModule {
};
CongregadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CongregadoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=congregado-congregado-module-es2015.js.map