(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-meu-perfil-meu-perfil-module"], {
    /***/
    "2Imx":
    /*!*******************************************************!*\
      !*** ./src/app/pages/meu-perfil/meu-perfil.module.ts ***!
      \*******************************************************/

    /*! exports provided: MeuPerfilPageModule */

    /***/
    function Imx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeuPerfilPageModule", function () {
        return MeuPerfilPageModule;
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


      var _meu_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./meu-perfil-routing.module */
      "l+Pf");
      /* harmony import */


      var _meu_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./meu-perfil.page */
      "bK6y");

      var MeuPerfilPageModule = function MeuPerfilPageModule() {
        _classCallCheck(this, MeuPerfilPageModule);
      };

      MeuPerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _meu_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeuPerfilPageRoutingModule"]],
        declarations: [_meu_perfil_page__WEBPACK_IMPORTED_MODULE_6__["MeuPerfilPage"]]
      })], MeuPerfilPageModule);
      /***/
    },

    /***/
    "3k/V":
    /*!*******************************************************!*\
      !*** ./src/app/pages/meu-perfil/meu-perfil.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function kV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXUtcGVyZmlsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "bK6y":
    /*!*****************************************************!*\
      !*** ./src/app/pages/meu-perfil/meu-perfil.page.ts ***!
      \*****************************************************/

    /*! exports provided: MeuPerfilPage */

    /***/
    function bK6y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeuPerfilPage", function () {
        return MeuPerfilPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_meu_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./meu-perfil.page.html */
      "u8JX");
      /* harmony import */


      var _meu_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meu-perfil.page.scss */
      "3k/V");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_modelo_Membro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modelo/Membro */
      "Xsc5");
      /* harmony import */


      var src_app_modelo_Usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/Usuario */
      "aKcV");
      /* harmony import */


      var src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/servicos/Autenticacao */
      "tTKV");
      /* harmony import */


      var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/servicos/Membro */
      "fX5e");

      var MeuPerfilPage = /*#__PURE__*/function () {
        function MeuPerfilPage(autenticacao, membroService) {
          _classCallCheck(this, MeuPerfilPage);

          this.autenticacao = autenticacao;
          this.membroService = membroService;
          this.usuario = autenticacao.pegarDadosLocalmente() ? autenticacao.pegarDadosLocalmente() : new src_app_modelo_Usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
          this.membro = new src_app_modelo_Membro__WEBPACK_IMPORTED_MODULE_4__["Membro"]();
        }

        _createClass(MeuPerfilPage, [{
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
          key: "inicializar",
          value: function inicializar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.listaMembrosObservable = this.membroService.listar();
                      this.listaMembrosObservable.subscribe(function (response) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return this.verificaDadosUsuario(response);

                                case 2:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "verificaDadosUsuario",
          value: function verificaDadosUsuario(response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return response.find(function (membro) {
                        if (_this2.usuario.email === membro.email.toLowerCase()) {
                          _this2.membro = membro;
                        }
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }]);

        return MeuPerfilPage;
      }();

      MeuPerfilPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoService"]
        }, {
          type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_7__["MembroService"]
        }];
      };

      MeuPerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meu-perfil',
        template: _raw_loader_meu_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meu_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MeuPerfilPage);
      /***/
    },

    /***/
    "l+Pf":
    /*!***************************************************************!*\
      !*** ./src/app/pages/meu-perfil/meu-perfil-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: MeuPerfilPageRoutingModule */

    /***/
    function lPf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeuPerfilPageRoutingModule", function () {
        return MeuPerfilPageRoutingModule;
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


      var _meu_perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./meu-perfil.page */
      "bK6y");

      var routes = [{
        path: '',
        component: _meu_perfil_page__WEBPACK_IMPORTED_MODULE_3__["MeuPerfilPage"]
      }];

      var MeuPerfilPageRoutingModule = function MeuPerfilPageRoutingModule() {
        _classCallCheck(this, MeuPerfilPageRoutingModule);
      };

      MeuPerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MeuPerfilPageRoutingModule);
      /***/
    },

    /***/
    "u8JX":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meu-perfil/meu-perfil.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function u8JX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Meu Perfil</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-list>\r\n            <ion-list-header>\r\n              Minhas informações\r\n            </ion-list-header>\r\n\r\n            <ion-item>\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"https://editoragatobravo.netlify.com/images/clients/client.png\" alt='Pastor'>\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h2>Nome</h2>\r\n                <h3>{{membro.nomeCompleto}}</h3>\r\n              </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"https://e7.pngegg.com/pngimages/556/580/png-clipart-computer-icons-symbol-user-profile-logo-symbol-miscellaneous-white.png\" alt='ViceModerador'>\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h2>Perfil</h2>\r\n                <h3>{{membro.perfil}}</h3>\r\n              </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/1200px-Circle-icons-mail.svg.png\" alt='Financas'>\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h2>E-mail</h2>\r\n                <h3>{{membro.email}}</h3>\r\n              </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"https://png.pngtree.com/element_our/md/20180626/md_5b321c98efaa6.jpg\" alt=\"Conselho\">\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h2>Telefone/WhatsApp</h2>\r\n                <h3>{{membro.telefone}}</h3>\r\n                <h3>{{membro.whatsapp}}</h3>\r\n              </ion-label>\r\n            </ion-item>\r\n\r\n          </ion-list>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-meu-perfil-meu-perfil-module-es5.js.map