(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t,n){n("GAND"),n("GmYv"),e.exports=n("b9nV")},BEPO:function(e){e.exports=JSON.parse('{"a":false,"b":false}')},app:function(e,t,n){"use strict";n.r(t),n.d(t,"App",(function(){return u}));var o=n("aurelia-framework"),r=(n("70NS"),function(e,t,n,o){var r,s=arguments.length,u=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(u=(s<3?r(u):s>3?r(t,n,u):r(t,n))||u);return s>3&&u&&Object.defineProperty(t,n,u),u}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(){this.message="how dooze!",this.routes=[{route:["","home"],name:"home-panel",moduleId:"views/home-panel",nav:!0,title:"Home",settings:{requireAdmin:!1,moduleAuthRequired:!1,sortOrder:1}},{route:"a",name:"panel-a",moduleId:"views/panel-a",nav:!0,title:"Panel A",settings:{requireAdmin:!1,moduleAuthRequired:!1,sortOrder:1}}]}return e.prototype.configureRouter=function(e,t){console.log("configure router called..."),this.router=t,e.options.root="/",e.options.pushState=!1;e.mapUnknownRoutes((function(){return console.log("route not found..."),{route:"not-found",moduleId:"not-found"}})),e.map(this.routes)},e=r([o.b,s("design:paramtypes",[])],e)}()},"app.html":function(e,t,n){e.exports='<template> <require from="./home.scss"></require> <h1>${message}</h1> <p>some something brightside... hotreload</p> <ul repeat.for="nav of router.navigation"> <li class="${nav.isActive ? \'active\' : \'\'}"><a href.bind="nav.href">${nav.title}</a></li> </ul> <router-view containerless></router-view> </template> '},"home.scss":function(e,t,n){"use strict";n.r(t);var o=n("denP"),r=n.n(o),s=n("JPst"),u=n.n(s)()(r.a);u.push([e.i,"p{color:#a69966}","",{version:3,sources:["webpack://./src/home.scss"],names:[],mappings:"AAEA,EACE,aAHI",sourcesContent:["$col: #a69966;\n\np {\n  color: $col;\n}\n"],sourceRoot:""}]),t.default=u},main:function(e,t,n){"use strict";n.d(t,"configure",(function(){return r}));var o=n("BEPO");n("70NS");function r(e){e.use.standardConfiguration().feature("resources/index"),e.use.developmentLogging(o.a?"debug":"warn"),o.b&&e.use.plugin("aurelia-testing"),e.start().then((function(){return e.setRoot("app")}))}},"resources/index":function(e,t,n){"use strict";function o(e){}n.r(t),n.d(t,"configure",(function(){return o}))},"views/a-styles.scss":function(e,t,n){"use strict";n.r(t);var o=n("denP"),r=n.n(o),s=n("JPst"),u=n.n(s)()(r.a);u.push([e.i,".foo{color:gold;border:1px dotted #000}","",{version:3,sources:["webpack://./src/views/a-styles.scss"],names:[],mappings:"AAAA,KACE,UAAA,CACA,sBAAA",sourcesContent:[".foo {\n  color: gold;\n  border: 1px dotted #000;\n}\n"],sourceRoot:""}]),t.default=u},"views/home-panel":function(e,t,n){"use strict";n.r(t),n.d(t,"HomePanel",(function(){return o}));var o=function(){}},"views/home-panel.html":function(e,t){e.exports="<template> A B C D E F G </template> "},"views/panel-a":function(e,t,n){"use strict";n.r(t),n.d(t,"PanelA",(function(){return o}));var o=function(){}},"views/panel-a.html":function(e,t,n){e.exports='<template> <require from="./a-styles.scss"></require> Panel A </template> '}},[[0,1,3,2,5,4,6]]]);
//# sourceMappingURL=app~f075b844.aa7a9c3725e3a69cc52e.bundle.map