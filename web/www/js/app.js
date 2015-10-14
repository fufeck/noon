angular.module("starter", ["ui.router", "ui.bootstrap", "ngAnimate", "ngStorage", "ngResource", "ngTable", "duScroll", "noon.service", "starter.translate", "starter.home", "starter.result", "starter.ranking", "starter.advertiser", "starter.contact", "starter.faq", "starter.cgu", "starter.mention"]).config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  Parse.initialize("XknyA0h8q2IWp5pr0cvZePcYzDvkePv0ybVCFDqz", "dhIIoXKciHOVuk5TcNQwHg9cRPj4vvnct4FvptzG");
}).run(function($rootScope) {
  $rootScope.positionPhone = false;
  $rootScope.showNav = void 0;
  $rootScope.slidePhone = function() {
    return $rootScope.positionPhone = !$rootScope.positionPhone;
  };
  $rootScope.videoIsOpen = true;
  $rootScope.subscribe = function(mail) {
    var Mail, data, email, emailPattern;
    email = $('#' + mail).val();
    emailPattern = /^([\w.-]+)@([\w.-]+)\.([a-zA-Z.]{2,6})$/i;
    if (email.match(emailPattern)) {
      $rootScope.toggleVideo();
      window._fbq.push([
        'track', '6027837446733', {
          'value': '0.00',
          'currency': 'EUR'
        }
      ]);
      Mail = Parse.Object.extend('Mail');
      data = new Mail();
      return data.save({
        mail: email
      }).then(function(obj) {
        return console.log('obj', obj);
      });
    } else {
      return $rootScope.error = true;
    }
  };
  $rootScope.toggleVideo = function() {
    return $rootScope.videoIsOpen = false;
  };
});

var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module('starter.translate', ['pascalprecht.translate']).config(function($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'i18n/locale-',
    suffix: '.json'
  });
  $translateProvider.determinePreferredLanguage(function() {
    var availables, lang, nav;
    availables = ['en', 'fr'];
    nav = window.navigator;
    lang = nav.language || nav.browserLanguage || nav.systemLanguage || nav.userLanguage;
    if (lang) {
      lang = lang.split('-')[0];
      if (indexOf.call(availables, lang) < 0) {
        lang = void 0;
      }
    }
    if (!lang) {
      lang = availables[0];
    }
    return lang;
  });
  $translateProvider.fallbackLanguage('en');
});

angular.module('starter').directive('noonFooter', function() {
  return {
    restrict: 'AEC',
    templateUrl: 'noonFooter.view.html',
    controller: 'noonFooterCtrl'
  };
}).controller('noonFooterCtrl', function($scope) {});

angular.module('starter').directive('noonHeader', function() {
  return {
    restrict: 'AEC',
    templateUrl: 'noonHeader.view.html',
    controller: 'noonHeaderCtrl'
  };
}).controller('noonHeaderCtrl', function($scope) {});

angular.module("starter.advertiser", []).config(function($stateProvider) {
  $stateProvider.state('advertiser', {
    url: '/advertiser',
    templateUrl: 'advertiser.view.html',
    controller: 'advertiserCtrl'
  });
}).run(function() {});

angular.module("starter.advertiser").controller("advertiserCtrl", function($scope, $rootScope) {
  $rootScope.showNav = void 0;
});

angular.module("starter.cgu", []).config(function($stateProvider) {
  $stateProvider.state('cgu', {
    url: '/cgu',
    templateUrl: 'cgu.view.html',
    controller: 'cguCtrl'
  });
}).run(function() {});

angular.module("starter.cgu").controller("cguCtrl", function($scope, EndUserLicenseAgreement, $rootScope) {
  $rootScope.showNav = void 0;
  $scope.questions = EndUserLicenseAgreement.find();
  return $scope.status = false;
});

angular.module("starter.contact", []).config(function($stateProvider) {
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'contact.view.html',
    controller: 'contactCtrl'
  });
}).run(function() {});

