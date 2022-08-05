(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joaopedrotavares/Documents/Dev/frontend-sgi/src/main.ts */"zUnb");


/***/ }),

/***/ "662k":
/*!************************************!*\
  !*** ./src/app/servicos/Evento.ts ***!
  \************************************/
/*! exports provided: EventoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoService", function() { return EventoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let EventoService = class EventoService {
    constructor(db) {
        this.db = db;
        this.path = 'eventos';
        this.eventosLista = new Array();
        this.eventoRef = this.db.list(this.path);
    }
    listar() {
        return (this.eventos = this.eventoRef
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((changes) => changes.map((c) => (Object.assign({ key: c.payload.key }, c.payload.val()))))));
    }
    adicionarOuAtualizar(evento) {
        if (evento.key) {
            this.eventoRef.update(evento.key, evento);
        }
        else {
            this.eventoRef.push(evento);
        }
    }
    deletar(key) {
        this.eventoRef.remove(key);
    }
    deletarTudo() {
        this.eventoRef.remove();
    }
    carregaListaEvento() {
        this.listar()
            .toPromise()
            .then((sucess) => {
            this.eventosLista = sucess;
        }, (error) => {
            console.log(error);
        });
        return this.eventosLista;
    }
};
EventoService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
EventoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], EventoService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EhKG":
/*!***********************************!*\
  !*** ./src/app/servicos/Cargo.ts ***!
  \***********************************/
/*! exports provided: CargoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoService", function() { return CargoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let CargoService = class CargoService {
    constructor(db) {
        this.db = db;
        this.path = 'cargos';
        this.cargosLista = new Array();
        this.cargoRef = this.db.list(this.path);
    }
    listar() {
        return (this.cargos = this.cargoRef
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((changes) => changes.map((c) => (Object.assign({ key: c.payload.key }, c.payload.val()))))));
    }
    adicionarOuAtualizar(cargo) {
        if (cargo.key) {
            this.cargoRef.update(cargo.key, cargo);
        }
        else {
            this.cargoRef.push(cargo);
        }
    }
    deletar(key) {
        this.cargoRef.remove(key);
    }
    deletarTudo() {
        this.cargoRef.remove();
    }
};
CargoService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
CargoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CargoService);



/***/ }),

/***/ "Gchg":
/*!*****************************************!*\
  !*** ./src/app/servicos/ConsultaCEP.ts ***!
  \*****************************************/
/*! exports provided: ConsultaCEPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaCEPService", function() { return ConsultaCEPService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let ConsultaCEPService = class ConsultaCEPService {
    constructor(Http) {
        this.Http = Http;
    }
    buscaEndereco(cep) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.Http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise();
        });
    }
};
ConsultaCEPService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConsultaCEPService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ConsultaCEPService);



/***/ }),

/***/ "MoJo":
/*!*************************************!*\
  !*** ./src/app/servicos/Projeto.ts ***!
  \*************************************/
/*! exports provided: ProjetoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoService", function() { return ProjetoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ProjetoService = class ProjetoService {
    constructor(db) {
        this.db = db;
        this.path = 'projetos';
        this.projetosLista = new Array();
        this.projetoRef = this.db.list(this.path);
    }
    listar() {
        return (this.projetos = this.projetoRef
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((changes) => changes.map((c) => (Object.assign({ key: c.payload.key }, c.payload.val()))))));
    }
    adicionarOuAtualizar(projeto) {
        if (projeto.key) {
            this.projetoRef.update(projeto.key, projeto);
        }
        else {
            this.projetoRef.push(projeto);
        }
    }
    deletar(key) {
        this.projetoRef.remove(key);
    }
    deletarTudo() {
        this.projetoRef.remove();
    }
    carregaListaProjetos() {
        this.listar()
            .toPromise()
            .then((sucess) => {
            this.projetosLista = sucess;
        }, (error) => {
            console.log(error);
        });
        return this.projetosLista;
    }
};
ProjetoService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
ProjetoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ProjetoService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "Xsc5":
/*!**********************************!*\
  !*** ./src/app/modelo/Membro.ts ***!
  \**********************************/
