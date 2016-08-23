/*
* @Author: felipelopesrita
* @Date:   2016-08-10 03:14:56
* @Last Modified by:   felipelopesrita
* @Last Modified time: 2016-08-23 00:23:33
*/

angular.module('heroplayer')
	.service( 'PlayerService', [ '$http', 'WebService', 'ngAudio', function( $http, WebService, ngAudio ){
		
		function query( data ) {
			var fd = new FormData();
			var config = {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
	    }
	    $.each(data, function(index, value) {
		    fd.append( index, value );
			});
			return $http.post( `/api/song`, fd, config );
		}
		function getId( str ) {
			var regex = /watch\?v=[^&]*/i ;
			return regex.exec( str ).toString().replace( /watch\?v=/i,'');
		}
		function getSongs() {
			return WebService.get('song');
		}
		function deleteSong( id ) {
			return WebService.delete(`song/${id}`);
		}
		function createAudio( id ) {
			return ngAudio.load( WebService.getUrl( `song/${id}.mp3` ) );
		}
		return {
			query,
			getId,
			getSongs,
			createAudio,
			deleteSong
		}
		
	}] );