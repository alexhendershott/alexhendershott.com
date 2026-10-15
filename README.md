# alexhendershott.com

Plain HTML blog on GitHub Pages. No build step (`.nojekyll` turns Jekyll off).

- `index.html` is the homepage and post list (newest first).
- `posts/<slug>.html` is one post, served at `/posts/<slug>`.
- `images/<slug>/` holds that post's photos.
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
</head>
<body>
<main>
<header class="site"><a href="/">Alex Hendershott</a></header>
<article>
<h1>TITLE</h1>
<p class="meta"><time datetime="2026-10-15">October 15, 2026</time></p>
<p>Body text.</p>
<section class="photos">
<figure><img src="/images/SLUG/1.jpg" alt="DESCRIPTION" loading="lazy"><figcaption>Optional caption</figcaption></figure>
</section>
</article>
</main>
</body>
</html>
```

## Tracking

`t.js` sends one beacon per page view (path, referrer host, screen width, a random visitor id) to a Google Apps Script web app in Alex's Google account, which appends a row to a Google Sheet and serves a private dashboard. No cookies. Visit any page with `?notrack` to exclude your own browser (`?track` turns it back on).
