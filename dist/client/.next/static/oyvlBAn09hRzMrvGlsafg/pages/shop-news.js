(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{2114:function(e,t,r){__NEXT_REGISTER_PAGE("/shop-news",function(){return e.exports=r(2143),{page:e.exports.default}})},2143:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),o=r(0),s=r.n(o),i=(r(48),r(10)),c=r.n(i),l=r(748),p=(r(66),r(44)),u=r.n(p),f=(r(42),r(20)),m=r.n(f),h=(r(45),r(18)),d=r.n(h),g=(r(50),r(16)),y=r.n(g),b=r(738),w=r(750),v=r(805),E=r(873),S=(r(2115),r(65));function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=function(e){function t(){var e,r,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return n=this,a=(e=x(t)).call.apply(e,[this].concat(s)),r=!a||"object"!==O(a)&&"function"!=typeof a?N(n):a,k(N(r),"state",{isOpenFilter:!1}),k(N(r),"changeStatusFilter",function(){r.setState({isOpenFilter:!r.state.isOpenFilter})}),k(N(r),"closeFilterMobile",function(){r.setState({isOpenFilter:!1})}),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,o["Component"]),r=t,(n=[{key:"render",value:function(){var e=this;return s.a.createElement(m.a,{className:"outline-body-shop-news-detail",gutter:S.isMobile?0:16},s.a.createElement(y.a,{lg:16,md:24,xs:24,sm:24},s.a.createElement(m.a,{className:"filter-or-select-all-mobile"},s.a.createElement(y.a,{lg:0,md:0,sm:12,xs:12},s.a.createElement("a",{href:"/bai-dang-cua-hang",title:this.props.shopName?this.props.shopName:""},"Tất cả sản phẩm")),s.a.createElement(y.a,{className:"filter-button-mobile",lg:0,md:0,sm:12,xs:12},s.a.createElement("a",{onClick:function(){return e.changeStatusFilter()}},"Bộ lọc ",s.a.createElement(d.a,{type:"filter"})))),this.state.isOpenFilter&&S.isMobile?s.a.createElement(m.a,null,s.a.createElement(v.a,{searchKeywords:this.props.searchKeywords,handleSearchChange:this.props.handleSearchChange,handleFiltersChange:this.props.handleFiltersChange,t:this.props.t}),s.a.createElement(b.a,{brands:this.props.brands,categories:this.props.categories,weightRanges:this.props.weightRanges,selectedBrand:this.props.selectedBrand,selectedCategory:this.props.selectedCategory,selectedState:this.props.selectedState,selectedNewsType:this.props.selectedNewsType,selectedPrice:Number(this.props.minPrice)>0?"".concat(this.props.minPrice,"-").concat(this.props.maxPrice):void 0,selectedWeightRange:this.props.selectedWeightRange,handleFiltersChange:this.props.handleFiltersChange}),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("a",{onClick:function(){return e.closeFilterMobile()}},"Ẩn bộ lọc"))):s.a.createElement("div",null),S.isMobile?s.a.createElement("div",null):s.a.createElement(m.a,null,s.a.createElement(v.a,{searchKeywords:this.props.searchKeywords,handleSearchChange:this.props.handleSearchChange,handleFiltersChange:this.props.handleFiltersChange,t:this.props.t}),s.a.createElement(b.a,{brands:this.props.brands,categories:this.props.categories,weightRanges:this.props.weightRanges,selectedBrand:this.props.selectedBrand,selectedCategory:this.props.selectedCategory,selectedState:this.props.selectedState,selectedNewsType:this.props.selectedNewsType,selectedPrice:Number(this.props.minPrice)>0?"".concat(this.props.minPrice,"-").concat(this.props.maxPrice):void 0,selectedWeightRange:this.props.selectedWeightRange,handleFiltersChange:this.props.handleFiltersChange})),s.a.createElement(u.a,{spinning:this.props.loading},s.a.createElement(E.a,{data:this.props.data,hasNext:this.props.hasNext,hasPrev:this.props.hasPrev,getNextPage:this.props.getNextPage,getPrevPage:this.props.getPrevPage,profileState:this.props.profileState,changeFollowStatus:this.props.changeFollowStatus,t:this.props.t}))),s.a.createElement(y.a,{lg:8,md:24,xs:24,sm:24},s.a.createElement(w.a,{title:"Nhiều người xem nhất",dataMachine:this.props.resultSearchNewestPost.data})))}}])&&P(r.prototype,n),a&&P(r,a),t}(),C=r(13),R=r(17),T=r(27),F=r(12),I=r(527),U=r.n(I);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function M(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function s(e){B(o,n,a,s,i,"next",e)}function i(e){B(o,n,a,s,i,"throw",e)}s(void 0)})}}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){K(e,t,r[t])})}return e}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,i=new Array(s),l=0;l<s;l++)i[l]=arguments[l];return n=this,o=(e=J(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==A(o)&&"function"!=typeof o?Y(n):o,K(Y(r),"state",{filters:{keyword:void 0,state:void 0,priceType:void 0,minPrice:void 0,maxPrice:void 0,weightRange:void 0,newsType:void 0,owner:void 0,shop:r.props.shopInfo._id,location:void 0,type:void 0,brand:void 0,model:void 0,category:void 0},data:r.props.newsResult.data,first:12,sortBy:"elasticsearchCreatedAt|desc",before:r.props.newsResult.before,after:r.props.newsResult.after,loading:!1}),K(Y(r),"handleSearchChange",function(e){r.setState({filters:L({},r.state.filters,e)})}),K(Y(r),"handleFiltersChange",function(){var e=M(a.a.mark(function e(t){var n,o,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={keyword:r.state.filters.keyword,state:"string"==typeof t.state?t.state:r.state.filters.state,priceType:"string"==typeof t.priceType?t.priceType:r.state.filters.priceType,minPrice:"string"==typeof t.minPrice||"number"==typeof t.minPrice?Number(t.minPrice)>0?Number(t.minPrice):void 0:r.state.filters.minPrice,maxPrice:"string"==typeof t.maxPrice||"number"==typeof t.maxPrice?Number(t.maxPrice)>0?Number(t.maxPrice):void 0:r.state.filters.maxPrice,weightRange:"string"==typeof t.weightRange?t.weightRange:r.state.filters.weightRange,newsType:"string"==typeof t.newsType?t.newsType:r.state.filters.newsType,category:"string"==typeof t.category?t.category:r.state.filters.category,owner:r.state.filters.owner,shop:r.state.filters.shop,location:"string"==typeof t.location?t.location:r.state.filters.location,type:"string"==typeof t.type?t.type:r.state.filters.type,brand:"string"==typeof t.brand?t.brand:r.state.filters.brand,model:"string"==typeof t.model?t.model:r.state.filters.model},r.setState({filters:n,loading:!0}),e.prev=2,o=Object(C.a)(),e.next=6,o.searchElasticsearch(r.state.filters.keyword,"string"==typeof t.state?t.state:r.state.filters.state,"string"==typeof t.priceType?t.priceType:r.state.filters.priceType,"string"==typeof t.minPrice||"number"==typeof t.minPrice?Number(t.minPrice)>0?Number(t.minPrice):void 0:r.state.filters.minPrice,"string"==typeof t.maxPrice||"number"==typeof t.maxPrice?Number(t.maxPrice)>0?Number(t.maxPrice):void 0:r.state.filters.maxPrice,"string"==typeof t.weightRange?t.weightRange:r.state.filters.weightRange,void 0,"string"==typeof t.newsType?t.newsType:r.state.filters.newsType,"string"==typeof t.category?t.category:r.state.filters.category,r.state.filters.owner,r.state.filters.shop,"string"==typeof t.location?t.location:r.state.filters.location,"string"==typeof t.type?t.type:r.state.filters.type,"string"==typeof t.brand?t.brand:r.state.filters.brand,"string"==typeof t.model?t.model:r.state.filters.model,r.state.first,r.state.sortBy,void 0,void 0);case 6:s=e.sent,r.setState({data:s.data,before:s.before,after:s.after,loading:!1}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),c.a.error(e.t0.message||JSON.parse(e.t0.response).message),r.setState({loading:!1});case 14:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}()),K(Y(r),"getNextPage",M(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({loading:!0}),e.prev=1,t=Object(C.a)(),e.next=5,t.searchElasticsearch(r.state.filters.keyword,r.state.filters.state,r.state.filters.priceType,r.state.filters.minPrice,r.state.filters.maxPrice,r.state.filters.weightRange,void 0,r.state.filters.newsType,r.state.filters.category,r.state.filters.owner,r.state.filters.shop,r.state.filters.location,r.state.filters.type,r.state.filters.brand,r.state.filters.model,r.state.first,r.state.sortBy,void 0,r.state.after);case 5:n=e.sent,r.setState({data:n.data,before:n.before,after:n.after,loading:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),c.a.error(e.t0.message||JSON.parse(e.t0.response).message),r.setState({loading:!1});case 13:case"end":return e.stop()}},e,null,[[1,9]])}))),K(Y(r),"getPrevPage",M(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({loading:!0}),e.prev=1,t=Object(C.a)(),e.next=5,t.searchElasticsearch(r.state.filters.keyword,r.state.filters.state,r.state.filters.priceType,r.state.filters.minPrice,r.state.filters.maxPrice,r.state.filters.weightRange,void 0,r.state.filters.newsType,r.state.filters.category,r.state.filters.owner,r.state.filters.shop,r.state.filters.location,r.state.filters.type,r.state.filters.brand,r.state.filters.model,r.state.first,r.state.sortBy,r.state.before,void 0);case 5:n=e.sent,r.setState({data:n.data,before:n.before,after:n.after,loading:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),c.a.error(e.t0.message||JSON.parse(e.t0.response).message),r.setState({loading:!1});case 13:case"end":return e.stop()}},e,null,[[1,9]])}))),K(Y(r),"changeFollowItemStatus",function(){var e=M(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.props.profileState||!r.props.profileState.authUser){e.next=14;break}if("filled"!==t){e.next=8;break}return e.next=4,r.props.followReducers.unfollowNews({userId:r.props.profileState.authUser.id,newsId:n});case 4:return e.next=6,r.setState({data:r.state.data.map(function(e){return e._id===n?L({},e,{isFollowing:!1}):e})});case 6:e.next=12;break;case 8:return e.next=10,r.props.followReducers.followNews({userId:r.props.profileState.authUser.id,newsId:n});case 10:return e.next=12,r.setState({data:r.state.data.map(function(e){return e._id===n?L({},e,{isFollowing:!0}):e})});case 12:e.next=15;break;case 14:c.a.warning(r.props.t("detail-news:notification-login"));case 15:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()),r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,o["Component"]),r=t,(n=[{key:"render",value:function(){return s.a.createElement(o.Fragment,null,s.a.createElement(U.a,null,s.a.createElement("title",null,"".concat(this.props.shopInfo.name," | timmay.vn")),s.a.createElement("meta",{property:"fb:app_id",content:T.a.facebookAppId}),s.a.createElement("meta",{property:"description",content:this.props.shopInfo.description}),s.a.createElement("meta",{property:"og:url",content:Object(F.i)(this.props.shopInfo.domain)}),s.a.createElement("meta",{property:"og:type",content:"website"}),s.a.createElement("meta",{property:"og:title",content:"Cửa hàng ".concat(this.props.shopInfo.name," | timmay.vn")}),s.a.createElement("meta",{property:"og:description",content:this.props.shopInfo.description}),s.a.createElement("meta",{property:"og:image:url",content:this.props.shopInfo.logoImage?this.props.shopInfo.logoImage:"/static/images/logo-timmay.png"}),s.a.createElement("meta",{property:"og:image:width",content:"800"}),s.a.createElement("meta",{property:"og:image:height",content:"600"})),s.a.createElement(l.a,{linkLogoStore:this.props.shopInfo.logoImage,shopName:this.props.shopInfo.name,t:this.props.t}),s.a.createElement(_,{resultSearchNewestPost:this.props.resultSearchNewestPost,loading:this.state.loading,data:this.state.data,shopName:this.props.shopInfo.name,hasNext:Boolean(this.state.after),hasPrev:Boolean(this.state.before),getNextPage:this.getNextPage,getPrevPage:this.getPrevPage,weightRanges:this.props.weightRanges,categories:this.props.categories,brands:this.props.brands,selectedBrand:this.state.filters.brand,selectedCategory:this.state.filters.category,searchKeywords:this.state.filters.keyword,selectedState:this.state.filters.state,selectedNewsType:this.state.filters.newsType,minPrice:this.state.filters.minPrice,maxPrice:this.state.filters.maxPrice,selectedWeightRange:this.state.filters.weightRange,handleSearchChange:this.handleSearchChange,handleFiltersChange:this.handleFiltersChange,profileState:this.props.profileState,changeFollowStatus:this.changeFollowItemStatus,t:this.props.t}))}}])&&z(r.prototype,n),i&&z(r,i),t}(),V=Object(R.d)("detail-news")(D),q=r(21),G=r(67);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function X(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Q(this,ee(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(t,o["Component"]),r=t,n=[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(V,{resultSearchNewestPost:this.props.resultSearchNewestPost,newsResult:this.props.newsResult,shopInfo:this.props.shopInfo,weightRanges:this.props.weightRanges,categories:this.props.categories,brands:this.props.brands,profileReducers:this.props.profileReducers,profileState:this.props.profileState,followReducers:this.props.followReducers}))}}],i=[{key:"getInitialProps",value:function(){var e,t=(e=a.a.mark(function e(t){var r,n,o,s,i,c,l,p,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.req?r=Object(C.a)(t.req.cookies.token):(n=G.get("token"),r=Object(C.a)(n)),e.next=3,Promise.all([r.searchElasticsearch(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,t.req.shopInfo._id,void 0,void 0,void 0,void 0,12,"elasticsearchCreatedAt|desc",void 0,void 0),r.searchNewsMostFollow(t.req.shopInfo._id,4,"counterView","_id",void 0,void 0),r.findCategories(),r.findBrands(void 0,30,"slug|asc",void 0,void 0),r.getAllWeightRanges()]);case 3:return o=e.sent,s=H(o,5),i=s[0],c=s[1],l=s[2],p=s[3],u=s[4],e.abrupt("return",{newsResult:i,shopInfo:t.req.shopInfo,resultSearchNewestPost:c,categories:l.data,brands:p.data,weightRanges:u.data});case 11:case"end":return e.stop()}},e)}),function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function s(e){X(o,n,a,s,i,"next",e)}function i(e){X(o,n,a,s,i,"throw",e)}s(void 0)})});return function(e){return t.apply(this,arguments)}}()}],n&&$(r.prototype,n),i&&$(r,i),t}();t.default=Object(q.withRematch)(q.initStore,function(e){return{profileState:e.profileModel}},function(e){return{profileReducers:e.profileMode,followReducers:e.followModel}})(re)},41:function(e,t,r){var n;n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function t(t,r){if("string"!=typeof t)throw new Error("slugify: string argument expected");r="string"==typeof r?{replacement:r}:r||{};var n=t.split("").reduce(function(t,n){return t+(e[n]||n).replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,r.replacement||"-");return r.lower?n.toLowerCase():n}return t.extend=function(t){for(var r in t)e[r]=t[r]},t},e.exports=n(),e.exports.default=n()},738:function(e,t,r){"use strict";r.d(t,"a",function(){return F});r(42);var n=r(20),a=r.n(n),o=(r(66),r(44)),s=r.n(o),i=(r(50),r(16)),c=r.n(i),l=r(2),p=r.n(l),u=(r(48),r(10)),f=r.n(u),m=(r(93),r(32)),h=r.n(m),d=r(0),g=r(75),y=r.n(g),b=(r(1083),r(12)),w=r(13),v=r(41),E=r.n(v),S=r(17);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=h.a.Option,R=d.Fragment,T=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=N(t).call(this,e),r=!a||"object"!==O(a)&&"function"!=typeof a?j(n):a,_(j(r),"state",{brands:r.props.brands,loadingBrands:!1}),_(j(r),"getBrands",function(){var e,t=(e=p.a.mark(function e(t){var n,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({loadingBrands:!0}),e.prev=1,n=Object(w.a)(),e.next=5,n.findBrands(t,20,"slug|asc",void 0,void 0);case 5:a=e.sent,r.setState({loadingBrands:!1,brands:a.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),f.a.error(e.t0.message),r.setState({loadingBrands:!1});case 13:case"end":return e.stop()}},e,null,[[1,9]])}),function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function s(e){P(o,n,a,s,i,"next",e)}function i(e){P(o,n,a,s,i,"throw",e)}s(void 0)})});return function(e){return t.apply(this,arguments)}}()),r.getBrands=y()(r.getBrands,500),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,d["Component"]),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props.t;return d.createElement(R,null,d.createElement(a.a,{gutter:16},d.createElement(c.a,{lg:8,md:8,xs:24,sm:24},d.createElement(h.a,{className:"select-box",showSearch:!0,filterOption:function(e,t){return 0===E()(t.props.children.toLowerCase()).indexOf(E()(e.toLocaleLowerCase()))},value:this.props.selectedCategory?this.props.selectedCategory:t("common:type-of-machine"),onSelect:function(t,r){e.props.handleFiltersChange({category:t}),e.props.updateSearchUrl&&e.props.updateSearchUrl({category:r.props["data-slug"]})}},d.createElement(C,{"data-slug":"",value:""},t("common:all")),this.props.categories.map(function(e){return d.createElement(C,{"data-slug":e.slug,value:e._id,key:e._id},e.name)})),d.createElement(h.a,{className:"select-box",value:this.props.selectedPrice?this.props.selectedPrice:t("common:range-of-price"),onSelect:function(t,r){e.props.handleFiltersChange({minPrice:t.split("-")[0],maxPrice:t.split("-")[1]}),e.props.updateSearchUrl&&e.props.updateSearchUrl({minPrice:r.props["data-minprice"],maxPrice:r.props["data-maxprice"]})}},d.createElement(C,{"data-minprice":0,"data-maxprice":0,value:"0-0"},t("common:all")),b.p.map(function(e,t){return d.createElement(C,{"data-minprice":e.min,"data-maxprice":e.max,value:"".concat(e.min,"-").concat(e.max),key:"".concat(t)},"".concat(Object(b.c)(e.min)," - ").concat(Object(b.c)(e.max)))}))),d.createElement(c.a,{lg:8,md:8,xs:24,sm:24},d.createElement(h.a,{className:"select-box",value:this.props.selectedWeightRange?this.props.selectedWeightRange:t("common:weight-range"),onSelect:function(t,r){e.props.handleFiltersChange({weightRange:t}),e.props.updateSearchUrl&&e.props.updateSearchUrl({minWeight:r.props["data-minweight"],maxWeight:r.props["data-maxweight"]})}},d.createElement(C,{"data-minweight":0,"data-maxweight":0,value:""},t("common:all")),this.props.weightRanges.sort(function(e,t){return e.min-t.min}).map(function(e,r){return d.createElement(C,{"data-minweight":e.min,"data-maxweight":e.max,value:e._id,key:"".concat(r)},e.max?"".concat(e.min," ").concat(t("common:ton")," - ").concat(e.max," ").concat(t("common:ton")):"".concat(t("common:more-than")," ").concat(e.min," ").concat(t("common:ton")))})),d.createElement(h.a,{value:this.props.selectedBrand?this.props.selectedBrand:t("common:manufacturer"),className:"select-box",notFoundContent:this.state.loadingBrands?d.createElement("div",{style:{textAlign:"center"}},d.createElement(s.a,{size:"small"})):null,showSearch:!0,filterOption:!1,onSearch:this.getBrands,onSelect:function(t,r){e.props.handleFiltersChange({brand:t}),e.props.updateSearchUrl&&e.props.updateSearchUrl({brand:r.props["data-slug"]})}},d.createElement(C,{"data-slug":"",value:""},t("common:all")),this.state.brands.slice(0,10).map(function(e){return d.createElement(C,{"data-slug":e.slug,value:e._id,key:e._id},e.name)}))),d.createElement(c.a,{lg:8,md:8,xs:24,sm:24},d.createElement(h.a,{className:"select-box",value:this.props.selectedState?this.props.selectedState:t("common:status-of-machine"),onSelect:function(t,r){e.props.handleFiltersChange({state:t}),e.props.updateSearchUrl&&e.props.updateSearchUrl({state:r.props["data-slug"]})}},d.createElement(C,{"data-slug":"",value:""},t("common:all")),b.k.map(function(e,r){return d.createElement(C,{"data-slug":e.value,value:e.value,key:"".concat(r)},t("common:".concat(e.value.toLowerCase())))})),d.createElement(h.a,{className:"select-box",value:this.props.selectedNewsType?this.props.selectedNewsType:t("common:type-of-post"),onSelect:function(t,r){e.props.handleFiltersChange({newsType:t}),e.props.updateSearchUrl&&e.props.updateSearchUrl({newsType:r.props["data-slug"]})}},d.createElement(C,{"data-slug":"",value:""},t("common:all")),b.m.map(function(t,r){return d.createElement(C,{"data-slug":t.value,value:t.value,key:"".concat(r)},e.props.t("common:".concat(t.value.toLowerCase())))})))))}}])&&x(r.prototype,n),o&&x(r,o),t}(),F=Object(S.d)("common")(T)},748:function(e,t,r){"use strict";r(50);var n=r(16),a=r.n(n),o=(r(42),r(20)),s=r.n(o),i=r(0),c=r.n(i),l=(r(1084),r(27)),p=r(65);t.a=function(e){var t=e.t;return c.a.createElement(i.Fragment,null,c.a.createElement(s.a,{className:"navbar-store"},p.isMobile?c.a.createElement("div",null):c.a.createElement(s.a,{className:"logo-timmay"},c.a.createElement("a",{href:l.a.url.main,title:e.shopName},c.a.createElement("img",{className:"image-logo",src:"/static/images/logo-timmay.png"}))),c.a.createElement(s.a,{className:"logo-store"},c.a.createElement(a.a,{lg:12,md:24,xs:24,sm:24,style:{display:"flex",alignItems:"center"}},c.a.createElement("img",{className:"image-logo-store",src:e.linkLogoStore?e.linkLogoStore:"/static/images/icon-shop.png",style:{height:"42px"}}),c.a.createElement("span",{style:{fontSize:"24px",fontWeight:550,marginLeft:"12px"}},e.shopName)),c.a.createElement(a.a,{lg:12,md:0,xs:0,sm:0},c.a.createElement("span",{className:"link-redirect"},c.a.createElement("a",{href:l.a.url.main,title:e.shopName,className:"home-page"},t("common:home")),c.a.createElement("a",{className:"all-product",href:"/bai-dang-cua-hang",title:e.shopName},t("common:all-products")))))))}},750:function(e,t,r){"use strict";r(42);var n=r(20),a=r.n(n),o=r(0),s=r.n(o),i=(r(1085),r(50),r(16)),c=r.n(i),l=r(12),p=(r(1086),r(17));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,h(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o["Component"]),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props.t,r=l.k.filter(function(t){return t.value===e.props.statusMachine})[0],n=l.m.filter(function(t){return t.value===e.props.typeOfMachine})[0];return s.a.createElement(o.Fragment,null,s.a.createElement("a",{style:{color:"black"},href:this.props.linkRedirect,title:this.props.title},s.a.createElement(a.a,{gutter:16},s.a.createElement(c.a,{lg:8,md:6,xs:12,sm:12},s.a.createElement("a",{style:{backgroundImage:"url('".concat(this.props.imageUrl,"')")},className:"grid-post-image"})),s.a.createElement(c.a,{className:"col-info",lg:16,md:18,xs:12,sm:12},s.a.createElement(a.a,{className:"info-main"},s.a.createElement("div",null,s.a.createElement("a",{href:this.props.linkRedirect,className:"grid-post-title",title:this.props.title},this.props.title),s.a.createElement("div",{className:"grid-post-price"},this.props.price?Object(l.c)(Number(this.props.price)):"")),s.a.createElement("div",null,s.a.createElement("div",null,t("common:".concat(r.value.toLowerCase()))),s.a.createElement("div",null,n&&n.label," | ",t("common:brand-name")," ",this.props.brand),s.a.createElement("div",null,this.props.location),this.props.isShowTotalFollowAndView?s.a.createElement("div",null,this.props.counterView?s.a.createElement("div",null,t("common:counter-view-text"),": ",this.props.counterView):null,this.props.counterFollow?s.a.createElement("div",null," ",t("common:counter-follow-text"),": ",this.props.counterFollow):null):null))))),s.a.createElement("hr",{className:"end-line"}))}}])&&f(r.prototype,n),i&&f(r,i),t}(),y=Object(p.d)("common")(g);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,E(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o["Component"]),r=t,(n=[{key:"render",value:function(){return s.a.createElement(a.a,{className:"out-line-see-most"},s.a.createElement(a.a,{className:"title"},s.a.createElement("strong",null,this.props.title)),s.a.createElement(a.a,{className:"body"},0===this.props.dataMachine.length?s.a.createElement("div",null,"Không có dữ liệu"):s.a.createElement("div",null,this.props.dataMachine.map(function(e,t){return s.a.createElement(y,{key:t,imageUrl:e.imageUrls?e.imageUrls.length>0?Object(l.g)(e.imageUrls[0],"small"):e.categoryId.imageUrl:"",title:e.title,price:e.price?e.price:0,linkRedirect:e._id?"/bai-dang-cua-hang/".concat(e._id):"",location:e.location.name,statusMachine:e.state,isFollowing:!0,typeOfMachine:e.newsType,brand:e.brand.name,owner:e.owner.name,isShowTotalFollowAndView:!0,counterFollow:e.counterFollow,counterView:e.counterView})}))))}}])&&w(r.prototype,n),i&&w(r,i),t}();t.a=O},805:function(e,t,r){"use strict";r(58);var n=r(29),a=r.n(n),o=r(0),s=r.n(o),i=(r(1345),a.a.Search);t.a=function(e){return s.a.createElement(o.Fragment,null,s.a.createElement(i,{placeholder:e.t("common:shop-search-placeholder"),enterButton:e.t("common:shop-search-button"),className:"store-search-bar",value:e.searchKeywords,onChange:function(t){return e.handleSearchChange({keyword:t.target.value})},onSearch:function(){return e.handleFiltersChange({})}}))}},873:function(e,t,r){"use strict";r(53);var n=r(23),a=r.n(n),o=(r(45),r(18)),s=r.n(o),i=(r(42),r(20)),c=r.n(i),l=r(0),p=r.n(l),u=r(549),f=(r(1344),r(12));t.a=function(e){return e.data.length>0?p.a.createElement("div",{className:"list-machine"},p.a.createElement(c.a,null,e.data.map(function(t,r){return p.a.createElement(u.a,{id:t._id,key:r,lg:8,md:8,sm:24,xs:24,linkRedirect:"".concat(Object(f.i)(t.shop.domain),"/bai-dang-cua-hang/").concat(t._id),imageUrl:t.imageUrls?t.imageUrls.length>0?Object(f.g)(t.imageUrls[0],"small"):t.categoryId.imageUrl:"",title:t.title,price:t.price,newsState:t.state,location:t.location.name,ownerName:t.shop?t.shop.name:t.owner&&t.owner.fullName?t.owner.fullName:t.owner&&t.owner.email?t.owner.email:t.owner&&t.owner.phoneNo?t.owner.phoneNo:"test",starStatus:t.isFollowing?"filled":"outlined",changeFollowStatus:e.changeFollowStatus,ownerId:t.owner?t.owner._id:"",currentUserId:e.profileState&&e.profileState.authUser&&e.profileState.authUser.id?e.profileState.authUser.id:""})})),p.a.createElement(c.a,{className:"group-button"},e.hasPrev&&p.a.createElement(a.a,{className:"button-previous",onClick:e.getPrevPage},p.a.createElement(s.a,{type:"left"})," ",e.t("common:previous")),e.hasNext&&p.a.createElement(a.a,{className:"button-next",type:"primary",onClick:e.getNextPage},e.t("common:next")," ",p.a.createElement(s.a,{type:"right"})))):p.a.createElement("div",{className:"list-machine",style:{padding:"42px 20px",fontSize:"24px",textAlign:"center"}},e.t("common:no-data"))}}},[[2114,1,0,2]]]);