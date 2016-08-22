/*
* @Author: felipelopesrita
* @Date:   2016-08-21 23:32:34
* @Last Modified by:   felipelopesrita
* @Last Modified time: 2016-08-22 17:00:02
*/

angular.module('heroplayer')
	.service('WebService', [ '$http' , function( $http ){
		
		const base = '/api/';
		var getUrl = ( url ) => `${base}${url}`;
		
		function get( url, data = {}, config = {} ) {
			return $http.get( `${base}${url}`, data, config );
		}
		function post( url, data = {}, config = {} ) {
			return $http.post( `${base}${url}`, data, config );
		}
		return {
			get,
			post,
			getUrl
		}	
	}])