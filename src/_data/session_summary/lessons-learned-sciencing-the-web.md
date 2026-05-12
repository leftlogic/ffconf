## What slows mobile down ([0m01s](https://www.youtube.com/watch?v=d2VffguHkt4&t=1s))

Addy Osmani opens with the framing that the device in your user's pocket is now the resource-constrained one, and that "load everything before showing anything" is the unsustainable default the web has been built on.

> "the way that the web has been historically constructed for mobile is unsustainable, in my opinion"

> "we've generally been loading everything for our users before sharing anything"

> "the biggest change that I think we could all be making is actually loading only what we need when we need it"

## Gary, RAIL and time-to-interactive ([2m32s](https://www.youtube.com/watch?v=d2VffguHkt4&t=152s))

Meet Gary, a user on slow 3G watching a Tamagotchi load faster than your page. The RAIL model's old "1000 ms to render" goal doesn't survive mobile networks — *time to interactive* is the metric to actually optimise for, ideally five seconds first-visit, two seconds with a service worker.

> "would it have been better for me to try loading up this experience on a more powerful device, like a Tamagotchi"

> "a good goal for time-to-interactive... is trying to make sure the user can actually interact with UI elements in about five seconds"

> "if you're using a service worker, it's generally good to try getting it interactive in about two seconds on your repeat visits"

## Sciencing the web with the Chrome User Experience Report ([7m08s](https://www.youtube.com/watch?v=d2VffguHkt4&t=428s))

The new Chrome User Experience Report exposes anonymised real-user metrics — first paint, first contentful paint, effective connection type — as a queryable BigQuery dataset, so you can find out things like "most BuzzFeed users on mobile are actually on 4G" without instrumenting your own RUM.

> "we announced the Chrome User Experience Report. The idea here is that this is a public dataset that captures key user experience metrics from real-world conditions using real Chrome users"

> "in Chrome 62 we introduced effective type, which uses a much, much better network estimation quality indicator based on round-trip values and downlink values"

> "you, who may not have instrumented this stuff using RUM, could discover this using the Chrome User Experience Report"

## JavaScript parse cost and the PRPL pattern ([9m13s](https://www.youtube.com/watch?v=d2VffguHkt4&t=553s))

10% of the top 500K sites ship a megabyte of JavaScript and the same megabyte costs an iPhone 8 a couple of seconds and a Moto G4 nine extra seconds *just to parse*. PRPL — Push minimum, Render, Pre-cache, Lazy-load — is the response, and the run-time tools show how dramatically it changes parse-time profile.

> "if we want them to be fast, we need to be fast at both fetching that JavaScript so the network transmission cost, but we also need to be fast at parsing and compiling that code"

> "compare that to the Moto G4, which takes an additional nine seconds — that's nine seconds just being spent still parsing that code"

> "just by making sure that their tooling is using PRPL... they're able to spend a minimal amount of time parsing code so that they can actually get interactive more quickly"

## Code coverage and bundle splitting from game devs ([13m17s](https://www.youtube.com/watch?v=d2VffguHkt4&t=797s))

DevTools' new code-coverage panel shows that the top 50 sites use under 40% of the JavaScript and CSS they ship — even thirty seconds in to the user's session. Game developers solved this years ago with bundle-on-demand, and webpack 1/2/3 all support the same pattern via dynamic imports.

> "removing unused code can reduce your network transmission time, your CPU-intensive code parsing time, and your memory overhead"

> "shipping down and using less than 40% of the code that they were making you load"

> "instead of shipping down like a whole pizza's worth of JavaScript to your users, just shipping down a slice and lazy-load the additional pieces as needed"

## Pinterest, Tinder and performance budgets in production ([15m22s](https://www.youtube.com/watch?v=d2VffguHkt4&t=922s))

Pinterest's new PWA dropped from 23 seconds to under 6 to first interactive and from 620KB to 150KB in JavaScript. Tinder used per-bundle performance budgets (vendor, async, CSS) and React Loadable for route-based splitting to drop their load time from 12 seconds to under 5.

> "their JavaScript bundle costs went down all the way to 150 kilobytes from 620"

