(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{2061:function(e,t,r){__NEXT_REGISTER_PAGE("/image-fullscreen-news-detail",function(){return e.exports=r(2144),{page:e.exports.default}})},2144:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),i=r(0),a=r(13),s=r(21),u=r(541),c=r(12);r(1081);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var r,n,o,a,s,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=!(o=f(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?y(n):o,a=y(r),u=void 0,(s="imageGallery")in a?Object.defineProperty(a,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[s]=u,r.imageGallery=i.createRef(),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,i["Component"]),r=t,(n=[{key:"render",value:function(){var e=this,t=(this.props.newsData.imageUrls.length>0?this.props.newsData.imageUrls.map(function(t){return{original:Object(c.g)(t,"large")?Object(c.g)(t,"large"):e.props.newsData.categoryId.imageUrl}}):[{original:"/static/images/sample-machine.png",thumbnail:"/static/images/sample-machine.png"}]).map(function(e){return i.createElement("img",{src:"".concat(e.original),width:"100%",style:{marginBottom:"15px"}})});return i.createElement(i.Fragment,null,i.createElement(u.a,{updateFilters:this.props.updateFilters,topBrands:this.props.topBrands,searchKeyword:this.props.searchKeyword,hasSideBar:!1,hasMenuItems:!0,profileState:this.props.profileState,profileReducers:this.props.profileReducers},t))}}])&&l(r.prototype,n),o&&l(r,o),t}(),m=r(17);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,O(t).apply(this,arguments))}var r,n,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,i["Component"]),r=t,n=[{key:"render",value:function(){return i.createElement(i.Fragment,null,i.createElement(d,{commonKeywords:this.props.commonKeywords,newsData:this.props.newsData,searchKeyword:this.props.searchKeyword,topBrands:this.props.topBrands,handleFiltersChange:this.props.handleFiltersChange,profileState:this.props.profileState,profileReducers:this.props.profileReducers,updateFilters:this.props.updateFilters}))}}],s=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var r,n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(a.a)(),e.next=3,r.findNewsById(t.query.id);case 3:return n=e.sent,e.next=6,r.findTopBrands();case 6:return i=e.sent,e.abrupt("return",{newsData:n,topBrands:i.data});case 8:case"end":return e.stop()}},e)}),function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){w(i,n,o,a,s,"next",e)}function s(e){w(i,n,o,a,s,"throw",e)}a(void 0)})});return function(e){return t.apply(this,arguments)}}()}],n&&g(r.prototype,n),s&&g(r,s),t}();t.default=Object(s.withRematch)(s.initStore,function(e){return{profileState:e.profileModel,searchKeyword:e.searchModel.filters.keyword,commonKeywords:e.metadataModel.commonKeywords}},function(e){return{profileReducers:e.profileModel,handleFiltersChange:e.searchModel.handleFiltersChange,updateFilters:e.searchModel.updateFilters}})(Object(m.d)("image-fullscreen-news-detail")(S))}},[[2061,1,0,2]]]);