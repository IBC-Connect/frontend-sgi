(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/FaQ":
/*!************************************!*\
  !*** ./src/app/modelo/Endereco.ts ***!
  \************************************/
/*! exports provided: Endereco */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endereco", function() { return Endereco; });
class Endereco {
}


/***/ }),

/***/ "0z2X":
/*!*************************************************!*\
  !*** ./src/app/util/InformacoesPessoaisUtil.ts ***!
  \*************************************************/
/*! exports provided: InformacoesPessoaisUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesPessoaisUtil", function() { return InformacoesPessoaisUtil; });
class InformacoesPessoaisUtil {
    static escolaridade() {
        return [
            { id: 1, valor: 'Não Alfabetizado' },
            { id: 2, valor: 'Ensino Fundamental Completo' },
            { id: 3, valor: 'Ensino Fundamental Incompleto' },
            { id: 4, valor: 'Ensino Médio Completo' },
            { id: 5, valor: 'Ensino Médio Incompleto' },
            { id: 6, valor: 'Ensino Superior Completo' },
            { id: 7, valor: 'Ensino Superior Incompleto' },
            { id: 8, valor: 'Pós-Graduando' },
            { id: 9, valor: 'Pós-Graduado' },
            { id: 10, valor: 'Mestre' },
            { id: 11, valor: 'Doutor' },
            { id: 12, valor: 'Pós-Doutor' },
        ];
    }
    static estadoCivil() {
        return [
            { id: 1, valor: 'Solteiro' },
            { id: 2, valor: 'Casado' },
            { id: 3, valor: 'Divorciado' },
            { id: 4, valor: 'Viúvo' },
        ];
    }
}


/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "8cY0":
/*!*********************************!*\
  !*** ./src/app/modelo/Cargo.ts ***!
  \*********************************/
/*! exports provided: Cargo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cargo", function() { return Cargo; });
class Cargo {
}


/***/ }),

/***/ "A2gu":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-bda125fb.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-cf6e85ee.js */ "Ke8Y");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "IChF":
/*!************************************!*\
  !*** ./src/app/servicos/Diario.ts ***!
  \************************************/
/*! exports provided: DiarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiarioService", function() { return DiarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let DiarioService = class DiarioService {
    constructor(db) {
        this.db = db;
        this.path = "diarios";
        this.diarioLista = new Array();
        this.diarioRef = this.db.list(this.path);
    }
    listar() {
        return (this.diarios = this.diarioRef
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((changes) => changes.map((c) => (Object.assign({ key: c.payload.key }, c.payload.val()))))));
    }
    adicionarOuAtualizar(diario) {
        if (diario.key) {
            this.diarioRef.update(diario.key, diario);
        }
        else {
            this.diarioRef.push(diario);
        }
    }
    deletar(key) {
        this.diarioRef.remove(key);
    }
    deletarTudo() {
        this.diarioRef.remove();
    }
};
DiarioService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
DiarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DiarioService);



/***/ }),

/***/ "JGwh":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/componentes/registro-consultorio-modal/registro-consultorio-modal.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: RegistroConsultorioModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroConsultorioModalPage", function() { return RegistroConsultorioModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_consultorio_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro-consultorio-modal.page.html */ "mka3");
/* harmony import */ var _registro_consultorio_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro-consultorio-modal.page.scss */ "lZj5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modelo_Membro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modelo/Membro */ "Xsc5");
/* harmony import */ var src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicos/Autenticacao */ "tTKV");
/* harmony import */ var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicos/Membro */ "fX5e");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var _modelo_Diario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../modelo/Diario */ "vujH");
/* harmony import */ var _servicos_Diario__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../servicos/Diario */ "IChF");