/*! exports provided: Membro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Membro", function() { return Membro; });
class Membro {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _configuracao_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configuracao/firebase */ "je2q");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/servicos/Autenticacao */ "tTKV");
/* harmony import */ var _app_servicos_Membro__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/servicos/Membro */ "fX5e");
/* harmony import */ var _app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app/servicos/Cargo */ "EhKG");
/* harmony import */ var _app_servicos_Evento__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/servicos/Evento */ "662k");
/* harmony import */ var _app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/servicos/Projeto */ "MoJo");
/* harmony import */ var _app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app/servicos/ConsultaCEP */ "Gchg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_configuracao_firebase__WEBPACK_IMPORTED_MODULE_7__["FirebaseConfig"]),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]],
        providers: [
            _app_servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_13__["AutenticacaoService"],
            _app_servicos_Membro__WEBPACK_IMPORTED_MODULE_14__["MembroService"],
            _app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_15__["CargoService"],
            _app_servicos_Evento__WEBPACK_IMPORTED_MODULE_16__["EventoService"],
            _app_servicos_Projeto__WEBPACK_IMPORTED_MODULE_17__["ProjetoService"],
            _app_servicos_ConsultaCEP__WEBPACK_IMPORTED_MODULE_18__["ConsultaCEPService"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "crdG":
/*!*************************************************!*\
  !*** ./src/app/seguranca/autenticacao.guard.ts ***!
  \*************************************************/
/*! exports provided: AutenticacaoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoGuard", function() { return AutenticacaoGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicos/Autenticacao */ "tTKV");





let AutenticacaoGuard = class AutenticacaoGuard {
    constructor(autenticaService, router) {
        this.autenticaService = autenticaService;
        this.router = router;
    }
    canActivateChild(route, state) {
        return this.autenticaService.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            if (user) {
                return true;
            }
            else {
                this.router.navigate(['/login']);
                return false;
            }
        }));
    }
};
AutenticacaoGuard.ctorParameters = () => [
    { type: _servicos_Autenticacao__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AutenticacaoGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AutenticacaoGuard);



/***/ }),

/***/ "fX5e":
/*!************************************!*\
  !*** ./src/app/servicos/Membro.ts ***!
  \************************************/
/*! exports provided: MembroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembroService", function() { return MembroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let MembroService = class MembroService {
    constructor(db) {
        this.db = db;
        this.path = 'membros';
        this.membrosLista = new Array();
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        this.membroRef = this.db.list(this.path);
    }
    listar() {
        return (this.membros = this.membroRef
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((changes) => changes.map((c) => (Object.assign({ key: c.payload.key }, c.payload.val()))))));
    }
    adicionarOuAtualizar(membro) {
        if (membro.key) {
            this.membroRef.update(membro.key, membro);
        }
        else {
            this.membroRef.push(membro);
        }
    }
    deletar(key) {
        this.membroRef.remove(key);
    }
    deletarTudo() {
        this.membroRef.remove();
    }
    carregaListaMembros() {
        this.listar()
            .toPromise()
            .then((sucess) => {
            console.log(sucess);
            this.membrosLista = sucess;
        }, (error) => {
            console.log(error);
        });
        return this.membrosLista;
    }
};
MembroService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
MembroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MembroService);



/***/ }),

/***/ "je2q":
/*!******************************************!*\
  !*** ./src/app/configuracao/firebase.ts ***!
  \******************************************/
/*! exports provided: FirebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseConfig", function() { return FirebaseConfig; });
const FirebaseConfig = {
    apiKey: "AIzaSyAK-JJNsZZqDJLHrLP22WJDVYq3PgPU2o8",
    authDomain: "sgi-ibc.firebaseapp.com",
    projectId: "sgi-ibc",
    storageBucket: "sgi-ibc.appspot.com",
    messagingSenderId: "562624849712",
    appId: "1:562624849712:web:1f7b6077a378ffb82b0af5",
    measurementId: "G-CTX9C3G9YW"
};


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "tTKV":
/*!******************************************!*\
  !*** ./src/app/servicos/Autenticacao.ts ***!
  \******************************************/
