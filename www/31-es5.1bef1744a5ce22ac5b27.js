!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{alV5:function(e,r,i){"use strict";i.r(r),i.d(r,"CargoPageModule",function(){return O});var o=i("ofXK"),a=i("3Pt+"),s=i("TEn/"),c=i("tyNb"),u=i("mrSG"),l=i("sZxV"),b=i("YAOL"),f=i("fXoL"),g=i("EhKG");function m(t,e){if(1&t){var n=f.Pb();f.Ob(0,"ion-item-sliding"),f.Ob(1,"ion-item",7),f.Ob(2,"ion-label",8),f.Ob(3,"h1",9),f.ic(4),f.Nb(),f.ic(5),f.Nb(),f.Nb(),f.Ob(6,"ion-item-options",10),f.Ob(7,"button",11),f.Wb("click",function(){f.ec(n);var t=e.$implicit;return f.Yb().editarCargo(t)}),f.Mb(8,"ion-icon",12),f.Nb(),f.Ob(9,"button",13),f.Wb("click",function(){f.ec(n);var t=e.$implicit;return f.Yb().associarCargo(t)}),f.Mb(10,"ion-icon",14),f.Nb(),f.Ob(11,"button",15),f.Wb("click",function(){f.ec(n);var t=e.$implicit;return f.Yb().confirmarExclusao(t)}),f.Mb(12,"ion-icon",16),f.Nb(),f.Nb(),f.Nb()}if(2&t){var r=e.$implicit;f.Bb(4),f.jc(r.nome),f.Bb(1),f.kc(" ",r.responsavel?"Respons\xe1vel: ".concat(r.responsavel):""," ")}}var d,h,p,v=[{path:"",component:(d=function(){function e(n,r,i,o){t(this,e),this.cargoService=n,this.aviso=r,this.navCtrl=i,this.alertController=o,this.inicializar()}return n(e,[{key:"inicializar",value:function(){var t=this;this.mensagens=new l.a(this.aviso),this.redirecionador=new b.a(this.navCtrl),this.listaCargosObservable=this.cargoService.listar(),this.listaCargosObservable.subscribe(function(e){t.listaCargos=e,t.listaCargosFiltrados=e,t.numTotalCargos=t.listaCargos.length,t.listaCargosFiltrados.sort(function(t,e){return t.nome>e.nome?1:e.nome>t.nome?-1:0})})}},{key:"confirmarExclusao",value:function(t){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"Confirma\xe7\xe3o de exclus\xe3o",message:"Tem certeza que deseja excluir o cargo selecionado?",buttons:[{text:"N\xe3o",handler:function(){r.alertController.dismiss()}},{text:"Sim",handler:function(){r.excluirCargo(t)}}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"excluirCargo",value:function(t){this.cargoService.deletar(t.key),this.mensagens.mensagemSucesso("Cargo exclu\xeddo com sucesso!"),this.inicializar()}},{key:"editarCargo",value:function(t){this.navCtrl.navigateForward("/editar/cargo",{state:{content:t}})}},{key:"associarCargo",value:function(t){this.navCtrl.navigateForward("/associar/cargo",{state:{content:t}})}},{key:"onSearchTerm",value:function(t){this.listaCargosFiltrados=this.listaCargos;var e=t.detail.value;e&&""!==e.trim()&&(this.listaCargosFiltrados=this.listaCargosFiltrados.filter(function(t){return t.nome.toUpperCase().indexOf(e.trim().toUpperCase())>-1}))}}]),e}(),d.\u0275fac=function(t){return new(t||d)(f.Lb(g.a),f.Lb(s.M),f.Lb(s.H),f.Lb(s.a))},d.\u0275cmp=f.Fb({type:d,selectors:[["app-cargo"]],decls:13,vars:2,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["padding",""],["placeholder","Digite o nome do cargo","color","tertiary",3,"ionChange"],["align-items-center","","justify-content-center",""],[4,"ngFor","ngForOf"],["text-wrap","",1,"item-text-wrap"],["text-wrap","",1,"informacao-membro"],[1,"content-title"],["side","start"],["ion-button","",1,"bt-editar",3,"click"],["name","create",1,"icones"],["ion-button","","routerDirection","forward",1,"bt-associar",3,"click"],["name","git-compare",1,"icones"],["ion-button","",1,"bt-deletar",3,"click"],["name","trash",1,"icones"]],template:function(t,e){1&t&&(f.Ob(0,"ion-header"),f.Ob(1,"ion-toolbar",0),f.Ob(2,"ion-buttons",1),f.Mb(3,"ion-back-button",2),f.Nb(),f.Ob(4,"ion-title"),f.ic(5),f.Nb(),f.Nb(),f.Nb(),f.Ob(6,"ion-content",3),f.Ob(7,"ion-searchbar",4),f.Wb("ionChange",function(t){return e.onSearchTerm(t)}),f.Nb(),f.Ob(8,"ion-grid"),f.Ob(9,"ion-row",5),f.Ob(10,"ion-col"),f.Ob(11,"ion-list"),f.hc(12,m,13,2,"ion-item-sliding",6),f.Nb(),f.Nb(),f.Nb(),f.Nb(),f.Nb()),2&t&&(f.Bb(5),f.kc("Total de cargos cadastrados: ",e.numTotalCargos,""),f.Bb(7),f.bc("ngForOf",e.listaCargosFiltrados))},directives:[s.l,s.E,s.g,s.d,s.e,s.D,s.i,s.w,s.L,s.k,s.v,s.h,s.s,o.i,s.q,s.o,s.r,s.p,s.m],styles:["ion-searchbar[_ngcontent-%COMP%]{margin-top:15px;display:block;margin-left:auto;margin-right:auto;font-family:Rubik,sans-serif}.informacao-membro[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}h1[_ngcontent-%COMP%]{font-size:20px}.bt-editar[_ngcontent-%COMP%]{background:#a7a7aa}.bt-associar[_ngcontent-%COMP%]{background:#2e2e3c}.bt-deletar[_ngcontent-%COMP%]{background:#a57d51}.icones[_ngcontent-%COMP%]{color:#fff;font-size:20px}"]}),d)}],C=((p=function e(){t(this,e)}).\u0275fac=function(t){return new(t||p)},p.\u0275mod=f.Jb({type:p}),p.\u0275inj=f.Ib({imports:[[c.i.forChild(v)],c.i]}),p),O=((h=function e(){t(this,e)}).\u0275fac=function(t){return new(t||h)},h.\u0275mod=f.Jb({type:h}),h.\u0275inj=f.Ib({imports:[[o.c,a.e,s.F,C]]}),h)},sZxV:function(e,r,i){"use strict";i.d(r,"a",function(){return a});var o=i("mrSG"),a=function(){function e(n){t(this,e),this.aviso=n}return n(e,[{key:"mensagemSucesso",value:function(t){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.aviso.create({id:"sucesso",position:"top",message:t,duration:3e3,color:"success"}),e.next=3,n;case 3:e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}},{key:"mensagemError",value:function(t){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.aviso.create({id:"error",position:"top",message:t,duration:3e3,color:"danger"}),e.next=3,n;case 3:e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}},{key:"mensagemAlerta",value:function(t){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.aviso.create({id:"alerta",position:"top",message:t,duration:3e3,color:"warning"}),e.next=3,n;case 3:e.sent.present();case 4:case"end":return e.stop()}},e,this)}))}}]),e}()}}])}();