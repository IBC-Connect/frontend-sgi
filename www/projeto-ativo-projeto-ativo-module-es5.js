(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projeto-ativo-projeto-ativo-module"], {
    /***/
    "A8x5":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/projeto/projeto-ativo/projeto-ativo.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A8x5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Total de projetos ativos: {{numTotalProjetos}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 *ngIf=\"numTotalProjetos == 0\"> Não há projetos ativos.</h2>\n  <ion-searchbar *ngIf=\"numTotalProjetos != 0\"\n  (ionChange)=\"pesquisarProjetos($event)\"\n    placeholder=\"Digite o nome do projeto\"\n    color=\"tertiary\"\n  ></ion-searchbar>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col>\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let projeto of listaProjetosFiltrados\" >\n            <ion-item text-wrap class=\"item-text-wrap\">\n              <ion-label class=\"informacao-membro\" text-wrap>\n                <h1 class=\"content-title\">{{projeto.nome}}</h1>\n                {{projeto.responsavel? 'Responsável: '.concat(projeto.responsavel) : '' }} \n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <button\n                ion-button\n                (click)=\"editarProjeto(projeto)\"\n                class=\"bt-editar\"\n              >\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\n              </button>\n              <button\n                ion-button\n                (click)=\"associarProjeto(projeto)\"\n                routerDirection=\"forward\"\n                class=\"bt-associar\"\n              >\n                <ion-icon class=\"icones\" name=\"git-compare\"></ion-icon>\n              </button>\n              <button (click)=\"confirmarInativacao(projeto)\" ion-button class=\"bt-deletar\">\n                <ion-icon class=\"icones\" name=\"person-remove\"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "BVMs":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto-ativo/projeto-ativo.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function BVMs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-editar {\n  background: #a7a7aa;\n}\n\n.bt-associar {\n  background: #2e2e3c;\n}\n\n.bt-deletar {\n  background: #a57d51;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2pldG8tYXRpdm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUU7OztFQUdFLGlDQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoicHJvamV0by1hdGl2by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICBpb24tdGl0bGUsXG4gIGgxLFxuICAuaW5mb3JtYWNhby1tZW1icm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxleGVuZFwiLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgaDIge1xuICAgIGNvbG9yOiAjYTU3ZDUxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJ0LWVkaXRhciB7XG4gICAgYmFja2dyb3VuZDogI2E3YTdhYTtcbiAgfVxuICBcbiAgLmJ0LWFzc29jaWFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmUyZTNjO1xuICB9XG4gIFxuICAuYnQtZGVsZXRhciB7XG4gICAgYmFja2dyb3VuZDogI2E1N2Q1MTtcbiAgfVxuICBcbiAgLmljb25lcyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    "IpJN":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto-ativo/projeto-ativo.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ProjetoAtivoPageModule */

    /***/
    function IpJN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoAtivoPageModule", function () {
        return ProjetoAtivoPageModule;
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


      var _projeto_ativo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./projeto-ativo-routing.module */
      "XvNx");
      /* harmony import */


      var _projeto_ativo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./projeto-ativo.page */
      "NcVu");

      var ProjetoAtivoPageModule = function ProjetoAtivoPageModule() {
        _classCallCheck(this, ProjetoAtivoPageModule);
      };

      ProjetoAtivoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _projeto_ativo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetoAtivoPageRoutingModule"]],
        declarations: [_projeto_ativo_page__WEBPACK_IMPORTED_MODULE_6__["ProjetoAtivoPage"]]
      })], ProjetoAtivoPageModule);
      /***/
    },

    /***/
    "NcVu":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto-ativo/projeto-ativo.page.ts ***!
      \****************************************************************************/

    /*! exports provided: ProjetoAtivoPage */

    /***/
    function NcVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoAtivoPage", function () {
        return ProjetoAtivoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_projeto_ativo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./projeto-ativo.page.html */
      "A8x5");
      /* harmony import */


      var _projeto_ativo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./projeto-ativo.page.scss */
      "BVMs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/servicos/Projeto */
      "MoJo");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");
      /* harmony import */


      var src_app_util_RedirecionadorUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/RedirecionadorUtil */
      "YAOL");

      var ProjetoAtivoPage = /*#__PURE__*/function () {
        function ProjetoAtivoPage(projetoService, aviso, navegador, alertController) {
          _classCallCheck(this, ProjetoAtivoPage);

          this.projetoService = projetoService;
          this.aviso = aviso;
          this.navegador = navegador;
          this.alertController = alertController;
        }

        _createClass(ProjetoAtivoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.inicializar();
          }
        }, {
          key: "inicializar",
          value: function inicializar() {
            var _this = this;

            this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__["MensagensUtil"](this.aviso);
            this.redirecionador = new src_app_util_RedirecionadorUtil__WEBPACK_IMPORTED_MODULE_7__["RedirecionadorUtil"](this.navegador);
            this.listaProjetosObservable = this.projetoService.listar();
            this.listaProjetosObservable.subscribe(function (response) {
              _this.listaProjetos = response;
              _this.listaProjetosFiltrados = response;
              _this.listaProjetos = _this.listaProjetos.filter(function (m) {
                return m.situacao === 'Ativo';
              });
              _this.listaProjetosFiltrados = _this.listaProjetosFiltrados.filter(function (m) {
                return m.situacao === 'Ativo';
              });
              _this.numTotalProjetos = _this.listaProjetos.length;

              _this.listaProjetosFiltrados.sort(function (a, b) {
                return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
              });
            });
          }
        }, {
          key: "editarProjeto",
          value: function editarProjeto(projeto) {
            this.navegador.navigateForward('/editar/projeto', {
              state: {
                content: projeto
              }
            });
          }
        }, {
          key: "pesquisarProjetos",
          value: function pesquisarProjetos(ev) {
            this.listaProjetosFiltrados = this.listaProjetos;
            var val = ev.detail.value;

            if (val && val.trim() !== '') {
              this.listaProjetosFiltrados = this.listaProjetosFiltrados.filter(function (term) {
                return term.responsavel.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
              });
            }
          }
        }, {
          key: "confirmarInativacao",
          value: function confirmarInativacao(projeto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Confirmação de inativação',
                        message: 'Tem certeza que deseja inativar o projeto selecionado?',
                        buttons: [{
                          text: 'Não',
                          handler: function handler() {
                            _this2.alertController.dismiss();
                          }
                        }, {
                          text: 'Sim',
                          handler: function handler() {
                            _this2.inativarProjeto(projeto);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "inativarProjeto",
          value: function inativarProjeto(projeto) {
            if (projeto.key) {
              projeto.situacao = 'Inativo';
              this.projetoService.adicionarOuAtualizar(projeto);
              this.mensagens.mensagemSucesso('Projeto inativado com sucesso!');
              this.inicializar();
            }
          }
        }, {
          key: "associarProjeto",
          value: function associarProjeto(projeto) {
            this.navegador.navigateForward('/associar/projeto', {
              state: {
                content: projeto
              }
            });
          }
        }]);

        return ProjetoAtivoPage;
      }();

      ProjetoAtivoPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_5__["ProjetoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      ProjetoAtivoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projeto-ativo',
        template: _raw_loader_projeto_ativo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projeto_ativo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProjetoAtivoPage);
      /***/
    },

    /***/
    "XvNx":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto-ativo/projeto-ativo-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: ProjetoAtivoPageRoutingModule */

    /***/
    function XvNx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoAtivoPageRoutingModule", function () {
        return ProjetoAtivoPageRoutingModule;
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


      var _projeto_ativo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./projeto-ativo.page */
      "NcVu");

      var routes = [{
        path: '',
        component: _projeto_ativo_page__WEBPACK_IMPORTED_MODULE_3__["ProjetoAtivoPage"]
      }];

      var ProjetoAtivoPageRoutingModule = function ProjetoAtivoPageRoutingModule() {
        _classCallCheck(this, ProjetoAtivoPageRoutingModule);
      };

      ProjetoAtivoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProjetoAtivoPageRoutingModule);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var exibirMensagem;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      exibirMensagem = this.aviso.create({
                        id: 'sucesso',
                        position: 'top',
                        message: message,
                        duration: 3000,
                        color: 'success'
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
          key: "mensagemError",
          value: function mensagemError(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var exibirMensagem;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      exibirMensagem = this.aviso.create({
                        id: 'error',
                        position: 'top',
                        message: error,
                        duration: 3000,
                        color: 'danger'
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
        }, {
          key: "mensagemAlerta",
          value: function mensagemAlerta(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var exibirMensagem;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      exibirMensagem = this.aviso.create({
                        id: 'alerta',
                        position: 'top',
                        message: message,
                        duration: 3000,
                        color: 'warning'
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
        }]);

        return MensagensUtil;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=projeto-ativo-projeto-ativo-module-es5.js.map