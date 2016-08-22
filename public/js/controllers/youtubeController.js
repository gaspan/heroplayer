/*
* @Author: felipelopesrita
* @Date:   2016-08-10 01:36:56
* @Last Modified by:   felipelopesrita
* @Last Modified time: 2016-08-11 00:55:29
*/

angular.module('youtube-player')
	.controller( 'YoutubeController', YoutubeController );

function YoutubeController( YoutubeService ) {

	var vm  = this;

	vm.search = search;
	function search() {
		vm.submitted = true;
		vm.finding   = vm.form.search;
		request( vm.form.search );
	}

  /*
	vm.videos = JSON.parse(`[
  {
   "kind": "youtube#searchResult",
   "etag": "'I_8xdZu766_FSaexEaDXTIfEWc0/YI3ufnpd5SUnuy00yiTVONQYFgA'",
   "id": {
    "kind": "youtube#video",
    "videoId": "OQDLu8FDZI4"
   },
   "snippet": {
    "publishedAt": "2016-08-08T23:00:01.000Z",
    "channelId": "UC0A_Jk_KqFcwnEBtyNqolsA",
    "title": "100 NEW POKEMON LEAKED?! - MAJOR Pokémon Sun and Moon news",
    "description": "These leaks are lining up PERFECTLY with older leaks. Be sure to SMASH the like button if you enjoyed the video! ➨ SUBSCRIBE: http://bit.ly/TyranitarTube ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/OQDLu8FDZI4/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/OQDLu8FDZI4/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/OQDLu8FDZI4/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "TyranitarTube",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "'I_8xdZu766_FSaexEaDXTIfEWc0/KEAddfwpu9toqGiCvHpJ9Tln1QI'",
   "id": {
    "kind": "youtube#video",
    "videoId": "Jzbcnc7OrEU"
   },
   "snippet": {
    "publishedAt": "2016-08-09T01:51:06.000Z",
    "channelId": "UCS0YAnN1bxaJ3RyPGxx7MhA",
    "title": "Pokemon GO ★ NEW UPDATE! - Tracking 'Fixed', Throwing XP Fixed, Name Change & Battery Saver on iOS!",
    "description": "FREE Pokemon GO Coins: http://bit.ly/PokemonGoCoins NEW Pokémon GO Update News Includes a Review, News and Information on the New Pokémon GO ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/Jzbcnc7OrEU/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/Jzbcnc7OrEU/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/Jzbcnc7OrEU/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Reversal - Pokémon GO",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "'I_8xdZu766_FSaexEaDXTIfEWc0/yJAsVV5xJyD9PZmvn6ltw3cFuRQ'",
   "id": {
    "kind": "youtube#video",
    "videoId": "p08gcT-xG-8"
   },
   "snippet": {
    "publishedAt": "2016-08-09T02:25:11.000Z",
    "channelId": "UCifNfsr6LU1Z8QpoBTBxVRQ",
    "title": "NEW POKEMON GO UPDATE! Tracking System, Bonus XP, & Hidden Features!",
    "description": "Pokemon Go New Update (Version 0.33/1.3.0) brings new features to Pokemon Go! Let's discuss the new Pokemon Go Update! Like if you enjoyed!",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/p08gcT-xG-8/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/p08gcT-xG-8/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/p08gcT-xG-8/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "FsuAtl",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "'I_8xdZu766_FSaexEaDXTIfEWc0/XqV5gLlQd9U9AxAOigxxaT2wTFE'",
   "id": {
    "kind": "youtube#video",
    "videoId": "3AYayMaGTTc"
   },
   "snippet": {
    "publishedAt": "2016-08-09T05:20:15.000Z",
    "channelId": "UCfAPTv1LgeEWevG8X_6PUOQ",
    "title": "Pokémon Go - NEW Nearby 'Tracker' Feature Rolling Out - Hands-On Gameplay",
    "description": "Has Niantic fixed Pokemon Go's tracking issues? We check out a brand new 'Nearby Pokemon' feature in the Sightings List rolling out to some people now that ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/3AYayMaGTTc/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/3AYayMaGTTc/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/3AYayMaGTTc/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "GameXplain",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "'I_8xdZu766_FSaexEaDXTIfEWc0/63gNOWzWKI8TUkzJZ_pj8ybc-qA'",
   "id": {
    "kind": "youtube#video",
    "videoId": "yidJQxHRbiw"
   },
   "snippet": {
    "publishedAt": "2016-08-09T21:00:03.000Z",
    "channelId": "UCshoKvlZGZ20rVgazZp5vnQ",
    "title": "Pokémon Go - SICK EVOLUTIONS BRO",
    "description": "We out here evolving sick Growlithes Previous Pokemon Go ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/yidJQxHRbiw/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/yidJQxHRbiw/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/yidJQxHRbiw/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "CaptainSparklez",
    "liveBroadcastContent": "none"
   }
  }
 ]`);

	console.log(vm.videos);
  */

	function request( q ) {
		var $p  = YoutubeService.query( q );
		var log = ( data ) => { console.log(data); };
		var res = ( json ) => { vm.videos = json.data.results; console.log(json.data.results) };
		$p.then( res, log );	
	}

}

YoutubeController['$inject'] = [ 'YoutubeService' ];