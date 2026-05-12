## Box alignment and CSS Grid ([0m40s](https://www.youtube.com/watch?v=uXYZbLT0j9c&t=40s))

Rachel Andrew opens with the unglamorous-sounding *Box Alignment Level 3* spec — the one that lifts Flexbox's `align-items`, `justify-content` and friends into a separate module so they can be reused — and uses it as the bridge into the CSS Grid Layout specification, which she'll spend the next ten minutes on.

> "for a very long time vertical centering has been the hardest problem in web design"

> "what the box alignment specification does is it takes all of those neat alignment properties, puts them into a separate specification"

> "Grid brings us a fit-for-purpose layout method for the first time, and it's designed to work alongside flexbox"

## minmax and resilient real-world layouts ([5m44s](https://www.youtube.com/watch?v=uXYZbLT0j9c&t=344s))

The `minmax()` track-sizing function is the heart of why Grid stops the "designer wanted a tidy row of boxes; CMS gave us a 600-word paragraph" disasters — set a sensible minimum for visual rhythm and `auto` for the maximum so the whole row stretches gracefully when one cell has too much content.

> "minmax is the secret to getting these kind of layouts to work in a really robust way using grid"

> "even if we've just got a little heading in that box, it'll still be 150 pixels tall... but then we're saying the maximum size is auto"

> "you're building things that have content that comes from all over the place that we don't have control of"

## Grid auto placement and dense packing ([9m16s](https://www.youtube.com/watch?v=uXYZbLT0j9c&t=556s))

Once items declare how many tracks they span, Grid lays them out for you — and `grid-auto-flow: dense` will go back and fill in the holes left when a too-large item couldn't fit, which is great for image grids and terrible for forms.

> "grid is doing its auto-placement thing... it sometimes comes to a point where we've got a block which is too big to fit on the end of that row"

> "if you've got a bunch of things that have no logical order, it is not so good for your form"

> "with great power, which grid and flexbox give us, there certainly comes some responsibility on our part... to ensure the accessibility of what we're doing"

## display: contents as a subgrid stand-in ([13m52s](https://www.youtube.com/watch?v=uXYZbLT0j9c&t=832s))

Grid currently only places direct children, but `display: contents` makes the container's box stop generating so its children become direct grid items of the grandparent — solving the common case of "I want these list items in my outer grid" without waiting for proper subgrid support.

> "things have to be a direct child of the element that we say display grid or display flex on for them to become part of that layout method"

> "the UL element is no longer in the DOM in terms of box generation, so the two LI elements are now treated as grid items"

> "I'd love to have proper subgrid support ultimately in grid layout, but I think a lot of common use cases will be solved by using display contents"

## CSS Shapes for non-rectangular content ([16m58s](https://www.youtube.com/watch?v=uXYZbLT0j9c&t=1018s))

`shape-outside` lets text wrap around a circle, ellipse or polygon instead of a rectangle (you do still have to float the thing), and pairs nicely with `clip-path`, which takes the same shape functions and clips the visible image to match — a clean progressive enhancement.

> "shapes lets us do is wrap text or whatever you like around things other than a rectangular shape"

> "you don't need to have an image in there — you can just float some generated content"

> "anyone who doesn't have shapes is going to get the square images. That's okay"

## Feature queries: modernizr in pure CSS ([20m03s](https://www.youtube.com/watch?v=uXYZbLT0j9c&t=1203s))

`@supports` lets you ask the browser whether it understands a specific property/value pair before you use it — and because it works in every recent browser, almost every shiny new CSS feature can be used today as a self-enhancing progressive enhancement.

> "feature queries — that's modernizr right there in your CSS"

> "the way to use this is to write CSS for your browsers that don't have support, then have your feature query, override anything that you've used... and then do your new shiny CSS"

> "it allows you to build these websites that basically enhance themselves as the platform improves without you doing anything"

## Initial letter and writing modes ([23m38s](https://www.youtube.com/watch?v=uXYZbLT0j9c&t=1418s))

`initial-letter` finally gives us proper magazine-style drop caps that span a configurable number of lines, while `writing-mode` is much more than an internationalisation tool — flip a heading on its side for a vertical sidebar layout in a handful of CSS declarations.

> "despite the fact that we've got this first-letter pseudo-class, it's quite difficult to get a good drop caps effect"

> "I'm targeting the paragraph directly after an H1 and setting the initial letter of that paragraph to bold... four lines tall"

> "where it's quite useful is things like... how could I create this application layout with buttons that run down the side of my screen?"

## Custom properties and calc() ([27m43s](https://www.youtube.com/watch?v=uXYZbLT0j9c&t=1663s))

CSS custom properties bring variables natively into the cascade (and run at the browser, not at compile time), and `calc()` covers the case preprocessors can't — mixing units, especially pixels and percentages, so the maths happens once the user's screen size is actually known.

> "CSS is now bringing variables actually into native CSS with custom properties"

> "where it doesn't work so well is if you want to take, say, an absolute size like a pixel size away from something flexible because the pre-processor doesn't have the context"

> "one of the reasons to use calc is that you can mix variables of mixed length units"

## position: sticky and scroll-snap ([30m45s](https://www.youtube.com/watch?v=uXYZbLT0j9c&t=1845s))

Two ergonomic patterns CSS is taking back from JavaScript: `position: sticky` for navigation that pins to the top of the viewport as you scroll past it, and the *Scroll Snap* spec for app-style image slider snapping — both fully polyfillable on browsers that don't support them yet.

> "sticky positioning is something we've done with JavaScript"

> "scroll snapping is this thing where if you're scrolling through some sort of interface... as you get over a certain point it snaps to the next screen"

> "the spec very recently changed, so the code that works in browsers is now different to the code which actually will update ultimately when they're following the spec"

## Engage with browser vendors and the CSSWG ([34m56s](https://www.youtube.com/watch?v=uXYZbLT0j9c&t=2096s))

Closing message: every feature in the talk landed because somebody asked for it, so use User Voice for Edge, write up your use cases on Medium or your own blog, and now that the CSS specs all live on GitHub, file issues directly against the working group's repos.

> "as web developers, we can encourage browser vendors to give us the things that we want — we need to get out there and tell them we want the features"

> "write up your use cases — say this is why I need this, not just because it's a really neat feature, but because it's going to solve this thing in the type of thing that I have to build"

> "all of the specifications for CSS are now on GitHub just like any open source project — you can search the issues"

---

Rachel Andrew runs a whirlwind tour through the CSS features that finally make the web bend to design instead of the other way around. She uses Grid's `minmax()` to tame unpredictable CMS content, leans on `display: contents` as a poor man's subgrid, and pulls editorial tricks out of CSS Shapes, `initial-letter` and `writing-mode` that escape the rectangle for the first time in years. `@supports` is the secret sauce — every shiny feature becomes a safe progressive enhancement. Custom properties, `calc()`, sticky positioning and scroll snap round it out, with a rousing call to file issues directly against the CSSWG on GitHub.
