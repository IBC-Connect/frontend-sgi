(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{sZxV:function(o,n,t){"use strict";t.d(n,"a",function(){return i});var e=t("mrSG");class i{constructor(o){this.aviso=o}mensagemSucesso(o){return Object(e.b)(this,void 0,void 0,function*(){const n=this.aviso.create({id:"sucesso",position:"top",message:o,duration:3e3,color:"success"});(yield n).present()})}mensagemError(o){return Object(e.b)(this,void 0,void 0,function*(){const n=this.aviso.create({id:"error",position:"top",message:o,duration:3e3,color:"danger"});(yield n).present()})}mensagemAlerta(o){return Object(e.b)(this,void 0,void 0,function*(){const n=this.aviso.create({id:"alerta",position:"top",message:o,duration:3e3,color:"warning"});(yield n).present()})}}},uh9W:function(o,n,t){"use strict";t.r(n),t.d(n,"CargoPageModule",function(){return g});var e=t("ofXK"),i=t("3Pt+"),a=t("TEn/"),r=t("tyNb"),c=t("sZxV"),s=t("fXoL"),d=t("EhKG");const b=[{path:"",component:(()=>{class o{constructor(o,n,t){this.cargoService=o,this.aviso=n,this.router=t;const e=this.router.getCurrentNavigation();this.cargo=e.extras.state.content,this.inicializar()}inicializar(){this.mensagens=new c.a(this.aviso)}disabledBotaoAtualizar(){return null==this.cargo.nome||null==this.cargo.descricao}editar(){this.cargo&&(this.cargo.nome=this.cargo.nome.toUpperCase(),this.cargo.descricao=this.cargo.descricao.toUpperCase(),this.cargoService.adicionarOuAtualizar(this.cargo),this.mensagens.mensagemSucesso("Cargo atualizado com sucesso!"),this.inicializar())}}return o.\u0275fac=function(n){return new(n||o)(s.Lb(d.a),s.Lb(a.M),s.Lb(r.g))},o.\u0275cmp=s.Fb({type:o,selectors:[["app-cargo"]],decls:29,vars:3,consts:[["color","primary"],["slot","start"],["defaultHref","inicio"],[1,"row-item"],["mode","md","position","stacked",1,"titulo-dado"],["mode","md","type","text","maxlength","100",3,"ngModel","ngModelChange"],["mode","md",3,"ngModel","ngModelChange"],[1,"ion-no-border"],["no-padding","","id","rodape"],["color","primary","type","submit","fill","solid","expand","full","mode","md",3,"disabled","click"]],template:function(o,n){1&o&&(s.Ob(0,"ion-header"),s.Ob(1,"ion-toolbar",0),s.Ob(2,"ion-buttons",1),s.Mb(3,"ion-back-button",2),s.Nb(),s.Ob(4,"ion-title"),s.ic(5,"Editar cargo"),s.Nb(),s.Nb(),s.Nb(),s.Ob(6,"ion-content"),s.Ob(7,"ion-grid"),s.Ob(8,"h2"),s.ic(9,"Informa\xe7\xf5es do Cargo"),s.Nb(),s.Ob(10,"ion-item",3),s.Ob(11,"ion-label",4),s.ic(12,"Nome"),s.Ob(13,"span"),s.ic(14,"*"),s.Nb(),s.Nb(),s.Ob(15,"ion-input",5),s.Wb("ngModelChange",function(o){return n.cargo.nome=o}),s.Nb(),s.Nb(),s.Ob(16,"ion-item",3),s.Ob(17,"ion-label",4),s.ic(18,"Descri\xe7\xe3o "),s.Ob(19,"span"),s.ic(20,"*"),s.Nb(),s.Nb(),s.Ob(21,"ion-textarea",6),s.Wb("ngModelChange",function(o){return n.cargo.descricao=o}),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(22,"ion-footer",7),s.Ob(23,"ion-toolbar",8),s.Ob(24,"ion-grid"),s.Ob(25,"ion-row"),s.Ob(26,"ion-col"),s.Ob(27,"ion-button",9),s.Wb("click",function(){return n.editar()}),s.ic(28," Atualizar"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&o&&(s.Bb(15),s.bc("ngModel",n.cargo.nome),s.Bb(6),s.bc("ngModel",n.cargo.descricao),s.Bb(6),s.bc("disabled",n.disabledBotaoAtualizar()))},directives:[a.l,a.E,a.g,a.d,a.e,a.D,a.i,a.k,a.o,a.r,a.n,a.L,i.f,i.j,i.l,a.C,a.j,a.v,a.h,a.f],styles:["ion-content[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]{--background:#e6e6e6}h2[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{--color:#fff;font-family:Lexend,sans-serif}.titulo-dado[_ngcontent-%COMP%], .titulo-dado-batismo[_ngcontent-%COMP%], .titulo-dado-select[_ngcontent-%COMP%], .titulo-dado-select-acesso[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%], ion-select[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{font-family:Rubik,sans-serif}ion-input[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{text-transform:uppercase;font-size:9pt}.titulo-dado[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{color:#2e2e3c}#rodape[_ngcontent-%COMP%]{--background:#e6e6e6}span[_ngcontent-%COMP%]{color:#eb445a}h2[_ngcontent-%COMP%]{font-size:13pt;font-weight:bolder;margin-left:1%}"]}),o})()}];let l=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=s.Jb({type:o}),o.\u0275inj=s.Ib({imports:[[r.i.forChild(b)],r.i]}),o})(),g=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=s.Jb({type:o}),o.\u0275inj=s.Ib({imports:[[e.c,i.e,a.F,l]]}),o})()}}]);