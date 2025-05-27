<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

abstract class BaseModel extends Model
{
    private $whmcs;

    public function __construct()
    {
        $whmcs = new \Whmcs();
    }
}