/*! exports provided: AutenticacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoService", function() { return AutenticacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _modelo_Membro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modelo/Membro */ "Xsc5");


//Firebase


let AutenticacaoService = class AutenticacaoService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        //Dados Firebase
        this.afAuth.setPersistence('none');
        this.afAuth.updateCurrentUser;
        this.userData$ = this.afAuth.authState;
    }
    login(usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.afAuth.signInWithEmailAndPassword(usuario.email.trim(), usuario.senha.trim());
        });
    }
    criarUsuario(membro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let novoUsuario;
            yield this.afAuth
                .createUserWithEmailAndPassword(membro.email.trim(), membro.senha.trim())
                .then((sucesso) => {
                novoUsuario = sucesso;
            }, (erro) => {
                novoUsuario = erro;
            });
            return novoUsuario;
        });
    }
    deletarMembro(membro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.afAuth.signInWithEmailAndPassword(membro.email.trim(), membro.senha.trim()).then((sucess) => {
                sucess.user.delete();
            });
        });
    }
    resetarSenha(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.afAuth.sendPasswordResetEmail(email);
        });
    }
    sair() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signOut().then(function () {
                localStorage.clear();
            }, function (erro) {
                console.log(erro.message);
            });
        });
    }
    dadosMembro(email) {
        let membroRetorno;
        this.listaMembros.find((membro) => {
            if (membro.email === email) {
                membroRetorno = membro;
            }
        });
        return membroRetorno;
    }
    salvaUsuario(usuario, login) {
        let membro = new _modelo_Membro__WEBPACK_IMPORTED_MODULE_3__["Membro"]();
        membro.email = usuario.email;
        membro.uId = login.user.uid;
        this.salvarDadosLocalmente(membro);
    }
    verificaUsuarioExistente(membroCadastrar) {
        let resultado = false;
        this.listaMembros.find((membro) => {
            if (membro.cpf === membroCadastrar.cpf) {
                resultado = true;
            }
        });
        return resultado;
    }
    salvarDadosLocalmente(membro) {
        localStorage.setItem('usuario', JSON.stringify({
            email: membro.email,
            nome: membro.nomeCompleto,
            perfil: membro.perfil,
            uid: membro.uId
        }));
    }
    pegarDadosLocalmente() {
        return JSON.parse(localStorage.getItem('usuario'));
    }
};
AutenticacaoService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AutenticacaoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AutenticacaoService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/seguranca/autenticacao.guard */ "crdG");




