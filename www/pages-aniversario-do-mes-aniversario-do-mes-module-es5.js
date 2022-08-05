(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aniversario-do-mes-aniversario-do-mes-module"], {
    /***/
    "FRyj":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/aniversario-do-mes/aniversario-do-mes.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AniversarioDoMesPageModule */

    /***/
    function FRyj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AniversarioDoMesPageModule", function () {
        return AniversarioDoMesPageModule;
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


      var _aniversario_do_mes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./aniversario-do-mes-routing.module */
      "GEvQ");
      /* harmony import */


      var _aniversario_do_mes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./aniversario-do-mes.page */
      "iJhS");

      var AniversarioDoMesPageModule = function AniversarioDoMesPageModule() {
        _classCallCheck(this, AniversarioDoMesPageModule);
      };

      AniversarioDoMesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _aniversario_do_mes_routing_module__WEBPACK_IMPORTED_MODULE_5__["AniversarioDoMesPageRoutingModule"]],
        declarations: [_aniversario_do_mes_page__WEBPACK_IMPORTED_MODULE_6__["AniversarioDoMesPage"]]
      })], AniversarioDoMesPageModule);
      /***/
    },

    /***/
    "GEvQ":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/aniversario-do-mes/aniversario-do-mes-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: AniversarioDoMesPageRoutingModule */

    /***/
    function GEvQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AniversarioDoMesPageRoutingModule", function () {
        return AniversarioDoMesPageRoutingModule;
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


      var _aniversario_do_mes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./aniversario-do-mes.page */
      "iJhS");

      var routes = [{
        path: '',
        component: _aniversario_do_mes_page__WEBPACK_IMPORTED_MODULE_3__["AniversarioDoMesPage"]
      }];

      var AniversarioDoMesPageRoutingModule = function AniversarioDoMesPageRoutingModule() {
        _classCallCheck(this, AniversarioDoMesPageRoutingModule);
      };

      AniversarioDoMesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AniversarioDoMesPageRoutingModule);
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
    "UpOc":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/aniversario-do-mes/aniversario-do-mes.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function UpOc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h1 {\n  font-family: \"Lexend\", sans-serif;\n  text-align: center;\n  margin: 15px;\n  font-size: 16pt;\n  color: #2e2e3c;\n}\n\nh2 {\n  font-size: 12pt;\n  font-family: \"Lexend\", sans-serif;\n}\n\nh2 a {\n  color: #A57D51;\n}\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 20%;\n}\n\nion-grid {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuaXZlcnNhcmlvLWRvLW1lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxpQ0FBQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0FBQUo7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7QUFBRjs7QUFDRTtFQUNFLGNBQUE7QUFDSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdDO0VBQ0ksWUFBQTtBQUFMIiwiZmlsZSI6ImFuaXZlcnNhcmlvLWRvLW1lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZwdDtcbiBcbiAgICBjb2xvcjogIzJlMmUzYztcbn1cbiBcbmgye1xuICBmb250LXNpemU6IDEycHQ7XG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcbiAgYSB7XG4gICAgY29sb3I6ICNBNTdENTE7XG4gIH1cbn1cblxuaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6MjAlXG59XG5cbiBpb24tZ3JpZHtcbiAgICAgbWFyZ2luOjE1cHhcbiB9XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "gPW2":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aniversario-do-mes/aniversario-do-mes.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gPW2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      >Aniversariantes do mês: {{aniversarioMes()}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 *ngIf=\"totalAniversariantes == 0\"> Não há aniversariantes esse mês.</h2>\n  <ion-searchbar\n    (ionChange)=\"pesquisarMembros($event)\"\n    placeholder=\"Digite o nome do aniversariante.\"\n    color=\"tertiary\"\n  ></ion-searchbar>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col>\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let membro of membrosFiltrados\">\n            <ion-item text-wrap class=\"item-text-wrap\">\n              <ion-label class=\"informacao-membro\" text-wrap>\n                <h1 class=\"content-title\">{{membro.nomeCompleto}}</h1>\n                Data de nascimento:\n                {{formatarDataDeNascimento(membro.dataNascimento)}}\n                <br />\n                <b>Idade nesse ano: {{idadeAtual(membro)}} anos</b>\n                <br />\n                <div *ngIf=\"membro.whatsapp\">\n                  {{membro.whatsapp? 'Whatsapp: '.concat(membro.whatsapp) : '' }}\n                <a target=\"_blank\" [href]=\"formatarNumeroWhatsapp(membro.whatsapp)\"><ion-icon name=\"send-outline\"></ion-icon></a>\n                </div>\n              </ion-label>\n            </ion-item>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "iJhS":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/aniversario-do-mes/aniversario-do-mes.page.ts ***!
      \*********************************************************************/

    /*! exports provided: AniversarioDoMesPage */

    /***/
    function iJhS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AniversarioDoMesPage", function () {
        return AniversarioDoMesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_aniversario_do_mes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./aniversario-do-mes.page.html */
      "gPW2");
      /* harmony import */


      var _aniversario_do_mes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aniversario-do-mes.page.scss */
      "UpOc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/servicos/Membro */
      "fX5e");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/DateUtil */
      "JM5f");

      var AniversarioDoMesPage = /*#__PURE__*/function () {
        function AniversarioDoMesPage(membroService, navCtrl) {
          _classCallCheck(this, AniversarioDoMesPage);

          this.membroService = membroService;
          this.navCtrl = navCtrl;
          this.inicializar();
          moment__WEBPACK_IMPORTED_MODULE_6__["locale"]("pt-br");
        }

        _createClass(AniversarioDoMesPage, [{
          key: "inicializar",
          value: function inicializar() {
            var _this = this;

            this.listaMembrosObservable = this.membroService.listar();
            this.listaMembrosObservable.subscribe(function (response) {
              _this.membros = response;
              _this.membrosFiltrados = response;
              _this.membros = _this.exibirAniversariantes(response);
              _this.membrosFiltrados = _this.exibirAniversariantes(response);
              _this.totalAniversariantes = _this.membros.length;

              _this.membrosFiltrados.sort(function (a, b) {
                var newA = moment__WEBPACK_IMPORTED_MODULE_6__(a.dataNascimento).format('DDMM');
                var newB = moment__WEBPACK_IMPORTED_MODULE_6__(b.dataNascimento).format('DDMM');
                return moment__WEBPACK_IMPORTED_MODULE_6__(newA).diff(newB);
              });
            });
          }
        }, {
          key: "exibirAniversariantes",
          value: function exibirAniversariantes(listaMembros) {
            return listaMembros.filter(function (m) {
              return moment__WEBPACK_IMPORTED_MODULE_6__(m.dataNascimento).month() === moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).month();
            });
          }
        }, {
          key: "idadeAtual",
          value: function idadeAtual(membro) {
            var anoAtual = moment__WEBPACK_IMPORTED_MODULE_6__().toDate();
            var anoMembro = moment__WEBPACK_IMPORTED_MODULE_6__(membro.dataNascimento).toDate();
            return anoAtual.getFullYear() - anoMembro.getFullYear();
          }
        }, {
          key: "formatarDataDeNascimento",
          value: function formatarDataDeNascimento(data) {
            return src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].dateFormatterBrazil(data);
          }
        }, {
          key: "aniversarioMes",
          value: function aniversarioMes() {
            var monthNameLong = new Date(Date.now()).toLocaleString("pt-BR", {
              month: "long"
            });
            return monthNameLong.toUpperCase();
          }
        }, {
          key: "formatarNumeroWhatsapp",
          value: function formatarNumeroWhatsapp(whatsapp) {
            var numero = whatsapp.replace("(", "").replace(")", "").replace("-", "");
            return "https://api.whatsapp.com/send/?phone=55".concat(numero, "&text&app_absent=0");
          }
        }, {
          key: "pesquisarMembros",
          value: function pesquisarMembros(ev) {
            this.membrosFiltrados = this.membros;
            var val = ev.detail.value;

            if (val && val.trim() !== "") {
              this.membrosFiltrados = this.membrosFiltrados.filter(function (term) {
                return term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
              });
            }
          }
        }]);

        return AniversarioDoMesPage;
      }();

      AniversarioDoMesPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_5__["MembroService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      AniversarioDoMesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-aniversario-do-mes",
        template: _raw_loader_aniversario_do_mes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_aniversario_do_mes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AniversarioDoMesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-aniversario-do-mes-aniversario-do-mes-module-es5.js.map