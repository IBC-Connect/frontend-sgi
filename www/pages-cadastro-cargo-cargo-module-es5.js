(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-cargo-cargo-module"], {
    /***/
    "4iOV":
    /*!****************************************************!*\
      !*** ./src/app/pages/cadastro/cargo/cargo.page.ts ***!
      \****************************************************/

    /*! exports provided: CargoPage */

    /***/
    function iOV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CargoPage", function () {
        return CargoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cargo.page.html */
      "kmD9");
      /* harmony import */


      var _cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cargo.page.scss */
      "EVax");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _servicos_Cargo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../servicos/Cargo */
      "EhKG");
      /* harmony import */


      var _modelo_Cargo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../modelo/Cargo */
      "8cY0");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CargoPage = /*#__PURE__*/function () {
        function CargoPage(cargoService, aviso) {
          _classCallCheck(this, CargoPage);

          this.cargoService = cargoService;
          this.aviso = aviso;
          this.cargo = new _modelo_Cargo__WEBPACK_IMPORTED_MODULE_5__["Cargo"]();
          this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__["MensagensUtil"](this.aviso);
        }

        _createClass(CargoPage, [{
          key: "disabledBotaoCadastrar",
          value: function disabledBotaoCadastrar() {
            return this.cargo.nome == null || this.cargo.descricao == null;
          }
        }, {
          key: "cadastrar",
          value: function cadastrar() {
            if (this.cargo) {
              this.cargo.nome = this.cargo.nome.toUpperCase();
              this.cargo.descricao = this.cargo.descricao.toUpperCase();
              this.cargoService.adicionarOuAtualizar(this.cargo);
              this.mensagens.mensagemSucesso("Cadastro realizado com sucesso!");
              this.cargo = new _modelo_Cargo__WEBPACK_IMPORTED_MODULE_5__["Cargo"]();
            }
          }
        }]);

        return CargoPage;
      }();

      CargoPage.ctorParameters = function () {
        return [{
          type: _servicos_Cargo__WEBPACK_IMPORTED_MODULE_4__["CargoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }];
      };

      CargoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cargo',
        template: _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CargoPage);
      /***/
    },

    /***/
    "EVax":
    /*!******************************************************!*\
      !*** ./src/app/pages/cadastro/cargo/cargo.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function EVax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content,\nion-item {\n  --background: #e6e6e6;\n}\n\nion-title, h2 {\n  --color: #fff;\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-content,\nion-item,\nion-input,\nion-textarea,\nion-select,\n.titulo-dado {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-input, ion-textarea {\n  text-transform: uppercase;\n  font-size: 11pt;\n}\n\nion-input,\nion-textarea,\n.titulo-dado,\nh2 {\n  color: #2e2e3c;\n}\n\n#rodape {\n  --background: #e6e6e6;\n}\n\nspan {\n  color: #eb445a;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\n.titulo-dado {\n  font-size: 13pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZ28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTs7Ozs7O0VBTUcsZ0NBQUE7QUFDSDs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBOzs7O0VBSUksY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJjYXJnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCwgXHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG59XHJcblxyXG5pb24tdGl0bGUsaDJ7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tY29udGVudCwgIFxyXG5pb24taXRlbSwgXHJcbmlvbi1pbnB1dCxcclxuaW9uLXRleHRhcmVhLCBcclxuaW9uLXNlbGVjdCxcclxuLnRpdHVsby1kYWRvIHtcclxuICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCwgaW9uLXRleHRhcmVhe1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxufVxyXG5cclxuaW9uLWlucHV0LFxyXG5pb24tdGV4dGFyZWEsIFxyXG4udGl0dWxvLWRhZG8sXHJcbmgye1xyXG4gICAgY29sb3I6IzJlMmUzYztcclxufSBcclxuXHJcbiNyb2RhcGV7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7IFxyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiAjZWI0NDVhO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6MTNwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tbGVmdDoxJTtcclxufVxyXG5cclxuLnRpdHVsby1kYWRve1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG59Il19 */";
      /***/
    },

    /***/
    "kmD9":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cargo/cargo.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function kmD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Cadastro de cargo</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n        <h2>Informações do Cargo</h2>\r\n\r\n        <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome<span>*</span></ion-label>\r\n            <ion-input mode=\"md\" [(ngModel)]=\"cargo.nome\" type=\"text\" maxlength=\"100\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"row-item\">\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Descrição <span>*</span></ion-label>\r\n            <ion-textarea mode=\"md\" [(ngModel)]=\"cargo.descricao\"></ion-textarea>\r\n        </ion-item>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar no-padding id=\"rodape\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button mode=\"md\" color=\"primary\" (click)=\"cadastrar()\" [disabled]=\"disabledBotaoCadastrar()\" type=\"submit\" fill=\"solid\" expand=\"full\">\r\n                        Cadastrar</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "odze":
    /*!******************************************************!*\
      !*** ./src/app/pages/cadastro/cargo/cargo.module.ts ***!
      \******************************************************/

    /*! exports provided: CargoPageModule */

    /***/
    function odze(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CargoPageModule", function () {
        return CargoPageModule;
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


      var _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cargo-routing.module */
      "ydxL");
      /* harmony import */


      var _cargo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cargo.page */
      "4iOV");

      var CargoPageModule = function CargoPageModule() {
        _classCallCheck(this, CargoPageModule);
      };

      CargoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CargoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_cargo_page__WEBPACK_IMPORTED_MODULE_6__["CargoPage"]]
      })], CargoPageModule);
      /***/
    },

    /***/
    "ydxL":
    /*!**************************************************************!*\
      !*** ./src/app/pages/cadastro/cargo/cargo-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: CargoPageRoutingModule */

    /***/
    function ydxL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CargoPageRoutingModule", function () {
        return CargoPageRoutingModule;
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


      var _cargo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cargo.page */
      "4iOV");

      var routes = [{
        path: '',
        component: _cargo_page__WEBPACK_IMPORTED_MODULE_3__["CargoPage"]
      }];

      var CargoPageRoutingModule = function CargoPageRoutingModule() {
        _classCallCheck(this, CargoPageRoutingModule);
      };

      CargoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CargoPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cadastro-cargo-cargo-module-es5.js.map