(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projeto-inativo-projeto-inativo-module"], {
    /***/
    "DaqS":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/projeto/projeto-inativo/projeto-inativo.page.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DaqS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Total de projetos inativos: {{numTotalProjetos}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 *ngIf=\"numTotalProjetos == 0\"> Não há projetos inativos.</h2>\n  <ion-searchbar *ngIf=\"numTotalProjetos != 0\"\n  (ionChange)=\"pesquisarProjetos($event)\"\n    placeholder=\"Digite o nome do projeto\"\n    color=\"tertiary\"\n  ></ion-searchbar>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col>\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let projeto of projetosInativosFiltrados\" >\n            <ion-item text-wrap class=\"item-text-wrap\">\n              <ion-label class=\"informacao-membro\" text-wrap>\n                <h1 class=\"content-title\">{{projeto.nome}}</h1>\n                {{projeto.responsavel? 'Responsável: '.concat(projeto.responsavel) : '' }} \n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <button (click)=\"confirmarAtivacao(projeto)\" ion-button class=\"bt-ativar\">\n                <ion-icon  class=\"icones\" name=\"person-add\"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "EVOp":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto-inativo/projeto-inativo.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: ProjetoInativoPageModule */

    /***/
    function EVOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoInativoPageModule", function () {
        return ProjetoInativoPageModule;
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


      var _projeto_inativo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./projeto-inativo-routing.module */
      "eP6P");
      /* harmony import */


      var _projeto_inativo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./projeto-inativo.page */
      "lZ2J");

      var ProjetoInativoPageModule = function ProjetoInativoPageModule() {
        _classCallCheck(this, ProjetoInativoPageModule);
      };

      ProjetoInativoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _projeto_inativo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetoInativoPageRoutingModule"]],
        declarations: [_projeto_inativo_page__WEBPACK_IMPORTED_MODULE_6__["ProjetoInativoPage"]]
      })], ProjetoInativoPageModule);
      /***/
    },

    /***/
    "Xz0Y":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto-inativo/projeto-inativo.page.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function Xz0Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title, h1, h2, .informacao-membro {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-ativar {\n  background: #A57D51;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2pldG8taW5hdGl2by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNBIiwiZmlsZSI6InByb2pldG8taW5hdGl2by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFye1xuICAgIG1hcmdpbi10b3A6ICAxNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi10aXRsZSwgaDEsIGgyLCAuaW5mb3JtYWNhby1tZW1icm97XG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xufVxuXG5oMXtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogI2E1N2Q1MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuLmJ0LWF0aXZhcntcbiAgICBiYWNrZ3JvdW5kOiAjQTU3RDUxO1xufVxuXG4uaWNvbmVze1xuY29sb3I6ICNmZmY7XG5mb250LXNpemU6IDIwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "eP6P":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto-inativo/projeto-inativo-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: ProjetoInativoPageRoutingModule */

    /***/
    function eP6P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoInativoPageRoutingModule", function () {
        return ProjetoInativoPageRoutingModule;
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


      var _projeto_inativo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./projeto-inativo.page */
      "lZ2J");

      var routes = [{
        path: '',
        component: _projeto_inativo_page__WEBPACK_IMPORTED_MODULE_3__["ProjetoInativoPage"]
      }];

      var ProjetoInativoPageRoutingModule = function ProjetoInativoPageRoutingModule() {
        _classCallCheck(this, ProjetoInativoPageRoutingModule);
      };

      ProjetoInativoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProjetoInativoPageRoutingModule);
      /***/
    },

    /***/
    "lZ2J":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/listagem/projeto/projeto-inativo/projeto-inativo.page.ts ***!
      \********************************************************************************/

    /*! exports provided: ProjetoInativoPage */

    /***/
    function lZ2J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoInativoPage", function () {
        return ProjetoInativoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_projeto_inativo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./projeto-inativo.page.html */
      "DaqS");
      /* harmony import */


      var _projeto_inativo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./projeto-inativo.page.scss */
      "Xz0Y");
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

      var ProjetoInativoPage = /*#__PURE__*/function () {
        function ProjetoInativoPage(aviso, alertController, projetoService) {
          _classCallCheck(this, ProjetoInativoPage);

          this.aviso = aviso;
          this.alertController = alertController;
          this.projetoService = projetoService;
          this.numTotalProjetos = 0;
        }

        _createClass(ProjetoInativoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.inicializar();
          }
        }, {
          key: "inicializar",
          value: function inicializar() {
            var _this = this;

            this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_6__["MensagensUtil"](this.aviso);
            this.listaProjetosObservable = this.projetoService.listar();
            this.listaProjetosObservable.subscribe(function (response) {
              _this.projetosInativos = response;
              _this.projetosInativosFiltrados = response;
              _this.projetosInativos = _this.projetosInativos.filter(function (m) {
                return m.situacao === 'Inativo';
              });
              _this.projetosInativosFiltrados = _this.projetosInativosFiltrados.filter(function (m) {
                return m.situacao === 'Inativo';
              });
              _this.numTotalProjetos = _this.projetosInativos.length > 0 ? _this.projetosInativos.length : 0;

              _this.projetosInativosFiltrados.sort(function (a, b) {
                return a.responsavel > b.responsavel ? 1 : b.responsavel > a.responsavel ? -1 : 0;
              });
            });
          }
        }, {
          key: "confirmarAtivacao",
          value: function confirmarAtivacao(projeto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Confirmação de ativação',
                        message: 'Tem certeza que deseja ativar o projeto selecionado?',
                        buttons: [{
                          text: 'Não',
                          handler: function handler() {
                            _this2.alertController.dismiss();
                          }
                        }, {
                          text: 'Sim',
                          handler: function handler() {
                            _this2.ativarProjeto(projeto);
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
          key: "ativarProjeto",
          value: function ativarProjeto(projeto) {
            if (projeto.key) {
              projeto.situacao = 'Ativo';
              this.projetoService.adicionarOuAtualizar(projeto);
              this.mensagens.mensagemSucesso('Projeto ativado com sucesso!');
              this.inicializar();
            }
          }
        }, {
          key: "pesquisarProjetos",
          value: function pesquisarProjetos(ev) {
            this.projetosInativosFiltrados = this.projetosInativos;
            var val = ev.detail.value;

            if (val && val.trim() !== '') {
              this.projetosInativosFiltrados = this.projetosInativosFiltrados.filter(function (term) {
                return term.responsavel.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
              });
            }
          }
        }]);

        return ProjetoInativoPage;
      }();

      ProjetoInativoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_5__["ProjetoService"]
        }];
      };

      ProjetoInativoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projeto-inativo',
        template: _raw_loader_projeto_inativo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projeto_inativo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProjetoInativoPage);
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
//# sourceMappingURL=projeto-inativo-projeto-inativo-module-es5.js.map