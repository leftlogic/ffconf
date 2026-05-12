## Demoscene, P01, and what's coming ([0m18s](https://www.youtube.com/watch?v=OT-Dc4nJKEo&t=18s))

Mathieu Henri introduces himself as a 32-year demoscene veteran whose JavaScript art usually fits in 64 bytes to 4 kilobytes, and signals that the talk is about demystifying creative coding so the audience can take it home.

> "the demoscene... is a group of people who for about 32 years now is trying to push the technical and artistic limits of any platform that they touch"

> "I also do a lot of creative coding... it's a practice of making art with code"

> "today I would like to demystify this craft and to see you bring your ideas to life with code"

## Phantom Terrains: data hidden in the air ([1m53s](https://www.youtube.com/watch?v=OT-Dc4nJKEo&t=113s))

He opens with someone else's project — Frank Swain and Daniel Jones' *Phantom Terrains* — a hearing-aid Geiger counter for Wi-Fi networks that turns invisible RF signals into clicks, as proof that creative code is fundamentally about exposing what is already there.

> "it's essentially a Geiger counter for Wi-Fi networks"

> "this project is really beautiful because it shows a hidden side of the data that is all around us"

> "we can do similar things, similar pieces of art with JavaScript — we can exploit data and code in new ways"

## The creative mindset: abusing standards ([2m54s](https://www.youtube.com/watch?v=OT-Dc4nJKEo&t=174s))

The recurring theme: pick a single primitive, embrace approximations, and read every standard for the corners you can re-use in a way it wasn't designed for — a 56-byte diagonal maze using a zero-width space to break lines being the first demonstration.

> "it's all about knowing the standards and abusing them"

> "as much as possible I try to use a single primitive and one formula to drive the visuals and the sound"

> "there is a zero-width white space which you don't see... this zero-width white space allows the stream of diagonals to actually have some space"

## Trigonometry and IEEE 754 approximations ([4m58s](https://www.youtube.com/watch?v=OT-Dc4nJKEo&t=298s))

The "things in circles" you need for animation can rely on the elementary-school approximations (7π ≈ 22, 1 ≈ π/3) over short loops, and incrementing by a power-of-two fraction like 0.125 keeps a `for (i = 0; i < 10; i += 1/8)` loop exact instead of drifting to 9.999.

> "trigonometry, which is a big word to talk about things moving in circles"

> "if you do a loop from 0 to 10 with an increment of 0.1... I is not equal to 10, it's equal to 10.0999999"

> "if we use an increment that is a fraction of a power of two, all the numbers along that loop can be expressed exactly"

## A faster colour wheel ([8m06s](https://www.youtube.com/watch?v=OT-Dc4nJKEo&t=486s))

`hsl()` makes lovely time-varying palettes but is expensive to parse — and the trick is to recognise that an HSL spin is just three sinusoidal RGB channels offset by a third of a circle each, which is roughly an order of magnitude faster.

> "it's a bit difficult for browsers to parse, and if you have a thousand items or a thousand elements that need a color per frame on a powerful computer you can easily count 10 milliseconds just to do that"

> "when we were spinning along a color wheel it's actually a composition of three wheels of the RGB components just shifted by one-third of the circle"

> "it's an order of magnitude faster... it's a little bit bigger but it doesn't matter because it's so much faster"

## Cheap motion blur and Canvas glow ([9m07s](https://www.youtube.com/watch?v=OT-Dc4nJKEo&t=547s))

Two tiny cheats that punch above their weight: instead of clearing the canvas with opaque black between frames, paint a 10% black rectangle over the previous frame; for "glow" use Canvas `shadowBlur`, which is misnamed since it really just draws the same shape blurred.

> "the easiest way is, instead of drawing a full black rectangle on top of your animation, just draw [a] black rectangle at 10%, and that way you just have some left over from the previous frame"

> "super simple, super cheap, it just works"

> "shadow blur is named Shadow but it's not about shadow — it's about drawing the same shape but blurry"

## Procedural sound on the web ([10m09s](https://www.youtube.com/watch?v=OT-Dc4nJKEo&t=609s))

Two routes to runtime audio: stuff a synthesised WAV header into a data URL on an `<audio>` element (~180 bytes), or use a Web Audio `ScriptProcessorNode` whose `onaudioprocess` event hands you a buffer to fill — and which doubles as a frame timer for visuals.

> "the audio element... can only load a sound and play and pause"

> "the audio context, we can create a script processor... it gets an audio process event whenever the audio context needs a new chunk of sound to be processed"

> "if you already use the audio context, you can abuse the audio process event to actually hit two birds with one stone — you can render the sound but you can also render the visuals"

## Live-coding a Game of Life with sound ([13m14s](https://www.youtube.com/watch?v=OT-Dc4nJKEo&t=794s))

The bulk of the talk is built in front of the audience: a 2D-canvas Game of Life inside a Petri dish with twelve glowing neon columns scoring the population density, a hi-hat, crash and arpeggiated flute synthesised in the `onaudioprocess` callback, and a final screen-shake driven by the same audio samples.

> "I will use the audio context way... I can generate sound all the time continuously, and it's also easier to be in sync with the visuals"

> "we will flip a cell at a random position in our dish... and that way the life comes to life right away"

> "since we have the audio data, we can also use them to shake the screen"

## Why bother? ([42m38s](https://www.youtube.com/watch?v=OT-Dc4nJKEo&t=2558s))

The closing argument has two halves: why live-code (to show that with small tools and a few concepts the audience can also make shiny things), and why creative-code at all (instant feedback, real learning, and the discipline of structuring code so a "silly" project actually finishes).

> "it's damn fun"

> "creative coding is super rewarding — you just code and you have instant feedback of what you're doing"

> "working on this silly projects you learn how to structure your code... and it also teaches you how to focus on solving the right problem"

---

Mathieu *P01* Henri turns three decades of demoscene practice into a plain-language guide to creative coding in a few hundred bytes. The first ten minutes are a string of cheats that add up to a philosophy: 22/7 for π, power-of-two fractions that keep loops exact, an HSL-to-shifted-RGB swap that runs an order of magnitude faster, and a 10%-alpha rectangle that fakes motion blur for free. Then Web Audio's ScriptProcessorNode becomes both synth and frame clock, sharing one *time* variable. The half-hour finale is live-coded Game of Life with neon meters, an arpeggiated flute and audio-driven screen-shake. It is damn fun.
