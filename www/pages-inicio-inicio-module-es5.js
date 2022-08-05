(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"], {
    /***/
    "5yII":
    /*!***********************************************!*\
      !*** ./src/app/pages/inicio/inicio.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function yII(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #e6e6e6;\n}\n\nion-title {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.icone {\n  font-size: 25pt;\n  color: #c58128;\n}\n\n.content {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nbutton {\n  width: 120px;\n  margin-left: 2%;\n  height: 120px;\n  margin-top: 1%;\n  word-wrap: break-word;\n  font-family: \"Rubik\", sans-serif;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0px 0px 9px #575766;\n}\n\nbutton:hover {\n  transform: scale(1.3);\n  cursor: pointer;\n}\n\nlabel {\n  color: #141311;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFHRSxxQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaWNvbmUge1xuICBmb250LXNpemU6IDI1cHQ7XG4gIGNvbG9yOiAjYzU4MTI4O1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IDElO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggIzU3NTc2Njtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6ICMxNDEzMTE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "9scE":
    /*!*********************************************!*\
      !*** ./src/app/pages/inicio/inicio.page.ts ***!
      \*********************************************/

    /*! exports provided: InicioPage */

    /***/
    function scE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
        return InicioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "XlEN");
      /* harmony import */


      var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inicio.page.scss */
      "5yII");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modelo_Membro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/Membro */
      "Xsc5");
      /* harmony import */


      var src_app_modelo_Usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modelo/Usuario */
      "aKcV");
      /* harmony import */


      var src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/servicos/Autenticacao */
      "tTKV");
      /* harmony import */


      var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/servicos/Membro */
      "fX5e");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");

      var InicioPage = /*#__PURE__*/function () {
        function InicioPage(autenticacao, aviso, membroService) {
          _classCallCheck(this, InicioPage);

          this.autenticacao = autenticacao;
          this.aviso = aviso;
          this.membroService = membroService;
          this.membro = new src_app_modelo_Membro__WEBPACK_IMPORTED_MODULE_5__["Membro"]();
          this.membroLista = new Array();
          this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_9__["MensagensUtil"](this.aviso);
          this.usuario = autenticacao.pegarDadosLocalmente() ? autenticacao.pegarDadosLocalmente() : new src_app_modelo_Usuario__WEBPACK_IMPORTED_MODULE_6__["Usuario"]();
        }

        _createClass(InicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.usuario.email = 'joaopedro.ts16@gmail.com';
                      _context.next = 3;
                      return this.inicializar();

                    case 3:
                      this.membro = this.verificaMembroPorEmail(this.usuario.email);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deslogar",
          value: function deslogar() {
            this.autenticacao.sair();
            this.mensagens.mensagemSucesso("Você foi desconectado com sucesso!");
          }
        }, {
          key: "mensagemDeConstrucao",
          value: function mensagemDeConstrucao() {
            this.mensagens.mensagemAlerta("O menu selecionado está em fase de construção.");
          }
        }, {
          key: "permissao",
          value: function permissao(perfisPermitidos) {
            var visibilidade = false;
            this.usuario.perfil = 'ADMIN';
            var perfis = perfisPermitidos.split(';');
            /*
            perfis.forEach(perfil => {
              if (perfil === this.usuario.perfil) {
                visibilidade = true;
              }
            });
            return visibilidade; */

            return true;
          }
        }, {
          key: "inicializar",
          value: function inicializar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", this.membroService.listar().subscribe(function (response) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "verificaMembroPorEmail",
          value: function verificaMembroPorEmail(email) {
            this.membroLista.find(function (membro) {
              if (email === membro.email.toLowerCase()) {
                return membro;
              }
            });
          }
        }]);

        return InicioPage;
      }();

      InicioPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_7__["AutenticacaoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_8__["MembroService"]
        }];
      };

      InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InicioPage);
      /***/
    },

    /***/
    "DdEe":
    /*!***********************************************!*\
      !*** ./src/app/pages/inicio/inicio.module.ts ***!
      \***********************************************/

    /*! exports provided: InicioPageModule */

    /***/
    function DdEe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
        return InicioPageModule;
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


      var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inicio-routing.module */
      "vPJf");
      /* harmony import */


      var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inicio.page */
      "9scE");

      var InicioPageModule = function InicioPageModule() {
        _classCallCheck(this, InicioPageModule);
      };

      InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
      })], InicioPageModule);
      /***/
    },

    /***/
    "XlEN":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function XlEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header autoHide=\"false\">\n    <ion-toolbar color=\"primary\">\n        <ion-title>Igreja Batista do Caçote</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"content\">\n        <button ion-button routerLink=\"/cadastro/membro\" routerDirection=\"forward\" class=\"ion-text-wrap\" *ngIf='permissao(\"ADMIN\")'>\n      <ion-icon class=\"icone\" name=\"accessibility-outline\"></ion-icon> <br />\n      <label>Cadastro na IBC</label>\n    </button>\n\n        <button ion-button routerLink=\"/cadastro/projeto\" routerDirection=\"forward\" class=\"ion-text-wrap\" *ngIf='permissao(\"ADMIN\")'>\n      <ion-icon class=\"icone\" name=\"create-outline\"></ion-icon> <br />\n      <label>Cadastro de Projeto</label>\n    </button>\n\n        <button ion-button routerLink=\"/cadastro/cargo\" routerDirection=\"forward\" class=\"ion-text-wrap\" *ngIf='permissao(\"ADMIN\")'>\n      <ion-icon class=\"icone\" name=\"briefcase-outline\"></ion-icon> <br />\n      <label>Cadastro de Cargo</label>\n    </button>\n\n        <button ion-button routerLink=\"/cadastro/evento\" routerDirection=\"forward\" class=\"ion-text-wrap\" *ngIf='permissao(\"ADMIN\")'>\n      <ion-icon class=\"icone\" name=\"ticket-outline\"></ion-icon> <br />\n      <label>Cadastro de Evento</label>\n    </button>\n\n        <button ion-button routerLink=\"/cadastro/assistido\" routerDirection=\"forward\" class=\"ion-text-wrap\" *ngIf='permissao(\"ADMIN\")'>\n    <ion-icon class=\"icone\" name=\"bag-add-outline\"></ion-icon> <br />\n    <label>Cadastro de Assistido</label>\n  </button>\n\n        <br />\n\n        <button ion-button routerLink=\"/lista/membro\" routerDirection=\"forward\" class=\"ion-text-wrap\" *ngIf='permissao(\"ADMIN\")'>\n      <ion-icon class=\"icone\" name=\"people-outline\"></ion-icon> <br />\n      <label>Lista de Membros</label>\n    </button>\n\n        <button ion-button routerLink=\"/lista/projeto\" routerDirection=\"forward\" class=\"ion-text-wrap\" *ngIf='permissao(\"ADMIN\")'>\n      <ion-icon class=\"icone\" name=\"receipt-outline\"></ion-icon> <br />\n      <label>Lista de Projetos</label>\n    </button>\n\n        <button ion-button routerLink=\"/lista/cargo\" routerDirection=\"forward\" class=\"ion-text-wrap\" *ngIf='permissao(\"ADMIN\")'>\n      <ion-icon class=\"icone\" name=\"file-tray-stacked-outline\"></ion-icon>\n      <br />\n      <label>Lista de &nbsp; Cargos</label>\n    </button>\n\n        <button ion-button routerLink=\"/lista/evento\" routerDirection=\"forward\" class=\"ion-text-wrap\" *ngIf='permissao(\"ADMIN;MEM\")'>\n      <ion-icon class=\"icone\" name=\"layers-outline\"></ion-icon> <br />\n      <label>Lista de &nbsp; Eventos</label>\n    </button>\n\n    <button ion-button routerLink=\"/lista/assistido\" routerDirection=\"forward\" class=\"ion-text-wrap\" *ngIf='permissao(\"ADMIN;MEM\")'>\n      <ion-icon class=\"icone\" name=\"list-outline\"></ion-icon> <br />\n      <label>Lista de &nbsp; Assistidos</label>\n    </button>\n\n        <br />\n\n        <button ion-button (click)=\"mensagemDeConstrucao()\" class=\"ion-text-wrap\">\n      <ion-icon class=\"icone\" name=\"cash-outline\"></ion-icon><br />\n      <label> Sistema Financeiro </label>\n    </button>\n\n        <button ion-button routerLink=\"/aniversarios\" routerDirection=\"forward\"class=\"ion-text-wrap\">\n      <ion-icon class=\"icone\" name=\"calendar-number-outline\"></ion-icon><br />\n      <label>Aniversário do mês</label>\n    </button>\n\n        <button ion-button (click)=\"mensagemDeConstrucao()\" class=\"ion-text-wrap\">\n      <ion-icon class=\"icone\" name=\"person-outline\"></ion-icon><br />\n      <label>Informações  Gerais</label>\n    </button>\n\n        <button ion-button routerLink=\"/login\" routerDirection=\"forward\" class=\"ion-text-wrap\" (click)='deslogar()'>\n      <ion-icon class=\"icone\" name=\"exit-outline\"></ion-icon><br />\n      <label> &nbsp; &nbsp; Encerrar &nbsp; &nbsp; Sessão </label>\n    </button>\n    </div>\n</ion-content>";
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

    },

    /***/
    "vPJf":
    /*!*******************************************************!*\
      !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: InicioPageRoutingModule */

    /***/
    function vPJf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function () {
        return InicioPageRoutingModule;
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


      var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inicio.page */
      "9scE");

      var routes = [{
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
      }];

      var InicioPageRoutingModule = function InicioPageRoutingModule() {
        _classCallCheck(this, InicioPageRoutingModule);
      };

      InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InicioPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-inicio-inicio-module-es5.js.map