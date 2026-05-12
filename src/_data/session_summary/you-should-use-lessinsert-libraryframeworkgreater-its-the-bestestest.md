## How the talk came about ([0m24s](https://www.youtube.com/watch?v=_yCz1TA0EL4&t=24s))

Paul opens with the origin story — Remy emailed him after a controversial blog post asking for a "data-driven decisions" talk — and immediately uses a tabs-vs-spaces show of hands to underline how tribal framework debates can become.

> "the working title that I kind of sent Remy and then I was like I can't think of a better title so I stood with it"

> "now we have data and that data says that many of you are wrong"

> "the choice of framework sort of reflects on me"

## Questioning the DOM-mutation claim ([1m57s](https://www.youtube.com/watch?v=_yCz1TA0EL4&t=117s))

Reading the React docs he stumbles over the claim that the bottleneck is "almost always DOM mutation, not JavaScript execution" and decides to put numbers behind it with a Flickr-style gallery that invalidates the tree on every update.

> "the bottleneck is almost always the Don mutation and not JavaScript execution"

> "if I understand this correctly if I were to write vanilla I'd mutate the Dom and when react is done it will mutate the Dom the only difference will be the JavaScript execution"

> "I wanted to invalidate the tree every time because I wanted to see how well it scaled"

## The Nexus 5 numbers ([3m27s](https://www.youtube.com/watch?v=_yCz1TA0EL4&t=207s))

The measurement uses two timers and a `requestAnimationFrame` to isolate JavaScript time from DOM-mutation time, and on a Nexus 5 the JS time climbs steeply with element count while the DOM time stays effectively flat — the inverse of what the docs implied.

> "this blue bit is the time in JavaScript as the number of elements goes up starts at around 500 milliseconds"

> "it was one and a half seconds just to get the screen updated just to do the JavaScript bit"

> "the claim was that bit should be the bit that's expensive and the other bit should be the bit that is cheap"

## "Nobody has that many elements" ([4m57s](https://www.youtube.com/watch?v=_yCz1TA0EL4&t=297s))

The first objection — that real sites don't render thousands of nodes — gets demolished with a guess-the-element-count game across Twitter, Facebook, the Google Play Music recommender, the Linux contribution graph and the WHATWG HTML spec.

> "twitter.com million obviously obviously I'm not signed in here"

> "the answer is 4,000 501"

> "if you torture your data long enough it will confest to anything"

## Ergonomics versus user needs ([9m07s](https://www.youtube.com/watch?v=_yCz1TA0EL4&t=547s))

After cataloguing the Twitter pushback — including the now-famous "react isn't popular because it's fast, it's popular because it's fun" line — he reframes the entire debate as developer comfort versus the experience of the humans at the end of the chain.

> "react isn't popular because it's fast Paul it's popular because it's fun"

> "what I think's really being traded here is this ergonomics our ergonomics our comfort our happiness when writing code versus what those human beings at the end of the chain actually experience"

> "our ergonomics should be less important than our users needs"

## Costs to us, costs to users ([11m41s](https://www.youtube.com/watch?v=_yCz1TA0EL4&t=701s))

He itemises both sides of the ledger: developer cost is learning, relearning when something is deprecated, and debugging unfamiliar code; user cost is bytes on the wire, parse-and-evaluate time, CPU burn (a rough proxy for battery), frame rates and memory.

> "all code is going to come with a cost cost to us and cost to users"

> "if you burn the CPU it's a rough approximation to battery life"

> "the more code the bigger the bandwidth Bill the more time it takes for the thing to bootstrap"

## Libraries versus frameworks ([13m13s](https://www.youtube.com/watch?v=_yCz1TA0EL4&t=793s))

Jake Archibald's distinction is borrowed and parked: with a library you hold both ends of your code, with a framework you keep being asked to fit your work into small windows the framework grants you.

> "with a library... if it misbehaves you can just rip it out and drop something else in"

> "with the framework you end up feeling like this you get handed little opportunities to do your stuff and you go please could I do my job now"

> "libraries I want to park here and just focus more on Frameworks right now"

## Measuring framework bootup with Big Rig ([15m51s](https://www.youtube.com/watch?v=_yCz1TA0EL4&t=951s))

To produce comparable numbers he builds and open-sources Big Rig — a tool, CLI and ChromeDriver-powered runner that ingests Chrome trace files and breaks them down into HTML, JavaScript, styles, layout, paint and composite time, plus a "blame game" view that surfaces the worst offenders.

> "I've been working something I call comically I call it Big Rig because it's not actually that big"

> "the blame game is where you go to the extended information and you can see that we're spending 2.1 seconds or in this case Ember is spending 2.1 seconds bootstrapping on an Nexus device"

> "any kind of testing for this kind of work hopefully just got a whole heap easier"

## The framework bootup table ([23m01s](https://www.youtube.com/watch?v=_yCz1TA0EL4&t=1381s))

Running the standard TodoMVC implementations of Polymer, Angular, React (with and without the JSX transformer), Backbone, Ember and vanilla on a Nexus 5 and an iPhone 5S produces a sobering table — Ember costs almost two seconds of JavaScript just to show an empty to-do list.

> "react... is 311k when you do it that way and it has a bootup time of 1.2 seconds"

> "Ember you might got a hint for this before is 580k Just sh of two seconds"

> "vanilla because we need a Baseline because from a user's point of view it's all identical they're all to do MVC 16k 50 milliseconds"

## Frameworks as inversion of control, and a plea for users ([28m12s](https://www.youtube.com/watch?v=_yCz1TA0EL4&t=1692s))

He closes by recasting frameworks as an inversion of control — illustrated with the domestic anecdote of being asked to fetch a phone "from upstairs" with no further detail — and argues for using data as an *informer* rather than a decider, with users always the tie-breaker.

> "Frameworks who is helping whom around here if it's an inversion of control you should be helping me not giving me little bits of time to do my job"

> "use data as a decision Informer not necessarily a decision maker"

> "if it takes me an extra week but every single one of my users gets a better experience that was worth my time"

---

Paul Lewis goes after the article of faith that frameworks win by batching DOM mutations, and the numbers on a Nexus 5 tell the opposite story: JavaScript execution eats the budget while DOM work barely registers. He pre-empts every "your test isn't real" objection by quoting the actual Twitter pile-on, then open-sources Big Rig so you can grind your own traces, and lays out a TodoMVC bootup table where vanilla clocks 50ms against Ember's near two seconds. The framing turns sharp at the end: frameworks are inversion of control dressed as productivity, and developer ergonomics should not silently outrank the humans at the other end.
