!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/oCc":function(e,t,r){"use strict";r.d(t,"b",function(){return c}),r.d(t,"a",function(){return s});var a=r("ofXK"),o=r("3Pt+"),n=r("fXoL"),i=function(){this.type="alfa",this.decimal=2,this.decimalCaracter=",",this.userCaracters=!1,this.numberAndTousand=!1,this.moneyInitHasInt=!0},s=function(){function e(e,t){this.controlContainer=e,this.elementRef=t,this.brmasker=new i}return e.prototype.inputKeyup=function(e){var t=this.returnValue(e.target.value);this.setValueInFormControl(t)},e.prototype.onNgModelChange=function(e){var t=this.returnValue(e);t&&this.setValueInFormControl(t,!1)},e.prototype.ngOnInit=function(){this.brmasker.type||(this.brmasker.type="all"),this.brmasker.decimal||(this.brmasker.decimal=2),void 0===this.brmasker.moneyInitHasInt&&(this.brmasker.moneyInitHasInt=!0),this.brmasker.decimalCaracter||(this.brmasker.decimalCaracter=","),this.controlContainer?this.formControlName?this.brmasker.form=this.controlContainer.control.get(this.formControlName):console.warn("Missing FormControlName directive from host element of the component"):console.warn("Can't find parent FormGroup directive"),this.initialValue()},e.prototype.initialValue=function(){var e=this.returnValue(this.elementRef.nativeElement.value);this.setValueInFormControl(e)},e.prototype.verifyFormControl=function(){return this.brmasker.form instanceof o.b},e.prototype.setValueInFormControl=function(e,t){this.verifyFormControl()?(this.brmasker.form.setValue(e,{emitViewToModelChange:t}),this.brmasker.form.updateValueAndValidity()):this.elementRef.nativeElement.value=e},e.prototype.writeCreateValue=function(e,t){return void 0===t&&(t=new i),e&&t.phone?e.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi,"$1 ($2) $3-$4"):e&&t.phoneNotDDD?this.phoneNotDDDMask(e):e&&t.money?this.writeValueMoney(e,t):e&&t.person?this.writeValuePerson(e):e&&t.percent?this.writeValuePercent(e):this.brmasker.userCaracters?this.usingSpecialCharacters(e,this.brmasker.mask,this.brmasker.len):e&&t.mask?(this.brmasker.mask=t.mask,t.len&&(this.brmasker.len=t.len),this.onInput(e)):e},e.prototype.writeValuePercent=function(e){return e.replace(/\D/gi,""),e.replace(/%/gi,""),e.replace(/([0-9]{0})$/gi,"%$1")},e.prototype.writeValuePerson=function(e){return e.length<=11?e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi,"$1.$2.$3-$4"):e.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi,"$1.$2.$3/$4-$5")},e.prototype.writeValueMoney=function(e,t){return void 0===t&&(t=new i),this.moneyMask(e,t)},e.prototype.returnValue=function(e){if(this.brmasker.mask||(this.brmasker.mask=""),e){var t=e;return"alfa"===this.brmasker.type&&(t=t.replace(/\d/gi,"")),"num"===this.brmasker.type&&(t=t.replace(/\D/gi,"")),this.brmasker.money?this.moneyMask(this.onInput(t),this.brmasker):this.brmasker.phone?this.phoneMask(t):this.brmasker.phoneNotDDD?this.phoneNotDDDMask(t):this.brmasker.person?this.peapollMask(t):this.brmasker.percent?this.percentMask(t):this.brmasker.numberAndTousand?this.thousand(t):this.brmasker.userCaracters?this.usingSpecialCharacters(t,this.brmasker.mask,this.brmasker.len):this.onInput(t)}return""},e.prototype.applyCpfMask=function(e){return(e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d{1,2})$/gi,"$1-$2")},e.prototype.applyCnpjMask=function(e){return(e=(e=(e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1/$2")).replace(/(\d{4})(\d{1,4})$/gi,"$1-$2")).replace(/(\d{2})(\d{1,2})$/gi,"$1$2")},e.prototype.percentMask=function(e){return e.replace(/\D/gi,"").replace(/%/gi,"").replace(/([0-9]{0})$/gi,"%$1")},e.prototype.phoneMask=function(e){var t=e;return t.length>14||11===t.length?(this.brmasker.len=15,this.brmasker.mask="(99) 99999-9999",t=(t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1 $2")).replace(/(\d{5})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")):(this.brmasker.len=14,this.brmasker.mask="(99) 9999-9999",t=(t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1 $2")).replace(/(\d{4})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")),this.onInput(t)},e.prototype.phoneNotDDDMask=function(e){var t=e;return t.length>9?(this.brmasker.len=10,this.brmasker.mask="99999-9999",t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{5})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")):(this.brmasker.len=9,this.brmasker.mask="9999-9999",t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{4})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")),this.onInput(t)},e.prototype.peapollMask=function(e){var t=e;return t.length>=14?14===t.length&&t.indexOf("-")>0?(this.brmasker.len=14,this.brmasker.mask="999.999.999-99",t=this.applyCpfMask(t)):(this.brmasker.len=18,this.brmasker.mask="99.999.999/9999-99",t=this.applyCnpjMask(t)):(this.brmasker.len=14,this.brmasker.mask="999.999.999-99",t=this.applyCpfMask(t)),this.onInput(t)},e.prototype.moneyMask=function(e,t){var r=t.decimal||this.brmasker.decimal;if(1===(e=e.replace(/\D/gi,"").replace(new RegExp("([0-9]{"+r+"})$","g"),t.decimalCaracter+"$1")).length&&!this.brmasker.moneyInitHasInt){var a=Array(r-1).fill(0);return"0"+t.decimalCaracter+a.join("")+e}return e.length===r+1?"0"+e:e.length>r+2&&"0"===e.charAt(0)?e.substr(1):(t.thousand&&e.length>Number(4)+Number(t.decimal)&&(e=e.replace(new RegExp("([0-9]{3})"+t.decimalCaracter+"([0-9]{"+t.decimal+"}$)","g"),t.thousand+"$1"+t.decimalCaracter+"$2")),t.thousand&&e.length>Number(8)+Number(t.decimal)&&(e=e.replace(new RegExp("([0-9]{3})"+t.thousand+"([0-9]{3})"+t.decimalCaracter+"([0-9]{"+t.decimal+"}$)","g"),t.thousand+"$1"+t.thousand+"$2"+t.decimalCaracter+"$3")),e)},e.prototype.onInput=function(e){return this.formatField(e,this.brmasker.mask,this.brmasker.len)},e.prototype.usingSpecialCharacters=function(e,t,r){r||(r=99999999999);for(var a=e.toString().replace(/\-|\.|\,| /gi,""),o=0,n="",i=a.length,s=0;s<i;s++)s<r&&("-"===t.charAt(s)||"."===t.charAt(s)||","===t.charAt(s)?(n+=t.charAt(s),i++):(n+=a.charAt(o),o++));return n},e.prototype.thousand=function(e){var t=e.replace(/\D/gi,"").toString().split("").reverse().join("").match(/\d{1,3}/g);if(t)return t.join(""+(this.brmasker.thousand||".")).split("").reverse().join("")},e.prototype.formatField=function(e,t,r){r||(r=99999999999);for(var a=e.toString().replace(/\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi,""),o=0,n="",i=a.length,s=0;s<i;s++)s<r&&("-"===t.charAt(s)||"."===t.charAt(s)||"/"===t.charAt(s)||"_"===t.charAt(s)||"("===t.charAt(s)||")"===t.charAt(s)||" "===t.charAt(s)||","===t.charAt(s)||"*"===t.charAt(s)||"+"===t.charAt(s)||"@"===t.charAt(s)||"#"===t.charAt(s)||":"===t.charAt(s)||"$"===t.charAt(s)||"&"===t.charAt(s)||"%"===t.charAt(s)?(n+=t.charAt(s),i++):(n+=a.charAt(o),o++));return n},e.\u0275fac=function(t){return new(t||e)(n.Lb(o.d,13),n.Lb(n.m))},e.\u0275dir=n.Gb({type:e,selectors:[["","brmasker",""]],hostBindings:function(e,t){1&e&&n.Wb("keyup",function(e){return t.inputKeyup(e)})("ngModelChange",function(e){return t.onNgModelChange(e)})},inputs:{brmasker:"brmasker",formControlName:"formControlName"}}),e.\u0275prov=n.Hb({token:e,factory:function(t){return e.\u0275fac(t)}}),e}(),c=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({imports:[[a.c]]}),e}()},JM5f:function(t,a,o){"use strict";o.d(a,"a",function(){return i});var n=o("wd/R"),i=function(){function t(){e(this,t),n.locale("pt-br")}return r(t,null,[{key:"isDataDoisMaiorDataUm",value:function(e,t){return n(this.dateFormatterAmerica(t)).isBefore(this.dateFormatterAmerica(e))}},{key:"isDataFutura",value:function(e){return n(this.dateFormatterAmerica(e)).isAfter(this.dateFormatterAmerica((new Date).toLocaleDateString()))}},{key:"isDatasIguais",value:function(e,t){return n(this.dateFormatterAmerica(t)).isSame(this.dateFormatterAmerica(e))}},{key:"dateFormatterAmerica",value:function(e){return e.split("/").reverse().join("-")}},{key:"dateFormatterBrazil",value:function(e){return n(e).format("DD/MM/YYYY")}},{key:"numeroDiasEntreDuasDatas",value:function(e,t){var r=n(e),a=n(t);return n.duration(a.diff(r)).asDays()}},{key:"verificarIsDataValida",value:function(e){return n(this.dateFormatterAmerica(e)).isValid()}},{key:"calcularData",value:function(e,t){return n(e).add(t,"year").subtract(1,"days").format("YYYY-MM-DD")}},{key:"verificarIntervaloHora",value:function(e,t){var r=Number(e.substring(0,2))<12?n(e.concat("am"),"hh:mma"):n(e.concat("pm"),"hh:mmp"),a=Number(t.substring(0,2))<12?n(t.concat("am"),"hh:mma"):n(t.concat("pm"),"hh:mmp");return r.isBefore(a)}},{key:"isIdadeMaiorDozeAnos",value:function(e){return n().diff(this.dateFormatterAmerica(e),"years")>=12}}]),t}()},"VT+I":function(t,a,o){"use strict";o.r(a),o.d(a,"ProjetoPageModule",function(){return M});var n=o("ofXK"),i=o("3Pt+"),s=o("TEn/"),c=o("tyNb"),l=o("JM5f"),u=o("sZxV"),m=o("fXoL"),p=o("fX5e"),d=o("MoJo"),h=o("/oCc");function b(e,t){if(1&e&&(m.Ob(0,"ion-select-option",16),m.ic(1),m.Nb()),2&e){var r=t.$implicit;m.bc("value",r.nomeCompleto),m.Bb(1),m.kc(" ",r.nomeCompleto," ")}}var f,g,v,k=function(){return{mask:"00/00/0000",len:10}},y=[{path:"",component:(f=function(){function t(r,a,o,n,i){e(this,t),this.formulador=r,this.membroService=a,this.aviso=o,this.projetoService=n,this.router=i;var s=this.router.getCurrentNavigation();this.projeto=s.extras.state.content,this.ajustarDatas()}return r(t,[{key:"ngOnInit",value:function(){this.inicializar()}},{key:"inicializar",value:function(){var e=this;this.mensagens=new u.a(this.aviso),this.listaMembrosObservable=this.membroService.listar(),this.listaMembrosObservable.subscribe(function(t){e.membrosAtivos=t,e.membrosAtivos=e.membrosAtivos.filter(function(e){return"Ativo"===e.situacao}),e.membrosAtivos.sort(function(e,t){return e.nomeCompleto>t.nomeCompleto?1:t.nomeCompleto>e.nomeCompleto?-1:0})}),this.criarFormulario()}},{key:"criarFormulario",value:function(){this.formulario=this.formulador.group({key:[this.projeto.key,i.n.required],responsavel:[this.projeto.responsavel,i.n.required],dataInicio:[this.projeto.dataInicioResponsavel,i.n.required],dataFim:[this.projeto.dataFimResponsavel,i.n.required],nome:[this.projeto.nome,i.n.required]})}},{key:"ajustarDatas",value:function(){this.projeto.dataInicioResponsavel&&(this.projeto.dataInicioResponsavel=this.projeto.dataInicioResponsavel.includes("/")?this.projeto.dataInicioResponsavel:l.a.dateFormatterBrazil(this.projeto.dataInicioResponsavel)),this.projeto.dataFimResponsavel&&(this.projeto.dataFimResponsavel=this.projeto.dataFimResponsavel.includes("/")?this.projeto.dataFimResponsavel:l.a.dateFormatterBrazil(this.projeto.dataFimResponsavel))}},{key:"associar",value:function(){this.formulario.value&&(this.formulario.value.dataFim&&!l.a.verificarIsDataValida(this.formulario.value.dataFim)?this.mensagens.mensagemError("A data informada no campo 'Data Fim' n\xe3o \xe9 v\xe1lida."):this.formulario.value.dataInicio&&!l.a.verificarIsDataValida(this.formulario.value.dataInicio)?this.mensagens.mensagemError("A data informada no campo 'Data In\xedcio' n\xe3o \xe9 v\xe1lida."):l.a.isDataFutura(this.formulario.value.dataInicio)?this.mensagens.mensagemError("N\xe3o \xe9 permitido data futura para o campo 'Data In\xedcio'"):l.a.isDataDoisMaiorDataUm(this.formulario.value.dataInicio,this.formulario.value.dataFim)&&!l.a.isDatasIguais(this.formulario.value.dataFim,this.formulario.value.dataInicio)?this.mensagens.mensagemError("A 'Data In\xedcio' n\xe3o pode ser maior que a 'Data Fim'."):l.a.isDatasIguais(this.formulario.value.dataInicio,this.formulario.value.dataFim)?this.mensagens.mensagemError("As datas 'Data In\xedcio' e 'Data Fim' n\xe3o podem ser iguais."):l.a.numeroDiasEntreDuasDatas(this.formulario.value.dataInicio,this.formulario.value.dataFim)>=731?this.mensagens.mensagemError("O respons\xe1vel pode assumir um cargo com dura\xe7\xe3o m\xe1xima de dois anos."):(this.projeto=function(){function t(){e(this,t)}return r(t,null,[{key:"formularioToProjeto",value:function(e,t){return t.responsavel=e.responsavel,t.dataInicioResponsavel=e.dataInicio,t.dataFimResponsavel=e.dataFim,t}}]),t}().formularioToProjeto(this.formulario.value,this.projeto),this.projetoService.adicionarOuAtualizar(this.projeto),this.mensagens.mensagemSucesso("Associa\xe7\xe3o realizada com sucesso!")))}}]),t}(),f.\u0275fac=function(e){return new(e||f)(m.Lb(i.a),m.Lb(p.a),m.Lb(s.M),m.Lb(d.a),m.Lb(c.g))},f.\u0275cmp=m.Fb({type:f,selectors:[["app-projeto"]],decls:39,vars:9,consts:[["color","primary"],["slot","start"],["defaultHref","lista/projeto/ativos"],["padding",""],[3,"formGroup"],[1,"row-item"],["mode","md","position","stacked",1,"titulo-dado"],["mode","md","formControlName","nome","type","text",3,"disabled"],["mode","md","position","stacked",1,"titulo-dado-select"],["placeholder","Selecione uma op\xe7\xe3o","formControlName","responsavel","multiple","false","interface","popover",3,"selectedText"],[3,"value",4,"ngFor","ngForOf"],["mode","md","formControlName","dataInicio","maxlength","10",3,"brmasker"],["mode","md","formControlName","dataFim","maxlength","10",3,"brmasker"],[1,"ion-no-border"],["no-padding","","id","rodape"],["mode","md","type","submit","fill","solid","expand","full",3,"disabled","click"],[3,"value"]],template:function(e,t){1&e&&(m.Ob(0,"ion-header"),m.Ob(1,"ion-toolbar",0),m.Ob(2,"ion-buttons",1),m.Mb(3,"ion-back-button",2),m.Nb(),m.Ob(4,"ion-title"),m.ic(5,"Associar projeto"),m.Nb(),m.Nb(),m.Nb(),m.Ob(6,"ion-content",3),m.Ob(7,"form",4),m.Ob(8,"ion-grid"),m.Ob(9,"ion-row"),m.Ob(10,"ion-col"),m.Ob(11,"ion-item",5),m.Ob(12,"ion-label",6),m.ic(13,"Projeto"),m.Nb(),m.Mb(14,"ion-input",7),m.Nb(),m.Nb(),m.Nb(),m.Ob(15,"ion-row"),m.Ob(16,"ion-col"),m.Ob(17,"ion-label",8),m.ic(18,"Respons\xe1vel"),m.Nb(),m.Ob(19,"ion-select",9),m.hc(20,b,2,2,"ion-select-option",10),m.Nb(),m.Nb(),m.Nb(),m.Ob(21,"ion-row"),m.Ob(22,"ion-col"),m.Ob(23,"ion-item",5),m.Ob(24,"ion-label",6),m.ic(25,"Data de In\xedcio"),m.Nb(),m.Mb(26,"ion-input",11),m.Nb(),m.Nb(),m.Ob(27,"ion-col"),m.Ob(28,"ion-item",5),m.Ob(29,"ion-label",6),m.ic(30,"Data Fim"),m.Nb(),m.Mb(31,"ion-input",12),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(32,"ion-footer",13),m.Ob(33,"ion-toolbar",14),m.Ob(34,"ion-grid"),m.Ob(35,"ion-row"),m.Ob(36,"ion-col"),m.Ob(37,"ion-button",15),m.Wb("click",function(){return t.associar()}),m.ic(38," Associar"),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb()),2&e&&(m.Bb(7),m.bc("formGroup",t.formulario),m.Bb(7),m.bc("disabled",!0),m.Bb(5),m.bc("selectedText",t.formulario.get("responsavel").value),m.Bb(1),m.bc("ngForOf",t.membrosAtivos),m.Bb(6),m.bc("brmasker",m.cc(7,k)),m.Bb(5),m.bc("brmasker",m.cc(8,k)),m.Bb(6),m.bc("disabled",t.formulario.invalid))},directives:[s.l,s.E,s.g,s.d,s.e,s.D,s.i,i.o,i.k,i.d,s.k,s.v,s.h,s.o,s.r,s.n,s.L,i.j,i.c,s.x,s.K,n.i,i.f,h.a,s.j,s.f,s.y],styles:[".titulo-dado[_ngcontent-%COMP%], .titulo-dado-batismo[_ngcontent-%COMP%], .titulo-dado-select[_ngcontent-%COMP%], .titulo-dado-select-acesso[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%], ion-select[_ngcontent-%COMP%]{font-family:Rubik,sans-serif}#rodape[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]{--background:#e6e6e6}.titulo-dado[_ngcontent-%COMP%], .titulo-dado-select[_ngcontent-%COMP%], .titulo-dado-select-acesso[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%], ion-select[_ngcontent-%COMP%]{color:#2e2e3c}h2[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}ion-input[_ngcontent-%COMP%]{text-transform:uppercase;font-size:9pt}ion-select[_ngcontent-%COMP%]{font-size:10pt}#cabecalho[_ngcontent-%COMP%]{--background:#2e2e3c;color:#fff}.titulo-dado[_ngcontent-%COMP%]{font-size:11pt}.titulo-dado-batismo[_ngcontent-%COMP%], .titulo-dado-select[_ngcontent-%COMP%], .titulo-dado-select-acesso[_ngcontent-%COMP%]{font-size:8.3pt}.titulo-dado-select[_ngcontent-%COMP%]{margin-left:1%}.titulo-dado-batismo[_ngcontent-%COMP%]{margin-left:4%}h2[_ngcontent-%COMP%]{font-size:13pt;font-weight:bolder;margin-left:1%}span[_ngcontent-%COMP%]{color:#eb445a}  .mycomponent-wider-popover{--width:95%;--max-width:600px}"]}),f)}],C=((v=function t(){e(this,t)}).\u0275fac=function(e){return new(e||v)},v.\u0275mod=m.Jb({type:v}),v.\u0275inj=m.Ib({imports:[[c.i.forChild(y)],c.i]}),v),M=((g=function t(){e(this,t)}).\u0275fac=function(e){return new(e||g)},g.\u0275mod=m.Jb({type:g}),g.\u0275inj=m.Ib({imports:[[n.c,i.e,s.F,C,i.m,h.b]]}),g)},sZxV:function(t,a,o){"use strict";o.d(a,"a",function(){return i});var n=o("mrSG"),i=function(){function t(r){e(this,t),this.aviso=r}return r(t,[{key:"mensagemSucesso",value:function(e){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.aviso.create({id:"sucesso",position:"top",message:e,duration:3e3,color:"success"}),t.next=3,r;case 3:t.sent.present();case 4:case"end":return t.stop()}},t,this)}))}},{key:"mensagemError",value:function(e){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.aviso.create({id:"error",position:"top",message:e,duration:3e3,color:"danger"}),t.next=3,r;case 3:t.sent.present();case 4:case"end":return t.stop()}},t,this)}))}},{key:"mensagemAlerta",value:function(e){return Object(n.b)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.aviso.create({id:"alerta",position:"top",message:e,duration:3e3,color:"warning"}),t.next=3,r;case 3:t.sent.present();case 4:case"end":return t.stop()}},t,this)}))}}]),t}()}}])}();