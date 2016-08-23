<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
  return view('main');
});

Route::get('/index', 'LoginController@index');
Route::get('/login', 'LoginController@login');

//Api para funções do Youtube
Route::get('/api/search/{q}', 'YoutubeController@busca');

//Api para gestão de músicas
Route::get('/api/song', 'MusicController@lista');
Route::delete('/api/song/{id}', 'MusicController@remove');

//Api para gestão de arquivos
Route::post('/api/song', 'FileController@saveSong');
Route::get('/api/song/{name}', 'FileController@getSong');
Route::get('/api/art/{name}', 'FileController@getArt');