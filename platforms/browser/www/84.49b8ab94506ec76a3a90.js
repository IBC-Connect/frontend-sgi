(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"2Imx":function(i,e,o){"use strict";o.r(e),o.d(e,"MeuPerfilPageModule",function(){return d});var b=o("ofXK"),t=o("3Pt+"),n=o("TEn/"),a=o("tyNb"),r=o("mrSG"),s=o("Xsc5"),c=o("aKcV"),l=o("fXoL"),m=o("tTKV"),p=o("fX5e");const u=[{path:"",component:(()=>{class i{constructor(i,e){this.autenticacao=i,this.membroService=e,this.usuario=i.pegarDadosLocalmente()?i.pegarDadosLocalmente():new c.a,this.membro=new s.a}ngOnInit(){return Object(r.b)(this,void 0,void 0,function*(){yield this.inicializar()})}inicializar(){return Object(r.b)(this,void 0,void 0,function*(){this.listaMembrosObservable=this.membroService.listar(),this.listaMembrosObservable.subscribe(i=>Object(r.b)(this,void 0,void 0,function*(){yield this.verificaDadosUsuario(i)}))})}verificaDadosUsuario(i){return Object(r.b)(this,void 0,void 0,function*(){yield i.find(i=>{this.usuario.email===i.email.toLowerCase()&&(this.membro=i)})})}}return i.\u0275fac=function(e){return new(e||i)(l.Lb(m.a),l.Lb(p.a))},i.\u0275cmp=l.Fb({type:i,selectors:[["app-meu-perfil"]],decls:48,vars:5,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],["src","https://editoragatobravo.netlify.com/images/clients/client.png","alt","Pastor"],["src","https://e7.pngegg.com/pngimages/556/580/png-clipart-computer-icons-symbol-user-profile-logo-symbol-miscellaneous-white.png","alt","ViceModerador"],["src","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/1200px-Circle-icons-mail.svg.png","alt","Financas"],["src","https://png.pngtree.com/element_our/md/20180626/md_5b321c98efaa6.jpg","alt","Conselho"]],template:function(i,e){1&i&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar",0),l.Ob(2,"ion-buttons",1),l.Mb(3,"ion-back-button",2),l.Nb(),l.Ob(4,"ion-title"),l.ic(5,"Meu Perfil"),l.Nb(),l.Nb(),l.Nb(),l.Ob(6,"ion-content"),l.Ob(7,"ion-grid"),l.Ob(8,"ion-row"),l.Ob(9,"ion-col"),l.Ob(10,"div"),l.Ob(11,"ion-list"),l.Ob(12,"ion-list-header"),l.ic(13," Minhas informa\xe7\xf5es "),l.Nb(),l.Ob(14,"ion-item"),l.Ob(15,"ion-avatar",1),l.Mb(16,"img",3),l.Nb(),l.Ob(17,"ion-label"),l.Ob(18,"h2"),l.ic(19,"Nome"),l.Nb(),l.Ob(20,"h3"),l.ic(21),l.Nb(),l.Nb(),l.Nb(),l.Ob(22,"ion-item"),l.Ob(23,"ion-avatar",1),l.Mb(24,"img",4),l.Nb(),l.Ob(25,"ion-label"),l.Ob(26,"h2"),l.ic(27,"Perfil"),l.Nb(),l.Ob(28,"h3"),l.ic(29),l.Nb(),l.Nb(),l.Nb(),l.Ob(30,"ion-item"),l.Ob(31,"ion-avatar",1),l.Mb(32,"img",5),l.Nb(),l.Ob(33,"ion-label"),l.Ob(34,"h2"),l.ic(35,"E-mail"),l.Nb(),l.Ob(36,"h3"),l.ic(37),l.Nb(),l.Nb(),l.Nb(),l.Ob(38,"ion-item"),l.Ob(39,"ion-avatar",1),l.Mb(40,"img",6),l.Nb(),l.Ob(41,"ion-label"),l.Ob(42,"h2"),l.ic(43,"Telefone/WhatsApp"),l.Nb(),l.Ob(44,"h3"),l.ic(45),l.Nb(),l.Ob(46,"h3"),l.ic(47),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&i&&(l.Bb(21),l.jc(e.membro.nomeCompleto),l.Bb(8),l.jc(e.membro.perfil),l.Bb(8),l.jc(e.membro.email),l.Bb(8),l.jc(e.membro.telefone),l.Bb(2),l.jc(e.membro.whatsapp))},directives:[n.l,n.E,n.g,n.d,n.e,n.D,n.i,n.k,n.v,n.h,n.s,n.t,n.o,n.c,n.r],styles:[""]}),i})()}];let h=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({imports:[[a.i.forChild(u)],a.i]}),i})(),d=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({imports:[[b.c,t.e,n.F,h]]}),i})()}}]);