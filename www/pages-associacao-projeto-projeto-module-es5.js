(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-associacao-projeto-projeto-module"], {
    /***/
    "1upU":
    /*!***********************************!*\
      !*** ./src/app/mapper/Projeto.ts ***!
      \***********************************/

    /*! exports provided: ProjetoMapper */

    /***/
    function upU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjetoMapper", function () {
        return ProjetoMapper;
      });

      var ProjetoMapper = /*#__PURE__*/function () {
        function ProjetoMapper() {
          _classCallCheck(this, ProjetoMapper);
        }

        _createClass(ProjetoMapper, null, [{
          key: "formularioToProjeto",
          value: function formularioToProjeto(form, projeto) {
            projeto.responsavel = form.responsavel;
            projeto.dataInicioResponsavel = form.dataInicio;
            projeto.dataFimResponsavel = form.dataFim;
            return projeto;
          }
        }]);

        return ProjetoMapper;
      }();
      /***/

    },

    /***/
    "VT+I":
    /*!************************************************************!*\
      !*** ./src/app/pages/associacao/projeto/projeto.module.ts ***!
      \************************************************************/

    /*! exports provided: ProjetoPageModule */

    /***/
    function VTI(module, __webpack_exports__, __webpack_require__) {
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
      "wHlF");
      /* harmony import */


      var _projeto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./projeto.page */
      "z4wp");
      /* harmony import */


      var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! br-mask */
      "/oCc");

      var ProjetoPageModule = function ProjetoPageModule() {
        _classCallCheck(this, ProjetoPageModule);
      };

      ProjetoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]],
        declarations: [_projeto_page__WEBPACK_IMPORTED_MODULE_6__["ProjetoPage"]]
      })], ProjetoPageModule);
      /***/
    },

    /***/
    "ms6B":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/associacao/projeto/projeto.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ms6B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"lista/projeto/ativos\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Associar projeto</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <form [formGroup]=\"formulario\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Projeto</ion-label>\r\n                        <ion-input mode=\"md\" [disabled]=\"true\" formControlName=\"nome\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Responsável</ion-label>\r\n                    <ion-select [selectedText]=\"formulario.get('responsavel').value\" placeholder=\"Selecione uma opção\" formControlName=\"responsavel\" multiple=\"false\" interface=\"popover\">\r\n                        <ion-select-option *ngFor=\"let item of membrosAtivos\" [value]=\"item.nomeCompleto\">\r\n                            {{item.nomeCompleto}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data de Início</ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"dataInicio\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data Fim</ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"dataFim\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar no-padding id=\"rodape\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button mode=\"md\" (click)=\"associar()\" [disabled]=\"formulario.invalid\" type=\"submit\" fill=\"solid\" expand=\"full\"> Associar</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "sO3I":
    /*!************************************************************!*\
      !*** ./src/app/pages/associacao/projeto/projeto.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function sO3I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content,\nion-item,\nion-input,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-select,\nion-input,\n.titulo-dado,\n.titulo-dado-select-acesso,\n.titulo-dado-select,\nh2 {\n  color: #2e2e3c;\n}\n\nion-title, h2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-input {\n  text-transform: uppercase;\n  font-size: 9pt;\n}\n\nion-select {\n  font-size: 10pt;\n}\n\n#cabecalho {\n  --background: #2e2e3c;\n  color: #fff;\n}\n\n.titulo-dado {\n  font-size: 11pt;\n}\n\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-size: 8.3pt;\n}\n\n.titulo-dado-select {\n  margin-left: 1%;\n}\n\n.titulo-dado-batismo {\n  margin-left: 4%;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\nspan {\n  color: #eb445a;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamV0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0VBUUcsZ0NBQUE7QUFDSDs7QUFFQTs7O0VBR0kscUJBQUE7QUFDSjs7QUFFQTs7Ozs7O0VBTUksY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUM7OztFQUdHLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJwcm9qZXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LCAgXHJcbmlvbi1pdGVtLCBcclxuaW9uLWlucHV0LCBcclxuaW9uLXNlbGVjdCxcclxuLnRpdHVsby1kYWRvLFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcclxuLnRpdHVsby1kYWRvLWJhdGlzbW8ge1xyXG4gICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQsIFxyXG5pb24taXRlbSxcclxuI3JvZGFwZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3QsXHJcbmlvbi1pbnB1dCxcclxuLnRpdHVsby1kYWRvLFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcclxuLnRpdHVsby1kYWRvLXNlbGVjdCxcclxuaDIge1xyXG4gICAgY29sb3I6IzJlMmUzYztcclxufSBcclxuXHJcbmlvbi10aXRsZSwgaDJ7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDlwdDtcclxuIH1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbiNjYWJlY2FsaG97XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyZTJlM2M7IFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuICAgIFxyXG4udGl0dWxvLWRhZG97XHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbiB9XHJcblxyXG4gLnRpdHVsby1kYWRvLXNlbGVjdCxcclxuIC50aXR1bG8tZGFkby1zZWxlY3QtYWNlc3NvLFxyXG4gLnRpdHVsby1kYWRvLWJhdGlzbW97XHJcbiAgICBmb250LXNpemU6IDguM3B0O1xyXG4gfVxyXG5cclxuLnRpdHVsby1kYWRvLXNlbGVjdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTsgIFxyXG59XHJcblxyXG4udGl0dWxvLWRhZG8tYmF0aXNtb3tcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTsgIFxyXG59XHJcbiBcclxuaDIge1xyXG4gICAgZm9udC1zaXplOjEzcHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6MSU7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6ICNlYjQ0NWE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubXljb21wb25lbnQtd2lkZXItcG9wb3ZlclxyXG57XHJcbiAgLS13aWR0aDogOTUlO1xyXG4gIC0tbWF4LXdpZHRoOiA2MDBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "wHlF":
    /*!********************************************************************!*\
      !*** ./src/app/pages/associacao/projeto/projeto-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: ProjetoPageRoutingModule */

    /***/
    function wHlF(module, __webpack_exports__, __webpack_require__) {
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
      "z4wp");

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
    "z4wp":
    /*!**********************************************************!*\
      !*** ./src/app/pages/associacao/projeto/projeto.page.ts ***!
      \**********************************************************/

    /*! exports provided: ProjetoPage */

    /***/
    function z4wp(module, __webpack_exports__, __webpack_require__) {
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
      "ms6B");
      /* harmony import */


      var _projeto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./projeto.page.scss */
      "sO3I");
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


      var src_app_mapper_Projeto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/mapper/Projeto */
      "1upU");
      /* harmony import */


      var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/servicos/Membro */
      "fX5e");
      /* harmony import */


      var src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/servicos/Projeto */
      "MoJo");
      /* harmony import */


      var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/util/DateUtil */
      "JM5f");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");

      var ProjetoPage = /*#__PURE__*/function () {
        function ProjetoPage(formulador, membroService, aviso, projetoService, router) {
          _classCallCheck(this, ProjetoPage);

          this.formulador = formulador;
          this.membroService = membroService;
          this.aviso = aviso;
          this.projetoService = projetoService;
          this.router = router;
          var nav = this.router.getCurrentNavigation();
          this.projeto = nav.extras.state.content;
          this.ajustarDatas();
        }

        _createClass(ProjetoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.inicializar();
          }
        }, {
          key: "inicializar",
          value: function inicializar() {
            var _this = this;

            this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_11__["MensagensUtil"](this.aviso);
            this.listaMembrosObservable = this.membroService.listar();
            this.listaMembrosObservable.subscribe(function (response) {
              _this.membrosAtivos = response;
              _this.membrosAtivos = _this.membrosAtivos.filter(function (m) {
                return m.situacao === "Ativo";
              });

              _this.membrosAtivos.sort(function (a, b) {
                return a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0;
              });
            });
            this.criarFormulario();
          }
        }, {
          key: "criarFormulario",
          value: function criarFormulario() {
            this.formulario = this.formulador.group({
              key: [this.projeto.key, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              responsavel: [this.projeto.responsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              dataInicio: [this.projeto.dataInicioResponsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              dataFim: [this.projeto.dataFimResponsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              nome: [this.projeto.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "ajustarDatas",
          value: function ajustarDatas() {
            if (this.projeto.dataInicioResponsavel) this.projeto.dataInicioResponsavel = this.projeto.dataInicioResponsavel.includes("/") ? this.projeto.dataInicioResponsavel : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.projeto.dataInicioResponsavel);
            if (this.projeto.dataFimResponsavel) this.projeto.dataFimResponsavel = this.projeto.dataFimResponsavel.includes("/") ? this.projeto.dataFimResponsavel : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.projeto.dataFimResponsavel);
          }
        }, {
          key: "associar",
          value: function associar() {
            if (this.formulario.value) {
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
                this.mensagens.mensagemError("O responsável pode assumir um cargo com duração máxima de dois anos.");
              } else {
                this.projeto = src_app_mapper_Projeto__WEBPACK_IMPORTED_MODULE_7__["ProjetoMapper"].formularioToProjeto(this.formulario.value, this.projeto);
                this.projetoService.adicionarOuAtualizar(this.projeto, "'Associação realizada com sucesso!");
              }
            }
          }
        }]);

        return ProjetoPage;
      }();

      ProjetoPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_8__["MembroService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_9__["ProjetoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
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
//# sourceMappingURL=pages-associacao-projeto-projeto-module-es5.js.map