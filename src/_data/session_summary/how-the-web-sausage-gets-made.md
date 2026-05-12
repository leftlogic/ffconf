## What's a web standard ([0m14s](https://www.youtube.com/watch?v=326SIMmRjc8&t=14s))

Monica Dinculescu opens by explaining her unusual path — backend developer, then Chrome's profile switcher, now the Polymer team — and signals that the talk is for people who don't know who actually decides what goes into the browser.

> "unless you get involved, it's gonna be all these neck beards on weird mailing lists proposing standards, and I don't think that's really cool"

> "as somebody who wasn't a web developer, I was like, the browser is what the browser is, it has some things"

> "we're gonna train the dragon web standard"

## 2010: throw jQuery at the wall ([2m50s](https://www.youtube.com/watch?v=326SIMmRjc8&t=170s))

The pre-web-components world: every developer copied three different versions of jQuery, a carousel from ExtJS, some Backbone for data binding and Bootstrap for buttons, and inside a big company every team built the same date picker over again.

> "sweet, another copy of jQuery, and maybe jQuery UI... and maybe some Backbone for data bindings, and Bootstrap because I don't really know how to style buttons"

> "all of these different teams at the same company would keep redoing the same thing"

> "the best thing you can do is just complain about it around browser people, because browser people love hearing about your problems"

## Why we standardise: railroads and hot-dog buns ([5m51s](https://www.youtube.com/watch?v=326SIMmRjc8&t=351s))

Standards aren't novel: in the 1800s every American railroad ran its own gauge until 10,000 workers re-laid the tracks across two days. Hot dogs, on the other hand — eight buns to six dogs — are the example of a standardisation that never happened.

> "before we had web standards... Netscape would implement a thing, it would have bugs, and all the other browsers would be like, well, shit, I'd better have the same bugs then"

> "in exactly two days, 10,000 workers updated every single track to the new standard gauge"

> "you always have more buns than dogs. Don't be like hot dogs"

## The cautionary tale of `<input type="date">` ([7m23s](https://www.youtube.com/watch?v=326SIMmRjc8&t=443s))

A standard that *is* shipped in every browser but is still terrible: Safari desktop has no implementation, the pop-up is unstylable, weeks can't start on Monday, weekends can't be hidden — and meanwhile every developer keeps re-implementing date pickers.

> "input type equals date got proposed in HTML5. And in theory, great idea. In practice, in 2017, it's still kind of a horrible experience"

> "you can't really do anything to it. And high-level APIs are very easy to use but very hard to configure"

> "we standardised the wrong thing — it was sort of like this symptom of a bigger problem"

## The Extensible Web Manifesto and low-level APIs ([9m25s](https://www.youtube.com/watch?v=326SIMmRjc8&t=565s))

In 2013 the *Extensible Web Manifesto* — a GitHub repo and a README — formalised the conclusion that browser specs should add low-level capabilities and let libraries build the high-level abstractions on top, with Service Worker and WebGL as the model examples.

> "this standards process should focus on adding new low-level capabilities"

> "high-level APIs are very easy to use but very hard to configure, so they're very unlikely to actually solve all of the problems that everybody has"

> "writing a Service Worker from scratch with no help is incredibly hard... but because it's such a low-level API you get to have these libraries and frameworks and tools that can build on top of it"

## Standardise ideas, not implementations ([14m33s](https://www.youtube.com/watch?v=326SIMmRjc8&t=873s))

The four rules for a good standards proposal: the browser already does it internally, the spec explains existing browser magic, it can be extended, and people have already used and liked it. Crucially, ideas not implementations — if we'd standardised Angular 1's two-way binding everywhere, "nobody would've been able to debug it ever".

> "we can't really take whatever is popular at the time"

> "the world actually looked really different back then — everything with MVC, do you remember MVC"

> "if we would have standardised whatever implementation we had at the time, it would have been like two-way binding everywhere in the browser, and nobody would have been able to debug it ever"

## What ended up in the web components spec ([17m07s](https://www.youtube.com/watch?v=326SIMmRjc8&t=1027s))

The web component model needed five things: useful lifecycle (constructors and connected-callbacks), extensibility (`extends HTMLElement`), implementation encapsulation (the open-sourced shadow DOM), a place to live (DOM tree), and a JavaScript class to back it.

> "the browser used to do this thing — we used to hide input and video's implementation in a browser, and then when we proposed this spec, you open-source that thing, and that thing was called the shadow DOM"

> "elements live in the DOM tree. It's really hard to propose a new tree unless you prove that the existing one doesn't work"

> "a video element... it's all encapsulated in a little tiny castle of joy"

## Why progress was so slow, and polyfills ([22m16s](https://www.youtube.com/watch?v=326SIMmRjc8&t=1336s))

Browsers are made by humans and there aren't many of them; the bigger blocker was the Catch-22 of the *people have used and liked it* rule — developers wouldn't adopt a standard before browsers shipped, browsers wouldn't ship without adoption. Polyfills are the way out, named after British wall filler.

> "browsers are made by humans. These humans have families, they have to go home sometimes"

> "people don't actually trust standards unless they're shipped on browsers... but on the other hand, browsers don't ship a standard until it's used by people"

> "we have no problem writing ES6 in our code and then using Babel to wish our fat arrows away so that it works on IE11, but all of a sudden, when we want to do the same thing for client features, we're incredibly worried"

## Who actually uses web components ([27m27s](https://www.youtube.com/watch?v=326SIMmRjc8&t=1647s))

Web components only became "real" in 2017 when two browsers shipped them and the rest committed. They aren't for every React developer — they're for big companies that span multiple frameworks, for component libraries that want to work everywhere, and for frameworks that want to stop re-inventing the date picker.

> "in 2014, two browsers shipped it — it was Chrome and Firefox. But the problem was, in 2014, Safari pinky-swore that they were never going to ship it"

> "after seven years of work, I really think web components are about six months old"

> "you might not actually need web components, and that's fine — not everything that we make has to be used by everyone"

## Get involved: WICG and democratising standards ([31m37s](https://www.youtube.com/watch?v=326SIMmRjc8&t=1897s))

The Web Incubator Community Group's discourse and GitHub are the front door to web standards now: post an idea, get help shaping it into an explainer, write a polyfill, iterate in the open — which is the only way we get out of the "twelve people on a mailing list" pattern.

> "I really want web standards to be more democratic — we need to stop being weirdos that just hang out in mailing lists"

> "an explainer for your thing — it doesn't have to be a spec, because a spec is a DSL for browser engineers to understand"

> "unless you care about shaping web standards, you're not gonna be able to shape the web platform"

---

Monica Dinculescu opens the kitchen door on the web standards process and shows you exactly how the sausage gets made, from railroad gauges and hot-dog buns to the seven-year saga of web components. The talk's spine is the *Extensible Web Manifesto*: standardise low-level capabilities like Service Worker and shadow DOM, not high-level APIs like `<input type="date">` that freeze a single moment's idea of correctness. She lays out the four rules a proposal needs to survive, explains why polyfills are how we break the chicken-and-egg loop, and ends on a generous invitation: the WICG is open, somebody is going to shape the platform of 2025, it might as well be you.
