(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voluntario-voluntario-module"], {
    /***/
    "5T/8":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/listagem/membro/voluntario/voluntario.module.ts ***!
      \***********************************************************************/

    /*! exports provided: VoluntarioPageModule */

    /***/
    function T8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoluntarioPageModule", function () {
        return VoluntarioPageModule;
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


      var _voluntario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./voluntario-routing.module */
      "plBp");
      /* harmony import */


      var _voluntario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./voluntario.page */
      "JuXP");

      var VoluntarioPageModule = function VoluntarioPageModule() {
        _classCallCheck(this, VoluntarioPageModule);
      };

      VoluntarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _voluntario_routing_module__WEBPACK_IMPORTED_MODULE_5__["VoluntarioPageRoutingModule"]],
        declarations: [_voluntario_page__WEBPACK_IMPORTED_MODULE_6__["VoluntarioPage"]]
      })], VoluntarioPageModule);
      /***/
    },

    /***/
    "IEQJ":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listagem/membro/voluntario/voluntario.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IEQJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Total de Voluntarios: {{totalVoluntarios}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 *ngIf=\"totalVoluntarios == 0\"> Não há voluntários.</h2>\n  <ion-searchbar\n  *ngIf=\"totalVoluntarios > 0\"\n  (ionChange)=\"pesquisarVoluntarios($event)\"\n    placeholder=\"Digite o nome do voluntário.\"\n    color=\"tertiary\"\n  ></ion-searchbar>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col>\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let voluntario of membrosVoluntariosFiltrados\">\n            <ion-item text-wrap class=\"item-text-wrap\">\n              <ion-label class=\"informacao-membro\" text-wrap>\n                <h1 class=\"content-title\">{{voluntario.nomeCompleto}}</h1>\n                Data de nascimento: {{formatarDataDeNascimento(voluntario.dataNascimento)}} <br />\n                {{voluntario.whatsapp? 'Whatsapp: '.concat(voluntario.whatsapp) : '' }}\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <button\n                ion-button\n                (click)=\"editarVoluntario(voluntario)\"\n                class=\"bt-editar\"\n              >\n                <ion-icon class=\"icones\" name=\"create\"></ion-icon>\n              </button>\n              <button (click)=\"confirmarExclusao(voluntario)\" ion-button class=\"bt-deletar\">\n                <ion-icon class=\"icones\" name=\"trash\"></ion-icon>\n                </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

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

          moment__WEBPACK_IMPORTED_MODULE_0__["locale"]('pt-br');
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
            return data.split('/').reverse().join('-');
          }
        }, {
          key: "dateFormatterBrazil",
          value: function dateFormatterBrazil(data) {
            return moment__WEBPACK_IMPORTED_MODULE_0__(data).format('DD/MM/YYYY');
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
            return moment__WEBPACK_IMPORTED_MODULE_0__(data).add(dias, 'year').subtract(1, 'days').format('YYYY-MM-DD');
          }
        }, {
          key: "verificarIntervaloHora",
          value: function verificarIntervaloHora(horaI, horaF) {
            var horaInicial = Number(horaI.substring(0, 2)) < 12 ? moment__WEBPACK_IMPORTED_MODULE_0__(horaI.concat('am'), 'hh:mma') : moment__WEBPACK_IMPORTED_MODULE_0__(horaI.concat('pm'), 'hh:mmp');
            var horaFinal = Number(horaF.substring(0, 2)) < 12 ? moment__WEBPACK_IMPORTED_MODULE_0__(horaF.concat('am'), 'hh:mma') : moment__WEBPACK_IMPORTED_MODULE_0__(horaF.concat('pm'), 'hh:mmp');
            return horaInicial.isBefore(horaFinal);
          }
        }, {
          key: "isIdadeMaiorDozeAnos",
          value: function isIdadeMaiorDozeAnos(dataNasc) {
            var idade = moment__WEBPACK_IMPORTED_MODULE_0__().diff(this.dateFormatterAmerica(dataNasc), 'years');
            return idade >= 12;
          }
        }]);

        return DateUtil;
      }();
      /***/

    },

    /***/
    "JuXP":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/listagem/membro/voluntario/voluntario.page.ts ***!
      \*********************************************************************/

    /*! exports provided: VoluntarioPage */

    /***/
    function JuXP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoluntarioPage", function () {
        return VoluntarioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_voluntario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./voluntario.page.html */
      "IEQJ");
      /* harmony import */


      var _voluntario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./voluntario.page.scss */
      "Sakc");
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

      var VoluntarioPage = /*#__PURE__*/function () {
        function VoluntarioPage(membroService, navCtrl, aviso, autenticacaoService, alertController) {
          _classCallCheck(this, VoluntarioPage);

          this.membroService = membroService;
          this.navCtrl = navCtrl;
          this.aviso = aviso;
          this.autenticacaoService = autenticacaoService;
          this.alertController = alertController;
          this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_8__["MensagensUtil"](this.aviso);
          this.inicializar();
        }

        _createClass(VoluntarioPage, [{
          key: "inicializar",
          value: function inicializar() {
            var _this = this;

            this.listaMembrosObservable = this.membroService.listar();
            this.listaMembrosObservable.subscribe(function (response) {
              _this.membrosVoluntarios = response;
              _this.membrosVoluntariosFiltrados = response;
              _this.membrosVoluntarios = _this.membrosVoluntarios.filter(function (m) {
                return m.classificacao === 'Voluntario';
              });
              _this.membrosVoluntariosFiltrados = _this.membrosVoluntariosFiltrados.filter(function (m) {
                return m.classificacao === 'Voluntario';
              });
              _this.totalVoluntarios = _this.membrosVoluntarios.length;

              _this.membrosVoluntariosFiltrados.sort(function (a, b) {
                return a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0;
              });

              _this.membrosVoluntarios.map(function (m) {
                return m.escolaridade = Number(m.escolaridade);
              });

              _this.membrosVoluntarios.map(function (m) {
                return m.estadoCivil = Number(m.estadoCivil);
              });
            });
          }
        }, {
          key: "editarVoluntario",
          value: function editarVoluntario(membro) {
            this.navCtrl.navigateForward('/editar/membro', {
              state: {
                content: membro
              }
            });
          }
        }, {
          key: "formatarDataDeNascimento",
          value: function formatarDataDeNascimento(data) {
            return data.includes('/') ? data : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].dateFormatterBrazil(data);
          }
        }, {
          key: "pesquisarVoluntarios",
          value: function pesquisarVoluntarios(ev) {
            this.membrosVoluntariosFiltrados = this.membrosVoluntarios;
            var val = ev.detail.value;

            if (val && val.trim() !== '') {
              this.membrosVoluntariosFiltrados = this.membrosVoluntariosFiltrados.filter(function (term) {
                return term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
              });
              this.membrosVoluntariosFiltrados.sort(function (a, b) {
                return a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0;
              });
            }
          }
        }, {
          key: "confirmarExclusao",
          value: function confirmarExclusao(membro) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Confirmação de exclusão',
                        message: 'Tem certeza que deseja excluir o voluntário selecionado?',
                        buttons: [{
                          text: 'Não',
                          handler: function handler() {
                            _this2.alertController.dismiss();
                          }
                        }, {
                          text: 'Sim',
                          handler: function handler() {
                            _this2.excluirMembro(membro);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      this.formArray.clear();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "excluirMembro",
          value: function excluirMembro(membro) {
            this.membroService.deletar(membro.key);
            this.autenticacaoService.deletarMembro(membro);
            this.mensagens.mensagemSucesso('Voluntário excluído com sucesso!');
            this.inicializar();
          }
        }]);

        return VoluntarioPage;
      }();

      VoluntarioPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_6__["MembroService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      VoluntarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-voluntario',
        template: _raw_loader_voluntario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_voluntario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VoluntarioPage);
      /***/
    },

    /***/
    "Sakc":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/listagem/membro/voluntario/voluntario.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Sakc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-title,\nh1,\n.informacao-membro,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-size: 20px;\n}\n\nh2 {\n  color: #a57d51;\n  text-align: center;\n}\n\n.bt-editar {\n  background: #2e2e3c;\n}\n\n.bt-inativar {\n  background: #a57d51;\n}\n\n.bt-deletar {\n  background: #35291c;\n}\n\n.icones {\n  color: #fff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3ZvbHVudGFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUU7Ozs7RUFJRSxpQ0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InZvbHVudGFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgaW9uLXRpdGxlLFxuICBoMSxcbiAgLmluZm9ybWFjYW8tbWVtYnJvLFxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgXG4gIGgyIHtcbiAgICBjb2xvcjogI2E1N2Q1MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5idC1lZGl0YXIge1xuICAgIGJhY2tncm91bmQ6ICMyZTJlM2M7XG4gIH1cbiAgXG4gIC5idC1pbmF0aXZhciB7XG4gICAgYmFja2dyb3VuZDogI2E1N2Q1MTtcbiAgfVxuXG4gIC5idC1kZWxldGFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzUyOTFjO1xuICB9XG4gIFxuICAuaWNvbmVzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "plBp":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/listagem/membro/voluntario/voluntario-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: VoluntarioPageRoutingModule */

    /***/
    function plBp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoluntarioPageRoutingModule", function () {
        return VoluntarioPageRoutingModule;
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


      var _voluntario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./voluntario.page */
      "JuXP");

      var routes = [{
        path: '',
        component: _voluntario_page__WEBPACK_IMPORTED_MODULE_3__["VoluntarioPage"]
      }];

      var VoluntarioPageRoutingModule = function VoluntarioPageRoutingModule() {
        _classCallCheck(this, VoluntarioPageRoutingModule);
      };

      VoluntarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VoluntarioPageRoutingModule);
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
//# sourceMappingURL=voluntario-voluntario-module-es5.js.map