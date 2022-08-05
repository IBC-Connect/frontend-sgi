(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-listagem-evento-evento-module"], {
    /***/
    "+nt2":
    /*!******************************************************!*\
      !*** ./src/app/pages/listagem/evento/evento.page.ts ***!
      \******************************************************/

    /*! exports provided: EventoPage */

    /***/
    function nt2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventoPage", function () {
        return EventoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_evento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./evento.page.html */
      "Nnz6");
      /* harmony import */


      var _evento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./evento.page.scss */
      "7YjO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_servicos_Evento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/servicos/Evento */
      "662k");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");
      /* harmony import */


      var src_app_util_RedirecionadorUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/RedirecionadorUtil */
      "YAOL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

      var EventoPage = /*#__PURE__*/function () {
        function EventoPage(eventoService, aviso, navCtrl, alertController) {
          _classCallCheck(this, EventoPage);

          this.eventoService = eventoService;
          this.aviso = aviso;
          this.navCtrl = navCtrl;
          this.alertController = alertController;
          moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('pt-br');
          this.inicializar();
        }

        _createClass(EventoPage, [{
          key: "inicializar",
          value: function inicializar() {
            var _this = this;

            this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__["MensagensUtil"](this.aviso);
            this.redirecionador = new src_app_util_RedirecionadorUtil__WEBPACK_IMPORTED_MODULE_7__["RedirecionadorUtil"](this.navCtrl);
            this.listaEventosObservable = this.eventoService.listar();
            this.listaEventosObservable.subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.verificarEventosExpirados(response);

                      case 2:
                        this.listaEventos = _context.sent;
                        this.listaEventosFiltrados = this.listaEventos;
                        this.numTotalEventos = this.listaEventos ? this.listaEventos.length : 0;
                        this.listaEventosFiltrados = this.listaEventosFiltrados ? this.listaEventosFiltrados.sort(function (a, b) {
                          return moment__WEBPACK_IMPORTED_MODULE_8__["utc"](b.data).diff(moment__WEBPACK_IMPORTED_MODULE_8__["utc"](a.data));
                        }) : new Array();

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "confirmarExclusao",
          value: function confirmarExclusao(evento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Confirmação de exclusão',
                        message: 'Tem certeza que deseja excluir o evento selecionado?',
                        buttons: [{
                          text: 'Não',
                          handler: function handler() {
                            _this2.alertController.dismiss();
                          }
                        }, {
                          text: 'Sim',
                          handler: function handler() {
                            _this2.excluirEvento(evento);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "excluirEvento",
          value: function excluirEvento(evento) {
            this.eventoService.deletar(evento.key);
            this.mensagens.mensagemSucesso('Evento excluído com sucesso!');
            this.inicializar();
          }
        }, {
          key: "editarEvento",
          value: function editarEvento(evento) {
            this.navCtrl.navigateForward('/editar/evento', {
              state: {
                content: evento
              }
            });
          }
        }, {
          key: "pesquisarEvento",
          value: function pesquisarEvento(ev) {
            this.listaEventosFiltrados = this.listaEventos;
            var val = ev.detail.value;

            if (val && val.trim() !== '') {
              this.listaEventosFiltrados = this.listaEventosFiltrados.filter(function (term) {
                return term.nome.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
              });
            }
          }
        }, {
          key: "verificarEventosExpirados",
          value: function verificarEventosExpirados(response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var listaEvento;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      listaEvento = new Array();
                      _context3.next = 3;
                      return response.forEach(function (evento) {
                        if (!moment__WEBPACK_IMPORTED_MODULE_8__(evento.data).isBefore(moment__WEBPACK_IMPORTED_MODULE_8__(new Date()))) {
                          listaEvento.push(evento);
                        }
                      });

                    case 3:
                      return _context3.abrupt("return", listaEvento);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }]);

        return EventoPage;
      }();

      EventoPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Evento__WEBPACK_IMPORTED_MODULE_5__["EventoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      EventoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-evento',
        template: _raw_loader_evento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_evento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EventoPage);
      /***/
    },

    /***/
    "7YjO":
    /*!********************************************************!*\
      !*** ./src/app/pages/listagem/evento/evento.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function YjO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\nh1 {\n  font-size: 20px;\n}\n\n.bt-editar {\n  background: #2e2e3c;\n}\n\n.bt-deletar {\n  background: #a57d51;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2V2ZW50by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTs7OztFQUlJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJldmVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbn1cblxuaW9uLXRpdGxlLFxuaDEsXG4uaW5mb3JtYWNhby1tZW1icm8sXG5oMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kXCIsIHNhbnMtc2VyaWY7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogI2E1N2Q1MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idC1lZGl0YXIge1xuICAgIGJhY2tncm91bmQ6ICMyZTJlM2M7XG59XG5cbi5idC1kZWxldGFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjYTU3ZDUxO1xufVxuXG4uaWNvbmVzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "Nnz6":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/evento/evento.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nnz6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Total de eventos: {{numTotalEventos}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h2 *ngIf=\"numTotalEventos == 0\"> Não há eventos cadastrados.</h2>\n\n    <ion-searchbar *ngIf=\"numTotalEventos > 0\" (ionChange)=\"pesquisarEvento($event)\" placeholder=\"Digite o nome do evento\" color=\"tertiary\"></ion-searchbar>\n    <ion-grid>\n        <ion-row align-items-center justify-content-center>\n            <ion-col>\n                <ion-list>\n                    <ion-item-sliding *ngFor=\"let evento of listaEventosFiltrados\">\n                        <ion-item text-wrap class=\"item-text-wrap\">\n                            <ion-label class=\"informacao-membro\" text-wrap>\n                                <h1 class=\"content-title\">{{evento.nome}}</h1>\n                                {{evento.responsavel? 'Responsável: '.concat(evento.responsavel) : '' }}\n                            </ion-label>\n                        </ion-item>\n                        <ion-item-options side=\"start\">\n                            <button ion-button (click)=\"editarEvento(evento)\" class=\"bt-editar\">\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\n              </button>\n\n                            <button (click)=\"confirmarExclusao(evento)\" ion-button class=\"bt-deletar\">\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\n              </button>\n                        </ion-item-options>\n                    </ion-item-sliding>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "oNin":
    /*!********************************************************!*\
      !*** ./src/app/pages/listagem/evento/evento.module.ts ***!
      \********************************************************/

    /*! exports provided: EventoPageModule */

    /***/
    function oNin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventoPageModule", function () {
        return EventoPageModule;
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


      var _evento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./evento-routing.module */
      "rzgt");
      /* harmony import */


      var _evento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./evento.page */
      "+nt2");

      var EventoPageModule = function EventoPageModule() {
        _classCallCheck(this, EventoPageModule);
      };

      EventoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _evento_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventoPageRoutingModule"]],
        declarations: [_evento_page__WEBPACK_IMPORTED_MODULE_6__["EventoPage"]]
      })], EventoPageModule);
      /***/
    },

    /***/
    "rzgt":
    /*!****************************************************************!*\
      !*** ./src/app/pages/listagem/evento/evento-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: EventoPageRoutingModule */

    /***/
    function rzgt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventoPageRoutingModule", function () {
        return EventoPageRoutingModule;
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


      var _evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./evento.page */
      "+nt2");

      var routes = [{
        path: '',
        component: _evento_page__WEBPACK_IMPORTED_MODULE_3__["EventoPage"]
      }];

      var EventoPageRoutingModule = function EventoPageRoutingModule() {
        _classCallCheck(this, EventoPageRoutingModule);
      };

      EventoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventoPageRoutingModule);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var exibirMensagem;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      exibirMensagem = this.aviso.create({
                        id: 'sucesso',
                        position: 'top',
                        message: message,
                        duration: 3000,
                        color: 'success'
                      });
                      _context4.next = 3;
                      return exibirMensagem;

                    case 3:
                      _context4.sent.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "mensagemError",
          value: function mensagemError(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var exibirMensagem;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      exibirMensagem = this.aviso.create({
                        id: 'error',
                        position: 'top',
                        message: error,
                        duration: 3000,
                        color: 'danger'
                      });
                      _context5.next = 3;
                      return exibirMensagem;

                    case 3:
                      _context5.sent.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "mensagemAlerta",
          value: function mensagemAlerta(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var exibirMensagem;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      exibirMensagem = this.aviso.create({
                        id: 'alerta',
                        position: 'top',
                        message: message,
                        duration: 3000,
                        color: 'warning'
                      });
                      _context6.next = 3;
                      return exibirMensagem;

                    case 3:
                      _context6.sent.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return MensagensUtil;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-listagem-evento-evento-module-es5.js.map