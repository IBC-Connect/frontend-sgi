(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "/FaQ":
    /*!************************************!*\
      !*** ./src/app/modelo/Endereco.ts ***!
      \************************************/

    /*! exports provided: Endereco */

    /***/
    function FaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Endereco", function () {
        return Endereco;
      });

      var Endereco = function Endereco() {
        _classCallCheck(this, Endereco);
      };
      /***/

    },

    /***/
    "0z2X":
    /*!*************************************************!*\
      !*** ./src/app/util/InformacoesPessoaisUtil.ts ***!
      \*************************************************/

    /*! exports provided: InformacoesPessoaisUtil */

    /***/
    function z2X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformacoesPessoaisUtil", function () {
        return InformacoesPessoaisUtil;
      });

      var InformacoesPessoaisUtil = /*#__PURE__*/function () {
        function InformacoesPessoaisUtil() {
          _classCallCheck(this, InformacoesPessoaisUtil);
        }

        _createClass(InformacoesPessoaisUtil, null, [{
          key: "escolaridade",
          value: function escolaridade() {
            return [{
              id: 1,
              valor: 'Não Alfabetizado'
            }, {
              id: 2,
              valor: 'Ensino Fundamental Completo'
            }, {
              id: 3,
              valor: 'Ensino Fundamental Incompleto'
            }, {
              id: 4,
              valor: 'Ensino Médio Completo'
            }, {
              id: 5,
              valor: 'Ensino Médio Incompleto'
            }, {
              id: 6,
              valor: 'Ensino Superior Completo'
            }, {
              id: 7,
              valor: 'Ensino Superior Incompleto'
            }, {
              id: 8,
              valor: 'Pós-Graduando'
            }, {
              id: 9,
              valor: 'Pós-Graduado'
            }, {
              id: 10,
              valor: 'Mestre'
            }, {
              id: 11,
              valor: 'Doutor'
            }, {
              id: 12,
              valor: 'Pós-Doutor'
            }];
          }
        }, {
          key: "estadoCivil",
          value: function estadoCivil() {
            return [{
              id: 1,
              valor: 'Solteiro'
            }, {
              id: 2,
              valor: 'Casado'
            }, {
              id: 3,
              valor: 'Divorciado'
            }, {
              id: 4,
              valor: 'Viúvo'
            }];
          }
        }]);

        return InformacoesPessoaisUtil;
      }();
      /***/

    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "8cY0":
    /*!*********************************!*\
      !*** ./src/app/modelo/Cargo.ts ***!
      \*********************************/

    /*! exports provided: Cargo */

    /***/
    function cY0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cargo", function () {
        return Cargo;
      });

      var Cargo = function Cargo() {
        _classCallCheck(this, Cargo);
      };
      /***/

    },

    /***/
    "A2gu":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-bda125fb.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function A2gu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-cf6e85ee.js */
      "Ke8Y");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!delegate) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context2.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context2.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context2.abrupt("return", el);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "JpJ2":
    /*!**********************************!*\
      !*** ./src/app/mapper/Membro.ts ***!
      \**********************************/

    /*! exports provided: MembroMapper */

    /***/
    function JpJ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembroMapper", function () {
        return MembroMapper;
      });
      /* harmony import */


      var _modelo_Endereco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../modelo/Endereco */
      "/FaQ");
      /* harmony import */


      var _modelo_Membro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../modelo/Membro */
      "Xsc5");

      var MembroMapper = /*#__PURE__*/function () {
        function MembroMapper() {
          _classCallCheck(this, MembroMapper);
        }

        _createClass(MembroMapper, null, [{
          key: "formularioToMembro",
          value: function formularioToMembro(form) {
            var membro = new _modelo_Membro__WEBPACK_IMPORTED_MODULE_1__["Membro"]();
            membro.nomeCompleto = form.nomeCompleto.toUpperCase();
            membro.dataNascimento = form.dataNascimento;
            membro.email = form.email ? form.email.toLowerCase() : '';
            membro.escolaridade = Number(form.escolaridade);
            membro.estadoCivil = Number(form.estadoCivil);
            membro.perfil = form.perfil;
            membro.dataBatismo = form.dataBatismo ? form.dataBatismo : '';
            membro.membroDesde = form.membroDesde ? form.membroDesde : '';
            membro.profissao = form.profissao.toUpperCase();
            membro.situacao = 'Ativo';
            membro.classificacao = form.classificacao;
            membro.whatsapp = form.whatsapp;
            membro.telefone = form.telefone;
            membro.trabalhandoAtualmente = form.trabalhandoAtualmente;
            membro.cpf = form.cpf;
            membro.senha = form.senha;
            membro.endereco = new _modelo_Endereco__WEBPACK_IMPORTED_MODULE_0__["Endereco"]();
            membro.endereco.cep = form.cep;
            membro.endereco.logradouro = form.logradouro.toUpperCase();
            membro.endereco.bairro = form.bairro.toUpperCase();
            membro.endereco.cidade = form.cidade.toUpperCase();
            membro.endereco.numero = form.numero;
            membro.endereco.complemento = form.complemento ? form.complemento.toUpperCase() : '';
            membro.endereco.estado = form.estado.toUpperCase();
            if (form.key) membro.key = form.key;
            return membro;
          }
        }]);

        return MembroMapper;
      }();
      /***/

    },

    /***/
    "LNr/":
    /*!*************************************!*\
      !*** ./src/app/mapper/Assistido.ts ***!
      \*************************************/

    /*! exports provided: AssistidoMapper */

    /***/
    function LNr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssistidoMapper", function () {
        return AssistidoMapper;
      });
      /* harmony import */


      var _modelo_Assistido__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../modelo/Assistido */
      "MXSQ");
      /* harmony import */


      var _modelo_Endereco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../modelo/Endereco */
      "/FaQ");

      var AssistidoMapper = /*#__PURE__*/function () {
        function AssistidoMapper() {
          _classCallCheck(this, AssistidoMapper);
        }

        _createClass(AssistidoMapper, null, [{
          key: "formularioToAssistido",
          value: function formularioToAssistido(form) {
            var assistido = new _modelo_Assistido__WEBPACK_IMPORTED_MODULE_0__["Assistido"]();
            assistido.nomeCompleto = form.nomeCompleto.toUpperCase();
            assistido.dataNascimento = form.dataNascimento;
            assistido.email = form.email ? form.email.toLowerCase()() : '';
            assistido.escolaridade = Number(form.escolaridade);
            assistido.estadoCivil = Number(form.estadoCivil);
            assistido.profissao = form.profissao.toUpperCase();
            assistido.situacao = 'Ativo';
            assistido.whatsapp = form.whatsapp;
            assistido.observacoes = form.observacoes;
            assistido.telefone = form.telefone;
            assistido.trabalhandoAtualmente = form.trabalhandoAtualmente;
            assistido.projetos = form.projetosAssistidos;
            assistido.cpf = form.cpf;
            assistido.rg = form.rg;
            assistido.endereco = new _modelo_Endereco__WEBPACK_IMPORTED_MODULE_1__["Endereco"]();
            assistido.endereco.cep = form.cep;
            assistido.endereco.logradouro = form.logradouro.toUpperCase();
            assistido.endereco.bairro = form.bairro.toUpperCase();
            assistido.endereco.cidade = form.cidade.toUpperCase();
            assistido.endereco.numero = form.numero;
            assistido.endereco.complemento = form.complemento ? form.complemento.toUpperCase() : '';
            assistido.endereco.estado = form.estado.toUpperCase();
            if (form.key) assistido.key = form.key;
            return assistido;
          }
        }]);

        return AssistidoMapper;
      }();
      /***/

    },

    /***/
    "MXSQ":
    /*!*************************************!*\
      !*** ./src/app/modelo/Assistido.ts ***!
      \*************************************/

    /*! exports provided: Assistido */

    /***/
    function MXSQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Assistido", function () {
        return Assistido;
      });

      var Assistido = function Assistido() {
        _classCallCheck(this, Assistido);
      };
      /***/

    },

    /***/
    "RoIt":
    /*!**************************************!*\
      !*** ./src/app/util/EncontroUtil.ts ***!
      \**************************************/

    /*! exports provided: EncontroUtil */

    /***/
    function RoIt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EncontroUtil", function () {
        return EncontroUtil;
      });

      var EncontroUtil = /*#__PURE__*/function () {
        function EncontroUtil() {
          _classCallCheck(this, EncontroUtil);
        }

        _createClass(EncontroUtil, null, [{
          key: "arrayEncontro",
          value: function arrayEncontro() {
            return [{
              dia: 'SEG',
              horarioInicial: null,
              horarioFinal: null
            }, {
              dia: 'TER',
              horarioInicial: null,
              horarioFinal: null
            }, {
              dia: 'QUA',
              horarioInicial: null,
              horarioFinal: null
            }, {
              dia: 'QUI',
              horarioInicial: null,
              horarioFinal: null
            }, {
              dia: 'SEX',
              horarioInicial: null,
              horarioFinal: null
            }, {
              dia: 'SAB',
              horarioInicial: null,
              horarioFinal: null
            }, {
              dia: 'DOM',
              horarioInicial: null,
              horarioFinal: null
            }];
          }
        }]);

        return EncontroUtil;
      }();
      /***/

    },

    /***/
    "U7Ex":
    /*!**********************************!*\
      !*** ./src/app/modelo/Evento.ts ***!
      \**********************************/

    /*! exports provided: Evento */

    /***/
    function U7Ex(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Evento", function () {
        return Evento;
      });

      var Evento = function Evento() {
        _classCallCheck(this, Evento);
      };
      /***/

    },

    /***/
    "VFuG":
    /*!***********************************************************!*\
      !*** ./src/app/validador/ValidadorInformacoesPessoais.ts ***!
      \***********************************************************/

    /*! exports provided: ValidadorInformacoesPessoais */

    /***/
    function VFuG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidadorInformacoesPessoais", function () {
        return ValidadorInformacoesPessoais;
      });

      var ValidadorInformacoesPessoais = /*#__PURE__*/function () {
        function ValidadorInformacoesPessoais() {
          _classCallCheck(this, ValidadorInformacoesPessoais);
        }

        _createClass(ValidadorInformacoesPessoais, null, [{
          key: "cpfCnpjIsValid",
          value: function cpfCnpjIsValid(val) {
            if (val.length == 14) {
              var cpf = val.trim();
              cpf = cpf.replace(/\./g, '');
              cpf = cpf.replace('-', '');
              cpf = cpf.split('');
              var v1 = 0;
              var v2 = 0;
              var aux = false;

              for (var i = 1; cpf.length > i; i++) {
                if (cpf[i - 1] != cpf[i]) {
                  aux = true;
                }
              }

              if (aux == false) {
                return false;
              }

              for (var i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
                v1 += cpf[i] * p;
              }

              v1 = v1 * 10 % 11;

              if (v1 == 10) {
                v1 = 0;
              }

              if (v1 != cpf[9]) {
                return false;
              }

              for (var i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
                v2 += cpf[i] * p;
              }

              v2 = v2 * 10 % 11;

              if (v2 == 10) {
                v2 = 0;
              }

              if (v2 != cpf[10]) {
                return false;
              } else {
                return true;
              }
            } else if (val.length == 18) {
              var cnpj = val.trim();
              cnpj = cnpj.replace(/\./g, '');
              cnpj = cnpj.replace('-', '');
              cnpj = cnpj.replace('/', '');
              cnpj = cnpj.split('');
              var v1 = 0;
              var v2 = 0;
              var aux = false;

              for (var i = 1; cnpj.length > i; i++) {
                if (cnpj[i - 1] != cnpj[i]) {
                  aux = true;
                }
              }

              if (aux == false) {
                return false;
              }

              for (var i = 0, p1 = 5, p2 = 13; cnpj.length - 2 > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                  v1 += cnpj[i] * p1;
                } else {
                  v1 += cnpj[i] * p2;
                }
              }

              v1 = v1 % 11;

              if (v1 < 2) {
                v1 = 0;
              } else {
                v1 = 11 - v1;
              }

              if (v1 != cnpj[12]) {
                return false;
              }

              for (var i = 0, p1 = 6, p2 = 14; cnpj.length - 1 > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                  v2 += cnpj[i] * p1;
                } else {
                  v2 += cnpj[i] * p2;
                }
              }

              v2 = v2 % 11;

              if (v2 < 2) {
                v2 = 0;
              } else {
                v2 = 11 - v2;
              }

              if (v2 != cnpj[13]) {
                return false;
              } else {
                return true;
              }
            } else {
              return false;
            }
          }
        }]);

        return ValidadorInformacoesPessoais;
      }();
      /***/

    },

    /***/
    "YAOL":
    /*!********************************************!*\
      !*** ./src/app/util/RedirecionadorUtil.ts ***!
      \********************************************/

    /*! exports provided: RedirecionadorUtil */

    /***/
    function YAOL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedirecionadorUtil", function () {
        return RedirecionadorUtil;
      });

      var RedirecionadorUtil = /*#__PURE__*/function () {
        function RedirecionadorUtil(navegador) {
          _classCallCheck(this, RedirecionadorUtil);

          this.navegador = navegador;
        }

        _createClass(RedirecionadorUtil, [{
          key: "redicionarPara",
          value: function redicionarPara(nomePagina) {
            this.navegador.navigateForward(nomePagina);
          }
        }]);

        return RedirecionadorUtil;
      }();
      /***/

    },

    /***/
    "aKcV":
    /*!***********************************!*\
      !*** ./src/app/modelo/Usuario.ts ***!
      \***********************************/

    /*! exports provided: Usuario */

    /***/
    function aKcV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Usuario", function () {
        return Usuario;
      });

      var Usuario = function Usuario() {
        _classCallCheck(this, Usuario);
      };
      /***/

    },

    /***/
    "cn//":
    /*!***************************************!*\
      !*** ./src/app/servicos/Assistido.ts ***!
      \***************************************/

    /*! exports provided: AssistidoService */

    /***/
    function cn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssistidoService", function () {
        return AssistidoService;
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AssistidoService = /*#__PURE__*/function () {
        function AssistidoService(db) {
          _classCallCheck(this, AssistidoService);

          this.db = db;
          this.path = 'assistidos';
          this.assistidoLista = new Array();
          this.assistidoRef = this.db.list(this.path);
        }

        _createClass(AssistidoService, [{
          key: "listar",
          value: function listar() {
            return this.assistidos = this.assistidoRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  key: c.payload.key
                }, c.payload.val());
              });
            }));
          }
        }, {
          key: "adicionarOuAtualizar",
          value: function adicionarOuAtualizar(assistido) {
            if (assistido.key) {
              this.assistidoRef.update(assistido.key, assistido);
            } else {
              this.assistidoRef.push(assistido);
            }
          }
        }, {
          key: "deletar",
          value: function deletar(key) {
            this.assistidoRef.remove(key);
          }
        }, {
          key: "deletarTudo",
          value: function deletarTudo() {
            this.assistidoRef.remove();
          }
        }, {
          key: "carregaListaAssistidos",
          value: function carregaListaAssistidos() {
            var _this = this;

            this.listar().toPromise().then(function (sucess) {
              _this.assistidoLista = sucess;
            }, function (error) {
              console.log(error);
            });
            return this.assistidoLista;
          }
        }]);

        return AssistidoService;
      }();

      AssistidoService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }];
      };

      AssistidoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AssistidoService);
      /***/
    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "itSG":
    /*!*************************************************!*\
      !*** ./src/app/util/DiaDaSemanaEHorarioUtil.ts ***!
      \*************************************************/

    /*! exports provided: DiaDaSemanaEHorarioUtil */

    /***/
    function itSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiaDaSemanaEHorarioUtil", function () {
        return DiaDaSemanaEHorarioUtil;
      });

      var DiaDaSemanaEHorarioUtil = /*#__PURE__*/function () {
        function DiaDaSemanaEHorarioUtil() {
          _classCallCheck(this, DiaDaSemanaEHorarioUtil);
        }

        _createClass(DiaDaSemanaEHorarioUtil, null, [{
          key: "diasDaSemana",
          value: function diasDaSemana() {
            return [{
              codigo: 'SEG',
              titulo: 'Segunda-feira'
            }, {
              codigo: 'TER',
              titulo: 'Terça-feira'
            }, {
              codigo: 'QUA',
              titulo: 'Quarta-feira'
            }, {
              codigo: 'QUI',
              titulo: 'Quinta-feira'
            }, {
              codigo: 'SEX',
              titulo: 'Sexta-feira'
            }, {
              codigo: 'SAB',
              titulo: 'Sábado'
            }, {
              codigo: 'DOM',
              titulo: 'Domingo'
            }];
          }
        }, {
          key: "horarios",
          value: function horarios() {
            return ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];
          }
        }]);

        return DiaDaSemanaEHorarioUtil;
      }();
      /***/

    },

    /***/
    "pX2f":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-e272e3f1.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function pX2f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-3ccd7557.js */
      "2atR");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "tHhQ":
    /*!**********************************!*\
      !*** ./src/app/mapper/Evento.ts ***!
      \**********************************/

    /*! exports provided: EventoMapper */

    /***/
    function tHhQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventoMapper", function () {
        return EventoMapper;
      });
      /* harmony import */


      var _modelo_Endereco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../modelo/Endereco */
      "/FaQ");
      /* harmony import */


      var _modelo_Evento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../modelo/Evento */
      "U7Ex");

      var EventoMapper = /*#__PURE__*/function () {
        function EventoMapper() {
          _classCallCheck(this, EventoMapper);
        }

        _createClass(EventoMapper, null, [{
          key: "formularioToEvento",
          value: function formularioToEvento(form) {
            var evento = new _modelo_Evento__WEBPACK_IMPORTED_MODULE_1__["Evento"]();
            evento.nome = form.nome.toString().toUpperCase();
            evento.data = form.data;
            evento.horarioInicio = form.horarioInicio;
            evento.horarioFim = form.horarioFim;
            evento.observacoes = form.observacoes ? form.observacoes.toUpperCase() : "";
            evento.responsavel = form.responsavel;
            evento.local = new _modelo_Endereco__WEBPACK_IMPORTED_MODULE_0__["Endereco"]();
            evento.local.cep = form.cep;
            evento.local.logradouro = form.logradouro.toUpperCase();
            evento.local.bairro = form.bairro.toUpperCase();
            evento.local.cidade = form.cidade.toUpperCase();
            evento.local.numero = form.numero;
            evento.local.complemento = form.complemento ? form.complemento.toUpperCase() : "";
            evento.local.estado = form.estado.toUpperCase();
            return evento;
          }
        }]);

        return EventoMapper;
      }();
      /***/

    },

    /***/
    "tyGv":
    /*!**********************************************************!*\
      !*** ./src/app/validador/ValidadorCamposObrigatorios.ts ***!
      \**********************************************************/

    /*! exports provided: ValidadorCamposObrigatorios */

    /***/
    function tyGv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidadorCamposObrigatorios", function () {
        return ValidadorCamposObrigatorios;
      });

      var ValidadorCamposObrigatorios = /*#__PURE__*/function () {
        function ValidadorCamposObrigatorios() {
          _classCallCheck(this, ValidadorCamposObrigatorios);
        }

        _createClass(ValidadorCamposObrigatorios, null, [{
          key: "isCampoPreenchido",
          value: function isCampoPreenchido(valor) {
            return valor != null && valor.trim() != '';
          }
        }]);

        return ValidadorCamposObrigatorios;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map