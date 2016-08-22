/*
* @Author: felipelopesrita
* @Date:   2016-08-21 23:44:10
* @Last Modified by:   felipelopesrita
* @Last Modified time: 2016-08-22 15:19:07
*/

angular.module('heroplayer')
	.controller('SongController', SongController);

function SongController( PlayerService ) {
	var vm = this;

	vm.play = play;
	vm.audio = null;
	function play( id ) {
		if( vm.audio )
		{
			vm.audio.pause();
			vm.audio.currentTime = 0;
			vm.audio = null;
		}
		vm.audio = PlayerService.createAudio( id );
		vm.audio.play();
	}

	var p  = PlayerService.getSongs();
	p.then( json => {
		vm.songs = json.data;
		console.log( json );
	}, err => { console.log(err); });



}
SongController['$inject'] = [ 'PlayerService' ];