(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-listagem-membro-membro-module"], {
    /***/
    "5ESp":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/membro/membro.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ESp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"ativos\">\n        <ion-icon name=\"person-add\"></ion-icon>\n        <ion-label>Ativos</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"inativos\">\n        <ion-icon name=\"person-remove\"></ion-icon>\n        <ion-label>Inativos</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"congregados\">\n        <ion-icon name=\"people-circle-outline\"></ion-icon>\n        <ion-label>Congregados</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"voluntarios\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n        <ion-label>Voluntaríos</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n";
      /***/
    },

    /***/
    "Nbk/":
    /*!******************************************************!*\
      !*** ./src/app/pages/listagem/membro/membro.page.ts ***!
      \******************************************************/

    /*! exports provided: MembroPage */

    /***/
    function Nbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembroPage", function () {
        return MembroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_membro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./membro.page.html */
      "5ESp");
      /* harmony import */


      var _membro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./membro.page.scss */
      "z10N");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MembroPage = function MembroPage() {
        _classCallCheck(this, MembroPage);
      };

      MembroPage.ctorParameters = function () {
        return [];
      };

      MembroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-membro',
        template: _raw_loader_membro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_membro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MembroPage);
      /***/
    },

    /***/
    "TQ8i":
    /*!****************************************************************!*\
      !*** ./src/app/pages/listagem/membro/membro-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: MembroPageRoutingModule */

    /***/
    function TQ8i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembroPageRoutingModule", function () {
        return MembroPageRoutingModule;
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


      var _membro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./membro.page */
      "Nbk/");

      var routes = [{
        path: '',
        component: _membro_page__WEBPACK_IMPORTED_MODULE_3__["MembroPage"],
        children: [{
          path: 'ativos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | membro-ativo-membro-ativo-module */
            [__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("membro-ativo-membro-ativo-module")]).then(__webpack_require__.bind(null,
            /*! ./membro-ativo/membro-ativo.module */
            "Ab4i")).then(function (m) {
              return m.MembroAtivoPageModule;
            });
          }
        }, {
          path: 'inativos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | membro-inativo-membro-inativo-module */
            [__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("membro-inativo-membro-inativo-module")]).then(__webpack_require__.bind(null,
            /*! ./membro-inativo/membro-inativo.module */
            "qzYq")).then(function (m) {
              return m.MembroInativoPageModule;
            });
          }
        }, {
          path: 'congregados',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | congregado-congregado-module */
            [__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("congregado-congregado-module")]).then(__webpack_require__.bind(null,
            /*! ./congregado/congregado.module */
            "Ewl5")).then(function (m) {
              return m.CongregadoPageModule;
            });
          }
        }, {
          path: 'voluntarios',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | voluntario-voluntario-module */
            [__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("voluntario-voluntario-module")]).then(__webpack_require__.bind(null,
            /*! ./voluntario/voluntario.module */
            "5T/8")).then(function (m) {
              return m.VoluntarioPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/lista/membro/ativos',
          pathMatch: 'full'
        }]
      }];

      var MembroPageRoutingModule = function MembroPageRoutingModule() {
        _classCallCheck(this, MembroPageRoutingModule);
      };

      MembroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MembroPageRoutingModule);
      /***/
    },

    /***/
    "wIo6":
    /*!********************************************************!*\
      !*** ./src/app/pages/listagem/membro/membro.module.ts ***!
      \********************************************************/

    /*! exports provided: MembroPageModule */

    /***/
    function wIo6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembroPageModule", function () {
        return MembroPageModule;
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


      var _membro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./membro-routing.module */
      "TQ8i");
      /* harmony import */


      var _membro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./membro.page */
      "Nbk/");

      var MembroPageModule = function MembroPageModule() {
        _classCallCheck(this, MembroPageModule);
      };

      MembroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _membro_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembroPageRoutingModule"]],
        declarations: [_membro_page__WEBPACK_IMPORTED_MODULE_6__["MembroPage"]]
      })], MembroPageModule);
      /***/
    },

    /***/
    "z10N":
    /*!********************************************************!*\
      !*** ./src/app/pages/listagem/membro/membro.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function z10N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inativo, .ativo {\n  font-size: 30px;\n}\n\n.ativo, #tabAtivos {\n  color: #20c043;\n}\n\n.inativo, #tabInativos {\n  color: #eb445a;\n}\n\n.tituloTab {\n  font-size: 18px;\n  font-family: \"Lexend\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lbWJyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUFBSiIsImZpbGUiOiJtZW1icm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5hdGl2bywgLmF0aXZve1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmF0aXZvLCAjdGFiQXRpdm9ze1xuICAgIGNvbG9yOiAjMjBjMDQzO1xufVxuXG4uaW5hdGl2bywgI3RhYkluYXRpdm9ze1xuICAgIGNvbG9yOiAjZWI0NDVhO1xufVxuXG4udGl0dWxvVGFie1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-listagem-membro-membro-module-es5.js.map