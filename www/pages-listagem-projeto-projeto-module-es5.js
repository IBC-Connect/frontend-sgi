(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-listagem-projeto-projeto-module"], {
    /***/
    "6rTz":
    /*!********************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto.page.ts ***!
      \********************************************************/

    /*! exports provided: ProjetoPage */

    /***/
    function rTz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoPage", function () {
        return ProjetoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_projeto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./projeto.page.html */
      "x+rC");
      /* harmony import */


      var _projeto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./projeto.page.scss */
      "y7zY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProjetoPage = function ProjetoPage() {
        _classCallCheck(this, ProjetoPage);
      };

      ProjetoPage.ctorParameters = function () {
        return [];
      };

      ProjetoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projeto',
        template: _raw_loader_projeto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projeto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProjetoPage);
      /***/
    },

    /***/
    "RNvU":
    /*!******************************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: ProjetoPageRoutingModule */

    /***/
    function RNvU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoPageRoutingModule", function () {
        return ProjetoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _projeto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./projeto.page */
      "6rTz");

      var routes = [{
        path: '',
        component: _projeto_page__WEBPACK_IMPORTED_MODULE_3__["ProjetoPage"],
        children: [{
          path: 'ativos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | projeto-ativo-projeto-ativo-module */
            [__webpack_require__.e("common"), __webpack_require__.e("projeto-ativo-projeto-ativo-module")]).then(__webpack_require__.bind(null,
            /*! ./projeto-ativo/projeto-ativo.module */
            "IpJN")).then(function (m) {
              return m.ProjetoAtivoPageModule;
            });
          }
        }, {
          path: 'inativos',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | projeto-inativo-projeto-inativo-module */
            "projeto-inativo-projeto-inativo-module").then(__webpack_require__.bind(null,
            /*! ./projeto-inativo/projeto-inativo.module */
            "EVOp")).then(function (m) {
              return m.ProjetoInativoPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/lista/projeto/ativos',
          pathMatch: 'full'
        }]
      }];

      var ProjetoPageRoutingModule = function ProjetoPageRoutingModule() {
        _classCallCheck(this, ProjetoPageRoutingModule);
      };

      ProjetoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProjetoPageRoutingModule);
      /***/
    },

    /***/
    "kR89":
    /*!**********************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto.module.ts ***!
      \**********************************************************/

    /*! exports provided: ProjetoPageModule */

    /***/
    function kR89(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoPageModule", function () {
        return ProjetoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./projeto-routing.module */
      "RNvU");
      /* harmony import */


      var _projeto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./projeto.page */
      "6rTz");

      var ProjetoPageModule = function ProjetoPageModule() {
        _classCallCheck(this, ProjetoPageModule);
      };

      ProjetoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetoPageRoutingModule"]],
        declarations: [_projeto_page__WEBPACK_IMPORTED_MODULE_6__["ProjetoPage"]]
      })], ProjetoPageModule);
      /***/
    },

    /***/
    "x+rC":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/projeto/projeto.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xRC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button tab=\"ativos\">\r\n        <ion-icon name=\"person-add\"></ion-icon>\r\n        <ion-label>Ativos</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"inativos\">\r\n        <ion-icon name=\"person-remove\"></ion-icon>\r\n        <ion-label>Inativos</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "y7zY":
    /*!**********************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function y7zY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inativo, .ativo {\n  font-size: 30px;\n}\n\n.ativo, #tabAtivos {\n  color: #20c043;\n}\n\n.inativo, #tabInativos {\n  color: #eb445a;\n}\n\n.tituloTab {\n  font-size: 18px;\n  font-family: \"Lexend\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamV0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7QUFBRiIsImZpbGUiOiJwcm9qZXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW5hdGl2bywgLmF0aXZve1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmF0aXZvLCAjdGFiQXRpdm9ze1xyXG4gIGNvbG9yOiAjMjBjMDQzO1xyXG59XHJcblxyXG4uaW5hdGl2bywgI3RhYkluYXRpdm9ze1xyXG4gIGNvbG9yOiAjZWI0NDVhO1xyXG59XHJcblxyXG4udGl0dWxvVGFie1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-listagem-projeto-projeto-module-es5.js.map