(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-associacao-cargo-cargo-module"], {
    /***/
    "UKc/":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/associacao/cargo/cargo.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function UKc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Associar cargo</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <form [formGroup]=\"formulario\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Cargo</ion-label>\r\n                        <ion-input mode=\"md\" [disabled]=\"true\" formControlName=\"nome\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Responsável</ion-label>\r\n                    <ion-select [selectedText]=\"formulario.get('responsavel').value\" placeholder=\"Selecione uma opção\" formControlName=\"responsavel\" multiple=\"false\" interface=\"popover\">\r\n                        <ion-select-option *ngFor=\"let item of membrosAtivos\" [value]=\"item.nomeCompleto\">\r\n                            {{item.nomeCompleto}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data Início</ion-label>\r\n                        <ion-input mode=\"md\" (ionBlur)=\"calcularDataFinal($event)\" formControlName=\"dataInicio\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data Fim</ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"dataFim\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar no-padding id=\"rodape\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button mode=\"md\" (click)=\"associar()\" [disabled]=\"formulario.invalid\" type=\"submit\" fill=\"solid\" expand=\"full\"> Associar</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "VhTE":
    /*!*********************************!*\
      !*** ./src/app/mapper/Cargo.ts ***!
      \*********************************/

    /*! exports provided: CargoMapper */

    /***/
    function VhTE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CargoMapper", function () {
        return CargoMapper;
      });
      /* harmony import */


      var _modelo_Cargo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../modelo/Cargo */
      "8cY0");

      var CargoMapper = /*#__PURE__*/function () {
        function CargoMapper() {
          _classCallCheck(this, CargoMapper);
        }

        _createClass(CargoMapper, null, [{
          key: "formularioToCargo",
          value: function formularioToCargo(form) {
            var cargo = new _modelo_Cargo__WEBPACK_IMPORTED_MODULE_0__["Cargo"]();
            cargo.nome = form.nome.toString().toUpperCase();
            cargo.descricao = form.descricao.toString().toUpperCase();
            cargo.key = form.key;
            if (form.responsavel) cargo.responsavel = form.responsavel;
            if (form.dataInicio) cargo.dataInicioResponsavel = form.dataInicio;
            if (form.dataFim) cargo.dataFimResponsavel = form.dataFim;
            return cargo;
          }
        }]);

        return CargoMapper;
      }();
      /***/

    },

    /***/
    "WMvC":
    /*!********************************************************!*\
      !*** ./src/app/pages/associacao/cargo/cargo.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function WMvC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content,\nion-item,\nion-input,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-select,\nion-input,\n.titulo-dado,\n.titulo-dado-select-acesso,\n.titulo-dado-select,\nh2 {\n  color: #2e2e3c;\n}\n\nion-title, h2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-input {\n  text-transform: uppercase;\n  font-size: 9pt;\n}\n\nion-select {\n  font-size: 10pt;\n}\n\n#cabecalho {\n  --background: #2e2e3c;\n  color: #fff;\n}\n\n.titulo-dado {\n  font-size: 11pt;\n}\n\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-size: 8.3pt;\n}\n\n.titulo-dado-select {\n  margin-left: 1%;\n}\n\n.titulo-dado-batismo {\n  margin-left: 4%;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\nspan {\n  color: #eb445a;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZ28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztFQVFHLGdDQUFBO0FBQ0g7O0FBRUE7OztFQUdJLHFCQUFBO0FBQ0o7O0FBRUE7Ozs7OztFQU1JLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVDOzs7RUFHRyxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoiY2FyZ28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsICBcclxuaW9uLWl0ZW0sIFxyXG5pb24taW5wdXQsIFxyXG5pb24tc2VsZWN0LFxyXG4udGl0dWxvLWRhZG8sXHJcbi50aXR1bG8tZGFkby1zZWxlY3QsXHJcbi50aXR1bG8tZGFkby1zZWxlY3QtYWNlc3NvLFxyXG4udGl0dWxvLWRhZG8tYmF0aXNtbyB7XHJcbiAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tY29udGVudCwgXHJcbmlvbi1pdGVtLFxyXG4jcm9kYXBlIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2U2ZTZlNjtcclxufVxyXG5cclxuaW9uLXNlbGVjdCxcclxuaW9uLWlucHV0LFxyXG4udGl0dWxvLWRhZG8sXHJcbi50aXR1bG8tZGFkby1zZWxlY3QtYWNlc3NvLFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LFxyXG5oMiB7XHJcbiAgICBjb2xvcjojMmUyZTNjO1xyXG59IFxyXG5cclxuaW9uLXRpdGxlLCBoMntcclxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gfVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuI2NhYmVjYWxob3tcclxuICAgIC0tYmFja2dyb3VuZDogIzJlMmUzYzsgXHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4gICAgXHJcbi50aXR1bG8tZGFkb3tcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuIH1cclxuXHJcbiAudGl0dWxvLWRhZG8tc2VsZWN0LFxyXG4gLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28sXHJcbiAudGl0dWxvLWRhZG8tYmF0aXNtb3tcclxuICAgIGZvbnQtc2l6ZTogOC4zcHQ7XHJcbiB9XHJcblxyXG4udGl0dWxvLWRhZG8tc2VsZWN0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElOyAgXHJcbn1cclxuXHJcbi50aXR1bG8tZGFkby1iYXRpc21ve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQlOyAgXHJcbn1cclxuIFxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6MTNwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tbGVmdDoxJTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogI2ViNDQ1YTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5teWNvbXBvbmVudC13aWRlci1wb3BvdmVyXHJcbntcclxuICAtLXdpZHRoOiA5NSU7XHJcbiAgLS1tYXgtd2lkdGg6IDYwMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "d15I":
    /*!****************************************************************!*\
      !*** ./src/app/pages/associacao/cargo/cargo-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: CargoPageRoutingModule */

    /***/
    function d15I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CargoPageRoutingModule", function () {
        return CargoPageRoutingModule;
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


      var _cargo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cargo.page */
      "nU4M");

      var routes = [{
        path: '',
        component: _cargo_page__WEBPACK_IMPORTED_MODULE_3__["CargoPage"]
      }];

      var CargoPageRoutingModule = function CargoPageRoutingModule() {
        _classCallCheck(this, CargoPageRoutingModule);
      };

      CargoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CargoPageRoutingModule);
      /***/
    },

    /***/
    "nPj0":
    /*!********************************************************!*\
      !*** ./src/app/pages/associacao/cargo/cargo.module.ts ***!
      \********************************************************/

    /*! exports provided: CargoPageModule */

    /***/
    function nPj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CargoPageModule", function () {
        return CargoPageModule;
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


      var _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cargo-routing.module */
      "d15I");
      /* harmony import */


      var _cargo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cargo.page */
      "nU4M");
      /* harmony import */


      var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! br-mask */
      "/oCc");

      var CargoPageModule = function CargoPageModule() {
        _classCallCheck(this, CargoPageModule);
      };

      CargoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CargoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]],
        declarations: [_cargo_page__WEBPACK_IMPORTED_MODULE_6__["CargoPage"]]
      })], CargoPageModule);
      /***/
    },

    /***/
    "nU4M":
    /*!******************************************************!*\
      !*** ./src/app/pages/associacao/cargo/cargo.page.ts ***!
      \******************************************************/

    /*! exports provided: CargoPage */

    /***/
    function nU4M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CargoPage", function () {
        return CargoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cargo.page.html */
      "UKc/");
      /* harmony import */


      var _cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cargo.page.scss */
      "WMvC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_mapper_Cargo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/mapper/Cargo */
      "VhTE");
      /* harmony import */


      var src_app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/servicos/Cargo */
      "EhKG");
      /* harmony import */


      var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/servicos/Membro */
      "fX5e");
      /* harmony import */


      var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/util/DateUtil */
      "JM5f");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");

      var CargoPage = /*#__PURE__*/function () {
        function CargoPage(formulador, membroService, aviso, cargoService, router) {
          _classCallCheck(this, CargoPage);

          this.formulador = formulador;
          this.membroService = membroService;
          this.aviso = aviso;
          this.cargoService = cargoService;
          this.router = router;
          this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_11__["MensagensUtil"](this.aviso);
          var nav = this.router.getCurrentNavigation();
          this.cargo = nav.extras.state.content;
          this.ajustarDatas();
          this.inicializar();
        }

        _createClass(CargoPage, [{
          key: "inicializar",
          value: function inicializar() {
            var _this = this;

            this.listaMembrosObservable = this.membroService.listar();
            this.listaMembrosObservable.subscribe(function (response) {
              _this.membrosAtivos = response;
              _this.membrosAtivos = _this.membrosAtivos.filter(function (m) {
                return m.situacao === 'Ativo';
              });

              _this.membrosAtivos.sort(function (a, b) {
                return a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0;
              });
            });
            this.criarFormulario();
            this.formulario.controls['responsavel'].setValue(this.cargo.responsavel);
          }
        }, {
          key: "criarFormulario",
          value: function criarFormulario() {
            this.formulario = this.formulador.group({
              key: [this.cargo.key, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              responsavel: [this.cargo.responsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              dataInicio: [this.cargo.dataInicioResponsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              dataFim: [this.cargo.dataFimResponsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              descricao: [this.cargo.descricao],
              nome: [this.cargo.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "ajustarDatas",
          value: function ajustarDatas() {
            if (this.cargo.dataInicioResponsavel) this.cargo.dataInicioResponsavel = this.cargo.dataInicioResponsavel.includes('/') ? this.cargo.dataInicioResponsavel : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.cargo.dataInicioResponsavel);
            if (this.cargo.dataFimResponsavel) this.cargo.dataFimResponsavel = this.cargo.dataFimResponsavel.includes('/') ? this.cargo.dataFimResponsavel : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.cargo.dataFimResponsavel);
          }
        }, {
          key: "associar",
          value: function associar() {
            if (this.formulario.value) {
              this.isDataFimEnable(true);
              this.formulario.controls['dataFim'].enable();

              if (this.formulario.value.dataFim && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.dataFim)) {
                this.mensagens.mensagemError("A data informada no campo 'Data Fim' não é válida.");
              } else if (this.formulario.value.dataInicio && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.dataInicio)) {
                this.mensagens.mensagemError("A data informada no campo 'Data Início' não é válida.");
              } else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataFutura(this.formulario.value.dataInicio)) {
                this.mensagens.mensagemError("Não é permitido data futura para o campo 'Data Início'");
              } else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataDoisMaiorDataUm(this.formulario.value.dataInicio, this.formulario.value.dataFim) && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDatasIguais(this.formulario.value.dataFim, this.formulario.value.dataInicio)) {
                this.mensagens.mensagemError("A 'Data Início' não pode ser maior que a 'Data Fim'.");
              } else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDatasIguais(this.formulario.value.dataInicio, this.formulario.value.dataFim)) {
                this.mensagens.mensagemError("As datas 'Data Início' e 'Data Fim' não podem ser iguais.");
              } else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].numeroDiasEntreDuasDatas(this.formulario.value.dataInicio, this.formulario.value.dataFim) >= 731) {
                this.mensagens.mensagemError('O responsável pode assumir um cargo com duração máxima de dois anos.');
              } else {
                this.cargo = src_app_mapper_Cargo__WEBPACK_IMPORTED_MODULE_7__["CargoMapper"].formularioToCargo(this.formulario.value);
                this.cargoService.adicionarOuAtualizar(this.cargo);
                this.mensagens.mensagemSucesso('Associação realizada com sucesso!');
              }

              this.isDataFimEnable(false);
            }
          }
        }, {
          key: "calcularDataFinal",
          value: function calcularDataFinal(event) {
            var dataInicial = event.target.value;

            if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(dataInicial)) {
              this.formulario.controls['dataFim'].setValue(src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].calcularData(dataInicial, 2));
              this.isDataFimEnable(false);
            }
          }
        }, {
          key: "isDataFimEnable",
          value: function isDataFimEnable(valor) {
            if (valor) this.formulario.controls['dataFim'].enable();else this.formulario.controls['dataFim'].disable();
          }
        }]);

        return CargoPage;
      }();

      CargoPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_9__["MembroService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_8__["CargoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      CargoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cargo',
        template: _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CargoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-associacao-cargo-cargo-module-es5.js.map