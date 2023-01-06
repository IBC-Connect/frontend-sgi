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


      __webpack_exports__["default"] = "ion-content {\n  --background: #e6e6e6;\n}\n\nion-title {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.icone {\n  font-size: 25pt;\n  color: #c58128;\n}\n\n.content {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nbutton {\n  width: 120px;\n  margin-left: 2%;\n  height: 120px;\n  margin-top: 1%;\n  word-wrap: break-word;\n  font-family: \"Rubik\", sans-serif;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0px 0px 9px #575766;\n}\n\nbutton:hover {\n  transform: scale(1.3);\n  cursor: pointer;\n}\n\nlabel {\n  color: #141311;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBR0UscUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pY29uZSB7XHJcbiAgZm9udC1zaXplOiAyNXB0O1xyXG4gIGNvbG9yOiAjYzU4MTI4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggIzU3NTc2NjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVye1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjMTQxMzExO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */";
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


      var src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/servicos/Autenticacao */
      "tTKV");
      /* harmony import */


      var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/servicos/Membro */
      "fX5e");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");
      /* harmony import */


      var _componentes_sistema_relatorio_modal_sistema_relatorio_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../componentes/sistema-relatorio-modal/sistema-relatorio-modal.page */
      "T+3M");
      /* harmony import */


      var _util_DadosUsuarioUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../util/DadosUsuarioUtil */
      "TR/9");

      var InicioPage = /*#__PURE__*/function () {
        function InicioPage(autenticacao, aviso, membroService, modalController) {
          _classCallCheck(this, InicioPage);

          this.autenticacao = autenticacao;
          this.aviso = aviso;
          this.membroService = membroService;
          this.modalController = modalController; //Permissoes

          this.permissaoAdmin = false;
          this.permissaoGeral = true;
          this.permissaoPsicologo = false;
          this.permissaoFinancas = false;
          this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_7__["MensagensUtil"](this.aviso);
          this.usuario = _util_DadosUsuarioUtil__WEBPACK_IMPORTED_MODULE_9__["DadosUsuarioUtil"].dadosUsuarioLogado();
        }

        _createClass(InicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.inicializar();

                    case 2:
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
          key: "inicializar",
          value: function inicializar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.listaMembrosObservable = this.membroService.listar();
                      this.listaMembrosObservable.subscribe(function (response) {
                        _this.listaMembros = response;
                        _this.totalMembros = _this.listaMembros.length;
                        _this.listaMembrosFiltrados = _this.listaMembros.sort(function (a, b) {
                          return a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0;
                        });

                        _this.verificarTelasUsuario(response);
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "verificarTelasUsuario",
          value: function verificarTelasUsuario(membros) {
            var _this2 = this;

            var membroEncontrado = membros.find(function (m) {
              return m.email === _this2.usuario.email;
            });

            if (membroEncontrado) {
              switch (membroEncontrado.perfil) {
                case 'ADMIN':
                case 'SEC':
                  this.permissaoAdmin = true;
                  break;

                case 'FIN':
                  this.permissaoFinancas = true;
                  break;

                case 'PSI':
                  this.permissaoPsicologo = true;
                  break;
              }
            }
          }
        }, {
          key: "abriModalSistema",
          value: function abriModalSistema() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _componentes_sistema_relatorio_modal_sistema_relatorio_modal_page__WEBPACK_IMPORTED_MODULE_8__["SistemaRelatorioModalPage"],
                        cssClass: "my-custom-class"
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return InicioPage;
      }();

      InicioPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__["MembroService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-inicio",
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


      __webpack_exports__["default"] = "<ion-header autoHide=\"false\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Igreja Batista do Caçote</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"content\">\r\n    <button\r\n      ion-button\r\n      routerLink=\"/cadastro/membro\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"accessibility-outline\"></ion-icon> <br />\r\n      <label>Cadastro na IBC</label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/cadastro/projeto\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"create-outline\"></ion-icon> <br />\r\n      <label>Cadastro de Projeto</label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/cadastro/cargo\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"briefcase-outline\"></ion-icon> <br />\r\n      <label>Cadastro de Cargo</label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/cadastro/evento\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"ticket-outline\"></ion-icon> <br />\r\n      <label>Cadastro de Evento</label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/cadastro/assistido\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"bag-add-outline\"></ion-icon> <br />\r\n      <label>Cadastro de Assistido</label>\r\n    </button>\r\n\r\n    <br />\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/lista/membro\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"people-outline\"></ion-icon> <br />\r\n      <label>Lista de Membros</label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/lista/projeto\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"receipt-outline\"></ion-icon> <br />\r\n      <label>Lista de Projetos</label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/lista/cargo\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"file-tray-stacked-outline\"></ion-icon>\r\n      <br />\r\n      <label>Lista de &nbsp; Cargos</label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/lista/evento\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoGeral\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"layers-outline\"></ion-icon> <br />\r\n      <label>Lista de &nbsp; Eventos</label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/lista/assistido\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"list-outline\"></ion-icon> <br />\r\n      <label>Lista de &nbsp; Assistidos</label>\r\n    </button>\r\n\r\n    <br />\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/consultorio\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin || permissaoPsicologo\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"book-outline\"></ion-icon><br />\r\n      <label> Diário do Psicologo </label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      (click)=\"mensagemDeConstrucao()\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin || permissaoFinancas\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"cash-outline\"></ion-icon><br />\r\n      <label> Sistema Financeiro </label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/aniversarios\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"calendar-number-outline\"></ion-icon><br />\r\n      <label>Aniversário do mês</label>\r\n    </button>\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/sistema-relatorio-modal\"\r\n      class=\"ion-text-wrap\"\r\n      *ngIf=\"permissaoAdmin\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"albums-outline\"></ion-icon><br />\r\n      <label>Sistema Relatorios</label>\r\n    </button>\r\n\r\n    <button ion-button (click)=\"mensagemDeConstrucao()\" class=\"ion-text-wrap\">\r\n      <ion-icon class=\"icone\" name=\"megaphone-outline\"></ion-icon><br />\r\n      <label>Novidades da IBC</label>\r\n    </button>\r\n\r\n    <br />\r\n\r\n    <button\r\n      ion-button\r\n      routerLink=\"/login\"\r\n      routerDirection=\"forward\"\r\n      class=\"ion-text-wrap\"\r\n      (click)=\"deslogar()\"\r\n    >\r\n      <ion-icon class=\"icone\" name=\"exit-outline\"></ion-icon><br />\r\n      <label> &nbsp; &nbsp; Encerrar &nbsp; &nbsp; Sessão </label>\r\n    </button>\r\n  </div>\r\n</ion-content>\r\n";
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