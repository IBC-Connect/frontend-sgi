(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edicao-membro-membro-module"], {
    /***/
    "2r89":
    /*!******************************************************!*\
      !*** ./src/app/pages/edicao/membro/membro.module.ts ***!
      \******************************************************/

    /*! exports provided: MembroPageModule */

    /***/
    function r89(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembroPageModule", function () {
        return MembroPageModule;
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


      var _membro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./membro-routing.module */
      "5g7D");
      /* harmony import */


      var _membro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./membro.page */
      "pzDh");
      /* harmony import */


      var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! br-mask */
      "/oCc");

      var MembroPageModule = function MembroPageModule() {
        _classCallCheck(this, MembroPageModule);
      };

      MembroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _membro_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembroPageRoutingModule"]],
        declarations: [_membro_page__WEBPACK_IMPORTED_MODULE_6__["MembroPage"]]
      })], MembroPageModule);
      /***/
    },

    /***/
    "5g7D":
    /*!**************************************************************!*\
      !*** ./src/app/pages/edicao/membro/membro-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: MembroPageRoutingModule */

    /***/
    function g7D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembroPageRoutingModule", function () {
        return MembroPageRoutingModule;
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


      var _membro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./membro.page */
      "pzDh");

      var routes = [{
        path: '',
        component: _membro_page__WEBPACK_IMPORTED_MODULE_3__["MembroPage"]
      }];

      var MembroPageRoutingModule = function MembroPageRoutingModule() {
        _classCallCheck(this, MembroPageRoutingModule);
      };

      MembroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MembroPageRoutingModule);
      /***/
    },

    /***/
    "T/z0":
    /*!******************************************************!*\
      !*** ./src/app/pages/edicao/membro/membro.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function TZ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content,\nion-item,\nion-input,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-select,\nion-input,\n.titulo-dado,\n.titulo-dado-select-acesso,\n.titulo-dado-select,\nh2 {\n  color: #2e2e3c;\n}\n\nion-title,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-input {\n  text-transform: uppercase;\n  font-size: 9pt;\n}\n\n#email {\n  text-transform: lowercase;\n}\n\nion-select {\n  font-size: 10pt;\n}\n\n#cabecalho {\n  --background: #2e2e3c;\n  color: #fff;\n}\n\n.titulo-dado {\n  font-size: 11pt;\n}\n\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-size: 8.3pt;\n}\n\n.titulo-dado-select {\n  margin-left: 5.3%;\n}\n\n.titulo-dado-select-acesso {\n  margin-left: 1%;\n}\n\n.titulo-dado-batismo {\n  margin-left: 4%;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\nspan {\n  color: #eb445a;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVtYnJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUFRSSxnQ0FBQTtBQUNKOztBQUVBOzs7RUFHSSxxQkFBQTtBQUNKOztBQUVBOzs7Ozs7RUFNSSxjQUFBO0FBQ0o7O0FBRUE7O0VBRUksaUNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBOzs7RUFHSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6Im1lbWJyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCxcclxuaW9uLWl0ZW0sXHJcbmlvbi1pbnB1dCxcclxuaW9uLXNlbGVjdCxcclxuLnRpdHVsby1kYWRvLFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcclxuLnRpdHVsby1kYWRvLWJhdGlzbW8ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LFxyXG5pb24taXRlbSxcclxuI3JvZGFwZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3QsXHJcbmlvbi1pbnB1dCxcclxuLnRpdHVsby1kYWRvLFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcclxuLnRpdHVsby1kYWRvLXNlbGVjdCxcclxuaDIge1xyXG4gICAgY29sb3I6ICMyZTJlM2M7XHJcbn1cclxuXHJcbmlvbi10aXRsZSxcclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogOXB0O1xyXG59XHJcblxyXG4jZW1haWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbiNjYWJlY2FsaG8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmUyZTNjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50aXR1bG8tZGFkbyB7XHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbn1cclxuXHJcbi50aXR1bG8tZGFkby1zZWxlY3QsXHJcbi50aXR1bG8tZGFkby1zZWxlY3QtYWNlc3NvLFxyXG4udGl0dWxvLWRhZG8tYmF0aXNtbyB7XHJcbiAgICBmb250LXNpemU6IDguM3B0O1xyXG59XHJcblxyXG4udGl0dWxvLWRhZG8tc2VsZWN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1LjMlO1xyXG59XHJcblxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbi50aXR1bG8tZGFkby1iYXRpc21vIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogI2ViNDQ1YTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5teWNvbXBvbmVudC13aWRlci1wb3BvdmVyIHtcclxuICAgIC0td2lkdGg6IDk1JTtcclxuICAgIC0tbWF4LXdpZHRoOiA2MDBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "pzDh":
    /*!****************************************************!*\
      !*** ./src/app/pages/edicao/membro/membro.page.ts ***!
      \****************************************************/

    /*! exports provided: MembroPage */

    /***/
    function pzDh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembroPage", function () {
        return MembroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_membro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./membro.page.html */
      "yETG");
      /* harmony import */


      var _membro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./membro.page.scss */
      "T/z0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_mapper_Membro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/mapper/Membro */
      "JpJ2");
      /* harmony import */


      var src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/servicos/ConsultaCEP */
      "Gchg");
      /* harmony import */


      var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/servicos/Membro */
      "fX5e");
      /* harmony import */


      var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/util/DateUtil */
      "JM5f");
      /* harmony import */


      var src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/util/InformacoesPessoaisUtil */
      "0z2X");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");
      /* harmony import */


      var src_app_validador_ValidadorInformacoesPessoais__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/validador/ValidadorInformacoesPessoais */
      "VFuG");

      var MembroPage = /*#__PURE__*/function () {
        function MembroPage(formulador, membroService, aviso, consultaCep, router) {
          _classCallCheck(this, MembroPage);

          this.formulador = formulador;
          this.membroService = membroService;
          this.aviso = aviso;
          this.consultaCep = consultaCep;
          this.router = router;
          this.estadoCivil = [];
          this.escolaridade = [];
          this.desabilitarCampoEmail = true;
          var nav = this.router.getCurrentNavigation();
          this.membro = nav.extras.state.content;
          this.ajustarDatas();
          this.inicializar();
        }

        _createClass(MembroPage, [{
          key: "inicializar",
          value: function inicializar() {
            this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_12__["MensagensUtil"](this.aviso);
            this.estadoCivil = src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_11__["InformacoesPessoaisUtil"].estadoCivil();
            this.escolaridade = src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_11__["InformacoesPessoaisUtil"].escolaridade();
            this.criarFormulario();
          }
        }, {
          key: "ajustarDatas",
          value: function ajustarDatas() {
            if (this.membro.dataBatismo) this.membro.dataBatismo = this.membro.dataBatismo.includes('/') ? this.membro.dataBatismo : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.membro.dataBatismo);
            if (this.membro.dataNascimento) this.membro.dataNascimento = this.membro.dataNascimento.includes('/') ? this.membro.dataNascimento : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.membro.dataNascimento);
            if (this.membro.membroDesde) this.membro.membroDesde = this.membro.membroDesde.includes('/') ? this.membro.membroDesde : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.membro.membroDesde);
          }
        }, {
          key: "criarFormulario",
          value: function criarFormulario() {
            this.formulario = this.formulador.group({
              key: [this.membro.key, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              cpf: [this.membro.cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              nomeCompleto: [this.membro.nomeCompleto, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              dataNascimento: [this.membro.dataNascimento, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              telefone: [this.membro.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              whatsapp: [this.membro.whatsapp],
              email: [this.membro.email],
              profissao: [this.membro.profissao, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              estadoCivil: [this.membro.estadoCivil, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              escolaridade: [this.membro.escolaridade, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              trabalhandoAtualmente: [this.membro.trabalhandoAtualmente, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              classificacao: [this.membro.classificacao, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              dataBatismo: [this.membro.dataBatismo],
              membroDesde: [this.membro.membroDesde],
              cep: [this.membro.endereco.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              logradouro: [this.membro.endereco.logradouro, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              numero: [this.membro.endereco.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              complemento: [this.membro.endereco.complemento],
              bairro: [this.membro.endereco.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              cidade: [this.membro.endereco.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              estado: [this.membro.endereco.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              perfil: [this.membro.perfil, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              senha: [this.membro.senha, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
          }
        }, {
          key: "buscarEndereco",
          value: function buscarEndereco(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!event.target.value) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 3;
                      return this.consultaCep.buscaEndereco(event.target.value).then(function (data) {
                        var resultadoJson = data;

                        if (resultadoJson.erro) {
                          _this.erroAoBuscarCep();
                        } else if (resultadoJson) {
                          _this.formulario.controls['bairro'].setValue(resultadoJson.bairro);

                          _this.formulario.controls['cidade'].setValue(resultadoJson.localidade);

                          _this.formulario.controls['estado'].setValue(resultadoJson.uf);

                          _this.formulario.controls['logradouro'].setValue(resultadoJson.logradouro);

                          _this.disableEndereco(true);
                        }
                      }, function (erro) {
                        _this.erroAoBuscarCep();
                      });

                    case 3:
                      _context.next = 7;
                      break;

                    case 5:
                      this.preencherComNullEndereco();
                      this.disableEndereco(false);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "validarCpf",
          value: function validarCpf(event) {
            if (event.target.value) if (!src_app_validador_ValidadorInformacoesPessoais__WEBPACK_IMPORTED_MODULE_13__["ValidadorInformacoesPessoais"].cpfCnpjIsValid(event.target.value)) {
              this.mensagens.mensagemError('CPF inválido.');
              this.formulario.controls['cpf'].setValue(null);
              this.formulario.controls['senha'].setValue(null);
              return;
            } else {
              this.formulario.controls['senha'].setValue(event.target.value.replace('.', '').replace('.', '').replace('-', ''));
            }
          }
        }, {
          key: "validarEmail",
          value: function validarEmail(event) {
            if (event.target.value && !event.target.value.includes('@')) {
              this.mensagens.mensagemError('E-mail inválido.');
              this.formulario.controls['email'].setValue(null);
              return;
            }
          }
        }, {
          key: "validarDataNascimento",
          value: function validarDataNascimento(event) {
            if (event.target.value) if (!src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isIdadeMaiorDozeAnos(event.target.value)) {
              this.mensagens.mensagemError('De acordo com estatuto da IBC, os novos membros deverão ter ao mínimo 12 anos de idade.');
              this.formulario.controls['dataNascimento'].setValue(null);
              return;
            }
          }
        }, {
          key: "retirarEspacamentoEmail",
          value: function retirarEspacamentoEmail() {
            if (this.formulario.controls['email'].value) this.formulario.controls['email'].setValue(this.formulario.controls['email'].value.replace(/\s+/g, ''));
          }
        }, {
          key: "preencherComNullEndereco",
          value: function preencherComNullEndereco() {
            this.formulario.controls['bairro'].setValue(null);
            this.formulario.controls['cidade'].setValue(null);
            this.formulario.controls['estado'].setValue(null);
            this.formulario.controls['logradouro'].setValue(null);
          }
        }, {
          key: "erroAoBuscarCep",
          value: function erroAoBuscarCep() {
            this.mensagens.mensagemAlerta('Cep não encontrado, por favor insira os dados manualmente.');
            this.preencherComNullEndereco();
            this.disableEndereco(false);
          }
        }, {
          key: "disableEndereco",
          value: function disableEndereco(disable) {
            if (disable) {
              this.formulario.controls['bairro'].disable();
              this.formulario.controls['cidade'].disable();
              this.formulario.controls['estado'].disable();
              this.formulario.controls['logradouro'].disable();
            } else {
              this.formulario.controls['bairro'].enable();
              this.formulario.controls['cidade'].enable();
              this.formulario.controls['estado'].enable();
              this.formulario.controls['logradouro'].enable();
            }
          }
        }, {
          key: "editar",
          value: function editar() {
            if (this.formulario.value) {
              if (this.formulario.value.dataBatismo && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.dataBatismo)) {
                this.mensagens.mensagemError("A data do campo'Data de Batismo' informada não é válida.");
              } else if (this.formulario.value.membroDesde && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.membroDesde)) {
                this.mensagens.mensagemError(" A data do campo 'Membro desde' informada não é válida.");
              } else if (this.formulario.value.dataNascimento && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.dataNascimento)) {
                this.mensagens.mensagemError(" A data do campo 'Data de nascimento' informada não é válida.");
              } else if (this.formulario.value.dataBatismo && this.formulario.value.membroDesde) {
                if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataFutura(this.formulario.value.dataBatismo) || src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataFutura(this.formulario.value.membroDesde)) {
                  this.mensagens.mensagemError("Não são permitidas datas futuras para o campo 'Data do Batismo' e o campo 'Membro desde.'");
                } else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataDoisMaiorDataUm(this.formulario.value.dataBatismo, this.formulario.value.membroDesde) && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDatasIguais(this.formulario.value.dataBatismo, this.formulario.value.membroDesde)) {
                  this.mensagens.mensagemError("A data 'Membro desde' não pode ser maior que a 'Data do Batismo'.");
                }
              } else {
                this.disableEndereco(false);
                this.membro = src_app_mapper_Membro__WEBPACK_IMPORTED_MODULE_7__["MembroMapper"].formularioToMembro(this.formulario.value);
                this.membroService.adicionarOuAtualizar(this.membro);
                this.mensagens.mensagemSucesso('Atualização realizada com sucesso!');
              }
            }
          }
        }]);

        return MembroPage;
      }();

      MembroPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_9__["MembroService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_8__["ConsultaCEPService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      MembroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-membro',
        template: _raw_loader_membro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_membro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MembroPage);
      /***/
    },

    /***/
    "yETG":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edicao/membro/membro.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function yETG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Editar membro</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"formulario\">\r\n        <ion-grid>\r\n            <h2>Informações Pessoais</h2>\r\n            <ion-item class=\"row-item\">\r\n                <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome Completo <span>*</span></ion-label>\r\n                <ion-input mode=\"md\" formControlName=\"nomeCompleto\" type=\"text\" maxlength=\"100\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data de nascimento <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" (ionBlur)=\"validarDataNascimento($event)\" formControlName=\"dataNascimento\" [brmasker]=\"{mask:'00/00/0000', len:10}\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Telefone <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"telefone\" [brmasker]=\"{phone: true}\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Whatsapp </ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"whatsapp\" [brmasker]=\"{phone: true}\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">E-mail </ion-label>\r\n                        <ion-input [disabled]=\"true\" mode=\"md\" id=\"email\" (keyup)=\"retirarEspacamentoEmail()\" (ionBlur)=\"validarEmail($event)\" formControlName=\"email\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <br />\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Estado Civil<span>*</span></ion-label>\r\n                    <ion-select placeholder=\"Selecione uma opção\" formControlName=\"estadoCivil\" multiple=\"false\" interface=\"action-sheet\">\r\n                        <ion-select-option *ngFor=\"let item of estadoCivil\" [value]=\"item.id\">\r\n                            {{item.valor}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Escolaridade<span>*</span></ion-label>\r\n                    <ion-select placeholder=\"Selecione uma opção\" formControlName=\"escolaridade\" multiple=\"false\" interface=\"popover\" [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n                        <ion-select-option *ngFor=\"let item of escolaridade\" [value]=\"item.id\">\r\n                            {{item.valor}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Trabalhando atualmente <span>*</span></ion-label>\r\n                    <ion-select placeholder=\"Selecione uma opção\" interface=\"action-sheet\" formControlName=\"trabalhandoAtualmente\">\r\n                        <ion-select-option value=\"true\">Sim</ion-select-option>\r\n                        <ion-select-option value=\"false\">Não</ion-select-option>\r\n                    </ion-select>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Profissão <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"profissao\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Classificação <span>*</span></ion-label>\r\n                    <ion-select placeholder=\"Selecione uma opção\" interface=\"action-sheet\" formControlName=\"classificacao\">\r\n                        <ion-select-option value=\"Membro\">Membro</ion-select-option>\r\n                        <ion-select-option value=\"Congregado\">Congregado</ion-select-option>\r\n                        <ion-select-option value=\"Voluntario\">Voluntário</ion-select-option>\r\n                    </ion-select>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data do batismo </ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"dataBatismo\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Membro desde </ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"membroDesde\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <h2>Endereço</h2>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">CEP <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" (ionBlur)=\"buscarEndereco($event)\" formControlName=\"cep\" maxlength=\"9\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Logradouro <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"logradouro\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Número <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" [min]=\"0\" [max]=\"99999\" formControlName=\"numero\" type=\"number\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Complemento</ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"complemento\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Bairro <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"bairro\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Cidade <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"cidade\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item class=\"row-item\">\r\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Estado <span>*</span></ion-label>\r\n                        <ion-input mode=\"md\" formControlName=\"estado\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n            <h2>Informações de Acesso </h2>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label mode=\"md\" class=\"titulo-dado-select-acesso\" position=\"stacked\">Perfil<span>*</span></ion-label>\r\n                    <ion-select placeholder=\"Selecione uma opção\" interface=\"action-sheet\" formControlName=\"perfil\">\r\n                        <ion-select-option value=\"ADMIN\">Administrador</ion-select-option>\r\n                        <ion-select-option value=\"FIN\">Financeiro</ion-select-option>\r\n                        <ion-select-option value=\"MEM\">Membro</ion-select-option>\r\n                        <ion-select-option value=\"SEC\">Secretariado</ion-select-option>\r\n                    </ion-select>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </form>\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar no-padding id=\"rodape\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button mode=\"md\" (click)=\"editar()\" [disabled]=\"formulario.invalid\" type=\"submit\" fill=\"solid\" expand=\"full\"> Atualizar</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-edicao-membro-membro-module-es5.js.map