angular.module("starter.contact").controller("contactCtrl", function($scope, $rootScope) {
  $scope.notif = false;
  $scope.mail = {
    name: "",
    mail: "",
    phone: "",
    entreprise: ""
  };
  return $scope.sendMail = function() {
    var Contact, data;
    $scope.notif = true;
    Contact = Parse.Object.extend('Contact');
    data = new Contact();
    return data.save($scope.mail).then(function(obj) {
      return console.log('obj', obj);
    });
  };
});

angular.module("starter.faq", []).config(function($stateProvider) {
  $stateProvider.state('faq', {
    url: '/faq',
    templateUrl: 'faq.view.html',
    controller: 'faqCtrl'
  });
}).run(function() {});

angular.module("starter.faq").controller("faqCtrl", function($scope, FrequentlyAskedQuestion, $anchorScroll, $location, $timeout, $rootScope) {
  $rootScope.showNav = void 0;
  $scope.questions = FrequentlyAskedQuestion.find();
  return $scope.gotoAnchor = function(x, open) {
    var newHash, quick;
    newHash = 'anchor' + x;
    if (open && $(window).height() / 2 < $('#' + newHash).position().top) {
      return $timeout(quick = function() {
        return $anchorScroll();
      }, 300);
    }
  };
});

angular.module("starter").controller("backdropCtrl", function($scope, $rootScope) {
  console.log('tutu');
  $scope.mail = 'tutu';
  $scope.user = {
    mail: 'eree'
  };
  return $scope.subscribe = function(user) {
    return console.log('mail : ', user);
  };
});

angular.module("starter.home", []).config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home.view.html',
    controller: 'homeCtrl'
  });
}).run(function() {});

angular.module("starter.home").controller("homeCtrl", function($scope, $http, SliderPicture, $timeout, $rootScope) {
  var launchSlide;
  $rootScope.showNav = void 0;
  $scope.slides = [];
  $scope.currentIndex = 0;
  $scope.activePhone = false;
  SliderPicture.getFiles(function(pictures) {
    var i, j, len, pict;
    console.log('get files : ');
    i = 0;
    for (j = 0, len = pictures.length; j < len; j++) {
      pict = pictures[j];
      $scope.slides.push('http://dashboard.noongame.com/api/slider-pictures/download/' + pict.name);
      i++;
    }
    console.log($scope.slides);
    return launchSlide();
  }, function(error) {
    return console.log('error : ', error);
  });
  launchSlide = function() {
    var startslide;
    return $timeout(startslide = function() {
      $scope.currentIndex++;
      if ($scope.currentIndex >= $scope.slides.length) {
        $scope.currentIndex = 0;
      }
      return launchSlide();
    }, 5000);
  };
  $scope.isCurrentSlideIndex = function(index) {
    return $scope.currentIndex === index;
  };
  $scope.setCurrentSlideIndex = function(index) {
    return $scope.currentIndex = index;
  };
  $scope.setPhoneActive = function() {
    console.log($scope.activePhone);
    if ($scope.activePhone === true) {
      return $scope.activePhone = false;
    } else {
      return $scope.activePhone = true;
    }
  };
  $scope.isPhoneActive = function() {
    return $scope.activePhone;
  };
});

angular.module("starter.mention", []).config(function($stateProvider) {
  $stateProvider.state('mention', {
    url: '/mention',
    templateUrl: 'mention.view.html',
    controller: 'mentionCtrl'
  });
}).run(function() {});

angular.module("starter.mention").controller("mentionCtrl", function($scope, $rootScope) {
  $rootScope.showNav = void 0;
});

angular.module("starter.ranking", []).config(function($stateProvider) {
  $stateProvider.state('ranking', {
    url: '/ranking',
    templateUrl: 'ranking.view.html',
    controller: 'rankingCtrl'
  });
}).run(function() {});

