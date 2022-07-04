<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)

    {

        $search = $request->input('search');


        if ($search) {
            $blogs = Blog::where('published', true)
                ->where('title', 'LIKE', "%{$search}%")
                ->with(['tags', 'image'])
                ->latest('updated_at')
                ->paginate()
                ->withQueryString();
        } else {
            if (!Cache::has('blogs')) {
                Cache::put('blogs', Blog::where('published', true)->with(['tags', 'image'])
                    ->latest('updated_at')
                    ->paginate());
            }
            $blogs = Cache::get('blogs');
        }

        if ($request->wantsJson()) {
            return $blogs;
        }

        return Inertia::render('Views/Home', [
            'blogs' => $blogs,
            'filter' => $request->input('search')
        ]);
    }
}
