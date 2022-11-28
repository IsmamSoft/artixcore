@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Write</div>
                <form action="" method="POST" enctype="multipart/form-data">
                @csrf
                <textarea class="form-control" rows="15" name="editor"></textarea>
                <div class="card-footer">
                    <button type="submit" class="btn btn-outline-success">Submit</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</div>

@endsection
