(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membro-inativo-membro-inativo-module"], {
    /***/
    "JM5f":
    /*!**********************************!*\
      !*** ./src/app/util/DateUtil.ts ***!
      \**********************************/

    /*! exports provided: DateUtil */

    /***/
    function JM5f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateUtil", function () {
        return DateUtil;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

      var DateUtil = /*#__PURE__*/function () {
        function DateUtil() {
          _classCallCheck(this, DateUtil);

          moment__WEBPACK_IMPORTED_MODULE_0__["locale"]("pt-br");
        }

        _createClass(DateUtil, null, [{
          key: "isDataDoisMaiorDataUm",
          value: function isDataDoisMaiorDataUm(dataUm, dataDois) {
            return moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(dataDois)).isBefore(this.dateFormatterAmerica(dataUm));
          }
        }, {
          key: "isDataFutura",
          value: function isDataFutura(data) {
            return moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(data)).isAfter(this.dateFormatterAmerica(new Date().toLocaleDateString()));
          }
        }, {
          key: "isDatasIguais",
          value: function isDatasIguais(dataUm, dataDois) {
            return moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(dataDois)).isSame(this.dateFormatterAmerica(dataUm));
          }
        }, {
          key: "dateFormatterAmerica",
          value: function dateFormatterAmerica(data) {
            return data.split("/").reverse().join("-");
          }
        }, {
          key: "dateFormatterBrazil",
          value: function dateFormatterBrazil(data) {
            return moment__WEBPACK_IMPORTED_MODULE_0__(data).format("DD/MM/YYYY");
          }
        }, {
          key: "numeroDiasEntreDuasDatas",
          value: function numeroDiasEntreDuasDatas(dataUm, dataDois) {
            var dataInicio = moment__WEBPACK_IMPORTED_MODULE_0__(dataUm);
            var dataFim = moment__WEBPACK_IMPORTED_MODULE_0__(dataDois);
            var numeroDias = moment__WEBPACK_IMPORTED_MODULE_0__["duration"](dataFim.diff(dataInicio));
            return numeroDias.asDays();
          }
        }, {
          key: "verificarIsDataValida",
          value: function verificarIsDataValida(data) {
            var dataValida = moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(data));
            return dataValida.isValid();
          }
        }, {
          key: "calcularData",
          value: function calcularData(data, dias) {
            return moment__WEBPACK_IMPORTED_MODULE_0__(data).add(dias, "year").subtract(1, "days").format("YYYY-MM-DD");
          }
        }, {
          key: "verificarIntervaloHora",
          value: function verificarIntervaloHora(horaI, horaF) {
            var horaInicial = Number(horaI.substring(0, 2)) < 12 ? moment__WEBPACK_IMPORTED_MODULE_0__(horaI.concat("am"), "hh:mma") : moment__WEBPACK_IMPORTED_MODULE_0__(horaI.concat("pm"), "hh:mmp");
            var horaFinal = Number(horaF.substring(0, 2)) < 12 ? moment__WEBPACK_IMPORTED_MODULE_0__(horaF.concat("am"), "hh:mma") : moment__WEBPACK_IMPORTED_MODULE_0__(horaF.concat("pm"), "hh:mmp");
            return horaInicial.isBefore(horaFinal);
          }
        }, {
          key: "isIdadeMaiorDozeAnos",
          value: function isIdadeMaiorDozeAnos(dataNasc) {
            var idade = moment__WEBPACK_IMPORTED_MODULE_0__().diff(this.dateFormatterAmerica(dataNasc), "years");
            return idade >= 12;
          }
        }]);

        return DateUtil;
      }();
      /***/

    },

    /***/
    "QNml":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/listagem/membro/membro-inativo/membro-inativo-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: MembroInativoPageRoutingModule */

    /***/
    function QNml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembroInativoPageRoutingModule", function () {
        return MembroInativoPageRoutingModule;
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


      var _membro_inativo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./membro-inativo.page */
      "T6ne");

      var routes = [{
        path: '',
        component: _membro_inativo_page__WEBPACK_IMPORTED_MODULE_3__["MembroInativoPage"]
      }];

      var MembroInativoPageRoutingModule = function MembroInativoPageRoutingModule() {
        _classCallCheck(this, MembroInativoPageRoutingModule);
      };

      MembroInativoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MembroInativoPageRoutingModule);
      /***/
    },

    /***/
    "RDJs":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/membro/membro-inativo/membro-inativo.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RDJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Total de membros inativos: {{totalMembros}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <h2 *ngIf=\"totalMembros == 0\">Não há membros inativos.</h2>\r\n  <ion-searchbar\r\n    *ngIf=\"totalMembros > 0\"\r\n    (ionChange)=\"pesquisarInativos($event)\"\r\n    placeholder=\"Digite o nome do membro.\"\r\n    color=\"tertiary\"\r\n  ></ion-searchbar>\r\n  <ion-grid>\r\n    <ion-row align-items-center justify-content-center>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item-sliding *ngFor=\"let membro of membrosInativosFiltrados\">\r\n            <ion-item text-wrap class=\"item-text-wrap\">\r\n              <ion-label class=\"informacao-membro\" text-wrap>\r\n                <h1 class=\"content-title\">{{membro.nomeCompleto}}</h1>\r\n                Data de nascimento:\r\n                {{formatarDataDeNascimento(membro.dataNascimento)}} <br />\r\n                {{membro.whatsapp? 'Whatsapp: '.concat(membro.whatsapp) : '' }}\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item-options side=\"start\">\r\n              <button\r\n                (click)=\"confirmarAtivacao(membro)\"\r\n                ion-button\r\n                class=\"bt-inativar\"\r\n              >\r\n                <ion-icon class=\"icones\" name=\"person-add\"></ion-icon>\r\n              </button>\r\n              <button\r\n                (click)=\"confirmarExclusao(membro)\"\r\n                ion-button\r\n                class=\"bt-deletar\"\r\n              >\r\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\r\n              </button>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "T6ne":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/listagem/membro/membro-inativo/membro-inativo.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: MembroInativoPage */

    /***/
    function T6ne(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembroInativoPage", function () {
        return MembroInativoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_membro_inativo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./membro-inativo.page.html */
      "RDJs");
      /* harmony import */


      var _membro_inativo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./membro-inativo.page.scss */
      "Y3m+");
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


      var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/DateUtil */
      "JM5f");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");

      var MembroInativoPage = /*#__PURE__*/function () {
        function MembroInativoPage(membroService, aviso, alertController, autenticacaoService) {
          _classCallCheck(this, MembroInativoPage);

          this.membroService = membroService;
          this.aviso = aviso;
          this.alertController = alertController;
          this.autenticacaoService = autenticacaoService;
          this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__["MensagensUtil"](this.aviso);
          this.inicializar();
        }

        _createClass(MembroInativoPage, [{
          key: "inicializar",
          value: function inicializar() {
            var _this = this;

            this.listaMembrosObservable = this.membroService.listar();
            this.listaMembrosObservable.subscribe(function (response) {
              _this.membrosInativos = response;
              _this.membrosInativosFiltrados = response;
              _this.membrosInativos = _this.membrosInativos.filter(function (m) {
                return _this.filtrarMembro(m);
              });
              _this.membrosInativosFiltrados = _this.membrosInativosFiltrados.filter(function (m) {
                return _this.filtrarMembro(m);
              });
              _this.totalMembros = _this.membrosInativos.length;

              _this.membrosInativosFiltrados.sort(function (a, b) {
                return a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0;
              });

              _this.membrosInativos.map(function (m) {
                return m.escolaridade = Number(m.escolaridade);
              });

              _this.membrosInativos.map(function (m) {
                return m.estadoCivil = Number(m.estadoCivil);
              });
            });
          }
        }, {
          key: "filtrarMembro",
          value: function filtrarMembro(membro) {
            return membro.situacao === 'Inativo' && (membro.classificacao === undefined || membro.classificacao === "Membro");
          }
        }, {
          key: "formatarDataDeNascimento",
          value: function formatarDataDeNascimento(data) {
            return data.includes('/') ? data : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].dateFormatterBrazil(data);
          }
        }, {
          key: "confirmarAtivacao",
          value: function confirmarAtivacao(membro) {
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
                        message: 'Tem certeza que deseja ativar o membro selecionado?',
                        buttons: [{
                          text: 'Não',
                          handler: function handler() {
                            _this2.alertController.dismiss();
                          }
                        }, {
                          text: 'Sim',
                          handler: function handler() {
                            _this2.ativarUsuario(membro);
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
          key: "ativarUsuario",
          value: function ativarUsuario(membro) {
            if (membro.key) {
              membro.situacao = 'Ativo';
              this.membroService.adicionarOuAtualizar(membro);
              this.mensagens.mensagemSucesso('Usuário ativado com sucesso!');
              this.inicializar();
            }
          }
        }, {
          key: "pesquisarInativos",
          value: function pesquisarInativos(ev) {
            this.membrosInativosFiltrados = this.membrosInativos;
            var val = ev.detail.value;

            if (val && val.trim() !== '') {
              this.membrosInativosFiltrados = this.membrosInativosFiltrados.filter(function (term) {
                return term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
              });
              this.membrosInativosFiltrados.sort(function (a, b) {
                return a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0;
              });
            }
          }
        }, {
          key: "confirmarExclusao",
          value: function confirmarExclusao(membro) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Confirmação de exclusão',
                        message: 'Tem certeza que deseja excluir o membro selecionado?',
                        buttons: [{
                          text: 'Não',
                          handler: function handler() {
                            _this3.alertController.dismiss();
                          }
                        }, {
                          text: 'Sim',
                          handler: function handler() {
                            _this3.excluirMembro(membro);
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
          key: "excluirMembro",
          value: function excluirMembro(membro) {
            this.membroService.deletar(membro.key);
            this.autenticacaoService.deletarMembro(membro);
            this.mensagens.mensagemSucesso('Membro excluído com sucesso!');
            this.inicializar();
          }
        }]);

        return MembroInativoPage;
      }();

      MembroInativoPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__["MembroService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"]
        }];
      };

      MembroInativoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-membro-inativo',
        template: _raw_loader_membro_inativo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_membro_inativo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MembroInativoPage);
      /***/
    },

    /***/
    "Y3m+":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/listagem/membro/membro-inativo/membro-inativo.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function Y3m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\nh2,\n.informacao-membro {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-editar {\n  background: #2e2e3c;\n}\n\n.bt-inativar {\n  background: #a57d51;\n}\n\n.bt-deletar {\n  background: #35291c;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1lbWJyby1pbmF0aXZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBOzs7O0VBSUUsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJtZW1icm8taW5hdGl2by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tdGl0bGUsXHJcbmgxLFxyXG5oMixcclxuLmluZm9ybWFjYW8tbWVtYnJvIHtcclxuICBmb250LWZhbWlseTogXCJMZXhlbmRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiAjYTU3ZDUxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0LWVkaXRhciB7XHJcbiAgYmFja2dyb3VuZDogIzJlMmUzYztcclxufVxyXG5cclxuLmJ0LWluYXRpdmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjYTU3ZDUxO1xyXG59XHJcblxyXG4uYnQtZGVsZXRhciB7XHJcbiAgYmFja2dyb3VuZDogIzM1MjkxYztcclxufVxyXG5cclxuLmljb25lcyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "qzYq":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/listagem/membro/membro-inativo/membro-inativo.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: MembroInativoPageModule */

    /***/
    function qzYq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembroInativoPageModule", function () {
        return MembroInativoPageModule;
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


      var _membro_inativo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./membro-inativo-routing.module */
      "QNml");
      /* harmony import */


      var _membro_inativo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./membro-inativo.page */
      "T6ne");

      var MembroInativoPageModule = function MembroInativoPageModule() {
        _classCallCheck(this, MembroInativoPageModule);
      };

      MembroInativoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _membro_inativo_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembroInativoPageRoutingModule"]],
        declarations: [_membro_inativo_page__WEBPACK_IMPORTED_MODULE_6__["MembroInativoPage"]]
      })], MembroInativoPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=membro-inativo-membro-inativo-module-es5.js.map