/*
* @Author: felipelopesrita
* @Date:   2016-08-21 23:44:10
* @Last Modified by:   felipelopesrita
* @Last Modified time: 2016-08-23 21:23:24
*/

angular.module('heroplayer')
	.controller('SongController', SongController);

function SongController( $scope, $interval, PlayerService, ngAudioGlobals ) {

	ngAudioGlobals.unlock = false;
	var vm = this;

	vm.audio = null;
	vm.toogle = {};
	vm.toogle.paused = true;
	vm.time = 0;
	vm.W = $(document).width();

	vm.toogle_object = toogle_object;
	function toogle_object( obj ) {
		if( vm.toogle[obj] === true )
			vm.toogle[obj] = false;
		else
			vm.toogle[obj] = true;
	}

	vm.repeat = repeat;
	function repeat() {
		if( vm.audio == null ) return false;
		vm.toogle_object('repeat');
	}

	vm.changeExecution = changeExecution;
	function changeExecution( event ) {
		if( !vm.audio ) return false;		
		var percent = ( event.offsetX / vm.W );
		vm.audio.progress = percent;
	}

	vm.play = play;
	function play( id ) {
		if( vm.audio )
			vm.audio.stop();
		vm.audio = PlayerService.createAudio( id );
		playSong();
	}

	vm.remove = remove;
	function remove( id ) {
		if( !confirm('Deseja realmente excluir esta música?') ) return false;
		var $p = PlayerService.deleteSong( id );
		$p.then( removeEl );
		function removeEl() {
			var el = document.querySelector(`#${id}`).parentNode;
			el.remove();
		}
	}

	//Loop 1 na música
	function loopSong() {
		vm.audio.progress = 0;
		return vm.audio.play();
	}

	//Função para atualizar o progresso da música
	function atualize() {
		vm.time = vm.audio.progress * 100; 
		if( vm.time == 100 )
			SongEnded();
	}

	//Verifica quando o som chegou ao fim
	vm.songPaused = songPaused;
	function songPaused() {
		vm.audio.pause();
		stopAtualize();
		vm.toogle_object('paused');
	}

	vm.playSong = playSong;
	function playSong() {
		if( !vm.audio ) return false;
		vm.audio.play();
		vm.status = $interval( atualize, 500 );
		vm.toogle_object('paused');
	}

	function SongEnded() {
		if( vm.toogle.repeat ) return loopSong();
		vm.audio.stop();
		stopAtualize();
		vm.toogle_object('paused');
	}

	function stopAtualize() {
  	if ( angular.isDefined(vm.status) ) {
      $interval.cancel(vm.status);
      vm.status = undefined;
    }
  }

	var p  = PlayerService.getSongs();
	p.then( json => {
		vm.songs = json.data;
		console.log(json.data);
	}, err => { console.log(err); });
}
SongController['$inject'] = [ '$scope', '$interval', 'PlayerService', 'ngAudioGlobals' ];