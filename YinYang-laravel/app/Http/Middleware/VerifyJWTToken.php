<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

;


class VerifyJWTtoken
{

    public function handle(Request $request, Closure $next)
    {
        if($token = JWTAuth::gettoken()) {
            if (JWTAuth::check()) {
                $payload = JWTAuth::getPayload($token)->toArray();
                $request->merge(["token"=>$payload]);
            } else {
                return response()->json(["message" => "Token Invalido"]);
            }
        }
        return $next($request);
    }
}