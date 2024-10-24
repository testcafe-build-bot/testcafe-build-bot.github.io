"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{2479:function(e,r,s){var n=s(5893);s(7294);var t=s(1664),i=s.n(t);let a="/documentation/";r.Z=e=>{let{tocItem:r,children:s,force:t,isHeader:l,onClick:c,className:o,dangerouslySetInnerHTML:d}=e;if(r.id&&r.url){let e=r.href,t=r.url;if(!e){let s=0===r.url.indexOf(a)?a:"/";e="".concat(s).concat("[topicUid]/[...topicTitle]")}return(l&&r.headerUrl&&(e=r.headerUrl,t=r.headerUrl),d)?(0,n.jsx)(i(),{href:e,as:t,className:o,onClick:c,dangerouslySetInnerHTML:{__html:d}}):(0,n.jsx)(i(),{href:e,as:t,className:o,onClick:c,children:s})}return t&&r.name?(0,n.jsx)(n.Fragment,{children:s}):(0,n.jsx)(n.Fragment,{})}},3142:function(e,r,s){s.d(r,{Z:function(){return l}});var n=s(2152),t=s.n(n);let i="copy-button";function a(e){e.classList.toggle("copying")}function l(){if(!function(){let e=document.querySelectorAll(".hljs");for(let r=0;r<e.length;r++)e[r].appendChild(function(){let e=document.createElement("div"),r=document.createElement("div"),s=document.createElement("button");return e.className="copy-button-container",r.className="check-container",s.className=i,s.setAttribute("aria-label",i),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.7071 14.2929C28.0976 14.6834 28.0976 15.3166 27.7071 15.7071L17.7071 25.7071C17.3166 26.0976 16.6834 26.0976 16.2929 25.7071L12.2929 21.7071C11.9024 21.3166 11.9024 20.6834 12.2929 20.2929C12.6834 19.9024 13.3166 19.9024 13.7071 20.2929L17 23.5858L26.2929 14.2929C26.6834 13.9024 27.3166 13.9024 27.7071 14.2929Z"></path></svg>',s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17 19a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6z"></path><path d="M15 13a2 2 0 00-2 2v6a2 2 0 002 2v-8h8a2 2 0 00-2-2h-6z"></path></svg>',e.appendChild(s),e.appendChild(r),e}())}(),window.clipboard)return;let e=new(t())("."+i,{target:function(e){return e.parentNode.parentNode}});e.on("success",function(e){e.clearSelection(),a(e.trigger.parentNode),setTimeout(()=>{a(e.trigger.parentNode)},2e3)}),window.clipboard=e}},5581:function(e,r,s){s.d(r,{Z:function(){return N}});var n=s(9207),t=s.n(n),i=s(5702),a=s.n(i),l=s(2972),c=s.n(l),o=s(1979),d=s.n(o),h=s(5209),u=s.n(h),f=s(6869),m=s.n(f),x=s(407),g=s.n(x),p=s(5418),v=s.n(p),j=s(6156),w=s.n(j),b=s(8835),C=s.n(b);function N(){let e=document.querySelectorAll("pre code");for(let r=0;r<e.length;r++)d().highlightElement(e[r])}d().registerLanguage("javascript",m()),d().registerLanguage("plaintext",v()),d().registerLanguage("sh",t()),d().registerLanguage("bash",t()),d().registerLanguage("json",g()),d().registerLanguage("html",u()),d().registerLanguage("coffee",a()),d().registerLanguage("csharp",c()),d().registerLanguage("yaml",C()),d().registerLanguage("typescript",w())},4978:function(e,r,s){s.d(r,{OY:function(){return u},Pn:function(){return d},rK:function(){return o},rq:function(){return h}});let n={teamBlog:"TEAM_BLOG_LAST_VISIT_DATE_KEY",releaseNotes:"RELEASE_NOTES_LAST_VISIT_DATE_KEY"},t={teamBlog:"team-blog",releaseNotes:"release-notes"};function i(e,r){let s=function(e){let r=localStorage.getItem(e);return r?new Date(parseInt(r,10)):null}(e);return s?r.filter(e=>s<new Date(e)).length:1}function a(e,r){e.querySelector("span")||e.appendChild(r)}function l(e,r){let s=document.querySelectorAll("article h2");for(let n=0;n<i(e,r);n++){let e=document.createElement("span");e.innerHTML="New",a(s[n],e)}localStorage.setItem(e,Date.now().toString())}function c(e,r,s){let n=document.querySelector("".concat(e,' a[href*="').concat(t[r],'"'));if(!n||!s)return;let i=document.createElement("span");i.className="".concat(e.replace(".",""),"-notifications"),i.innerHTML=s+"<span></span>",a(n,i)}function o(e){l(n.teamBlog,e)}function d(e){l(n.releaseNotes,e)}function h(e){for(let r of Object.keys(t)){let s=i(n[r],e[r]);c(".sidebar",r,s)}}function u(e){c("header","releaseNotes",Object.keys(t).reduce((r,s)=>r+=i(n[s],e[s]),0))}},4934:function(e,r,s){var n=s(5893),t=s(4104);s(7294),r.Z=()=>(0,n.jsx)("footer",{children:(0,n.jsxs)("div",{className:"main-middle",children:[(0,n.jsxs)("div",{className:"footer-grid",children:[(0,n.jsxs)("div",{className:"social-container",children:[(0,n.jsx)("img",{width:"200",height:"40",src:"/img/testcafe-logo.svg",alt:"TestCafe"}),(0,n.jsx)("p",{className:"footer-logo-description",children:"TestCafe is a user-friendly end-to-end testing framework. Free and open source test runner. Powerful desktop app. Enterprise-quality web services."}),(0,n.jsxs)("div",{className:"social",children:[(0,n.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/dxtestcafe/",children:[(0,n.jsx)("span",{className:"sr-only",children:"Facebook"}),t.aC]}),(0,n.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/DXTestCafe",children:[(0,n.jsx)("span",{className:"sr-only",children:"Twitter"}),t.E0]}),(0,n.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/DevExpress/testcafe",children:[(0,n.jsx)("span",{className:"sr-only",children:"GitHub"}),t.ah]}),(0,n.jsxs)("a",{href:"mailto:testcafeteam@devexpress.com",children:[(0,n.jsx)("span",{className:"sr-only",children:"Email"}),t.zL]}),(0,n.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/playlist?list=PL8h4jt35t1wirqPiT68hV0cpX1ppQMVtF",children:[(0,n.jsx)("span",{className:"sr-only",children:"Youtube"}),t.eu]})]})]}),(0,n.jsxs)("nav",{"aria-label":"Footer",children:[(0,n.jsx)("h2",{className:"sr-only",children:"Footer navigation"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"footer-navigation-header",children:"Product"}),(0,n.jsxs)("ul",{className:"footer-navigation-column-section-list",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402631/guides/overview/why-testcafe",children:"Why TestCafe"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402635/guides/overview/getting-started",children:"Getting Started"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.devexpress.com/products/testcafestudio/",target:"_blank",rel:"noopener noreferrer",children:"TestCafe Studio"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402809/guides/continuous-integration",children:"Integrations"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/release-notes",children:"What's New"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/402949/roadmap",children:"Roadmap"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"footer-navigation-header",children:"Features"}),(0,n.jsxs)("ul",{className:"footer-navigation-column-section-list",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402828/guides/concepts/browsers",children:"Cross-browser tests"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/403971/guides/intermediate-guides/api-testing",children:"API tests"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402841/guides/intermediate-guides/multiple-browser-windows",children:"Multi-window tests"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402833/guides/basic-guides/test-actions#work-with-iframes",children:"Iframe tests"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402830/guides/basic-guides/run-tests#live-mode",children:"Live Mode"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402830/guides/basic-guides/run-tests#quarantine-mode",children:"Unstable test detection"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402840/guides/intermediate-guides/screenshots-and-videos",children:"Screenshots and Videos"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/403626/guides/intermediate-guides/run-tests-concurrently",children:"Concurrent test runs"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402824/guides/concepts/typescript-and-coffeescript",children:"TypeScript tests"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"footer-navigation-header",children:"Resources"}),(0,n.jsxs)("ul",{className:"footer-navigation-column-section-list",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/resources/team-blog",children:"Blog"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/resources/community-blogs",children:"Community Blogs"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/resources/courses",children:"Courses"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/resources/books",children:"Books"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/case-studies",children:"Case studies"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"footer-navigation-header",children:"Learn"}),(0,n.jsxs)("ul",{className:"footer-navigation-column-section-list",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402635/guides/overview/getting-started",children:"Docs"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402636/faq/general-info",children:"FAQ"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402634/guides",children:"Guides"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/documentation/402836/guides/basic-guides/best-practices",children:"Best Practices"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"/documentation/402637/examples",children:"Examples"})})]}),(0,n.jsx)("h3",{className:"footer-navigation-header",children:"Support"}),(0,n.jsxs)("ul",{className:"footer-navigation-column-section-list",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/DevExpress/testcafe/issues/new?assignees=&labels=TYPE%3A+bug&template=bug_report.yaml",children:"Report an Issue"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/DevExpress/testcafe/issues/new?assignees=&labels=TYPE%3A+enhancement&template=feature_request.yaml",children:"Suggest a Feature"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://stackoverflow.com/questions/ask?tags=testcafe",children:"Ask on StackOverflow"})})]})]})]})]}),(0,n.jsxs)("div",{className:"footer-copyright-container",children:[(0,n.jsxs)("p",{children:["\xa9 2012–2023 Developer Express Inc. Use of this site constitutes acceptance of our ",(0,n.jsx)("a",{target:"_blank",href:"https://www.devexpress.com/aboutus/privacy-policy.xml",rel:"noopener noreferrer",children:"Privacy Policy."})]}),(0,n.jsx)("p",{children:"All trademarks or registered trademarks are property of their respective owners."})]})]})})},1119:function(e,r,s){s.d(r,{Y:function(){return c}});var n=s(5893),t=s(7294),i=s(6808),a=s.n(i),l=s(595);let c=e=>{let{onAcceptCookie:r}=e;if(!(0,l.J)())return null;let s=(0,t.useRef)(null);return(0,n.jsx)("div",{ref:s,className:"cookies-message",children:(0,n.jsx)("div",{className:"cookies-1-lvl",children:(0,n.jsx)("div",{className:"cookies_2_lvl",children:(0,n.jsxs)("div",{className:"cookies_3_lvl",children:[(0,n.jsx)("div",{className:"textCookies",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"why-we-use",children:"Why We Use Cookies"}),(0,n.jsxs)("p",{children:["This site uses cookies to make your browsing experience more convenient and personal.\n                                Cookies store useful information on your computer to help us improve the efficiency and\n                                relevance of our site for you. In some cases, they are essential to making the site work\n                                properly. By accessing this site, you consent to the use of cookies. For more\n                                information, refer to DevExpress ",(0,n.jsx)("a",{href:"https://www.devexpress.com/aboutus/privacy-policy.xml",target:"_blank",rel:"noopener noreferrer",children:"privacy policy"})," and",(0,n.jsx)("a",{href:"https://www.devexpress.com/AboutUs/cookie-policy.xml",target:"_blank",rel:"noopener noreferrer",children:" cookie policy"}),"."]})]})}),(0,n.jsx)("div",{className:"understand",children:(0,n.jsx)("button",{type:"button","aria-label":"I understand, dismiss",onClick:function(){a().set("cookie_message_accepted","true",{expires:365}),s.current.classList.add("hidden"),r&&r()},className:"button-cookies",children:"I understand"})})]})})})})}},4891:function(e,r,s){s.d(r,{Z:function(){return j}});var n=s(5893),t=s(7294),i=()=>{let e=(0,t.useRef)(null);function r(e){return e.toLocaleString("en-US")}return(0,t.useEffect)(()=>{if(window.stargazerCount){e.current.innerHTML=r(window.stargazerCount);return}let s=new XMLHttpRequest;s.open("GET","https://api.github.com/repos/DevExpress/testcafe"),s.send(),s.onload=function(){if(200!==s.status)return;let n=0;try{n=JSON.parse(s.response).stargazers_count}catch(e){}n&&(e.current.innerHTML=r(n),window.stargazerCount=n)}}),(0,n.jsxs)("div",{className:"widget widget-lg",children:[(0,n.jsxs)("a",{className:"btn",href:"https://github.com/DevExpress/testcafe",rel:"noopener noreferrer",target:"_blank","aria-label":"Star DevExpress/testcafe on GitHub",children:[(0,n.jsx)("svg",{viewBox:"0 0 16 16",width:"16",height:"16",className:"octicon octicon-mark-github","aria-hidden":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})}),"\xa0",(0,n.jsx)("span",{children:"Star"})]}),(0,n.jsx)("a",{ref:e,className:"star-count",href:"https://github.com/DevExpress/testcafe/stargazers",rel:"noopener noreferrer",target:"_blank",children:"\xa0\xa0\xa0\xa09K"})]})};let a=(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21227 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21227 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z",fill:"white"})});var l=()=>(0,n.jsxs)("div",{className:"github",children:[(0,n.jsx)("div",{className:"inline sm:hidden lg:inline xl:hidden",children:(0,n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/DevExpress/testcafe",children:a})}),(0,n.jsx)("div",{className:"stars hidden sm:flex lg:hidden xl:flex",children:(0,n.jsx)(i,{})})]}),c=s(2479);let o=(e,r)=>!!r.find(r=>r.id===e.id);function d(e){let r=document.querySelector(".subitems"),s="show";r&&(r.contains(e.target)?r.classList.toggle(s):r.classList.remove(s))}var h=e=>{let{items:r,activeItems:s,onItemClick:i}=e;return(0,t.useEffect)(()=>{document.addEventListener("click",d)}),(0,n.jsx)("nav",{className:"header-right-nav",children:(0,n.jsx)("ul",{children:r.map(e=>(function(e,r,s){var t;let i=o(e,r)?"active":"",a=(null===(t=e.href)||void 0===t?void 0:t.indexOf("//"))>-1,l={};return l.href=e.url,a&&(l.target="_blank",l.rel="noopener noreferrer"),e.id&&(0,n.jsx)("li",{onClick:s,children:(0,n.jsx)(c.Z,{isHeader:!0,tocItem:e,...l,className:i,children:e.name})},e.name)})(e,s,i))})})},u=s(1664),f=s.n(u),m=s(5415);let x=/__\$/;var g=()=>((0,t.useEffect)(()=>{(0,m.Z)({container:"#search-container",indexName:"testcafe",appId:"2WALZV1P24",apiKey:"1e20a0fb0bdb47569ce53281287527a2",transformItems:e=>{for(let r of e)r.url&&(r.url=r.url.replace(x,"").replace("#","?search#"));return e}})},[]),(0,n.jsx)("div",{id:"search-container"}));let p=(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"48",fill:"none",children:[(0,n.jsx)("path",{fill:"#fff",d:"M23.26 26l-1.292 1.333h5.169L32.306 32H5.169l5.169-4.667h3.877L12.921 26H9.046L0 34h37.474l-9.045-8H23.26z"}),(0,n.jsx)("path",{fill:"#fff",d:"M34.755 13.232L31.54 10l-13.5 13.578-5.142-5.173-3.214 3.233 8.357 8.405 16.714-16.81z"})]}),v=(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"80",height:"48",fill:"none",children:[(0,n.jsx)("path",{fill:"#fff",d:"M12.21 17H.918v2.254h4.24v11.799H7.99v-11.8h4.22V17zM19.239 22.634a3.393 3.393 0 00-.927-1.294 3.534 3.534 0 00-1.318-.69 5.61 5.61 0 00-1.524-.208c-1.566 0-2.781.46-3.646 1.378-.865.918-1.298 2.296-1.298 4.133 0 1.711.385 3.058 1.154 4.039.769.98 1.984 1.471 3.646 1.471a7.258 7.258 0 002.255-.344 5.212 5.212 0 001.678-.845l-.882-1.775c-.743.524-1.625.801-2.525.794-.903 0-1.556-.223-1.96-.668a3.09 3.09 0 01-.667-1.983h6.159c.068-.362.12-.71.154-1.044.033-.312.05-.625.051-.94a5.138 5.138 0 00-.35-2.024zM17.097 25h-3.81a3.348 3.348 0 01.603-1.75c.193-.222.433-.395.702-.505.268-.11.557-.156.845-.132.252-.02.505.024.736.13.23.105.432.269.586.475.305.52.425 1.182.338 1.782zm10.113.608a4.91 4.91 0 00-1.133-.595c-.412-.153-.79-.295-1.133-.427a4.574 4.574 0 01-.865-.428.681.681 0 01-.255-.254.708.708 0 01-.095-.352c0-.626.398-.939 1.195-.939.494 0 .986.07 1.462.209.48.14.879.271 1.195.396l.597-1.962a6.094 6.094 0 00-1.483-.563 8.305 8.305 0 00-2.122-.25 3.786 3.786 0 00-2.615.813c-.311.3-.554.666-.711 1.074a3.043 3.043 0 00-.196 1.285c-.021.535.1 1.066.35 1.534.222.384.516.717.866.981.346.26.728.463 1.133.606.411.146.789.288 1.132.427.305.119.595.273.865.46.11.07.199.17.26.287a.796.796 0 01.09.38.859.859 0 01-.076.438.829.829 0 01-.284.335 1.761 1.761 0 01-.958.23 5.04 5.04 0 01-1.606-.261 7.074 7.074 0 01-1.257-.533l-.741 2.025c.488.29 1.01.51 1.555.658a7.226 7.226 0 002.05.281c1.331 0 2.33-.302 2.996-.908.335-.313.599-.7.772-1.131a3.24 3.24 0 00.227-1.363 2.894 2.894 0 00-.35-1.503 3.105 3.105 0 00-.865-.95zm7.857 3.372c-.232.06-.47.087-.71.083a.796.796 0 01-.479-.103.832.832 0 01-.335-.367 4.021 4.021 0 01-.216-1.555V23.03h2.513v-2.296h-2.513V18l-2.678.772v1.962h-1.42v2.296h1.42v5.26c0 1.128.223 1.938.67 2.432.279.267.609.471.969.599.36.127.742.176 1.121.142.507 0 1.012-.063 1.504-.188a6.723 6.723 0 001.298-.459l-.474-2.087c-.217.1-.44.184-.67.25zM41.622 21.046a6.365 6.365 0 011.361-1.791 4.869 4.869 0 011.649-.987 5.268 5.268 0 011.72-.302 5.976 5.976 0 012.73.483l.68-1.49a5.75 5.75 0 00-1.273-.351 12.177 12.177 0 00-1.992-.131 7.216 7.216 0 00-2.335.402 7.03 7.03 0 00-2.235 1.278 8.226 8.226 0 00-1.846 2.255 10.382 10.382 0 00-1.149 3.351 9.38 9.38 0 00-.095 3.271c.12.819.44 1.596.928 2.265a4.139 4.139 0 001.737 1.318 6.127 6.127 0 002.349.433c.687.002 1.372-.058 2.048-.181a4.49 4.49 0 001.679-.644l-.176-1.309c-.394.205-.812.36-1.245.463a6.791 6.791 0 01-1.647.182 4.449 4.449 0 01-1.837-.363 3.218 3.218 0 01-1.326-1.087 4.223 4.223 0 01-.692-1.811 7.62 7.62 0 01.087-2.537 9.278 9.278 0 01.88-2.717zm16.055.553a1.849 1.849 0 00-.855-.734 3.99 3.99 0 00-1.667-.282 10.959 10.959 0 00-2.209.221 7.141 7.141 0 00-1.943.685l.293 1.228c.232-.12.474-.22.722-.3.276-.092.558-.168.843-.228.292-.062.575-.11.849-.145.252-.033.506-.05.76-.052.795 0 1.316.148 1.565.443.248.295.306.812.173 1.55a11.67 11.67 0 01-.257 1.087 3.932 3.932 0 00-.558-.04h-.566c-.7-.004-1.401.046-2.094.15a6.066 6.066 0 00-1.695.504 3.44 3.44 0 00-1.209.946c-.334.432-.553.94-.636 1.48-.081.392-.074.798.022 1.187.086.333.253.64.486.896.242.256.542.453.874.573.38.14.783.207 1.188.201.403.005.806-.043 1.197-.14.334-.085.658-.203.968-.353.27-.13.524-.293.756-.483.203-.167.392-.352.562-.553h.103l.178 1.409h1.213a6.22 6.22 0 01-.005-1.228c.039-.443.103-.913.193-1.41.123-.683.274-1.408.453-2.173.179-.765.34-1.55.486-2.355.065-.359.093-.723.082-1.087-.006-.35-.1-.692-.272-.997zm-2.248 6.371c-.117.197-.257.38-.417.544-.19.197-.404.37-.637.513a3.688 3.688 0 01-.85.383 3.502 3.502 0 01-1.056.15 1.627 1.627 0 01-1.235-.452 1.26 1.26 0 01-.306-1.158c.051-.316.201-.609.429-.835a2.4 2.4 0 01.834-.523 4.54 4.54 0 011.116-.262c.418-.047.837-.07 1.258-.07a17.243 17.243 0 011.165.04l-.301 1.67zm7.668-7.226l.051-.282c.072-.402.146-.755.221-1.057.062-.268.164-.526.303-.765a1.23 1.23 0 01.517-.473c.27-.118.566-.173.861-.16.262 0 .523.02.781.06.294.046.58.134.848.261l.613-1.348a4.35 4.35 0 00-1.005-.302 7.2 7.2 0 00-1.147-.08 4.23 4.23 0 00-1.416.21 2.678 2.678 0 00-1.021.645 3.37 3.37 0 00-.705 1.117 8.153 8.153 0 00-.444 1.61l-.102.564h-1.604l-.254 1.41h1.604l-1.56 8.654h1.646l1.56-8.655h2.735l.254-1.409h-2.736zm11.42 1.68a2.379 2.379 0 00-.69-1.197 2.553 2.553 0 00-1.15-.574c-.45-.1-.91-.151-1.372-.15a5.01 5.01 0 00-3.595 1.348c-.943.9-1.57 2.208-1.88 3.925a7.99 7.99 0 00-.123 2.174c.043.587.223 1.155.523 1.66.293.47.72.841 1.227 1.068a4.641 4.641 0 001.969.372 7.38 7.38 0 002.035-.282 5.763 5.763 0 001.69-.765l-.406-1.167a3.724 3.724 0 01-1.15.564 4.65 4.65 0 01-1.442.241 3.767 3.767 0 01-1.487-.252 1.935 1.935 0 01-.888-.724 2.518 2.518 0 01-.367-1.158A5.468 5.468 0 0167.509 26h6.601c.164-.48.294-1.034.388-1.532.153-.672.16-1.369.019-2.043zm-1.659 2.245h-5.1a3.81 3.81 0 011.258-2.134 3.359 3.359 0 012.056-.623 1.894 1.894 0 011.576.613c.324.41.394 1.125.21 2.144zm1.408-7.93l.076-.424h-1.83l-1.754 3h.967l2.541-2.577zm3.658 4.886l-.153-.075c.1-.004.198-.04.277-.102a.318.318 0 00.112-.263.342.342 0 00-.164-.325.785.785 0 00-.395-.094 3.57 3.57 0 00-.302.014 1.25 1.25 0 00-.246.04v1.39h.285v-.639l.263.08.395.56h.334l-.406-.586zm-.4-.215h-.186v-.38a.227.227 0 01.088-.02l.115-.002c.212 0 .318.062.318.188a.173.173 0 01-.088.166.518.518 0 01-.247.048z"}),(0,n.jsx)("path",{fill:"#fff",d:"M78.884 20.858a1.324 1.324 0 00-.798-.759A1.715 1.715 0 0077.5 20a1.671 1.671 0 00-.577.1 1.337 1.337 0 00-.804.758A1.633 1.633 0 0076 21.5c-.004.22.036.438.116.642a1.321 1.321 0 00.795.759c.19.067.389.1.589.099.197.001.392-.032.577-.1a1.336 1.336 0 00.804-.759c.082-.202.123-.42.119-.641a1.669 1.669 0 00-.116-.642zm-.329 1.16a1.01 1.01 0 01-.24.362.975.975 0 01-.362.215 1.404 1.404 0 01-.894-.003 1.032 1.032 0 01-.365-.217 1.017 1.017 0 01-.247-.363 1.329 1.329 0 01-.09-.512 1.407 1.407 0 01.085-.512.978.978 0 01.237-.363c.105-.097.228-.172.363-.217.147-.05.302-.076.458-.074.151-.001.301.024.444.074.134.046.257.12.362.217.108.102.192.225.247.363.063.163.094.337.09.512.004.177-.025.353-.088.518z"})]});var j=e=>{let{items:r,activeItems:s,isDocumentation:i}=e,a=(0,t.useRef)(null),[o,d]=(0,t.useState)(!1);function u(){d(!o)}return(0,n.jsx)("header",{id:"header",ref:a,className:"header-main ".concat(o?"burger-shown":""),children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"logo",children:[(0,n.jsx)("div",{className:"burger",onClick:u,children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"burger-stripes",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]}),(0,n.jsx)("div",{className:"burger-cross",children:(0,n.jsxs)("svg",{width:"48",height:"48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M14 15.429 15.429 14 34 32.571 32.571 34 14 15.429Z",fill:"#fff"}),(0,n.jsx)("path",{d:"M32.571 14 34 15.429 15.429 34 14 32.571 32.571 14Z",fill:"#fff"})]})})]})}),(0,n.jsx)(f(),{href:"/","aria-label":"Return to testcafe.io homepage",children:p}),!i&&(0,n.jsx)(f(),{href:"/","aria-label":"Return to testcafe.io homepage",children:v}),i&&(0,n.jsxs)("span",{children:["\xa0/\xa0",(0,n.jsx)(c.Z,{tocItem:s[0],children:"Docs"})]}),!i&&(0,n.jsx)("nav",{className:"header-left-nav",children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.devexpress.com/products/testcafestudio/",target:"_blank",rel:"noopener noreferrer",children:"Studio"})})})})]}),(0,n.jsx)(h,{activeItems:s,items:r,onItemClick:u}),(0,n.jsxs)("div",{className:"search",children:[(0,n.jsx)(g,{}),(0,n.jsx)(l,{})]})]})})}},4104:function(e,r,s){s.d(r,{E0:function(){return i},EV:function(){return t},aC:function(){return l},ah:function(){return a},eu:function(){return o},zL:function(){return c}});var n=s(5893);s(7294);let t=(0,n.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M18.34 18.34h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.21v4.25h-2.67v-8.6h2.56v1.18h.04a2.8 2.8 0 012.53-1.38c2.7 0 3.2 1.77 3.2 4.09v4.7zM7 8.57a1.55 1.55 0 110-3.1 1.55 1.55 0 010 3.1zm-1.33 9.77h2.67v-8.6H5.67v8.6zM19.67 3H4.33C3.6 3 3 3.58 3 4.3v15.4c0 .72.6 1.3 1.33 1.3h15.34c.73 0 1.33-.58 1.33-1.3V4.3c0-.72-.6-1.3-1.33-1.3z",clipRule:"evenodd"})}),i=(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",children:(0,n.jsx)("path",{d:"M16.94 4h2.715l-5.93 6.777L20.7 20h-5.462l-4.278-5.593L6.065 20H3.35l6.342-7.25L3 4h5.6l3.868 5.113L16.94 4Zm-.952 14.375h1.504L7.784 5.54H6.17l9.818 12.836Z"})}),a=(0,n.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),l=(0,n.jsx)("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})}),c=(0,n.jsxs)("svg",{width:"24",height:"24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M2.004 7.198 12 11.862l9.996-4.664a2.272 2.272 0 0 0-.78-1.562A2.6 2.6 0 0 0 19.5 5h-15a2.6 2.6 0 0 0-1.716.636 2.272 2.272 0 0 0-.78 1.562Z"}),(0,n.jsx)("path",{d:"m22 9.804-10 4.667L2 9.804v6.863c0 .618.263 1.212.732 1.65A2.593 2.593 0 0 0 4.5 19h15c.663 0 1.299-.246 1.768-.683a2.257 2.257 0 0 0 .732-1.65V9.804Z"})]}),o=(0,n.jsx)("svg",{width:"24",height:"24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5Zm9.685 6.463L10 9v6l4.685-2.463c.42-.222.42-.853 0-1.074Z"})})},595:function(e,r,s){s.d(r,{EE:function(){return i},J:function(){return l},p6:function(){return a}});var n=s(6808),t=s.n(n);let i="https://testcafe.io";function a(e){return new Date(e).toLocaleDateString("en-US",{month:"short",year:"numeric",day:"numeric"})}function l(){return!t().get("cookie_message_accepted")}}}]);