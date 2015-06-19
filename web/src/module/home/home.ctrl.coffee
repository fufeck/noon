angular.module "starter.home"

.controller "homeCtrl", ($scope, $http, SliderPicture, $timeout, $rootScope) ->
	$rootScope.showNav = undefined
	$scope.slides = []
	$scope.currentIndex = 0
	$scope.activePhone = false

	SliderPicture.getFiles (pictures) ->
		i = 0
		for pict in pictures
			$scope.slides.push('ec2-52-11-211-225.us-west-2.compute.amazonaws.com/api/slider-pictures/download/' + pict.name)
			i++
		console.log $scope.slides
		console.log $scope.slides.length
		lauchSlide()

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

	return ;
