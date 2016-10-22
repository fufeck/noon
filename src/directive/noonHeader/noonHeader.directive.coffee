angular.module 'starter'

.directive 'noonHeader', ->

	restrict: 'AEC'
	templateUrl: 'noonHeader.view.html'
	controller: 'noonHeaderCtrl'

.controller 'noonHeaderCtrl', ($scope) ->
