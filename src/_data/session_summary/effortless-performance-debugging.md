## Setting up the perf audit ([1m01s](https://www.youtube.com/watch?v=YE3mNdxHfMY&t=61s))

Anna Migas opens with a Jekyll-built cat blog that loads fast locally but won't on slow devices. She turns on the Performance tab in Chrome DevTools and applies slow-3G plus 6× CPU throttling to simulate the reality most users have.

> "I am on localhost, and I'm using a Mac, so how could it be not fast?"

> "this is something that your client might be experiencing in their real life — people don't always have the perfect conditions"

> "I'm going to set the network to slow 3G and throttling to 6 times slowdown"

## Reading the timeline and the timings track ([3m05s](https://www.youtube.com/watch?v=YE3mNdxHfMY&t=185s))

The Performance tab's intimidating-looking output decomposes into the screenshot strip up top, the colourful flame chart of work done by the browser, and the *Timings* track that marks the key user-facing milestones — First Paint, First Contentful Paint, First Meaningful Paint and the onload event.

> "this timeline, down there, is only the scrolled-in parts of your timeline"

> "the timings will show us the metrics... how they progress for our page"

> "you actually see the lines in here — first contentful paint will tell us when the first thing, like text or image, was loaded"

## Cleaning up the network: priority, request blocking, defer ([11m29s](https://www.youtube.com/watch?v=YE3mNdxHfMY&t=689s))

Right-click the Network tab headers to add a *Priority* column so you can see what the browser is fetching first. A mysterious `fading_header` script turns out to be unnecessary on first paint — Request Blocking lets you confirm that without changing code, then a `defer` attribute on the script tag moves it out of the critical path.

> "if you do the right-click in here, you can add or remove some things from the statistics... I have one thing that is not here by default, which is priority"

> "what I can do is... Request blocking. Then I can add some pattern that will match what I want to basically block, and see if it's really needed"

> "we can just add the keyword called defer — that will tell the browser to defer a bit slowly of this resource"

## `font-display: swap` for fast text ([17m11s](https://www.youtube.com/watch?v=YE3mNdxHfMY&t=1031s))

The biggest perceived-performance win in the demo: the browser was hiding text while it waited for a custom font to download. Adding `font-display: swap` to each `@font-face` tells the browser to show the fallback immediately and swap in the custom font when ready.

> "the browser will wait with showing any text before [the custom fonts] are reloaded — and with this swap property, we're saying just put on any fallback font you have"

> "this was like the biggest performance bump that we had in this talk, basically — that the text is visible immediately"

> "in May, [Google Fonts] added an option to just pass this display swap as a parameter, which wasn't possible before"

## Intrinsic-ratio padding to prevent content shift ([22m22s](https://www.youtube.com/watch?v=YE3mNdxHfMY&t=1342s))

When images load late they push existing content down, so the reader loses their place. The fix: every image's container gets `padding-bottom` equal to the image's aspect ratio (in this case 67% for 467×700 photos), with the `<img>` absolutely positioned inside. The space is reserved before the bytes arrive.

> "we have our text, but then the images come in, and they are kind of shifting everything"

> "we might want to make sure that the content isn't shifted and just save some space for the images when they come in"

> "I'm going to use an intrinsic ratio trick... the proportion of the height to the width of our image"

## Lazy-loading images ([26m02s](https://www.youtube.com/watch?v=YE3mNdxHfMY&t=1562s))

She uses a small `lazyload` library that loads images when they come within 300px of the viewport — switching `src` to `data-src` on the lazy ones, leaving the above-the-fold image with a regular `src` and a `loading="eager"` opt-out. Chrome's native `loading="lazy"` attribute is a fallback when the library isn't loaded.

> "lazy loading is a thing that will basically make only a person download some images as they come closer to them on the page"

> "I have a lazy class added to each of the images, and if a post is supposed to be lazy-loaded, I'm using data-src instead of just like src"

> "Chrome released an option to have native lazy loading in the browser now... it's only in Chrome"

## Critical CSS for first paint ([34m06s](https://www.youtube.com/watch?v=YE3mNdxHfMY&t=2046s))

The page is blank for nearly a second while the external stylesheet downloads, even with everything else optimised. The one-off fix is to inline the *critical CSS* (the rules needed for above-the-fold content) into a `<style>` tag in the `<head>`, then defer-load the rest.

> "the browser will take some moment to download our style sheet"

> "we can use a critical rendering path, which will basically take a bit of a stylesheet that is needed to display anything"

> "then you can think of some longterm solution that will create this critical rendering paths for you"

## Interaction performance: jank and the three types of change ([37m12s](https://www.youtube.com/watch?v=YE3mNdxHfMY&t=2232s))

Switching from load-time to runtime performance: the browser has ~16ms per frame (actually closer to 10ms after cleanup) to maintain 60fps. CSS changes fall into three buckets — *layout* (geometry, forces neighbours to be recomputed), *paint* (background colour, image — repaints the element) and *composite* (transform, opacity — runs on the GPU on its own layer).

> "if it fails to serve the frames fast enough, then we are experiencing jank"

> "the bottom line is the less work we give to our browser to do upon interacting, the more likely we are to not experience the jank"

> "the compositing change... is the most performant change, because it's taking advantage of the GPU of our device"

## Layers and `will-change` ([41m59s](https://www.youtube.com/watch?v=YE3mNdxHfMY&t=2519s))

Compositor layers work like Photoshop layers — elements on different layers can move independently. The browser only promotes an element to its own layer when it has to, which causes a one-frame stutter on the first interaction. `will-change: transform` tells the browser to make the promotion permanent, eliminating that stutter.

> "you can think of layers a bit like layers in Photoshop... if you have something on one layer and another thing on another layer, it can move things around freely"

> "when the browser sees that something is going to be transitioned, animated, with transforms or opacity... it basically will try to pull this element out on another layer"

> "we can tell the browser explicitly — I think that this element is definitely going to be animated... so what we need to add is the will-change property"

## Empathy, throttling and WebPageTest ([47m11s](https://www.youtube.com/watch?v=YE3mNdxHfMY&t=2831s))

The closing reminder: layer count needs a budget too (three to five per page is plenty, more crashes phones), CPU throttling is how you experience the talk's slow-Mum's-phone reality, and Chrome DevTools is good but WebPageTest's real-device farm is often a better measurement than your fast laptop's Lighthouse run.

> "three to five layers per page is great — more than that can actually crash the browser for some less fortunate users with some older phones"

> "debugging performance takes a lot of patience from you, patience for the browser vendors, also a lot of empathy when you're trying to actually use these slowdown tools"

> "Chrome DevTools are not the only way to debug performance. Actually, I don't think even it's the best way"

---

Anna Migas takes a slow cat blog and live-debugs it into something genuinely fast, turning Chrome DevTools' most intimidating panel into a friendly checklist. She throttles the network and CPU first because that's how real people experience your site, then reads the Performance timeline like sheet music: screenshots, flame chart, Timings track. Out come the fixes — Request Blocking, `defer`, `font-display: swap`, intrinsic-ratio padding, lazy loading, inlined critical CSS — each measurably moving the needle. The final act covers the 16ms frame budget and the layout-paint-composite hierarchy, with `will-change` and a hard reminder: your laptop is not a test device.
