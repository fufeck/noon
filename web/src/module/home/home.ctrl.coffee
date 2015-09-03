angular.module "starter.home"

.controller "homeCtrl", ($scope, $http, SliderPicture, $timeout, $rootScope) ->
	$rootScope.showNav = undefined
	$scope.slides = []
	$scope.currentIndex = 0
	$scope.activePhone = false

	$timeout ->
		SliderPicture.getFiles (pictures) ->
			i = 0
			for pict in pictures
				$scope.slides.push('http://52.11.211.225/api/slider-pictures/download/' + pict.name)
				i++
			console.log $scope.slides
			lauchSlide()
	, 1000

	lauchSlide = () ->
		$timeout(startslide = () ->
				$scope.currentIndex++
				if ($scope.currentIndex >= $scope.slides.length)
					$scope.currentIndex = 0
				lauchSlide()
			, 5000)

	$scope.isCurrentSlideIndex = (index) ->
		return $scope.currentIndex == index

	$scope.setCurrentSlideIndex = (index) ->
		$scope.currentIndex = index;

	$scope.setPhoneActive = ->
		console.log $scope.activePhone
		if ($scope.activePhone == true)
			$scope.activePhone = false
		else
			$scope.activePhone = true

	$scope.isPhoneActive =  ->
		return $scope.activePhone

	$scope.htmlReady()

	return ;
