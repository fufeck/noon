angular.module "starter.faq"

.controller "faqCtrl", ($scope, FrequentlyAskedQuestion, $anchorScroll, $location, $timeout, $rootScope) ->
	$rootScope.showNav = undefined

	$scope.questions = FrequentlyAskedQuestion.find()

	$scope.gotoAnchor = (x, open) ->
		newHash = 'anchor' + x;
		if open and $( window ).height() / 2 < $('#' + newHash).position().top
			$timeout(quick = () ->
				$anchorScroll();
			, 300)
