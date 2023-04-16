"use strict";(self.webpackChunkmind_games=self.webpackChunkmind_games||[]).push([[760],{8760:(g,c,t)=>{t.r(c),t.d(c,{HomeModule:()=>T});var r=t(6895),d=t(4736);const a=[{name:"Jogo dos Sons",imgUri:"",description:"Descubra a regra do jogo para saber o que toca e o que n\xe3o toca.",type:"Jogo solo",route:"sound-game",active:!0},{name:"Jogo dos Cantores",imgUri:"",description:"Descubra a regra do jogo para saber quem sabe ou n\xe3o cantar.",type:"Jogo solo",route:"singer-game",active:!0},{name:"Volta ao Mundo",imgUri:"",description:"Descubra a regra do jogo para saber o destino da viagem.",type:"Jogo solo",route:"travel-game",active:!0}];var i=t(902),m=t(7557),e=t(8256),u=t(1481);let p=(()=>{class o{constructor(n){this.router=n}openGame(){this.router.navigate([`/home/${this.game.route}`])}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["game-card"]],inputs:{game:"game"},decls:6,vars:2,consts:[[1,"example-card","pointer","bg-dark","text-light","px-4","py-3","rounded","shadow","border-0",3,"click"],[1,"m-0","p-0","mb-1","title-text"],[1,"mb-1","description-text"]],template:function(n,l){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return l.openGame()}),e.TgZ(1,"h1",1),e._uU(2),e.qZA(),e.TgZ(3,"div")(4,"p",2),e._uU(5),e.qZA()()()),2&n&&(e.xp6(2),e.hij(" ",l.game.name," "),e.xp6(3),e.Oqu(l.game.description))},styles:["button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)!important}button[_ngcontent-%COMP%]:active{filter:brightness(.9)!important}"]}),o})();const h=function(o){return{"opacity-25":o}};function v(o,s){if(1&o&&(e.TgZ(0,"div",5)(1,"div",0),e._UZ(2,"game-card",6),e.qZA()()),2&o){const n=s.$implicit;e.xp6(1),e.Q6J("ngClass",e.VKq(2,h,!n.active)),e.xp6(1),e.Q6J("game",n)}}const C=function(o){return{"px-2":o}},f=function(o,s){return{"big-text":o,"big-text-sm":s}},M=d.Bz.forChild([{path:"",title:"Home - Rules Games",component:(()=>{class o{constructor(n){this.meta=n,this.games=a,this.isMobile=m.L.isMobileDevice(),this.appName=i.Y.appName}ngOnInit(){this.meta.addTag({name:"title",content:"Regra do Jogo"}),this.meta.addTag({name:"description",content:"Descubra a regra do jogo para vencer os desafios"})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(u.h_))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:7,vars:11,consts:[[3,"ngClass"],[1,"pt-2"],[1,"mt-3","text-center","text-light","text-pixel","rounded",3,"ngClass"],[1,"row","mt-3"],["class","col-12 col-sm-6 mb-3",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","mb-3"],[3,"game"]],template:function(n,l){1&n&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),e._uU(3),e.ALo(4,"uppercase"),e.qZA()(),e.TgZ(5,"div",3),e.YNc(6,v,3,4,"div",4),e.qZA()()),2&n&&(e.Q6J("ngClass",e.VKq(6,C,l.isMobile)),e.xp6(2),e.Q6J("ngClass",e.WLB(8,f,!l.isMobile,l.isMobile)),e.xp6(1),e.Oqu(e.lcZ(4,4,l.appName)),e.xp6(3),e.Q6J("ngForOf",l.games))},dependencies:[r.mk,r.sg,p,r.gd]}),o})()},{path:"sound-game",loadChildren:()=>Promise.all([t.e(560),t.e(495)]).then(t.bind(t,5495)).then(o=>o.SoundGameModule)},{path:"singer-game",loadChildren:()=>Promise.all([t.e(560),t.e(183)]).then(t.bind(t,1183)).then(o=>o.SingerGameModule)},{path:"travel-game",loadChildren:()=>Promise.all([t.e(560),t.e(292)]).then(t.bind(t,4292)).then(o=>o.TravelGameModule)}]);let y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez]}),o})(),T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,M,y]}),o})()},7557:(g,c,t)=>{t.d(c,{L:()=>r});class r{static isMobileDevice(){let a=!1;const i=window.innerWidth,m=navigator.userAgent;return(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(m)||i<992)&&(a=!0),a}static scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}static scrollBottomTimeout(a){setTimeout(()=>{window.scrollTo({top:2e3,behavior:"smooth"})},a)}static previusPage(){window.history.back()}static addClassToElement(a,i){document.getElementById(a)?.classList.add(i)}static removeClassFromElement(a,i){document.getElementById(a)?.classList.remove(i)}static scaleElementTo(a,i){const m=document.getElementById(a);m&&(m.style.transform=`scale(${i})`)}static share(a,i,m){navigator.share&&navigator.share({title:a,text:i,url:m}).then(()=>{console.log("Obrigado por compartilhar!")}).catch(console.error)}}},902:(g,c,t)=>{t.d(c,{Y:()=>r});const r={appName:"Regra do Jogo"}}}]);