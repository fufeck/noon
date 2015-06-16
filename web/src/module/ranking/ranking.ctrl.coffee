angular.module "starter.ranking"

.controller "rankingCtrl", ($scope, ngTableParams, $rootScope) ->
	$rootScope.showNav = undefined
	$scope.pseudo = ""

	datas = [{speudo : "a", ntiket : 8671, validRep : 78, ratio : 8.2, somme : 8874657},
			{speudo : "z", ntiket : 861, validRep : 22, ratio : 12.2, somme : 87315},
			{speudo : "e", ntiket : 871, validRep : 33, ratio : 0.2, somme : 44},
			{speudo : "r", ntiket : 1, validRep : 44, ratio : 0.8, somme : 33},
			{speudo : "t", ntiket : 8, validRep : 58, ratio : 0.7, somme : 7},
			{speudo : "y", ntiket : 6, validRep : 48, ratio : 777, somme : 8},
			{speudo : "b", ntiket : 71, validRep : 7, ratio : 1, somme : 875},
			{speudo : "z", ntiket : 861, validRep : 22, ratio : 12.2, somme : 87315},
			{speudo : "e", ntiket : 871, validRep : 33, ratio : 0.2, somme : 44},
			{speudo : "r", ntiket : 1, validRep : 44, ratio : 0.8, somme : 33},
			{speudo : "t", ntiket : 8, validRep : 58, ratio : 0.7, somme : 7},
			{speudo : "y", ntiket : 6, validRep : 48, ratio : 777, somme : 8},
			{speudo : "b", ntiket : 71, validRep : 7, ratio : 1, somme : 875},
			{speudo : "z", ntiket : 861, validRep : 22, ratio : 12.2, somme : 87315},
			{speudo : "e", ntiket : 871, validRep : 33, ratio : 0.2, somme : 44},
			{speudo : "r", ntiket : 1, validRep : 44, ratio : 0.8, somme : 33},
			{speudo : "t", ntiket : 8, validRep : 58, ratio : 0.7, somme : 7},
			{speudo : "y", ntiket : 6, validRep : 48, ratio : 777, somme : 8},
			{speudo : "b", ntiket : 71, validRep : 7, ratio : 1, somme : 875},
			{speudo : "z", ntiket : 861, validRep : 22, ratio : 12.2, somme : 87315},
			{speudo : "e", ntiket : 871, validRep : 33, ratio : 0.2, somme : 44},
			{speudo : "r", ntiket : 1, validRep : 44, ratio : 0.8, somme : 33},
			{speudo : "t", ntiket : 8, validRep : 58, ratio : 0.7, somme : 7},
			{speudo : "y", ntiket : 6, validRep : 48, ratio : 777, somme : 8},
			{speudo : "b", ntiket : 71, validRep : 7, ratio : 1, somme : 875},
			{speudo : "z", ntiket : 861, validRep : 22, ratio : 12.2, somme : 87315},
			{speudo : "e", ntiket : 871, validRep : 33, ratio : 0.2, somme : 44},
			{speudo : "r", ntiket : 1, validRep : 44, ratio : 0.8, somme : 33},
			{speudo : "t", ntiket : 8, validRep : 58, ratio : 0.7, somme : 7},
			{speudo : "y", ntiket : 6, validRep : 48, ratio : 777, somme : 8},
			{speudo : "b", ntiket : 71, validRep : 7, ratio : 1, somme : 875},
			{speudo : "z", ntiket : 861, validRep : 22, ratio : 12.2, somme : 87315},
			{speudo : "e", ntiket : 871, validRep : 33, ratio : 0.2, somme : 44},
			{speudo : "r", ntiket : 1, validRep : 44, ratio : 0.8, somme : 33},
			{speudo : "t", ntiket : 8, validRep : 58, ratio : 0.7, somme : 7},
			{speudo : "y", ntiket : 6, validRep : 48, ratio : 777, somme : 8},
			{speudo : "b", ntiket : 71, validRep : 7, ratio : 1, somme : 875},
			{speudo : "z", ntiket : 861, validRep : 22, ratio : 12.2, somme : 87315},
			{speudo : "e", ntiket : 871, validRep : 33, ratio : 0.2, somme : 44},
			{speudo : "r", ntiket : 1, validRep : 44, ratio : 0.8, somme : 33},
			{speudo : "t", ntiket : 8, validRep : 58, ratio : 0.7, somme : 7},
			{speudo : "y", ntiket : 6, validRep : 48, ratio : 777, somme : 8},
			{speudo : "b", ntiket : 71, validRep : 7, ratio : 1, somme : 875}]


	ngTable = 
		page: 1,
		count: 2

	getData =
		total : datas.length,
		getData : ($defer, params) ->
			$defer.resolve(datas.slice((params.page() - 1) * params.count(), params.page() * params.count()));	

	$scope.tableParams = new ngTableParams(ngTable, getData)
