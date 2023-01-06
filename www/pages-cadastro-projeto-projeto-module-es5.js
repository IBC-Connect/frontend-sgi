(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-projeto-projeto-module"], {
    /***/
    "21SU":
    /*!******************************************************************!*\
      !*** ./src/app/pages/cadastro/projeto/projeto-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: ProjetoPageRoutingModule */

    /***/
    function SU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoPageRoutingModule", function () {
        return ProjetoPageRoutingModule;
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


      var _projeto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./projeto.page */
      "fbZH");

      var routes = [{
        path: '',
        component: _projeto_page__WEBPACK_IMPORTED_MODULE_3__["ProjetoPage"]
      }];

      var ProjetoPageRoutingModule = function ProjetoPageRoutingModule() {
        _classCallCheck(this, ProjetoPageRoutingModule);
      };

      ProjetoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProjetoPageRoutingModule);
      /***/
    },

    /***/
    "H+Lx":
    /*!**********************************************************!*\
      !*** ./src/app/pages/cadastro/projeto/projeto.module.ts ***!
      \**********************************************************/

    /*! exports provided: ProjetoPageModule */

    /***/
    function HLx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoPageModule", function () {
        return ProjetoPageModule;
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


      var _projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./projeto-routing.module */
      "21SU");
      /* harmony import */


      var _projeto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./projeto.page */
      "fbZH");
      /* harmony import */


      var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! br-mask */
      "/oCc");

      var ProjetoPageModule = function ProjetoPageModule() {
        _classCallCheck(this, ProjetoPageModule);
      };

      ProjetoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetoPageRoutingModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]],
        declarations: [_projeto_page__WEBPACK_IMPORTED_MODULE_6__["ProjetoPage"]]
      })], ProjetoPageModule);
      /***/
    },

    /***/
    "Ro42":
    /*!**********************************************************!*\
      !*** ./src/app/pages/cadastro/projeto/projeto.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function Ro42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content,\nion-item,\nion-input,\nion-select,\nion-textarea,\n.titulo-dado,\n.dia-da-semana {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-title, h2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-select,\nion-input,\nion-textarea,\n.titulo-dado,\n.dia-da-semana,\nh2 {\n  color: #2e2e3c;\n}\n\nion-label {\n  --color:#997045;\n}\n\nion-input, ion-textarea {\n  text-transform: uppercase;\n  font-size: 11pt;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\n.dia-da-semana {\n  font-size: 11pt;\n  margin-left: 3%;\n}\n\n.horario {\n  font-size: 11pt;\n}\n\nspan {\n  color: #eb445a;\n}\n\n.titulo-dado {\n  font-size: 13pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamV0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7RUFPRyxnQ0FBQTtBQUNIOztBQUVBOzs7RUFHSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7QUFDSjs7QUFFQTs7Ozs7O0VBTUksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InByb2pldG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsICBcclxuaW9uLWl0ZW0sIFxyXG5pb24taW5wdXQsIFxyXG5pb24tc2VsZWN0LFxyXG5pb24tdGV4dGFyZWEsXHJcbi50aXR1bG8tZGFkbyxcclxuLmRpYS1kYS1zZW1hbmEge1xyXG4gICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQsIFxyXG5pb24taXRlbSxcclxuI3JvZGFwZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbmlvbi10aXRsZSwgaDJ7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3QsXHJcbmlvbi1pbnB1dCxcclxuaW9uLXRleHRhcmVhLCBcclxuLnRpdHVsby1kYWRvLFxyXG4uZGlhLWRhLXNlbWFuYSxcclxuaDJ7XHJcbiAgICBjb2xvcjojMmUyZTNjO1xyXG59IFxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgLS1jb2xvcjojOTk3MDQ1O1xyXG59XHJcblxyXG5pb24taW5wdXQsIGlvbi10ZXh0YXJlYXtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbiB9XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6MTNwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tbGVmdDoxJTtcclxufSBcclxuXHJcbi5kaWEtZGEtc2VtYW5he1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcblxyXG4uaG9yYXJpb3tcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogI2ViNDQ1YTtcclxufVxyXG5cclxuLnRpdHVsby1kYWRve1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG59Il19 */";
      /***/
    },

    /***/
    "Tz11":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/projeto/projeto.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tz11(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Cadastro de projeto </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n        <h2>Informações do Projeto</h2>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item class=\"row-item\">\r\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome<span>*</span></ion-label>\r\n                    <ion-input mode=\"md\" [(ngModel)]=\"projeto.nome\" type=\"text\" maxlength=\"100\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-item class=\"row-item\">\r\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data de início <span>*</span></ion-label>\r\n                    <ion-input mode=\"md\" placeholder=\"dd/mm/yyyy\" [brmasker]=\"{mask:'00/00/0000', len:10}\" [(ngModel)]=\"projeto.dataInicio\" maxlength=\"10\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-item>\r\n            <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Descrição <span>*</span></ion-label>\r\n            <ion-textarea mode=\"md\" [(ngModel)]=\"projeto.descricao\"></ion-textarea>\r\n        </ion-item>\r\n\r\n        <h2>Dias e horários das atividades</h2>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Segunda-feira</ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[0].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[0].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Terça-feira</ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[1].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[1].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Quarta-feira</ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[2].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[2].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Quinta-feira</ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[3].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[3].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Sexta-feira</ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[4].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[4].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Sábado</ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[5].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[5].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label mode=\"md\" class=\"dia-da-semana\">Domingo</ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[6].horarioInicial\" class=\"horario\" placeholder=\"Selecione o horário inicial\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-select [(ngModel)]=\"projeto.diasEncontro[6].horarioFinal\" class=\"horario\" placeholder=\"Selecione o horário final\" multiple=\"false\" interface=\"popover\">\r\n                    <ion-select-option *ngFor=\"let item of horarios\" [value]=\"item\">\r\n                        {{item}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar no-padding id=\"rodape\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button mode=\"md\" [disabled]=\"disabledBotaoCadastrar()\" color=\"primary\" (click)=\"cadastrar()\" type=\"submit\" fill=\"solid\" expand=\"full\">\r\n                        Cadastrar</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "e/6e":
    /*!***********************************!*\
      !*** ./src/app/modelo/Projeto.ts ***!
      \***********************************/

    /*! exports provided: Projeto */

    /***/
    function e6e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Projeto", function () {
        return Projeto;
      });

      var Projeto = function Projeto() {
        _classCallCheck(this, Projeto);
      };
      /***/

    },

    /***/
    "fbZH":
    /*!********************************************************!*\
      !*** ./src/app/pages/cadastro/projeto/projeto.page.ts ***!
      \********************************************************/

    /*! exports provided: ProjetoPage */

    /***/
    function fbZH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoPage", function () {
        return ProjetoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_projeto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./projeto.page.html */
      "Tz11");
      /* harmony import */


      var _projeto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./projeto.page.scss */
      "Ro42");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_modelo_Projeto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/Projeto */
      "e/6e");
      /* harmony import */


      var src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/servicos/Projeto */
      "MoJo");
      /* harmony import */


      var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/DateUtil */
      "JM5f");
      /* harmony import */


      var src_app_util_DiaDaSemanaEHorarioUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/util/DiaDaSemanaEHorarioUtil */
      "itSG");
      /* harmony import */


      var src_app_util_EncontroUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/util/EncontroUtil */
      "RoIt");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");
      /* harmony import */


      var src_app_validador_ValidadorCamposObrigatorios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/validador/ValidadorCamposObrigatorios */
      "tyGv");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);

      var ProjetoPage = /*#__PURE__*/function () {
        function ProjetoPage(projetoService, aviso) {
          _classCallCheck(this, ProjetoPage);

          this.projetoService = projetoService;
          this.aviso = aviso;
          moment__WEBPACK_IMPORTED_MODULE_12__["locale"]("pt-br");
          this.inicializar();
        }

        _createClass(ProjetoPage, [{
          key: "inicializar",
          value: function inicializar() {
            this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_10__["MensagensUtil"](this.aviso);
            this.diasDaSemana = src_app_util_DiaDaSemanaEHorarioUtil__WEBPACK_IMPORTED_MODULE_8__["DiaDaSemanaEHorarioUtil"].diasDaSemana();
            this.horarios = src_app_util_DiaDaSemanaEHorarioUtil__WEBPACK_IMPORTED_MODULE_8__["DiaDaSemanaEHorarioUtil"].horarios();
            this.projeto = new src_app_modelo_Projeto__WEBPACK_IMPORTED_MODULE_5__["Projeto"]();
            this.projeto.diasEncontro = src_app_util_EncontroUtil__WEBPACK_IMPORTED_MODULE_9__["EncontroUtil"].arrayEncontro();
          }
        }, {
          key: "disabledBotaoCadastrar",
          value: function disabledBotaoCadastrar() {
            return !src_app_validador_ValidadorCamposObrigatorios__WEBPACK_IMPORTED_MODULE_11__["ValidadorCamposObrigatorios"].isCampoPreenchido(this.projeto.nome) || !src_app_validador_ValidadorCamposObrigatorios__WEBPACK_IMPORTED_MODULE_11__["ValidadorCamposObrigatorios"].isCampoPreenchido(this.projeto.dataInicio) || !src_app_validador_ValidadorCamposObrigatorios__WEBPACK_IMPORTED_MODULE_11__["ValidadorCamposObrigatorios"].isCampoPreenchido(this.projeto.descricao);
          }
        }, {
          key: "cadastrar",
          value: function cadastrar() {
            if (this.projeto) {
              if (!src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].verificarIsDataValida(this.projeto.dataInicio)) {
                this.mensagens.mensagemError("A data informada no campo 'Data de início' não é válida.");
              } else if (this.verificarHorariosEncontro()) {
                /*Verificar horários dos encontros */
                this.mensagens.mensagemError("O horário final deve ser maior que o horário inicial.");
              } else {
                this.projeto.nome = this.projeto.nome.toUpperCase();
                this.projeto.descricao = this.projeto.descricao.toUpperCase();
                this.projeto.situacao = "Ativo";
                this.projetoService.adicionarOuAtualizar(this.projeto, "Projeto cadastrado com sucesso.");
                this.inicializar();
              }
            }
          }
        }, {
          key: "verificarHorariosEncontro",
          value: function verificarHorariosEncontro() {
            var retorno = false;
            this.projeto.diasEncontro.forEach(function (element) {
              if (element.horarioInicial && element.horarioFinal) {
                if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_7__["DateUtil"].verificarIntervaloHora(element.horarioInicial, element.horarioFinal)) {
                  retorno = true;
                }
              }
            });
            return retorno;
          }
        }]);

        return ProjetoPage;
      }();

      ProjetoPage.ctorParameters = function () {
        return [{
          type: src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_6__["ProjetoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      ProjetoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-projeto",
        template: _raw_loader_projeto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projeto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProjetoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cadastro-projeto-projeto-module-es5.js.map