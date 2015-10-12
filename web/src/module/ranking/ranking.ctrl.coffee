angular.module "starter.ranking"

.controller "rankingCtrl", ($scope, $filter, $rootScope, Player) ->
  $rootScope.showNav = undefined
  $scope.currentPage = 0
  $scope.results = []
  $scope.pages = []
  $scope.resultsByPage = []

  $scope.search = (q) ->
    console.log
    if q.length
      $scope.resultsByPage = $scope.filteredResults.slice 0, 10
    else
      $scope.getResultsByPage($scope.currentPage)

  $scope.getResults = ->

    $scope.getPlayers()
    .$promise
    .then (players) ->
      console.log players
      $scope.results = players
      if players.length
        $scope.pages = [0..(players.length / 10) - 1]
      else
        $scope.pages = []
      $scope.getResultsByPage()

  $scope.getPlayers = (lotteryDrawingDate) ->
    Player.find
      filter:
        where:
          totalEarned:
            neq: null
        order: [
          'totalEarned DESC'
        ]


  $scope.getResultsByPage = (page = 0) ->
    start = page * 10
    end = start + 10
    $scope.currentPage = page
    $scope.resultsByPage = $scope.results.slice start, end
    # console.log 'start : ', start
    # console.log 'end : ', end
    # console.log 'getResultsByPage : ', $scope.resultsByPage
    # console.log 'results : ', $scope.results




  $scope.getResults()
