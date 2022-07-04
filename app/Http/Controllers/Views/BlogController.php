<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\Rules\Exists;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index($slug)
    {
        $exists = Blog::where('slug', $slug)
            ->count();

        if (!$exists) {
            abort(404);
        }

        $blog = Blog::query()
            ->with(['comments' => function ($query) {
                $query->latest();
            }, 'comments.user', 'comments.user.image', 'user'])
            ->where('slug', $slug)
            ->first();

        $tagIds = $blog
            ->tags[0]->pivot->pluck('tag_id');

        $related = Blog::query()
            ->where('slug', 'not like', $slug)
            ->with(['tags', 'image'])
            ->whereHas('tags', function ($query) use ($tagIds) {
                $query->whereIn('blog_tag.tag_id', $tagIds);
            })->latest()->limit(6)->get();

        if (!Cache::has('randomArticles')) {
            Cache::put('randomArticles', Blog::query()->where('slug', 'not like', $slug)->with('tags')->inRandomOrder()->limit(10)->get());
        }

        $random = Cache::get('randomArticles');

        return Inertia::render('Views/BlogView', [
            'blog' => $blog,
            'coverImagePath' => $blog->image->path,
            'related' => $related,
            'random' => $random,
        ]);
    }
}
