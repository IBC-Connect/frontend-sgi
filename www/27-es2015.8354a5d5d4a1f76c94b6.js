(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{FRyj:function(t,e,a){"use strict";a.r(e),a.d(e,"AniversarioDoMesPageModule",function(){return f});var r=a("ofXK"),i=a("3Pt+"),o=a("TEn/"),n=a("tyNb"),s=a("mrSG"),c=a("wd/R"),m=a("JM5f"),b=a("fXoL"),l=a("fX5e");function u(t,e){if(1&t&&(b.Ob(0,"h2",11),b.ic(1,"Envie uma mensagem. Clique "),b.Ob(2,"a",12),b.ic(3,"aqui"),b.Nb(),b.ic(4,"."),b.Nb()),2&t){const t=b.Yb().$implicit,e=b.Yb();b.Bb(2),b.bc("href",e.formatarNumeroWhatsapp(t.whatsapp),b.fc)}}function h(t,e){if(1&t&&(b.Ob(0,"ion-row"),b.Ob(1,"ion-col",7),b.Ob(2,"h2"),b.ic(3),b.Nb(),b.Nb(),b.Ob(4,"ion-col",8),b.Ob(5,"h2"),b.ic(6),b.Nb(),b.Nb(),b.Ob(7,"ion-col",9),b.hc(8,u,5,1,"h2",10),b.Nb(),b.Nb()),2&t){const t=e.$implicit,a=b.Yb();b.Bb(3),b.kc(" ",a.formatarDataDeNascimento(t.dataNascimento).substring(0,5),""),b.Bb(3),b.jc(t.nomeCompleto),b.Bb(2),b.bc("ngIf",t.whatsapp)}}const p=[{path:"",component:(()=>{class t{constructor(t,e){this.membroService=t,this.navCtrl=e,this.inicializar(),c.locale("pt-br")}inicializar(){this.listaMembrosObservable=this.membroService.listar(),this.listaMembrosObservable.subscribe(t=>Object(s.b)(this,void 0,void 0,function*(){this.membrosAtivos=yield this.exibirAniversariantes(t),this.totalMembros=this.membrosAtivos?this.membrosAtivos.length:0,this.membrosAtivos.sort((t,e)=>t.nomeCompleto>e.nomeCompleto?1:e.nomeCompleto>t.nomeCompleto?-1:0)}))}exibirAniversariantes(t){return Object(s.b)(this,void 0,void 0,function*(){let e=new Array;return yield t.forEach(t=>{c(t.dataNascimento).month()===c(new Date).month()&&e.push(t)}),e})}formatarDataDeNascimento(t){return m.a.dateFormatterBrazil(t)}formatarNumeroWhatsapp(t){return`https://api.whatsapp.com/send/?phone=55${t.replace("(","").replace(")","").replace("-","")}&text&app_absent=0`}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(l.a),b.Lb(o.H))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-aniversario-do-mes"]],decls:14,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["center","","text-center",""],[1,"ion-text-center"],["src","/assets/img/parabens.gif"],[4,"ngFor","ngForOf"],["size-md","1","text-wrap",""],["text-wrap",""],["size-md","6","text-wrap",""],["id","whatsapp",4,"ngIf"],["id","whatsapp"],["target","_blank",3,"href"]],template:function(t,e){1&t&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Mb(3,"ion-back-button",2),b.Nb(),b.Ob(4,"ion-title"),b.ic(5,"Anivers\xe1rios do m\xeas"),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content",3),b.Ob(7,"ion-grid",4),b.Mb(8,"img",5),b.Ob(9,"h1"),b.ic(10," Celebrar o anivers\xe1rio \xe9 agradecer a Deus o milagre da vida."),b.Nb(),b.Mb(11,"br"),b.Mb(12,"br"),b.hc(13,h,9,3,"ion-row",6),b.Nb(),b.Nb()),2&t&&(b.Bb(13),b.bc("ngForOf",e.membrosAtivos))},directives:[o.l,o.E,o.g,o.d,o.e,o.D,o.i,o.k,r.i,o.v,o.h,r.j],styles:["h1[_ngcontent-%COMP%]{text-align:center;margin:15px;font-size:16pt;color:#2e2e3c}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}h2[_ngcontent-%COMP%]{font-size:12pt}h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#a57d51}img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:20%}ion-grid[_ngcontent-%COMP%]{margin:15px}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[n.i.forChild(p)],n.i]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[r.c,i.e,o.F,d]]}),t})()},JM5f:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var r=a("wd/R");class i{constructor(){r.locale("pt-br")}static isDataDoisMaiorDataUm(t,e){return r(this.dateFormatterAmerica(e)).isBefore(this.dateFormatterAmerica(t))}static isDataFutura(t){return r(this.dateFormatterAmerica(t)).isAfter(this.dateFormatterAmerica((new Date).toLocaleDateString()))}static isDatasIguais(t,e){return r(this.dateFormatterAmerica(e)).isSame(this.dateFormatterAmerica(t))}static dateFormatterAmerica(t){return t.split("/").reverse().join("-")}static dateFormatterBrazil(t){return r(t).format("DD/MM/YYYY")}static numeroDiasEntreDuasDatas(t,e){const a=r(t),i=r(e);return r.duration(i.diff(a)).asDays()}static verificarIsDataValida(t){return r(this.dateFormatterAmerica(t)).isValid()}static calcularData(t,e){return r(t).add(e,"year").subtract(1,"days").format("YYYY-MM-DD")}static verificarIntervaloHora(t,e){let a=Number(t.substring(0,2))<12?r(t.concat("am"),"hh:mma"):r(t.concat("pm"),"hh:mmp"),i=Number(e.substring(0,2))<12?r(e.concat("am"),"hh:mma"):r(e.concat("pm"),"hh:mmp");return a.isBefore(i)}static isIdadeMaiorDozeAnos(t){return r().diff(this.dateFormatterAmerica(t),"years")>=12}}}}]);