## Turtles all the way down ([0m13s](https://www.youtube.com/watch?v=nYj4exblbgI&t=13s))

Ashley Williams opens by reading the opening vignette from *A Brief History of Time* — the cosmologist, the heckler and the stack of cosmic tortoises — and signals that this will be a talk about ideas rather than code, with only two code slides in 40 minutes.

> "the world is really a flat plate supported on the back of a giant tortoise"

> "much like a Reddit comment, basically"

> "this is a little bit more about the code for your computer up here"

## Why even ask the question ([3m50s](https://www.youtube.com/watch?v=nYj4exblbgI&t=230s))

She works at npm explaining how npm works, has been teaching beginners around the world, and noticed that two questions kept coming back at her: *how do you get permission to publish a module*, and the much trickier *how do you decide what goes in a module*.

> "my job is to explain npm. So if you don't understand how npm works, that's my problem"

> "teaching is nature's way of letting you know how sloppy your thinking is"

> "have you ever really looked at your hands? But this is what we're going to do for the next 40 minutes"

## What people actually said on Twitter ([6m57s](https://www.youtube.com/watch?v=nYj4exblbgI&t=417s))

She tweeted "what's your primary motivation for writing or using modular code" and the answers clustered around maintainability, testability, reuse and separation of concerns — but when she pressed on *how you decide what those single concerns are*, almost everyone hedged or threw darts.

> "I write so that my past self doesn't put my future self in a position where I'll need things I won't have"

> "this person suggested that they just kind of used intuition... when I pressed this person they were like 'I throw darts, I hope other people have better strategies'"

> "how many people had someone get mad at you when you just put it all in one file? All right, you're all liars"

## Modularity is like time ([10m05s](https://www.youtube.com/watch?v=nYj4exblbgI&t=605s))

The talk's theme: we use the concept of modularity constantly without being able to define it, in the same way we use "time" constantly and freeze when asked what it actually is.

> "if you ask somebody hey what time is it, they'll look at their watch and they'll be like 3 p.m."

> "if you ask 'well it's 3 p.m. but what is time?' you're going to get a response like 'I don't know'"

> "this is why I have themed this talk with *A Brief History of Time*"

## The npm-shaped universe and Dijkstra's hierarchies ([11m10s](https://www.youtube.com/watch?v=nYj4exblbgI&t=670s))

A graph-database visualisation of npm — Lodash and React as glowing galaxies — gives the talk its scale, and Dijkstra supplies the reason: the conceptual hierarchies modern programming asks us to hold are deeper than anything in human history, and modularity is our coping mechanism.

> "the npm registry has somewhere around 368,000 total packages... 6 billion downloads in the last month"

> "the programmer is in the unique position [of having] to think in terms of conceptual hierarchies that are much deeper than a single mind ever needed to face before"

> "the small modules philosophy... our short-term memory is finite"

## Small modules and the left-pad moment ([16m22s](https://www.youtube.com/watch?v=nYj4exblbgI&t=982s))

The argument that "left-pad means we've forgotten how to program" is dispatched as a *no true Scotsman* fallacy — we did not stop programming when we stopped writing assembly — and substack's framing is offered as the better rule: your application code should be the brackish residue that can't be abstracted away.

> "abstraction is definitely an awesome power that we have as developers, but when we use it it doesn't mean that we forgot how to program"

> "did we forget to program when we stopped writing C, when we stopped writing assembly?"

> "when applications are done well they are just the really application-specific brackish residue that can't be so easily abstracted away"

## The cost of small modules ([25m30s](https://www.youtube.com/watch?v=nYj4exblbgI&t=1530s))

Nolan Lawson's "the more I modularise my code the bigger it gets" puts the inverse case: webpack and Browserify preserve each module's scope at runtime, and that scope-lookup time costs end users real milliseconds. Rollup and Closure hoist everything into one function for that reason.

> "alternative title: why one horse-sized JavaScript duck is faster than 100 duck-sized JavaScript horses"

> "by preserving the modularity that was helping us in the development period, we actually are costing our users in runtime"

> "it benefits the library writers, it disadvantages application writers, and it harms end users"

## Software is change management; Parnas's real criterion ([30m39s](https://www.youtube.com/watch?v=nYj4exblbgI&t=1839s))

The deeper misconception is treating software as static. The 1972 Parnas paper she eventually found — *On the criteria to be used in decomposing systems into modules* — gives the answer Twitter could not: decompose along the seams of difficult decisions that are likely to change.

> "the vast majority of software development is change management"

> "nobody talked about their software changing, they all looked at it statically"

> "start with a list of difficult design decisions, or design decisions which are likely to change; each module is then designed to hide such decisions from the others"

## Code that is easy to delete ([35m16s](https://www.youtube.com/watch?v=nYj4exblbgI&t=2116s))

Tef's rule of thumb closes the loop: instead of writing reusable code, write disposable code — code that can be deleted cleanly — because deletion is the one operation that exposes whether your seams really are at the points of change.

> "every line of code is written without reason, maintained out of weakness and deleted by chance"

> "we should be writing code that is easy to delete, not easy to extend... instead of building reusable software we should try to build disposable software"

> "often times when we're modularising things we will actually couple things more closely together, particularly if those things are rapidly changing"

## SpaceTime, and a human with a brain ([36m17s](https://www.youtube.com/watch?v=nYj4exblbgI&t=2177s))

Ashley closes by reminding the audience that two observers in relative motion cannot agree on the order of events — let alone whether React is the best framework — so the only reliable tool we have is a human paying attention to the concepts that guide their decisions.

> "we actually can't agree on space or time"

> "modularity is an old problem, but in JavaScript we're dealing with it at a brand new scale and this scale is very hard to think about"

> "right, this is why they pay a human with a brain who can investigate and learn"

---

Ashley Williams opens with Hawking's tortoises and ends with relativity, but the real provocation is a beginner's question the whole JavaScript ecosystem can't answer: how do you decide what goes in a module? Her Twitter survey collapses on contact, the left-pad backlash gets dismantled as a no-true-Scotsman, and Nolan Lawson's runtime numbers prosecute the same small-modules culture she just defended. The resolution comes from David Parnas's 1972 paper, dug up on Google Scholar: modules exist to hide *difficult decisions likely to change*. Software is change management, code should be easy to delete, and the only reliable tool left is a human with a brain.
