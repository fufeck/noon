angular.module "starter"

.controller "backdropCtrl", ($scope, $rootScope) ->
  console.log 'tutu'
  $scope.mail = 'tutu'
  $scope.user=
    mail: 'eree'
  $scope.subscribe = (user) ->
    console.log 'mail : ', user
