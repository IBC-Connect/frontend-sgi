(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return i}),o.d(t,"c",function(){return n}),o.d(t,"d",function(){return c});const n=(e,t)=>null!==t.closest(e),r=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,i=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},a=/^[a-z][a-z0-9+\-.]*:/,c=async(e,t,o,n)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,o,n)}return!1}},"8cY0":function(e,t,o){"use strict";o.d(t,"a",function(){return n});class n{}},A2gu:function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return i});var n=o("Ke8Y");const r=async(e,t,o,r,i)=>{if(e)return e.attachViewToDom(t,o,i,r);if("string"!=typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");const a="string"==typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o;return r&&r.forEach(e=>a.classList.add(e)),i&&Object.assign(a,i),t.appendChild(a),await new Promise(e=>Object(n.c)(a,e)),a},i=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},JpJ2:function(e,t,o){"use strict";o.d(t,"a",function(){return i});var n=o("/FaQ"),r=o("Xsc5");class i{static formularioToMembro(e){let t=new r.a;return t.nomeCompleto=e.nomeCompleto.toUpperCase(),t.dataNascimento=e.dataNascimento,t.email=e.email?e.email.toLowerCase():"",t.escolaridade=Number(e.escolaridade),t.estadoCivil=Number(e.estadoCivil),t.perfil=e.perfil,t.dataBatismo=e.dataBatismo?e.dataBatismo:"",t.membroDesde=e.membroDesde?e.membroDesde:"",t.profissao=e.profissao.toUpperCase(),t.situacao="Ativo",t.classificacao=e.classificacao,t.whatsapp=e.whatsapp,t.telefone=e.telefone,t.trabalhandoAtualmente=e.trabalhandoAtualmente,t.cpf=e.cpf,t.senha=e.senha,t.endereco=new n.a,t.endereco.cep=e.cep,t.endereco.logradouro=e.logradouro.toUpperCase(),t.endereco.bairro=e.bairro.toUpperCase(),t.endereco.cidade=e.cidade.toUpperCase(),t.endereco.numero=e.numero,t.endereco.complemento=e.complemento?e.complemento.toUpperCase():"",t.endereco.estado=e.estado.toUpperCase(),e.key&&(t.key=e.key),t}}},RoIt:function(e,t,o){"use strict";o.d(t,"a",function(){return n});class n{static arrayEncontro(){return[{dia:"SEG",horarioInicial:null,horarioFinal:null},{dia:"TER",horarioInicial:null,horarioFinal:null},{dia:"QUA",horarioInicial:null,horarioFinal:null},{dia:"QUI",horarioInicial:null,horarioFinal:null},{dia:"SEX",horarioInicial:null,horarioFinal:null},{dia:"SAB",horarioInicial:null,horarioFinal:null},{dia:"DOM",horarioInicial:null,horarioFinal:null}]}}},U7Ex:function(e,t,o){"use strict";o.d(t,"a",function(){return n});class n{}},YAOL:function(e,t,o){"use strict";o.d(t,"a",function(){return n});class n{constructor(e){this.navegador=e}redicionarPara(e){this.navegador.navigateForward(e)}}},aKcV:function(e,t,o){"use strict";o.d(t,"a",function(){return n});class n{}},h3R7:function(e,t,o){"use strict";o.d(t,"a",function(){return n});const n={bubbles:{dur:1e3,circles:9,fn:(e,t,o)=>{const n=e*t/o-e+"ms",r=2*Math.PI*t/o;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(e,t,o)=>{const n=t/o,r=e*n-e+"ms",i=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/o-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/o-e+"ms"}})}}},itSG:function(e,t,o){"use strict";o.d(t,"a",function(){return n});class n{static diasDaSemana(){return[{codigo:"SEG",titulo:"Segunda-feira"},{codigo:"TER",titulo:"Ter\xe7a-feira"},{codigo:"QUA",titulo:"Quarta-feira"},{codigo:"QUI",titulo:"Quinta-feira"},{codigo:"SEX",titulo:"Sexta-feira"},{codigo:"SAB",titulo:"S\xe1bado"},{codigo:"DOM",titulo:"Domingo"}]}static horarios(){return["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"]}}},pX2f:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var n=o("2atR"),r=o("iWo5"),i=o("qULd");const a=(e,t)=>{let o,a;const c=(e,n,r)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(e,n);i&&t(i)?i!==o&&(l(),s(i,r)):l()},s=(e,t)=>{o=e,a||(a=o);const r=o;Object(n.f)(()=>r.classList.add("ion-activated")),t()},l=(e=!1)=>{if(!o)return;const t=o;Object(n.f)(()=>t.classList.remove("ion-activated")),e&&a!==o&&o.click(),o=void 0};return Object(r.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>c(e.currentX,e.currentY,i.a),onMove:e=>c(e.currentX,e.currentY,i.b),onEnd:()=>{l(!0),Object(i.e)(),a=void 0}})}},qULd:function(e,t,o){"use strict";o.d(t,"a",function(){return i}),o.d(t,"b",function(){return a}),o.d(t,"c",function(){return r}),o.d(t,"d",function(){return s}),o.d(t,"e",function(){return c});const n={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:o})},notification(e){const t=this.getEngine();if(!t)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},r=()=>{n.selection()},i=()=>{n.selectionStart()},a=()=>{n.selectionChanged()},c=()=>{n.selectionEnd()},s=e=>{n.impact(e)}},tHhQ:function(e,t,o){"use strict";o.d(t,"a",function(){return i});var n=o("/FaQ"),r=o("U7Ex");class i{static formularioToEvento(e){let t=new r.a;return t.nome=e.nome.toString().toUpperCase(),t.data=e.data,t.horarioInicio=e.horarioInicio,t.horarioFim=e.horarioFim,t.observacoes=e.observacoes?e.observacoes.toUpperCase():"",t.responsavel=e.responsavel,t.local=new n.a,t.local.cep=e.cep,t.local.logradouro=e.logradouro.toUpperCase(),t.local.bairro=e.bairro.toUpperCase(),t.local.cidade=e.cidade.toUpperCase(),t.local.numero=e.numero,t.local.complemento=e.complemento?e.complemento.toUpperCase():"",t.local.estado=e.estado.toUpperCase(),t}}},tyGv:function(e,t,o){"use strict";o.d(t,"a",function(){return n});class n{static isCampoPreenchido(e){return null!=e&&""!=e.trim()}}}}]);