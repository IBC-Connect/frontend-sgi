(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-associacao-cargo-cargo-module"],{

/***/ "UKc/":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/associacao/cargo/cargo.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Associar cargo</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"formulario\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Cargo</ion-label>\n                        <ion-input mode=\"md\" [disabled]=\"true\" formControlName=\"nome\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-label mode=\"md\" class=\"titulo-dado-select\" position=\"stacked\">Responsável</ion-label>\n                    <ion-select [selectedText]=\"formulario.get('responsavel').value\" placeholder=\"Selecione uma opção\" formControlName=\"responsavel\" multiple=\"false\" interface=\"popover\">\n                        <ion-select-option *ngFor=\"let item of membrosAtivos\" [value]=\"item.nomeCompleto\">\n                            {{item.nomeCompleto}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data Início</ion-label>\n                        <ion-input mode=\"md\" (ionBlur)=\"calcularDataFinal($event)\" formControlName=\"dataInicio\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item class=\"row-item\">\n                        <ion-label mode=\"md\" class=\"titulo-dado\" position=\"stacked\">Data Fim</ion-label>\n                        <ion-input mode=\"md\" formControlName=\"dataFim\" maxlength=\"10\" [brmasker]=\"{mask:'00/00/0000', len:10}\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar no-padding id=\"rodape\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-button mode=\"md\" (click)=\"associar()\" [disabled]=\"formulario.invalid\" type=\"submit\" fill=\"solid\" expand=\"full\"> Associar</ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "VhTE":
/*!*********************************!*\
  !*** ./src/app/mapper/Cargo.ts ***!
  \*********************************/
/*! exports provided: CargoMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoMapper", function() { return CargoMapper; });
/* harmony import */ var _modelo_Cargo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modelo/Cargo */ "8cY0");

class CargoMapper {
    static formularioToCargo(form) {
        let cargo = new _modelo_Cargo__WEBPACK_IMPORTED_MODULE_0__["Cargo"]();
        cargo.nome = form.nome.toString().toUpperCase();
        cargo.descricao = form.descricao.toString().toUpperCase();
        cargo.key = form.key;
        if (form.responsavel)
            cargo.responsavel = form.responsavel;
        if (form.dataInicio)
            cargo.dataInicioResponsavel = form.dataInicio;
        if (form.dataFim)
            cargo.dataFimResponsavel = form.dataFim;
        return cargo;
    }
}


/***/ }),

