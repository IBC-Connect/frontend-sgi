(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "A/rr":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/Login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function ARr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url(\"/assets/img/wallpaperLogin.png\") no-repeat center center / cover !important;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nion-icon {\n  color: #2e2e3c;\n}\n\nion-input,\nion-item {\n  color: #2e2e3c;\n  --background: #d9d9d9;\n  --placeholder-color: #2e2e3c;\n  --placeholder-opacity: 1;\n  font-size: 0.9em;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nimg {\n  width: 25%;\n  margin-left: 10%;\n  position: relative;\n  top: 50%;\n}\n\n#container, #container2 {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container {\n  text-align: left;\n}\n\n#container2 {\n  margin-left: 60%;\n  text-align: right;\n  width: 30%;\n}\n\n#nome-igreja {\n  margin-left: 15%;\n  color: #fff;\n  font-size: 16px;\n  line-height: 22px;\n}\n\n#area-restrita, #esqueci-senha {\n  text-align: center;\n  color: #2e2e3c;\n}\n\n#area-restrita {\n  font-size: 16pt;\n}\n\n#esqueci-senha {\n  font-size: 10pt;\n}\n\n#icone-olho {\n  font-size: 14pt;\n}\n\n#icone-user, #icone-cadeado {\n  font-size: 16pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhGQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTs7RUFHRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQUFGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBREY7O0FBSUE7RUFDQyxrQkFBQTtFQUNDLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkYiLCJmaWxlIjoiTG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3dhbGxwYXBlckxvZ2luLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzJlMmUzYztcbn1cblxuaW9uLWlucHV0LFxuaW9uLWl0ZW0ge1xuXG4gIGNvbG9yOiMyZTJlM2M7XG4gIC0tYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzJlMmUzYztcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG5cbn1cblxuaW1nIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbn1cblxuI2NvbnRhaW5lciwgI2NvbnRhaW5lcjIge1xuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXJ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNjb250YWluZXIyIHtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAzMCU7XG59XG5cbiNub21lLWlncmVqYSB7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICBjb2xvcjojZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuIFxufVxuXG4jYXJlYS1yZXN0cml0YSwgI2VzcXVlY2ktc2VuaGF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIGNvbG9yOiMyZTJlM2M7IFxufVxuXG4jYXJlYS1yZXN0cml0YXtcbiAgZm9udC1zaXplOiAxNnB0O1xufVxuXG4jZXNxdWVjaS1zZW5oYXtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4jaWNvbmUtb2xob3tcbiAgZm9udC1zaXplOiAxNHB0O1xufVxuXG4jaWNvbmUtdXNlciwgI2ljb25lLWNhZGVhZG97XG4gIGZvbnQtc2l6ZTogMTZwdDtcbn1cblxuIFxuIl19 */";
      /***/
    },

    /***/
    "F4UR":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function F4UR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-routing.module */
      "aTZN");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "aTZN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function aTZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "bP1B":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function bP1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_Login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./Login.page.html */
      "tH1Z");
      /* harmony import */


      var _Login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Login.page.scss */
      "A/rr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modelo_Usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../modelo/Usuario */
      "aKcV");
      /* harmony import */


      var _servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicos/Autenticacao */
      "tTKV");
      /* harmony import */


      var _util_MensagensUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../util/MensagensUtil */
      "sZxV");
      /* harmony import */


      var _util_RedirecionadorUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../util/RedirecionadorUtil */
      "YAOL");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(autenticacao, toast, navegador) {
          _classCallCheck(this, LoginPage);

          this.autenticacao = autenticacao;
          this.toast = toast;
          this.navegador = navegador;
          this.exibirSenha = false;
          this.passwordType = 'password';
          this.usuario = new _modelo_Usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
          this.mensagens = new _util_MensagensUtil__WEBPACK_IMPORTED_MODULE_7__["MensagensUtil"](this.toast);
          this.redirecionador = new _util_RedirecionadorUtil__WEBPACK_IMPORTED_MODULE_8__["RedirecionadorUtil"](this.navegador);
        }

        _createClass(LoginPage, [{
          key: "visualizarSenha",
          value: function visualizarSenha() {
            this.exibirSenha = this.exibirSenha ? false : true;
            this.passwordType = this.exibirSenha ? 'password' : 'text';
          }
        }, {
          key: "logar",
          value: function logar(usuario) {
            var _this = this;

            this.autenticacao.login(usuario).then(function (sucesso) {
              _this.autenticacao.salvaUsuario(usuario, sucesso);

              _this.redirecionador.redicionarPara("inicio");
            }, function (error) {
              _this.mensagens.mensagemError("E-mail ou senha inválido(a)!");
            });
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-Login',
        template: _raw_loader_Login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_Login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
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
    "tH1Z":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/Login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function tH1Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n    <div>\n        <div id=\"container\">\n            <img src=\"../../assets/img/logomarcaIbc.png\">\n        </div>\n        <div id=\"container2\">\n            <h3 id=\"area-restrita\">Área restrita</h3><br />\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-icon id=\"icone-user\" name=\"person-outline\"></ion-icon>\n                            <ion-input mode=\"md\" id=\"email\" [(ngModel)]=\"usuario.email\" placeholder=\"E-mail\"></ion-input>\n                        </ion-item>\n                        <br />\n                        <ion-item>\n                            <ion-icon id=\"icone-cadeado\" name=\"lock-closed-outline\"></ion-icon>\n                            <ion-input mode=\"md\" [type]=\"passwordType\" id=\"senha\" [(ngModel)]=\"usuario.senha\" placeholder=\"Senha\"></ion-input>\n                            <ion-icon id=\"icone-olho\" name=\"eye\" (click)=\"visualizarSenha()\"></ion-icon>\n                        </ion-item>\n                        <br />\n                        <ion-button mode=\"md\" (click)=\"logar(usuario)\" color=\"secondary\" type=\"submit\" fill=\"solid\" expand=\"full\">ENTRAR</ion-button>\n                        <h2 id=\"esqueci-senha\">Esqueci minha senha</h2>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map