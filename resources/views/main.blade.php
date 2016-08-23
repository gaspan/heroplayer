<!DOCTYPE html>
<html>
	<head>
		<title>Heroplayer</title>
    <link rel="stylesheet" href="/bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/atomo.css">
    <link rel="stylesheet" href="/css/molecula.css">
    <link rel="stylesheet" href="/css/elemento.css">
    <link rel="stylesheet" href="/icomoon/css/style.css">
  </head>
  <body  ng-app="heroplayer" ng-controller="PlayerController as Player">

  	<nav class="navbar navbar-default">
	  <div class="container">
	    <div class="navbar-header">
	      <a class="navbar-brand" href="#">
	        <i class="icon-heroplayer"></i>
	      </a>
	    </div>
	  </div>
	</nav>

	<section class="container" id="container" data-token="{{{ csrf_token() }}}">
		<div class="row full-h">
			<div class="col-sm-10 border col-sm-offset-1">
				<div ng-view></div>
			</div>
		</div>
	</section>

    <!-- Scripts -->
    <script src="/bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Angular scripts -->
    <script src="/bower_components/angular/angular.min.js"></script>
    <script src="/bower_components/angular-route/angular-route.min.js"></script>
    <script src="/bower_components/angular-resource/angular-resource.min.js"></script>
    <script src="/bower_components/angular-audio/app/angular.audio.js"></script>
    <script src="/js/app.js"></script>
    <script src="/js/Services/webService.js"></script>
    <script src="/js/Services/playerService.js"></script>
    <script src="/js/route-config.js"></script>
    <script src="/js/controllers/songController.js"></script>
    <script src="/js/controllers/playerController.js"></script>
  </body>
</html>