/***/ "WMvC":
/*!********************************************************!*\
  !*** ./src/app/pages/associacao/cargo/cargo.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content,\nion-item,\nion-input,\nion-select,\n.titulo-dado,\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-family: \"Rubik\", sans-serif;\n}\n\nion-content,\nion-item,\n#rodape {\n  --background: #e6e6e6;\n}\n\nion-select,\nion-input,\n.titulo-dado,\n.titulo-dado-select-acesso,\n.titulo-dado-select,\nh2 {\n  color: #2e2e3c;\n}\n\nion-title, h2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-input {\n  text-transform: uppercase;\n  font-size: 9pt;\n}\n\nion-select {\n  font-size: 10pt;\n}\n\n#cabecalho {\n  --background: #2e2e3c;\n  color: #fff;\n}\n\n.titulo-dado {\n  font-size: 11pt;\n}\n\n.titulo-dado-select,\n.titulo-dado-select-acesso,\n.titulo-dado-batismo {\n  font-size: 8.3pt;\n}\n\n.titulo-dado-select {\n  margin-left: 1%;\n}\n\n.titulo-dado-batismo {\n  margin-left: 4%;\n}\n\nh2 {\n  font-size: 13pt;\n  font-weight: bolder;\n  margin-left: 1%;\n}\n\nspan {\n  color: #eb445a;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhcmdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUFRRyxnQ0FBQTtBQUNIOztBQUVBOzs7RUFHSSxxQkFBQTtBQUNKOztBQUVBOzs7Ozs7RUFNSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQzs7O0VBR0csZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtBQUFGIiwiZmlsZSI6ImNhcmdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LCAgXG5pb24taXRlbSwgXG5pb24taW5wdXQsIFxuaW9uLXNlbGVjdCxcbi50aXR1bG8tZGFkbyxcbi50aXR1bG8tZGFkby1zZWxlY3QsXG4udGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcbi50aXR1bG8tZGFkby1iYXRpc21vIHtcbiAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tY29udGVudCwgXG5pb24taXRlbSxcbiNyb2RhcGUge1xuICAgIC0tYmFja2dyb3VuZDogI2U2ZTZlNjtcbn1cblxuaW9uLXNlbGVjdCxcbmlvbi1pbnB1dCxcbi50aXR1bG8tZGFkbyxcbi50aXR1bG8tZGFkby1zZWxlY3QtYWNlc3NvLFxuLnRpdHVsby1kYWRvLXNlbGVjdCxcbmgyIHtcbiAgICBjb2xvcjojMmUyZTNjO1xufSBcblxuaW9uLXRpdGxlLCBoMntcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1pbnB1dHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogOXB0O1xuIH1cblxuaW9uLXNlbGVjdHtcbiAgICBmb250LXNpemU6IDEwcHQ7XG59XG5cbiNjYWJlY2FsaG97XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmUyZTNjOyBcbiAgICBjb2xvcjogI2ZmZjtcbn1cbiAgICBcbi50aXR1bG8tZGFkb3tcbiAgICBmb250LXNpemU6IDExcHQ7XG4gfVxuXG4gLnRpdHVsby1kYWRvLXNlbGVjdCxcbiAudGl0dWxvLWRhZG8tc2VsZWN0LWFjZXNzbyxcbiAudGl0dWxvLWRhZG8tYmF0aXNtb3tcbiAgICBmb250LXNpemU6IDguM3B0O1xuIH1cblxuLnRpdHVsby1kYWRvLXNlbGVjdHtcbiAgICBtYXJnaW4tbGVmdDogMSU7ICBcbn1cblxuLnRpdHVsby1kYWRvLWJhdGlzbW97XG4gICAgbWFyZ2luLWxlZnQ6IDQlOyAgXG59XG4gXG5oMiB7XG4gICAgZm9udC1zaXplOjEzcHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tbGVmdDoxJTtcbn1cblxuc3BhbiB7XG4gICAgY29sb3I6ICNlYjQ0NWE7XG59XG5cbjo6bmctZGVlcCAubXljb21wb25lbnQtd2lkZXItcG9wb3Zlclxue1xuICAtLXdpZHRoOiA5NSU7XG4gIC0tbWF4LXdpZHRoOiA2MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "d15I":
/*!****************************************************************!*\
  !*** ./src/app/pages/associacao/cargo/cargo-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CargoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoPageRoutingModule", function() { return CargoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cargo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cargo.page */ "nU4M");




const routes = [
    {
        path: '',
        component: _cargo_page__WEBPACK_IMPORTED_MODULE_3__["CargoPage"]
    }
];
let CargoPageRoutingModule = class CargoPageRoutingModule {
};
CargoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CargoPageRoutingModule);



/***/ }),

/***/ "nPj0":
/*!********************************************************!*\
  !*** ./src/app/pages/associacao/cargo/cargo.module.ts ***!
  \********************************************************/
/*! exports provided: CargoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoPageModule", function() { return CargoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cargo-routing.module */ "d15I");
/* harmony import */ var _cargo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cargo.page */ "nU4M");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "/oCc");








let CargoPageModule = class CargoPageModule {
};
CargoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cargo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CargoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"],
        ],
        declarations: [_cargo_page__WEBPACK_IMPORTED_MODULE_6__["CargoPage"]]
    })
], CargoPageModule);



/***/ }),

/***/ "nU4M":
/*!******************************************************!*\
  !*** ./src/app/pages/associacao/cargo/cargo.page.ts ***!
  \******************************************************/
/*! exports provided: CargoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoPage", function() { return CargoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cargo.page.html */ "UKc/");
/* harmony import */ var _cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cargo.page.scss */ "WMvC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_mapper_Cargo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/mapper/Cargo */ "VhTE");
/* harmony import */ var src_app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicos/Cargo */ "EhKG");
/* harmony import */ var src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicos/Membro */ "fX5e");
/* harmony import */ var src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/util/DateUtil */ "JM5f");
/* harmony import */ var src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/util/MensagensUtil */ "sZxV");












