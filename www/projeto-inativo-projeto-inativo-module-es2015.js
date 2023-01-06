(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projeto-inativo-projeto-inativo-module"],{

/***/ "DaqS":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/projeto/projeto-inativo/projeto-inativo.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Total de projetos inativos: {{numTotalProjetos}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <h2 *ngIf=\"numTotalProjetos == 0\"> Não há projetos inativos.</h2>\r\n  <ion-searchbar *ngIf=\"numTotalProjetos != 0\"\r\n  (ionChange)=\"pesquisarProjetos($event)\"\r\n    placeholder=\"Digite o nome do projeto\"\r\n    color=\"tertiary\"\r\n  ></ion-searchbar>\r\n  <ion-grid>\r\n    <ion-row align-items-center justify-content-center>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item-sliding *ngFor=\"let projeto of projetosInativosFiltrados\" >\r\n            <ion-item text-wrap class=\"item-text-wrap\">\r\n              <ion-label class=\"informacao-membro\" text-wrap>\r\n                <h1 class=\"content-title\">{{projeto.nome}}</h1>\r\n                {{projeto.responsavel? 'Responsável: '.concat(projeto.responsavel) : '' }} \r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item-options side=\"start\">\r\n              <button (click)=\"confirmarAtivacao(projeto)\" ion-button class=\"bt-ativar\">\r\n                <ion-icon  class=\"icones\" name=\"person-add\"></ion-icon>\r\n              </button>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "EVOp":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/listagem/projeto/projeto-inativo/projeto-inativo.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProjetoInativoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoInativoPageModule", function() { return ProjetoInativoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _projeto_inativo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projeto-inativo-routing.module */ "eP6P");
/* harmony import */ var _projeto_inativo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projeto-inativo.page */ "lZ2J");







let ProjetoInativoPageModule = class ProjetoInativoPageModule {
};
ProjetoInativoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projeto_inativo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetoInativoPageRoutingModule"]
        ],
        declarations: [_projeto_inativo_page__WEBPACK_IMPORTED_MODULE_6__["ProjetoInativoPage"]]
    })
], ProjetoInativoPageModule);



/***/ }),

/***/ "Xz0Y":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/listagem/projeto/projeto-inativo/projeto-inativo.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title, h1, h2, .informacao-membro {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-ativar {\n  background: #A57D51;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2pldG8taW5hdGl2by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNBIiwiZmlsZSI6InByb2pldG8taW5hdGl2by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFye1xyXG4gICAgbWFyZ2luLXRvcDogIDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tdGl0bGUsIGgxLCBoMiwgLmluZm9ybWFjYW8tbWVtYnJve1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgY29sb3I6ICNhNTdkNTE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuLmJ0LWF0aXZhcntcclxuICAgIGJhY2tncm91bmQ6ICNBNTdENTE7XHJcbn1cclxuXHJcbi5pY29uZXN7XHJcbmNvbG9yOiAjZmZmO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "eP6P":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/listagem/projeto/projeto-inativo/projeto-inativo-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ProjetoInativoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoInativoPageRoutingModule", function() { return ProjetoInativoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _projeto_inativo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projeto-inativo.page */ "lZ2J");




const routes = [
    {
        path: '',
        component: _projeto_inativo_page__WEBPACK_IMPORTED_MODULE_3__["ProjetoInativoPage"]
    }
];
let ProjetoInativoPageRoutingModule = class ProjetoInativoPageRoutingModule {
};
ProjetoInativoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjetoInativoPageRoutingModule);



/***/ }),

/***/ "lZ2J":
/*!********************************************************************************!*\
  !*** ./src/app/pages/listagem/projeto/projeto-inativo/projeto-inativo.page.ts ***!
  \********************************************************************************/
/*! exports provided: ProjetoInativoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoInativoPage", function() { return ProjetoInativoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projeto_inativo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projeto-inativo.page.html */ "DaqS");
/* harmony import */ var _projeto_inativo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projeto-inativo.page.scss */ "Xz0Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicos/Projeto */ "MoJo");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");







let ProjetoInativoPage = class ProjetoInativoPage {
    constructor(aviso, alertController, projetoService) {
        this.aviso = aviso;
        this.alertController = alertController;
        this.projetoService = projetoService;
        this.numTotalProjetos = 0;
    }
    ngOnInit() {
        this.inicializar();
    }
    inicializar() {
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__["MensagensUtil"](this.aviso);
        this.listaProjetosObservable = this.projetoService.listar();
        this.listaProjetosObservable.subscribe((response) => {
            this.projetosInativos = response;
            this.projetosInativosFiltrados = response;
            this.projetosInativos = this.projetosInativos.filter((m) => m.situacao === "Inativo");
            this.projetosInativosFiltrados = this.projetosInativosFiltrados.filter((m) => m.situacao === "Inativo");
            this.numTotalProjetos =
                this.projetosInativos.length > 0 ? this.projetosInativos.length : 0;
            this.projetosInativosFiltrados.sort((a, b) => a.responsavel > b.responsavel
                ? 1
                : b.responsavel > a.responsavel
                    ? -1
                    : 0);
        });
    }
    confirmarAtivacao(projeto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Confirmação de ativação",
                message: "Tem certeza que deseja ativar o projeto selecionado?",
                buttons: [
                    {
                        text: "Não",
                        handler: () => {
                            this.alertController.dismiss();
                        },
                    },
                    {
                        text: "Sim",
                        handler: () => {
                            this.ativarProjeto(projeto);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    ativarProjeto(projeto) {
        if (projeto.key) {
            projeto.situacao = "Ativo";
            this.projetoService.adicionarOuAtualizar(projeto, "Projeto ativado com sucesso!");
            this.inicializar();
        }
    }
    pesquisarProjetos(ev) {
        this.projetosInativosFiltrados = this.projetosInativos;
        const val = ev.detail.value;
        if (val && val.trim() !== "") {
            this.projetosInativosFiltrados = this.projetosInativosFiltrados.filter((term) => {
                return (term.responsavel.toUpperCase().indexOf(val.trim().toUpperCase()) >
                    -1);
            });
        }
    }
};
ProjetoInativoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_5__["ProjetoService"] }
];
ProjetoInativoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-projeto-inativo",
        template: _raw_loader_projeto_inativo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projeto_inativo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjetoInativoPage);



/***/ })

}]);
//# sourceMappingURL=projeto-inativo-projeto-inativo-module-es2015.js.map