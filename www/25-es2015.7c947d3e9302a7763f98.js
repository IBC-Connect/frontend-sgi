(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Ab4i:function(t,i,e){"use strict";e.r(i),e.d(i,"MembroAtivoPageModule",function(){return v});var o=e("ofXK"),r=e("3Pt+"),a=e("TEn/"),s=e("tyNb"),n=e("mrSG"),c=e("JM5f"),m=e("sZxV"),b=e("fXoL"),l=e("fX5e");function d(t,i){1&t&&(b.Ob(0,"h2"),b.ic(1," N\xe3o h\xe1 membros ativos."),b.Nb())}function u(t,i){if(1&t){const t=b.Pb();b.Ob(0,"ion-searchbar",8),b.Wb("ionChange",function(i){return b.ec(t),b.Yb().pesquisarAtivos(i)}),b.Nb()}}function h(t,i){if(1&t){const t=b.Pb();b.Ob(0,"ion-item-sliding"),b.Ob(1,"ion-item",9),b.Ob(2,"ion-label",10),b.Ob(3,"h1",11),b.ic(4),b.Nb(),b.ic(5),b.Mb(6,"br"),b.ic(7),b.Nb(),b.Nb(),b.Ob(8,"ion-item-options",12),b.Ob(9,"button",13),b.Wb("click",function(){b.ec(t);const e=i.$implicit;return b.Yb().editarMembro(e)}),b.Mb(10,"ion-icon",14),b.Nb(),b.Ob(11,"button",15),b.Wb("click",function(){b.ec(t);const e=i.$implicit;return b.Yb().confirmarInativacao(e)}),b.Mb(12,"ion-icon",16),b.Nb(),b.Nb(),b.Nb()}if(2&t){const t=i.$implicit,e=b.Yb();b.Bb(4),b.jc(t.nomeCompleto),b.Bb(1),b.kc(" Data de nascimento: ",e.formatarDataDeNascimento(t.dataNascimento)," "),b.Bb(2),b.kc(" ",t.whatsapp?"Whatsapp: ".concat(t.whatsapp):""," ")}}const f=[{path:"",component:(()=>{class t{constructor(t,i,e,o){this.membroService=t,this.navCtrl=i,this.aviso=e,this.alertController=o,this.mensagens=new m.a(this.aviso),this.inicializar()}inicializar(){this.listaMembrosObservable=this.membroService.listar(),this.listaMembrosObservable.subscribe(t=>{this.membrosAtivos=t,this.membrosAtivosFiltrados=t,this.membrosAtivos=this.membrosAtivos.filter(t=>this.filtrarMembro(t)),this.membrosAtivosFiltrados=this.membrosAtivosFiltrados.filter(t=>this.filtrarMembro(t)),this.totalMembros=this.membrosAtivos.length,this.membrosAtivosFiltrados.sort((t,i)=>t.nomeCompleto>i.nomeCompleto?1:i.nomeCompleto>t.nomeCompleto?-1:0),this.membrosAtivos.map(t=>t.escolaridade=Number(t.escolaridade)),this.membrosAtivos.map(t=>t.estadoCivil=Number(t.estadoCivil))})}filtrarMembro(t){return"Ativo"===t.situacao&&(void 0===t.classificacao||"Membro"===t.classificacao)}editarMembro(t){this.navCtrl.navigateForward("/editar/membro",{state:{content:t}})}formatarDataDeNascimento(t){return t.includes("/")?t:c.a.dateFormatterBrazil(t)}confirmarInativacao(t){return Object(n.b)(this,void 0,void 0,function*(){const i=yield this.alertController.create({header:"Confirma\xe7\xe3o de inativa\xe7\xe3o",message:"Tem certeza que deseja inativar o membro selecionado?",buttons:[{text:"N\xe3o",handler:()=>{this.alertController.dismiss()}},{text:"Sim",handler:()=>{this.inativarUsuario(t)}}]});yield i.present()})}inativarUsuario(t){t.key&&(t.situacao="Inativo",this.membroService.adicionarOuAtualizar(t),this.inicializar(),this.mensagens.mensagemSucesso("Usu\xe1rio inativado com sucesso!"))}pesquisarAtivos(t){this.membrosAtivosFiltrados=this.membrosAtivos;const i=t.detail.value;i&&""!==i.trim()&&(this.membrosAtivosFiltrados=this.membrosAtivosFiltrados.filter(t=>t.nomeCompleto.toUpperCase().indexOf(i.trim().toUpperCase())>-1),this.membrosAtivosFiltrados.sort((t,i)=>t.nomeCompleto>i.nomeCompleto?1:i.nomeCompleto>t.nomeCompleto?-1:0))}}return t.\u0275fac=function(i){return new(i||t)(b.Lb(l.a),b.Lb(a.H),b.Lb(a.M),b.Lb(a.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-membro-ativo"]],decls:14,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["padding",""],[4,"ngIf"],["placeholder","Digite o nome do membro","color","tertiary",3,"ionChange",4,"ngIf"],["align-items-center","","justify-content-center",""],[4,"ngFor","ngForOf"],["placeholder","Digite o nome do membro","color","tertiary",3,"ionChange"],["text-wrap","",1,"item-text-wrap"],["text-wrap","",1,"informacao-membro"],[1,"content-title"],["side","start"],["ion-button","",1,"bt-editar",3,"click"],["name","create",1,"icones"],["ion-button","",1,"bt-inativar",3,"click"],["name","person-remove",1,"icones"]],template:function(t,i){1&t&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Mb(3,"ion-back-button",2),b.Nb(),b.Ob(4,"ion-title"),b.ic(5),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content",3),b.hc(7,d,2,0,"h2",4),b.hc(8,u,1,0,"ion-searchbar",5),b.Ob(9,"ion-grid"),b.Ob(10,"ion-row",6),b.Ob(11,"ion-col"),b.Ob(12,"ion-list"),b.hc(13,h,13,3,"ion-item-sliding",7),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.Bb(5),b.kc("Total de membros ativos: ",i.totalMembros,""),b.Bb(2),b.bc("ngIf",0==i.totalMembros),b.Bb(1),b.bc("ngIf",i.totalMembros>0),b.Bb(5),b.bc("ngForOf",i.membrosAtivosFiltrados))},directives:[a.l,a.E,a.g,a.d,a.e,a.D,a.i,o.j,a.k,a.v,a.h,a.s,o.i,a.w,a.L,a.q,a.o,a.r,a.p,a.m],styles:["ion-searchbar[_ngcontent-%COMP%]{margin-top:15px;display:block;margin-left:auto;margin-right:auto;font-family:Rubik,sans-serif}.informacao-membro[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}h1[_ngcontent-%COMP%]{font-size:20px}h2[_ngcontent-%COMP%]{color:#a57d51;text-align:center}.bt-editar[_ngcontent-%COMP%]{background:#2e2e3c}.bt-inativar[_ngcontent-%COMP%]{background:#a57d51}.icones[_ngcontent-%COMP%]{color:#fff;font-size:20px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[s.i.forChild(f)],s.i]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[o.c,r.e,a.F,p]]}),t})()},JM5f:function(t,i,e){"use strict";e.d(i,"a",function(){return r});var o=e("wd/R");class r{constructor(){o.locale("pt-br")}static isDataDoisMaiorDataUm(t,i){return o(this.dateFormatterAmerica(i)).isBefore(this.dateFormatterAmerica(t))}static isDataFutura(t){return o(this.dateFormatterAmerica(t)).isAfter(this.dateFormatterAmerica((new Date).toLocaleDateString()))}static isDatasIguais(t,i){return o(this.dateFormatterAmerica(i)).isSame(this.dateFormatterAmerica(t))}static dateFormatterAmerica(t){return t.split("/").reverse().join("-")}static dateFormatterBrazil(t){return o(t).format("DD/MM/YYYY")}static numeroDiasEntreDuasDatas(t,i){const e=o(t),r=o(i);return o.duration(r.diff(e)).asDays()}static verificarIsDataValida(t){return o(this.dateFormatterAmerica(t)).isValid()}static calcularData(t,i){return o(t).add(i,"year").subtract(1,"days").format("YYYY-MM-DD")}static verificarIntervaloHora(t,i){let e=Number(t.substring(0,2))<12?o(t.concat("am"),"hh:mma"):o(t.concat("pm"),"hh:mmp"),r=Number(i.substring(0,2))<12?o(i.concat("am"),"hh:mma"):o(i.concat("pm"),"hh:mmp");return e.isBefore(r)}static isIdadeMaiorDozeAnos(t){return o().diff(this.dateFormatterAmerica(t),"years")>=12}}},sZxV:function(t,i,e){"use strict";e.d(i,"a",function(){return r});var o=e("mrSG");class r{constructor(t){this.aviso=t}mensagemSucesso(t){return Object(o.b)(this,void 0,void 0,function*(){const i=this.aviso.create({id:"sucesso",position:"top",message:t,duration:3e3,color:"success"});(yield i).present()})}mensagemError(t){return Object(o.b)(this,void 0,void 0,function*(){const i=this.aviso.create({id:"error",position:"top",message:t,duration:3e3,color:"danger"});(yield i).present()})}mensagemAlerta(t){return Object(o.b)(this,void 0,void 0,function*(){const i=this.aviso.create({id:"alerta",position:"top",message:t,duration:3e3,color:"warning"});(yield i).present()})}}}}]);