(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{2117:function(e,t,a){__NEXT_REGISTER_PAGE("/users",function(){return e.exports=a(2137),{page:e.exports.default}})},2137:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),o=a(0),i=(a(42),a(20)),s=a.n(i),l=(a(50),a(16)),c=a.n(l),p=(a(48),a(10)),u=a.n(p),f=a(541),d=(a(53),a(23)),m=a.n(d),h=(a(45),a(18)),v=a.n(h),b=(a(2118),a(25)),g=o.Fragment,y=function(e){var t=e.profileData.fullName||e.profileData.email;return o.createElement(g,null,o.createElement("div",{className:"shop-basic-info"},o.createElement("div",{className:"user-image"},o.createElement("div",{style:{width:"100%",height:"100%",backgroundImage:"url(".concat(e.profileState.authUser&&e.profileState.authUser.avatarUrl?e.profileState.authUser.avatarUrl:"/static/images/default-avatar.jpg",")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}})),o.createElement("br",null),o.createElement("span",{className:"description"},t)),o.createElement("div",{className:"join-date"},o.createElement("span",null,o.createElement("i",null,e.t("user-page:joined-date")," ",b(new Date(e.profileData.createdAt)).format("DD/MM/YYYY")))),e.profileState&&e.profileState.authUser&&e.profileState.authUser.id!==e.profileData._id?o.createElement("div",{className:"shop-contact"},o.createElement("a",{href:"tel:".concat(e.profileData.phoneNo)},o.createElement(m.a,{type:"primary",className:"phone-call-button"},o.createElement(v.a,{component:function(){return o.createElement("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M16.0137 12.6552L13.4839 10.1784C12.9801 9.6871 12.1456 9.70203 11.6242 10.2127L10.5543 11.2598C10.4326 11.3789 10.2474 11.4051 10.0982 11.3231C9.29331 10.8866 8.19175 10.2882 7.03258 9.15259C5.86998 8.01458 5.25818 6.93454 4.81086 6.14613C4.7308 6.00445 4.75539 5.82581 4.87176 5.71206L5.52916 5.06945L5.9497 4.65725C6.47194 4.14586 6.48634 3.32921 5.98363 2.83648L3.45385 0.359373C2.95114 -0.132666 2.11632 -0.117739 1.59408 0.39365L0.89135 1.08554C0.885726 1.09108 0.885755 1.10016 0.891416 1.10566C0.896615 1.11071 0.897127 1.11888 0.892616 1.12456C0.657071 1.42087 0.460081 1.76176 0.313068 2.12905C0.176026 2.4826 0.0907036 2.81998 0.0516897 3.15805C-0.282352 5.86906 0.983128 8.34671 4.41748 11.7088C9.16479 16.3559 12.9905 16.0049 13.1555 15.9877C13.515 15.9457 13.8595 15.8616 14.2096 15.7285C14 .5825 15.5859 14.9313 15.3927 15.2344 15.1617C15.2389 15.1583 15.2452 15.1585 15.2495 15.1622C15.2542 15.1663 15.2611 15.1661 15.2656 15.1618L15.98 14.477C16.5012 13.9657 16.5162 13.1487 16.0137 12.6552Z",fill:"white"}))}})," ",e.profileData.phoneNo||"".concat(e.t("user-page:no-phone-number")))),o.createElement(m.a,{href:"sms:".concat(e.profileData.phoneNo),type:"primary",className:"chat-button"},o.createElement(v.a,{component:function(){return o.createElement("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M16.4935 0H3.50647C1.57297 0 0 1.69966 0 3.7888V12.4441C0 14.5333 1.57297 16.2329\n3.50647 16.2329L11.7785 16.2329L15.7384 20.5115C15.8726 20.6565 16.0519 20.7335 16.2344\n20.7335C16.3248 20.7335 16.4159 20.7145 16.5026 20.6757C16.7647 20.5584 16.9356 20.2823 16.9356 19.9757V16.2029C18.6613 15.9674 20 14.3715 20 12.4441V3.7888C20 1.69966 18.427 0 16.4935 0ZM18.5974 12.4442C18.5974 13.6977 17.6536 14.7174 16.4935 14.7174H16.2343C15.847 14.7174 15.533 15.0568 15.533 15.4752V18.1463L12.5649 14.9394C12.4334 14.7972 12.2551 14.7174 12.069 14.7174H3.50647C2.34636 14.7174 1.40259 13.6977 1.40259 12.4442V3.78887C1.40259 2.53537 2.34636 1.51562 3.50647 1.51562H16.4935C17.6536 1.51562 18.5974 2.53537 18.5974 3.78887V12.4442Z",fill:"white"}),o.createElement("path",{d:"M15.161 5.36523H4.83801C4.45073 5.36523 4.13672 5.70445 4.13672 6.12296C4.13672 6.5414\n4.45073 6.88068 4.83801 6.88068H15.161C15.5483 6.88068 15.8623 6.5414 15.8623 6.12296C15.8623\n5.70445 15.5484 5.36523 15.161 5.36523Z",fill:"white"}),o.createElement("path",{d:"M15.161 9.60938H4.83801C4.45073 9.60938 4.13672 9.94861 4.13672 10.3671C4.13672 10.7856\n4.45073 11.1249 4.83801 11.1249H15.161C15.5483 11.1249 15.8623 10.7856 15.8623 10.3671C15.8623\n9.94867 15.5484 9.60938 15.161 9.60938Z",fill:"white"}))}})," ",e.t("user-page:mess-user")),o.createElement(m.a,{type:"primary",className:"star-button"},o.createElement("div",null,o.createElement("a",{onClick:function(){e.profileState.authUser?e.changeFollowUserStatus(e.starStatus,e.profileData._id):e.changeFollowUserStatus(e.starStatus,"")},style:{color:"#fff"}},o.createElement(v.a,{type:"star",theme:e.starStatus}),"filled"!==e.starStatus?"".concat(e.t("user-page:follow")):"".concat(e.t("user-page:unfollow"))))),o.createElement("span",{className:"follower-count"},o.createElement(v.a,{type:"user"})," ",e.profileData.counterFollow&&e.profileData.counterFollow>0?"".concat(e.profileData.counterFollow," ").concat(e.t("user-page:follow-count")):"".concat(e.t("user-page:no-follow-count")))):null)},w=(a(66),a(44)),E=a.n(w),S=(a(553),a(86)),C=a.n(S),x=(a(2120),a(549)),N=a(12),O=a(65),k=a(626),P=C.a.TabPane,U=function(e){var t=e.data.map(function(t,a){return O.isMobile?o.createElement(k.a,{id:t._id,key:a,imageUrl:t.imageUrls[0],title:t.title,price:t.price,linkRedirect:"/bai-dang/".concat(t._id),location:t.location.name,newsState:t.state,typeOfMachine:t.categoryId.name,brand:t.brand.name,owner:t.owner,starStatus:t.isFollowing?"filled":"outlined",changeFollowStatus:e.changeFollowStatus,ownerId:t.owner?t.owner._id:"",currentUserId:e.profileState&&e.profileState.authUser&&e.profileState.authUser.id?e.profileState.authUser.id:""}):o.createElement(x.a,{id:t._id,key:a,lg:6,md:6,sm:24,xs:24,linkRedirect:"/bai-dang/".concat(t._id),imageUrl:t.imageUrls?t.imageUrls.length>0?Object(N.g)(t.imageUrls[0],"small"):t.categoryId.imageUrl:"",title:t.title,price:t.price,newsState:t.state,location:t.location?t.location.name:"".concat(e.t("user-page:undefined")),ownerName:t.owner.fullName,starStatus:t.isFollowing?"filled":"outlined",changeFollowStatus:e.changeFollowStatus,ownerId:t.owner?t.owner._id:"",currentUserId:e.profileState&&e.profileState.authUser&&e.profileState.authUser.id?e.profileState.authUser.id:""})});return o.createElement("div",{className:"shop-details"},o.createElement(C.a,{activeKey:e.activeTab,tabBarStyle:{background:"#fff",margin:0},onChange:function(t){return e.activeTabChange({activeTab:t})}},N.m.map(function(a){return o.createElement(P,{tab:e.t("common:".concat(a.value.toLowerCase())),key:a.value},o.createElement(E.a,{spinning:e.loading},e.data.length>0?o.createElement("div",null,o.createElement(s.a,null,t),o.createElement(s.a,{className:"next-and-back-button"},e.hasPrev&&o.createElement(m.a,{className:"button-back",onClick:e.getPrevPage},o.createElement(v.a,{type:"left"})," ",e.t("common:previous")),e.hasNext&&o.createElement(m.a,{className:"button-next",type:"primary",onClick:e.getNextPage},e.t("common:next")," ",o.createElement(v.a,{type:"right"})))):o.createElement("div",{className:"no-data"},e.t("common:no-data"))))})))},D=a(13),_=(a(2122),a(872)),j=a(17),T=a(527),F=a.n(T),M=a(27);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){G(e,t,a[t])})}return e}function B(e,t,a,r,n,o,i){try{var s=e[o](i),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(r,n)}function I(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){B(o,r,n,i,s,"next",e)}function s(e){B(o,r,n,i,s,"throw",e)}i(void 0)})}}function H(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var K=function(e){function t(){var e,a,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return r=this,o=(e=V(t)).call.apply(e,[this].concat(s)),a=!o||"object"!==R(o)&&"function"!=typeof o?Z(r):o,G(Z(a),"state",{loading:!1,activeTab:N.m[0].value,first:12,sortBy:"elasticsearchCreatedAt|desc",SELL:a.props.newsResult,profileData:a.props.profileData}),G(Z(a),"changeFollowStatus",function(){var e=I(n.a.mark(function e(t,r){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.props.profileState||!a.props.profileState.authUser){e.next=14;break}if("filled"!==t){e.next=8;break}return e.next=4,a.props.followReducers.unfollowNews({userId:a.props.profileState.authUser.id,newsId:r});case 4:return e.next=6,a.setState(G({},a.state.activeTab,L({},a.state[a.state.activeTab],{data:a.state[a.state.activeTab].data.map(function(e){return e._id===r?L({},e,{isFollowing:!1}):e})})));case 6:e.next=12;break;case 8:return e.next=10,a.props.followReducers.followNews({userId:a.props.profileState.authUser.id,newsId:r});case 10:return e.next=12,a.setState(G({},a.state.activeTab,L({},a.state[a.state.activeTab],{data:a.state[a.state.activeTab].data.map(function(e){return e._id===r?L({},e,{isFollowing:!0}):e})})));case 12:e.next=17;break;case 14:return e.next=16,a.props.profileReducers.openModal({modalName:"login"});case 16:u.a.warning("Bạn cần đăng nhập để thực hiện chức năng này!");case 17:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()),G(Z(a),"changeFollowUserStatus",function(){var e=I(n.a.mark(function e(t,r){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.props.profileState||!a.props.profileState.authUser){e.next=14;break}if("filled"!==t){e.next=8;break}return e.next=4,a.props.followReducers.unfollowUser({authId:a.props.profileState.authUser.id,userId:r});case 4:return e.next=6,a.setState({profileData:L({},a.state.profileData,{isFollowing:!1,counterFollow:a.state.profileData.counterFollow-1})});case 6:e.next=12;break;case 8:return e.next=10,a.props.followReducers.followUser({authId:a.props.profileState.authUser.id,userId:r});case 10:return e.next=12,a.setState({profileData:L({},a.state.profileData,{isFollowing:!0,counterFollow:a.state.profileData.counterFollow+1})});case 12:e.next=17;break;case 14:return e.next=16,a.props.profileReducers.openModal({modalName:"login"});case 16:u.a.warning("Bạn cần đăng nhập để thực hiện chức năng này!");case 17:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()),G(Z(a),"activeTabChange",function(){var e=I(n.a.mark(function e(t){var r,o,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state[t.activeTab]){e.next=4;break}a.setState({activeTab:t.activeTab}),e.next=17;break;case 4:return a.setState({loading:!0}),e.prev=5,o=Object(D.a)(),e.next=9,o.searchElasticsearch(void 0,void 0,void 0,void 0,void 0,void 0,void 0,t.activeTab,void 0,a.state.profileData._id,void 0,void 0,void 0,void 0,void 0,a.state.first,a.state.sortBy,void 0,void 0);case 9:i=e.sent,a.setState((G(r={loading:!1},t.activeTab,i),G(r,"activeTab",t.activeTab),r)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),u.a.error(e.t0.message),a.setState({loading:!1});case 17:case"end":return e.stop()}},e,null,[[5,13]])}));return function(t){return e.apply(this,arguments)}}()),G(Z(a),"getNextPage",I(n.a.mark(function e(){var t,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state[a.state.activeTab].after){e.next=14;break}return a.setState({loading:!0}),e.prev=2,t=Object(D.a)(),e.next=6,t.searchElasticsearch(void 0,void 0,void 0,void 0,void 0,void 0,void 0,a.state.activeTab,void 0,a.state.profileData._id,void 0,void 0,void 0,void 0,void 0,a.state.first,a.state.sortBy,void 0,a.state[a.state.activeTab].after);case 6:r=e.sent,a.setState(G({loading:!1},a.state.activeTab,r)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),u.a.error(e.t0.message),a.setState({loading:!1});case 14:case"end":return e.stop()}},e,null,[[2,10]])}))),G(Z(a),"getPrevPage",I(n.a.mark(function e(){var t,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state[a.state.activeTab].before){e.next=14;break}return a.setState({loading:!0}),e.prev=2,t=Object(D.a)(),e.next=6,t.searchElasticsearch(void 0,void 0,void 0,void 0,void 0,void 0,void 0,a.state.activeTab,void 0,a.state.profileData._id,void 0,void 0,void 0,void 0,void 0,a.state.first,a.state.sortBy,a.state[a.state.activeTab].before,void 0);case 6:r=e.sent,a.setState(G({loading:!1},a.state.activeTab,r)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),u.a.error(e.t0.message),a.setState({loading:!1});case 14:case"end":return e.stop()}},e,null,[[2,10]])}))),a}var a,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,o["Component"]),a=t,(r=[{key:"render",value:function(){return o.createElement(o.Fragment,null,o.createElement(F.a,null,o.createElement("title",null,"Người dùng ".concat(this.props.profileData.fullName?this.props.profileData.fullName:this.props.profileData.email?this.props.profileData.email:this.props.profileData.phoneNo?this.props.profileData.phoneNo:""," | timmay.vn")),o.createElement("meta",{property:"fb:app_id",content:M.a.facebookAppId}),o.createElement("meta",{property:"description",content:this.props.profileData.description}),o.createElement("meta",{property:"og:url",content:"".concat(M.a.url.main,"/nguoi-dung/").concat(this.props.profileData._id)}),o.createElement("meta",{property:"og:type",content:"website"}),o.createElement("meta",{property:"og:title",content:"Người dùng ".concat(this.props.profileData.fullName," | timmay.vn")}),o.createElement("meta",{property:"og:description",content:this.props.profileData.description}),o.createElement("meta",{property:"og:image:url",content:this.props.profileData.avatarUrl?this.props.profileData.avatarUrl:"/static/images/logo-timmay.png"}),o.createElement("meta",{property:"og:image:width",content:"800"}),o.createElement("meta",{property:"og:image:height",content:"600"})),o.createElement(f.a,{topBrands:this.props.topBrands,searchKeyword:this.props.searchKeyword,hasSideBar:!0,hasMenuItems:!0,profileState:this.props.profileState,profileReducers:this.props.profileReducers,updateFilters:this.props.updateFilters},o.createElement(s.a,{className:"user-screen"},o.createElement(c.a,{lg:6,className:"user-screen-contact"},o.createElement(y,{profileState:L({},this.props.profileState,{authUser:L({},this.props.profileState.authUser,{avatarUrl:this.state.profileData&&this.state.profileData.avatarUrl?this.state.profileData.avatarUrl:void 0})}),profileData:this.state.profileData,changeFollowUserStatus:this.changeFollowUserStatus,starStatus:this.state.profileData.isFollowing?"filled":"",t:this.props.t})),o.createElement(c.a,{lg:18,className:"user-screen-news"},o.createElement(U,{hasNext:Boolean(this.state[this.state.activeTab].after),hasPrev:Boolean(this.state[this.state.activeTab].before),getNextPage:this.getNextPage,getPrevPage:this.getPrevPage,data:this.state[this.state.activeTab].data,loading:this.state.loading,activeTab:this.state.activeTab,activeTabChange:this.activeTabChange,profileState:L({},this.props.profileState,{authUser:L({},this.props.profileState.authUser,{avatarUrl:this.state.profileData&&this.state.profileData.avatarUrl?this.state.profileData.avatarUrl:void 0})}),changeFollowStatus:this.changeFollowStatus,t:this.props.t}))),this.props.profileState&&this.props.profileState.authUser&&this.props.profileState.authUser.id!==this.props.profileData._id?o.createElement(_.a,{phoneNo:this.props.profileData.phoneNo}):null))}}])&&H(a.prototype,r),i&&H(a,i),t}(),q=Object(j.d)("user-page")(K),z=a(21),Y=a(67);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Q(e,t,a,r,n,o,i){try{var s=e[o](i),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(r,n)}function W(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ae=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),$(this,ee(t).apply(this,arguments))}var a,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(t,o["Component"]),a=t,r=[{key:"render",value:function(){return o.createElement("div",null,o.createElement(q,{updateFilters:this.props.updateFilters,newsResult:this.props.newsResult,profileData:this.props.profileData,searchKeyword:this.props.searchKeyword,topBrands:this.props.topBrands,profileState:this.props.profileState,profileReducers:this.props.profileReducers,followState:this.props.followState,followReducers:this.props.followReducers}))}}],i=[{key:"getInitialProps",value:function(){var e,t=(e=n.a.mark(function e(t){var a,r,o,i,s,l,c,p,u,f;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.asPath.split("/")[t.asPath.split("/").length-1],t.req?s=Object(D.a)(t.req.cookies.token):(l=Y.get("token"),s=Object(D.a)(l)),t.req){e.next=12;break}return e.next=5,Promise.all([s.searchElasticsearch(void 0,"PUBLIC",void 0,void 0,void 0,void 0,void 0,"SELL",void 0,i,void 0,void 0,void 0,void 0,void 0,12,"elasticsearchCreatedAt|desc",void 0,void 0),s.findPublicProfile(i),s.findTopBrands()]);case 5:c=e.sent,p=X(c,3),r=p[0],a=p[1],o=p[2],e.next=19;break;case 12:return e.next=14,Promise.all([s.searchElasticsearch(void 0,void 0,void 0,void 0,void 0,void 0,void 0,"SELL",void 0,i,void 0,void 0,void 0,void 0,void 0,12,"elasticsearchCreatedAt|desc",void 0,void 0),s.findPublicProfile(i),s.findTopBrands()]);case 14:u=e.sent,f=X(u,3),r=f[0],a=f[1],o=f[2];case 19:return e.abrupt("return",{profileData:a,newsResult:r,topBrands:o.data});case 20:case"end":return e.stop()}},e)}),function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){Q(o,r,n,i,s,"next",e)}function s(e){Q(o,r,n,i,s,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&W(a.prototype,r),i&&W(a,i),t}();t.default=Object(z.withRematch)(z.initStore,function(e){return{profileState:e.profileModel,searchKeyword:e.searchModel.filters.keyword,followState:e.followModel}},function(e){return{profileReducers:e.profileModel,followReducers:e.followModel,updateFilters:e.searchModel.updateFilters}})(ae)},626:function(e,t,a){"use strict";a(42);var r=a(20),n=a.n(r),o=(a(45),a(18)),i=a.n(o),s=(a(50),a(16)),l=a.n(s),c=a(0),p=a.n(c),u=a(12),f=(a(924),a(65)),d=a(17);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,b(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,c["Component"]),a=t,(r=[{key:"render",value:function(){var e=this,t=this.props.t,a=u.k.filter(function(t){return t.value===e.props.newsState})[0];return p.a.createElement(c.Fragment,null,p.a.createElement(n.a,{gutter:16,className:"machine-box-horizontal"},p.a.createElement(l.a,{lg:8,md:6,xs:12,sm:12},p.a.createElement("a",{href:this.props.linkRedirect,title:this.props.title,style:{backgroundImage:"url('".concat(Object(u.g)(this.props.imageUrl,"small"),"')")},className:"grid-post-image"})),p.a.createElement(l.a,{className:"col-info",lg:16,md:18,xs:12,sm:12},p.a.createElement(n.a,{className:"full-heigh",gutter:16},p.a.createElement(l.a,{className:"info-main",lg:20,md:18,xs:24,sm:24},p.a.createElement("div",null,p.a.createElement("a",{href:this.props.linkRedirect,className:"grid-post-title",title:this.props.title},this.props.title&&f.isMobile&&this.props.title.length>13?"".concat(this.props.title,"..."):this.props.title),p.a.createElement("div",{className:"grid-post-price"},this.props.price?Object(u.c)(Number(this.props.price)):"")),p.a.createElement("div",{className:"grid-post-news-info"},a&&p.a.createElement("div",null,t("common:status")," ",t("common:".concat(a.value.toLowerCase()))),p.a.createElement("div",null,this.props.typeOfMachine," ",this.props.brand?" | Hãng ".concat(this.props.brand):""),p.a.createElement("div",null,t("common:owner")," ",this.props.owner.fullName||this.props.owner.email||this.props.owner.phoneNo),p.a.createElement("div",null,this.props.owner.phoneNo||this.props.owner.email?"".concat(t("common:contact-with-colon")," ").concat(this.props.owner.phoneNo||this.props.owner.email):""))),p.a.createElement(l.a,{className:"location-and-following",lg:4,md:6,xs:24,sm:24},p.a.createElement("div",{className:"location"},this.props.location),this.props.currentUserId!==this.props.ownerId?p.a.createElement("a",null,p.a.createElement(i.a,{className:"star-following",theme:this.props.starStatus,type:"star",onClick:function(){return e.props.changeFollowStatus(e.props.starStatus,e.props.id)}})):null)))),p.a.createElement("hr",{className:"end-line"}))}}])&&h(a.prototype,r),o&&h(a,o),t}();t.a=Object(d.d)("common")(y)},872:function(e,t,a){"use strict";a(42);var r=a(20),n=a.n(r),o=(a(59),a(39)),i=a.n(o),s=(a(50),a(16)),l=a.n(s),c=(a(53),a(23)),p=a.n(c),u=(a(45),a(18)),f=a.n(u),d=a(0);a(1342);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var w=function(e){function t(){var e,a,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return r=this,n=(e=v(t)).call.apply(e,[this].concat(i)),a=!n||"object"!==m(n)&&"function"!=typeof n?b(r):n,y(b(a),"state",{isOpenModalSelectMessage:!1}),y(b(a),"onClickButtonMess",function(){a.setState({isOpenModalSelectMessage:!0})}),a}var a,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,d["Component"]),a=t,(r=[{key:"render",value:function(){var e=this;return d.createElement("div",null,this.props.phoneNo?d.createElement(n.a,{className:"call-mess-group"},d.createElement(l.a,{lg:0,md:0,sm:12,xs:12},d.createElement("a",{href:"tel:".concat(this.props.phoneNo),title:"Call to ".concat(this.props.phoneNo)},d.createElement(p.a,{type:"primary",className:"call-button",size:"large"},d.createElement("div",null,d.createElement(f.a,{component:function(){return d.createElement("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M16.0137 12.6552L13.4839 10.1784C12.9801 9.6871 12.1456 9.70203 11.6242 10.2127L10.5543 11.2598C10.4326 11.3789 10.2474 11.4051 10.0982 11.3231C9.29331 10.8866 8.19175 10.2882 7.03258 9.15259C5.86998 8.01458 5.25818 6.93454 4.81086 6.14613C4.7308 6.00445 4.75539 5.82581 4.87176 5.71206L5.52916 5.06945L5.9497 4.65725C6.47194 4.14586 6.48634 3.32921 5.98363 2.83648L3.45385 0.359373C2.95114 -0.132666 2.11632 -0.117739 1.59408 0.39365L0.89135 1.08554C0.885726 1.09108 0.885755 1.10016 0.891416 1.10566C0.896615 1.11071 0.897127 1.11888 0.892616 1.12456C0.657071 1.42087 0.460081 1.76176 0.313068 2.12905C0.176026 2.4826 0.0907036 2.81998 0.0516897 3.15805C-0.282352 5.86906 0.983128 8.34671 4.41748 11.7088C9.16479 16.3559 12.9905 16.0049 13.1555 15.9877C13.515 15.9457 13.8595 15.8616 14.2096 15.7285C14.5825 15.5859 14.9313 15.3927 15.2344 15.1617C15.2389 15.1583 15.2452 15.1585 15.2495 15.1622C15.2542 15.1663 15.2611 15.1661 15.2656 15.1618L15.98 14.477C16.5012 13.9657 16.5162 13.1487 16.0137 12.6552Z",fill:"white"}))}}),d.createElement("span",null," Gọi điện "))))),d.createElement(l.a,{lg:0,md:0,sm:12,xs:12},d.createElement(p.a,{onClick:function(){return e.onClickButtonMess()},type:"primary",className:"mess-button",size:"large"},d.createElement("div",null,d.createElement(f.a,{component:function(){return d.createElement("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M16.4935 0.000183105H3.50647C1.57297 0.000183105 0 1.69984 0 3.78899V12.4443C0 14.5334 1.57297 16.233 3.50647 16.233L11.7785 16.2331L15.7384 20.5117C15.8726 20.6567 16.0519 20.7336 16.2344 20.7336C16.3248 20.7336 16.4159 20.7147 16.5026 20.6759C16.7647 20.5586 16.9356 20.2824 16.9356 19.9759V16.2031C18.6613 15.9676 20 14.3717 20 12.4443V3.78899C20 1.69984 18.427 0.000183105 16.4935 0.000183105ZM18.5974 12.4444C18.5974 13.6979 17.6536 14.7176 16.4935 14.7176H16.2343C15.847 14.7176 15.533 15.057 15.533 15.4754V18.1465L12.5649 14.9395C12.4334 14.7974 12.2551 14.7176 12.069 14.7176H3.50647C2.34636 14.7176 1.40259 13.6979 1.40259 12.4444V3.78905C1.40259 2.53555 2.34636 1.5158 3.50647 1.5158H16.4935C17.6536 1.5158 18.5974 2.53555 18.5974 3.78905V12.4444Z",fill:"#ffffff"}),d.createElement("path",{d:"M15.161 5.3656H4.83801C4.45073 5.3656 4.13672 5.70482 4.13672 6.12332C4.13672 6.54177 4.45073 6.88104 4.83801 6.88104H15.161C15.5483 6.88104 15.8623 6.54177 15.8623 6.12332C15.8623 5.70482 15.5484 5.3656 15.161 5.3656Z",fill:"#ffffff"}),d.createElement("path",{d:"M15.161 9.60907H4.83801C4.45073 9.60907 4.13672 9.9483 4.13672 10.3668C4.13672 10.7853 4.45073 11.1246 4.83801 11.1246H15.161C15.5483 11.1246 15.8623 10.7853 15.8623 10.3668C15.8623 9.94836 15.5484 9.60907 15.161 9.60907Z",fill:"#ffffff"}))}}),d.createElement("span",null," Nhắn tin ")))),d.createElement(i.a,{title:"Gửi tin nhắn cho người bán",visible:this.state.isOpenModalSelectMessage,footer:null,centered:!0,onCancel:function(){return e.setState({isOpenModalSelectMessage:!1})}},d.createElement("a",{href:"http://zalo.me/".concat(this.props.phoneNo)},d.createElement(p.a,{className:"button-send-message"},"Gửi tin nhắn qua Zalo")),d.createElement("a",{href:"sms:".concat(this.props.phoneNo),title:"Send message to ".concat(this.props.phoneNo)},d.createElement(p.a,{className:"button-send-message"},"Gửi tin nhắn qua SMS")))):null)}}])&&h(a.prototype,r),o&&h(a,o),t}();t.a=w}},[[2117,1,0,2]]]);