> "they used Webpack's bundle analyser to discover that if they shifted some of that duplicate code... they could actually overall save quite a lot of time"

> "for their vendor bundles... their synchronous bundles... anything that's being lazily loaded in, their CSS. They also took advantage of route-based code-splitting"

## Caching, preload and resource hints ([17m57s](https://www.youtube.com/watch?v=d2VffguHkt4&t=1077s))

Chrome's average JS cache-hit rate is only around 50%. Twitter Lite's repeat-visit load times dropped from 6s to 1.5s on a service-worker-backed cache. And `<link rel="preload">` is the right tool when you know a critical resource will be discovered late — BBC News preloads its stylesheet, Twitter Lite preloads its webpack bundles for a 36% TTI improvement.

> "for JavaScript, it's not in a great place — in many cases we're actually getting about a 50% cache hit rate"

> "by preloading their core webpack bundles, their JavaScript bundles, they were able to improve how quickly they were able to get interactive by 36%"

> "use ETags... identify resources that can be cached by intermediaries like your CDNs... consider a service worker for more control if you need it on repeat visits"

## HTTP/2 Server Push vs preload ([25m10s](https://www.youtube.com/watch?v=d2VffguHkt4&t=1510s))

Server Push can cut out an entire round-trip but it isn't cache-aware, can over-push into a user's existing cache, and the Polymer Shop pattern uses cookies-plus-service-worker to compensate. Preload is cache-aware, cookie-aware, cross-origin, and has fewer cross-browser bugs — usually the simpler choice.

> "H/2 Server Push is not cache aware. So there are many cases where you can accidentally end up pushing things into the user's cache that they may already have, wasting those precious bytes on their data plan"

> "although the perfect preload might be a little bit slower than the perfect H/2 Server Push, it's easier to debug and it's something that's also easier to reason about"

> "this is something that you really need to be careful with"

## Compression, web fonts and image quality ([28m42s](https://www.youtube.com/watch?v=d2VffguHkt4&t=1722s))

30% of the web still doesn't compress its assets at all; Brotli saves Google Play 1.5 petabytes a day. For web fonts, `font-display: optional` and `<link rel="preload">` give you a clean fallback story. For images, MozJPEG and Guetzli, plus Cloudinary-style CDNs, plus quality 80 (not 100) is plenty.

> "30% of the web is not sending down compressed content, because they're not taking advantage of gzipping or Brotli or any of those other compression mechanisms"

> "Brotli Quality 11 can give you a really, really nice sweet spot... Google Play was able to save 1.5 petabytes a day by switching over to Brotli compression"

> "quality 80 is actually pretty fine for the web for most cases"

## Monitor: a 170KB budget and team accountability ([38m22s](https://www.youtube.com/watch?v=d2VffguHkt4&t=2302s))

If you want time-to-interactive under five seconds on average Android over 3G, you have about 170KB of total transferred bytes to play with — and bytes aren't equal, JavaScript is byte-for-byte the most expensive resource a browser has to fetch. Calibre, SpeedCurve and bundle-size keep the rest of the team honest on every pull request.

> "that leaves us with 3.4 seconds to ship down what's effectively 170 kilobytes' worth of overall code"

> "bytes are not equal. Byte for byte, JavaScript is probably the most expensive resource a browser has to fetch"

> "BundleSize is great for your pull requests if you wanted to make sure that your team are held accountable for every addition they're making to the experience"

---

Addy Osmani delivers the densest, most reference-friendly mobile-web performance talk of 2017, anchored to a *Measure, Optimise, Monitor* loop and stacked with production case studies. Meet Gary on slow 3G watching your megabyte of JavaScript cost a Moto G4 nine extra seconds just to parse. Then watch Pinterest drop from 23s to under 6s, Tinder from 12s to under 5s, and Twitter Lite cut repeat visits to 1.5s with a service worker. Every technique — PRPL, code coverage, route-based splitting, preload, Server Push, Brotli, quality-80 JPEGs — comes with the before-and-after number. The discipline at the end is sharp: a 170KB total-byte budget and BundleSize gating every pull request.
