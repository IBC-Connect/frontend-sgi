(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edicao-cargo-cargo-module"],{

/***/ "KK+Y":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edicao/cargo/cargo.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Editar cargo</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n        <h2>Informações do Cargo</h2>\r\n\r\n        <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome<span>*</span></ion-label>\r\n            <ion-input mode=\"md\" [(ngModel)]=\"cargo.nome\" type=\"text\" maxlength=\"100\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Descrição <span>*</span></ion-label>\r\n            <ion-textarea mode=\"md\" [(ngModel)]=\"cargo.descricao\"></ion-textarea>\r\n        </ion-item>\r\n    </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar no-padding id=\"rodape\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button color=\"primary\" (click)=\"editar()\" [disabled]=\"disabledBotaoAtualizar()\" type=\"submit\" fill=\"solid\" expand=\"full\" mode=\"md\">\r\n                        Atualizar</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "bYY2":
/*!************************************************************!*\
  !*** ./src/app/pages/edicao/cargo/cargo-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CargoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoPageRoutingModule", function() { return CargoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cargo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cargo.page */ "y2a7");




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



/***/ }),

/***/ "uh9W":
/*!****************************************************!*\
  !*** ./src/app/pages/edicao/cargo/cargo.module.ts ***!
  \****************************************************/
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
/* harmony import */ var _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cargo-routing.module */ "bYY2");
/* harmony import */ var _cargo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cargo.page */ "y2a7");







let CargoPageModule = class CargoPageModule {
};
CargoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CargoPageRoutingModule"]
        ],
        declarations: [_cargo_page__WEBPACK_IMPORTED_MODULE_6__["CargoPage"]]
    })
], CargoPageModule);



/***/ }),

/***/ "vIlL":
/*!****************************************************!*\
  !*** ./src/app/pages/edicao/cargo/cargo.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content,\nion-item {\n  --background: #e6e6e6;\n}\n\nion-title, h2 {\n  --color: #fff;\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-content,\nion-item,\nion-input,\nion-textarea,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-input, ion-textarea {\n  text-transform: uppercase;\n  font-size: 9pt;\n}\n\nion-input,\nion-textarea,\n.titulo-dado,\nh2 {\n  color: #2e2e3c;\n}\n\n#rodape {\n  --background: #e6e6e6;\n}\n\nspan {\n  color: #eb445a;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZ28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTs7Ozs7Ozs7O0VBU0csZ0NBQUE7QUFDSDs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBOzs7O0VBSUksY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJjYXJnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCwgXHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG59XHJcblxyXG5pb24tdGl0bGUsaDJ7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tY29udGVudCwgIFxyXG5pb24taXRlbSwgXHJcbmlvbi1pbnB1dCxcclxuaW9uLXRleHRhcmVhLCBcclxuaW9uLXNlbGVjdCxcclxuLnRpdHVsby1kYWRvLFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcclxuLnRpdHVsby1kYWRvLWJhdGlzbW8ge1xyXG4gICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWF7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiA5cHQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCxcclxuaW9uLXRleHRhcmVhLCBcclxuLnRpdHVsby1kYWRvLFxyXG5oMntcclxuICAgIGNvbG9yOiMyZTJlM2M7XHJcbn0gXHJcblxyXG4jcm9kYXBle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2OyBcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogI2ViNDQ1YTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOjEzcHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6MSU7XHJcbn0iXX0= */");

/***/ }),

/***/ "y2a7":
/*!**************************************************!*\
  !*** ./src/app/pages/edicao/cargo/cargo.page.ts ***!
  \**************************************************/
/*! exports provided: CargoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoPage", function() { return CargoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cargo.page.html */ "KK+Y");
/* harmony import */ var _cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cargo.page.scss */ "vIlL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/Cargo */ "EhKG");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");








let CargoPage = class CargoPage {
    constructor(cargoService, aviso, router) {
        this.cargoService = cargoService;
        this.aviso = aviso;
        this.router = router;
        const nav = this.router.getCurrentNavigation();
        this.cargo = nav.extras.state.content;
        this.inicializar();
    }
    inicializar() {
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_7__["MensagensUtil"](this.aviso);
    }
    disabledBotaoAtualizar() {
        return this.cargo.nome == null || this.cargo.descricao == null;
    }
    editar() {
        if (this.cargo) {
            this.cargo.nome = this.cargo.nome.toUpperCase();
            this.cargo.descricao = this.cargo.descricao.toUpperCase();
            this.cargoService.adicionarOuAtualizar(this.cargo);
            this.mensagens.mensagemSucesso("Cargo atualizado com sucesso!");
            this.inicializar();
        }
    }
};
CargoPage.ctorParameters = () => [
    { type: src_app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_6__["CargoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CargoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cargo',
        template: _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CargoPage);



/***/ })

}]);
//# sourceMappingURL=pages-edicao-cargo-cargo-module-es2015.js.map