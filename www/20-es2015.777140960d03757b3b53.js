(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/oCc":function(t,e,a){"use strict";a.d(e,"b",function(){return c}),a.d(e,"a",function(){return s});var r=a("ofXK"),o=a("3Pt+"),i=a("fXoL"),n=function(){return function(){this.type="alfa",this.decimal=2,this.decimalCaracter=",",this.userCaracters=!1,this.numberAndTousand=!1,this.moneyInitHasInt=!0}}(),s=function(){function t(t,e){this.controlContainer=t,this.elementRef=e,this.brmasker=new n}return t.prototype.inputKeyup=function(t){var e=this.returnValue(t.target.value);this.setValueInFormControl(e)},t.prototype.onNgModelChange=function(t){var e=this.returnValue(t);e&&this.setValueInFormControl(e,!1)},t.prototype.ngOnInit=function(){this.brmasker.type||(this.brmasker.type="all"),this.brmasker.decimal||(this.brmasker.decimal=2),void 0===this.brmasker.moneyInitHasInt&&(this.brmasker.moneyInitHasInt=!0),this.brmasker.decimalCaracter||(this.brmasker.decimalCaracter=","),this.controlContainer?this.formControlName?this.brmasker.form=this.controlContainer.control.get(this.formControlName):console.warn("Missing FormControlName directive from host element of the component"):console.warn("Can't find parent FormGroup directive"),this.initialValue()},t.prototype.initialValue=function(){var t=this.returnValue(this.elementRef.nativeElement.value);this.setValueInFormControl(t)},t.prototype.verifyFormControl=function(){return this.brmasker.form instanceof o.b},t.prototype.setValueInFormControl=function(t,e){this.verifyFormControl()?(this.brmasker.form.setValue(t,{emitViewToModelChange:e}),this.brmasker.form.updateValueAndValidity()):this.elementRef.nativeElement.value=t},t.prototype.writeCreateValue=function(t,e){return void 0===e&&(e=new n),t&&e.phone?t.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi,"$1 ($2) $3-$4"):t&&e.phoneNotDDD?this.phoneNotDDDMask(t):t&&e.money?this.writeValueMoney(t,e):t&&e.person?this.writeValuePerson(t):t&&e.percent?this.writeValuePercent(t):this.brmasker.userCaracters?this.usingSpecialCharacters(t,this.brmasker.mask,this.brmasker.len):t&&e.mask?(this.brmasker.mask=e.mask,e.len&&(this.brmasker.len=e.len),this.onInput(t)):t},t.prototype.writeValuePercent=function(t){return t.replace(/\D/gi,""),t.replace(/%/gi,""),t.replace(/([0-9]{0})$/gi,"%$1")},t.prototype.writeValuePerson=function(t){return t.length<=11?t.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi,"$1.$2.$3-$4"):t.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi,"$1.$2.$3/$4-$5")},t.prototype.writeValueMoney=function(t,e){return void 0===e&&(e=new n),this.moneyMask(t,e)},t.prototype.returnValue=function(t){if(this.brmasker.mask||(this.brmasker.mask=""),t){var e=t;return"alfa"===this.brmasker.type&&(e=e.replace(/\d/gi,"")),"num"===this.brmasker.type&&(e=e.replace(/\D/gi,"")),this.brmasker.money?this.moneyMask(this.onInput(e),this.brmasker):this.brmasker.phone?this.phoneMask(e):this.brmasker.phoneNotDDD?this.phoneNotDDDMask(e):this.brmasker.person?this.peapollMask(e):this.brmasker.percent?this.percentMask(e):this.brmasker.numberAndTousand?this.thousand(e):this.brmasker.userCaracters?this.usingSpecialCharacters(e,this.brmasker.mask,this.brmasker.len):this.onInput(e)}return""},t.prototype.applyCpfMask=function(t){return(t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d{1,2})$/gi,"$1-$2")},t.prototype.applyCnpjMask=function(t){return(t=(t=(t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1/$2")).replace(/(\d{4})(\d{1,4})$/gi,"$1-$2")).replace(/(\d{2})(\d{1,2})$/gi,"$1$2")},t.prototype.percentMask=function(t){return t.replace(/\D/gi,"").replace(/%/gi,"").replace(/([0-9]{0})$/gi,"%$1")},t.prototype.phoneMask=function(t){var e=t;return e.length>14||11===e.length?(this.brmasker.len=15,this.brmasker.mask="(99) 99999-9999",e=(e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1 $2")).replace(/(\d{5})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")):(this.brmasker.len=14,this.brmasker.mask="(99) 9999-9999",e=(e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1 $2")).replace(/(\d{4})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")),this.onInput(e)},t.prototype.phoneNotDDDMask=function(t){var e=t;return e.length>9?(this.brmasker.len=10,this.brmasker.mask="99999-9999",e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{5})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")):(this.brmasker.len=9,this.brmasker.mask="9999-9999",e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{4})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")),this.onInput(e)},t.prototype.peapollMask=function(t){var e=t;return e.length>=14?14===e.length&&e.indexOf("-")>0?(this.brmasker.len=14,this.brmasker.mask="999.999.999-99",e=this.applyCpfMask(e)):(this.brmasker.len=18,this.brmasker.mask="99.999.999/9999-99",e=this.applyCnpjMask(e)):(this.brmasker.len=14,this.brmasker.mask="999.999.999-99",e=this.applyCpfMask(e)),this.onInput(e)},t.prototype.moneyMask=function(t,e){var a=e.decimal||this.brmasker.decimal;if(1===(t=t.replace(/\D/gi,"").replace(new RegExp("([0-9]{"+a+"})$","g"),e.decimalCaracter+"$1")).length&&!this.brmasker.moneyInitHasInt){var r=Array(a-1).fill(0);return"0"+e.decimalCaracter+r.join("")+t}return t.length===a+1?"0"+t:t.length>a+2&&"0"===t.charAt(0)?t.substr(1):(e.thousand&&t.length>Number(4)+Number(e.decimal)&&(t=t.replace(new RegExp("([0-9]{3})"+e.decimalCaracter+"([0-9]{"+e.decimal+"}$)","g"),e.thousand+"$1"+e.decimalCaracter+"$2")),e.thousand&&t.length>Number(8)+Number(e.decimal)&&(t=t.replace(new RegExp("([0-9]{3})"+e.thousand+"([0-9]{3})"+e.decimalCaracter+"([0-9]{"+e.decimal+"}$)","g"),e.thousand+"$1"+e.thousand+"$2"+e.decimalCaracter+"$3")),t)},t.prototype.onInput=function(t){return this.formatField(t,this.brmasker.mask,this.brmasker.len)},t.prototype.usingSpecialCharacters=function(t,e,a){a||(a=99999999999);for(var r=t.toString().replace(/\-|\.|\,| /gi,""),o=0,i="",n=r.length,s=0;s<n;s++)s<a&&("-"===e.charAt(s)||"."===e.charAt(s)||","===e.charAt(s)?(i+=e.charAt(s),n++):(i+=r.charAt(o),o++));return i},t.prototype.thousand=function(t){var e=t.replace(/\D/gi,"").toString().split("").reverse().join("").match(/\d{1,3}/g);if(e)return e.join(""+(this.brmasker.thousand||".")).split("").reverse().join("")},t.prototype.formatField=function(t,e,a){a||(a=99999999999);for(var r=t.toString().replace(/\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi,""),o=0,i="",n=r.length,s=0;s<n;s++)s<a&&("-"===e.charAt(s)||"."===e.charAt(s)||"/"===e.charAt(s)||"_"===e.charAt(s)||"("===e.charAt(s)||")"===e.charAt(s)||" "===e.charAt(s)||","===e.charAt(s)||"*"===e.charAt(s)||"+"===e.charAt(s)||"@"===e.charAt(s)||"#"===e.charAt(s)||":"===e.charAt(s)||"$"===e.charAt(s)||"&"===e.charAt(s)||"%"===e.charAt(s)?(i+=e.charAt(s),n++):(i+=r.charAt(o),o++));return i},t.\u0275fac=function(e){return new(e||t)(i.Lb(o.d,13),i.Lb(i.m))},t.\u0275dir=i.Gb({type:t,selectors:[["","brmasker",""]],hostBindings:function(t,e){1&t&&i.Wb("keyup",function(t){return e.inputKeyup(t)})("ngModelChange",function(t){return e.onNgModelChange(t)})},inputs:{brmasker:"brmasker",formControlName:"formControlName"}}),t.\u0275prov=i.Hb({token:t,factory:function(e){return t.\u0275fac(e)}}),t}(),c=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({imports:[[r.c]]}),t}()},JM5f:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var r=a("wd/R");class o{constructor(){r.locale("pt-br")}static isDataDoisMaiorDataUm(t,e){return r(this.dateFormatterAmerica(e)).isBefore(this.dateFormatterAmerica(t))}static isDataFutura(t){return r(this.dateFormatterAmerica(t)).isAfter(this.dateFormatterAmerica((new Date).toLocaleDateString()))}static isDatasIguais(t,e){return r(this.dateFormatterAmerica(e)).isSame(this.dateFormatterAmerica(t))}static dateFormatterAmerica(t){return t.split("/").reverse().join("-")}static dateFormatterBrazil(t){return r(t).format("DD/MM/YYYY")}static numeroDiasEntreDuasDatas(t,e){const a=r(t),o=r(e);return r.duration(o.diff(a)).asDays()}static verificarIsDataValida(t){return r(this.dateFormatterAmerica(t)).isValid()}static calcularData(t,e){return r(t).add(e,"year").subtract(1,"days").format("YYYY-MM-DD")}static verificarIntervaloHora(t,e){let a=Number(t.substring(0,2))<12?r(t.concat("am"),"hh:mma"):r(t.concat("pm"),"hh:mmp"),o=Number(e.substring(0,2))<12?r(e.concat("am"),"hh:mma"):r(e.concat("pm"),"hh:mmp");return a.isBefore(o)}static isIdadeMaiorDozeAnos(t){return r().diff(this.dateFormatterAmerica(t),"years")>=12}}},nPj0:function(t,e,a){"use strict";a.r(e),a.d(e,"CargoPageModule",function(){return v});var r=a("ofXK"),o=a("3Pt+"),i=a("TEn/"),n=a("tyNb"),s=a("8cY0"),c=a("JM5f"),l=a("sZxV"),m=a("fXoL"),u=a("fX5e"),d=a("EhKG"),h=a("/oCc");function p(t,e){if(1&t&&(m.Ob(0,"ion-select-option",16),m.ic(1),m.Nb()),2&t){const t=e.$implicit;m.bc("value",t.nomeCompleto),m.Bb(1),m.kc(" ",t.nomeCompleto," ")}}const b=function(){return{mask:"00/00/0000",len:10}},g=[{path:"",component:(()=>{class t{constructor(t,e,a,r,o){this.formulador=t,this.membroService=e,this.aviso=a,this.cargoService=r,this.router=o,this.mensagens=new l.a(this.aviso);const i=this.router.getCurrentNavigation();this.cargo=i.extras.state.content,this.ajustarDatas(),this.inicializar()}inicializar(){this.listaMembrosObservable=this.membroService.listar(),this.listaMembrosObservable.subscribe(t=>{this.membrosAtivos=t,this.membrosAtivos=this.membrosAtivos.filter(t=>"Ativo"===t.situacao),this.membrosAtivos.sort((t,e)=>t.nomeCompleto>e.nomeCompleto?1:e.nomeCompleto>t.nomeCompleto?-1:0)}),this.criarFormulario(),this.formulario.controls.responsavel.setValue(this.cargo.responsavel)}criarFormulario(){this.formulario=this.formulador.group({key:[this.cargo.key,o.n.required],responsavel:[this.cargo.responsavel,o.n.required],dataInicio:[this.cargo.dataInicioResponsavel,o.n.required],dataFim:[this.cargo.dataFimResponsavel,o.n.required],descricao:[this.cargo.descricao],nome:[this.cargo.nome,o.n.required]})}ajustarDatas(){this.cargo.dataInicioResponsavel&&(this.cargo.dataInicioResponsavel=this.cargo.dataInicioResponsavel.includes("/")?this.cargo.dataInicioResponsavel:c.a.dateFormatterBrazil(this.cargo.dataInicioResponsavel)),this.cargo.dataFimResponsavel&&(this.cargo.dataFimResponsavel=this.cargo.dataFimResponsavel.includes("/")?this.cargo.dataFimResponsavel:c.a.dateFormatterBrazil(this.cargo.dataFimResponsavel))}associar(){this.formulario.value&&(this.isDataFimEnable(!0),this.formulario.controls.dataFim.enable(),this.formulario.value.dataFim&&!c.a.verificarIsDataValida(this.formulario.value.dataFim)?this.mensagens.mensagemError("A data informada no campo 'Data Fim' n\xe3o \xe9 v\xe1lida."):this.formulario.value.dataInicio&&!c.a.verificarIsDataValida(this.formulario.value.dataInicio)?this.mensagens.mensagemError("A data informada no campo 'Data In\xedcio' n\xe3o \xe9 v\xe1lida."):c.a.isDataFutura(this.formulario.value.dataInicio)?this.mensagens.mensagemError("N\xe3o \xe9 permitido data futura para o campo 'Data In\xedcio'"):c.a.isDataDoisMaiorDataUm(this.formulario.value.dataInicio,this.formulario.value.dataFim)&&!c.a.isDatasIguais(this.formulario.value.dataFim,this.formulario.value.dataInicio)?this.mensagens.mensagemError("A 'Data In\xedcio' n\xe3o pode ser maior que a 'Data Fim'."):c.a.isDatasIguais(this.formulario.value.dataInicio,this.formulario.value.dataFim)?this.mensagens.mensagemError("As datas 'Data In\xedcio' e 'Data Fim' n\xe3o podem ser iguais."):c.a.numeroDiasEntreDuasDatas(this.formulario.value.dataInicio,this.formulario.value.dataFim)>=731?this.mensagens.mensagemError("O respons\xe1vel pode assumir um cargo com dura\xe7\xe3o m\xe1xima de dois anos."):(this.cargo=class{static formularioToCargo(t){let e=new s.a;return e.nome=t.nome.toString().toUpperCase(),e.descricao=t.descricao.toString().toUpperCase(),e.key=t.key,t.responsavel&&(e.responsavel=t.responsavel),t.dataInicio&&(e.dataInicioResponsavel=t.dataInicio),t.dataFim&&(e.dataFimResponsavel=t.dataFim),e}}.formularioToCargo(this.formulario.value),this.cargoService.adicionarOuAtualizar(this.cargo),this.mensagens.mensagemSucesso("Associa\xe7\xe3o realizada com sucesso!")),this.isDataFimEnable(!1))}calcularDataFinal(t){let e=t.target.value;c.a.verificarIsDataValida(e)&&(this.formulario.controls.dataFim.setValue(c.a.calcularData(e,2)),this.isDataFimEnable(!1))}isDataFimEnable(t){t?this.formulario.controls.dataFim.enable():this.formulario.controls.dataFim.disable()}}return t.\u0275fac=function(e){return new(e||t)(m.Lb(o.a),m.Lb(u.a),m.Lb(i.M),m.Lb(d.a),m.Lb(n.g))},t.\u0275cmp=m.Fb({type:t,selectors:[["app-cargo"]],decls:39,vars:9,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["padding",""],[3,"formGroup"],[1,"row-item"],["mode","md","position","stacked",1,"titulo-dado"],["mode","md","formControlName","nome","type","text",3,"disabled"],["mode","md","position","stacked",1,"titulo-dado-select"],["placeholder","Selecione uma op\xe7\xe3o","formControlName","responsavel","multiple","false","interface","popover",3,"selectedText"],[3,"value",4,"ngFor","ngForOf"],["mode","md","formControlName","dataInicio","maxlength","10",3,"brmasker","ionBlur"],["mode","md","formControlName","dataFim","maxlength","10",3,"brmasker"],[1,"ion-no-border"],["no-padding","","id","rodape"],["mode","md","type","submit","fill","solid","expand","full",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(m.Ob(0,"ion-header"),m.Ob(1,"ion-toolbar",0),m.Ob(2,"ion-buttons",1),m.Mb(3,"ion-back-button",2),m.Nb(),m.Ob(4,"ion-title"),m.ic(5,"Associar cargo"),m.Nb(),m.Nb(),m.Nb(),m.Ob(6,"ion-content",3),m.Ob(7,"form",4),m.Ob(8,"ion-grid"),m.Ob(9,"ion-row"),m.Ob(10,"ion-col"),m.Ob(11,"ion-item",5),m.Ob(12,"ion-label",6),m.ic(13,"Cargo"),m.Nb(),m.Mb(14,"ion-input",7),m.Nb(),m.Nb(),m.Nb(),m.Ob(15,"ion-row"),m.Ob(16,"ion-col"),m.Ob(17,"ion-label",8),m.ic(18,"Respons\xe1vel"),m.Nb(),m.Ob(19,"ion-select",9),m.hc(20,p,2,2,"ion-select-option",10),m.Nb(),m.Nb(),m.Nb(),m.Ob(21,"ion-row"),m.Ob(22,"ion-col"),m.Ob(23,"ion-item",5),m.Ob(24,"ion-label",6),m.ic(25,"Data In\xedcio"),m.Nb(),m.Ob(26,"ion-input",11),m.Wb("ionBlur",function(t){return e.calcularDataFinal(t)}),m.Nb(),m.Nb(),m.Nb(),m.Ob(27,"ion-col"),m.Ob(28,"ion-item",5),m.Ob(29,"ion-label",6),m.ic(30,"Data Fim"),m.Nb(),m.Mb(31,"ion-input",12),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(32,"ion-footer",13),m.Ob(33,"ion-toolbar",14),m.Ob(34,"ion-grid"),m.Ob(35,"ion-row"),m.Ob(36,"ion-col"),m.Ob(37,"ion-button",15),m.Wb("click",function(){return e.associar()}),m.ic(38," Associar"),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb()),2&t&&(m.Bb(7),m.bc("formGroup",e.formulario),m.Bb(7),m.bc("disabled",!0),m.Bb(5),m.bc("selectedText",e.formulario.get("responsavel").value),m.Bb(1),m.bc("ngForOf",e.membrosAtivos),m.Bb(6),m.bc("brmasker",m.cc(7,b)),m.Bb(5),m.bc("brmasker",m.cc(8,b)),m.Bb(6),m.bc("disabled",e.formulario.invalid))},directives:[i.l,i.E,i.g,i.d,i.e,i.D,i.i,o.o,o.k,o.d,i.k,i.v,i.h,i.o,i.r,i.n,i.L,o.j,o.c,i.x,i.K,r.i,o.f,h.a,i.j,i.f,i.y],styles:[".titulo-dado[_ngcontent-%COMP%], .titulo-dado-batismo[_ngcontent-%COMP%], .titulo-dado-select[_ngcontent-%COMP%], .titulo-dado-select-acesso[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%], ion-select[_ngcontent-%COMP%]{font-family:Rubik,sans-serif}#rodape[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]{--background:#e6e6e6}.titulo-dado[_ngcontent-%COMP%], .titulo-dado-select[_ngcontent-%COMP%], .titulo-dado-select-acesso[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%], ion-select[_ngcontent-%COMP%]{color:#2e2e3c}h2[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}ion-input[_ngcontent-%COMP%]{text-transform:uppercase;font-size:9pt}ion-select[_ngcontent-%COMP%]{font-size:10pt}#cabecalho[_ngcontent-%COMP%]{--background:#2e2e3c;color:#fff}.titulo-dado[_ngcontent-%COMP%]{font-size:11pt}.titulo-dado-batismo[_ngcontent-%COMP%], .titulo-dado-select[_ngcontent-%COMP%], .titulo-dado-select-acesso[_ngcontent-%COMP%]{font-size:8.3pt}.titulo-dado-select[_ngcontent-%COMP%]{margin-left:1%}.titulo-dado-batismo[_ngcontent-%COMP%]{margin-left:4%}h2[_ngcontent-%COMP%]{font-size:13pt;font-weight:bolder;margin-left:1%}span[_ngcontent-%COMP%]{color:#eb445a}  .mycomponent-wider-popover{--width:95%;--max-width:600px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({imports:[[n.i.forChild(g)],n.i]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({imports:[[r.c,o.e,i.F,f,o.m,h.b]]}),t})()},sZxV:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var r=a("mrSG");class o{constructor(t){this.aviso=t}mensagemSucesso(t){return Object(r.b)(this,void 0,void 0,function*(){const e=this.aviso.create({id:"sucesso",position:"top",message:t,duration:3e3,color:"success"});(yield e).present()})}mensagemError(t){return Object(r.b)(this,void 0,void 0,function*(){const e=this.aviso.create({id:"error",position:"top",message:t,duration:3e3,color:"danger"});(yield e).present()})}mensagemAlerta(t){return Object(r.b)(this,void 0,void 0,function*(){const e=this.aviso.create({id:"alerta",position:"top",message:t,duration:3e3,color:"warning"});(yield e).present()})}}}}]);