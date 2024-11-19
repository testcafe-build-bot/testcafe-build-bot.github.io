(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{8272:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/surveys/dashboard-alpha-feedback",function(){return s(2801)}])},3529:function(e,t,s){"use strict";s.d(t,{b:function(){return o},x:function(){return i}});let n="https://services.devexpress.com/Survey/api/Survey/";function i(e,t,s){let i=new XMLHttpRequest;i.open("GET",n+"GetCompletionStatus?surveyId="+e+"&clientId="+t),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onload=i.onerror=function(){let e=JSON.parse(i.response);s(200===i.status,e,i.response)},i.send()}function o(e,t,s,i){let o=new XMLHttpRequest;o.open("POST",n+"SaveResult"),o.setRequestHeader("Content-Type","application/json; charset=utf-8");let r=JSON.stringify({SurveyId:e,ClientId:t,SurveyResult:JSON.stringify(s),IsPartialCompleted:i});o.send(r)}},2801:function(e,t,s){"use strict";s.r(t);var n=s(5893);s(7294);var i=s(5442);let o=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{children:"Survey Completed"}),"Thank you for your time and usage feedback. Should you wish to submit additional information, feel free to email ",(0,n.jsx)("a",{href:"mailto:testcafeteam@devexpress.com",children:"testcafeteam@devexpress.com"})," at your convenience."]});t.default=()=>(0,n.jsx)(i.default,{surveyId:"dc5fa6d5-c574-4ed2-9c41-97e7a330a311",title:"Dashboard Alpha Feedback | Surveys | TestCafe",description:"TestCafe Dashboard Alpha Feedback",successHtml:o()})},5442:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var n=s(5893),i=s(7294),o=s(9008),r=s.n(o),a=s(3529),l=s(3416);let d="CLIENT_SURVEY_ID_KEY";class u{get clientId(){let e=localStorage.getItem(d);return e||localStorage.setItem(d,(0,l.x0)()),e}_customizeSurveyJS(){window.Survey.StylesManager.ThemeColors.modern["$main-color"]="#1274cc",window.Survey.surveyLocalization.locales[window.Survey.surveyLocalization.defaultLocale].requiredError="Response required.",window.Survey.surveyLocalization.locales.en.loadingSurvey="Loading Survey...",window.Survey.StylesManager.applyTheme("modern")}_showLoading(){this._hideAll(),this._showContainer(this.cLoading)}_showSurveyContent(){this._hideAll(),this._showContainer(this.cSurveyContent)}_showAlreadyPassed(){this._hideAll(),this._showContainer(this.cAlreadyPassed)}_showCompleted(){this._hideAll(),this._showContainer(this.cCompleted)}_showExpired(){this._hideAll(),this._showContainer(this.cExpired)}_showContainer(e){e.style.display="block"}_hideAll(){this.cSurveyContent.style.display="none",this.cLoading.style.display="none",this.cCompleted.style.display="none",this.cAlreadyPassed.style.display="none"}_onGetStatus(e,t){let s=this;if(e){if("completed"!==t.CompletionStatus||this.allowMultipleResults){if(t.IsPublished){let e=new window.Survey.Model(t.SurveyContent),n=new window.showdown.Converter({openLinksInNewWindow:!0});e.onAfterRenderPage.add(function(){let e=document.querySelectorAll("a[href^=mailto");for(let t=0;t<e.length;t++)e[0].addEventListener("click",function(e){e.stopPropagation()})}),e.onTextMarkdown.add(function(e,t){let s=n.makeHtml(t.text);s=(s=s.substring(3)).substring(0,s.length-4),t.html=s}),e.onAfterRenderQuestion.add(function(e,t){"agreement"===t.question.name&&t.htmlElement.querySelector(".sv-item__control-label").setAttribute("title","I have read, understand and accept the Developer Express Inc Privacy Policy and Website Terms of Use.")}),e.focusFirstQuestionAutomatic=!1,e.sendResultOnPageNext=this.enablePartialSend,e.logoPosition="top",e.logoWidth="150px",e.onPartialSend.add(function(e){(0,a.b)(s.surveyId,s.clientId,e.data,!0)}),e.onComplete.add(function(e){(0,a.b)(s.surveyId,s.clientId,e.data,!1),s._showCompleted()}),"partial"===t.CompletionStatus&&(e.data=JSON.parse(t.SurveyResult)),this._showSurveyContent(),e.render(this.cSurveyContent)}else this._showExpired()}else this._showAlreadyPassed()}}constructor(e,t){let s,n;this.container=document.getElementById(e),this.cLoading=this.container.querySelector('[data-role="Loading"]'),this.cSurveyContent=this.container.querySelector('[data-role="SurveyContent"]'),this.cAlreadyPassed=this.container.querySelector('[data-role="AlreadyPassed"]'),this.cCompleted=this.container.querySelector('[data-role="Completed"]'),this.cExpired=this.container.querySelector('[data-role="Expired"]'),this.enablePartialSend=(null===(s=this.cSurveyContent.attributes["data-partial"])||void 0===s?void 0:s.value)==="true",this.allowMultipleResults=(null===(n=this.cSurveyContent.attributes["data-multiple-results"])||void 0===n?void 0:n.value)==="true",this.surveyId=t,this._customizeSurveyJS(),this._showLoading(),(0,a.x)(this.surveyId,this.clientId,this._onGetStatus.bind(this))}}function c(e){new u("surveyContainer",e)}var h=e=>{let{title:t,description:s,surveyId:o,successHtml:a}=e;return(0,i.useEffect)(()=>{window.Survey?c(o):window.onload=function(){c(o)}}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"description",content:s}),(0,n.jsx)("script",{src:"/survey-assets/knockout-latest.js"}),(0,n.jsx)("script",{src:"/survey-assets/survey.ko.min.js"}),(0,n.jsx)("script",{src:"/survey-assets/showdown.min.js"}),(0,n.jsx)("link",{href:"/survey-assets/survey.min.css",type:"text/css",rel:"stylesheet"}),(0,n.jsx)("link",{href:"/survey-assets/modern.min.css",type:"text/css",rel:"stylesheet"})]}),(0,n.jsxs)("div",{className:"survey-container",id:"surveyContainer","data-partial":"false","data-multiple-results":"false",children:[(0,n.jsx)("div",{"data-role":"Loading",children:"Loading survey..."}),(0,n.jsx)("div",{"data-role":"AlreadyPassed",children:"You have already completed this survey"}),(0,n.jsx)("div",{"data-role":"Completed",children:a}),(0,n.jsx)("div",{"data-role":"Expired",children:"This survey is over"}),(0,n.jsx)("div",{"data-role":"SurveyContent"})]})]})}},9008:function(e,t,s){e.exports=s(7828)},3416:function(e,t,s){"use strict";s.d(t,{x0:function(){return n}});let n=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"")}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8272)}),_N_E=e.O()}]);