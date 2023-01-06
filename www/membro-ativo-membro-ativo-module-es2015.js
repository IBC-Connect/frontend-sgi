(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membro-ativo-membro-ativo-module"],{

/***/ "/psx":
/*!*************************************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro-ativo/membro-ativo.page.ts ***!
  \*************************************************************************/
/*! exports provided: MembroAtivoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroAtivoPage", function() { return MembroAtivoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_membro_ativo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./membro-ativo.page.html */ "ruNQ");
/* harmony import */ var _membro_ativo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./membro-ativo.page.scss */ "AV/2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/Autenticacao */ "tTKV");
/* harmony import */ var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/Membro */ "fX5e");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");









let MembroAtivoPage = class MembroAtivoPage {
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
            this.membrosAtivos = response;
            this.membrosAtivosFiltrados = response;
            this.membrosAtivos = this.membrosAtivos.filter((m) => this.filtrarMembro(m));
            this.membrosAtivosFiltrados = this.membrosAtivosFiltrados.filter((m) => this.filtrarMembro(m));
            this.totalMembros = this.membrosAtivos.length;
            this.membrosAtivosFiltrados.sort((a, b) => a.nomeCompleto > b.nomeCompleto
                ? 1
                : b.nomeCompleto > a.nomeCompleto
                    ? -1
                    : 0);
            this.membrosAtivos.map((m) => (m.escolaridade = Number(m.escolaridade)));
            this.membrosAtivos.map((m) => (m.estadoCivil = Number(m.estadoCivil)));
        });
    }
    filtrarMembro(membro) {
        return membro.situacao === 'Ativo' && (membro.classificacao === undefined || membro.classificacao === "Membro");
    }
    editarMembro(membro) {
        this.navCtrl.navigateForward('/editar/membro', {
            state: { content: membro },
        });
    }
    formatarDataDeNascimento(data) {
        return data.includes('/') ? data : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].dateFormatterBrazil(data);
    }
    confirmarInativacao(membro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmação de inativação',
                message: 'Tem certeza que deseja inativar o membro selecionado?',
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
                            this.inativarUsuario(membro);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    inativarUsuario(membro) {
        if (membro.key) {
            membro.situacao = 'Inativo';
            this.membroService.adicionarOuAtualizar(membro);
            this.inicializar();
            this.mensagens.mensagemSucesso('Usuário inativado com sucesso!');
        }
    }
    pesquisarAtivos(ev) {
        this.membrosAtivosFiltrados = this.membrosAtivos;
        const val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.membrosAtivosFiltrados = this.membrosAtivosFiltrados.filter((term) => {
                return (term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
                    -1);
            });
            this.membrosAtivosFiltrados.sort((a, b) => a.nomeCompleto > b.nomeCompleto
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
                message: 'Tem certeza que deseja excluir o membro selecionado?',
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
        this.mensagens.mensagemSucesso('Membro excluído com sucesso!');
        this.inicializar();
    }
};
MembroAtivoPage.ctorParameters = () => [
    { type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__["MembroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"] }
];
MembroAtivoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-membro-ativo',
        template: _raw_loader_membro_ativo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_membro_ativo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MembroAtivoPage);



/***/ }),

/***/ "AV/2":
/*!***************************************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro-ativo/membro-ativo.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-editar {\n  background: #2e2e3c;\n}\n\n.bt-deletar {\n  background: #35291c;\n}\n\n.bt-inativar {\n  background: #a57d51;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1lbWJyby1hdGl2by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTs7OztFQUlFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoibWVtYnJvLWF0aXZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi10aXRsZSxcclxuaDEsXHJcbi5pbmZvcm1hY2FvLW1lbWJybyxcclxuaDIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxleGVuZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICNhNTdkNTE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnQtZWRpdGFyIHtcclxuICBiYWNrZ3JvdW5kOiAjMmUyZTNjO1xyXG59XHJcblxyXG4uYnQtZGVsZXRhciB7XHJcbiAgYmFja2dyb3VuZDogIzM1MjkxYztcclxufVxyXG5cclxuLmJ0LWluYXRpdmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjYTU3ZDUxO1xyXG59XHJcblxyXG4uaWNvbmVzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Ab4i":
/*!***************************************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro-ativo/membro-ativo.module.ts ***!
  \***************************************************************************/
/*! exports provided: MembroAtivoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroAtivoPageModule", function() { return MembroAtivoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _membro_ativo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./membro-ativo-routing.module */ "SCsH");
/* harmony import */ var _membro_ativo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./membro-ativo.page */ "/psx");







let MembroAtivoPageModule = class MembroAtivoPageModule {
};
MembroAtivoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _membro_ativo_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembroAtivoPageRoutingModule"]
        ],
        declarations: [_membro_ativo_page__WEBPACK_IMPORTED_MODULE_6__["MembroAtivoPage"]]
    })
], MembroAtivoPageModule);



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

/***/ "SCsH":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro-ativo/membro-ativo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MembroAtivoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroAtivoPageRoutingModule", function() { return MembroAtivoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _membro_ativo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./membro-ativo.page */ "/psx");




const routes = [
    {
        path: '',
        component: _membro_ativo_page__WEBPACK_IMPORTED_MODULE_3__["MembroAtivoPage"],
    }
];
let MembroAtivoPageRoutingModule = class MembroAtivoPageRoutingModule {
};
MembroAtivoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MembroAtivoPageRoutingModule);



/***/ }),

/***/ "ruNQ":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/membro/membro-ativo/membro-ativo.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Total de membros ativos: {{totalMembros}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <h2 *ngIf=\"totalMembros == 0\"> Não há membros ativos.</h2>\r\n  <ion-searchbar\r\n  *ngIf=\"totalMembros > 0\"\r\n  (ionChange)=\"pesquisarAtivos($event)\"\r\n    placeholder=\"Digite o nome do membro.\"\r\n    color=\"tertiary\"\r\n  ></ion-searchbar>\r\n  <ion-grid>\r\n    <ion-row align-items-center justify-content-center>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item-sliding *ngFor=\"let membro of membrosAtivosFiltrados\">\r\n            <ion-item text-wrap class=\"item-text-wrap\">\r\n              <ion-label class=\"informacao-membro\" text-wrap>\r\n                <h1 class=\"content-title\">{{membro.nomeCompleto}}</h1>\r\n                Data de nascimento: {{formatarDataDeNascimento(membro.dataNascimento)}} <br />\r\n                {{membro.whatsapp? 'Whatsapp: '.concat(membro.whatsapp) : '' }}\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item-options side=\"start\">\r\n              <button\r\n                ion-button\r\n                (click)=\"editarMembro(membro)\"\r\n                class=\"bt-editar\"\r\n              >\r\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\r\n              </button>\r\n              <button (click)=\"confirmarInativacao(membro)\" ion-button class=\"bt-inativar\">\r\n                <ion-icon class=\"icones\" name=\"person-remove\"></ion-icon>\r\n              </button>\r\n              <button (click)=\"confirmarExclusao(membro)\" ion-button class=\"bt-deletar\">\r\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\r\n                </button>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=membro-ativo-membro-ativo-module-es2015.js.map