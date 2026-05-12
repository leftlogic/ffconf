## When to use SVG ([2m26s](https://www.youtube.com/watch?v=3TP2UVkbGHs&t=146s))

Sara opens with two checkboxes she ticks in her head before reaching for SVG: is this artwork actually a good candidate for a vector format, and is the resulting file actually competitive on size with a well-tuned raster.

> "if you just want to display and you're not really short of SVG is a good format for that image those are almost on my follow photographs"

> "the default file size [was] sixty kilobytes which is too big so after optimising I couldn't reduce the file size by a lot"

> "if you have to choose between an SVG that is 60 kilobytes for example in size and 60 of PNG, you definitely choose the PNG"

## What SVG is genuinely good at ([4m28s](https://www.youtube.com/watch?v=3TP2UVkbGHs&t=268s))

Beyond display, SVG shines for icon systems, infographics with selectable text, animated illustrations, filter and blend effects, and any irregular shape that isn't a rectangle.

> "SVG is fantastic for infographics... the text up inside that infographics and research elective accessible it's one hundred percent real text"

> "Jake Archibald is a great example... he uses a lot of illustrations they're all SVG"

> "shapes that you create with SVG... if it's a heart or evaluate a star or a robot or whatever, these are not real shapes"

## Embedding techniques and their trade-offs ([7m31s](https://www.youtube.com/watch?v=3TP2UVkbGHs&t=451s))

There are seven ways to drop an SVG into a page, but each one supports a different subset of CSS animation, JavaScript scripting and interactivity, so the right choice depends entirely on what you want the SVG to do.

> "SVG because of its nature has both an image formats and the document format"

> "ask yourself is the SVG animated, is it interactive... if it has interactivity we cannot use the img tag"

> "sometimes you need to have to make compromises, it just is like that"

## Picking a fallback strategy ([10m38s](https://www.youtube.com/watch?v=3TP2UVkbGHs&t=638s))

For background images you can use the multiple-background trick — list the PNG first, then a comma-separated rule with the SVG — which works because every browser that supports SVG also supports multiple backgrounds.

> "first of all you're listing the PNG, not the SVG, and then you add the second declaration"

> "browsers that don't support SVG don't support multiple background images and they read the PNG at the top"

> "if you have data inside of that infographic, presenting that data in the table and converting that table as a fallback is a perfect way to do it"

## `<object>` is the favourite ([12m11s](https://www.youtube.com/watch?v=3TP2UVkbGHs&t=731s))

`<object>` is the most flexible option — cacheable, fully scriptable, animated, with a built-in fallback between the opening and closing tags — but it does need its own document context so scripts and styles must live inside the SVG or be referenced from there.

> "object is my favourite SVG embedding technique. It's also the most flexible one"

> "it comes with a default fallback mechanism between the opening closing tags"

> "if you have two SVGs inline in the same page, the styles in one are going to affect the elements in the other"

## CSS, SMIL or JavaScript ([17m22s](https://www.youtube.com/watch?v=3TP2UVkbGHs&t=1042s))

SMIL is deprecated in Chrome and never coming to Edge, so reach for CSS for the simple stuff that works almost everywhere, and JavaScript for anything serious — transforms, morphing, line drawing — that needs to behave consistently across browsers.

> "SMIL... there's no future plans to embed it in MS Edge so don't use it"

> "CSS is for any kind of simple animation in IE 9 and JavaScript for any kind of complex animation or serious animation"

> "transformations can use CSS, you can use JavaScript, but because of the bugs that I'm going to mention next I recommend using JavaScript"

## CSS transforms and the SVG origin trap ([22m25s](https://www.youtube.com/watch?v=3TP2UVkbGHs&t=1345s))

In HTML `transform-origin` defaults to the centre of the element, but in SVG it defaults to `0 0` of the entire canvas — and worse, chained percentage-based rotations jump back to the origin between each step rather than carrying the previous transform with them.

> "the default centre... in HTML... is fifty per cent by fifty per cent which is the centre of the element itself, but the default transform origin in SVG is 0 0"

> "if you have an SVG rectangle and an HTML rectangle... rotating both of them by 45 degrees, the HTML element rotates around its centre. This is the expected behaviour. In SVG, [it goes] over here"

> "the browser is going to jump back to the initial position, change the transform origin and then jump to the final position again"

## Sprite animations in SVG ([26m31s](https://www.youtube.com/watch?v=3TP2UVkbGHs&t=1591s))

Two flavours: use an SVG sprite-sheet as a CSS `background-image` and animate `background-position` with the `steps()` timing function, or stack the frames inside an inline SVG and pulse them one at a time with `opacity` keyframes.

> "the value that goes inside steps is the number of frames"

> "you wanted to move from this background position to this background position one step at a time, not transitioning a linear function"

> "you stack them on top of each other... each frame is animated independently but concurrently — they all start at the same time"

## Responsive SVG with `viewBox` ([33m21s](https://www.youtube.com/watch?v=3TP2UVkbGHs&t=2001s))

`viewBox` lets a single SVG carry multiple scenes that you crop into view as the screen size changes — think of the viewport as an `<iframe>` window and the `viewBox` as the page being shown through it.

> "you have to work with two coordinate systems... not just one"

> "think of an SVG as practically the same as an iframe — you can have a page that's really big but you can only show one small part through the viewport"

> "this is exactly almost exactly the same as object-fit and object-position"

## GSAP, line drawing and beyond ([42m10s](https://www.youtube.com/watch?v=3TP2UVkbGHs&t=2530s))

For any non-trivial work she reaches for GSAP — precise timelines, nested sequences, relative labels, and shape-morphing between paths with different numbers of points — and then closes with the stroke-dasharray/dashoffset trick for hand-drawn line animations.

> "GSAP... I'm not paid to say this. It's just a fantastic library. It gives you that little stash"

> "[GSAP] removes that restraint... the number of points in the first shape doesn't have to be the same as the number of points in the second"

> "you have a stroke and you just change the position of the stroke offset on the path"

---

Sara Soueidan turns SVG from a buzzword into a production decision tree, opening with the brutally honest take that a 60KB SVG simply loses to a 60KB PNG and walking through all seven embedding techniques alongside the specific compromise each one forces on you. The animation half is where the talk really earns its title, unpacking the *transform-origin* trap, the jump-between-steps bug and why JavaScript with GSAP is the realistic answer once things get ambitious. Sprite recipes, responsive *viewBox* tricks treated like an iframe, and the stroke-dasharray line-drawing finale send you back to your editor itching to animate.
