<?php

namespace heroplayer\Http\Controllers;
use Request;
use heroplayer\Music;

class MusicController extends Controller
{
  function lista() {
  	$items = [ 'id as video', 'title', 'author' ];
  	return Music::select( $items )->get();
  }
}
