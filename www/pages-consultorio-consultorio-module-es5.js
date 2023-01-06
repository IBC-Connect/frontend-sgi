(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consultorio-consultorio-module"], {
    /***/
    "2cQn":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/consultorio/consultorio-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ConsultorioPageRoutingModule */

    /***/
    function cQn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsultorioPageRoutingModule", function () {
        return ConsultorioPageRoutingModule;
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


      var _consultorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./consultorio.page */
      "Unew");

      var routes = [{
        path: '',
        component: _consultorio_page__WEBPACK_IMPORTED_MODULE_3__["ConsultorioPage"]
      }];

      var ConsultorioPageRoutingModule = function ConsultorioPageRoutingModule() {
        _classCallCheck(this, ConsultorioPageRoutingModule);
      };

      ConsultorioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConsultorioPageRoutingModule);
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
    "MbY4":
    /*!*********************************************************!*\
      !*** ./src/app/pages/consultorio/consultorio.module.ts ***!
      \*********************************************************/

    /*! exports provided: ConsultorioPageModule */

    /***/
    function MbY4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsultorioPageModule", function () {
        return ConsultorioPageModule;
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


      var _consultorio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./consultorio-routing.module */
      "2cQn");
      /* harmony import */


      var _consultorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./consultorio.page */
      "Unew");

      var ConsultorioPageModule = function ConsultorioPageModule() {
        _classCallCheck(this, ConsultorioPageModule);
      };

      ConsultorioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _consultorio_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultorioPageRoutingModule"]],
        declarations: [_consultorio_page__WEBPACK_IMPORTED_MODULE_6__["ConsultorioPage"]]
      })], ConsultorioPageModule);
      /***/
    },

    /***/
    "RGRV":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consultorio/consultorio.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function RGRV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col class=\"ion-align-self-start\">\n      <h1 style=\"margin-left: 40%; font-weight: bold\">\n        Registros dos Pacientes\n      </h1>\n    </ion-col>\n    <ion-col class=\"ion-align-self-center\"> </ion-col>\n    <ion-col class=\"ion-align-self-end\"> </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-align-self-start\"> </ion-col>\n    <ion-col class=\"ion-align-self-center\">\n      <ion-button\n        style=\"margin-left: 62.5%\"\n        color=\"primary\"\n        (click)=\"abriModal()\"\n        >Adicionar um registro</ion-button\n      >\n    </ion-col>\n    <ion-col class=\"ion-align-self-end\"> </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-align-self-start\"> </ion-col>\n    <ion-col class=\"ion-align-self-center\">\n      <h2 *ngIf=\"numTotalRegistros === 0\">Não há registros dos pacientes.</h2>\n      <ion-searchbar\n        *ngIf=\"numTotalRegistros > 0\"\n        (ionChange)=\"pesquisarPacientes($event)\"\n        placeholder=\"Digite o nome do paciente.\"\n        color=\"tertiary\"\n      ></ion-searchbar>\n      <ion-list>\n        <ion-item *ngFor=\"let diario of listaDiariosFiltrados\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>{{diario.nomePaciente}}</ion-card-subtitle>\n              <ion-card-title\n                >{{formatarData(diario.dataRegistro)}}</ion-card-title\n              >\n            </ion-card-header>\n\n            <ion-card-content> {{diario.registro}} </ion-card-content>\n          </ion-card>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n    <ion-col class=\"ion-align-self-end\"> </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "TFrg":
    /*!*********************************************************!*\
      !*** ./src/app/pages/consultorio/consultorio.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function TFrg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb25zdWx0b3Jpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoiY29uc3VsdG9yaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "Unew":
    /*!*******************************************************!*\
      !*** ./src/app/pages/consultorio/consultorio.page.ts ***!
      \*******************************************************/

    /*! exports provided: ConsultorioPage */

    /***/
    function Unew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsultorioPage", function () {
        return ConsultorioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_consultorio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./consultorio.page.html */
      "RGRV");
      /* harmony import */


      var _consultorio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./consultorio.page.scss */
      "TFrg");
      /* harmony import */


      var _util_DadosUsuarioUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../util/DadosUsuarioUtil */
      "TR/9");
      /* harmony import */


      var _componentes_registro_consultorio_modal_registro_consultorio_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../componentes/registro-consultorio-modal/registro-consultorio-modal.page */
      "JGwh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_servicos_Diario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/servicos/Diario */
      "IChF");
      /* harmony import */


      var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/util/DateUtil */
      "JM5f");

      var ConsultorioPage = /*#__PURE__*/function () {
        function ConsultorioPage(modalController, diarioService) {
          _classCallCheck(this, ConsultorioPage);

          this.modalController = modalController;
          this.diarioService = diarioService;
          this.inicializar();
        }

        _createClass(ConsultorioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "inicializar",
          value: function inicializar() {
            var _this = this;

            this.listaDiariosObservable = this.diarioService.listar();
            this.listaDiariosObservable.subscribe(function (response) {
              _this.listaDiarios = response;
              _this.listaDiariosFiltrados = response;
              _this.numTotalRegistros = _this.listaDiarios.length;
            });
          }
        }, {
          key: "filtrarPorPsicologo",
          value: function filtrarPorPsicologo(listaDiarios) {
            var usuarioLogado = _util_DadosUsuarioUtil__WEBPACK_IMPORTED_MODULE_3__["DadosUsuarioUtil"].dadosUsuarioLogado();

            return listaDiarios.filter(function (d) {
              d.uIdPsicologo === usuarioLogado.uid;
            });
          }
        }, {
          key: "abriModal",
          value: function abriModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _componentes_registro_consultorio_modal_registro_consultorio_modal_page__WEBPACK_IMPORTED_MODULE_4__["RegistroConsultorioModalPage"],
                        cssClass: "my-custom-class"
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "formatarData",
          value: function formatarData(data) {
            return src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_8__["DateUtil"].dateFormatterBrazil(data);
          }
        }, {
          key: "pesquisarPacientes",
          value: function pesquisarPacientes(ev) {
            this.listaDiariosFiltrados = this.listaDiarios;
            var val = ev.detail.value;

            if (val && val.trim() !== "") {
              this.listaDiariosFiltrados = this.listaDiariosFiltrados.filter(function (term) {
                return term.nomePaciente.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
              });
            }
          }
        }]);

        return ConsultorioPage;
      }();

      ConsultorioPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: src_app_servicos_Diario__WEBPACK_IMPORTED_MODULE_7__["DiarioService"]
        }];
      };

      ConsultorioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-consultorio",
        template: _raw_loader_consultorio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_consultorio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConsultorioPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-consultorio-consultorio-module-es5.js.map