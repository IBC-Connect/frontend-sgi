!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Ab4i:function(e,n,o){"use strict";o.r(n),o.d(n,"MembroAtivoPageModule",function(){return M});var i=o("ofXK"),a=o("3Pt+"),s=o("TEn/"),c=o("tyNb"),m=o("mrSG"),u=o("JM5f"),b=o("sZxV"),l=o("fXoL"),f=o("fX5e");function v(t,e){1&t&&(l.Ob(0,"h2"),l.ic(1," N\xe3o h\xe1 membros ativos."),l.Nb())}function d(t,e){if(1&t){var r=l.Pb();l.Ob(0,"ion-searchbar",8),l.Wb("ionChange",function(t){return l.ec(r),l.Yb().pesquisarAtivos(t)}),l.Nb()}}function h(t,e){if(1&t){var r=l.Pb();l.Ob(0,"ion-item-sliding"),l.Ob(1,"ion-item",9),l.Ob(2,"ion-label",10),l.Ob(3,"h1",11),l.ic(4),l.Nb(),l.ic(5),l.Mb(6,"br"),l.ic(7),l.Nb(),l.Nb(),l.Ob(8,"ion-item-options",12),l.Ob(9,"button",13),l.Wb("click",function(){l.ec(r);var t=e.$implicit;return l.Yb().editarMembro(t)}),l.Mb(10,"ion-icon",14),l.Nb(),l.Ob(11,"button",15),l.Wb("click",function(){l.ec(r);var t=e.$implicit;return l.Yb().confirmarInativacao(t)}),l.Mb(12,"ion-icon",16),l.Nb(),l.Nb(),l.Nb()}if(2&t){var n=e.$implicit,o=l.Yb();l.Bb(4),l.jc(n.nomeCompleto),l.Bb(1),l.kc(" Data de nascimento: ",o.formatarDataDeNascimento(n.dataNascimento)," "),l.Bb(2),l.kc(" ",n.whatsapp?"Whatsapp: ".concat(n.whatsapp):""," ")}}var p,g,k,y=[{path:"",component:(p=function(){function e(r,n,o,i){t(this,e),this.membroService=r,this.navCtrl=n,this.aviso=o,this.alertController=i,this.mensagens=new b.a(this.aviso),this.inicializar()}return r(e,[{key:"inicializar",value:function(){var t=this;this.listaMembrosObservable=this.membroService.listar(),this.listaMembrosObservable.subscribe(function(e){t.membrosAtivos=e,t.membrosAtivosFiltrados=e,t.membrosAtivos=t.membrosAtivos.filter(function(e){return t.filtrarMembro(e)}),t.membrosAtivosFiltrados=t.membrosAtivosFiltrados.filter(function(e){return t.filtrarMembro(e)}),t.totalMembros=t.membrosAtivos.length,t.membrosAtivosFiltrados.sort(function(t,e){return t.nomeCompleto>e.nomeCompleto?1:e.nomeCompleto>t.nomeCompleto?-1:0}),t.membrosAtivos.map(function(t){return t.escolaridade=Number(t.escolaridade)}),t.membrosAtivos.map(function(t){return t.estadoCivil=Number(t.estadoCivil)})})}},{key:"filtrarMembro",value:function(t){return"Ativo"===t.situacao&&(void 0===t.classificacao||"Membro"===t.classificacao)}},{key:"editarMembro",value:function(t){this.navCtrl.navigateForward("/editar/membro",{state:{content:t}})}},{key:"formatarDataDeNascimento",value:function(t){return t.includes("/")?t:u.a.dateFormatterBrazil(t)}},{key:"confirmarInativacao",value:function(t){return Object(m.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var r,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"Confirma\xe7\xe3o de inativa\xe7\xe3o",message:"Tem certeza que deseja inativar o membro selecionado?",buttons:[{text:"N\xe3o",handler:function(){n.alertController.dismiss()}},{text:"Sim",handler:function(){n.inativarUsuario(t)}}]});case 2:return r=e.sent,e.next=5,r.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"inativarUsuario",value:function(t){t.key&&(t.situacao="Inativo",this.membroService.adicionarOuAtualizar(t),this.inicializar(),this.mensagens.mensagemSucesso("Usu\xe1rio inativado com sucesso!"))}},{key:"pesquisarAtivos",value:function(t){this.membrosAtivosFiltrados=this.membrosAtivos;var e=t.detail.value;e&&""!==e.trim()&&(this.membrosAtivosFiltrados=this.membrosAtivosFiltrados.filter(function(t){return t.nomeCompleto.toUpperCase().indexOf(e.trim().toUpperCase())>-1}),this.membrosAtivosFiltrados.sort(function(t,e){return t.nomeCompleto>e.nomeCompleto?1:e.nomeCompleto>t.nomeCompleto?-1:0}))}}]),e}(),p.\u0275fac=function(t){return new(t||p)(l.Lb(f.a),l.Lb(s.H),l.Lb(s.M),l.Lb(s.a))},p.\u0275cmp=l.Fb({type:p,selectors:[["app-membro-ativo"]],decls:14,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["padding",""],[4,"ngIf"],["placeholder","Digite o nome do membro.","color","tertiary",3,"ionChange",4,"ngIf"],["align-items-center","","justify-content-center",""],[4,"ngFor","ngForOf"],["placeholder","Digite o nome do membro.","color","tertiary",3,"ionChange"],["text-wrap","",1,"item-text-wrap"],["text-wrap","",1,"informacao-membro"],[1,"content-title"],["side","start"],["ion-button","",1,"bt-editar",3,"click"],["name","create",1,"icones"],["ion-button","",1,"bt-inativar",3,"click"],["name","person-remove",1,"icones"]],template:function(t,e){1&t&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar",0),l.Ob(2,"ion-buttons",1),l.Mb(3,"ion-back-button",2),l.Nb(),l.Ob(4,"ion-title"),l.ic(5),l.Nb(),l.Nb(),l.Nb(),l.Ob(6,"ion-content",3),l.hc(7,v,2,0,"h2",4),l.hc(8,d,1,0,"ion-searchbar",5),l.Ob(9,"ion-grid"),l.Ob(10,"ion-row",6),l.Ob(11,"ion-col"),l.Ob(12,"ion-list"),l.hc(13,h,13,3,"ion-item-sliding",7),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.Bb(5),l.kc("Total de membros ativos: ",e.totalMembros,""),l.Bb(2),l.bc("ngIf",0==e.totalMembros),l.Bb(1),l.bc("ngIf",e.totalMembros>0),l.Bb(5),l.bc("ngForOf",e.membrosAtivosFiltrados))},directives:[s.l,s.E,s.g,s.d,s.e,s.D,s.i,i.j,s.k,s.v,s.h,s.s,i.i,s.w,s.L,s.q,s.o,s.r,s.p,s.m],styles:["ion-searchbar[_ngcontent-%COMP%]{margin-top:15px;display:block;margin-left:auto;margin-right:auto;font-family:Rubik,sans-serif}.informacao-membro[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}h1[_ngcontent-%COMP%]{font-size:20px}h2[_ngcontent-%COMP%]{color:#a57d51;text-align:center}.bt-editar[_ngcontent-%COMP%]{background:#2e2e3c}.bt-inativar[_ngcontent-%COMP%]{background:#a57d51}.icones[_ngcontent-%COMP%]{color:#fff;font-size:20px}"]}),p)}],O=((k=function e(){t(this,e)}).\u0275fac=function(t){return new(t||k)},k.\u0275mod=l.Jb({type:k}),k.\u0275inj=l.Ib({imports:[[c.i.forChild(y)],c.i]}),k),M=((g=function e(){t(this,e)}).\u0275fac=function(t){return new(t||g)},g.\u0275mod=l.Jb({type:g}),g.\u0275inj=l.Ib({imports:[[i.c,a.e,s.F,O]]}),g)},JM5f:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var i=o("wd/R"),a=function(){function e(){t(this,e),i.locale("pt-br")}return r(e,null,[{key:"isDataDoisMaiorDataUm",value:function(t,e){return i(this.dateFormatterAmerica(e)).isBefore(this.dateFormatterAmerica(t))}},{key:"isDataFutura",value:function(t){return i(this.dateFormatterAmerica(t)).isAfter(this.dateFormatterAmerica((new Date).toLocaleDateString()))}},{key:"isDatasIguais",value:function(t,e){return i(this.dateFormatterAmerica(e)).isSame(this.dateFormatterAmerica(t))}},{key:"dateFormatterAmerica",value:function(t){return t.split("/").reverse().join("-")}},{key:"dateFormatterBrazil",value:function(t){return i(t).format("DD/MM/YYYY")}},{key:"numeroDiasEntreDuasDatas",value:function(t,e){var r=i(t),n=i(e);return i.duration(n.diff(r)).asDays()}},{key:"verificarIsDataValida",value:function(t){return i(this.dateFormatterAmerica(t)).isValid()}},{key:"calcularData",value:function(t,e){return i(t).add(e,"year").subtract(1,"days").format("YYYY-MM-DD")}},{key:"verificarIntervaloHora",value:function(t,e){var r=Number(t.substring(0,2))<12?i(t.concat("am"),"hh:mma"):i(t.concat("pm"),"hh:mmp"),n=Number(e.substring(0,2))<12?i(e.concat("am"),"hh:mma"):i(e.concat("pm"),"hh:mmp");return r.isBefore(n)}},{key:"isIdadeMaiorDozeAnos",value:function(t){return i().diff(this.dateFormatterAmerica(t),"years")>=12}}]),e}()},sZxV:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var i=o("mrSG"),a=function(){function e(r){t(this,e),this.aviso=r}return r(e,[{key:"mensagemSucesso",value:function(t){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.aviso.create({id:"sucesso",position:"top",message:t,duration:3e3,color:"success"}),e.next=3,r;case 3:e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}},{key:"mensagemError",value:function(t){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.aviso.create({id:"error",position:"top",message:t,duration:3e3,color:"danger"}),e.next=3,r;case 3:e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}},{key:"mensagemAlerta",value:function(t){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.aviso.create({id:"alerta",position:"top",message:t,duration:3e3,color:"warning"}),e.next=3,r;case 3:e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}}]),e}()}}])}();