/*
* @Author: felipelopesrita
* @Date:   2016-08-09 18:41:59
* @Last Modified by:   felipelopesrita
* @Last Modified time: 2016-08-22 22:38:27
*/

angular.module('heroplayer', [ 'ngRoute', 'ngResource', 'ngAudio' ])
	.constant('CSRF_TOKEN',
		document.getElementById('container').dataset.token
	);