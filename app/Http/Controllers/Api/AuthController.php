<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    function register(Request $request)
    {
        // Validator
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email'  => 'required|email',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];
            return response()->json($response, 400);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        $success['token'] = $user->createToken('MyApp')->plainTextToken;
        $success['name']  = $user->name;

        $response = [
            'success' => true,
            'data'    => $success,
            'message' => "User register Successfully"
        ];

        return response()->json($response, 200);
    }

    function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            // $user = Auth::user();
            $user = $request->user();
            $success['token'] = $user->createToken('MyApp')->plainTextToken;
            $success['name']  = $user->name;
            $response = [
                'success' => true,
                'data'    => $success,
                'message' => "User register Successfully"
            ];
            return response()->json($response, 200);
        }
    }
}
