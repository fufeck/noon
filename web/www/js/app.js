!function(e,t){var r;r=function(t){return t.module("seo",[]).run(["$rootScope",function(t){t.htmlReady=function(){t.$evalAsync(function(){setTimeout(function(){"function"==typeof e.callPhantom&&e.callPhantom()},0)})}}])},"function"==typeof define&&define.amd?define(["angular"],r):r(angular)}(window,document),angular.module("starter",["seo","ui.router","ui.bootstrap","ngStorage","ngResource","ngTable","duScroll","noon.service","starter.home","starter.result","starter.ranking","starter.advertiser","starter.contact","starter.faq","starter.cgu","starter.mention","starter.waitinglist"]).config(["$urlRouterProvider","$locationProvider","LoopBackResourceProvider",function(e,t,r){t.hashPrefix("!"),e.otherwise("/"),r.setUrlBase("http://dashboard.noongame.com/api"),Parse.initialize("XknyA0h8q2IWp5pr0cvZePcYzDvkePv0ybVCFDqz","dhIIoXKciHOVuk5TcNQwHg9cRPj4vvnct4FvptzG")}]).run(["$rootScope",function(e){e.positionPhone=!1,e.showNav=void 0,e.slidePhone=function(){return e.positionPhone=!e.positionPhone},e.videoIsOpen=!0,e.subscribe=function(t){var r,n,o,a;return o=$("#"+t).val(),a=/^([\w.-]+)@([\w.-]+)\.([a-zA-Z.]{2,6})$/i,o.match(a)?(e.toggleVideo(),window._fbq.push(["track","6027837446733",{value:"0.00",currency:"EUR"}]),r=Parse.Object.extend("Mail"),n=new r,n.save({mail:o}).then(function(e){return console.log("obj",e)})):e.error=!0},e.toggleVideo=function(){return e.videoIsOpen=!1}}]);var indexOf=[].indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(t in this&&this[t]===e)return t;return-1};angular.module("starter.translate",["pascalprecht.translate"]).config(["$translateProvider",function(e){e.useStaticFilesLoader({prefix:"i18n/locale-",suffix:".json"}),e.determinePreferredLanguage(function(){var e,t,r;return e=["en","fr"],r=window.navigator,t=r.language||r.browserLanguage||r.systemLanguage||r.userLanguage,t&&(t=t.split("-")[0],indexOf.call(e,t)<0&&(t=void 0)),t||(t=e[0]),t}),e.fallbackLanguage("en")}]),angular.module("starter").directive("noonFooter",function(){return{restrict:"AEC",templateUrl:"noonFooter.view.html",controller:"noonFooterCtrl"}}).controller("noonFooterCtrl",["$scope",function(e){}]),angular.module("starter").directive("noonHeader",function(){return{restrict:"AEC",templateUrl:"noonHeader.view.html",controller:"noonHeaderCtrl"}}).controller("noonHeaderCtrl",["$scope",function(e){}]),angular.module("starter.advertiser",[]).config(["$stateProvider",function(e){e.state("advertiser",{url:"/advertiser",title:"Annonceurs",templateUrl:"advertiser.view.html",controller:"advertiserCtrl"})}]).run(function(){}),angular.module("starter.advertiser").controller("advertiserCtrl",["$scope","$rootScope",function(e,t){t.showNav=void 0,e.htmlReady()}]),angular.module("starter.cgu",[]).config(["$stateProvider",function(e){e.state("cgu",{url:"/cgu",templateUrl:"cgu.view.html",controller:"cguCtrl"})}]).run(function(){}),angular.module("starter.cgu").controller("cguCtrl",["$scope","EndUserLicenseAgreement","$rootScope",function(e,t,r){return r.showNav=void 0,e.questions=t.find(),e.status=!1,e.htmlReady()}]),angular.module("starter.contact",[]).config(["$stateProvider",function(e){e.state("contact",{url:"/contact",templateUrl:"contact.view.html",controller:"contactCtrl"})}]).run(function(){}),angular.module("starter.contact").controller("contactCtrl",["$scope","$rootScope",function(e,t){return e.notif=!1,e.mail={name:"",mail:"",phone:"",entreprise:""},e.sendMail=function(){var t,r;return e.notif=!0,t=Parse.Object.extend("Contact"),r=new t,r.save(e.mail).then(function(e){return console.log("obj",e)})},e.htmlReady()}]),angular.module("starter.faq",[]).config(["$stateProvider",function(e){e.state("faq",{url:"/faq",templateUrl:"faq.view.html",controller:"faqCtrl"})}]).run(function(){}),angular.module("starter.faq").controller("faqCtrl",["$scope","FrequentlyAskedQuestion","$anchorScroll","$location","$timeout","$rootScope",function(e,t,r,n,o,a){return a.showNav=void 0,e.questions=t.find(),e.gotoAnchor=function(e,t){var n,a;return n="anchor"+e,t&&$(window).height()/2<$("#"+n).position().top?o(a=function(){return r()},300):void 0},e.htmlReady()}]),angular.module("starter").controller("backdropCtrl",["$scope","$rootScope",function(e,t){return console.log("tutu"),e.mail="tutu",e.user={mail:"eree"},e.subscribe=function(e){return console.log("mail : ",e)}}]),angular.module("starter.home",[]).config(["$stateProvider",function(e){e.state("home",{url:"/",templateUrl:"home.view.html",controller:"homeCtrl"})}]).run(function(){}),angular.module("starter.home").controller("homeCtrl",["$scope","$http","SliderPicture","$timeout","$rootScope",function(e,t,r,n,o){var a;o.showNav=void 0,e.slides=[],e.currentIndex=0,e.activePhone=!1,n(function(){return r.getFiles(function(t){var r,n,o,l;for(r=0,n=0,o=t.length;o>n;n++)l=t[n],e.slides.push("http://dashboard.noongame.com/api/slider-pictures/download/"+l.name),r++;return console.log(e.slides),a()})},1e3),a=function(){var t;return n(t=function(){return e.currentIndex++,e.currentIndex>=e.slides.length&&(e.currentIndex=0),a()},5e3)},e.isCurrentSlideIndex=function(t){return e.currentIndex===t},e.setCurrentSlideIndex=function(t){return e.currentIndex=t},e.setPhoneActive=function(){return console.log(e.activePhone),e.activePhone===!0?e.activePhone=!1:e.activePhone=!0},e.isPhoneActive=function(){return e.activePhone},e.htmlReady()}]),angular.module("starter.ranking",[]).config(["$stateProvider",function(e){e.state("ranking",{url:"/ranking",title:"Classement",templateUrl:"ranking.view.html",controller:"rankingCtrl"})}]).run(function(){}),angular.module("starter.ranking").controller("rankingCtrl",["$scope","$filter","ngTableParams","$rootScope","Player",function(e,t,r,n,o){var a;return n.showNav=void 0,o.find({},function(t){var r,n,o,l,i;for(console.log("PLAYER : ",t),l=[],i=1,r=0,n=t.length;n>r;r++)o=t[r],void 0!==o.username&&void 0!==o.goodAnswers&&void 0!==o.totalAnswers&&l.push(o);return a(l),e.htmlReady()},function(e){return console.log(e)}),a=function(n){return console.log("data"),console.log(n),e.tableParams=new r({page:1,count:10,filter:{username:""}},{total:n.length,getData:function(r,o){var a;a=o.filter()?t("filter")(n,o.filter()):n,e.users=a.slice((o.page()-1)*o.count(),o.page()*o.count()),o.total(a.length),r.resolve(e.users)}}),e.tableParamsMobile=new r({page:1,count:10,filter:{username:""}},{total:n.length,getData:function(r,o){var a;a=o.filter()?t("filter")(n,o.filter()):n,e.users=a.slice((o.page()-1)*o.count(),o.page()*o.count()),o.total(a.length),r.resolve(e.users)}})}}]),angular.module("starter.mention",[]).config(["$stateProvider",function(e){e.state("mention",{url:"/mention",templateUrl:"mention.view.html",controller:"mentionCtrl"})}]).run(function(){}),angular.module("starter.mention").controller("mentionCtrl",["$scope","$rootScope",function(e,t){t.showNav=void 0,e.htmlReady()}]),angular.module("starter.result",[]).config(["$stateProvider",function(e){e.state("result",{url:"/result",title:"Résultats du jour",templateUrl:"result.view.html",controller:"resultCtrl"})}]).run(function(){}),angular.module("starter.result").controller("resultCtrl",["$scope","$http","$filter","ngTableParams","Lottery","LotteryRank","$rootScope",function(e,t,r,n,o,a,l){var i,u,s,c;return l.showNav=void 0,e.isOpen=!1,e.tableParams=void 0,u=function(e){var t;return null==e&&(e=void 0),t=void 0===e?moment():moment(e),console.log(e),t.hour(14),t.second(0),t.minute(0),t.millisecond(0),o.find({filter:{where:{day:t.toISOString()}}},function(e){return console.log("ONE : ",e),s(e)},function(e){return console.log(e)})},c=function(t){var r,n,o,a,l;for(e.datas=[],a=1,n=0,o=t.length;o>n;n++)r=t[n],r.player&&r.player.username&&(l=r,l.username=r.player.username,l.rank=a,a+=1,e.datas.push(l));return console.log("RESULT"),console.log(e.datas)},s=function(t){return t.length>0?a.find({filter:{where:{lotteryId:t[0].id},include:"player"}},function(t){return console.log("TWO : ",t),c(t),void 0===e.tableParams?i():(e.tableParams.reload(),e.tableParamsMobile.reload()),e.htmlReady()},function(e){return console.log(e)}):void 0},i=function(){return e.tableParams=new n({page:1,count:10,filter:{username:""}},{total:e.datas.length,getData:function(t,n){var o;o=n.filter()?r("filter")(e.datas,n.filter()):e.datas,e.users=o.slice((n.page()-1)*n.count(),n.page()*n.count()),n.total(o.length),t.resolve(e.users)}}),e.tableParamsMobile=new n({page:1,count:10,filter:{username:""}},{total:e.datas.length,getData:function(t,n){var o;o=n.filter()?r("filter")(e.datas,n.filter()):e.datas,e.users=o.slice((n.page()-1)*n.count(),n.page()*n.count()),n.total(o.length),t.resolve(e.users)}})},u(),e.changeState=function(){return e.isOpen===!1?e.isOpen=!0:e.isOpen=!1},e.change=function(t){return e.isOpen=!1,u(t)}}]),angular.module("starter.waitinglist",[]).config(["$stateProvider",function(e){e.state("waitinglist",{url:"/waitinglist/:iduser",title:"waitinglist",templateUrl:"waitinglist.view.html",controller:"waitinglistCtrl"})}]).run(function(){}),angular.module("starter.waitinglist").controller("waitinglistCtrl",["$scope","$localStorage","$stateParams","$http","Player",function(e,t,r,n,o){var a,l;return e.user=t.currentUser,e.players=[],e.newUser={},e.query="",a=function(){return o.find({order:"share ASC"},function(t){return console.log("PLAYER : ",t),e.players=t},function(e){return console.log(e)})},e.send=function(r){return console.log("SEND"),r.$valid&&newUser.password===newUser.retype?(console.log("enter"),o.create(newUser,function(r){return t.currentUser=e.user=r,t.currentUser.link="http://beta.noongame.fr/#/waitinglist/"+e.user.username},function(e){return console.log(e),e.data.error.details.codes.email&&(newUser.emailAlreadyUsed=!0),e.data.error.details.codes.username?newUser.usernameAlreadyUsed=!0:void 0})):void 0},l=function(){},a(),l()}]);