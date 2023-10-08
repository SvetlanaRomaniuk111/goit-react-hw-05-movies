/*! For license information please see 223.7c43c549.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{598:function(e,t,r){"use strict";r.r(t),r.d(t,{fetchMovies:function(){return u}});var n=r(861),a=r(687),i=r.n(a),o=r(243).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjM0ZGU0ZDBmY2Q2ZDMyMTU4NTZiOWNiY2FjOTIxMiIsInN1YiI6IjY1MjE0OTU4NzQ1MDdkMDBhYzQ5NjM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4tSzuvDckrKfx97Li1MJc--OVLo4Rhp1vN70xjG_Y0w",accept:"application/json"}}),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get(t);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},130:function(e,t,r){"use strict";var n=r(439),a=r(598),i=r(791),o=r(689),u=r(87),c=r(733),s=r(184);t.Z=function(e){var t=e.url,r=(0,o.TH)(),l=r.pathname,f=r.search,d=(0,i.useState)([]),v=(0,n.Z)(d,2),p=v[0],b=v[1],h=(0,i.useState)(!0),g=(0,n.Z)(h,2),j=g[0],m=g[1];return(0,i.useEffect)((function(){(0,a.fetchMovies)(t).then((function(e){var t=e.results;b(t),m(!1)}))}),[t]),(0,s.jsx)(c.Z,{loading:j,children:(0,s.jsx)("ul",{children:p.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(u.OL,{to:"/movies/".concat(e.id),state:{from:l+f},children:e.original_name||e.original_title||e.name||e.title})},e.id)}))})})}},733:function(e,t,r){"use strict";var n=r(184);t.Z=function(e){var t=e.loading,r=e.children;return t?(0,n.jsx)("p",{children:"Loading"}):(0,n.jsx)(n.Fragment,{children:r})}},223:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(439),a=r(130),i=r(234),o=r(184),u=function(e){var t=e.onChange,r=e.value,n=e.search;return(0,o.jsxs)("form",{onSubmit:n,children:[(0,o.jsx)("input",{onChange:t,value:r,type:"text",name:"query"}),(0,o.jsx)(i.Z,{type:"submit",children:"Search"})]})},c=r(791),s=r(87),l=function(){var e=(0,s.lr)({q:""}),t=(0,n.Z)(e,2),r=t[0],i=t[1],l=(0,c.useState)(""),f=(0,n.Z)(l,2),d=f[0],v=f[1];return(0,c.useEffect)((function(){v(r.get("q"))}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Movies"}),(0,o.jsx)(u,{value:d,search:function(e){e.preventDefault(),i({q:d})},onChange:function(e){var t=e.target.value;v(t)}}),(0,o.jsx)(a.Z,{url:"search/movie?query=".concat(r.get("q"))})]})}},694:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},234:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(142);function a(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(439);function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=r(694),l=r.n(s),f=r(791),d=r(184),v=["as","disabled"];function p(e){var t=e.tagName,r=e.disabled,n=e.href,a=e.target,i=e.rel,o=e.role,u=e.onClick,c=e.tabIndex,s=void 0===c?0:c,l=e.type;t||(t=null!=n||null!=a||null!=i?"a":"button");var f={tagName:t};if("button"===t)return[{type:l||"button",disabled:r},f];var d=function(e){(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==u||u(e)};return"a"===t&&(n||(n="#"),r&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:r?void 0:s,href:n,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?i:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},f]}var b=f.forwardRef((function(e,t){var r=e.as,n=e.disabled,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,v),i=p(Object.assign({tagName:r,disabled:n},a)),o=(0,u.Z)(i,2),c=o[0],s=o[1].tagName;return(0,d.jsx)(s,Object.assign({},a,c,{ref:t}))}));b.displayName="Button";var h=["xxl","xl","lg","md","sm","xs"],g=f.createContext({prefixes:{},breakpoints:h,minBreakpoint:"xs"});g.Consumer,g.Provider;function j(e,t){var r=(0,f.useContext)(g).prefixes;return e||r[t]||t}var m=["as","bsPrefix","variant","size","active","disabled","className"],y=f.forwardRef((function(e,t){var r=e.as,n=e.bsPrefix,a=e.variant,i=void 0===a?"primary":a,s=e.size,f=e.active,v=void 0!==f&&f,b=e.disabled,h=void 0!==b&&b,g=e.className,y=c(e,m),x=j(n,"btn"),O=p(o({tagName:r,disabled:h},y)),Z=(0,u.Z)(O,2),w=Z[0],N=Z[1].tagName;return(0,d.jsx)(N,o(o(o({},w),y),{},{ref:t,disabled:h,className:l()(g,x,v&&"active",i&&"".concat(x,"-").concat(i),s&&"".concat(x,"-").concat(s),y.href&&h&&"disabled")}))}));y.displayName="Button";var x=y}}]);
//# sourceMappingURL=223.7c43c549.chunk.js.map