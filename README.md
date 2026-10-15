# alexhendershott.com

Plain HTML blog on GitHub Pages. No build step (`.nojekyll` turns Jekyll off).

- `index.html` is the homepage and post list (newest first).
- `posts/<slug>.html` is one post, served at `/posts/<slug>`.
- `images/<slug>/` holds that post's photos.
- Photos: `NN.jpg` (max 1800px) plus `NN-t.jpg` thumbnails (640px), metadata stripped. `gallery.js` opens grid photos full screen.
- `style.css` is the only stylesheet. `t.js` is the page-view counter.

## New post

1. Copy the template below to `posts/<slug>.html`.
2. Add a line to the list in `index.html`.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>TITLE · Alex Hendershott</title>
<meta name="description" content="ONE-LINE SUMMARY">
<link rel="stylesheet" href="/style.css">
<script defer src="/t.js"></script>
<script defer src="/gallery.js"></script>
</head>
<body>
<main>
<header class="site"><a href="/"><img class="av" src="/images/avatar.jpg" alt="" width="36" height="36">Alex Hendershott</a></header>
<article>
<h1>TITLE</h1>
<p class="meta"><time datetime="2026-10-15">October 15, 2026</time></p>
<p>Body text.</p>
<section class="photos">
<h3>Group label</h3>
<div class="grid">  <!-- add class "two" for a 2-column grid -->
<a href="/images/SLUG/01.jpg"><img src="/images/SLUG/01-t.jpg" alt="DESCRIPTION" loading="lazy"></a>
</div>
</section>
</article>
</main>
</body>
</html>
```

## Tracking

`t.js` bumps a few public counters on [Abacus](https://abacus.jasoncameron.dev) (no account) per page view, in namespace `alexhendershott-com`: `total`, `d.YYYYMMDD` (views per day, Eastern time), `u.YYYYMMDD` (first view per browser per day), and `p.<path>` (views per page, e.g. `p.home`, `p.posts.my-post`). `/stats` reads them and draws the dashboard; it finds pages from the post list on the homepage. Nothing personal is stored and there are no cookies.

Visit any page with `?notrack` to stop counting your own browser (`?track` turns it back on). Counters expire after six months without a hit.
