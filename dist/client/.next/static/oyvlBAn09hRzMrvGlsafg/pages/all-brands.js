(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1995:function(e,t,r){__NEXT_REGISTER_PAGE("/all-brands",function(){return e.exports=r(2132),{page:e.exports.default}})},2132:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),a=r(0),i=r.n(a),c=r(541),u=r(720),l=(r(42),r(20)),s=r.n(l),p=(r(1998),r(45),r(18)),f=r.n(p),y=(r(50),r(16)),m=r.n(y);r(2e3);function b(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=function(e){var t,r=(t={},e.listBrands.filter(function(e){return e.name}).sort().map(function(e){var r=e.name[0].toUpperCase();t[r]?t[r]=[].concat(b(t[r]),[e]):t[r]=[e]}),t);return i.a.createElement(a.Fragment,null,Object.keys(r).map(function(e,t){return i.a.createElement(s.a,{key:t},i.a.createElement("h1",{className:"row-brand"},e),i.a.createElement(s.a,{gutter:10},r[e].map(function(e){return i.a.createElement(m.a,{key:e._id,lg:6,md:12,sm:12,xs:24},i.a.createElement("a",{className:"brand-link",title:e.name,onClick:function(){window.location.href="/danh-sach-hang/".concat(e.slug)}},e.name.toUpperCase()," (",e.totalNews,")"))})))}),e.loading&&i.a.createElement(s.a,{style:{textAlign:"center",marginTop:"24px"}},i.a.createElement(f.a,{type:"sync",spin:!0,style:{fontSize:"42px"}})))},h=(r(2002),r(17)),v=Object(h.d)("common")(function(e){return i.a.createElement("div",{className:"top-brands"},i.a.createElement("h1",{className:"row-brand"},e.t("common:top-brands")),i.a.createElement(s.a,{gutter:10},e.brands.slice(0,16).sort(function(e,t){return t.totalNews-e.totalNews}).map(function(e){return i.a.createElement(m.a,{key:e._id,lg:6,md:12,sm:12,xs:24},i.a.createElement("a",{className:"brand-link",title:e.name,onClick:function(){window.location.href="/danh-sach-hang/".concat(e.slug)}},e.name.toUpperCase()," (",e.totalNews,")"))})))}),g=function(e){return i.a.createElement(s.a,{className:"outline"},i.a.createElement(v,{brands:e.topBrands}),i.a.createElement(d,{arrayLetter:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],listBrands:e.brands,loading:e.loading}))},O=r(27),w=r(527),E=r.n(w);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){var e,r,n,o,a,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,l=new Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=this,r=!(o=(e=P(t)).call.apply(e,[this].concat(l)))||"object"!==j(o)&&"function"!=typeof o?S(n):o,a=S(r),i="state",c={brands:{data:r.props.brandsResult.data,after:r.props.brandsResult.after},loading:!1},i in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,a["Component"]),r=t,(n=[{key:"render",value:function(){var e=this.props.t;return i.a.createElement(a.Fragment,null,i.a.createElement(E.a,null,i.a.createElement("title",null,"Tất cả các hãng | timmay.vn"),i.a.createElement("meta",{property:"fb:app_id",content:O.a.facebookAppId}),i.a.createElement("meta",{property:"description",content:"timmay.vn"}),i.a.createElement("meta",{property:"og:url",content:"".concat(O.a.url.main,"/danh-sach-hang/")}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:"Tất cả các hãng | timmay.vn"}),i.a.createElement("meta",{property:"og:description",content:"timmay.vn"}),i.a.createElement("meta",{property:"og:image:url",content:"/static/images/logo-timmay.png"}),i.a.createElement("meta",{property:"og:image:width",content:"800"}),i.a.createElement("meta",{property:"og:image:height",content:"600"})),i.a.createElement(c.a,{updateFilters:this.props.updateFilters,topBrands:this.props.topBrands,searchKeyword:this.props.searchKeyword,hasSideBar:!0,hasMenuItems:!0,profileState:this.props.profileState,profileReducers:this.props.profileReducers},i.a.createElement(u.a,{items:[{value:"/",label:"".concat(e("common:home"))},{value:"",label:"".concat(e("common:brand-list"))}]}),i.a.createElement(g,{topBrands:this.props.topBrands,brands:this.state.brands.data,loading:this.state.loading})))}}])&&_(r.prototype,n),o&&_(r,o),t}(),C=Object(h.d)("common")(R),x=r(21),T=r(13);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function M(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),I(this,F(t).apply(this,arguments))}var r,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,a["Component"]),r=t,n=[{key:"render",value:function(){return i.a.createElement(C,{searchKeyword:this.props.searchKeyword,topBrands:this.props.topBrands,brandsResult:this.props.brandsResult,updateFilters:this.props.updateFilters,profileState:this.props.profileState,profileReducers:this.props.profileReducers})}}],c=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var r,n,a,i,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(T.a)(),e.next=3,Promise.all([r.findTopBrands(),r.findBrandList()]);case 3:return n=e.sent,a=N(n,2),i=a[0],c=a[1],e.abrupt("return",{topBrands:i.data,brandsResult:c});case 8:case"end":return e.stop()}},e)}),function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){M(a,n,o,i,c,"next",e)}function c(e){M(a,n,o,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],n&&A(r.prototype,n),c&&A(r,c),t}();t.default=Object(x.withRematch)(x.initStore,function(e){return{profileState:e.profileModel,searchKeyword:e.searchModel.filters.keyword}},function(e){return{profileReducers:e.profileModel,updateFilters:e.searchModel.updateFilters}})(Object(h.d)("common")(K))},621:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(775)),o=a(r(716));function a(e){return e&&e.__esModule?e:{default:e}}n.default.Item=o.default;var i=n.default;t.default=i},716:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(0)),o=i(r(1)),a=r(30);function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r},m=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=s(this,p(t).apply(this,arguments))).renderBreadcrumbItem=function(t){var r,o=t.getPrefixCls,a=e.props,i=a.prefixCls,c=a.separator,l=a.children,s=y(a,["prefixCls","separator","children"]),p=o("breadcrumb",i);return r="href"in e.props?n.createElement("a",u({className:"".concat(p,"-link")},s),l):n.createElement("span",u({className:"".concat(p,"-link")},s),l),l?n.createElement("span",null,r,n.createElement("span",{className:"".concat(p,"-separator")},c)):null},e}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n.Component),r=t,(o=[{key:"render",value:function(){return n.createElement(a.ConfigConsumer,null,this.renderBreadcrumbItem)}}])&&l(r.prototype,o),i&&l(r,i),t}();t.default=m,m.__ANT_BREADCRUMB_ITEM=!0,m.defaultProps={separator:"/"},m.propTypes={prefixCls:o.string,separator:o.oneOfType([o.string,o.element]),href:o.string}},720:function(e,t,r){"use strict";r(42);var n=r(20),o=r.n(n),a=(r(774),r(621)),i=r.n(a),c=r(0),u=r.n(c);r(923);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,f(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,c["Component"]),r=t,(n=[{key:"render",value:function(){return u.a.createElement(o.a,{className:"breadcrum"},u.a.createElement(i.a,null,this.props.items.map(function(e,t){return e.value?u.a.createElement(i.a.Item,{key:t},u.a.createElement("a",{href:e.value,title:e.label},e.label)):u.a.createElement(i.a.Item,{key:t},e.label)})))}}])&&s(r.prototype,n),a&&s(r,a),t}();t.a=m},774:function(e,t,r){"use strict";r(46),r(922)},775:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),o=s(r(1)),a=l(r(11)),i=l(r(716)),c=r(30),u=l(r(71));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,r,o){var a=r.indexOf(e)===r.length-1,i=function(e,t){if(!e.breadcrumbName)return null;var r=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(e,r){return t[r]||e})}(e,t);return a?n.createElement("span",null,i):n.createElement("a",{href:"#/".concat(o.join("/"))},i)}var h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=y(this,m(t).apply(this,arguments))).renderBreadcrumb=function(t){var r,o=t.getPrefixCls,c=e.props,l=c.prefixCls,s=c.separator,p=c.style,f=c.className,y=c.routes,m=c.params,b=void 0===m?{}:m,h=c.children,v=c.itemRender,g=void 0===v?d:v,O=o("breadcrumb",l);if(y&&y.length>0){var w=[];r=y.map(function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(b).forEach(function(e){t=t.replace(":".concat(e),b[e])}),t&&w.push(t),n.createElement(i.default,{separator:s,key:e.breadcrumbName||t},g(e,b,y,w))})}else h&&(r=n.Children.map(h,function(e,t){return e?((0,u.default)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb","Only accepts Breadcrumb.Item as it's children"),(0,n.cloneElement)(e,{separator:s,key:t})):e}));return n.createElement("div",{className:(0,a.default)(f,O),style:p},r)},e}var r,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,n.Component),r=t,(o=[{key:"componentDidMount",value:function(){var e=this.props;(0,u.default)(!("linkRender"in e||"nameRender"in e),"Breadcrumb","`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){return n.createElement(c.ConfigConsumer,null,this.renderBreadcrumb)}}])&&f(r.prototype,o),l&&f(r,l),t}();t.default=h,h.defaultProps={separator:"/"},h.propTypes={prefixCls:o.string,separator:o.node,routes:o.array,params:o.object,linkRender:o.func,nameRender:o.func}}},[[1995,1,0,2]]]);