angular.module 'starter'

.directive 'noonFooter', ->

	restrict: 'AEC'
	templateUrl: 'noonFooter.view.html'
	controller: 'noonFooterCtrl'

.controller 'noonFooterCtrl', ($scope) ->
