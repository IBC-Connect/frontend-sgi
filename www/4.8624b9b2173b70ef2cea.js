(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{IpJN:function(t,o,i){"use strict";i.r(o),i.d(o,"ProjetoAtivoPageModule",function(){return g});var e=i("ofXK"),n=i("3Pt+"),r=i("TEn/"),a=i("tyNb"),s=i("mrSG"),c=i("sZxV"),l=i("YAOL"),b=i("fXoL"),d=i("MoJo");function u(t,o){1&t&&(b.Ob(0,"h2"),b.ic(1," N\xe3o h\xe1 projetos ativos."),b.Nb())}function h(t,o){if(1&t){const t=b.Pb();b.Ob(0,"ion-searchbar",8),b.Wb("ionChange",function(o){return b.ec(t),b.Yb().pesquisarProjetos(o)}),b.Nb()}}function m(t,o){if(1&t){const t=b.Pb();b.Ob(0,"ion-item-sliding"),b.Ob(1,"ion-item",9),b.Ob(2,"ion-label",10),b.Ob(3,"h1",11),b.ic(4),b.Nb(),b.ic(5),b.Nb(),b.Nb(),b.Ob(6,"ion-item-options",12),b.Ob(7,"button",13),b.Wb("click",function(){b.ec(t);const i=o.$implicit;return b.Yb().editarProjeto(i)}),b.Mb(8,"ion-icon",14),b.Nb(),b.Ob(9,"button",15),b.Wb("click",function(){b.ec(t);const i=o.$implicit;return b.Yb().associarProjeto(i)}),b.Mb(10,"ion-icon",16),b.Nb(),b.Ob(11,"button",17),b.Wb("click",function(){b.ec(t);const i=o.$implicit;return b.Yb().confirmarInativacao(i)}),b.Mb(12,"ion-icon",18),b.Nb(),b.Nb(),b.Nb()}if(2&t){const t=o.$implicit;b.Bb(4),b.jc(t.nome),b.Bb(1),b.kc(" ",t.responsavel?"Respons\xe1vel: ".concat(t.responsavel):""," ")}}const p=[{path:"",component:(()=>{class t{constructor(t,o,i,e){this.projetoService=t,this.aviso=o,this.navegador=i,this.alertController=e}ngOnInit(){this.inicializar()}inicializar(){this.mensagens=new c.a(this.aviso),this.redirecionador=new l.a(this.navegador),this.listaProjetosObservable=this.projetoService.listar(),this.listaProjetosObservable.subscribe(t=>{this.listaProjetos=t,this.listaProjetosFiltrados=t,this.listaProjetos=this.listaProjetos.filter(t=>"Ativo"===t.situacao),this.listaProjetosFiltrados=this.listaProjetosFiltrados.filter(t=>"Ativo"===t.situacao),this.numTotalProjetos=this.listaProjetos.length,this.listaProjetosFiltrados.sort((t,o)=>t.nome>o.nome?1:o.nome>t.nome?-1:0)})}editarProjeto(t){this.navegador.navigateForward("/editar/projeto",{state:{content:t}})}pesquisarProjetos(t){this.listaProjetosFiltrados=this.listaProjetos;const o=t.detail.value;o&&""!==o.trim()&&(this.listaProjetosFiltrados=this.listaProjetosFiltrados.filter(t=>t.responsavel.toUpperCase().indexOf(o.trim().toUpperCase())>-1))}confirmarInativacao(t){return Object(s.b)(this,void 0,void 0,function*(){const o=yield this.alertController.create({header:"Confirma\xe7\xe3o de inativa\xe7\xe3o",message:"Tem certeza que deseja inativar o projeto selecionado?",buttons:[{text:"N\xe3o",handler:()=>{this.alertController.dismiss()}},{text:"Sim",handler:()=>{this.inativarProjeto(t)}}]});yield o.present()})}inativarProjeto(t){t.key&&(t.situacao="Inativo",this.projetoService.adicionarOuAtualizar(t),this.mensagens.mensagemSucesso("Projeto inativado com sucesso!"),this.inicializar())}associarProjeto(t){this.navegador.navigateForward("/associar/projeto",{state:{content:t}})}}return t.\u0275fac=function(o){return new(o||t)(b.Lb(d.a),b.Lb(r.M),b.Lb(r.H),b.Lb(r.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-projeto-ativo"]],decls:14,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["padding",""],[4,"ngIf"],["placeholder","Digite o nome do projeto","color","tertiary",3,"ionChange",4,"ngIf"],["align-items-center","","justify-content-center",""],[4,"ngFor","ngForOf"],["placeholder","Digite o nome do projeto","color","tertiary",3,"ionChange"],["text-wrap","",1,"item-text-wrap"],["text-wrap","",1,"informacao-membro"],[1,"content-title"],["side","start"],["ion-button","",1,"bt-editar",3,"click"],["name","create",1,"icones"],["ion-button","","routerDirection","forward",1,"bt-associar",3,"click"],["name","git-compare",1,"icones"],["ion-button","",1,"bt-deletar",3,"click"],["name","person-remove",1,"icones"]],template:function(t,o){1&t&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Mb(3,"ion-back-button",2),b.Nb(),b.Ob(4,"ion-title"),b.ic(5),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content",3),b.hc(7,u,2,0,"h2",4),b.hc(8,h,1,0,"ion-searchbar",5),b.Ob(9,"ion-grid"),b.Ob(10,"ion-row",6),b.Ob(11,"ion-col"),b.Ob(12,"ion-list"),b.hc(13,m,13,2,"ion-item-sliding",7),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.Bb(5),b.kc("Total de projetos ativos: ",o.numTotalProjetos,""),b.Bb(2),b.bc("ngIf",0==o.numTotalProjetos),b.Bb(1),b.bc("ngIf",0!=o.numTotalProjetos),b.Bb(5),b.bc("ngForOf",o.listaProjetosFiltrados))},directives:[r.l,r.E,r.g,r.d,r.e,r.D,r.i,e.j,r.k,r.v,r.h,r.s,e.i,r.w,r.L,r.q,r.o,r.r,r.p,r.m],styles:["ion-searchbar[_ngcontent-%COMP%]{margin-top:15px;display:block;margin-left:auto;margin-right:auto;font-family:Rubik,sans-serif}.informacao-membro[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{font-family:Lexend,sans-serif}h1[_ngcontent-%COMP%]{font-size:20px}h2[_ngcontent-%COMP%]{color:#a57d51;text-align:center}.bt-editar[_ngcontent-%COMP%]{background:#a7a7aa}.bt-associar[_ngcontent-%COMP%]{background:#2e2e3c}.bt-deletar[_ngcontent-%COMP%]{background:#a57d51}.icones[_ngcontent-%COMP%]{color:#fff;font-size:20px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[a.i.forChild(p)],a.i]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[e.c,n.e,r.F,f]]}),t})()}}]);