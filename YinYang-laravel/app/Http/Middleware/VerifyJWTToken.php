<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;;


class VerifyJWTtoken
{

    public function handle(Request $request, Closure $next)
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['message' => 'Usuário não encontrado'], 404);
            }
        } catch (TokenExpiredException $e) {
            return response()->json(['message' => 'Token expirado'], 401);
        } catch (TokenInvalidException $e) {
            return response()->json(['message' => 'Token inválido'], 401);
        } catch (JWTException $e) {
            return response()->json(['message' => 'Token ausente'], 401);
        }

        $request->merge(['token'=>$user]);
        return $next($request);
    }
}