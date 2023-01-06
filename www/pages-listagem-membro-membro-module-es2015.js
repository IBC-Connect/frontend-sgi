(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-listagem-membro-membro-module"],{

/***/ "5ESp":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/membro/membro.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button tab=\"ativos\">\r\n        <ion-icon name=\"person-add\"></ion-icon>\r\n        <ion-label>Ativos</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"inativos\">\r\n        <ion-icon name=\"person-remove\"></ion-icon>\r\n        <ion-label>Inativos</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"congregados\">\r\n        <ion-icon name=\"people-circle-outline\"></ion-icon>\r\n        <ion-label>Congregados</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"voluntarios\">\r\n        <ion-icon name=\"person-outline\"></ion-icon>\r\n        <ion-label>Voluntaríos</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Nbk/":
/*!******************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro.page.ts ***!
  \******************************************************/
/*! exports provided: MembroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroPage", function() { return MembroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_membro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./membro.page.html */ "5ESp");
/* harmony import */ var _membro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./membro.page.scss */ "z10N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MembroPage = class MembroPage {
    constructor() { }
    ;
};
MembroPage.ctorParameters = () => [];
MembroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-membro',
        template: _raw_loader_membro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_membro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MembroPage);



/***/ }),

/***/ "TQ8i":
/*!****************************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: MembroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroPageRoutingModule", function() { return MembroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _membro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./membro.page */ "Nbk/");




const routes = [
    {
        path: '',
        component: _membro_page__WEBPACK_IMPORTED_MODULE_3__["MembroPage"],
        children: [
            {
                path: 'ativos',
                loadChildren: () => Promise.all(/*! import() | membro-ativo-membro-ativo-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~fb4509aa"), __webpack_require__.e("membro-ativo-membro-ativo-module")]).then(__webpack_require__.bind(null, /*! ./membro-ativo/membro-ativo.module */ "Ab4i")).then((m) => m.MembroAtivoPageModule),
            },
            {
                path: 'inativos',
                loadChildren: () => Promise.all(/*! import() | membro-inativo-membro-inativo-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~fb4509aa"), __webpack_require__.e("membro-inativo-membro-inativo-module")]).then(__webpack_require__.bind(null, /*! ./membro-inativo/membro-inativo.module */ "qzYq")).then((m) => m.MembroInativoPageModule),
            },
            {
                path: 'congregados',
                loadChildren: () => Promise.all(/*! import() | congregado-congregado-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~fb4509aa"), __webpack_require__.e("congregado-congregado-module")]).then(__webpack_require__.bind(null, /*! ./congregado/congregado.module */ "Ewl5")).then((m) => m.CongregadoPageModule),
            },
            {
                path: 'voluntarios',
                loadChildren: () => Promise.all(/*! import() | voluntario-voluntario-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~fb4509aa"), __webpack_require__.e("voluntario-voluntario-module")]).then(__webpack_require__.bind(null, /*! ./voluntario/voluntario.module */ "5T/8")).then((m) => m.VoluntarioPageModule),
            },
            {
                path: '',
                redirectTo: '/lista/membro/ativos',
                pathMatch: 'full',
            },
        ],
    },
];
let MembroPageRoutingModule = class MembroPageRoutingModule {
};
MembroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MembroPageRoutingModule);



/***/ }),

/***/ "wIo6":
/*!********************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro.module.ts ***!
  \********************************************************/
/*! exports provided: MembroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroPageModule", function() { return MembroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _membro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./membro-routing.module */ "TQ8i");
/* harmony import */ var _membro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./membro.page */ "Nbk/");







let MembroPageModule = class MembroPageModule {
};
MembroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _membro_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembroPageRoutingModule"]
        ],
        declarations: [_membro_page__WEBPACK_IMPORTED_MODULE_6__["MembroPage"]]
    })
], MembroPageModule);



/***/ }),

/***/ "z10N":
/*!********************************************************!*\
  !*** ./src/app/pages/listagem/membro/membro.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inativo, .ativo {\n  font-size: 30px;\n}\n\n.ativo, #tabAtivos {\n  color: #20c043;\n}\n\n.inativo, #tabInativos {\n  color: #eb445a;\n}\n\n.tituloTab {\n  font-size: 18px;\n  font-family: \"Lexend\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVtYnJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBQUFKIiwiZmlsZSI6Im1lbWJyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmluYXRpdm8sIC5hdGl2b3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmF0aXZvLCAjdGFiQXRpdm9ze1xyXG4gICAgY29sb3I6ICMyMGMwNDM7XHJcbn1cclxuXHJcbi5pbmF0aXZvLCAjdGFiSW5hdGl2b3N7XHJcbiAgICBjb2xvcjogI2ViNDQ1YTtcclxufVxyXG5cclxuLnRpdHVsb1RhYntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-listagem-membro-membro-module-es2015.js.map