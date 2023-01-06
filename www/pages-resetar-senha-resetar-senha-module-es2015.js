(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resetar-senha-resetar-senha-module"],{

/***/ "+B7M":
/*!*********************************************************************!*\
  !*** ./src/app/pages/resetar-senha/resetar-senha-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ResetarSenhaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetarSenhaPageRoutingModule", function() { return ResetarSenhaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resetar_senha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetar-senha.page */ "JSn9");




const routes = [
    {
        path: '',
        component: _resetar_senha_page__WEBPACK_IMPORTED_MODULE_3__["ResetarSenhaPage"]
    }
];
let ResetarSenhaPageRoutingModule = class ResetarSenhaPageRoutingModule {
};
ResetarSenhaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetarSenhaPageRoutingModule);



/***/ }),

/***/ "+vRz":
/*!*************************************************************!*\
  !*** ./src/app/pages/resetar-senha/resetar-senha.module.ts ***!
  \*************************************************************/
/*! exports provided: ResetarSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetarSenhaPageModule", function() { return ResetarSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _resetar_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resetar-senha-routing.module */ "+B7M");
/* harmony import */ var _resetar_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetar-senha.page */ "JSn9");







let ResetarSenhaPageModule = class ResetarSenhaPageModule {
};
ResetarSenhaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resetar_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetarSenhaPageRoutingModule"]
        ],
        declarations: [_resetar_senha_page__WEBPACK_IMPORTED_MODULE_6__["ResetarSenhaPage"]]
    })
], ResetarSenhaPageModule);



/***/ }),

/***/ "8+Hp":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetar-senha/resetar-senha.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>resetar-senha</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "JSn9":
/*!***********************************************************!*\
  !*** ./src/app/pages/resetar-senha/resetar-senha.page.ts ***!
  \***********************************************************/
/*! exports provided: ResetarSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetarSenhaPage", function() { return ResetarSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resetar_senha_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resetar-senha.page.html */ "8+Hp");
/* harmony import */ var _resetar_senha_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetar-senha.page.scss */ "PocW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modelo_Usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modelo/Usuario */ "aKcV");
/* harmony import */ var src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/Autenticacao */ "tTKV");
/* harmony import */ var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicos/Membro */ "fX5e");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");









let ResetarSenhaPage = class ResetarSenhaPage {
    constructor(membroService, autenticacao, aviso) {
        this.membroService = membroService;
        this.autenticacao = autenticacao;
        this.aviso = aviso;
        this.usuario = this.autenticacao.pegarDadosLocalmente() ? this.autenticacao.pegarDadosLocalmente() : new src_app_modelo_Usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__["MensagensUtil"](this.aviso);
        this.membro = this.autenticacao.dadosMembro(this.usuario.email);
        ;
    }
    resertarSenha(membroAlterado) {
        if (this.usuario) {
            if (this.validaSenha(membroAlterado.senha)) {
                this.membroService.adicionarOuAtualizar(this.trocaSenha(membroAlterado.senha));
                this.mensagens.mensagemSucesso("Senha atualizada com sucesso!");
            }
            else {
                this.mensagens.mensagemAlerta("A Senha não pode ser alterada, você está utilizando a mesma senha anterior!");
            }
        }
        else {
            this.mensagens.mensagemError("A senha não pode ser alterada, verifique se há algum dado necessário faltando!");
        }
    }
    validaSenha(senha) {
        return (this.membro.senha != senha) ? true : false;
    }
    trocaSenha(novaSenha) {
        this.membro.senha = novaSenha;
        return this.membro;
    }
};
ResetarSenhaPage.ctorParameters = () => [
    { type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_7__["MembroService"] },
    { type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ResetarSenhaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resetar-senha',
        template: _raw_loader_resetar_senha_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resetar_senha_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetarSenhaPage);



/***/ }),

/***/ "PocW":
/*!*************************************************************!*\
  !*** ./src/app/pages/resetar-senha/resetar-senha.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldGFyLXNlbmhhLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-resetar-senha-resetar-senha-module-es2015.js.map