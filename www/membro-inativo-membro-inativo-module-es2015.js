(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membro-inativo-membro-inativo-module"],{

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

/***/ "QNml":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro-inativo/membro-inativo-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: MembroInativoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroInativoPageRoutingModule", function() { return MembroInativoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _membro_inativo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./membro-inativo.page */ "T6ne");




const routes = [
    {
        path: '',
        component: _membro_inativo_page__WEBPACK_IMPORTED_MODULE_3__["MembroInativoPage"]
    }
];
let MembroInativoPageRoutingModule = class MembroInativoPageRoutingModule {
};
MembroInativoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MembroInativoPageRoutingModule);



/***/ }),

/***/ "RDJs":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/membro/membro-inativo/membro-inativo.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Total de membros inativos: {{totalMembros}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 *ngIf=\"totalMembros == 0\"> Não há membros inativos.</h2>\n  <ion-searchbar  *ngIf=\"totalMembros > 0\" (ionChange)=\"pesquisarInativos($event)\"  placeholder=\"Digite o nome do membro.\" color=\"tertiary\"></ion-searchbar>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col>\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let membro of membrosInativosFiltrados\" >\n            <ion-item text-wrap class=\"item-text-wrap\">\n              <ion-label class=\"informacao-membro\" text-wrap>\n                <h1 class=\"content-title\"> {{membro.nomeCompleto}}</h1>\n                Data de nascimento: {{formatarDataDeNascimento(membro.dataNascimento)}} <br/>\n                {{membro.whatsapp? 'Whatsapp: '.concat(membro.whatsapp) : '' }}\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <button (click)=\"confirmarAtivacao(membro)\" ion-button class=\"bt-inativar\">\n                <ion-icon  class=\"icones\"   name=\"person-remove\"></ion-icon>\n              </button>\n              <button (click)=\"confirmarExclusao(membro)\" ion-button class=\"bt-deletar\">\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\n                </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "T6ne":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro-inativo/membro-inativo.page.ts ***!
  \*****************************************************************************/
/*! exports provided: MembroInativoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroInativoPage", function() { return MembroInativoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_membro_inativo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./membro-inativo.page.html */ "RDJs");
/* harmony import */ var _membro_inativo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./membro-inativo.page.scss */ "Y3m+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/Autenticacao */ "tTKV");
/* harmony import */ var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/Membro */ "fX5e");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");









let MembroInativoPage = class MembroInativoPage {
    constructor(membroService, aviso, alertController, autenticacaoService) {
        this.membroService = membroService;
        this.aviso = aviso;
        this.alertController = alertController;
        this.autenticacaoService = autenticacaoService;
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__["MensagensUtil"](this.aviso);
        this.inicializar();
    }
    inicializar() {
        this.listaMembrosObservable = this.membroService.listar();
        this.listaMembrosObservable.subscribe((response) => {
            this.membrosInativos = response;
            this.membrosInativosFiltrados = response;
            this.membrosInativos = this.membrosInativos.filter((m) => this.filtrarMembro(m));
            this.membrosInativosFiltrados = this.membrosInativosFiltrados.filter((m) => this.filtrarMembro(m));
            this.totalMembros = this.membrosInativos.length;
            this.membrosInativosFiltrados.sort((a, b) => a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0);
            this.membrosInativos.map((m) => (m.escolaridade = Number(m.escolaridade)));
            this.membrosInativos.map((m) => (m.estadoCivil = Number(m.estadoCivil)));
        });
    }
    filtrarMembro(membro) {
        return membro.situacao === 'Inativo' && (membro.classificacao === undefined || membro.classificacao === "Membro");
    }
    formatarDataDeNascimento(data) {
        return data.includes('/') ? data : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].dateFormatterBrazil(data);
    }
    confirmarAtivacao(membro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmação de ativação',
                message: 'Tem certeza que deseja ativar o membro selecionado?',
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
                            this.ativarUsuario(membro);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    ativarUsuario(membro) {
        if (membro.key) {
            membro.situacao = 'Ativo';
            this.membroService.adicionarOuAtualizar(membro);
            this.mensagens.mensagemSucesso('Usuário ativado com sucesso!');
            this.inicializar();
        }
    }
    pesquisarInativos(ev) {
        this.membrosInativosFiltrados = this.membrosInativos;
        const val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.membrosInativosFiltrados = this.membrosInativosFiltrados.filter(term => {
                return term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
            });
            this.membrosInativosFiltrados.sort((a, b) => a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0);
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
MembroInativoPage.ctorParameters = () => [
    { type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__["MembroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"] }
];
MembroInativoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-membro-inativo',
        template: _raw_loader_membro_inativo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_membro_inativo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MembroInativoPage);



/***/ }),

/***/ "Y3m+":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro-inativo/membro-inativo.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\nh2,\n.informacao-membro {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-editar {\n  background: #2e2e3c;\n}\n\n.bt-inativar {\n  background: #a57d51;\n}\n\n.bt-deletar {\n  background: #35291c;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21lbWJyby1pbmF0aXZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBOzs7O0VBSUUsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJtZW1icm8taW5hdGl2by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi10aXRsZSxcbmgxLFxuaDIsXG4uaW5mb3JtYWNhby1tZW1icm8ge1xuICBmb250LWZhbWlseTogXCJMZXhlbmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmgyIHtcbiAgY29sb3I6ICNhNTdkNTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0LWVkaXRhciB7XG4gIGJhY2tncm91bmQ6ICMyZTJlM2M7XG59XG5cbi5idC1pbmF0aXZhciB7XG4gIGJhY2tncm91bmQ6ICNhNTdkNTE7XG59XG5cbi5idC1kZWxldGFyIHtcbiAgYmFja2dyb3VuZDogIzM1MjkxYztcbn1cblxuLmljb25lcyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "qzYq":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro-inativo/membro-inativo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MembroInativoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroInativoPageModule", function() { return MembroInativoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _membro_inativo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./membro-inativo-routing.module */ "QNml");
/* harmony import */ var _membro_inativo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./membro-inativo.page */ "T6ne");







let MembroInativoPageModule = class MembroInativoPageModule {
};
MembroInativoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _membro_inativo_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembroInativoPageRoutingModule"]
        ],
        declarations: [_membro_inativo_page__WEBPACK_IMPORTED_MODULE_6__["MembroInativoPage"]]
    })
], MembroInativoPageModule);



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
//# sourceMappingURL=membro-inativo-membro-inativo-module-es2015.js.map