let RegistroConsultorioModalPage = class RegistroConsultorioModalPage {
    constructor(membroService, modalController, diarioService, autenticacaoService) {
        this.membroService = membroService;
        this.modalController = modalController;
        this.diarioService = diarioService;
        this.autenticacaoService = autenticacaoService;
        this.apareceListaMembros = true;
        this.diario = new _modelo_Diario__WEBPACK_IMPORTED_MODULE_9__["Diario"]();
        this.membro = new src_app_modelo_Membro__WEBPACK_IMPORTED_MODULE_5__["Membro"]();
        this.inicializar();
    }
    inicializar() {
        this.listaMembrosObservable = this.membroService.listar();
        this.listaMembrosObservable.subscribe((response) => {
            this.listaMembros = response;
            this.listaMembrosFiltrados = response;
            this.listaMembros = this.listaMembros.filter((m) => this.filtrarMembro(m));
            this.listaMembrosFiltrados = this.listaMembrosFiltrados.filter((m) => this.filtrarMembro(m));
            this.totalMembros = this.listaMembros.length;
            this.listaMembrosFiltrados.sort((a, b) => a.nomeCompleto > b.nomeCompleto
                ? 1
                : b.nomeCompleto > a.nomeCompleto
                    ? -1
                    : 0);
        });
    }
    membroSelecionado(item) {
        this.termoPesquisa = item.nomeCompleto;
    }
    filtrarMembro(membro) {
        return (membro.situacao === "Ativo" &&
            (membro.classificacao === undefined || membro.classificacao === "Membro"));
    }
    informacoesPsicologo() {
        this.usuario = this.autenticacaoService.pegarDadosLocalmente();
        const usuarioEncontrado = this.listaMembros.filter((membros) => membros.email === this.usuario.email);
        //Preencher infos diario
        this.diario.nomePsicologo =
            usuarioEncontrado.length > 0
                ? usuarioEncontrado[0].nomeCompleto
                : "Psicologo Não Cadastrado";
        this.diario.uIdPsicologo = this.usuario.uid;
    }
    ngOnInit() { }
    fecharModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    enviarRegistro() {
        this.informacoesPsicologo();
        this.diario.nomePaciente = this.termoPesquisa;
        this.diario.dataRegistro = src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_8__["DateUtil"].dateFormatterBrazil(new Date().toISOString());
        this.diarioService.adicionarOuAtualizar(this.diario);
        this.fecharModal();
    }
    onSearchTerm(ev) {
        this.listaMembrosFiltrados = this.listaMembros;
        const val = ev.detail.value;
        if (val && val.trim() !== "") {
            this.listaMembrosFiltrados = this.listaMembrosFiltrados.filter((term) => {
                return (term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
                    -1);
            });
        }
    }
};
RegistroConsultorioModalPage.ctorParameters = () => [
    { type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_7__["MembroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _servicos_Diario__WEBPACK_IMPORTED_MODULE_10__["DiarioService"] },
    { type: src_app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoService"] }
];
RegistroConsultorioModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-registro-consultorio-modal",
        template: _raw_loader_registro_consultorio_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_consultorio_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistroConsultorioModalPage);



/***/ }),

/***/ "JpJ2":
/*!**********************************!*\
  !*** ./src/app/mapper/Membro.ts ***!
  \**********************************/
/*! exports provided: MembroMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroMapper", function() { return MembroMapper; });
/* harmony import */ var _modelo_Endereco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modelo/Endereco */ "/FaQ");
/* harmony import */ var _modelo_Membro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modelo/Membro */ "Xsc5");


class MembroMapper {
    static formularioToMembro(form) {
        let membro = new _modelo_Membro__WEBPACK_IMPORTED_MODULE_1__["Membro"]();
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
        membro.endereco.complemento = form.complemento
            ? form.complemento.toUpperCase()
            : '';
        membro.endereco.estado = form.estado.toUpperCase();
        if (form.key)
            membro.key = form.key;
        return membro;
    }
}


/***/ }),

/***/ "LNr/":
/*!*************************************!*\
  !*** ./src/app/mapper/Assistido.ts ***!
  \*************************************/
/*! exports provided: AssistidoMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistidoMapper", function() { return AssistidoMapper; });
/* harmony import */ var _modelo_Assistido__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modelo/Assistido */ "MXSQ");
/* harmony import */ var _modelo_Endereco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modelo/Endereco */ "/FaQ");


