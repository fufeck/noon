angular.module "starter.home"

.controller "homeCtrl", (Lottery, $scope, $http, SliderPicture, $timeout, $rootScope) ->
	$rootScope.showNav = undefined
	$scope.slides = []
	$scope.currentIndex = 0
	$scope.activePhone = false
	$rootScope.amount = 0

	Lottery.find
		filter:
			field:
				amount: true
				startingDate: true
			where:

				startingDate:
					between: [moment('1/1/2016'), moment()]
	.$promise
	.then (success) -> 
		$rootScope.amount = 0
		for lottery in success
			unless lottery.id is '5628fa32721a4e606de659e7'
				$rootScope.amount += lottery.amount
				$rootScope.$apply() unless $rootScope.$$phase

		
		
	.catch (err) -> console.log 'err : ', err

	$timeout ->
		$http.get 'http://dashboardv2.noongame.com/api/slider-pictures/slider-pictures/files'
		.then (pictures) ->
			i = 0
			for pict in pictures.data
				console.log pict
				$scope.slides.push('http://dashboardv2.noongame.com/api/slider-pictures/slider-pictures/download/' + pict.name)
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
