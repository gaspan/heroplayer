/*
* @Author: felipelopesrita
* @Date:   2016-08-09 18:41:59
* @Last Modified by:   felipelopesrita
* @Last Modified time: 2016-08-18 15:15:39
*/

angular.module('heroplayer', [ 'ngRoute', 'ngResource' ])
	.constant('CSRF_TOKEN',
		document.getElementById('container').dataset.token
	);