class AssistidoMapper {
    static formularioToAssistido(form) {
        let assistido = new _modelo_Assistido__WEBPACK_IMPORTED_MODULE_0__["Assistido"]();
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
        assistido.endereco.complemento = form.complemento
            ? form.complemento.toUpperCase()
            : '';
        assistido.endereco.estado = form.estado.toUpperCase();
        assistido.familiares = form.familiares.length > 0 ? form.familiares : '';
        if (form.key)
            assistido.key = form.key;
        return assistido;
    }
}


/***/ }),

/***/ "MXSQ":
/*!*************************************!*\
  !*** ./src/app/modelo/Assistido.ts ***!
  \*************************************/
/*! exports provided: Assistido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assistido", function() { return Assistido; });
class Assistido {
}


/***/ }),

/***/ "NHGS":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/componentes/sistema-relatorio-modal/sistema-relatorio-modal.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("iframe {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lzdGVtYS1yZWxhdG9yaW8tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzaXN0ZW1hLXJlbGF0b3Jpby1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "RoIt":
/*!**************************************!*\
  !*** ./src/app/util/EncontroUtil.ts ***!
  \**************************************/
/*! exports provided: EncontroUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncontroUtil", function() { return EncontroUtil; });
class EncontroUtil {
    static arrayEncontro() {
        return [{ dia: 'SEG', horarioInicial: null, horarioFinal: null },
            { dia: 'TER', horarioInicial: null, horarioFinal: null },
            { dia: 'QUA', horarioInicial: null, horarioFinal: null },
            { dia: 'QUI', horarioInicial: null, horarioFinal: null },
            { dia: 'SEX', horarioInicial: null, horarioFinal: null },
            { dia: 'SAB', horarioInicial: null, horarioFinal: null },
            { dia: 'DOM', horarioInicial: null, horarioFinal: null }];
    }
}


/***/ }),

/***/ "T+3M":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/componentes/sistema-relatorio-modal/sistema-relatorio-modal.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: SistemaRelatorioModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SistemaRelatorioModalPage", function() { return SistemaRelatorioModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sistema_relatorio_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sistema-relatorio-modal.page.html */ "rCGp");
/* harmony import */ var _sistema_relatorio_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sistema-relatorio-modal.page.scss */ "NHGS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






let SistemaRelatorioModalPage = class SistemaRelatorioModalPage {
    constructor(modalController, sanitizer) {
        this.modalController = modalController;
        this.sanitizer = sanitizer;
        this.url = "http://vps.iconsultweb.com:9099/";
    }
    ngOnInit() { }
    fecharModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    openRelatorio() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
};
SistemaRelatorioModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
SistemaRelatorioModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-sistema-relatorio-modal",
        template: _raw_loader_sistema_relatorio_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sistema_relatorio_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SistemaRelatorioModalPage);



/***/ }),

/***/ "TR/9":
/*!******************************************!*\
  !*** ./src/app/util/DadosUsuarioUtil.ts ***!
  \******************************************/
/*! exports provided: DadosUsuarioUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosUsuarioUtil", function() { return DadosUsuarioUtil; });
class DadosUsuarioUtil {
    constructor() { }
    static dadosUsuarioLogado() {
        return JSON.parse(localStorage.getItem("usuario"));
    }
}


/***/ }),

/***/ "U7Ex":
/*!**********************************!*\
  !*** ./src/app/modelo/Evento.ts ***!
  \**********************************/
/*! exports provided: Evento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evento", function() { return Evento; });
class Evento {
}


/***/ }),

/***/ "VFuG":
/*!***********************************************************!*\
  !*** ./src/app/validador/ValidadorInformacoesPessoais.ts ***!
  \***********************************************************/
