!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5T/8":function(e,o,r){"use strict";r.r(o),r.d(o,"VoluntarioPageModule",function(){return k});var i=r("ofXK"),a=r("3Pt+"),s=r("TEn/"),c=r("tyNb"),u=r("JM5f"),l=r("sZxV"),m=r("fXoL"),b=r("fX5e");function f(t,e){1&t&&(m.Ob(0,"h2"),m.ic(1," N\xe3o h\xe1 volunt\xe1rios."),m.Nb())}function d(t,e){if(1&t){var n=m.Pb();m.Ob(0,"ion-searchbar",8),m.Wb("ionChange",function(t){return m.ec(n),m.Yb().pesquisarVoluntarios(t)}),m.Nb()}}function p(t,e){if(1&t){var n=m.Pb();m.Ob(0,"ion-item-sliding"),m.Ob(1,"ion-item",9),m.Ob(2,"ion-label",10),m.Ob(3,"h1",11),m.ic(4),m.Nb(),m.ic(5),m.Mb(6,"br"),m.ic(7),m.Nb(),m.Nb(),m.Ob(8,"ion-item-options",12),m.Ob(9,"button",13),m.Wb("click",function(){m.ec(n);var t=e.$implicit;return m.Yb().editarVoluntario(t)}),m.Mb(10,"ion-icon",14),m.Nb(),m.Nb(),m.Nb()}if(2&t){var o=e.$implicit,r=m.Yb();m.Bb(4),m.jc(o.nomeCompleto),m.Bb(1),m.kc(" Data de nascimento: ",r.formatarDataDeNascimento(o.dataNascimento)," "),m.Bb(2),m.kc(" ",o.whatsapp?"Whatsapp: ".concat(o.whatsapp):""," ")}}var h,v,g,y=[{path:"",component:(h=function(){function e(n,o,r,i){t(this,e),this.membroService=n,this.navCtrl=o,this.aviso=r,this.alertController=i,this.mensagens=new l.a(this.aviso),this.inicializar()}return n(e,[{key:"inicializar",value:function(){var t=this;this.listaMembrosObservable=this.membroService.listar(),this.listaMembrosObservable.subscribe(function(e){t.membrosVoluntarios=e,t.membrosVoluntariosFiltrados=e,t.membrosVoluntarios=t.membrosVoluntarios.filter(function(t){return"Voluntario"===t.classificacao}),t.membrosVoluntariosFiltrados=t.membrosVoluntariosFiltrados.filter(function(t){return"Voluntario"===t.classificacao}),t.totalVoluntarios=t.membrosVoluntarios.length,t.membrosVoluntariosFiltrados.sort(function(t,e){return t.nomeCompleto>e.nomeCompleto?1:e.nomeCompleto>t.nomeCompleto?-1:0}),t.membrosVoluntarios.map(function(t){return t.escolaridade=Number(t.escolaridade)}),t.membrosVoluntarios.map(function(t){return t.estadoCivil=Number(t.estadoCivil)})})}},{key:"editarVoluntario",value:function(t){this.navCtrl.navigateForward("/editar/membro",{state:{content:t}})}},{key:"formatarDataDeNascimento",value:function(t){return t.includes("/")?t:u.a.dateFormatterBrazil(t)}},{key:"pesquisarVoluntarios",value:function(t){this.membrosVoluntariosFiltrados=this.membrosVoluntarios;var e=t.detail.value;e&&""!==e.trim()&&(this.membrosVoluntariosFiltrados=this.membrosVoluntariosFiltrados.filter(function(t){return t.nomeCompleto.toUpperCase().indexOf(e.trim().toUpperCase())>-1}),this.membrosVoluntariosFiltrados.sort(function(t,e){return t.nomeCompleto>e.nomeCompleto?1:e.nomeCompleto>t.nomeCompleto?-1:0}))}}]),e}(),h.\u0275fac=function(t){return new(t||h)(m.Lb(b.a),m.Lb(s.H),m.Lb(s.M),m.Lb(s.a))},h.\u0275cmp=m.Fb({type:h,selectors:[["app-voluntario"]],decls:14,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["padding",""],[4,"ngIf"],["placeholder","Digite o nome do volunt\xe1rio","color","tertiary",3,"ionChange",4,"ngIf"],["align-items-center","","justify-content-center",""],[4,"ngFor","ngForOf"],["placeholder","Digite o nome do volunt\xe1rio","color","tertiary",3,"ionChange"],["text-wrap","",1,"item-text-wrap"],["text-wrap","",1,"informacao-membro"],[1,"content-title"],["side","start"],["ion-button","",1,"bt-editar",3,"click"],["name","create",1,"icones"]],template:function(t,e){1&t&&(m.Ob(0,"ion-header"),m.Ob(1,"ion-toolbar",0),m.Ob(2,"ion-buttons",1),m.Mb(3,"ion-back-button",2),m.Nb(),m.Ob(4,"ion-title"),m.ic(5),m.Nb(),m.Nb(),m.Nb(),m.Ob(6,"ion-content",3),m.hc(7,f,2,0,"h2",4),m.hc(8,d,1,0,"ion-searchbar",5),m.Ob(9,"ion-grid"),m.Ob(10,"ion-row",6),m.Ob(11,"ion-col"),m.Ob(12,"ion-list"),m.hc(13,p,11,3,"ion-item-sliding",7),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb()),2&t&&(m.Bb(5),m.kc("Total de Voluntarios: ",e.totalVoluntarios,""),m.Bb(2),m.bc("ngIf",0==e.totalVoluntarios),m.Bb(1),m.bc("ngIf",e.totalVoluntarios>0),m.Bb(5),m.bc("ngForOf",e.membrosVoluntariosFiltrados))},directives:[s.l,s.E,s.g,s.d,s.e,s.D,s.i,i.j,s.k,s.v,s.h,s.s,i.i,s.w,s.L,s.q,s.o,s.r,s.p,s.m],styles:["ion-searchbar[_ngcontent-%COMP%]{margin-top:15px;display:block;margin-left:auto;margin-right:auto;font-family:Rubik,sans-serif}.informacao-membro[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}h1[_ngcontent-%COMP%]{font-size:20px}h2[_ngcontent-%COMP%]{color:#a57d51;text-align:center}.bt-editar[_ngcontent-%COMP%]{background:#2e2e3c}.bt-inativar[_ngcontent-%COMP%]{background:#a57d51}.icones[_ngcontent-%COMP%]{color:#fff;font-size:20px}"]}),h)}],O=((g=function e(){t(this,e)}).\u0275fac=function(t){return new(t||g)},g.\u0275mod=m.Jb({type:g}),g.\u0275inj=m.Ib({imports:[[c.i.forChild(y)],c.i]}),g),k=((v=function e(){t(this,e)}).\u0275fac=function(t){return new(t||v)},v.\u0275mod=m.Jb({type:v}),v.\u0275inj=m.Ib({imports:[[i.c,a.e,s.F,O]]}),v)},JM5f:function(e,o,r){"use strict";r.d(o,"a",function(){return a});var i=r("wd/R"),a=function(){function e(){t(this,e),i.locale("pt-br")}return n(e,null,[{key:"isDataDoisMaiorDataUm",value:function(t,e){return i(this.dateFormatterAmerica(e)).isBefore(this.dateFormatterAmerica(t))}},{key:"isDataFutura",value:function(t){return i(this.dateFormatterAmerica(t)).isAfter(this.dateFormatterAmerica((new Date).toLocaleDateString()))}},{key:"isDatasIguais",value:function(t,e){return i(this.dateFormatterAmerica(e)).isSame(this.dateFormatterAmerica(t))}},{key:"dateFormatterAmerica",value:function(t){return t.split("/").reverse().join("-")}},{key:"dateFormatterBrazil",value:function(t){return i(t).format("DD/MM/YYYY")}},{key:"numeroDiasEntreDuasDatas",value:function(t,e){var n=i(t),o=i(e);return i.duration(o.diff(n)).asDays()}},{key:"verificarIsDataValida",value:function(t){return i(this.dateFormatterAmerica(t)).isValid()}},{key:"calcularData",value:function(t,e){return i(t).add(e,"year").subtract(1,"days").format("YYYY-MM-DD")}},{key:"verificarIntervaloHora",value:function(t,e){var n=Number(t.substring(0,2))<12?i(t.concat("am"),"hh:mma"):i(t.concat("pm"),"hh:mmp"),o=Number(e.substring(0,2))<12?i(e.concat("am"),"hh:mma"):i(e.concat("pm"),"hh:mmp");return n.isBefore(o)}},{key:"isIdadeMaiorDozeAnos",value:function(t){return i().diff(this.dateFormatterAmerica(t),"years")>=12}}]),e}()},sZxV:function(e,o,r){"use strict";r.d(o,"a",function(){return a});var i=r("mrSG"),a=function(){function e(n){t(this,e),this.aviso=n}return n(e,[{key:"mensagemSucesso",value:function(t){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.aviso.create({id:"sucesso",position:"top",message:t,duration:3e3,color:"success"}),e.next=3,n;case 3:e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}},{key:"mensagemError",value:function(t){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.aviso.create({id:"error",position:"top",message:t,duration:3e3,color:"danger"}),e.next=3,n;case 3:e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}},{key:"mensagemAlerta",value:function(t){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.aviso.create({id:"alerta",position:"top",message:t,duration:3e3,color:"warning"}),e.next=3,n;case 3:e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}}]),e}()}}])}();