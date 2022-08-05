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

/***/ "NpYO":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/membro/congregado/congregado.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Total de congregados: {{totalCongregados}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 *ngIf=\"totalCongregados == 0\"> Não há congregados.</h2>\n  <ion-searchbar\n  *ngIf=\"totalCongregados > 0\"\n  (ionChange)=\"pesquisarCongregados($event)\"\n    placeholder=\"Digite o nome do congregado.\"\n    color=\"tertiary\"\n  ></ion-searchbar>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col>\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let congregado of membrosCongregadosFiltrados\">\n            <ion-item text-wrap class=\"item-text-wrap\">\n              <ion-label class=\"informacao-membro\" text-wrap>\n                <h1 class=\"content-title\">{{congregado.nomeCompleto}}</h1>\n                Data de nascimento: {{formatarDataDeNascimento(congregado.dataNascimento)}} <br />\n                {{congregado.whatsapp? 'Whatsapp: '.concat(congregado.whatsapp) : '' }}\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <button\n                ion-button\n                (click)=\"editarCongregado(congregado)\"\n                class=\"bt-editar\"\n              >\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\n              </button>\n              <button (click)=\"confirmarExclusao(congregado)\" ion-button class=\"bt-deletar\">\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\n                </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-editar {\n  background: #2e2e3c;\n}\n\n.bt-inativar {\n  background: #a57d51;\n}\n\n.bt-deletar {\n  background: #35291c;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbmdyZWdhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImNvbmdyZWdhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tdGl0bGUsXG5oMSxcbi5pbmZvcm1hY2FvLW1lbWJybyxcbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kXCIsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjYTU3ZDUxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idC1lZGl0YXIge1xuICBiYWNrZ3JvdW5kOiAjMmUyZTNjO1xufVxuXG4uYnQtaW5hdGl2YXIge1xuICBiYWNrZ3JvdW5kOiAjYTU3ZDUxO1xufVxuXG4uYnQtZGVsZXRhciB7XG4gIGJhY2tncm91bmQ6ICMzNTI5MWM7XG59XG5cbi5pY29uZXMge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuIl19 */");

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