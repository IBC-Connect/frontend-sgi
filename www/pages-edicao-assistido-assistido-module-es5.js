(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edicao-assistido-assistido-module"], {
    /***/
    "Ed6+":
    /*!************************************************************!*\
      !*** ./src/app/pages/edicao/assistido/assistido.module.ts ***!
      \************************************************************/

    /*! exports provided: AssistidoPageModule */

    /***/
    function Ed6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssistidoPageModule", function () {
        return AssistidoPageModule;
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


      var _assistido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./assistido-routing.module */
      "uc6f");
      /* harmony import */


      var _assistido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./assistido.page */
      "UJYu");
      /* harmony import */


      var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! br-mask */
      "/oCc");

      var AssistidoPageModule = function AssistidoPageModule() {
        _classCallCheck(this, AssistidoPageModule);
      };

      AssistidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _assistido_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssistidoPageRoutingModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_assistido_page__WEBPACK_IMPORTED_MODULE_6__["AssistidoPage"]]
      })], AssistidoPageModule);
      /***/
    },

    /***/
    "EweK":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edicao/assistido/assistido.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EweK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"inicio\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Editar de assistido</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"formulario\">\r\n      <ion-grid>\r\n          <h2>Informações Pessoais</h2>\r\n          <ion-item class=\"row-item\">\r\n              <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Nome Completo <span>*</span></ion-label>\r\n              <ion-input mode=\"md\" formControlName=\"nomeCompleto\" type=\"text\" maxlength=\"100\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-row>\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data de nascimento <span>*</span></ion-label>\r\n                      <ion-input mode=\"md\" placeholder=\"dd/mm/yyyy\" formControlName=\"dataNascimento\" [brmasker]=\"{mask:'00/00/0000', len:10}\">\r\n                      </ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Telefone <span>*</span></ion-label>\r\n                      <ion-input mode=\"md\" formControlName=\"telefone\" [brmasker]=\"{phone: true}\" type=\"text\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Whatsapp </ion-label>\r\n                      <ion-input mode=\"md\" formControlName=\"whatsapp\" [brmasker]=\"{phone: true}\" type=\"text\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">E-mail </ion-label>\r\n                      <ion-input mode=\"md\" id=\"email\" (keyup)=\"retirarEspacamentoEmail()\" (ionBlur)=\"validarEmail($event)\" formControlName=\"email\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n          </ion-row>\r\n          <br />\r\n          <ion-row>\r\n              <ion-col>\r\n                  <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Estado Civil<span>*</span></ion-label>\r\n                  <ion-select placeholder=\"Selecione uma opção\" formControlName=\"estadoCivil\" multiple=\"false\" interface=\"action-sheet\">\r\n                      <ion-select-option *ngFor=\"let item of estadoCivil\" [value]=\"item.id\">\r\n                          {{item.valor}}\r\n                      </ion-select-option>\r\n                  </ion-select>\r\n              </ion-col>\r\n\r\n              <ion-col>\r\n                  <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Escolaridade<span>*</span></ion-label>\r\n                  <ion-select placeholder=\"Selecione uma opção\" formControlName=\"escolaridade\" multiple=\"false\" interface=\"popover\" [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n                      <ion-select-option *ngFor=\"let item of escolaridade\" [value]=\"item.id\">\r\n                          {{item.valor}}\r\n                      </ion-select-option>\r\n                  </ion-select>\r\n              </ion-col>\r\n\r\n              <ion-col>\r\n                  <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Trabalhando atualmente <span>*</span></ion-label>\r\n                  <ion-select placeholder=\"Selecione uma opção\" interface=\"action-sheet\" formControlName=\"trabalhandoAtualmente\">\r\n                      <ion-select-option value=\"true\">Sim</ion-select-option>\r\n                      <ion-select-option value=\"false\">Não</ion-select-option>\r\n                  </ion-select>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Profissão <span>*</span></ion-label>\r\n                      <ion-input mode=\"md\" formControlName=\"profissao\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n          </ion-row>\r\n          <br />\r\n          <ion-row>\r\n            <ion-col>\r\n                <ion-item class=\"row-item\">\r\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Cpf <span>*</span></ion-label>\r\n                    <ion-input mode=\"md\" [brmasker]=\"{person: true}\" (ionBlur)=\"validarCpf($event)\" formControlName=\"cpf\" maxlength=\"14\" type=\"text\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-item class=\"row-item\">\r\n                    <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">RG <span>*</span></ion-label>\r\n                    <ion-input mode=\"md\" formControlName=\"rg\" maxlength=\"10\" type=\"text\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n          <h2>Endereço</h2>\r\n          <ion-row>\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">CEP <span>*</span></ion-label>\r\n                      <ion-input mode=\"md\" (ionBlur)=\"buscarEndereco($event)\" formControlName=\"cep\" maxlength=\"9\" type=\"text\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Logradouro <span>*</span></ion-label>\r\n                      <ion-input mode=\"md\" formControlName=\"logradouro\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Número <span>*</span></ion-label>\r\n                      <ion-input mode=\"md\" [min]=\"0\" [max]=\"99999\" formControlName=\"numero\" type=\"number\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Complemento</ion-label>\r\n                      <ion-input mode=\"md\" formControlName=\"complemento\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Bairro <span>*</span></ion-label>\r\n                      <ion-input mode=\"md\" formControlName=\"bairro\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Cidade <span>*</span></ion-label>\r\n                      <ion-input mode=\"md\" formControlName=\"cidade\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-item class=\"row-item\">\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Estado <span>*</span></ion-label>\r\n                      <ion-input mode=\"md\" formControlName=\"estado\" maxlength=\"100\" type=\"text\"></ion-input>\r\n                  </ion-item>\r\n              </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n              <ion-col>\r\n                  <ion-item>\r\n                      <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Observações</ion-label>\r\n                      <ion-textarea mode=\"md\" formControlName=\"observacoes\" maxlength=\"1000\" type=\"text\"></ion-textarea>\r\n                  </ion-item>\r\n              </ion-col>\r\n          </ion-row>\r\n          <h2>Projetos Que Ele Participa</h2>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-list>\r\n                        <ion-item>\r\n                          <ion-select mode=\"ios\" placeholder=\"Selecione os projetos\" [multiple]=\"true\" formControlName=\"projetosAssistidos\">\r\n                            <ion-select-option  *ngFor=\"let projeto of listaProjetosFiltrados\" [value]=\"projeto.nome\">{{projeto.nome}}</ion-select-option>\r\n                          </ion-select>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n      </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar no-padding id=\"rodape\">\r\n      <ion-grid>\r\n          <ion-row>\r\n              <ion-col>\r\n                  <ion-button mode=\"md\" (click)=\"cadastrar()\" [disabled]=\"formulario.invalid\" type=\"submit\" fill=\"solid\" expand=\"full\"> Atualizar</ion-button>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "UJYu":
    /*!**********************************************************!*\
      !*** ./src/app/pages/edicao/assistido/assistido.page.ts ***!
      \**********************************************************/

    /*! exports provided: AssistidoPage */

    /***/
    function UJYu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssistidoPage", function () {
        return AssistidoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assistido_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assistido.page.html */
      "EweK");
      /* harmony import */


      var _assistido_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assistido.page.scss */
      "lknr");
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


      var src_app_mapper_Assistido__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/mapper/Assistido */
      "LNr/");
      /* harmony import */


      var src_app_servicos_Assistido__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/servicos/Assistido */
      "cn//");
      /* harmony import */


      var src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/servicos/ConsultaCEP */
      "Gchg");
      /* harmony import */


      var src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/servicos/Projeto */
      "MoJo");
      /* harmony import */


      var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/util/DateUtil */
      "JM5f");
      /* harmony import */


      var src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/util/InformacoesPessoaisUtil */
      "0z2X");
      /* harmony import */


      var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/util/MensagensUtil */
      "sZxV");
      /* harmony import */


      var src_app_validador_ValidadorInformacoesPessoais__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/validador/ValidadorInformacoesPessoais */
      "VFuG");

      var AssistidoPage = /*#__PURE__*/function () {
        function AssistidoPage(formulador, aviso, consultaCep, assistidoService, router, projetoService) {
          _classCallCheck(this, AssistidoPage);

          this.formulador = formulador;
          this.aviso = aviso;
          this.consultaCep = consultaCep;
          this.assistidoService = assistidoService;
          this.router = router;
          this.projetoService = projetoService;
          this.estadoCivil = [];
          this.escolaridade = [];
          var nav = this.router.getCurrentNavigation();
          this.assistido = nav.extras.state.content;
        }

        _createClass(AssistidoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.inicializar();
            this.inicializarProjetos();
          }
        }, {
          key: "inicializar",
          value: function inicializar() {
            this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_13__["MensagensUtil"](this.aviso);
            this.estadoCivil = src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_12__["InformacoesPessoaisUtil"].estadoCivil();
            this.escolaridade = src_app_util_InformacoesPessoaisUtil__WEBPACK_IMPORTED_MODULE_12__["InformacoesPessoaisUtil"].escolaridade();
            this.criarFormulario();
          }
        }, {
          key: "inicializarProjetos",
          value: function inicializarProjetos() {
            var _this = this;

            this.listaProjetosObservable = this.projetoService.listar();
            this.listaProjetosObservable.subscribe(function (response) {
              _this.listaProjetos = response;
              _this.listaProjetosFiltrados = response;
              _this.listaProjetos = _this.listaProjetos.filter(function (m) {
                return m.situacao === "Ativo";
              });
              _this.listaProjetosFiltrados = _this.listaProjetosFiltrados.filter(function (m) {
                return m.situacao === "Ativo";
              });
              _this.numTotalProjetos = _this.listaProjetos.length;

              _this.listaProjetosFiltrados.sort(function (a, b) {
                return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
              });
            });
          }
        }, {
          key: "criarFormulario",
          value: function criarFormulario() {
            this.formulario = this.formulador.group({
              key: [this.assistido.key],
              nomeCompleto: [this.assistido.nomeCompleto, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              dataNascimento: [this.assistido.dataNascimento, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              telefone: [this.assistido.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              whatsapp: [this.assistido.whatsapp],
              email: [this.assistido.email],
              profissao: [this.assistido.profissao, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              estadoCivil: [this.assistido.estadoCivil, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              escolaridade: [this.assistido.escolaridade, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              observacoes: [this.assistido.observacoes],
              trabalhandoAtualmente: [this.assistido.trabalhandoAtualmente, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              cep: [this.assistido.endereco.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              logradouro: [this.assistido.endereco.logradouro, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              numero: [this.assistido.endereco.numero, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              complemento: [this.assistido.endereco.complemento],
              bairro: [this.assistido.endereco.bairro, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              cidade: [this.assistido.endereco.cidade, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              estado: [this.assistido.endereco.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              projetosAssistidos: [this.assistido.projetos],
              cpf: [this.assistido.cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              rg: [this.assistido.rg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "validarCpf",
          value: function validarCpf(event) {
            if (event.target.value) if (!src_app_validador_ValidadorInformacoesPessoais__WEBPACK_IMPORTED_MODULE_14__["ValidadorInformacoesPessoais"].cpfCnpjIsValid(event.target.value)) {
              this.mensagens.mensagemError("CPF inválido.");
              this.formulario.controls["cpf"].setValue(null);
              this.formulario.controls["senha"].setValue(null);
              return;
            } else {
              this.formulario.controls["senha"].setValue(event.target.value.replace(".", "").replace(".", "").replace("-", ""));
            }
          }
        }, {
          key: "buscarEndereco",
          value: function buscarEndereco(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

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
                          _this2.erroAoBuscarCep();
                        } else if (resultadoJson) {
                          _this2.formulario.controls["bairro"].setValue(resultadoJson.bairro);

                          _this2.formulario.controls["cidade"].setValue(resultadoJson.localidade);

                          _this2.formulario.controls["estado"].setValue(resultadoJson.uf);

                          _this2.formulario.controls["logradouro"].setValue(resultadoJson.logradouro);

                          _this2.disableEndereco(true);
                        }
                      }, function (erro) {
                        _this2.erroAoBuscarCep();
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
          key: "retirarEspacamentoEmail",
          value: function retirarEspacamentoEmail() {
            if (this.formulario.controls["email"].value) this.formulario.controls["email"].setValue(this.formulario.controls["email"].value.replace(/\s+/g, ""));
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
          key: "erroAoBuscarCep",
          value: function erroAoBuscarCep() {
            this.mensagens.mensagemAlerta("Cep não encontrado, por favor insira os dados manualmente.");
            this.preencherComNullEndereco();
            this.disableEndereco(false);
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
            if (this.formulario.value) {
              if (this.formulario.value.dataNascimento && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_11__["DateUtil"].verificarIsDataValida(this.formulario.value.dataNascimento)) {
                this.mensagens.mensagemError("A data informada no campo 'Data de nascimento' não é válida.");
              } else {
                this.disableEndereco(false);
                this.assistido = src_app_mapper_Assistido__WEBPACK_IMPORTED_MODULE_7__["AssistidoMapper"].formularioToAssistido(this.formulario.value);
                this.assistidoService.adicionarOuAtualizar(this.assistido, "Atualização realizada com sucesso!");
                this.disableEndereco(true);
                this.inicializar();
              }
            }
          }
        }]);

        return AssistidoPage;
      }();

      AssistidoPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_9__["ConsultaCEPService"]
        }, {
          type: src_app_servicos_Assistido__WEBPACK_IMPORTED_MODULE_8__["AssistidoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_10__["ProjetoService"]
        }];
      };

      AssistidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-assistido",
        template: _raw_loader_assistido_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assistido_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AssistidoPage);
      /***/
    },

    /***/
    "lknr":
    /*!************************************************************!*\
      !*** ./src/app/pages/edicao/assistido/assistido.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function lknr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content,\nion-item,\nion-input,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-select,\nion-input,\n.titulo-dado,\n.titulo-dado-select-acesso,\n.titulo-dado-select,\nh2 {\n  color: #2e2e3c;\n}\n\nion-list {\n  background-color: #e6e6e6;\n}\n\nion-title,\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-input {\n  text-transform: uppercase;\n  font-size: 11pt;\n}\n\n#email {\n  text-transform: lowercase;\n}\n\nion-select {\n  font-size: 10pt;\n}\n\n#cabecalho {\n  --background: #2e2e3c;\n  color: #fff;\n}\n\n.titulo-dado {\n  font-size: 13pt;\n}\n\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-size: 10pt;\n}\n\n.titulo-dado-select {\n  margin-left: 5.3%;\n}\n\n.titulo-dado-select-acesso {\n  margin-left: 2.5%;\n}\n\n.titulo-dado-batismo {\n  margin-left: 4%;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\nspan {\n  color: #eb445a;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzaXN0aWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUFRSSxnQ0FBQTtBQUNKOztBQUVBOzs7RUFHSSxxQkFBQTtBQUNKOztBQUVBOzs7Ozs7RUFNSSxjQUFBO0FBQ0o7O0FBRUE7RUFDRyx5QkFBQTtBQUNIOztBQUVBOztFQUVJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTs7O0VBR0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJhc3Npc3RpZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsXHJcbmlvbi1pdGVtLFxyXG5pb24taW5wdXQsXHJcbmlvbi1zZWxlY3QsXHJcbi50aXR1bG8tZGFkbyxcclxuLnRpdHVsby1kYWRvLXNlbGVjdCxcclxuLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28sXHJcbi50aXR1bG8tZGFkby1iYXRpc21vIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tY29udGVudCxcclxuaW9uLWl0ZW0sXHJcbiNyb2RhcGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG59XHJcblxyXG5pb24tc2VsZWN0LFxyXG5pb24taW5wdXQsXHJcbi50aXR1bG8tZGFkbyxcclxuLnRpdHVsby1kYWRvLXNlbGVjdC1hY2Vzc28sXHJcbi50aXR1bG8tZGFkby1zZWxlY3QsXHJcbmgyIHtcclxuICAgIGNvbG9yOiAjMmUyZTNjO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbmlvbi10aXRsZSxcclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxufVxyXG5cclxuI2VtYWlsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4jY2FiZWNhbGhvIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzJlMmUzYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGl0dWxvLWRhZG8ge1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG59XHJcblxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LFxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcclxuLnRpdHVsby1kYWRvLWJhdGlzbW8ge1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4udGl0dWxvLWRhZG8tc2VsZWN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1LjMlO1xyXG59XHJcblxyXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcclxufVxyXG5cclxuLnRpdHVsby1kYWRvLWJhdGlzbW8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiAjZWI0NDVhO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm15Y29tcG9uZW50LXdpZGVyLXBvcG92ZXIge1xyXG4gICAgLS13aWR0aDogOTUlO1xyXG4gICAgLS1tYXgtd2lkdGg6IDYwMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "uc6f":
    /*!********************************************************************!*\
      !*** ./src/app/pages/edicao/assistido/assistido-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: AssistidoPageRoutingModule */

    /***/
    function uc6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssistidoPageRoutingModule", function () {
        return AssistidoPageRoutingModule;
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


      var _assistido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assistido.page */
      "UJYu");

      var routes = [{
        path: '',
        component: _assistido_page__WEBPACK_IMPORTED_MODULE_3__["AssistidoPage"]
      }];

      var AssistidoPageRoutingModule = function AssistidoPageRoutingModule() {
        _classCallCheck(this, AssistidoPageRoutingModule);
      };

      AssistidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AssistidoPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-edicao-assistido-assistido-module-es5.js.map