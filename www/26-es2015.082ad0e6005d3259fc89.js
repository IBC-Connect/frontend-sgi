(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{JM5f:function(t,i,o){"use strict";o.d(i,"a",function(){return a});var e=o("wd/R");class a{constructor(){e.locale("pt-br")}static isDataDoisMaiorDataUm(t,i){return e(this.dateFormatterAmerica(i)).isBefore(this.dateFormatterAmerica(t))}static isDataFutura(t){return e(this.dateFormatterAmerica(t)).isAfter(this.dateFormatterAmerica((new Date).toLocaleDateString()))}static isDatasIguais(t,i){return e(this.dateFormatterAmerica(i)).isSame(this.dateFormatterAmerica(t))}static dateFormatterAmerica(t){return t.split("/").reverse().join("-")}static dateFormatterBrazil(t){return e(t).format("DD/MM/YYYY")}static numeroDiasEntreDuasDatas(t,i){const o=e(t),a=e(i);return e.duration(a.diff(o)).asDays()}static verificarIsDataValida(t){return e(this.dateFormatterAmerica(t)).isValid()}static calcularData(t,i){return e(t).add(i,"year").subtract(1,"days").format("YYYY-MM-DD")}static verificarIntervaloHora(t,i){let o=Number(t.substring(0,2))<12?e(t.concat("am"),"hh:mma"):e(t.concat("pm"),"hh:mmp"),a=Number(i.substring(0,2))<12?e(i.concat("am"),"hh:mma"):e(i.concat("pm"),"hh:mmp");return o.isBefore(a)}static isIdadeMaiorDozeAnos(t){return e().diff(this.dateFormatterAmerica(t),"years")>=12}}},qzYq:function(t,i,o){"use strict";o.r(i),o.d(i,"MembroInativoPageModule",function(){return v});var e=o("ofXK"),a=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),n=o("mrSG"),c=o("JM5f"),m=o("sZxV"),b=o("fXoL"),l=o("fX5e");function d(t,i){1&t&&(b.Ob(0,"h2"),b.ic(1," N\xe3o h\xe1 membros inativos."),b.Nb())}function u(t,i){if(1&t){const t=b.Pb();b.Ob(0,"ion-searchbar",8),b.Wb("ionChange",function(i){return b.ec(t),b.Yb().pesquisarInativos(i)}),b.Nb()}}function h(t,i){if(1&t){const t=b.Pb();b.Ob(0,"ion-item-sliding"),b.Ob(1,"ion-item",9),b.Ob(2,"ion-label",10),b.Ob(3,"h1",11),b.ic(4),b.Nb(),b.ic(5),b.Mb(6,"br"),b.ic(7),b.Nb(),b.Nb(),b.Ob(8,"ion-item-options",12),b.Ob(9,"button",13),b.Wb("click",function(){b.ec(t);const o=i.$implicit;return b.Yb().confirmarAtivacao(o)}),b.Mb(10,"ion-icon",14),b.Nb(),b.Nb(),b.Nb()}if(2&t){const t=i.$implicit,o=b.Yb();b.Bb(4),b.kc(" ",t.nomeCompleto,""),b.Bb(1),b.kc(" Data de nascimento: ",o.formatarDataDeNascimento(t.dataNascimento)," "),b.Bb(2),b.kc(" ",t.whatsapp?"Whatsapp: ".concat(t.whatsapp):""," ")}}const f=[{path:"",component:(()=>{class t{constructor(t,i,o){this.membroService=t,this.aviso=i,this.alertController=o,this.mensagens=new m.a(this.aviso),this.inicializar()}inicializar(){this.listaMembrosObservable=this.membroService.listar(),this.listaMembrosObservable.subscribe(t=>{this.membrosInativos=t,this.membrosInativosFiltrados=t,this.membrosInativos=this.membrosInativos.filter(t=>this.filtrarMembro(t)),this.membrosInativosFiltrados=this.membrosInativosFiltrados.filter(t=>this.filtrarMembro(t)),this.totalMembros=this.membrosInativos.length,this.membrosInativosFiltrados.sort((t,i)=>t.nomeCompleto>i.nomeCompleto?1:i.nomeCompleto>t.nomeCompleto?-1:0),this.membrosInativos.map(t=>t.escolaridade=Number(t.escolaridade)),this.membrosInativos.map(t=>t.estadoCivil=Number(t.estadoCivil))})}filtrarMembro(t){return"Inativo"===t.situacao&&(void 0===t.classificacao||"Membro"===t.classificacao)}formatarDataDeNascimento(t){return t.includes("/")?t:c.a.dateFormatterBrazil(t)}confirmarAtivacao(t){return Object(n.b)(this,void 0,void 0,function*(){const i=yield this.alertController.create({header:"Confirma\xe7\xe3o de ativa\xe7\xe3o",message:"Tem certeza que deseja ativar o membro selecionado?",buttons:[{text:"N\xe3o",handler:()=>{this.alertController.dismiss()}},{text:"Sim",handler:()=>{this.ativarUsuario(t)}}]});yield i.present()})}ativarUsuario(t){t.key&&(t.situacao="Ativo",this.membroService.adicionarOuAtualizar(t),this.mensagens.mensagemSucesso("Usu\xe1rio ativado com sucesso!"),this.inicializar())}pesquisarInativos(t){this.membrosInativosFiltrados=this.membrosInativos;const i=t.detail.value;i&&""!==i.trim()&&(this.membrosInativosFiltrados=this.membrosInativosFiltrados.filter(t=>t.nomeCompleto.toUpperCase().indexOf(i.trim().toUpperCase())>-1),this.membrosInativosFiltrados.sort((t,i)=>t.nomeCompleto>i.nomeCompleto?1:i.nomeCompleto>t.nomeCompleto?-1:0))}}return t.\u0275fac=function(i){return new(i||t)(b.Lb(l.a),b.Lb(r.M),b.Lb(r.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-membro-inativo"]],decls:14,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["padding",""],[4,"ngIf"],["placeholder","Digite o nome do membro","color","tertiary",3,"ionChange",4,"ngIf"],["align-items-center","","justify-content-center",""],[4,"ngFor","ngForOf"],["placeholder","Digite o nome do membro","color","tertiary",3,"ionChange"],["text-wrap","",1,"item-text-wrap"],["text-wrap","",1,"informacao-membro"],[1,"content-title"],["side","start"],["ion-button","",1,"bt-inativar",3,"click"],["name","person-remove",1,"icones"]],template:function(t,i){1&t&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Mb(3,"ion-back-button",2),b.Nb(),b.Ob(4,"ion-title"),b.ic(5),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content",3),b.hc(7,d,2,0,"h2",4),b.hc(8,u,1,0,"ion-searchbar",5),b.Ob(9,"ion-grid"),b.Ob(10,"ion-row",6),b.Ob(11,"ion-col"),b.Ob(12,"ion-list"),b.hc(13,h,11,3,"ion-item-sliding",7),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.Bb(5),b.kc("Total de membros inativos: ",i.totalMembros,""),b.Bb(2),b.bc("ngIf",0==i.totalMembros),b.Bb(1),b.bc("ngIf",i.totalMembros>0),b.Bb(5),b.bc("ngForOf",i.membrosInativosFiltrados))},directives:[r.l,r.E,r.g,r.d,r.e,r.D,r.i,e.j,r.k,r.v,r.h,r.s,e.i,r.w,r.L,r.q,r.o,r.r,r.p,r.m],styles:["ion-searchbar[_ngcontent-%COMP%]{margin-top:15px;display:block;margin-left:auto;margin-right:auto;font-family:Rubik,sans-serif}.informacao-membro[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}h1[_ngcontent-%COMP%]{font-size:20px}h2[_ngcontent-%COMP%]{color:#a57d51;text-align:center}.bt-editar[_ngcontent-%COMP%]{background:#2e2e3c}.bt-inativar[_ngcontent-%COMP%]{background:#a57d51}.icones[_ngcontent-%COMP%]{color:#fff;font-size:20px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[s.i.forChild(f)],s.i]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[e.c,a.e,r.F,p]]}),t})()},sZxV:function(t,i,o){"use strict";o.d(i,"a",function(){return a});var e=o("mrSG");class a{constructor(t){this.aviso=t}mensagemSucesso(t){return Object(e.b)(this,void 0,void 0,function*(){const i=this.aviso.create({id:"sucesso",position:"top",message:t,duration:3e3,color:"success"});(yield i).present()})}mensagemError(t){return Object(e.b)(this,void 0,void 0,function*(){const i=this.aviso.create({id:"error",position:"top",message:t,duration:3e3,color:"danger"});(yield i).present()})}mensagemAlerta(t){return Object(e.b)(this,void 0,void 0,function*(){const i=this.aviso.create({id:"alerta",position:"top",message:t,duration:3e3,color:"warning"});(yield i).present()})}}}}]);