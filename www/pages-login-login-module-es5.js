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


      __webpack_exports__["default"] = "ion-content {\n  --background: url(\"/assets/img/wallpaperLogin.png\") no-repeat center center / cover !important;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nion-icon {\n  color: #2e2e3c;\n}\n\nion-input,\nion-item {\n  color: #2e2e3c;\n  --background: #d9d9d9;\n  --placeholder-color: #2e2e3c;\n  --placeholder-opacity: 1;\n  font-size: 0.9em;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nimg {\n  width: 25%;\n  margin-left: 10%;\n  position: relative;\n  top: 50%;\n}\n\n#container, #container2 {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container {\n  text-align: left;\n}\n\n#container2 {\n  margin-left: 60%;\n  text-align: right;\n  width: 30%;\n}\n\n#nome-igreja {\n  margin-left: 15%;\n  color: #fff;\n  font-size: 16px;\n  line-height: 22px;\n}\n\n#area-restrita, #esqueci-senha {\n  text-align: center;\n  color: #2e2e3c;\n}\n\n#area-restrita {\n  font-size: 16pt;\n}\n\n#esqueci-senha {\n  font-size: 10pt;\n}\n\n#icone-olho {\n  font-size: 14pt;\n}\n\n#icone-user, #icone-cadeado {\n  font-size: 16pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxMb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4RkFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7O0VBR0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFBRjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQURGOztBQUlBO0VBQ0Msa0JBQUE7RUFDQyxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGIiwiZmlsZSI6IkxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3dhbGxwYXBlckxvZ2luLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgY29sb3I6ICMyZTJlM2M7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCxcclxuaW9uLWl0ZW0ge1xyXG5cclxuICBjb2xvcjojMmUyZTNjO1xyXG4gIC0tYmFja2dyb3VuZDogI2Q5ZDlkOTtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMmUyZTNjO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxufVxyXG5cclxuI2NvbnRhaW5lciwgI2NvbnRhaW5lcjIge1xyXG4gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVye1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNjb250YWluZXIyIHtcclxuICBtYXJnaW4tbGVmdDogNjAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbiNub21lLWlncmVqYSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTsgXHJcbiAgY29sb3I6I2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiBcclxufVxyXG5cclxuI2FyZWEtcmVzdHJpdGEsICNlc3F1ZWNpLXNlbmhhe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgY29sb3I6IzJlMmUzYzsgXHJcbn1cclxuXHJcbiNhcmVhLXJlc3RyaXRhe1xyXG4gIGZvbnQtc2l6ZTogMTZwdDtcclxufVxyXG5cclxuI2VzcXVlY2ktc2VuaGF7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4jaWNvbmUtb2xob3tcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbn1cclxuXHJcbiNpY29uZS11c2VyLCAjaWNvbmUtY2FkZWFkb3tcclxuICBmb250LXNpemU6IDE2cHQ7XHJcbn1cclxuXHJcbiBcclxuIl19 */";
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


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\r\n    <div>\r\n        <div id=\"container\">\r\n            <img src=\"../../assets/img/logomarcaIbc.png\">\r\n        </div>\r\n        <div id=\"container2\">\r\n            <h3 id=\"area-restrita\">Área restrita</h3><br />\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-item>\r\n                            <ion-icon id=\"icone-user\" name=\"person-outline\"></ion-icon>\r\n                            <ion-input mode=\"md\" id=\"email\" [(ngModel)]=\"usuario.email\" placeholder=\"E-mail\"></ion-input>\r\n                        </ion-item>\r\n                        <br />\r\n                        <ion-item>\r\n                            <ion-icon id=\"icone-cadeado\" name=\"lock-closed-outline\"></ion-icon>\r\n                            <ion-input mode=\"md\" [type]=\"passwordType\" id=\"senha\" [(ngModel)]=\"usuario.senha\" placeholder=\"Senha\"></ion-input>\r\n                            <ion-icon id=\"icone-olho\" name=\"eye\" (click)=\"visualizarSenha()\"></ion-icon>\r\n                        </ion-item>\r\n                        <br />\r\n                        <ion-button mode=\"md\" (click)=\"logar(usuario)\" color=\"secondary\" type=\"submit\" fill=\"solid\" expand=\"full\">ENTRAR</ion-button>\r\n                        <h2 id=\"esqueci-senha\">Esqueci minha senha</h2>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n    </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map