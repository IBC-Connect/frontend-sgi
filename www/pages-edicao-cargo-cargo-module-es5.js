(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edicao-cargo-cargo-module"], {
    /***/
    "KK+Y":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edicao/cargo/cargo.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function KKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Editar cargo</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <h2>Informações do Cargo</h2>\n\n        <ion-item class=\"row-item\">\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome<span>*</span></ion-label>\n            <ion-input mode=\"md\" [(ngModel)]=\"cargo.nome\" type=\"text\" maxlength=\"100\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"row-item\">\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Descrição <span>*</span></ion-label>\n            <ion-textarea mode=\"md\" [(ngModel)]=\"cargo.descricao\"></ion-textarea>\n        </ion-item>\n    </ion-grid>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar no-padding id=\"rodape\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-button color=\"primary\" (click)=\"editar()\" [disabled]=\"disabledBotaoAtualizar()\" type=\"submit\" fill=\"solid\" expand=\"full\" mode=\"md\">\n                        Atualizar</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "bYY2":
    /*!************************************************************!*\
      !*** ./src/app/pages/edicao/cargo/cargo-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: CargoPageRoutingModule */

    /***/
    function bYY2(module, __webpack_exports__, __webpack_require__) {
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
      "y2a7");

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
    },

    /***/
    "sZxV":
    /*!***************************************!*\
      !*** ./src/app/util/MensagensUtil.ts ***!
      \***************************************/

    /*! exports provided: MensagensUtil */

    /***/
    function sZxV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MensagensUtil", function () {
        return MensagensUtil;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");

      var MensagensUtil = /*#__PURE__*/function () {
        function MensagensUtil(aviso) {
          _classCallCheck(this, MensagensUtil);

          this.aviso = aviso;
        }

        _createClass(MensagensUtil, [{
          key: "mensagemSucesso",
          value: function mensagemSucesso(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var exibirMensagem;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      exibirMensagem = this.aviso.create({
                        id: 'sucesso',
                        position: 'top',
                        message: message,
                        duration: 3000,
                        color: 'success'
                      });
                      _context.next = 3;
                      return exibirMensagem;

                    case 3:
                      _context.sent.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "mensagemError",
          value: function mensagemError(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var exibirMensagem;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      exibirMensagem = this.aviso.create({
                        id: 'error',
                        position: 'top',
                        message: error,
                        duration: 3000,
                        color: 'danger'
                      });
                      _context2.next = 3;
                      return exibirMensagem;

                    case 3:
                      _context2.sent.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "mensagemAlerta",
          value: function mensagemAlerta(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var exibirMensagem;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      exibirMensagem = this.aviso.create({
                        id: 'alerta',
                        position: 'top',
                        message: message,
                        duration: 3000,
                        color: 'warning'
                      });
                      _context3.next = 3;
                      return exibirMensagem;

                    case 3:
                      _context3.sent.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return MensagensUtil;
      }();
      /***/

    },

    /***/
    "uh9W":
    /*!****************************************************!*\
      !*** ./src/app/pages/edicao/cargo/cargo.module.ts ***!
      \****************************************************/

    /*! exports provided: CargoPageModule */

    /***/
    function uh9W(module, __webpack_exports__, __webpack_require__) {
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
      "bYY2");
      /* harmony import */


      var _cargo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cargo.page */
      "y2a7");

      var CargoPageModule = function CargoPageModule() {
        _classCallCheck(this, CargoPageModule);
      };

      CargoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CargoPageRoutingModule"]],
        declarations: [_cargo_page__WEBPACK_IMPORTED_MODULE_6__["CargoPage"]]
      })], CargoPageModule);
      /***/
    },

    /***/
    "vIlL":
    /*!****************************************************!*\
      !*** ./src/app/pages/edicao/cargo/cargo.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function vIlL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content,\nion-item {\n  --background: #e6e6e6;\n}\n\nion-title, h2 {\n  --color: #fff;\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-content,\nion-item,\nion-input,\nion-textarea,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-input, ion-textarea {\n  text-transform: uppercase;\n  font-size: 9pt;\n}\n\nion-input,\nion-textarea,\n.titulo-dado,\nh2 {\n  color: #2e2e3c;\n}\n\n#rodape {\n  --background: #e6e6e6;\n}\n\nspan {\n  color: #eb445a;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhcmdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7Ozs7Ozs7OztFQVNHLGdDQUFBO0FBQ0g7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTs7OztFQUlJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiY2FyZ28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsIFxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuXG5pb24tdGl0bGUsaDJ7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1jb250ZW50LCAgXG5pb24taXRlbSwgXG5pb24taW5wdXQsXG5pb24tdGV4dGFyZWEsIFxuaW9uLXNlbGVjdCxcbi50aXR1bG8tZGFkbyxcbi50aXR1bG8tZGFkby1zZWxlY3QsXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcbi50aXR1bG8tZGFkby1iYXRpc21vIHtcbiAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xufVxuXG5pb24taW5wdXQsIGlvbi10ZXh0YXJlYXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogOXB0O1xufVxuXG5pb24taW5wdXQsXG5pb24tdGV4dGFyZWEsIFxuLnRpdHVsby1kYWRvLFxuaDJ7XG4gICAgY29sb3I6IzJlMmUzYztcbn0gXG5cbiNyb2RhcGV7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2OyBcbn1cblxuc3BhbiB7XG4gICAgY29sb3I6ICNlYjQ0NWE7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6MTNwdDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi1sZWZ0OjElO1xufSJdfQ== */";
      /***/
    },

    /***/
    "y2a7":
    /*!**************************************************!*\
      !*** ./src/app/pages/edicao/cargo/cargo.page.ts ***!
      \**************************************************/

    /*! exports provided: CargoPage */

    /***/
    function y2a7(module, __webpack_exports__, __webpack_require__) {
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
      "KK+Y");
      /* harmony import */


      var _cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cargo.page.scss */
      "vIlL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/servicos/Cargo */
      "EhKG");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");

      var CargoPage = /*#__PURE__*/function () {
        function CargoPage(cargoService, aviso, router) {
          _classCallCheck(this, CargoPage);

          this.cargoService = cargoService;
          this.aviso = aviso;
          this.router = router;
          var nav = this.router.getCurrentNavigation();
          this.cargo = nav.extras.state.content;
          this.inicializar();
        }

        _createClass(CargoPage, [{
          key: "inicializar",
          value: function inicializar() {
            this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_7__["MensagensUtil"](this.aviso);
          }
        }, {
          key: "disabledBotaoAtualizar",
          value: function disabledBotaoAtualizar() {
            return this.cargo.nome == null || this.cargo.descricao == null;
          }
        }, {
          key: "editar",
          value: function editar() {
            if (this.cargo) {
              this.cargo.nome = this.cargo.nome.toUpperCase();
              this.cargo.descricao = this.cargo.descricao.toUpperCase();
              this.cargoService.adicionarOuAtualizar(this.cargo);
              this.mensagens.mensagemSucesso("Cargo atualizado com sucesso!");
              this.inicializar();
            }
          }
        }]);

        return CargoPage;
      }();

      CargoPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_6__["CargoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      CargoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cargo',
        template: _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CargoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-edicao-cargo-cargo-module-es5.js.map