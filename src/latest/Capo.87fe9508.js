import{e,a as a,d as t,T as r,c as s}from"./preact.3d0be470.js";import{u as l,L as i,E as n,I as o}from"./index.26929406.js";let c="Co02os",u="Co021p",d="Co0pr",p="Co02n3",m="Co0u4",h="Co02e1",x="Co0156",y="Co028a",f="Co01mx",N="Co0156 Co0z7",w="Co02os Co033q",v="Co02os Co02v6",P="Co02os Co033q Co01t0",g="Co02f1",S="Co0d2",T="Co02e1 Co011p",b="Co02e1 Co0rk",k="Co02e1 Co01b4",$="Co0eb",C="Co0u4 Co0zs",_="Co0u4 Co035k",B="Co01mx Co02su",L="Co0u4 Co022n",D="Co01mx Co0eh",H="Co0u4 Co022e",A="Co01mx Co0mr",E="Co0u4 Co02d3",F="Co0u4 Co0va",M="Co0sc",O="Co0sc Co012h",z="Co024j",G={button:"Co02os",circle:"Co021p",rect:"Co0pr",tag:"Co02n3",shape:"Co0u4",text:"Co02e1",play:"Co0156",lock:"Co028a",stroke:"Co01mx",playLoading:"Co0156 Co0z7",active:"Co02os Co033q",main:"Co02os Co02v6",mainActive:"Co02os Co033q Co01t0",icon:"Co02f1",warningCircle:"Co0d2",textSpeed:"Co02e1 Co011p",textHelp:"Co02e1 Co0rk",textBpm:"Co02e1 Co01b4",tuning:"Co0eb",speed:"Co0u4 Co0zs",editor:"Co0u4 Co035k",loop:"Co01mx Co02su",solo:"Co0u4 Co022n",mute:"Co01mx Co0eh",learn:"Co0u4 Co022e",print:"Co01mx Co0mr",countin:"Co0u4 Co02d3",metronome:"Co0u4 Co0va",arrow:"Co0sc","arrow-down":"Co0sc Co012h",new:"Co024j"},I=()=>e("filter",{id:"svg_shadow",x:"-50%",y:"-50%",width:"200%",height:"200%","color-interpolation-filters":"sRGB",children:[e("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),e("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e("feOffset",{dy:"1"}),e("feGaussianBlur",{stdDeviation:"4"}),e("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),e("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_4297_138"}),e("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_4297_138",result:"shape"})]}),R=()=>e("filter",{id:"svg_shadow_light",x:"-50%",y:"-50%",width:"200%",height:"200%","color-interpolation-filters":"sRGB",children:[e("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),e("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e("feOffset",{dy:"1"}),e("feGaussianBlur",{stdDeviation:"1"}),e("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),e("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_4298_183"}),e("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_4298_183",result:"shape"})]}),U="M-1 4c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2zm12 0c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2z",W="M1 3s0-2 2-2 12.2 7 15 8.9c2.7 2 2.7 3.2 0 5.2-2.8 1.9-13 8.9-15 8.9s-2-2-2-2z";function j(){return a("defs",null,a(I,{}),a(R,{}))}class q extends t{componentDidUpdate(e){let{canPlay:a}=this.props;e.canPlay&&!a?(this.animationTimer&&clearTimeout(this.animationTimer),this.animationTimer=setTimeout(()=>this.setState({loading:!0}),600)):!e.canPlay&&a&&(this.animationTimer&&clearTimeout(this.animationTimer),this.animationTimer=setTimeout(()=>this.setState({loading:!1}),600))}constructor(e){super(e),this.state={loading:!e.canPlay}}render(){let{onClick:e,shouldPlay:t,canPlay:r,hideDefs:s,title:l,titlePressed:i}=this.props,{loading:n}=this.state,o=t?G.mainActive:G.main,c=n?G.playLoading:G.play;return a("button",{className:o,onClick:e,"aria-pressed":t,"data-can-play":r},a("svg",{className:G.icon,width:65,height:65,viewBox:"-5 -4 65 65",role:"img","aria-labelledby":"mainplay-title-id","data-loading":n},!s&&j(),a("title",{},t&&i?i:l),a("circle",{className:G.circle,cx:"27.5",cy:"27.5",r:"27.5",filter:"url(#svg_shadow)"}),a("path",{className:c,transform:"translate(19 15)",d:t?"M-1 4c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2zm12 0c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2z":"M1 3s0-2 2-2 12.2 7 15 8.9c2.7 2 2.7 3.2 0 5.2-2.8 1.9-13 8.9-15 8.9s-2-2-2-2z"})))}}let J="M29.5 17.5h2v10h-12m3-2.6l-3 2.6 3 2.6m-6.5-2.5h-2v-10h12m-3-2.6l3 2.6-3 2.6",K="M12.5 24a10 10 0 1 1 20 0 8 8 0 0 1-1.3 4c-2 2-5 2.5-5 2.5a.6.6 0 0 1-.7-.5v-9a.6.6 0 0 1 .7-.5l4.55 2.8a8.3 8.5 0 0 0-16.5 0l4.55-2.8a.6.6 0 0 1 .7.5v9a.6.6 0 0 1-.7.5s-3-.5-5-2.5a8 8 0 0 1-1.3-4zm5.5-1a.5.5 0 0 0-.5-.3c-2.8 2-3 1.7-3 2.7 0 .9.5 2 3 2.9a.5.5 0 0 0 .5-.3zm9 5a.5.5 0 0 0 .5.3c2.5-.9 3-2 3-2.9 0-1-.2-.7-3-2.7a.5.5 0 0 0-.5.3z",Q="M23.5 30c0 1-1 2-2 1l-5-5h-2.5q-1 0-1-1v-4.5q0-1 1-1h2.5l5-5c1-1 2 0 2 1z m3-10.5l6 6m0-6l-6 6",V="M16.5 28h-2c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h16c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5h-2v3c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5zm0 0v-4h12v4m-12-8v-6h12v6m-9.5 9h7m-7-2h7",X="M34 22a11.5 11.5 0 1 0-1 4.7l-1.8-.8a9.5 9.5 0 1 1-8.7-13.4v2A7.5 7.5 0 0 1 30 22zm-13.2 2.65c0 .6.5 1.3 1.45 1.3s1.45-.65 1.45-1.3S23.35 23 22.25 23H21v-1.5h1.25c1 0 1.3-1 1.3-1.5s-.4-1.2-1.3-1.2-1.35.75-1.35 1.2h-2c0-1.2 1-2.75 3.35-2.75S25.5 18.8 25.5 20s-.9 2-1.5 2.2c.85.25 1.7 1.15 1.7 2.45s-1 2.8-3.45 2.8-3.45-1.5-3.45-2.8",Y="M 1 14 L 7 7.5 L 1 1",Z="M9.7 19.1h-6m2-2-2 2 2 2m10-2h6m-2 2 2-2-2-2m-10-10v7s0 3 3 3 3-3 3-3v-7m-3 10v5",ee="M0 16.03h8.93l-.49 1.6H0v-1.6zM3.8 4.6h8.4a.8.8 0 1 1 0 1.6H3.8a.8.8 0 1 1 0-1.6zm3.4 5V1.2a.8.8 0 1 1 1.6 0v8.4a.8.8 0 0 1-1.6 0zM15.8.4c.51 0 .93.42.93.94v13.12c0 .52-.81 1.45-.94.94-.12-.52-.08-1.95-.94-1.36V1.34c0-.52.42-.94.94-.94zm.6 13.27c.27.37.39.96.33 1.41-.06.42-.27.94-.55 1.37a8.88 8.88 0 0 1-2.67 2.52 9.69 9.69 0 0 1-3.5 1.4c-.55.08-1.14.08-1.59-.02a2.44 2.44 0 0 1-1.32-.8c-.28-.37-.4-.96-.33-1.41.06-.42.27-.93.54-1.37a8.88 8.88 0 0 1 2.67-2.52 9.67 9.67 0 0 1 3.5-1.4 4.6 4.6 0 0 1 1.6.02c.47.11 1.03.43 1.31.8zm-1.67.7a2.46 2.46 0 0 0-.93 0c-.86.14-1.83.5-2.86 1.16a6.96 6.96 0 0 0-2.2 2.05c-.2.33-.3.55-.33.8-.03.22-.03.22.04.32.08.1.08.1.31.15.26.06.53.06.94 0 .86-.13 1.83-.5 2.86-1.16a6.94 6.94 0 0 0 2.19-2.05c.2-.33.3-.55.33-.8.03-.21.04-.21-.04-.32-.08-.1-.08-.1-.3-.15zm.15 1.66H25v1.6H13.8l1.08-1.6z",ea="m10.7 4.7-.4-2.2c0-.1 0-.2-.2-.2H4c-.1 0-.2 0-.2.2L2.3 14.7h3.5l9.6-12.3c.7-.8 2 .2 1.2 1L8 14.7h3.7l-.1-1.5A.8.8 0 1 1 13 13l.2 2.4.4 2.9c0 1-.8 2-1.8 2H2c-1 0-1.9-1-1.8-2l1.8-16C2.2 1.3 3 .7 4 .7h6.2c1 0 1.7.6 1.8 1.5l.4 2.2a.8.8 0 0 1-1.6.3ZM2.2 16.3l-.3 2.2.2.2H12l.2-.2-.3-2.2H2.2Z";function et(e){switch(e){case"loop":return"M29.5 17.5h2v10h-12m3-2.6l-3 2.6 3 2.6m-6.5-2.5h-2v-10h12m-3-2.6l3 2.6-3 2.6";case"solo":return"M12.5 24a10 10 0 1 1 20 0 8 8 0 0 1-1.3 4c-2 2-5 2.5-5 2.5a.6.6 0 0 1-.7-.5v-9a.6.6 0 0 1 .7-.5l4.55 2.8a8.3 8.5 0 0 0-16.5 0l4.55-2.8a.6.6 0 0 1 .7.5v9a.6.6 0 0 1-.7.5s-3-.5-5-2.5a8 8 0 0 1-1.3-4zm5.5-1a.5.5 0 0 0-.5-.3c-2.8 2-3 1.7-3 2.7 0 .9.5 2 3 2.9a.5.5 0 0 0 .5-.3zm9 5a.5.5 0 0 0 .5.3c2.5-.9 3-2 3-2.9 0-1-.2-.7-3-2.7a.5.5 0 0 0-.5.3z";case"mute":return"M23.5 30c0 1-1 2-2 1l-5-5h-2.5q-1 0-1-1v-4.5q0-1 1-1h2.5l5-5c1-1 2 0 2 1z m3-10.5l6 6m0-6l-6 6";case"print":return"M16.5 28h-2c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h16c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5h-2v3c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5zm0 0v-4h12v4m-12-8v-6h12v6m-9.5 9h7m-7-2h7";case"countin":return"M34 22a11.5 11.5 0 1 0-1 4.7l-1.8-.8a9.5 9.5 0 1 1-8.7-13.4v2A7.5 7.5 0 0 1 30 22zm-13.2 2.65c0 .6.5 1.3 1.45 1.3s1.45-.65 1.45-1.3S23.35 23 22.25 23H21v-1.5h1.25c1 0 1.3-1 1.3-1.5s-.4-1.2-1.3-1.2-1.35.75-1.35 1.2h-2c0-1.2 1-2.75 3.35-2.75S25.5 18.8 25.5 20s-.9 2-1.5 2.2c.85.25 1.7 1.15 1.7 2.45s-1 2.8-3.45 2.8-3.45-1.5-3.45-2.8";case"editor":return"M0 16.03h8.93l-.49 1.6H0v-1.6zM3.8 4.6h8.4a.8.8 0 1 1 0 1.6H3.8a.8.8 0 1 1 0-1.6zm3.4 5V1.2a.8.8 0 1 1 1.6 0v8.4a.8.8 0 0 1-1.6 0zM15.8.4c.51 0 .93.42.93.94v13.12c0 .52-.81 1.45-.94.94-.12-.52-.08-1.95-.94-1.36V1.34c0-.52.42-.94.94-.94zm.6 13.27c.27.37.39.96.33 1.41-.06.42-.27.94-.55 1.37a8.88 8.88 0 0 1-2.67 2.52 9.69 9.69 0 0 1-3.5 1.4c-.55.08-1.14.08-1.59-.02a2.44 2.44 0 0 1-1.32-.8c-.28-.37-.4-.96-.33-1.41.06-.42.27-.93.54-1.37a8.88 8.88 0 0 1 2.67-2.52 9.67 9.67 0 0 1 3.5-1.4 4.6 4.6 0 0 1 1.6.02c.47.11 1.03.43 1.31.8zm-1.67.7a2.46 2.46 0 0 0-.93 0c-.86.14-1.83.5-2.86 1.16a6.96 6.96 0 0 0-2.2 2.05c-.2.33-.3.55-.33.8-.03.22-.03.22.04.32.08.1.08.1.31.15.26.06.53.06.94 0 .86-.13 1.83-.5 2.86-1.16a6.94 6.94 0 0 0 2.19-2.05c.2-.33.3-.55.33-.8.03-.21.04-.21-.04-.32-.08-.1-.08-.1-.3-.15zm.15 1.66H25v1.6H13.8l1.08-1.6z";case"arrow":case"arrow-down":return"M 1 14 L 7 7.5 L 1 1";case"tuning":return"M9.7 19.1h-6m2-2-2 2 2 2m10-2h6m-2 2 2-2-2-2m-10-10v7s0 3 3 3 3-3 3-3v-7m-3 10v5";case"metronome":return ea}}function er(e){switch(e){case"speed":return a("text",{className:G.textSpeed,"text-anchor":"middle",x:"22.5",y:"31"},"SPEED");case"help":return a("text",{className:G.textHelp,"text-anchor":"middle",x:"22",y:"30"},"?");default:return a("path",{className:G[e],d:et(e)})}}class es extends t{render(){let{pressed:e,disabled:t,onClick:r,icon:s,text:l,title:i,titlePressed:n,hasPopup:o,isNew:c,warning:u,lock:d}=this.props,p=e?G.active:G.button,m=`${s}-title-id`,h="arrow"===s||"arrow-down"===s?"control-minimizer":`control-${s}`,x=!e&&u?G.warningCircle:G.circle;return a("button",{className:p,onClick:r,"aria-haspopup":o,"aria-pressed":e,id:h,disabled:t},a("svg",{className:G.icon,width:55,height:55,viewBox:"-4 -4 55 55",role:"img","aria-labelledby":m},a("title",{id:m},e&&n?n:i),"arrow"===s||"arrow-down"===s?a("rect",{className:G.rect,x:2,y:2,width:40,height:40,rx:6,filter:"url(#svg_shadow)"}):a("circle",{className:x,cx:"22.5",cy:"22.5",r:"22.5",filter:"url(#svg_shadow)"}),er(s),l&&a("text",{className:G.text,"text-anchor":"middle",x:"22.5",y:"21"},l),d&&a("g",{transform:"translate(22, 24)"},a("circle",{className:x,cx:"16.5",cy:"15.5",r:"8.5",filter:"url(#svg_shadow)"}),a("path",{className:G.lock,d:"M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z"}),a("circle",{className:G.shape,cx:16.5,cy:17,r:.8}))),c&&a("div",{className:G.new},"NEW"))}}function el(){return a("svg",{width:54,height:54,viewBox:"0 0 54 54"},a("path",{d:"M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6zm-6.5 22.5h-10v-10h-9v10h-10v9h10v10h9v-10h10v-9z",fill:"#68d517"}))}function ei(e,a,t){return t?n[`${t}Popup`]:e?n.horizontalPopup:a?n.verticalLeftPopup:n.verticalPopup}function en(e){let{title:t,left:s,horizontal:c,classPrefix:u,leftOffset:d,topOffset:p}=e,m={};void 0!==d&&void 0!==p&&(m={top:`${p}px`,left:`${d}px`});let{dispatch:h}=l(),x=r(()=>{h("demo/activate")},[h]),y=r(()=>{h("curiosity/setConversionProps",{"Last referring link":`${t} Popup`})},[t,h]);return a("div",{className:ei(c,s,u),style:m,role:"dialog"},a(i,{className:n.link,to:"/a/wa/plus","aria-label":`${t} is available on the Plus plan`,onClick:y},a("span",{className:n.wrapper},a(el,null)),a("div",{className:n.text},`${t} is available `,a("br",null),"on the Plus plan",a("br",null),a("span",{className:n.linkText},"See plans and pricing"))),a("div",{className:n.divider}),a(i,{className:n.link,to:"/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1","aria-label":"Try out Demo Song (all the features enabled)",onClick:x},a("span",{className:n.demowrapper},a(o,null)),a("div",{className:n.demoText},`Try out ${t}`,a("br",null),a("span",{className:n.linkText},"on the Demo Song"))))}let eo="Ctogp",ec="Ctogp Cto2oj",eu="Ctogp Cto204",ed="Ctogp Cto2a3",ep="Ctogp Cto2v9",em="Ctogp Cto22p",eh="Ctogp Cto2qi",ex="Cto1ei",ey="Ctozt",ef="Cto2qn",eN="Cto2qn Cto2ih",ew="Cto2qn Cto2ih Cto10u",ev="Cto1nx",eP={pane:"Ctogp",paneStandart:"Ctogp Cto2oj",panePlusSecondary:"Ctogp Cto204",panePlus1a:"Ctogp Cto2a3",panePlus1Secondary:"Ctogp Cto2v9",panePlus2:"Ctogp Cto22p",panePlus2Secondary:"Ctogp Cto2qi",centerGroup:"Cto1ei",secondaryControls:"Ctozt",item:"Cto2qn",itemSmall:"Cto2qn Cto2ih",itemSmallHidden:"Cto2qn Cto2ih Cto10u",handler:"Cto1nx"},eg="gs2yb",eS="gs2y2",e9={capo:"gs2yb",text:"gs2y2"},eT="M24.5 1.5c.5.5.25 2.5-.25 2.5C13 3.5 7 3.9 3.8 4.35c0 0-.05 3.9 2.7 6.15 2.75 2.25 5 2.5 7.75 2.75 3 0 1.75.5 1.75.75s1.25.75-.75 1c-3 .25-7 0-10-1 .5.5.75 1.25.5 1.5L4.5 17C2.76 16.75.6 15.25 0 13l1-1.25c.5-.75 1.75.25 1.75.25C2 10.75.25 6.5.25 3.75.25 1.5 1 1 2 .75S19 0 24.5 1.5zm-1.3 1.65c.65-.3 1.05-.9-.7-1.15-3.75-.75-14.75-.75-20-.5-.5 0-1 .25-1.25 1.25-.75 3 2.25 8.5 2.5 9.25L3 13s-1-.5-1.5-.5L1 13c.75 2 1.75 2.25 3.25 2.75l.5-.5C4.75 14.75 4 14 4 14l1.25-1c3 1 5.25 1.5 9.75 1.25.12-.01.25-.25 0-.25-3.75 0-6.5-.75-8.5-2.25S2.5 7.25 3 3.5c-.13-.05 9.8-1.2 20.2-.35z";function eb(e){switch(e){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function ek(a){let{capo:t,layer:r}=a;if(!r)return null;let{x1:l,y:i}=r;return e(s,{children:[e("path",{id:"capo",transform:`translate(${l}, ${-16-i})`,d:"M24.5 1.5c.5.5.25 2.5-.25 2.5C13 3.5 7 3.9 3.8 4.35c0 0-.05 3.9 2.7 6.15 2.75 2.25 5 2.5 7.75 2.75 3 0 1.75.5 1.75.75s1.25.75-.75 1c-3 .25-7 0-10-1 .5.5.75 1.25.5 1.5L4.5 17C2.76 16.75.6 15.25 0 13l1-1.25c.5-.75 1.75.25 1.75.25C2 10.75.25 6.5.25 3.75.25 1.5 1 1 2 .75S19 0 24.5 1.5zm-1.3 1.65c.65-.3 1.05-.9-.7-1.15-3.75-.75-14.75-.75-20-.5-.5 0-1 .25-1.25 1.25-.75 3 2.25 8.5 2.5 9.25L3 13s-1-.5-1.5-.5L1 13c.75 2 1.75 2.25 3.25 2.75l.5-.5C4.75 14.75 4 14 4 14l1.25-1c3 1 5.25 1.5 9.75 1.25.12-.01.25-.25 0-.25-3.75 0-6.5-.75-8.5-2.25S2.5 7.25 3 3.5c-.13-.05 9.8-1.2 20.2-.35z",className:e9.capo},"path"),e("text",{className:e9.text,x:30+l,y:-3-i,children:`Capo ${t}${eb(t)} fret`},"text"),]})}export{ek as C,j as D,es as F,en as P,I as S,eP as _,G as a,ea as b,eb as c,q as d,R as e}