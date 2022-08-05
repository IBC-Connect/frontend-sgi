(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-cargo-cargo-module"],{

/***/ "4iOV":
/*!****************************************************!*\
  !*** ./src/app/pages/cadastro/cargo/cargo.page.ts ***!
  \****************************************************/
/*! exports provided: CargoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoPage", function() { return CargoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cargo.page.html */ "kmD9");
/* harmony import */ var _cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cargo.page.scss */ "EVax");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicos_Cargo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../servicos/Cargo */ "EhKG");
/* harmony import */ var _modelo_Cargo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modelo/Cargo */ "8cY0");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let CargoPage = class CargoPage {
    constructor(cargoService, aviso) {
        this.cargoService = cargoService;
        this.aviso = aviso;
        this.cargo = new _modelo_Cargo__WEBPACK_IMPORTED_MODULE_5__["Cargo"]();
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__["MensagensUtil"](this.aviso);
    }
    disabledBotaoCadastrar() {
        return this.cargo.nome == null || this.cargo.descricao == null;
    }
    cadastrar() {
        if (this.cargo) {
            this.cargo.nome = this.cargo.nome.toUpperCase();
            this.cargo.descricao = this.cargo.descricao.toUpperCase();
            this.cargoService.adicionarOuAtualizar(this.cargo);
            this.mensagens.mensagemSucesso("Cadastro realizado com sucesso!");
            this.cargo = new _modelo_Cargo__WEBPACK_IMPORTED_MODULE_5__["Cargo"]();
        }
    }
};
CargoPage.ctorParameters = () => [
    { type: _servicos_Cargo__WEBPACK_IMPORTED_MODULE_4__["CargoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
CargoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cargo',
        template: _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CargoPage);



/***/ }),

/***/ "EVax":
/*!******************************************************!*\
  !*** ./src/app/pages/cadastro/cargo/cargo.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content,\nion-item {\n  --background: #e6e6e6;\n}\n\nion-title, h2 {\n  --color: #fff;\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-content,\nion-item,\nion-input,\nion-textarea,\nion-select,\n.titulo-dado {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-input, ion-textarea {\n  text-transform: uppercase;\n  font-size: 11pt;\n}\n\nion-input,\nion-textarea,\n.titulo-dado,\nh2 {\n  color: #2e2e3c;\n}\n\n#rodape {\n  --background: #e6e6e6;\n}\n\nspan {\n  color: #eb445a;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\n.titulo-dado {\n  font-size: 13pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhcmdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7Ozs7OztFQU1HLGdDQUFBO0FBQ0g7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTs7OztFQUlJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiY2FyZ28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsIFxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuXG5pb24tdGl0bGUsaDJ7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1jb250ZW50LCAgXG5pb24taXRlbSwgXG5pb24taW5wdXQsXG5pb24tdGV4dGFyZWEsIFxuaW9uLXNlbGVjdCxcbi50aXR1bG8tZGFkbyB7XG4gICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWF7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDExcHQ7XG59XG5cbmlvbi1pbnB1dCxcbmlvbi10ZXh0YXJlYSwgXG4udGl0dWxvLWRhZG8sXG5oMntcbiAgICBjb2xvcjojMmUyZTNjO1xufSBcblxuI3JvZGFwZXtcbiAgICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7IFxufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogI2ViNDQ1YTtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZToxM3B0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLWxlZnQ6MSU7XG59XG5cbi50aXR1bG8tZGFkb3tcbiAgICBmb250LXNpemU6IDEzcHQ7XG59Il19 */");

/***/ }),

/***/ "kmD9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cargo/cargo.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Cadastro de cargo</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <h2>Informações do Cargo</h2>\n\n        <ion-item class=\"row-item\">\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome<span>*</span></ion-label>\n            <ion-input mode=\"md\" [(ngModel)]=\"cargo.nome\" type=\"text\" maxlength=\"100\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"row-item\">\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Descrição <span>*</span></ion-label>\n            <ion-textarea mode=\"md\" [(ngModel)]=\"cargo.descricao\"></ion-textarea>\n        </ion-item>\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar no-padding id=\"rodape\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-button mode=\"md\" color=\"primary\" (click)=\"cadastrar()\" [disabled]=\"disabledBotaoCadastrar()\" type=\"submit\" fill=\"solid\" expand=\"full\">\n                        Cadastrar</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "odze":
/*!******************************************************!*\
  !*** ./src/app/pages/cadastro/cargo/cargo.module.ts ***!
  \******************************************************/
/*! exports provided: CargoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoPageModule", function() { return CargoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cargo-routing.module */ "ydxL");
/* harmony import */ var _cargo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cargo.page */ "4iOV");







let CargoPageModule = class CargoPageModule {
};
CargoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CargoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_cargo_page__WEBPACK_IMPORTED_MODULE_6__["CargoPage"]]
    })
], CargoPageModule);



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

/***/ "ydxL":
/*!**************************************************************!*\
  !*** ./src/app/pages/cadastro/cargo/cargo-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: CargoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoPageRoutingModule", function() { return CargoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cargo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cargo.page */ "4iOV");




const routes = [
    {
        path: '',
        component: _cargo_page__WEBPACK_IMPORTED_MODULE_3__["CargoPage"]
    }
];
let CargoPageRoutingModule = class CargoPageRoutingModule {
};
CargoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CargoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-cargo-cargo-module-es2015.js.map