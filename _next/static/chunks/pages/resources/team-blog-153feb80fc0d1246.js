(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[436],{6083:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/team-blog",function(){return t(6998)}])},6436:function(e,r,t){"use strict";var l=t(5893);t(7294);var n=t(362),i=t(7478);let s="read-full-article";function getArticleHeaderLink(e,r){if(r)return(0,l.jsx)("a",{className:"blog-title",href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)("h2",{children:e.title})});let t={url:e.url,href:e.url,id:e.id};return(0,l.jsx)(n.Z,{tocItem:t,className:"blog-title",children:(0,l.jsx)("h2",{children:e.title})})}function getReadFullArticleLink(e,r){if(r)return(0,l.jsx)("a",{href:e.url,className:s,target:"_blank",rel:"noopener noreferrer",children:"Read full article"});let t={url:e.url,href:e.url,id:e.id};return(0,l.jsx)(n.Z,{tocItem:t,className:s,children:"Read full article"})}r.Z=e=>{let{previewListItems:r,readFullItem:t,isExternalResources:n}=e;return(0,l.jsx)("ul",{className:"team-blog",children:r.map((e,r)=>(0,l.jsx)("li",{children:(0,l.jsxs)("article",{children:[getArticleHeaderLink(e,n),(0,l.jsxs)("div",{className:"published",children:["Published ",e.sourceHomePage&&(0,l.jsxs)(l.Fragment,{children:["on ",(0,l.jsx)("a",{href:e.sourceHomePage,target:"_blank",rel:"noopener noreferrer",children:e.source})]}),e.author&&(0,l.jsxs)(l.Fragment,{children:[" by ",e.profileUrl?(0,l.jsx)("a",{href:e.profileUrl,target:"_blank",rel:"noopener noreferrer",children:e.author}):e.author]})]}),e.date&&(0,l.jsx)("time",{children:(0,i.p6)(e.date)}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.excerpt}}),t&&getReadFullArticleLink(e,n)]})},r))})}},6998:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return c}});var l=t(5893),n=t(7294),i=t(901),s=t(6436),a=t(7703),c=!0;r.default=e=>{let{content:r,headerNav:t,sidebarNav:c,breadcrumbsNav:u,publishDates:o}=e;return(0,n.useEffect)(()=>{(0,a.rK)(o.teamBlog)}),(0,l.jsxs)(i.Z,{isDocumentation:!1,headerNav:t,sidebarNav:c,content:r,breadcrumbsNav:u,publishDates:o,children:[(0,l.jsx)("h1",{children:"Blog"}),(0,l.jsx)("div",{className:"description",children:"This section contains articles from the TestCafe team"}),(0,l.jsx)(s.Z,{previewListItems:e.previewListItems,readFullItem:!0,isExternalResources:!1})]})}}},function(e){e.O(0,[252,174,901,774,888,179],function(){return e(e.s=6083)}),_N_E=e.O()}]);