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


      __webpack_exports__["default"] = "ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\nh1 {\n  font-size: 20px;\n}\n\n.bt-editar {\n  background: #2e2e3c;\n}\n\n.bt-deletar {\n  background: #a57d51;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXZlbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBOzs7O0VBSUksaUNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImV2ZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRpdGxlLFxyXG5oMSxcclxuLmluZm9ybWFjYW8tbWVtYnJvLFxyXG5oMiB7XHJcbiAgICBmb250LWZhbWlseTogXCJMZXhlbmRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgY29sb3I6ICNhNTdkNTE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJ0LWVkaXRhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmUyZTNjO1xyXG59XHJcblxyXG4uYnQtZGVsZXRhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTU3ZDUxO1xyXG59XHJcblxyXG4uaWNvbmVzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */";
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


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Total de eventos: {{numTotalEventos}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <h2 *ngIf=\"numTotalEventos == 0\"> Não há eventos cadastrados.</h2>\r\n\r\n    <ion-searchbar *ngIf=\"numTotalEventos > 0\" (ionChange)=\"pesquisarEvento($event)\" placeholder=\"Digite o nome do evento\" color=\"tertiary\"></ion-searchbar>\r\n    <ion-grid>\r\n        <ion-row align-items-center justify-content-center>\r\n            <ion-col>\r\n                <ion-list>\r\n                    <ion-item-sliding *ngFor=\"let evento of listaEventosFiltrados\">\r\n                        <ion-item text-wrap class=\"item-text-wrap\">\r\n                            <ion-label class=\"informacao-membro\" text-wrap>\r\n                                <h1 class=\"content-title\">{{evento.nome}}</h1>\r\n                                {{evento.responsavel? 'Responsável: '.concat(evento.responsavel) : '' }}\r\n                            </ion-label>\r\n                        </ion-item>\r\n                        <ion-item-options side=\"start\">\r\n                            <button ion-button (click)=\"editarEvento(evento)\" class=\"bt-editar\">\r\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\r\n              </button>\r\n\r\n                            <button (click)=\"confirmarExclusao(evento)\" ion-button class=\"bt-deletar\">\r\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\r\n              </button>\r\n                        </ion-item-options>\r\n                    </ion-item-sliding>\r\n                </ion-list>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>";
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
    }
  }]);
})();
//# sourceMappingURL=pages-listagem-evento-evento-module-es5.js.map