let CargoPage = class CargoPage {
    constructor(formulador, membroService, aviso, cargoService, router) {
        this.formulador = formulador;
        this.membroService = membroService;
        this.aviso = aviso;
        this.cargoService = cargoService;
        this.router = router;
        this.mensagens = new src_app_util_MensagensUtil__WEBPACK_IMPORTED_MODULE_11__["MensagensUtil"](this.aviso);
        const nav = this.router.getCurrentNavigation();
        this.cargo = nav.extras.state.content;
        this.ajustarDatas();
        this.inicializar();
    }
    inicializar() {
        this.listaMembrosObservable = this.membroService.listar();
        this.listaMembrosObservable.subscribe((response) => {
            this.membrosAtivos = response;
            this.membrosAtivos = this.membrosAtivos.filter((m) => m.situacao === 'Ativo');
            this.membrosAtivos.sort((a, b) => a.nomeCompleto > b.nomeCompleto
                ? 1
                : b.nomeCompleto > a.nomeCompleto
                    ? -1
                    : 0);
        });
        this.criarFormulario();
        this.formulario.controls['responsavel'].setValue(this.cargo.responsavel);
    }
    criarFormulario() {
        this.formulario = this.formulador.group({
            key: [this.cargo.key, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            responsavel: [this.cargo.responsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataInicio: [this.cargo.dataInicioResponsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataFim: [this.cargo.dataFimResponsavel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            descricao: [this.cargo.descricao],
            nome: [this.cargo.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ajustarDatas() {
        if (this.cargo.dataInicioResponsavel)
            this.cargo.dataInicioResponsavel = this.cargo.dataInicioResponsavel.includes('/') ? this.cargo.dataInicioResponsavel : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.cargo.dataInicioResponsavel);
        if (this.cargo.dataFimResponsavel)
            this.cargo.dataFimResponsavel = this.cargo.dataFimResponsavel.includes('/') ? this.cargo.dataFimResponsavel : src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].dateFormatterBrazil(this.cargo.dataFimResponsavel);
    }
    associar() {
        if (this.formulario.value) {
            this.isDataFimEnable(true);
            this.formulario.controls['dataFim'].enable();
            if (this.formulario.value.dataFim && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.dataFim)) {
                this.mensagens.mensagemError("A data informada no campo 'Data Fim' não é válida.");
            }
            else if (this.formulario.value.dataInicio && !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(this.formulario.value.dataInicio)) {
                this.mensagens.mensagemError("A data informada no campo 'Data Início' não é válida.");
            }
            else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataFutura(this.formulario.value.dataInicio)) {
                this.mensagens.mensagemError("Não é permitido data futura para o campo 'Data Início'");
            }
            else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDataDoisMaiorDataUm(this.formulario.value.dataInicio, this.formulario.value.dataFim) &&
                !src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDatasIguais(this.formulario.value.dataFim, this.formulario.value.dataInicio)) {
                this.mensagens.mensagemError("A 'Data Início' não pode ser maior que a 'Data Fim'.");
            }
            else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].isDatasIguais(this.formulario.value.dataInicio, this.formulario.value.dataFim)) {
                this.mensagens.mensagemError("As datas 'Data Início' e 'Data Fim' não podem ser iguais.");
            }
            else if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].numeroDiasEntreDuasDatas(this.formulario.value.dataInicio, this.formulario.value.dataFim) >= 731) {
                this.mensagens.mensagemError('O responsável pode assumir um cargo com duração máxima de dois anos.');
            }
            else {
                this.cargo = src_app_mapper_Cargo__WEBPACK_IMPORTED_MODULE_7__["CargoMapper"].formularioToCargo(this.formulario.value);
                this.cargoService.adicionarOuAtualizar(this.cargo);
                this.mensagens.mensagemSucesso('Associação realizada com sucesso!');
            }
            this.isDataFimEnable(false);
        }
    }
    calcularDataFinal(event) {
        let dataInicial = event.target.value;
        if (src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].verificarIsDataValida(dataInicial)) {
            this.formulario.controls['dataFim'].setValue(src_app_util_DateUtil__WEBPACK_IMPORTED_MODULE_10__["DateUtil"].calcularData(dataInicial, 2));
            this.isDataFimEnable(false);
        }
    }
    isDataFimEnable(valor) {
        if (valor)
            this.formulario.controls['dataFim'].enable();
        else
            this.formulario.controls['dataFim'].disable();
    }
};
CargoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_servicos_Membro__WEBPACK_IMPORTED_MODULE_9__["MembroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_servicos_Cargo__WEBPACK_IMPORTED_MODULE_8__["CargoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CargoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cargo',
        template: _raw_loader_cargo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cargo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CargoPage);



/***/ })

}]);
//# sourceMappingURL=pages-associacao-cargo-cargo-module-es2015.js.map