/*
* @Author: felipelopesrita
* @Date:   2016-08-09 18:42:33
* @Last Modified by:   felipelopesrita
* @Last Modified time: 2016-08-18 23:14:33
*/

angular.module('heroplayer')
	.controller('PlayerController', PlayerController );

//Controller
function PlayerController( $scope, $location, PlayerService, CSRF_TOKEN ) {
	var vm = this;

	vm.wait 	= false; 
	vm.token  = CSRF_TOKEN;

	$scope.setFile = function(element) {
	  $scope.currentFile = element.files[0];
		var reader = new FileReader();

	  reader.onload = function(event) {
	    $scope.image_source = event.target.result;
	    $scope.$apply();
	  }
	  // when the file is read it triggers the onload event above.
	  reader.readAsDataURL(element.files[0]);
	}

	vm.create = create;
	function create() {
		vm.wait = true;
		vm.dataForm.id = PlayerService.getId( vm.dataForm.link );
		vm.dataForm.art = $scope.currentFile;

		//Upload file
	  var log = (res) => { console.log(res); };
	  //PlayerService.saveIcon( $scope.currentFile, vm.dataForm.id, CSRF_TOKEN )
	  	//.then(log, log);

		PlayerService.query( vm.dataForm )
			.then(function(res) {
				vm.wait = false;
				$location.path('/');
			}, log );
	}
}

//Injector de dependências
PlayerController['$inject'] = [ '$scope', '$location' ,'PlayerService', 'CSRF_TOKEN' ];