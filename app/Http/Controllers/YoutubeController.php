<?php

namespace heroplayer\Http\Controllers;

use heroplayer\GoogleService;
use Request;
use Youtube;

class YoutubeController extends Controller
{
  // Set default parameters
  private $params = [
    'q'          => '',
    'type'       => 'video',
    'part'       => 'id, snippet',
    'maxResults' => 50
  ];

  private $client;
  private $drive;

  public function __construct(GoogleService $google)
  {
    $this->client = $google->client();
    $this->client->setAccessToken( session('user.token') );
    $this->drive = $google->drive( $this->client );
  }

  public function busca( $q ) {
    $params = $this->params;
    $params['q'] = $q;
    return Youtube::searchAdvanced( $params, true );
  }

}