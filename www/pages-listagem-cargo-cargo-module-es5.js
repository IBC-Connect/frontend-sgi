(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-listagem-cargo-cargo-module"], {
    /***/
    "HeIH":
    /*!**************************************************************!*\
      !*** ./src/app/pages/listagem/cargo/cargo-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: CargoPageRoutingModule */

    /***/
    function HeIH(module, __webpack_exports__, __webpack_require__) {
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
      "xevi");

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
    "LZOF":
    /*!******************************************************!*\
      !*** ./src/app/pages/listagem/cargo/cargo.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function LZOF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\n.bt-editar {\n  background: #a7a7aa;\n}\n\n.bt-associar {\n  background: #2e2e3c;\n}\n\n.bt-deletar {\n  background: #a57d51;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhcmdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBOzs7RUFHRSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJjYXJnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi10aXRsZSxcbmgxLFxuLmluZm9ybWFjYW8tbWVtYnJvIHtcbiAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kXCIsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnQtZWRpdGFyIHtcbiAgYmFja2dyb3VuZDogI2E3YTdhYTtcbn1cblxuLmJ0LWFzc29jaWFyIHtcbiAgYmFja2dyb3VuZDogIzJlMmUzYztcbn1cblxuLmJ0LWRlbGV0YXIge1xuICBiYWNrZ3JvdW5kOiAjYTU3ZDUxO1xufVxuXG4uaWNvbmVzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "UNn0":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/cargo/cargo.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function UNn0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Total de cargos cadastrados: {{numTotalCargos}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar\n  (ionChange)=\"onSearchTerm($event)\"\n    placeholder=\"Digite o nome do cargo\"\n    color=\"tertiary\"\n  ></ion-searchbar>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col>\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let cargo of listaCargosFiltrados\" >\n            <ion-item text-wrap class=\"item-text-wrap\">\n              <ion-label class=\"informacao-membro\" text-wrap>\n                <h1 class=\"content-title\">{{cargo.nome}}</h1>\n                {{cargo.responsavel? 'Responsável: '.concat(cargo.responsavel) : '' }}\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <button\n                ion-button\n                (click)=\"editarCargo(cargo)\"\n                class=\"bt-editar\"\n              >\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\n              </button>\n              <button\n                ion-button\n                (click)=\"associarCargo(cargo)\"\n                routerDirection=\"forward\"\n                class=\"bt-associar\"\n              >\n                <ion-icon class=\"icones\" name=\"git-compare\"></ion-icon>\n              </button>\n              <button (click)=\"confirmarExclusao(cargo)\" ion-button class=\"bt-deletar\">\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "alV5":
    /*!******************************************************!*\
      !*** ./src/app/pages/listagem/cargo/cargo.module.ts ***!
      \******************************************************/

    /*! exports provided: CargoPageModule */

    /***/
    function alV5(module, __webpack_exports__, __webpack_require__) {
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
      "HeIH");
      /* harmony import */


      var _cargo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cargo.page */
      "xevi");

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
    "xevi":
    /*!****************************************************!*\
      !*** ./src/app/pages/listagem/cargo/cargo.page.ts ***!
      \****************************************************/

    /*! exports provided: CargoPage */

    /***/
    function xevi(module, __webpack_exports__, __webpack_require__) {
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
      "UNn0");
      /* harmony import */


      var _cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cargo.page.scss */
      "LZOF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/servicos/Cargo */
      "EhKG");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");
      /* harmony import */


      var src_app_util_RedirecionadorUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/RedirecionadorUtil */
      "YAOL");

      var CargoPage = /*#__PURE__*/function () {
        function CargoPage(cargoService, aviso, navCtrl, alertController) {
          _classCallCheck(this, CargoPage);

          this.cargoService = cargoService;
          this.aviso = aviso;
          this.navCtrl = navCtrl;
          this.alertController = alertController;
          this.inicializar();
        }

        _createClass(CargoPage, [{
          key: "inicializar",
          value: function inicializar() {
            var _this = this;

            this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__["MensagensUtil"](this.aviso);
            this.redirecionador = new src_app_util_RedirecionadorUtil__WEBPACK_IMPORTED_MODULE_7__["RedirecionadorUtil"](this.navCtrl);
            this.listaCargosObservable = this.cargoService.listar();
            this.listaCargosObservable.subscribe(function (response) {
              _this.listaCargos = response;
              _this.listaCargosFiltrados = response;
              _this.numTotalCargos = _this.listaCargos.length;

              _this.listaCargosFiltrados.sort(function (a, b) {
                return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
              });
            });
          }
        }, {
          key: "confirmarExclusao",
          value: function confirmarExclusao(cargo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: 'Confirmação de exclusão',
                        message: 'Tem certeza que deseja excluir o cargo selecionado?',
                        buttons: [{
                          text: 'Não',
                          handler: function handler() {
                            _this2.alertController.dismiss();
                          }
                        }, {
                          text: 'Sim',
                          handler: function handler() {
                            _this2.excluirCargo(cargo);
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "excluirCargo",
          value: function excluirCargo(cargo) {
            this.cargoService.deletar(cargo.key);
            this.mensagens.mensagemSucesso('Cargo excluído com sucesso!');
            this.inicializar();
          }
        }, {
          key: "editarCargo",
          value: function editarCargo(cargo) {
            this.navCtrl.navigateForward('/editar/cargo', {
              state: {
                content: cargo
              }
            });
          }
        }, {
          key: "associarCargo",
          value: function associarCargo(cargo) {
            this.navCtrl.navigateForward('/associar/cargo', {
              state: {
                content: cargo
              }
            });
          }
        }, {
          key: "onSearchTerm",
          value: function onSearchTerm(ev) {
            this.listaCargosFiltrados = this.listaCargos;
            var val = ev.detail.value;

            if (val && val.trim() !== '') {
              this.listaCargosFiltrados = this.listaCargosFiltrados.filter(function (term) {
                return term.nome.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
              });
            }
          }
        }]);

        return CargoPage;
      }();

      CargoPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_5__["CargoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
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
//# sourceMappingURL=pages-listagem-cargo-cargo-module-es5.js.map