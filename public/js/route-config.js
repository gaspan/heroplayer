/*
* @Author: felipelopesrita
* @Date:   2016-08-18 01:50:25
* @Last Modified by:   felipelopesrita
* @Last Modified time: 2016-08-21 23:47:37
*/

angular.module('heroplayer')
	.config(function( $routeProvider ) {

		$routeProvider.when('/new', {
			templateUrl: 'partials/cadastro.html',
			controller: 'PlayerController',
			controllerAs: 'Player'
		});

		$routeProvider.when('/', {
			templateUrl: 'partials/dashboard.html',
			controller: 'SongController',
			controllerAs: 'Song'
		});

	});