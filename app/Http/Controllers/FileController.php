<?php

namespace heroplayer\Http\Controllers;

use heroplayer\Music;

use Request;
use Curl;
use Storage;
use Input;
use Image;
use Response;

class FileController extends Controller
{
  private $api = 'http://www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch';

  public function __construct() {
    
    /* Cria o simbolic link se ele não existir */
    $storage = storage_path('app/public');
    $public  = public_path();
    $public  = $public.'/storage';

    if( !file_exists($public) )
      symlink( $storage, $public );
  }

	public function saveSong( ) {
		
		$id 	 = Request::input('id');
		$arr   = Request::all();
		$title = 'songs/'.$id.'.mp3';

		if( count(Music::find($id)) > 0 )
			return 'Já tá cadastrado';
		
		//if( Input::file('art') )
			$arr['art'] = $this->saveIcon( Input::file('art'), $id );

		$file = Curl::to( $this->api )
			->withOption( 'FOLLOWLOCATION', true )
			->withData( array( 'v' => $id ) )
			->get();
		
		Storage::put( $title, $file );
		Music::create( $arr );

		return $arr;
  }

  public function getFile( $name ) {
  	
    $public  = Storage::disk('public');
    $dropbox = Storage::disk('dropbox');
    
    if( $disk->exists($name) )
      return response()->file( storage_path('app/public').'/'.$name );
    else if( !$dropbox->exists( $name ) )
  		return response()->json([ 'message' => 'File not found' ], 404);

  	$filesize = (int) $dropbox->size( $name );
    $file = $dropbox->get( $name );
    $mime = $dropbox->mimeType( $name );

    $response = Response::make( $file, 200 );
    $response->header( 'Content-Type', $mime );
    $response->header( 'Content-Length', $filesize );

    $public->put( $name, $file );

    return $response;
  }

  public function getArt( $name ) {
    return $this->getFile( 'arts/'.$name );
  }

  public function getSong( $name ) {
  	return $this->getFile( 'songs/'.$name );
  }

  public function saveIcon( $file, $name ) {
    $img = Image::make( $file );
    $dest = 'arts/'.$name.'.jpg';
    $img->encode('jpg')
      ->resize(250, 250);
    Storage::put( $dest, $img->stream()->__toString() );
    return $dest;
  }

}