/*! exports provided: ValidadorInformacoesPessoais */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidadorInformacoesPessoais", function() { return ValidadorInformacoesPessoais; });
class ValidadorInformacoesPessoais {
    static cpfCnpjIsValid(val) {
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
            for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
                v1 += cpf[i] * p;
            }
            v1 = ((v1 * 10) % 11);
            if (v1 == 10) {
                v1 = 0;
            }
            if (v1 != cpf[9]) {
                return false;
            }
            for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
                v2 += cpf[i] * p;
            }
            v2 = ((v2 * 10) % 11);
            if (v2 == 10) {
                v2 = 0;
            }
            if (v2 != cpf[10]) {
                return false;
            }
            else {
                return true;
            }
        }
        else if (val.length == 18) {
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
            for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                    v1 += cnpj[i] * p1;
                }
                else {
                    v1 += cnpj[i] * p2;
                }
            }
            v1 = (v1 % 11);
            if (v1 < 2) {
                v1 = 0;
            }
            else {
                v1 = (11 - v1);
            }
            if (v1 != cnpj[12]) {
                return false;
            }
            for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                    v2 += cnpj[i] * p1;
                }
                else {
                    v2 += cnpj[i] * p2;
                }
            }
            v2 = (v2 % 11);
            if (v2 < 2) {
                v2 = 0;
            }
            else {
                v2 = (11 - v2);
            }
            if (v2 != cnpj[13]) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
}


/***/ }),

/***/ "YAOL":
/*!********************************************!*\
  !*** ./src/app/util/RedirecionadorUtil.ts ***!
  \********************************************/
/*! exports provided: RedirecionadorUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirecionadorUtil", function() { return RedirecionadorUtil; });
class RedirecionadorUtil {
    constructor(navegador) {
        this.navegador = navegador;
    }
    redicionarPara(nomePagina) {
        this.navegador.navigateForward(nomePagina);
    }
}


/***/ }),

/***/ "aKcV":
/*!***********************************!*\
  !*** ./src/app/modelo/Usuario.ts ***!
  \***********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
}


/***/ }),

/***/ "cn//":
/*!***************************************!*\
  !*** ./src/app/servicos/Assistido.ts ***!
  \***************************************/
/*! exports provided: AssistidoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistidoService", function() { return AssistidoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _util_MensagensUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/MensagensUtil */ "sZxV");






let AssistidoService = class AssistidoService {
    constructor(db, aviso) {
        this.db = db;
        this.aviso = aviso;
        this.path = "assistidos";
        this.assistidoLista = new Array();
        this.assistidoRef = this.db.list(this.path);
        this.mensagens = new _util_MensagensUtil__WEBPACK_IMPORTED_MODULE_5__["MensagensUtil"](aviso);
    }
    listar() {
        return (this.assistidos = this.assistidoRef
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((changes) => changes.map((c) => (Object.assign({ key: c.payload.key }, c.payload.val()))))));
    }
    adicionarOuAtualizar(assistido, mensagem) {
        if (assistido.key) {
            this.assistidoRef.update(assistido.key, assistido).then((sucess) => {
                this.mensagens.mensagemSucesso(mensagem);
            }, (error) => {
                this.mensagens.mensagemError("Houve um erro ao cadastrar.");
                console.log(error);
            });
        }
        else {
            this.assistidoRef.push(assistido).then((sucess) => {
                this.mensagens.mensagemSucesso(mensagem);
            }, (error) => {
                this.mensagens.mensagemError("Houve um erro ao cadastrar.");
                console.log(error);
            });
        }
    }
    deletar(key) {
        this.assistidoRef.remove(key);
    }
    deletarTudo() {
        this.assistidoRef.remove();
    }
};
AssistidoService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
AssistidoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], AssistidoService);



/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
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
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "itSG":
/*!*************************************************!*\
  !*** ./src/app/util/DiaDaSemanaEHorarioUtil.ts ***!
  \*************************************************/
/*! exports provided: DiaDaSemanaEHorarioUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaDaSemanaEHorarioUtil", function() { return DiaDaSemanaEHorarioUtil; });
class DiaDaSemanaEHorarioUtil {
    static diasDaSemana() {
        return [{ codigo: 'SEG', titulo: 'Segunda-feira' },
            { codigo: 'TER', titulo: 'Terça-feira' },
            { codigo: 'QUA', titulo: 'Quarta-feira' },
            { codigo: 'QUI', titulo: 'Quinta-feira' },
            { codigo: 'SEX', titulo: 'Sexta-feira' },
            { codigo: 'SAB', titulo: 'Sábado' },
            { codigo: 'DOM', titulo: 'Domingo' }];
    }
    static horarios() {
        return ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30',
            '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30',
            '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
            '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
            '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
            '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];
    }
}


/***/ }),

/***/ "lZj5":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/componentes/registro-consultorio-modal/registro-consultorio-modal.page.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby1jb25zdWx0b3Jpby1tb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "mka3":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/componentes/registro-consultorio-modal/registro-consultorio-modal.page.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Anotações</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list style=\"margin-top: 20%\">\n    <ion-item>\n      <ion-label>Nome do paciente</ion-label>\n      <ion-searchbar\n        (ionChange)=\"onSearchTerm($event)\"\n        placeholder=\"Digite o nome do assistido\"\n        color=\"tertiary\"\n      ></ion-searchbar>\n    </ion-item>\n  </ion-list> -->\n  <ion-list>\n    <ion-searchbar\n      (ionChange)=\"onSearchTerm($event)\"\n      placeholder=\"Digite o nome do paciente\"\n      color=\"tertiary\"\n      [(ngModel)]=\"termoPesquisa\"\n    ></ion-searchbar>\n    <div style=\"width: 100%; height: auto;\">\n      <ion-virtual-scroll [items]=\"listaMembrosFiltrados\">\n        <ion-item *virtualItem=\"let item\" (click)=\"membroSelecionado(item)\">\n          {{ item.nomeCompleto }}\n        </ion-item>\n      </ion-virtual-scroll>\n    </div>\n  </ion-list>\n  <ion-item>\n    <ion-textarea\n      [(ngModel)]=\"diario.registro\"\n      rows=\"10\"\n      cols=\"20\"\n      placeholder=\"Digite aqui o diario do paciente...\"\n      maxlength=\"500\"\n    ></ion-textarea>\n  </ion-item>\n  <br />\n  <div style=\"margin-left: 62.5%\">\n    <ion-button (click)=\"enviarRegistro()\">Enviar</ion-button>\n    <ion-button (click)=\"fecharModal()\">Cancelar</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "pX2f":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-e272e3f1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3ccd7557.js */ "2atR");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "rCGp":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/componentes/sistema-relatorio-modal/sistema-relatorio-modal.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <iframe [src]=\"openRelatorio()\" frameborder=\"0\"></iframe>\n</ion-content>");

/***/ }),

/***/ "tHhQ":
/*!**********************************!*\
  !*** ./src/app/mapper/Evento.ts ***!
  \**********************************/
/*! exports provided: EventoMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoMapper", function() { return EventoMapper; });
/* harmony import */ var _modelo_Endereco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modelo/Endereco */ "/FaQ");
/* harmony import */ var _modelo_Evento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modelo/Evento */ "U7Ex");


class EventoMapper {
    static formularioToEvento(form) {
        let evento = new _modelo_Evento__WEBPACK_IMPORTED_MODULE_1__["Evento"]();
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
}


/***/ }),

/***/ "tyGv":
/*!**********************************************************!*\
  !*** ./src/app/validador/ValidadorCamposObrigatorios.ts ***!
  \**********************************************************/
/*! exports provided: ValidadorCamposObrigatorios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidadorCamposObrigatorios", function() { return ValidadorCamposObrigatorios; });
class ValidadorCamposObrigatorios {
    static isCampoPreenchido(valor) {
        return valor != null && valor.trim() != '';
    }
}


/***/ }),

/***/ "vujH":
/*!**********************************!*\
  !*** ./src/app/modelo/Diario.ts ***!
  \**********************************/
/*! exports provided: Diario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diario", function() { return Diario; });
class Diario {
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map