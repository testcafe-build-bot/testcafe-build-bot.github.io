"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{297:function(e,t,s){s.d(t,{Z:function(){return D}});var n,i,l=s(5893),r=s(7294),o=s(9008),a=s.n(o),c=s(5727),d=s(4081);let h=["Framework","Resources"];var u=e=>{let{breadcrumbsNav:t}=e,s=[...t].filter(e=>-1===h.indexOf(e.name)&&e.id&&e.url);if(s.length<=1)return null;let n=s.map((e,t,s)=>{var n;return n=t===s.length-1,(0,l.jsxs)(r.Fragment,{children:[!n&&(0,l.jsx)(d.Z,{force:!0,tocItem:e,dangerouslySetInnerHTML:e.name}),n&&(0,l.jsx)("span",{"aria-current":"location",className:"text-black",children:e.name}),!n&&(0,l.jsx)("span",{"aria-hidden":"true",className:"text-black px-1",children:"→"})]},e.name)});return(0,l.jsx)("nav",{"aria-label":"breadcrumbs",className:"breadcrumbs",children:n})},m=s(714),p=s(301),v=s(7251),f=s(6808),x=s.n(f);let w=()=>{let[e,t]=(0,r.useState)(!1),s="".concat("scroll-button"," ").concat(e?"":"scroll-invisible"),n=()=>{t(document.body.scrollTop>20||document.documentElement.scrollTop>20)},i=()=>{n()};return(0,r.useEffect)(()=>(window.addEventListener("scroll",i),n(),()=>window.removeEventListener("scroll",i)),[i]),(0,l.jsx)("button",{id:"back-to-top",className:s,onClick:()=>{window.scrollTo(0,0)},children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",fill:"none",children:(0,l.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"m12.1 18.92 8.91-8.91a1.4 1.4 0 0 1 1.98 0l8.91 8.91a1.4 1.4 0 0 1-1.98 1.98l-6.42-6.52V33h-3V14.38l-6.42 6.52a1.4 1.4 0 0 1-1.98-1.98Z",clipRule:"evenodd"})})})};var g=s(3416);s(2052);let j={topic:"",isPageHelpful:!1,howToImprove:""};(n=i||(i={})).None="none",n.AskForFeedback="ask-for-feedback",n.ShowFeedbackInput="show-feedback-input",n.FeedbackSent="feedback-sent",n.SuggestionSent="suggestion-sent";var b=()=>{let[e,t]=(0,r.useState)("ask-for-feedback"),[s,n]=(0,r.useState)(j),i=((0,r.useRef)(null),(0,g.x0)(),e=>{(null==e?void 0:e.key)==="Escape"&&t("none")});return((0,r.useEffect)(()=>{var e,i;let l=null===(i=window)||void 0===i?void 0:null===(e=i.location)||void 0===e?void 0:e.pathname;s.topic!==l&&(n({...j,topic:l}),t(window.innerWidth>768?"ask-for-feedback":"none"))}),(0,r.useEffect)(()=>(document.addEventListener("keyup",i),()=>document.removeEventListener("keyup",i)),[i]),x().get("cookie_message_accepted"))?(0,l.jsxs)("div",{className:"feedback-element",children:[!1,(0,l.jsx)(w,{})]}):null},k=s(1182),N=()=>{let[e,t]=(0,r.useState)(!1),[s,n]=(0,r.useState)(!(0,k.J)());(0,r.useEffect)(()=>{t(!0)},[]);let i=s?(0,l.jsx)(b,{}):(0,l.jsx)(v.Y,{onAcceptCookie:()=>n(!0)});return e&&i},y=e=>{let{headers:t}=e,s=t.map(e=>(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#".concat(e.id),className:"scrollspy-link",children:e.title})},e.id));return(0,l.jsxs)("nav",{className:"scrollspy",children:[(0,l.jsx)("span",{className:"scrollspy-title",children:"On this page"}),(0,l.jsx)("ul",{children:s})]})};let S=e=>(0,l.jsxs)("svg",{onClick:e.onClick,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20",children:[(0,l.jsx)("path",{d:"M4.7 10l1.13-1.13 5.3 5.3L10 15.3z"}),(0,l.jsx)("path",{d:"M15.3 10l-1.13-1.13-5.3 5.3L10 15.3z"})]}),C=(0,l.jsx)("svg",{width:"36",height:"36",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M11 12h14v2H11zM11 17h14v2H11zM11 22h14v2H11z"})}),I=(0,l.jsxs)("svg",{width:"36",height:"36",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M12 22l9.9-9.9 1.414 1.415-9.9 9.9z"}),(0,l.jsx)("path",{d:"M13.414 12l9.9 9.9-1.415 1.414-9.9-9.9z"})]});function E(e){return!e||0===e.length}class L extends r.Component{static createState(e,t){let s=JSON.parse(JSON.stringify(e.items));return L.walk(s,t=>{t.opened=L.isActive(e,t)}),{items:s,mobile:t,root:e.root}}static walk(e,t){for(let s of e)t(s),s.items&&L.walk(s.items,t)}shouldComponentUpdate(){return!this.menuItemClicked||(this.menuItemClicked=!1,!1)}static getDerivedStateFromProps(e,t){return(t.root&&t.root.id)!==(e.root&&e.root.id)?L.createState(e,!!t.mobile):null}render(){let e="sidebar ",t=C;return e+=this.props.isDocumentation?"sidebar-documentation ":" ",this.state.mobile&&(e+="mobile-opened",t=I),(0,l.jsxs)("nav",{className:e,children:[(0,l.jsxs)("div",{className:"title",children:[(0,l.jsx)("button",{"aria-label":"Navigation bar toggle",onClick:()=>this.toggleMobileView(),children:t}),(0,l.jsx)("span",{children:this.props.activeItems.length?this.props.activeItems[0].name:""})]}),this.renderChildren(this.state.items,this.lvl1)]})}toggleMenuItem(e){e.opened=!e.opened,this.setState(this.state)}toggleMobileView(){let e=!this.state.mobile;this.setMobileView(e)}setMobileView(e){this.setState(Object.assign({},this.state,{mobile:e}))}hideMobileView(){this.setMobileView(!1)}click2lvl(e){e.opened=!0,e.url&&(this.menuItemClicked=!0),this.hideMobileView()}click3lvl(){this.menuItemClicked=!0,this.hideMobileView()}static isActive(e,t){return!!e.activeItems.find(e=>e.id===t.id)}constructor(e){super(e),this.renderChildren=(e,t)=>{if(E(e))return null;let s=e.map(e=>t(e));return(0,l.jsx)("ul",{children:s})},this.lvl1=e=>{var t;let s=!E(e.items),n=(null==(t=this.props.root)?void 0:t.name)==="What's New";if((!s||n)&&e.id){let t="l-2 root-lvl";return L.isActive(this.props,e)&&(t+=" active"),(0,l.jsx)("li",{className:t,children:(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{tocItem:e,onClick:()=>this.click3lvl(),children:e.name})})},e.name)}return s&&!n?(0,l.jsxs)("li",{className:"l-1",children:[(0,l.jsx)("span",{children:e.name}),this.renderChildren(e.items,this.lvl2)]},e.name):null},this.lvl2=e=>{let t=null,s="l-2";return L.isActive(this.props,e)&&(s+=" active"),e.opened&&this.props.showLeafs&&(s+=" opened"),!E(e.items)&&this.props.showLeafs&&(t=S({onClick:()=>this.toggleMenuItem(e)})),(0,l.jsxs)("li",{className:s,children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)(d.Z,{tocItem:e,force:!0,onClick:()=>this.click2lvl(e),children:e.name}),t]}),e.opened&&this.props.showLeafs&&this.renderChildren(e.items,this.lvl3)]},e.name)},this.lvl3=e=>{let t="l-3";return L.isActive(this.props,e)&&(t+=" active"),(0,l.jsx)("li",{className:t,children:(0,l.jsx)(d.Z,{tocItem:e,onClick:()=>this.click3lvl(),children:e.name})},e.name)},this.menuItemClicked=!1,this.state=L.createState(e,!1)}}var M=s(3154),T=s(3610);let R=[],Z=[];function H(){return document.body.scrollTop+document.documentElement.scrollTop}async function V(){let e=[...document.querySelectorAll("img")].filter(e=>!e.complete).map(e=>new Promise(t=>{e.addEventListener("load",t),e.addEventListener("error",t)}));await Promise.all(e)}async function _(){R&&0!==R.length&&(await V(),(Z=R.map(e=>document.getElementById(e.id)).filter(e=>!!e).map(e=>({y:e.getBoundingClientRect().top+H(),id:e.id,link:document.querySelector('.scrollspy-link[href="#'+e.id+'"]').parentNode}))).length&&(Z[0].y=0),Z.reverse(),A())}function A(){let e=Z.find(e=>{let{y:t}=e;return H()>=Math.floor(t)-1});e&&(Z.forEach(e=>{let{link:t}=e;t.className=t.className.replace(" scrollspy-active","")}),e.link.className+=" scrollspy-active")}var O=s(1122),z=e=>{let t=e.content.headers.length>0,s=e.sidebarNav.items.length>0,n=["left",s?"with-sidebar":""];return(0,r.useEffect)(()=>{let t=()=>{var t;t=e.content.headers,window.removeEventListener("resize",_),window.removeEventListener("load",_),window.removeEventListener("scroll",A),t&&0!==t.length&&(R=t,_(),window.addEventListener("resize",_),window.addEventListener("load",_),window.addEventListener("scroll",A))};(0,O.Z)({classname:"spoiler",captionSelector:".spoiler .spoiler-caption"},t),(0,M.Z)(),(0,c.OY)(e.publishDates),(0,c.rq)(e.publishDates),t(),(0,T.Z)()}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{isDocumentation:!1,activeItems:e.headerNav.activeItems,items:e.headerNav.items}),(0,l.jsx)("div",{className:"middle",children:(0,l.jsxs)("main",{children:[(0,l.jsx)("div",{className:n.join(" "),children:s&&(0,l.jsx)(L,{isDocumentation:e.isDocumentation,showLeafs:e.sidebarNav.showLeafs,root:e.sidebarNav.root,items:e.sidebarNav.items,activeItems:e.sidebarNav.activeItems})}),(0,l.jsxs)("div",{className:"content sm:px-12",children:[(0,l.jsx)(u,{breadcrumbsNav:e.breadcrumbsNav}),e.children]}),(0,l.jsx)("div",{className:t?"right":"right right-no-scrollspy",children:t&&(0,l.jsx)(y,{headers:e.content.headers})})]})}),(0,l.jsx)(m.Z,{}),(0,l.jsx)(N,{})]})},D=e=>{let{content:t,headerNav:s,sidebarNav:n,breadcrumbsNav:i,isDocumentation:r,publishDates:o}=e,c=(0,l.jsx)(l.Fragment,{});return c=e.children?(0,l.jsx)("div",{children:e.children}):(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t.html}}),(0,l.jsxs)(z,{isDocumentation:r,headerNav:s,sidebarNav:n,breadcrumbsNav:i,content:t,publishDates:o,children:[function(e,t){let s=e.map(e=>e.name).reverse().join(" | "),n=e[e.length-1].url,i=null==t?void 0:t.schema,r=(null==t?void 0:t.description)||"";return(0,l.jsxs)(a(),{children:[(0,l.jsx)("meta",{property:"og:url",content:n}),(0,l.jsx)("meta",{property:"og:title",content:s}),(0,l.jsx)("meta",{name:"description",content:r}),(0,l.jsx)("link",{rel:"canonical",href:k.EE+n}),(0,l.jsx)("title",{children:s}),i&&(0,l.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:i}})]})}(i,t),c]})}},1122:function(e,t,s){s.d(t,{Z:function(){return n}});function n(e,t){let s=document.querySelectorAll(e.captionSelector);for(let n=0;n<s.length;n++)s[n].addEventListener("click",s=>(function(e,t,s){let n=e.target;for(;!n.classList.contains(t);)n=n.parentNode;n&&(n.classList.toggle("s-visible"),s())})(s,e.classname,t))}},2052:function(e,t,s){s.d(t,{b:function(){return l},x:function(){return i}});let n="https://services.devexpress.com/Survey/api/Survey/";function i(e,t,s){let i=new XMLHttpRequest;i.open("GET",n+"GetCompletionStatus?surveyId="+e+"&clientId="+t),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onload=i.onerror=function(){let e=JSON.parse(i.response);s(200===i.status,e,i.response)},i.send()}function l(e,t,s,i){let l=new XMLHttpRequest;l.open("POST",n+"SaveResult"),l.setRequestHeader("Content-Type","application/json; charset=utf-8");let r=JSON.stringify({SurveyId:e,ClientId:t,SurveyResult:JSON.stringify(s),IsPartialCompleted:i});l.send(r)}},3416:function(e,t,s){s.d(t,{x0:function(){return n}});let n=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"")}}]);