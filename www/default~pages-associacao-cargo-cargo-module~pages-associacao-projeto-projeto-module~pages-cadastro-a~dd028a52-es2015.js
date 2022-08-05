(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52"],{

/***/ "/oCc":
/*!*********************************************************!*\
  !*** ./node_modules/br-mask/__ivy_ngcc__/dist/index.js ***!
  \*********************************************************/
/*! exports provided: BrMaskerModule, BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ "oXPb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskerModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_0__["BrMaskerModule"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ "BkCP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["BrMaskModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["BrMaskDirective"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "BkCP":
/*!********************************************************************!*\
  !*** ./node_modules/br-mask/__ivy_ngcc__/dist/directives/index.js ***!
  \********************************************************************/
/*! exports provided: BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _br_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./br-mask */ "Byeq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return _br_mask__WEBPACK_IMPORTED_MODULE_0__["BrMaskModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return _br_mask__WEBPACK_IMPORTED_MODULE_0__["BrMaskDirective"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Byeq":
/*!**********************************************************************!*\
  !*** ./node_modules/br-mask/__ivy_ngcc__/dist/directives/br-mask.js ***!
  \**********************************************************************/
/*! exports provided: BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return BrMaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return BrMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




var BrMaskModel = (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
        this.moneyInitHasInt = true;
    }
    return BrMaskModel;
}());

var BrMaskDirective = (function () {
    function BrMaskDirective(controlContainer, elementRef) {
        this.controlContainer = controlContainer;
        this.elementRef = elementRef;
        this.brmasker = new BrMaskModel();
    }
    /**
    * Event key up in directive
    * @author Antonio Marques <tmowna@gmail.com>
    * @constant {string} value
    */
    BrMaskDirective.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.setValueInFormControl(value);
    };
    BrMaskDirective.prototype.onNgModelChange = function (e) {
        var value = this.returnValue(e);
        if (value) {
            this.setValueInFormControl(value, false);
        }
    };
    BrMaskDirective.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (this.brmasker.moneyInitHasInt === undefined) {
            this.brmasker.moneyInitHasInt = true;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
        if (this.controlContainer) {
            if (this.formControlName) {
                this.brmasker.form = this.controlContainer.control.get(this.formControlName);
            }
            else {
                console.warn('Missing FormControlName directive from host element of the component');
            }
        }
        else {
            console.warn('Can\'t find parent FormGroup directive');
        }
        this.initialValue();
    };
    BrMaskDirective.prototype.initialValue = function () {
        var value = this.returnValue(this.elementRef.nativeElement.value);
        this.setValueInFormControl(value);
    };
    /**
    * The verification of form
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.verifyFormControl()</caption>
    * @returns {boolean} return a boolean value
    */
    BrMaskDirective.prototype.verifyFormControl = function () {
        if (this.brmasker.form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
    * Set Value em FormControl
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.setValueInFormControl(string)</caption>
    */
    BrMaskDirective.prototype.setValueInFormControl = function (value, emitViewToModelChange) {
        if (!this.verifyFormControl()) {
            this.elementRef.nativeElement.value = value;
            return;
        }
        this.brmasker.form.setValue(value, { emitViewToModelChange: emitViewToModelChange });
        this.brmasker.form.updateValueAndValidity();
    };
    /**
    * For initial value
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.setValueInFormControl(string, model)</caption>
    * @param {string} value
    * @param {BrMaskModel} config
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.phoneNotDDD) {
            return this.phoneNotDDDMask(value);
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (this.brmasker.userCaracters) {
            return this.usingSpecialCharacters(value, this.brmasker.mask, this.brmasker.len);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    /**
    * For initial value percent
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValuePercent(string)</caption>
    * @param {string} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    /**
    * For initial value person
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValuePerson(string)</caption>
    * @param {string} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    /**
    * For initial value money
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValueMoney(string, model)</caption>
    * @param {string} value
    * @param {BrMaskModel} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        return this.moneyMask(value, config);
    };
    /**
    * Here is one of the main functions
    * responsible for identifying the type of mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.returnValue(string)</caption>
    * @param {string} value
    * @returns {string} mask value
    */
    BrMaskDirective.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var formValue = value;
            if (this.brmasker.type === 'alfa') {
                formValue = formValue.replace(/\d/gi, '');
            }
            if (this.brmasker.type === 'num') {
                formValue = formValue.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                return this.moneyMask(this.onInput(formValue), this.brmasker);
            }
            if (this.brmasker.phone) {
                return this.phoneMask(formValue);
            }
            if (this.brmasker.phoneNotDDD) {
                return this.phoneNotDDDMask(formValue);
            }
            if (this.brmasker.person) {
                return this.peapollMask(formValue);
            }
            if (this.brmasker.percent) {
                return this.percentMask(formValue);
            }
            if (this.brmasker.numberAndTousand) {
                return this.thousand(formValue);
            }
            if (this.brmasker.userCaracters) {
                return this.usingSpecialCharacters(formValue, this.brmasker.mask, this.brmasker.len);
            }
            return this.onInput(formValue);
        }
        else {
            return '';
        }
    };
    BrMaskDirective.prototype.applyCpfMask = function (formValue) {
        formValue = formValue.replace(/\D/gi, '');
        formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
        formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
        formValue = formValue.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        return formValue;
    };
    BrMaskDirective.prototype.applyCnpjMask = function (formValue) {
        formValue = formValue.replace(/\D/gi, '');
        formValue = formValue.replace(/(\d{2})(\d)/gi, '$1.$2');
        formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
        formValue = formValue.replace(/(\d{3})(\d)/gi, '$1/$2');
        formValue = formValue.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
        formValue = formValue.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        return formValue;
    };
    /**
    * Here we have a mask for percentage
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.percentMask(string)</caption>
    * @param {string} value
    * @returns {string} string percentage
    */
    BrMaskDirective.prototype.percentMask = function (value) {
        var tmp = value;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    /**
    * Here we have a mask for phone in 8 digits or 9 digits
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.phoneMask(string)</caption>
    * @param {string} value
    * @returns {string} string phone
    */
    BrMaskDirective.prototype.phoneMask = function (value) {
        var formValue = value;
        if (formValue.length > 14 || formValue.length === 11) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
            formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for phone in 8 digits or 9 digits not ddd
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.phoneMask(string)</caption>
    * @param {string} value
    * @returns {string} string phone
    */
    BrMaskDirective.prototype.phoneNotDDDMask = function (value) {
        var formValue = value;
        if (formValue.length > 9) {
            this.brmasker.len = 10;
            this.brmasker.mask = '99999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 9;
            this.brmasker.mask = '9999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for peapoll ID
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.peapollMask(string)</caption>
    * @param {string} value
    * @returns {string} string ID
    */
    BrMaskDirective.prototype.peapollMask = function (value) {
        var formValue = value;
        if (formValue.length >= 14) {
            if (formValue.length === 14 && formValue.indexOf('-') > 0) {
                this.brmasker.len = 14;
                this.brmasker.mask = '999.999.999-99';
                formValue = this.applyCpfMask(formValue);
            }
            else {
                this.brmasker.len = 18;
                this.brmasker.mask = '99.999.999/9999-99';
                formValue = this.applyCnpjMask(formValue);
            }
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            formValue = this.applyCpfMask(formValue);
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for money mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.moneyMask(string)</caption>
    * @param {string} value
    * @param {BrMaskModel} config
    * @returns {string} string money
    */
    BrMaskDirective.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp('([0-9]{' + decimal + '})$', 'g'), config.decimalCaracter + '$1');
        if (value.length === 1 && !this.brmasker.moneyInitHasInt) {
            var dec = Array(decimal - 1).fill(0);
            return "0" + config.decimalCaracter + dec.join('') + value;
        }
        if (value.length === decimal + 1) {
            return '0' + value;
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1);
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            var valueOne = "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)";
            value = value.replace(new RegExp("" + valueOne, "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            var valueTwo = "([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)";
            value = value.replace(new RegExp("" + valueTwo, "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    /**
    * Responsible for returning the empty mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.onInput(string)</caption>
    * @param {string} value
    * @returns {string} value
    */
    BrMaskDirective.prototype.onInput = function (value) {
        return this.formatField(value, this.brmasker.mask, this.brmasker.len);
    };
    /**
    * Responsible for special characters
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.usingSpecialCharacters(string)</caption>
    * @param {string} field
    * @param {string} mask
    * @param {number} size
    * @returns {string} value
    */
    BrMaskDirective.prototype.usingSpecialCharacters = function (field, mask, size) {
        if (!size) {
            size = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = field.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var sizeMascara = campoSoNumeros.length;
        for (var i = 0; i < sizeMascara; i++) {
            if (i < size) {
                boleanoMascara = ((mask.charAt(i) === '-') || (mask.charAt(i) === '.') || (mask.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += mask.charAt(i);
                    sizeMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    /**
    * Responsible formating number
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.thousand(string)</caption>
    * @param {string} value
    */
    BrMaskDirective.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        }
    };
    /**
    * Responsible for removing special characters
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.formatField(string)</caption>
    * @param {string} field
    * @param {string} mask
    * @param {number} size
    * @returns {string} value
    */
    BrMaskDirective.prototype.formatField = function (field, mask, size) {
        if (!size) {
            size = 99999999999;
        }
        var boleanoMascara;
        var exp = /\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = field.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < size) {
                boleanoMascara = (mask.charAt(i) === '-') || (mask.charAt(i) === '.') || (mask.charAt(i) === '/');
                boleanoMascara = boleanoMascara || mask.charAt(i) === '_';
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '(') || (mask.charAt(i) === ')') || (mask.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === ',') || (mask.charAt(i) === '*') || (mask.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '@') || (mask.charAt(i) === '#') || (mask.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '$') || (mask.charAt(i) === '&') || (mask.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += mask.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
BrMaskDirective.ɵfac = function BrMaskDirective_Factory(t) { return new (t || BrMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BrMaskDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BrMaskDirective, selectors: [["", "brmasker", ""]], hostBindings: function BrMaskDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BrMaskDirective_keyup_HostBindingHandler($event) { return ctx.inputKeyup($event); })("ngModelChange", function BrMaskDirective_ngModelChange_HostBindingHandler($event) { return ctx.onNgModelChange($event); });
    } }, inputs: { brmasker: "brmasker", formControlName: "formControlName" } });
BrMaskDirective.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrMaskDirective, factory: function (t) { return BrMaskDirective.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrMaskDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[brmasker]'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { brmasker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputKeyup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
        }], onNgModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['ngModelChange', ['$event']]
        }], formControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return BrMaskDirective;
}());

/** @nocollapse */
BrMaskDirective.ctorParameters = function () { return [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
BrMaskDirective.propDecorators = {
    'brmasker': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'formControlName': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'inputKeyup': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] },],
    'onNgModelChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['ngModelChange', ['$event'],] },],
};

//# sourceMappingURL=br-mask.js.map

/***/ }),

/***/ "JM5f":
/*!**********************************!*\
  !*** ./src/app/util/DateUtil.ts ***!
  \**********************************/
/*! exports provided: DateUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtil", function() { return DateUtil; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

class DateUtil {
    constructor() {
        moment__WEBPACK_IMPORTED_MODULE_0__["locale"]('pt-br');
    }
    static isDataDoisMaiorDataUm(dataUm, dataDois) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(dataDois)).isBefore(this.dateFormatterAmerica(dataUm));
    }
    static isDataFutura(data) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(data)).isAfter(this.dateFormatterAmerica(new Date().toLocaleDateString()));
    }
    static isDatasIguais(dataUm, dataDois) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(dataDois)).isSame(this.dateFormatterAmerica(dataUm));
    }
    static dateFormatterAmerica(data) {
        return data.split('/').reverse().join('-');
    }
    static dateFormatterBrazil(data) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(data).format('DD/MM/YYYY');
    }
    static numeroDiasEntreDuasDatas(dataUm, dataDois) {
        const dataInicio = moment__WEBPACK_IMPORTED_MODULE_0__(dataUm);
        const dataFim = moment__WEBPACK_IMPORTED_MODULE_0__(dataDois);
        const numeroDias = moment__WEBPACK_IMPORTED_MODULE_0__["duration"](dataFim.diff(dataInicio));
        return numeroDias.asDays();
    }
    static verificarIsDataValida(data) {
        const dataValida = moment__WEBPACK_IMPORTED_MODULE_0__(this.dateFormatterAmerica(data));
        return dataValida.isValid();
    }
    static calcularData(data, dias) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(data).add(dias, 'year').subtract(1, 'days').format('YYYY-MM-DD');
    }
    static verificarIntervaloHora(horaI, horaF) {
        let horaInicial = Number(horaI.substring(0, 2)) < 12 ? moment__WEBPACK_IMPORTED_MODULE_0__(horaI.concat('am'), 'hh:mma') : moment__WEBPACK_IMPORTED_MODULE_0__(horaI.concat('pm'), 'hh:mmp');
        let horaFinal = Number(horaF.substring(0, 2)) < 12 ? moment__WEBPACK_IMPORTED_MODULE_0__(horaF.concat('am'), 'hh:mma') : moment__WEBPACK_IMPORTED_MODULE_0__(horaF.concat('pm'), 'hh:mmp');
        return horaInicial.isBefore(horaFinal);
    }
    static isIdadeMaiorDozeAnos(dataNasc) {
        let idade = moment__WEBPACK_IMPORTED_MODULE_0__().diff(this.dateFormatterAmerica(dataNasc), 'years');
        return idade >= 12;
    }
}


/***/ }),

/***/ "oXPb":
/*!**************************************************************!*\
  !*** ./node_modules/br-mask/__ivy_ngcc__/dist/app.module.js ***!
  \**************************************************************/
/*! exports provided: BrMaskerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskerModule", function() { return BrMaskerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/br-mask */ "Byeq");




var BrMaskerModule = (function () {
    function BrMaskerModule() {
    }
BrMaskerModule.ɵfac = function BrMaskerModule_Factory(t) { return new (t || BrMaskerModule)(); };
BrMaskerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BrMaskerModule });
BrMaskerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BrMaskerModule, { declarations: function () { return [_directives_br_mask__WEBPACK_IMPORTED_MODULE_2__["BrMaskDirective"]]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [_directives_br_mask__WEBPACK_IMPORTED_MODULE_2__["BrMaskDirective"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrMaskerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__["BrMaskDirective"]
                ],
                exports: [
                    _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__["BrMaskDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], function () { return []; }, null); })();
    return BrMaskerModule;
}());

/** @nocollapse */
BrMaskerModule.ctorParameters = function () { return []; };

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "sZxV":
/*!***************************************!*\
  !*** ./src/app/util/MensagensUtil.ts ***!
  \***************************************/
/*! exports provided: MensagensUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagensUtil", function() { return MensagensUtil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class MensagensUtil {
    constructor(aviso) {
        this.aviso = aviso;
    }
    ;
    mensagemSucesso(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const exibirMensagem = this.aviso.create({ id: 'sucesso', position: 'top', message: message, duration: 3000, color: 'success' });
            (yield exibirMensagem).present();
        });
    }
    mensagemError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const exibirMensagem = this.aviso.create({ id: 'error', position: 'top', message: error, duration: 3000, color: 'danger' });
            (yield exibirMensagem).present();
        });
    }
    mensagemAlerta(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const exibirMensagem = this.aviso.create({ id: 'alerta', position: 'top', message: message, duration: 3000, color: 'warning' });
            (yield exibirMensagem).present();
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=default~pages-associacao-cargo-cargo-module~pages-associacao-projeto-projeto-module~pages-cadastro-a~dd028a52-es2015.js.map