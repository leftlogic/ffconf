## Animation isn't sparkles ([1m03s](https://www.youtube.com/watch?v=31YlV-oMAw4&t=63s))

The speaker opens by pushing back on the idea that animation is a "nice-to-have" that drops out of the budget first — good animation requires thinking about *who* you are building for and *what goal* the animation serves.

> "people think of web animations more like a 'nice to have' addition, like the colours and sparkles added on top of a project"

> "just because a lot of projects don't prioritise animation doesn't mean animation is without value"

> "if your animation is aimed at a younger person it can add intuitive interactions... but maybe you're building an interface for an elderly person and maybe too much motion might be distracting"

## Four properties to animate cheaply ([3m07s](https://www.youtube.com/watch?v=31YlV-oMAw4&t=187s))

The four browser-cheap animatable properties are translation, scale, rotation and opacity — and the difference between animating `left` and animating `transform: translateX()` is the difference between making the browser redo layout every frame and letting the compositor handle it.

> "we can animate positions, so transform translateX or translateY, we can animate scale... we can rotate elements, and then we can change the opacity"

> "the left property triggers layout"

> "the transform property is very powerful — you can also chain multiple different transforms, and the order matters"

## How the browser renders, and the `will-change` trick ([4m41s](https://www.youtube.com/watch?v=31YlV-oMAw4&t=281s))

The browser's pixel pipeline goes layout → paint → composite. Animate `width` and you pay all three; animate `background-color` and you skip layout; animate `transform` or `opacity` and you skip both. Promoting an element to its own layer with `will-change` or `translate3d` keeps an animated element from forcing redraws on its neighbours.

> "the most performant step is the composite step, where we have transform and opacity"

> "all of this has to happen in one frame — so if we take longer on the layout step, we're going to lose frames"

> "you shouldn't create too many layers, because each layer consumes memory... if you have hundreds of layers you might even crash your browser"

## DevTools for animation performance ([9m18s](https://www.youtube.com/watch?v=31YlV-oMAw4&t=558s))

The Performance tab and its CPU-throttling slider let you record an interaction, see paint flashing on the canvas, and compare scripting, rendering and painting time on a real Moto-class CPU rather than your fast laptop — yellow scripting bars or large render bars are the warning signs.

> "I can slow down the CPU... to test for mobile devices with slower CPUs"

> "turn on the paint flashing to see where problems are or maybe where elements are influencing each other"

> "if you have a lot of yellow, maybe you have very complex JavaScript that's not very performant; if you have a lot of rendering, maybe you're changing layout properties"

## Animation for orientation and transitions ([11m57s](https://www.youtube.com/watch?v=31YlV-oMAw4&t=717s))

Page transitions let the user re-orientate themselves in the information space when a new view is rendered, rather than forcing the brain to do a hard re-evaluation between two static states. Vue's built-in `<transition>` (with `mode="out-in"` and a name) gives you six lifecycle classes that map cleanly to CSS.

> "each time a new page is rendered the user must re-evaluate where they are and what has changed"

> "by making use of transitions like that we can help the user to re-orientate himself in the information space"

> "Vue offers six classes, three for enter and three for leaving — and these classes are defined over the name attribute in my transition group"

## Perceived performance and skeleton screens ([15m38s](https://www.youtube.com/watch?v=31YlV-oMAw4&t=938s))

Animated progress bars actually reduce *perceived* duration by 11% according to *Faster Progress Bars* — and once you cross five seconds of unannotated wait, Jakob Nielsen says the user disengages. Skeleton screens (Facebook, LinkedIn) and content-shaped loading animations hold attention until the real content arrives.

> "animated progress bars reduce the perceived duration by 11%"

> "0.1 seconds of wait time will feel instantaneous... one second of wait time, the user will feel the pause... five to ten seconds, it will be hard for the user to maintain attention"

> "the most popular example for this are skeleton screens — Facebook does this a lot, but also a lot of other applications show where content is going to be and then animate in the elements when they're loaded"

## The Web Animations API ([18m15s](https://www.youtube.com/watch?v=31YlV-oMAw4&t=1095s))

`element.animate(keyframes, timingOptions)` is the imperative API for the same engine CSS animations use, with the same keywords (`duration`, `iterations`, `direction`, `delay`, `endDelay`) — useful when you need precise, chained control, demonstrated through a loading-text reveal that animates an SVG `clip-path` and a cursor in lockstep.

> "we use the web animations API in JavaScript... we get an element with JavaScript and then we call the .animate function on this element"

> "the keyframes... can be an object, you'd say the CSS properties and you'd give them an array... and the timings object defines how fast my animation should run"

> "I'd animate a clipping element... I added an SVG element with my width and height, and it had a clip-path defined inside"

## WAAPI controls and the compositor thread ([22m29s](https://www.youtube.com/watch?v=31YlV-oMAw4&t=1349s))

`.animate()` returns an `Animation` object with `pause`, `play`, `cancel`, `reverse`, `playbackRate` and lifecycle callbacks — so you can let the user cancel a motion for accessibility, or chain `onfinish` into the next step. And like CSS animations, WAAPI runs on the compositor thread, so a stalled main thread doesn't visibly drop frames.

> "what I get with the Web Animations API are controls... I can pause an animation, I can play an animation, I can cancel an animation, which is great if people don't want to have animation for accessibility reasons"

> "your JavaScript is running on the main thread, but the Web Animations API and CSS animations, they can run on the compositor thread"

> "if I add JavaScript stalling in the top, then all the [JS animation] libraries kind of get more chunky, whereas the CSS animations API and the Web Animations API runs smoothly"

## Reactive animation with JS + CSS variables ([28m44s](https://www.youtube.com/watch?v=31YlV-oMAw4&t=1724s))

Setting a CSS custom property from JavaScript (`element.style.setProperty('--x', value)`) and consuming it in `transform: translate3d(calc(var(--x) * 20px), ...)` lets you build mouse-driven parallax effects with no per-frame DOM manipulation — set the variable once on a parent and every child inherits it.

> "this is very useful to add more interactive animations"

> "we shouldn't set it at the body element but at the most specific level where we need it, because if we change this variable a lot it's going to cause style recalculations in all children that use this variable"

> "what's great about JavaScript and CSS variables is that they're quite easy to debug... we don't have excessive DOM manipulation"

## Good animation is invisible ([36m05s](https://www.youtube.com/watch?v=31YlV-oMAw4&t=2165s))

The closing thought, borrowed from Heather Daggett in Rachel Nabors' *Animation at Work*: users should only consciously notice an animation if you needed their attention at that moment — otherwise the right animation is the one they don't see.

> "users should only notice your animation if you need to attract their attention in that moment"

> "good animation often is invisible"

> "think about who you're building this animation for and why — what goal your animation has in the end"

---

Animation gets dismissed as decorative sparkles, and this talk methodically dismantles that view by anchoring every technique to the user and the browser. The primer covers the layout-paint-composite pipeline, the four cheap properties to animate, `will-change` layer promotion, and DevTools tricks for mid-range Android. The UX half marshals Chris Harrison's 11% perceived-duration drop, Jakob Nielsen's wait thresholds, skeleton screens and Vue transitions to argue animation is *perceived* performance, not polish. The closing third reaches for the Web Animations API and JS-driven CSS custom properties for reactive parallax, ending on the killer line: the most successful animation is the one nobody notices.
