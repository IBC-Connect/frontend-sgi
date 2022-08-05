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
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-editar {\n  background: #2e2e3c;\n}\n\n.bt-deletar {\n  background: #35291c;\n}\n\n.bt-inativar {\n  background: #a57d51;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21lbWJyby1hdGl2by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTs7OztFQUlFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoibWVtYnJvLWF0aXZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbn1cblxuaW9uLXRpdGxlLFxuaDEsXG4uaW5mb3JtYWNhby1tZW1icm8sXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxleGVuZFwiLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaDIge1xuICBjb2xvcjogI2E1N2Q1MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnQtZWRpdGFyIHtcbiAgYmFja2dyb3VuZDogIzJlMmUzYztcbn1cblxuLmJ0LWRlbGV0YXIge1xuICBiYWNrZ3JvdW5kOiAjMzUyOTFjO1xufVxuXG4uYnQtaW5hdGl2YXIge1xuICBiYWNrZ3JvdW5kOiAjYTU3ZDUxO1xufVxuXG4uaWNvbmVzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Total de membros ativos: {{totalMembros}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 *ngIf=\"totalMembros == 0\"> Não há membros ativos.</h2>\n  <ion-searchbar\n  *ngIf=\"totalMembros > 0\"\n  (ionChange)=\"pesquisarAtivos($event)\"\n    placeholder=\"Digite o nome do membro.\"\n    color=\"tertiary\"\n  ></ion-searchbar>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col>\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let membro of membrosAtivosFiltrados\">\n            <ion-item text-wrap class=\"item-text-wrap\">\n              <ion-label class=\"informacao-membro\" text-wrap>\n                <h1 class=\"content-title\">{{membro.nomeCompleto}}</h1>\n                Data de nascimento: {{formatarDataDeNascimento(membro.dataNascimento)}} <br />\n                {{membro.whatsapp? 'Whatsapp: '.concat(membro.whatsapp) : '' }}\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <button\n                ion-button\n                (click)=\"editarMembro(membro)\"\n                class=\"bt-editar\"\n              >\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\n              </button>\n              <button (click)=\"confirmarInativacao(membro)\" ion-button class=\"bt-inativar\">\n                <ion-icon class=\"icones\" name=\"person-remove\"></ion-icon>\n              </button>\n              <button (click)=\"confirmarExclusao(membro)\" ion-button class=\"bt-deletar\">\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\n                </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

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
//# sourceMappingURL=membro-ativo-membro-ativo-module-es2015.js.map