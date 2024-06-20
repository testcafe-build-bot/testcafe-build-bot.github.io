(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{9457:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/surveys/open-source-feedback-2022",function(){return s(7015)}])},2052:function(e,t,s){"use strict";s.d(t,{b:function(){return r},x:function(){return i}});let n="https://services.devexpress.com/Survey/api/Survey/";function i(e,t,s){let i=new XMLHttpRequest;i.open("GET",n+"GetCompletionStatus?surveyId="+e+"&clientId="+t),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onload=i.onerror=function(){let e=JSON.parse(i.response);s(200===i.status,e,i.response)},i.send()}function r(e,t,s,i){let r=new XMLHttpRequest;r.open("POST",n+"SaveResult"),r.setRequestHeader("Content-Type","application/json; charset=utf-8");let o=JSON.stringify({SurveyId:e,ClientId:t,SurveyResult:JSON.stringify(s),IsPartialCompleted:i});r.send(o)}},2762:function(e,t,s){"use strict";function n(){window.localStorage.setItem("ANNOUNCE_TESTCAFE_EXPERIENCE_SURVEY","true")}s.d(t,{de:function(){return n}}),s(5893),s(7294),s(1163)},7015:function(e,t,s){"use strict";s.r(t);var n=s(5893),i=s(7294),r=s(2857),o=s(2762);let a=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h3",{className:"survey-status-title",children:"Thank you for completing the survey"})});t.default=()=>((0,i.useEffect)(()=>{(0,o.de)()}),(0,n.jsx)(r.default,{surveyId:"47b72bca-8f1c-4e8b-aa9c-55fa3f3887f8",title:"Your TestCafe Experience | Surveys | TestCafe",description:"Your TestCafe Experience",successHtml:a()}))},2857:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var n=s(5893),i=s(7294),r=s(9008),o=s.n(r),a=s(2052),l=s(3416);let d="CLIENT_SURVEY_ID_KEY";class u{get clientId(){let e=localStorage.getItem(d);return e||localStorage.setItem(d,(0,l.x0)()),e}_customizeSurveyJS(){window.Survey.StylesManager.ThemeColors.modern["$main-color"]="#1274cc",window.Survey.surveyLocalization.locales[window.Survey.surveyLocalization.defaultLocale].requiredError="Response required.",window.Survey.surveyLocalization.locales.en.loadingSurvey="Loading Survey...",window.Survey.StylesManager.applyTheme("modern")}_showLoading(){this._hideAll(),this._showContainer(this.cLoading)}_showSurveyContent(){this._hideAll(),this._showContainer(this.cSurveyContent)}_showAlreadyPassed(){this._hideAll(),this._showContainer(this.cAlreadyPassed)}_showCompleted(){this._hideAll(),this._showContainer(this.cCompleted)}_showExpired(){this._hideAll(),this._showContainer(this.cExpired)}_showContainer(e){e.style.display="block"}_hideAll(){this.cSurveyContent.style.display="none",this.cLoading.style.display="none",this.cCompleted.style.display="none",this.cAlreadyPassed.style.display="none"}_onGetStatus(e,t){let s=this;if(e){if("completed"!==t.CompletionStatus||this.allowMultipleResults){if(t.IsPublished){let e=new window.Survey.Model(t.SurveyContent),n=new window.showdown.Converter({openLinksInNewWindow:!0});e.onAfterRenderPage.add(function(){let e=document.querySelectorAll("a[href^=mailto");for(let t=0;t<e.length;t++)e[0].addEventListener("click",function(e){e.stopPropagation()})}),e.onTextMarkdown.add(function(e,t){let s=n.makeHtml(t.text);s=(s=s.substring(3)).substring(0,s.length-4),t.html=s}),e.onAfterRenderQuestion.add(function(e,t){"agreement"===t.question.name&&t.htmlElement.querySelector(".sv-item__control-label").setAttribute("title","I have read, understand and accept the Developer Express Inc Privacy Policy and Website Terms of Use.")}),e.focusFirstQuestionAutomatic=!1,e.sendResultOnPageNext=this.enablePartialSend,e.logoPosition="top",e.logoWidth="150px",e.onPartialSend.add(function(e){(0,a.b)(s.surveyId,s.clientId,e.data,!0)}),e.onComplete.add(function(e){(0,a.b)(s.surveyId,s.clientId,e.data,!1),s._showCompleted()}),"partial"===t.CompletionStatus&&(e.data=JSON.parse(t.SurveyResult)),this._showSurveyContent(),e.render(this.cSurveyContent)}else this._showExpired()}else this._showAlreadyPassed()}}constructor(e,t){let s,n;this.container=document.getElementById(e),this.cLoading=this.container.querySelector('[data-role="Loading"]'),this.cSurveyContent=this.container.querySelector('[data-role="SurveyContent"]'),this.cAlreadyPassed=this.container.querySelector('[data-role="AlreadyPassed"]'),this.cCompleted=this.container.querySelector('[data-role="Completed"]'),this.cExpired=this.container.querySelector('[data-role="Expired"]'),this.enablePartialSend=(null===(s=this.cSurveyContent.attributes["data-partial"])||void 0===s?void 0:s.value)==="true",this.allowMultipleResults=(null===(n=this.cSurveyContent.attributes["data-multiple-results"])||void 0===n?void 0:n.value)==="true",this.surveyId=t,this._customizeSurveyJS(),this._showLoading(),(0,a.x)(this.surveyId,this.clientId,this._onGetStatus.bind(this))}}function c(e){new u("surveyContainer",e)}var h=e=>{let{title:t,description:s,surveyId:r,successHtml:a}=e;return(0,i.useEffect)(()=>{window.Survey?c(r):window.onload=function(){c(r)}}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"description",content:s}),(0,n.jsx)("script",{src:"/survey-assets/knockout-latest.js"}),(0,n.jsx)("script",{src:"/survey-assets/survey.ko.min.js"}),(0,n.jsx)("script",{src:"/survey-assets/showdown.min.js"}),(0,n.jsx)("link",{href:"/survey-assets/survey.min.css",type:"text/css",rel:"stylesheet"}),(0,n.jsx)("link",{href:"/survey-assets/modern.min.css",type:"text/css",rel:"stylesheet"})]}),(0,n.jsxs)("div",{className:"survey-container",id:"surveyContainer","data-partial":"false","data-multiple-results":"false",children:[(0,n.jsx)("div",{"data-role":"Loading",children:"Loading survey..."}),(0,n.jsx)("div",{"data-role":"AlreadyPassed",children:"You have already completed this survey"}),(0,n.jsx)("div",{"data-role":"Completed",children:a}),(0,n.jsx)("div",{"data-role":"Expired",children:"This survey is over"}),(0,n.jsx)("div",{"data-role":"SurveyContent"})]})]})}},9008:function(e,t,s){e.exports=s(6665)},1163:function(e,t,s){s(3035)},3416:function(e,t,s){"use strict";s.d(t,{x0:function(){return n}});let n=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"")}},function(e){e.O(0,[888,774,179],function(){return e(e.s=9457)}),_N_E=e.O()}]);