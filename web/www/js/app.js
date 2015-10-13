!(function(window, document) {
  var getModule;
  getModule = function(angular) {
    return angular.module('seo', []).run([
      '$rootScope', function($rootScope) {
        $rootScope.htmlReady = function() {
          $rootScope.$evalAsync(function() {
            setTimeout((function() {
              if (typeof window.callPhantom === 'function') {
                window.callPhantom();
              }
            }), 0);
          });
        };
      }
    ]);
  };
  if (typeof define === 'function' && define.amd) {
    define(['angular'], getModule);
  } else {
    getModule(angular);
  }
})(window, document);

angular.module("starter", ["seo", "ui.router", "ui.bootstrap", "ngStorage", "ngResource", "ngTable", "duScroll", "noon.service", "starter.home", "starter.result", "starter.ranking", "starter.advertiser", "starter.contact", "starter.faq", "starter.cgu", "starter.mention"]).config(function($urlRouterProvider, $locationProvider, LoopBackResourceProvider) {
  $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  LoopBackResourceProvider.setUrlBase("http://dashboard.noongame.com/api");
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
    title: "Annonceurs",
    templateUrl: 'advertiser.view.html',
    controller: 'advertiserCtrl'
  });
}).run(function() {});

angular.module("starter.advertiser").controller("advertiserCtrl", function($scope, $rootScope) {
  $rootScope.showNav = void 0;
  $scope.htmlReady();
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
  $scope.status = false;
  return $scope.htmlReady();
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
  $scope.sendMail = function() {
    var Contact, data;
    $scope.notif = true;
    Contact = Parse.Object.extend('Contact');
    data = new Contact();
    return data.save($scope.mail).then(function(obj) {
      return console.log('obj', obj);
    });
  };
  return $scope.htmlReady();
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
  $scope.gotoAnchor = function(x, open) {
    var newHash, quick;
    newHash = 'anchor' + x;
    if (open && $(window).height() / 2 < $('#' + newHash).position().top) {
      return $timeout(quick = function() {
        return $anchorScroll();
      }, 300);
    }
  };
  return $scope.htmlReady();
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
  var lauchSlide;
  $rootScope.showNav = void 0;
  $scope.slides = [];
  $scope.currentIndex = 0;
  $scope.activePhone = false;
  $timeout(function() {
    return SliderPicture.getFiles(function(pictures) {
      var i, j, len, pict;
      i = 0;
      for (j = 0, len = pictures.length; j < len; j++) {
        pict = pictures[j];
        $scope.slides.push('http://dashboard.noongame.com/api/slider-pictures/download/' + pict.name);
        i++;
      }
      console.log($scope.slides);
      return lauchSlide();
    });
  }, 1000);
  lauchSlide = function() {
    var startslide;
    return $timeout(startslide = function() {
      $scope.currentIndex++;
      if ($scope.currentIndex >= $scope.slides.length) {
        $scope.currentIndex = 0;
      }
      return lauchSlide();
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
  $scope.htmlReady();
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
  $scope.htmlReady();
});

angular.module("starter.result", []).config(function($stateProvider) {
  $stateProvider.state('result', {
    url: '/result',
    title: "Résultats du jour",
    templateUrl: 'result.view.html',
    controller: 'resultCtrl'
  });
}).run(function() {});

angular.module("starter.result").controller("resultCtrl", function($scope, $http, $filter, ngTableParams, Lottery, LotteryRank, $rootScope) {
  var createTable, getLotteryDay, loadLotteryRank, pushDatas;
  $rootScope.showNav = void 0;
  $scope.isOpen = false;
  $scope.tableParams = void 0;
  getLotteryDay = function(date) {
    var currentDate;
    if (date == null) {
      date = void 0;
    }
    if (date === void 0) {
      currentDate = moment();
    } else {
      currentDate = moment(date);
    }
    console.log(date);
    currentDate.hour(14);
    currentDate.second(0);
    currentDate.minute(0);
    currentDate.millisecond(0);
    return Lottery.find({
      filter: {
        where: {
          day: currentDate.toISOString()
        }
      }
    }, function(success) {
      console.log("ONE : ", success);
      return loadLotteryRank(success);
    }, function(error) {
      return console.log(error);
    });
  };
  pushDatas = function(datas) {
    var d, i, len, rank, tmp;
    $scope.datas = [];
    rank = 1;
    for (i = 0, len = datas.length; i < len; i++) {
      d = datas[i];
      if (d.player && d.player.username) {
        tmp = d;
        tmp.username = d.player.username;
        tmp.rank = rank;
        rank += 1;
        $scope.datas.push(tmp);
      }
    }
    console.log("RESULT");
    return console.log($scope.datas);
  };
  loadLotteryRank = function(lotteryDay) {
    if (lotteryDay.length > 0) {
      return LotteryRank.find({
        filter: {
          where: {
            lotteryId: lotteryDay[0].id
          },
          include: 'player'
        }
      }, function(success) {
        console.log("TWO : ", success);
        pushDatas(success);
        if ($scope.tableParams === void 0) {
          createTable();
        } else {
          $scope.tableParams.reload();
          $scope.tableParamsMobile.reload();
        }
        return $scope.htmlReady();
      }, function(error) {
        return console.log(error);
      });
    }
  };
  createTable = function() {
    $scope.tableParams = new ngTableParams({
      page: 1,
      count: 10,
      filter: {
        username: ''
      }
    }, {
      total: $scope.datas.length,
      getData: function($defer, params) {
        var orderedData;
        orderedData = params.filter() ? $filter('filter')($scope.datas, params.filter()) : $scope.datas;
        $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
        params.total(orderedData.length);
        $defer.resolve($scope.users);
      }
    });
    return $scope.tableParamsMobile = new ngTableParams({
      page: 1,
      count: 10,
      filter: {
        username: ''
      }
    }, {
      total: $scope.datas.length,
      getData: function($defer, params) {
        var orderedData;
        orderedData = params.filter() ? $filter('filter')($scope.datas, params.filter()) : $scope.datas;
        $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
        params.total(orderedData.length);
        $defer.resolve($scope.users);
      }
    });
  };
  getLotteryDay();
  $scope.changeState = function() {
    if ($scope.isOpen === false) {
      return $scope.isOpen = true;
    } else {
      return $scope.isOpen = false;
    }
  };
  return $scope.change = function(date) {
    $scope.isOpen = false;
    return getLotteryDay(date);
  };
});

angular.module("starter.ranking", []).config(function($stateProvider) {
  $stateProvider.state('ranking', {
    url: '/ranking',
    title: "Classement",
    templateUrl: 'ranking.view.html',
    controller: 'rankingCtrl'
  });
}).run(function() {});

angular.module("starter.ranking").controller("rankingCtrl", function($scope, $filter, ngTableParams, $rootScope, Player) {
  var createTable;
  $rootScope.showNav = void 0;
  Player.find({}, function(success) {
    var i, len, line, players, rank;
    console.log("PLAYER : ", success);
    players = [];
    rank = 1;
    for (i = 0, len = success.length; i < len; i++) {
      line = success[i];
      if (line.username !== void 0 && line.goodAnswers !== void 0 && line.totalAnswers !== void 0) {
        players.push(line);
      }
    }
    createTable(players);
    return $scope.htmlReady();
  }, function(error) {
    return console.log(error);
  });
  return createTable = function(data) {
    console.log("data");
    console.log(data);
    $scope.tableParams = new ngTableParams({
      page: 1,
      count: 10,
      filter: {
        username: ''
      }
    }, {
      total: data.length,
      getData: function($defer, params) {
        var orderedData;
        orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
        $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
        params.total(orderedData.length);
        $defer.resolve($scope.users);
      }
    });
    return $scope.tableParamsMobile = new ngTableParams({
      page: 1,
      count: 10,
      filter: {
        username: ''
      }
    }, {
      total: data.length,
      getData: function($defer, params) {
        var orderedData;
        orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
        $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
        params.total(orderedData.length);
        $defer.resolve($scope.users);
      }
    });
  };
});
