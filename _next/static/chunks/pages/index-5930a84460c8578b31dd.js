_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("QeBL")}])},"6+fR":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("+Oug"),i=a("MTo2"),o=a("ORh2"),l=a("4kkf"),c=a("DnWk"),m=a("4Qw9"),d=r.a.createElement;t.a=function(e){return Object(n.useEffect)((function(){Object(c.a)(),Object(m.a)(),Object(s.d)(e.publishDates),Object(s.b)(e.publishDates)})),d("div",null,d(l.a,{isDocumentation:!1,activeItems:e.headerNav.activeItems,items:e.headerNav.items}),d("main",{className:"main"},e.children),d(o.a,null),d(i.a,null))}},KQm4:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return w}));var n=a("q1tI"),r=a.n(n),s=a("8Kt/"),i=a.n(s),o=a("6+fR"),l=a("KQm4"),c=r.a.createElement,m=[{name:"TestCafe \ud83d\ude0a",test:"fixture('Pizza Palace')\n    .page('https://testcafe-demo-page.glitch.me/');\n\ntest('Submit a form', async t => {\n    await t\n        // automatically dismiss dialog boxes\n        .setNativeDialogHandler(() => true)\n\n        // drag the pizza size slider\n        .drag('.noUi-handle', 100, 0)\n\n        // select the toppings\n        .click('.next-step')\n        .click('label[for=\"pepperoni\"]')\n        .click('#step2 .next-step')\n\n        // fill the address form\n        .click('.confirm-address')\n        .typeText('#phone-input', '+1-541-754-3001')\n        .click('#step3 .next-step')\n\n        // zoom into the iframe map\n        .switchToIframe('.restaurant-location iframe')\n        .click('button[title=\"Zoom in\"]')\n\n        // submit the order\n        .switchToMainWindow()\n        .click('.complete-order');\n});"},{name:"Selenium (JavaScript) \ud83d\ude15",test:"const {Builder, By, Key, until} = require('selenium-webdriver');\n\n(async function pizzaPalace() {\n\n    const driver = await new Builder().forBrowser('firefox').build();\n    \n    try {\n        await driver.get('https://testcafe-demo-page.glitch.me/');\n\n        // drag the pizza size slider\n        const sourceEle = driver.findElement(By.className(\"noUi-handle\"));\n        const actions = driver.actions({async: true});\n        await actions.dragAndDrop(sourceEle, {x:100, y:0}).perform();\n\n        // select the toppings\n        await driver.findElement(By.className(\"next-step\")).click();\n        await driver.findElement(By.css('label[for=\"pepperoni\"]')).click(); \n        await driver.findElement(By.css('#step2 .next-step')).click();\n\n        // fill the address form\n        await driver.wait(until.elementLocated(By.css('.google-map')),10000);\n        await driver.findElement(By.className(\"confirm-address\")).click();   \n        await driver.findElement(By.id('phone-input')).sendKeys('+1-541-754-3001');\n        await driver.findElement(By.css('#step3 .next-step')).click();\n\n        // zoom into the iframe map\n        await driver.wait(until.elementLocated(By.css('.restaurant-location iframe')),10000);\n        const restaurantLocationFrame = await driver.findElement(By.css('.restaurant-location iframe'));\n        await driver.switchTo().frame(restaurantLocationFrame);\n        await driver.wait(until.elementLocated(By.css('button[title=\"Zoom in\"]')),10000);\n        await driver.findElement(By.css('button[title=\"Zoom in\"]')).click();\n\n        // submit the order\n        await driver.switchTo().defaultContent();\n        await driver.findElement(By.className(\"complete-order\")).click();\n\n        // dismiss the confirmation dialog\n        await driver.wait(until.alertIsPresent());\n        const confirmationMessage = driver.switchTo().alert();\n        await confirmationMessage.accept();\n                \n    } finally {\n        await driver.quit();\n    }\n})();"}],d=function(){var e=Object(n.useState)(0),t=e[0],a=e[1],r=[],s=[],i=[];function o(e){var t=e.currentTarget,n=Object(l.a)(t.parentNode.childNodes).indexOf(t);a(n)}return m.forEach((function(e,a){var n=a===t?"selected":"";r.push(c("option",{value:a,key:e.name},e.name)),s.push(c("a",{key:e.name,onClick:o,className:n},e.name)),i.push(c("div",{key:e.name,className:n},c("div",{className:"code-block-caption"},e.name),c("pre",null,c("code",{className:"lang-js"},e.test))))})),c("div",{className:"tab-with-tests"},c("div",{className:"sm:hidden"},c("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),c("select",{value:t,id:"tabs",name:"tabs",onChange:function(e){var t=e.target;a(Number.parseInt(t.value,10))}},r)),c("div",{className:"hidden sm:block lg:hidden"},c("div",null,c("nav",{className:"space-x-8","aria-label":"Tabs"},s))),c("div",{className:"code-blocks"},i))},u=r.a.createElement,p=[{header:"CI/CD-ready",text:"TestCafe integrates with all popular CI/CD solutions.",img:"deploy-ci-ready.svg"},{header:"Concurrent Test Runs",text:"Save time and resources: run your tests in multiple browsers at once.",img:"deploy-concurrent.svg"},{header:"If something goes wrong...",text:"Use the built-in Debug Mode to pin-point the source of your frustration.",img:"deploy-if-something-goes-wrong.svg"}],f=[{name:"chrome",img:"browser-chrome.svg"},{name:"firefox",img:"browser-firefox.svg"},{name:"safari",img:"browser-safari.svg"},{name:"edge",img:"browser-edge.svg"},{name:"opera",img:"browser-opera.svg"},{name:"browserstack",img:"browser-browserstack.svg"},{name:"lambdatest",img:"browser-lambdatest.svg"}],h=[{name:"Rodrigo Finger",twitterLink:"https://twitter.com/rodrigofinger",image:"r-finger.png",twitter:"@RodrigoFinger",text:'<a href="https://twitter.com/DXTestCafe" target="_blank" rel="noopener">@DXTestCafe</a> is the best automated front-end testing tool I\'ve used so far. <a href="https://twitter.com/TestCafeStudio" target="_blank" rel="noopener">@TestCafeStudio</a> is a good starting point to explore its features, easy to use for the testing team. Writing a js script with it allows to build more complex test scenarios. Easy and fast to setup and use.'},{name:"Christine Zierold",twitterLink:"https://twitter.com/chriszie_",image:"c-zierold.png",twitter:"@ChrisZie_",text:'Since I\'m using <a href="https://twitter.com/hashtag/testcafe?src=hash" target="_blank" rel="noopener">#testcafe</a> on a daily basis now to build my <a href="https://twitter.com/hashtag/automatedUItest?src=hash" target="_blank" rel="noopener">#automatedUItest</a>, I love it every day more and more. The code looks so clean and I don\'t need to \'waitForElementVisible\' or just \'wait()\'. Everyone should try this out. It is amazing. <a href="https://twitter.com/hashtag/TestAutomation?src=hash" target="_blank" rel="noopener">#TestAutomation</a> <a href="https://twitter.com/hashtag/QAisAwesome?src=hash" target="_blank" rel="noopener">#QAisAwesome</a>'},{name:"Damien Hampton",twitterLink:"https://twitter.com/damien_hampton",image:"d-hampton.png",twitter:"@damien_hampton",text:'I used to hate JavaScript, but that was because I didn\'t understand it. Now I can\'t get enough! More <a href="https://twitter.com/hashtag/javascript?src=hash" target="_blank" rel="noopener">#javascript</a> koolaid: TestCaf\xe9 looks like a very cool UI testing framework: <a href="https://buff.ly/2EeJUPX" target="_blank" rel="noopener">buff.ly/2EeJUPX</a> Very easy to use! <a href="https://twitter.com/DXTestCafe" target="_blank" rel="noopener">@dxtestcafe</a>'}],g=["Get started with our free and open source framework in minutes.","Create easy-to-read JavaScript and TypeScript tests.","Simulate complex page interactions and multi-window scenarios.",'Code your tests by hand or <a target="_blank" rel="noopener noreferrer" href="https://www.devexpress.com/products/testcafestudio/">record in your browser</a>.'],v=["Run your tests in any modern browser \u2014 local or remote.","Run your tests concurrently to speed up the testing process.","Easily integrate TestCafe with your CI solution of choice.","Store test reports in many convenient formats."],w=!0;t.default=function(e){var t=e.headerNav,a=e.publishDates,n=p.map((function(e){return u("li",{key:e.header},u("div",{className:"love-testcafe-container"},u("div",{className:"circle-container"},u("img",{src:"/img/".concat(e.img),alt:e.header})),u("div",{className:"text-container"},u("h3",null,e.header),u("span",{dangerouslySetInnerHTML:{__html:e.text}}))))})),r=f.map((function(e){return u("li",{key:e.name},u("img",{className:"browser-img",src:"/img/".concat(e.img),alt:e.name}))})),s=h.map((function(e){return u("li",{key:e.name},u("div",{className:"comments-container"},u("div",{className:"circle-container"},u("img",{className:"circle rounded-full",src:"/img/".concat(e.image),alt:"image"})),u("div",{className:"text-container"},u("h3",null,e.name),u("a",{href:e.twitterLink,rel:"noopener noreferrer",target:"_blank"},e.twitter),u("span",{dangerouslySetInnerHTML:{__html:e.text}}))))})),l=function(e){return e.map((function(e){return u("li",{key:e},u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},u("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})),u("span",{dangerouslySetInnerHTML:{__html:e}}))}))},c=l(g),m=l(v);return u(o.a,{headerNav:t,publishDates:a},u(i.a,null,u("title",null,"Cross-Browser End-to-End Testing Framework | Test\u0421afe"),u("meta",{name:"description",content:"Create reliable tests and increase your test coverage. No WebDriver required, no manual timeouts, cross-browser capable out of the box."}),u("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:'\n    {\n        "@context": "https://schema.org/",\n        "@type": "WebSite",\n        "name": "TestCafe",\n        "url": "https://testcafe.io/",\n        "sameAS": [\n        "https://devexpress.github.io/testcafe/",\n        "https://twitter.com/DXTestCafe",\n        "https://www.facebook.com/dxtestcafe/"\n        ],\n        "abstract": "Create reliable tests and increase your test coverage. No WebDriver required, no manual timeouts, cross-browser capable out of the box.",\n        "about": {\n        "@type": "SoftwareApplication",\n        "applicationCategory": "End-to-end testing framework",\n        "name": "TestCafe",\n        "description": "TestCafe is an end-to-end testing framework for JavaScript and TypeScript. It supports all popular browsers and takes 1 minute to set up.",\n        "operatingSystem": "Windows, MacOS, Linux",\n        "featureList": [\n        "1 minute to set up",\n        "Clean code",\n        "Free and Open Source",\n        "Intuitive syntax",\n        "Cross-browser & cross-platform support",\n        "CI/CD-ready",\n        "Concurrent test runs",\n        "Built-in Debug Mode"\n        ]\n    },\n        "author": {\n        "@type": "Organization",\n        "name": "Developer Express Inc.",\n        "url": "https://www.devexpress.com/"\n    },\n        "audience": {\n        "@type": "Audience",\n        "name": "Developers, QA engineers, testers"\n    },\n        "inLanguage": "en-us",\n        "keywords": "end-to-end, testing framework, e2e, javascript, typescript"\n    }\n'}})),u("div",{className:"dashboard-page testcafe-landing-page"},u("div",{className:"dashboard-hero-wrapper"},u("div",{className:"main-middle dashboard-hero"},u("h1",null,"Modern web testing, simplified"),u("div",{className:"description"},"TestCafe is a user-friendly end-to-end testing solution. Free and open-source test runner. Powerful desktop app."),u("ul",{className:"browser-list"},r))),u("div",{className:"main-gradient"},u("div",{className:"main-middle"},u("div",{className:"from-zero"},u("div",null,u("h2",null,"From zero to testing in minutes"),u("div",{className:"from-zero-ul-holder"},u("img",{alt:"from-zero-ul-holder-background",src:"/img/dashboard/main-circle.svg"}),u("ul",null,u("li",null,u("div",{className:"li-number"},u("span",null,"1")),u("div",null,u("span",{className:"from-zero-command"},u("span",null,"%")," npm i -g testcafe"),u("div",{className:"from-zero-slogan"},"Just one npm package."))),u("li",null,u("div",{className:"li-number"},u("span",null,"2")),u("div",null,u("span",{className:"from-zero-command"},u("span",null,"%")," testcafe chrome test.js"),u("div",{className:"from-zero-slogan"},"Works with common browsers out of the box."))),u("li",null,u("div",{className:"li-number"},u("span",null,"3")),u("div",null,u("span",{className:"from-zero-command"},u("span",null,"%")," docker pull testcafe/testcafe"),u("div",{className:"from-zero-slogan"},"Ready for your CI/CD pipeline."))))),u("a",{className:"info-btn",href:"/documentation/402635/guides/overview/getting-started"},"Get Started"))),u("div",{className:"write-record-run-analyze"},u("div",{className:"md:flex"},u("div",{className:"write-record-divider"},u("div",{className:"write-record-block"},u("h2",null,"Write or Record Tests"),u("ul",{role:"list"},c))),u("div",{className:"write-record-divider"},u("div",{className:"write-record-block"},u("h2",null,"Run and Analyze"),u("ul",{role:"list"},m))))),u("div",{className:"test-example"},u("div",null,u("h2",null,"Write tests with ease"),u("div",{className:"desc"},"The intuitive syntax of TestCafe makes teams more productive from day one.",u("br",null),"Check the test below and see for yourself."),u(d,null))),u("div",{className:"love-testcafe"},u("div",null,u("h2",null,"Deploy without fear"),u("div",{className:"love-testcafe-wrapper"},u("ul",null,n),u("div",{className:"qa-guy"},u("img",{src:"/img/qa-guy.svg",alt:"qa-engineer-picture"}))),u("a",{href:"/documentation/402635/guides/overview/getting-started",className:"info-btn"},"Get Started"))),u("div",{className:"comments"},u("div",null,u("h2",null,"Comments from your peers"),u("ul",null,s)))))))}}},[["/EDR",0,1,2,3]]]);