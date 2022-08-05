(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-membro-membro-module"], {
    /***/
    "1/XW":
    /*!********************************************************!*\
      !*** ./src/app/pages/cadastro/membro/membro.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function XW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content,\nion-item,\nion-input,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-select,\nion-input,\n.titulo-dado,\n.titulo-dado-select-acesso,\n.titulo-dado-select,\nh2 {\n  color: #2e2e3c;\n}\n\nion-title,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-input {\n  text-transform: uppercase;\n  font-size: 11pt;\n}\n\n#email {\n  text-transform: lowercase;\n}\n\nion-select {\n  font-size: 10pt;\n}\n\n#cabecalho {\n  --background: #2e2e3c;\n  color: #fff;\n}\n\n.titulo-dado {\n  font-size: 13pt;\n}\n\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-size: 10pt;\n}\n\n.titulo-dado-select {\n  margin-left: 5.3%;\n}\n\n.titulo-dado-select-acesso {\n  margin-left: 2.5%;\n}\n\n.titulo-dado-batismo {\n  margin-left: 4%;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\nspan {\n  color: #eb445a;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lbWJyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0VBUUksZ0NBQUE7QUFDSjs7QUFFQTs7O0VBR0kscUJBQUE7QUFDSjs7QUFFQTs7Ozs7O0VBTUksY0FBQTtBQUNKOztBQUVBOztFQUVJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTs7O0VBR0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJtZW1icm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsXG5pb24taXRlbSxcbmlvbi1pbnB1dCxcbmlvbi1zZWxlY3QsXG4udGl0dWxvLWRhZG8sXG4udGl0dWxvLWRhZG8tc2VsZWN0LFxuLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28sXG4udGl0dWxvLWRhZG8tYmF0aXNtbyB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1jb250ZW50LFxuaW9uLWl0ZW0sXG4jcm9kYXBlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbmlvbi1zZWxlY3QsXG5pb24taW5wdXQsXG4udGl0dWxvLWRhZG8sXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcbi50aXR1bG8tZGFkby1zZWxlY3QsXG5oMiB7XG4gICAgY29sb3I6ICMyZTJlM2M7XG59XG5cbmlvbi10aXRsZSxcbmgyIHtcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDExcHQ7XG59XG5cbiNlbWFpbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4jY2FiZWNhbGhvIHtcbiAgICAtLWJhY2tncm91bmQ6ICMyZTJlM2M7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi50aXR1bG8tZGFkbyB7XG4gICAgZm9udC1zaXplOiAxM3B0O1xufVxuXG4udGl0dWxvLWRhZG8tc2VsZWN0LFxuLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28sXG4udGl0dWxvLWRhZG8tYmF0aXNtbyB7XG4gICAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4udGl0dWxvLWRhZG8tc2VsZWN0IHtcbiAgICBtYXJnaW4tbGVmdDogNS4zJTtcbn1cblxuLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28ge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xufVxuXG4udGl0dWxvLWRhZG8tYmF0aXNtbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxM3B0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogI2ViNDQ1YTtcbn1cblxuOjpuZy1kZWVwIC5teWNvbXBvbmVudC13aWRlci1wb3BvdmVyIHtcbiAgICAtLXdpZHRoOiA5NSU7XG4gICAgLS1tYXgtd2lkdGg6IDYwMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "4H1X":
    /*!****************************************************************!*\
      !*** ./src/app/pages/cadastro/membro/membro-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: MembroPageRoutingModule */

    /***/
    function H1X(module, __webpack_exports__, __webpack_require__) {
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
      "ZFh5");

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
    "BOWJ":
    /*!********************************************************!*\
      !*** ./src/app/pages/cadastro/membro/membro.module.ts ***!
      \********************************************************/

    /*! exports provided: MembroPageModule */

    /***/
    function BOWJ(module, __webpack_exports__, __webpack_require__) {
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
      "4H1X");
      /* harmony import */


      var _membro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./membro.page */
      "ZFh5");
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
    "ZFh5":
    /*!******************************************************!*\
      !*** ./src/app/pages/cadastro/membro/membro.page.ts ***!
      \******************************************************/

    /*! exports provided: MembroPage */

    /***/
    function ZFh5(module, __webpack_exports__, __webpack_require__) {
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
      "k7RC");
      /* harmony import */


      var _membro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./membro.page.scss */
      "1/XW");
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


      var src_app_mapper_Membro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/mapper/Membro */
      "JpJ2");
      /* harmony import */


      var src_app_modelo_Endereco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modelo/Endereco */
      "/FaQ");
      /* harmony import */


      var src_app_modelo_Membro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modelo/Membro */
      "Xsc5");
      /* harmony import */


      var src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/servicos/Autenticacao */
      "tTKV");
      /* harmony import */


      var src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/servicos/ConsultaCEP */
      "Gchg");
      /* harmony import */


      var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/servicos/Membro */
      "fX5e");
      /* harmony import */


      var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/util/DateUtil */
      "JM5f");
      /* harmony import */


      var src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/util/InformacoesPessoaisUtil */
      "0z2X");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");
      /* harmony import */


      var src_app_validador_ValidadorInformacoesPessoais__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/validador/ValidadorInformacoesPessoais */
      "VFuG");

      var MembroPage = /*#__PURE__*/function () {
        function MembroPage(formulador, membroService, autenticacao, aviso, consultaCep, alertController, route) {
          _classCallCheck(this, MembroPage);

          this.formulador = formulador;
          this.membroService = membroService;
          this.autenticacao = autenticacao;
          this.aviso = aviso;
          this.consultaCep = consultaCep;
          this.alertController = alertController;
          this.route = route;
          this.estadoCivil = [];
          this.escolaridade = [];
          this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_15__["MensagensUtil"](this.aviso);
          this.estadoCivil = src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_14__["InformacoesPessoaisUtil"].estadoCivil();
          this.escolaridade = src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_14__["InformacoesPessoaisUtil"].escolaridade();
          this.inicializar();
        }

        _createClass(MembroPage, [{
          key: "inicializar",
          value: function inicializar() {
            this.membro = new src_app_modelo_Membro__WEBPACK_IMPORTED_MODULE_9__["Membro"]();
            this.membro.endereco = new src_app_modelo_Endereco__WEBPACK_IMPORTED_MODULE_8__["Endereco"]();
            this.criarFormulario();
          }
        }, {
          key: "criarFormulario",
          value: function criarFormulario() {
            this.formulario = this.formulador.group({
              cpf: [this.membro.cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              nomeCompleto: [this.membro.nomeCompleto, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              dataNascimento: [this.membro.dataNascimento, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              telefone: [this.membro.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              whatsapp: [this.membro.whatsapp],
              email: [this.membro.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              profissao: [this.membro.profissao, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              estadoCivil: [this.membro.estadoCivil, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              escolaridade: [this.membro.escolaridade, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              trabalhandoAtualmente: [this.membro.trabalhandoAtualmente, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              classificacao: [this.membro.classificacao, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              dataBatismo: [this.membro.dataBatismo],
              membroDesde: [this.membro.membroDesde],
              cep: [this.membro.endereco.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              logradouro: [this.membro.endereco.logradouro, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              numero: [this.membro.endereco.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              complemento: [this.membro.endereco.complemento],
              bairro: [this.membro.endereco.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              cidade: [this.membro.endereco.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              estado: [this.membro.endereco.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              perfil: [this.membro.perfil, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              senha: [this.membro.senha, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
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
                          _this.formulario.controls["bairro"].setValue(resultadoJson.bairro);

                          _this.formulario.controls["cidade"].setValue(resultadoJson.localidade);

                          _this.formulario.controls["estado"].setValue(resultadoJson.uf);

                          _this.formulario.controls["logradouro"].setValue(resultadoJson.logradouro);

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
            if (event.target.value) if (!src_app_validador_ValidadorInformacoesPessoais__WEBPACK_IMPORTED_MODULE_16__["ValidadorInformacoesPessoais"].cpfCnpjIsValid(event.target.value)) {
              this.mensagens.mensagemError("CPF inválido.");
              this.formulario.controls["cpf"].setValue(null);
              this.formulario.controls["senha"].setValue(null);
              return;
            } else {
              this.formulario.controls["senha"].setValue(event.target.value.replace(".", "").replace(".", "").replace("-", ""));
            }
          }
        }, {
          key: "validarEmail",
          value: function validarEmail(event) {
            if (event.target.value && !event.target.value.includes("@")) {
              this.mensagens.mensagemError("E-mail inválido.");
              this.formulario.controls["email"].setValue(null);
              return;
            }
          }
        }, {
          key: "validarDataNascimento",
          value: function validarDataNascimento(event) {
            if (event.target.value) if (!src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_13__["DateUtil"].isIdadeMaiorDozeAnos(event.target.value)) {
              this.mensagens.mensagemError("De acordo com estatuto da IBC, os novos membros deverão ter ao mínimo 12 anos de idade.");
              this.formulario.controls["dataNascimento"].setValue(null);
              return;
            }
          }
        }, {
          key: "retirarEspacamentoEmail",
          value: function retirarEspacamentoEmail() {
            if (this.formulario.controls["email"].value) this.formulario.controls["email"].setValue(this.formulario.controls["email"].value.replace(/\s+/g, ""));
          }
        }, {
          key: "preencherComNullEndereco",
          value: function preencherComNullEndereco() {
            this.formulario.controls["bairro"].setValue(null);
            this.formulario.controls["cidade"].setValue(null);
            this.formulario.controls["estado"].setValue(null);
            this.formulario.controls["logradouro"].setValue(null);
          }
        }, {
          key: "erroAoBuscarCep",
          value: function erroAoBuscarCep() {
            this.mensagens.mensagemAlerta("Cep não encontrado, por favor insira os dados manualmente.");
            this.preencherComNullEndereco();
            this.disableEndereco(false);
          }
        }, {
          key: "disableEndereco",
          value: function disableEndereco(disable) {
            if (disable) {
              this.formulario.controls["bairro"].disable();
              this.formulario.controls["cidade"].disable();
              this.formulario.controls["estado"].disable();
              this.formulario.controls["logradouro"].disable();
            } else {
              this.formulario.controls["bairro"].enable();
              this.formulario.controls["cidade"].enable();
              this.formulario.controls["estado"].enable();
              this.formulario.controls["logradouro"].enable();
            }
          }
        }, {
          key: "cadastrar",
          value: function cadastrar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var usuarioCriado;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.formulario.value) {
                        _context2.next = 25;
                        break;
                      }

                      if (!(this.formulario.value.dataBatismo && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_13__["DateUtil"].verificarIsDataValida(this.formulario.value.dataBatismo))) {
                        _context2.next = 5;
                        break;
                      }

                      this.mensagens.mensagemError("A data informada no campo 'Data de Batismo' não é válida.");
                      _context2.next = 25;
                      break;

                    case 5:
                      if (!(this.formulario.value.membroDesde && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_13__["DateUtil"].verificarIsDataValida(this.formulario.value.membroDesde))) {
                        _context2.next = 9;
                        break;
                      }

                      this.mensagens.mensagemError("A data informada no campo 'Membro desde' não é válida.");
                      _context2.next = 25;
                      break;

                    case 9:
                      if (!(this.formulario.value.dataNascimento && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_13__["DateUtil"].verificarIsDataValida(this.formulario.value.dataNascimento))) {
                        _context2.next = 13;
                        break;
                      }

                      this.mensagens.mensagemError("A data informada no campo 'Data de nascimento' não é válida.");
                      _context2.next = 25;
                      break;

                    case 13:
                      this.disableEndereco(false);
                      this.membro = src_app_mapper_Membro__WEBPACK_IMPORTED_MODULE_7__["MembroMapper"].formularioToMembro(this.formulario.value);
                      _context2.next = 17;
                      return this.autenticacao.criarUsuario(this.membro);

                    case 17:
                      usuarioCriado = _context2.sent;

                      if (!usuarioCriado) {
                        _context2.next = 25;
                        break;
                      }

                      if (!usuarioCriado.message) {
                        _context2.next = 21;
                        break;
                      }

                      return _context2.abrupt("return", this.mensagens.mensagemError("E-mail já cadastrado na base de dados."));

                    case 21:
                      this.membro.uId = usuarioCriado.user.uid;
                      this.membroService.adicionarOuAtualizar(this.membro);
                      _context2.next = 25;
                      return this.verResultado();

                    case 25:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "confirmarCadastro",
          value: function confirmarCadastro() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: "Confirmação de cadastro",
                        message: "Tem certeza que deseja concluir o cadastro? Após isso, <b>não será possível alterar o e-mail cadastrado</b>.",
                        buttons: [{
                          text: "Não",
                          handler: function handler() {
                            _this2.alertController.dismiss();
                          }
                        }, {
                          text: "Sim",
                          handler: function handler() {
                            _this2.cadastrar();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "verResultado",
          value: function verResultado() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: "Confirmação de cadastro",
                        message: "O membro foi cadastrado com sucesso. O que deseja fazer?",
                        buttons: [{
                          text: "Cadastrar Um Novo Membro",
                          handler: function handler() {
                            _this3.alertController.dismiss();

                            _this3.disableEndereco(true);

                            _this3.inicializar();
                          }
                        }, {
                          text: "Ver Membro Cadastrado",
                          handler: function handler() {
                            _this3.verMembroCadastrado();
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "verMembroCadastrado",
          value: function verMembroCadastrado() {
            this.route.navigateByUrl("lista/membro");
          }
        }]);

        return MembroPage;
      }();

      MembroPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_12__["MembroService"]
        }, {
          type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_10__["AutenticacaoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_11__["ConsultaCEPService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      MembroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-membro",
        template: _raw_loader_membro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_membro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MembroPage);
      /***/
    },

    /***/
    "k7RC":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/membro/membro.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function k7RC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Cadastro IBC</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"formulario\">\n        <ion-grid>\n            <h2>Informações Pessoais</h2>\n            <ion-item class=\"row-item\">\n                <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome Completo <span>*</span></ion-label>\n                <ion-input mode=\"md\" formControlName=\"nomeCompleto\" type=\"text\" maxlength=\"100\"></ion-input>\n            </ion-item>\n\n            <ion-row>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data de nascimento <span>*</span></ion-label>\n                        <ion-input mode=\"md\" placeholder=\"dd/mm/yyyy\" (ionBlur)=\"validarDataNascimento($event)\" formControlName=\"dataNascimento\" [brmasker]=\"{mask:'00/00/0000', len:10}\">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Telefone <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"telefone\" [brmasker]=\"{phone: true}\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Whatsapp </ion-label>\n                        <ion-input mode=\"md\" formControlName=\"whatsapp\" [brmasker]=\"{phone: true}\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">E-mail<span>*</span> </ion-label>\n                        <ion-input id=\"email\" mode=\"md\" (keyup)=\"retirarEspacamentoEmail()\" (ionBlur)=\"validarEmail($event)\" formControlName=\"email\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <br />\n            <ion-row>\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Estado Civil<span>*</span></ion-label>\n                    <ion-select placeholder=\"Selecione uma opção\" formControlName=\"estadoCivil\" multiple=\"false\" interface=\"action-sheet\">\n                        <ion-select-option *ngFor=\"let item of estadoCivil\" [value]=\"item.id\">\n                            {{item.valor}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-col>\n\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Escolaridade<span>*</span></ion-label>\n                    <ion-select placeholder=\"Selecione uma opção\" formControlName=\"escolaridade\" multiple=\"false\" interface=\"popover\" [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\n                        <ion-select-option *ngFor=\"let item of escolaridade\" [value]=\"item.id\">\n                            {{item.valor}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-col>\n\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Trabalhando atualmente <span>*</span></ion-label>\n                    <ion-select placeholder=\"Selecione uma opção\" interface=\"action-sheet\" formControlName=\"trabalhandoAtualmente\">\n                        <ion-select-option value=\"true\">Sim</ion-select-option>\n                        <ion-select-option value=\"false\">Não</ion-select-option>\n                    </ion-select>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Profissão <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"profissao\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                \n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Classificação <span>*</span></ion-label>\n                    <ion-select placeholder=\"Selecione uma opção\" interface=\"action-sheet\" formControlName=\"classificacao\">\n                        <ion-select-option value=\"Membro\">Membro</ion-select-option>\n                        <ion-select-option value=\"Congregado\">Congregado</ion-select-option>\n                        <ion-select-option value=\"Voluntario\">Voluntário</ion-select-option>\n                    </ion-select>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data do batismo </ion-label>\n                        <ion-input mode=\"md\" placeholder=\"dd/mm/yyyy\" [brmasker]=\"{mask:'00/00/0000', len:10}\" formControlName=\"dataBatismo\" maxlength=\"10\"></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Membro desde </ion-label>\n                        <ion-input mode=\"md\" placeholder=\"dd/mm/yyyy\" formControlName=\"membroDesde\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <h2>Endereço</h2>\n            <ion-row>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">CEP <span>*</span></ion-label>\n                        <ion-input mode=\"md\" (ionBlur)=\"buscarEndereco($event)\" formControlName=\"cep\" maxlength=\"9\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Logradouro <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"logradouro\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Número <span>*</span></ion-label>\n                        <ion-input mode=\"md\" [min]=\"0\" [max]=\"99999\" formControlName=\"numero\" type=\"number\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Complemento</ion-label>\n                        <ion-input mode=\"md\" formControlName=\"complemento\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Bairro <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"bairro\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Cidade <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"cidade\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Estado <span>*</span></ion-label>\n                        <ion-input mode=\"md\" formControlName=\"estado\" maxlength=\"100\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <h2>Informações de Acesso </h2>\n            <ion-row>\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select-acesso\" position=\"stacked\">Perfil<span>*</span></ion-label>\n                    <ion-select placeholder=\"Selecione uma opção\" interface=\"action-sheet\" formControlName=\"perfil\">\n                        <ion-select-option value=\"ADMIN\">Administrador</ion-select-option>\n                        <ion-select-option value=\"FIN\">Financeiro</ion-select-option>\n                        <ion-select-option value=\"MEM\">Membro</ion-select-option>\n                        <ion-select-option value=\"SEC\">Secretariado</ion-select-option>\n                    </ion-select>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Cpf <span>*</span></ion-label>\n                        <ion-input mode=\"md\" [brmasker]=\"{person: true}\" (ionBlur)=\"validarCpf($event)\" formControlName=\"cpf\" maxlength=\"14\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Senha <span>*</span></ion-label>\n                        <ion-input mode=\"md\" [disabled]=\"true\" formControlName=\"senha\" maxlength=\"14\" type=\"password\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar no-padding id=\"rodape\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-button mode=\"md\" (click)=\"confirmarCadastro()\" [disabled]=\"formulario.invalid\" type=\"submit\" fill=\"solid\" expand=\"full\"> Cadastrar</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cadastro-membro-membro-module-es5.js.map