(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{alV5:function(t,o,i){"use strict";i.r(o),i.d(o,"CargoPageModule",function(){return h});var n=i("ofXK"),e=i("3Pt+"),a=i("TEn/"),r=i("tyNb"),s=i("mrSG"),c=i("sZxV"),l=i("YAOL"),b=i("fXoL"),g=i("EhKG");function d(t,o){if(1&t){const t=b.Pb();b.Ob(0,"ion-item-sliding"),b.Ob(1,"ion-item",7),b.Ob(2,"ion-label",8),b.Ob(3,"h1",9),b.ic(4),b.Nb(),b.ic(5),b.Nb(),b.Nb(),b.Ob(6,"ion-item-options",10),b.Ob(7,"button",11),b.Wb("click",function(){b.ec(t);const i=o.$implicit;return b.Yb().editarCargo(i)}),b.Mb(8,"ion-icon",12),b.Nb(),b.Ob(9,"button",13),b.Wb("click",function(){b.ec(t);const i=o.$implicit;return b.Yb().associarCargo(i)}),b.Mb(10,"ion-icon",14),b.Nb(),b.Ob(11,"button",15),b.Wb("click",function(){b.ec(t);const i=o.$implicit;return b.Yb().confirmarExclusao(i)}),b.Mb(12,"ion-icon",16),b.Nb(),b.Nb(),b.Nb()}if(2&t){const t=o.$implicit;b.Bb(4),b.jc(t.nome),b.Bb(1),b.kc(" ",t.responsavel?"Respons\xe1vel: ".concat(t.responsavel):""," ")}}const m=[{path:"",component:(()=>{class t{constructor(t,o,i,n){this.cargoService=t,this.aviso=o,this.navCtrl=i,this.alertController=n,this.inicializar()}inicializar(){this.mensagens=new c.a(this.aviso),this.redirecionador=new l.a(this.navCtrl),this.listaCargosObservable=this.cargoService.listar(),this.listaCargosObservable.subscribe(t=>{this.listaCargos=t,this.listaCargosFiltrados=t,this.numTotalCargos=this.listaCargos.length,this.listaCargosFiltrados.sort((t,o)=>t.nome>o.nome?1:o.nome>t.nome?-1:0)})}confirmarExclusao(t){return Object(s.b)(this,void 0,void 0,function*(){const o=yield this.alertController.create({header:"Confirma\xe7\xe3o de exclus\xe3o",message:"Tem certeza que deseja excluir o cargo selecionado?",buttons:[{text:"N\xe3o",handler:()=>{this.alertController.dismiss()}},{text:"Sim",handler:()=>{this.excluirCargo(t)}}]});yield o.present()})}excluirCargo(t){this.cargoService.deletar(t.key),this.mensagens.mensagemSucesso("Cargo exclu\xeddo com sucesso!"),this.inicializar()}editarCargo(t){this.navCtrl.navigateForward("/editar/cargo",{state:{content:t}})}associarCargo(t){this.navCtrl.navigateForward("/associar/cargo",{state:{content:t}})}onSearchTerm(t){this.listaCargosFiltrados=this.listaCargos;const o=t.detail.value;o&&""!==o.trim()&&(this.listaCargosFiltrados=this.listaCargosFiltrados.filter(t=>t.nome.toUpperCase().indexOf(o.trim().toUpperCase())>-1))}}return t.\u0275fac=function(o){return new(o||t)(b.Lb(g.a),b.Lb(a.M),b.Lb(a.H),b.Lb(a.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-cargo"]],decls:13,vars:2,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["padding",""],["placeholder","Digite o nome do membro","color","tertiary",3,"ionChange"],["align-items-center","","justify-content-center",""],[4,"ngFor","ngForOf"],["text-wrap","",1,"item-text-wrap"],["text-wrap","",1,"informacao-membro"],[1,"content-title"],["side","start"],["ion-button","",1,"bt-editar",3,"click"],["name","create",1,"icones"],["ion-button","","routerDirection","forward",1,"bt-associar",3,"click"],["name","git-compare",1,"icones"],["ion-button","",1,"bt-deletar",3,"click"],["name","trash",1,"icones"]],template:function(t,o){1&t&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Mb(3,"ion-back-button",2),b.Nb(),b.Ob(4,"ion-title"),b.ic(5),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content",3),b.Ob(7,"ion-searchbar",4),b.Wb("ionChange",function(t){return o.onSearchTerm(t)}),b.Nb(),b.Ob(8,"ion-grid"),b.Ob(9,"ion-row",5),b.Ob(10,"ion-col"),b.Ob(11,"ion-list"),b.hc(12,d,13,2,"ion-item-sliding",6),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.Bb(5),b.kc("Total de cargos cadastrados: ",o.numTotalCargos,""),b.Bb(7),b.bc("ngForOf",o.listaCargosFiltrados))},directives:[a.l,a.E,a.g,a.d,a.e,a.D,a.i,a.w,a.L,a.k,a.v,a.h,a.s,n.i,a.q,a.o,a.r,a.p,a.m],styles:["ion-searchbar[_ngcontent-%COMP%]{margin-top:15px;display:block;margin-left:auto;margin-right:auto;font-family:Rubik,sans-serif}.informacao-membro[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}h1[_ngcontent-%COMP%]{font-size:20px}.bt-editar[_ngcontent-%COMP%]{background:#a7a7aa}.bt-associar[_ngcontent-%COMP%]{background:#2e2e3c}.bt-deletar[_ngcontent-%COMP%]{background:#a57d51}.icones[_ngcontent-%COMP%]{color:#fff;font-size:20px}"]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[r.i.forChild(m)],r.i]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[n.c,e.e,a.F,u]]}),t})()}}]);