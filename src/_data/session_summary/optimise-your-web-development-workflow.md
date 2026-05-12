## DevTools Tips and what we'll cover ([0m13s](https://www.youtube.com/watch?v=N33lYfsAsoU&t=13s))

Umar Hansa opens by introducing the *Dev Tools Tips* weekly newsletter (121 instalments and counting), then lays out the talk as a story-shaped tour through Chrome DevTools — CSS, animation, performance, workflow, and a final "extras" reel of features only announced this week.

> "I've recently hit the 120 tip milestone last week. I'm actually on 121, posted one this morning"

> "I'm trying to tell stories here rather than just hey click this button and then this thing happens"

> "there are 100 slides to get through at least, so got to move on"

## CSS editing in DevTools ([2m45s](https://www.youtube.com/watch?v=N33lYfsAsoU&t=165s))

The familiar add-a-property workflow is now joined by an element-class toolbar with auto-suggested selectors from your stylesheet, plus visual editors for box-shadow and text-shadow whose handles double as a live cheat sheet for which value is which.

> "Canary will now start extracting selectors from your stylesheet and be like 'oh, you're using Bootstrap, I see you've got these classes available, let me auto-suggest them for you'"

> "I always forget what's the y-offset, what's the spread... having this visual editor where you can drag stuff around and see the values that it's impacting — very useful"

> "the layout editor... I think it's super revolutionary, I think it could really change the way people make websites"

## Animation and bezier editors ([4m50s](https://www.youtube.com/watch?v=N33lYfsAsoU&t=290s))

Opening the Animations panel sets it listening for animations on the page; once recorded you can scrub through them, drag the keyframe handles to retime them, and use the inline cubic-bezier editor to dial in a custom easing visually instead of guessing the four numbers.

> "the very act of opening that pane up causes it to listen for animations"

> "you click on it and then you get all these tiny little handlers, you can actually drag those around and that will in turn write to the styles pane"

> "this means you can sit with a designer who might want to customize one of the presets and you can actually figure out an animation that works for you"

## Performance: FPS, paint and line-level profiling ([7m23s](https://www.youtube.com/watch?v=N33lYfsAsoU&t=443s))

DevTools' performance surface has expanded from network waterfalls into a full toolkit: an always-on frames-per-second meter, a paint profiler that shows the draw calls the browser makes for any element, and CPU throttling combined with the timeline to highlight exactly which line of JavaScript is slow.

> "no matter who you are, you could be a product person, QA, you can start doing the action... and you can actually prove whether or not it is slow"

> "you can throttle the CPU, so you can say hey pretend that I'm on a low-end device"

> "DevTools will annotate the code for you and be like 'hey, this line took this long, that line took that long'"

## Console.time and performance.mark ([12m26s](https://www.youtube.com/watch?v=N33lYfsAsoU&t=746s))

For finer-grained measurement, `console.time` and `console.timeEnd` print durations to the console, and `performance.mark` and `performance.measure` plant labelled checkpoints that show up as named bars in the Timeline panel — much more useful when your real app produces a "rainbow of visualisations".

> "I like to think about performance.mark is like a little checkpoint... like a little save checkpoint in a game"

> "the width of this bar represents the length of time that network request took"

> "if you try this on your own website you'll get this like rainbow of visualizations in the timeline panel"

## Workspaces 2.0 — DevTools as your editor ([14m59s](https://www.youtube.com/watch?v=N33lYfsAsoU&t=899s))

The Workspaces flow used to require a manual network/filesystem mapping; the brand-new Workspaces 2.0 reduces it to dragging a folder into Sources, granting write permission, and saving the file directly with Cmd-S — including SASS, with Grunt or Gulp recompiling in the background.

> "trust me, I did this demo yesterday and the workflow that I had to go through was a lot clunkier... now you just drag the folder you want and DevTools will actually... make the mapping"

> "in the past you had to go through this ridiculous network filesystem mapping and it wouldn't work otherwise"

> "there's actually a history panel in DevTools which can tell you exactly what changes you've been making"

## Customisation and console power-ups ([19m44s](https://www.youtube.com/watch?v=N33lYfsAsoU&t=1184s))

Cmd-Shift-P opens a command palette that lets you trigger any DevTools action by name (including the now-stable dark theme); the console understands multi-line input automatically, supports `Cmd-D` multi-cursor editing of identifiers, and continuously compiles your input against V8 in the background so you see syntax errors before you press return.

> "you can type in larger than 20 kilobytes and it will actually filter for you... what's nice is you can also negate that filter query"

> "you're just hitting enter each time... it actually figures out that you're midway through a function"

> "DevTools actually proactively compiles that, it sends it to the V8 engine and it's like 'is this JavaScript legit, has it got errors'"

## CSS coverage and request blocking ([24m48s](https://www.youtube.com/watch?v=N33lYfsAsoU&t=1488s))

Two underused features: right-clicking any network request lets you block a single URL (or a wildcard pattern) for the next reload, while CSS Coverage records as you interact with the page and then annotates the unused chunks of every stylesheet right in the source gutter.

> "do you know what, just everything in assets please don't load"

> "see how your page performs... try blocking your JavaScript, try blocking your CSS"

> "DevTools will actually annotate for you in the gutter and say 'hey, this chunk of CSS was not used'"

## A terminal in DevTools and live Node.js debugging ([26m49s](https://www.youtube.com/watch?v=N33lYfsAsoU&t=1609s))

Two newly-discovered experiments wrap up the talk: an actual integrated terminal accessible from a hidden experiment, and Node 7's `--inspect` flag that connects Chrome DevTools straight to a Node process, complete with breakpoints, live source editing and `Cmd-S` to push the patched function back into the running process.

> "the dev tools commits like you do on a Friday evening — I happened to see this"

> "this is like live debugging of Node.js code through Chrome DevTools — there's no like extension like you would have to use in the past"

> "Cmd-S, undo the breakpoint, resume script execution, go back to the browser, and there's the image"

---

Umar Hansa pulls a hundred-slide magic show out of Chrome DevTools, and every trick is one you can use tomorrow. He drags box-shadow handles, retimes animations on a draggable bezier, throttles the CPU to find the exact slow line of JavaScript, and plants `performance.mark` checkpoints that bloom into rainbow timelines. Then comes the workflow leap: Workspaces 2.0 turns Sources into a real editor, Cmd-Shift-P unlocks every command by name, CSS Coverage exposes dead styles, and Node 7's `--inspect` flag lets you live-patch a running server. DevTools is quietly becoming a browser-shaped IDE, and this is your map.
