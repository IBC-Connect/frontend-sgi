(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{FRyj:function(t,e,i){"use strict";i.r(e),i.d(e,"AniversarioDoMesPageModule",function(){return d});var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),a=i("tyNb"),s=i("mrSG"),b=i("wd/R"),c=i("JM5f"),m=i("fXoL"),p=i("fX5e");function l(t,e){if(1&t&&(m.Ob(0,"h2",11),m.ic(1,"Envie uma mensagem. Clique "),m.Ob(2,"a",12),m.ic(3,"aqui"),m.Nb(),m.ic(4,"."),m.Nb()),2&t){const t=m.Yb().$implicit,e=m.Yb();m.Bb(2),m.bc("href",e.formatarNumeroWhatsapp(t.whatsapp),m.fc)}}function h(t,e){if(1&t&&(m.Ob(0,"ion-row"),m.Ob(1,"ion-col",7),m.Ob(2,"h2"),m.ic(3),m.Nb(),m.Nb(),m.Ob(4,"ion-col",8),m.Ob(5,"h2"),m.ic(6),m.Nb(),m.Nb(),m.Ob(7,"ion-col",9),m.hc(8,l,5,1,"h2",10),m.Nb(),m.Nb()),2&t){const t=e.$implicit,i=m.Yb();m.Bb(3),m.kc(" ",i.formatarDataDeNascimento(t.dataNascimento).substring(0,5),""),m.Bb(3),m.jc(t.nomeCompleto),m.Bb(2),m.bc("ngIf",t.whatsapp)}}const f=[{path:"",component:(()=>{class t{constructor(t,e){this.membroService=t,this.navCtrl=e,this.inicializar(),b.locale("pt-br")}inicializar(){this.listaMembrosObservable=this.membroService.listar(),this.listaMembrosObservable.subscribe(t=>Object(s.b)(this,void 0,void 0,function*(){this.membrosAtivos=yield this.exibirAniversariantes(t),this.totalMembros=this.membrosAtivos?this.membrosAtivos.length:0,this.membrosAtivos.sort((t,e)=>t.nomeCompleto>e.nomeCompleto?1:e.nomeCompleto>t.nomeCompleto?-1:0)}))}exibirAniversariantes(t){return Object(s.b)(this,void 0,void 0,function*(){let e=new Array;return yield t.forEach(t=>{b(t.dataNascimento).month()===b(new Date).month()&&e.push(t)}),e})}formatarDataDeNascimento(t){return c.a.dateFormatterBrazil(t)}formatarNumeroWhatsapp(t){return`https://api.whatsapp.com/send/?phone=55${t.replace("(","").replace(")","").replace("-","")}&text&app_absent=0`}}return t.\u0275fac=function(e){return new(e||t)(m.Lb(p.a),m.Lb(r.H))},t.\u0275cmp=m.Fb({type:t,selectors:[["app-aniversario-do-mes"]],decls:14,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["center","","text-center",""],[1,"ion-text-center"],["src","/assets/img/parabens.gif"],[4,"ngFor","ngForOf"],["size-md","1","text-wrap",""],["text-wrap",""],["size-md","6","text-wrap",""],["id","whatsapp",4,"ngIf"],["id","whatsapp"],["target","_blank",3,"href"]],template:function(t,e){1&t&&(m.Ob(0,"ion-header"),m.Ob(1,"ion-toolbar",0),m.Ob(2,"ion-buttons",1),m.Mb(3,"ion-back-button",2),m.Nb(),m.Ob(4,"ion-title"),m.ic(5,"Anivers\xe1rios do m\xeas"),m.Nb(),m.Nb(),m.Nb(),m.Ob(6,"ion-content",3),m.Ob(7,"ion-grid",4),m.Mb(8,"img",5),m.Ob(9,"h1"),m.ic(10," Celebrar o anivers\xe1rio \xe9 agradecer a Deus o milagre da vida."),m.Nb(),m.Mb(11,"br"),m.Mb(12,"br"),m.hc(13,h,9,3,"ion-row",6),m.Nb(),m.Nb()),2&t&&(m.Bb(13),m.bc("ngForOf",e.membrosAtivos))},directives:[r.l,r.E,r.g,r.d,r.e,r.D,r.i,r.k,n.i,r.v,r.h,n.j],styles:["h1[_ngcontent-%COMP%]{text-align:center;margin:15px;font-size:16pt;color:#2e2e3c}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}h2[_ngcontent-%COMP%]{font-size:12pt}h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#a57d51}img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:20%}ion-grid[_ngcontent-%COMP%]{margin:15px}"]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({imports:[[a.i.forChild(f)],a.i]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({imports:[[n.c,o.e,r.F,u]]}),t})()}}]);