const routes = [
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then((m) => m.LoginPageModule),
    },
    {
        path: 'inicio',
        loadChildren: () => Promise.all(/*! import() | pages-inicio-inicio-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-inicio-inicio-module")]).then(__webpack_require__.bind(null, /*! ./pages/inicio/inicio.module */ "DdEe")).then((m) => m.InicioPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]]
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
    },
    {
        path: 'cadastro/projeto',
        loadChildren: () => Promise.all(/*! import() | pages-cadastro-projeto-projeto-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"), __webpack_require__.e("common"), __webpack_require__.e("pages-cadastro-projeto-projeto-module")]).then(__webpack_require__.bind(null, /*! ./pages/cadastro/projeto/projeto.module */ "H+Lx")).then((m) => m.ProjetoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]]
    },
    {
        path: 'cadastro/membro',
        loadChildren: () => Promise.all(/*! import() | pages-cadastro-membro-membro-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"), __webpack_require__.e("common"), __webpack_require__.e("pages-cadastro-membro-membro-module")]).then(__webpack_require__.bind(null, /*! ./pages/cadastro/membro/membro.module */ "BOWJ")).then((m) => m.MembroPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]]
    },
    {
        path: 'cadastro/evento',
        loadChildren: () => Promise.all(/*! import() | pages-cadastro-evento-evento-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"), __webpack_require__.e("common"), __webpack_require__.e("pages-cadastro-evento-evento-module")]).then(__webpack_require__.bind(null, /*! ./pages/cadastro/evento/evento.module */ "mGz3")).then((m) => m.EventoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]]
    },
    {
        path: 'cadastro/cargo',
        loadChildren: () => Promise.all(/*! import() | pages-cadastro-cargo-cargo-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-cadastro-cargo-cargo-module")]).then(__webpack_require__.bind(null, /*! ./pages/cadastro/cargo/cargo.module */ "odze")).then((m) => m.CargoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]]
    },
    {
        path: 'lista/cargo',
        loadChildren: () => Promise.all(/*! import() | pages-listagem-cargo-cargo-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-listagem-cargo-cargo-module")]).then(__webpack_require__.bind(null, /*! ./pages/listagem/cargo/cargo.module */ "alV5")).then((m) => m.CargoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'lista/evento',
        loadChildren: () => Promise.all(/*! import() | pages-listagem-evento-evento-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("common"), __webpack_require__.e("pages-listagem-evento-evento-module")]).then(__webpack_require__.bind(null, /*! ./pages/listagem/evento/evento.module */ "oNin")).then((m) => m.EventoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'lista/membro',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-listagem-membro-membro-module */ "pages-listagem-membro-membro-module").then(__webpack_require__.bind(null, /*! ./pages/listagem/membro/membro.module */ "wIo6")).then((m) => m.MembroPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]]
    },
    {
        path: 'lista/projeto',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-listagem-projeto-projeto-module */ "pages-listagem-projeto-projeto-module").then(__webpack_require__.bind(null, /*! ./pages/listagem/projeto/projeto.module */ "kR89")).then((m) => m.ProjetoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'lista/assistido',
        loadChildren: () => Promise.all(/*! import() | pages-listagem-assistido-assistido-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("common"), __webpack_require__.e("pages-listagem-assistido-assistido-module")]).then(__webpack_require__.bind(null, /*! ./pages/listagem/assistido/assistido.module */ "N3wM")).then(m => m.AssistidoPageModule)
    },
    {
        path: 'lista/membro/congregados',
        loadChildren: () => Promise.all(/*! import() | pages-listagem-membro-congregado-congregado-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("congregado-congregado-module")]).then(__webpack_require__.bind(null, /*! ./pages/listagem/membro/congregado/congregado.module */ "Ewl5")).then(m => m.CongregadoPageModule)
    },
    {
        path: 'lista/membro/voluntarios',
        loadChildren: () => Promise.all(/*! import() | pages-listagem-membro-voluntario-voluntario-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("voluntario-voluntario-module")]).then(__webpack_require__.bind(null, /*! ./pages/listagem/membro/voluntario/voluntario.module */ "5T/8")).then(m => m.VoluntarioPageModule)
    },
    {
        path: 'resetar-senha',
        loadChildren: () => Promise.all(/*! import() | pages-resetar-senha-resetar-senha-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-resetar-senha-resetar-senha-module")]).then(__webpack_require__.bind(null, /*! ./pages/resetar-senha/resetar-senha.module */ "+vRz")).then((m) => m.ResetarSenhaPageModule),
    },
    {
        path: 'editar/membro',
        loadChildren: () => Promise.all(/*! import() | pages-edicao-membro-membro-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"), __webpack_require__.e("common"), __webpack_require__.e("pages-edicao-membro-membro-module")]).then(__webpack_require__.bind(null, /*! ./pages/edicao/membro/membro.module */ "2r89")).then(m => m.MembroPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'editar/cargo',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-edicao-cargo-cargo-module */ "pages-edicao-cargo-cargo-module").then(__webpack_require__.bind(null, /*! ./pages/edicao/cargo/cargo.module */ "uh9W")).then(m => m.CargoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'associar/cargo',
        loadChildren: () => Promise.all(/*! import() | pages-associacao-cargo-cargo-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"), __webpack_require__.e("common"), __webpack_require__.e("pages-associacao-cargo-cargo-module")]).then(__webpack_require__.bind(null, /*! ./pages/associacao/cargo/cargo.module */ "nPj0")).then(m => m.CargoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'projeto-ativo',
        loadChildren: () => Promise.all(/*! import() | pages-listagem-projeto-projeto-ativo-projeto-ativo-module */[__webpack_require__.e("common"), __webpack_require__.e("projeto-ativo-projeto-ativo-module")]).then(__webpack_require__.bind(null, /*! ./pages/listagem/projeto/projeto-ativo/projeto-ativo.module */ "IpJN")).then(m => m.ProjetoAtivoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'projeto-inativo',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-listagem-projeto-projeto-inativo-projeto-inativo-module */ "projeto-inativo-projeto-inativo-module").then(__webpack_require__.bind(null, /*! ./pages/listagem/projeto/projeto-inativo/projeto-inativo.module */ "EVOp")).then(m => m.ProjetoInativoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'editar/projeto',
        loadChildren: () => Promise.all(/*! import() | pages-edicao-projeto-projeto-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"), __webpack_require__.e("common"), __webpack_require__.e("pages-edicao-projeto-projeto-module")]).then(__webpack_require__.bind(null, /*! ./pages/edicao/projeto/projeto.module */ "EdWE")).then(m => m.ProjetoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'associar/projeto',
        loadChildren: () => Promise.all(/*! import() | pages-associacao-projeto-projeto-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"), __webpack_require__.e("pages-associacao-projeto-projeto-module")]).then(__webpack_require__.bind(null, /*! ./pages/associacao/projeto/projeto.module */ "VT+I")).then(m => m.ProjetoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'editar/evento',
        loadChildren: () => Promise.all(/*! import() | pages-edicao-evento-evento-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"), __webpack_require__.e("common"), __webpack_require__.e("pages-edicao-evento-evento-module")]).then(__webpack_require__.bind(null, /*! ./pages/edicao/evento/evento.module */ "+Msw")).then(m => m.EventoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'editar/assistido',
        loadChildren: () => Promise.all(/*! import() | pages-edicao-assistido-assistido-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"), __webpack_require__.e("common"), __webpack_require__.e("pages-edicao-assistido-assistido-module")]).then(__webpack_require__.bind(null, /*! ./pages/edicao/assistido/assistido.module */ "Ed6+")).then(m => m.AssistidoPageModule)
    },
    {
        path: 'aniversarios',
        loadChildren: () => Promise.all(/*! import() | pages-aniversario-do-mes-aniversario-do-mes-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("pages-aniversario-do-mes-aniversario-do-mes-module")]).then(__webpack_require__.bind(null, /*! ./pages/aniversario-do-mes/aniversario-do-mes.module */ "FRyj")).then(m => m.AniversarioDoMesPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'direcao-atual',
        loadChildren: () => Promise.all(/*! import() | pages-direcao-atual-direcao-atual-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-direcao-atual-direcao-atual-module")]).then(__webpack_require__.bind(null, /*! ./pages/direcao-atual/direcao-atual.module */ "ETP7")).then(m => m.DiracaoAtualPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'meu-perfil',
        loadChildren: () => Promise.all(/*! import() | pages-meu-perfil-meu-perfil-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-meu-perfil-meu-perfil-module")]).then(__webpack_require__.bind(null, /*! ./pages/meu-perfil/meu-perfil.module */ "2Imx")).then(m => m.MeuPerfilPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    },
    {
        path: 'cadastro/assistido',
        loadChildren: () => Promise.all(/*! import() | pages-cadastro-assistido-assistido-module */[__webpack_require__.e("default~congregado-congregado-module~membro-ativo-membro-ativo-module~membro-inativo-membro-inativo-~a31d8c78"), __webpack_require__.e("default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"), __webpack_require__.e("common"), __webpack_require__.e("pages-cadastro-assistido-assistido-module")]).then(__webpack_require__.bind(null, /*! ./pages/cadastro/assistido/assistido.module */ "DElZ")).then(m => m.AssistidoPageModule),
        canActivateChild: [_app_seguranca_autenticacao_guard__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoGuard"]],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #d9d9d9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZDlkOWQ5O1xufSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map