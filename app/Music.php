<?php

namespace heroplayer;

use Illuminate\Database\Eloquent\Model;

class Music extends Model
{
  protected $fillable = [ 'id', 'title', 'author', 'art' ];
}
