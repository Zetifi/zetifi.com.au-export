(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"16R3":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/policies/terms-of-service",function(){return n("pxLG")}])},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),a=n("lwAK"),u=n("FYa8"),i=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,c=f.length;i<c;i++){var l=f[i];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=o.props[l],d=r[l]||new Set;d.has(s)?a=!1:(d.add(s),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var h=m;t.default=h},Bjk4:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return null!=e?e:t()}function a(e){let t=void 0,n=e[0],r=1;for(;r<e.length;){const o=e[r],a=e[r+1];if(r+=2,("optionalAccess"===o||"optionalCall"===o)&&null==n)return;"access"===o||"optionalAccess"===o?(t=n,n=a(n)):"call"!==o&&"optionalCall"!==o||(n=a((...e)=>n.call(t,...e)),t=void 0)}return n}Object.defineProperty(t,"__esModule",{value:!0});var u=r(n("q1tI")),i=r(n("nOHt")),c=r(n("8Kt/"));t.default=(e,t)=>(class extends u.default.Component{static async getInitialProps({res:n}){return a([n,"optionalAccess",e=>e.writeHead])&&(n.writeHead(o(a([t,"optionalAccess",e=>e.statusCode]),()=>301),{Location:e}),n.end()),{}}componentDidMount(){null!=a([t,"optionalAccess",e=>e.asUrl])?i.default.push(e,t.asUrl,{shallow:!0}):"/"===e[0]?i.default.push(e):window.location.href=e}render(){const n=o(a([t,"optionalAccess",e=>e.asUrl]),()=>e);return u.default.createElement(u.default.Fragment,null,u.default.createElement(c.default,{__self:this,__source:{fileName:"src/index.tsx",lineNumber:35}},u.default.createElement("noscript",{__self:this,__source:{fileName:"src/index.tsx",lineNumber:37}},u.default.createElement("meta",{httpEquiv:"refresh",content:`0;url=${n}`,__self:this,__source:{fileName:"src/index.tsx",lineNumber:38}})),(void 0===a([t,"optionalAccess",e=>e.statusCode])||301===a([t,"optionalAccess",e=>e.statusCode]))&&u.default.createElement("link",{rel:"canonical",href:n,__self:this,__source:{fileName:"src/index.tsx",lineNumber:42}})),this.props.children?this.props.children:u.default.createElement("p",{__self:this,__source:{fileName:"src/index.tsx",lineNumber:49}},"Redirecting to ",u.default.createElement("a",{href:n,__self:this,__source:{fileName:"src/index.tsx",lineNumber:50}},n),"\u2026"))}})},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),u=n("48fX"),i=n("tCBg"),c=n("T0f4"),l=n("mPvQ");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(i){u(l,i);var c=s(l);function l(e){var a;return r(this,l),a=c.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),u=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||u()}},pxLG:function(e,t,n){"use strict";n.r(t);var r=n("Bjk4"),o=n.n(r);t.default=o()("/files/Zetifi_Standard_Terms_and_Conditions.pdf")},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}}},[["16R3",0,1,2]]]);