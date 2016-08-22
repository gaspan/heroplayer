<?php

namespace heroplayer;

use Illuminate\Database\Eloquent\Model;

class GoogleService extends Model
{
	
	public function client()
  {
    $client = new \Google_Client();
    $client->setClientId(env('GOOGLE_CLIENT_ID'));
    $client->setClientSecret(env('GOOGLE_CLIENT_SECRET'));
    $client->setRedirectUri(env('GOOGLE_REDIRECT_URL'));
    $client->setScopes(explode(',', env('GOOGLE_SCOPES')));
    $client->setApprovalPrompt(env('GOOGLE_APPROVAL_PROMPT'));
    $client->setAccessType(env('GOOGLE_ACCESS_TYPE'));

    return $client;
  }

  public function drive($client)
  {
    $drive = new \Google_Service_Drive($client);
    return $drive;
  }

  public static function uploadSong( $song, $title, $drive ) {
  	
  	$mime_type = 'audio/mpeg';

    $drive_file = new \Google_Service_Drive_DriveFile();
    $drive_file->setMimeType( $mime_type );
    $drive_file->setName( $title );

    $createdFile = $drive->files->create($drive_file, [
      'data' => $song,
      'mimeType' => $mime_type,
      'uploadType' => 'multipart'
    ]);

    return $createdFile->getId();
  }
}
