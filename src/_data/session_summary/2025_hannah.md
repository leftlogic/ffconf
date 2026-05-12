## Spot the difference: three buttons ([1m03s](https://www.youtube.com/watch?v=rOHLNP-_Oi0&t=63s))

Hannah opens with three apparently-identical buttons and the trick question that the talk will resolve: *which of these did the React team accept, which did they refuse, and which one made them angry?*

> "spot the difference — we will come back to this"

> "I do kind of regret calling it 'An Uncomfortable Place' after following those two talks that were kind of a lot more serious"

> "I'm talking about web components, which is like, you know..."

## Intapp: many products, many frameworks ([1m34s](https://www.youtube.com/watch?v=rOHLNP-_Oi0&t=94s))

Hannah is one of three UI engineers in Intapp's design-system team. Intapp acquires products constantly, so the front-end-framework mix is everything — and the biggest product team wants everyone to switch to React because *they* use it. Rebranding needs to happen fast across all of them.

> "we have a lot of different tech stacks knocking around... there's no kind of consistency"

> "the products we've had for the longest time are very strongly of the opinion that everybody should switch over to React because that's what they're using"

> "is there a way that we can provide coded component libraries for all of them, regardless of the framework that they're using?"

## What web components actually give you ([5m06s](https://www.youtube.com/watch?v=rOHLNP-_Oi0&t=306s))

Web components are based on existing web platform APIs and have been around for years. Custom elements (`<my-button>`), Shadow DOM (style encapsulation), HTML templates, and ES Modules (the import/export piece). The headline benefit: *framework-agnostic components built on browser standards.*

> "instead of just using the regular standard HTML tags like button, p, whatever, you can create your own"

> "the Shadow DOM basically encapsulates elements in a ShadowRoot, which means that you don't have the problem of styles leaking in and out"

> "framework-agnostic components built using existing browser standards — that's pretty great, that's kind of a win"

## React doesn't play nice — and the wrapper problem ([7m08s](https://www.youtube.com/watch?v=rOHLNP-_Oi0&t=428s))

Pre-React-19, React refuses to cooperate with web components. It assumes every attribute is a string. It ignores custom events. It misses state changes. Most of Intapp's teams are still on React 17 or 18. The fix is *framework wrappers*: write the web component once, and library tooling generates a per-framework wrapper. Lit, Stencil, Hybrids and Mitosis all do versions of this.

> "particularly pre-React 19, React doesn't play nice — it doesn't want to be taking web components, it just is not interested in them"

> "it's kind of rude really — it's just like 'no, it's not React, I'm not interested, I am not listening to that'"

> "we needed wrappers to make this work"

## Stencil: why we chose it ([10m43s](https://www.youtube.com/watch?v=rOHLNP-_Oi0&t=643s))

Stencil was originally designed for design systems and component libraries (tick one), has TypeScript support (tick two), and ships *output-target libraries* for different frameworks — React, Angular, Vue. The React output target is built on top of `@lit/react`, which Hannah notes is fun.

> "Stencil was originally created for design systems and component libraries — that was a big tick for us"

> "we were thinking about future-proofing at this point — are we gonna acquire other products that have other frameworks that we don't currently provide for?"

> "the React one is actually built off of the Lit React package, which I find quite interesting that it's sort of using another one of these things to do essentially the same thing"

## React developers really didn't like web components ([12m44s](https://www.youtube.com/watch?v=rOHLNP-_Oi0&t=764s))

The three-buttons reveal: the React team loved the *legacy hand-written React button*. They refused the *raw web component button*. They were *angry* about the Stencil-generated React wrapper — even though it was technically the same thing as button one — because it wasn't *actually* React. React developers are loyal to their framework and didn't want their components to be magic-imported from somewhere else.

> "they're really loyal to their framework"

> "they had very specific wrapper requirements — they wanted to memoise all of their components, they wanted to add refs on things, and we weren't getting that"

> "the human element in this was something a little bit unexpected for us within this research"

## A script that wraps the wrapper ([17m22s](https://www.youtube.com/watch?v=rOHLNP-_Oi0&t=1042s))

Rather than accept what Stencil's React output target gave them, the team wrote a post-build script that takes Stencil's React output and rewraps each component to match the React team's expectations: memoisation, refs, default-prop forwarding, per-component type files (rather than one big `components.d.ts`), and the type-safety polish Stencil was missing at the time. The script handled React 17 to 18 migration as a config flag — no rewrites required.

> "we don't just have to accept what we get from this output target package — we can script some stuff to make it better"

> "if I changed our component output to React 18, that it would still work for those 17 components — any tweaks that we needed to those wrappers, we could just do it in the script"

> "we wrote a script that took those outputted React components and then wrote, essentially, a wrapper for the wrapper"

## What we got, what we still struggle with ([23m04s](https://www.youtube.com/watch?v=rOHLNP-_Oi0&t=1384s))

A year in: components are written once as web components, the build emits a React package, packages stay in sync, and Angular teams can now ask for the same. The shortcomings: tests and Storybook stories still have to be written per framework (Claude helps but goes rogue); occasionally a component works as a web component but fails inside React; Stencil itself sometimes ships broken upgrades; and contribution from product teams is *harder* because contributors have to learn web-component syntax they didn't sign up for.

> "we are a team of three UI engineers, and we're trying to provide for a lot of different product teams — if we had to write and maintain components in all of the frameworks, it just wouldn't be possible"

> "Claude does go rogue and decide to rewrite a story in a completely off-base way sometimes — but it's AI, what can you do?"

> "contribution is a big ask anyway, it requires a lot of goodwill — if you are then saying, okay, you're gonna have to learn this whole new thing that you didn't sign up for, that's kind of a lot"

## Web components are the means, not the end ([28m40s](https://www.youtube.com/watch?v=rOHLNP-_Oi0&t=1720s))

Can you keep everyone happy with web components? No. The React superfans on the biggest product team will still grumble. But you can stop forcing every team to wait for you to rewrite everything in *their* framework — and the closing reframe is: *web components aren't the thing, they're the thing that gets us to the thing*.

> "can you convince React superfans that the components we give them are gonna be good enough? Well, potentially. We did sort of change opinions in some ways"

> "they aren't having those kind of big existential crises of, 'oh, if it's not actual React, then is it actual React?'"

> "web components aren't the thing — they're the thing that gets us to the thing"

---

Three visually identical buttons open the talk and the punchline cuts deep: a React-loyal product team accepts the legacy hand-written one, refuses the raw web component, and gets *angry* about the Stencil-wrapped version even though it's technically the same thing. Hannah walks through Intapp's bet on web components as the only way three UI engineers can serve a sprawl of products on different frameworks, why Stencil won, why pre-19 React fights you at every turn, and the under-discussed *script that wraps the wrapper* pattern that adds memoisation, refs and per-component types. Web components aren't the thing, they're the thing that gets you to the thing.