angular.module("starter.ranking").controller("rankingCtrl", function($scope, $filter, $rootScope, Player) {
  $rootScope.showNav = void 0;
  $scope.currentPage = 0;
  $scope.results = [];
  $scope.pages = [];
  $scope.resultsByPage = [];
  $scope.search = function(q) {
    console.log;
    if (q.length) {
      return $scope.resultsByPage = $scope.filteredResults.slice(0, 10);
    } else {
      return $scope.getResultsByPage($scope.currentPage);
    }
  };
  $scope.getResults = function() {
    return $scope.getPlayers().$promise.then(function(players) {
      var i, ref, results;
      console.log(players);
      $scope.results = players;
      if (players.length) {
        $scope.pages = (function() {
          results = [];
          for (var i = 0, ref = (players.length / 10) - 1; 0 <= ref ? i <= ref : i >= ref; 0 <= ref ? i++ : i--){ results.push(i); }
          return results;
        }).apply(this);
      } else {
        $scope.pages = [];
      }
      return $scope.getResultsByPage();
    });
  };
  $scope.getPlayers = function(lotteryDrawingDate) {
    return Player.find({
      filter: {
        where: {
          totalEarned: {
            neq: null
          }
        },
        order: ['totalEarned DESC']
      }
    });
  };
  $scope.getResultsByPage = function(page) {
    var end, start;
    if (page == null) {
      page = 0;
    }
    start = page * 10;
    end = start + 10;
    $scope.currentPage = page;
    return $scope.resultsByPage = $scope.results.slice(start, end);
  };
  return $scope.getResults();
});

angular.module("starter.result", []).config(function($stateProvider) {
  $stateProvider.state('result', {
    url: '/result',
    templateUrl: 'result.view.html',
    controller: 'resultCtrl'
  });
}).run(function() {});

angular.module("starter.result").controller("resultCtrl", function($scope, $http, $filter, Lottery, $rootScope) {
  $rootScope.showNav = void 0;
  $scope.isOpen = false;
  $scope.currentPage = 0;
  $scope.results = [];
  $scope.pages = [];
  $scope.resultsByPage = [];
  $scope.search = function(q) {
    console.log;
    if (q.length) {
      return $scope.resultsByPage = $scope.results;
    } else {
      return $scope.getResultsByPage($scope.currentPage);
    }
  };
  $scope.getResults = function(date) {
    var lotteryDrawingDate;
    lotteryDrawingDate = $scope.getLotteryDrawingDate(date);
    return $scope.getLottery(lotteryDrawingDate).$promise.then(function(lottery) {
      var i, ref, results;
      $scope.results = lottery.ranks;
      if (lottery.ranks.length) {
        $scope.pages = (function() {
          results = [];
          for (var i = 0, ref = (lottery.ranks.length / 10) - 1; 0 <= ref ? i <= ref : i >= ref; 0 <= ref ? i++ : i--){ results.push(i); }
          return results;
        }).apply(this);
      } else {
        $scope.pages = [];
      }
      return $scope.getResultsByPage();
    });
  };
  $scope.getLottery = function(lotteryDrawingDate) {
    return Lottery.findOne({
      filter: {
        where: {
          drawingDate: lotteryDrawingDate
        },
        include: {
          relation: 'ranks',
          scope: {
            where: {
              earned: {
                gt: 0
              }
            },
            include: 'ticket'
          }
        }
      }
    });
  };
  $scope.getLotteryDrawingDate = function(selectedDate) {
    var lotteryDrawingDate;
    if (selectedDate == null) {
      selectedDate = void 0;
    }
    lotteryDrawingDate = moment(selectedDate);
    if (lotteryDrawingDate.hour < 12) {
      lotteryDrawingDate.subtract(1, 'days');
    }
    return lotteryDrawingDate.hour(12).second(0).minute(0).millisecond(0);
  };
  $scope.getResultsByPage = function(page) {
    var end, start;
    if (page == null) {
      page = 0;
    }
    start = page * 10;
    end = start + 10;
    $scope.currentPage = page;
    $scope.resultsByPage = $scope.results.slice(start, end);
    console.log('start : ', start);
    console.log('end : ', end);
    console.log('getResultsByPage : ', $scope.resultsByPage);
    return console.log('results : ', $scope.results);
  };
  return $scope.getResults();
});
