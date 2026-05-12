## A career of learning then throwing it away ([1m34s](https://www.youtube.com/watch?v=UO6SD-7XDQg&t=94s))

James Kyle traces his start in web development — sixteen-year-old marketing intern building HTML email templates with table layouts and inline styles — to underline how often he had to throw out everything he had learned to do something only slightly more advanced.

> "if you've ever built an email template you know it's complete trash"

> "I spent months trying to make these emails consistent across every single client, and the end result wasn't even satisfying"

> "sure, there were problems between browsers, but they were totally new problems"

## When Node finally felt stable ([5m11s](https://www.youtube.com/watch?v=UO6SD-7XDQg&t=311s))

After several years of Backbone, Ember, Marionette and Angular he moved into developer tooling on Node (Babel, Flow, Yarn) and discovered something front-end work had never offered him — knowledge that survived from year to year.

> "I learned so much more than I ever had before, and so much faster than I thought I could"

> "the things that I learned a few years ago in Node are still true today, and the code that I wrote back then looks like code I wrote today"

> "I wasn't learning in this weird incremental way. Everything was thrown at me at once... so what was different for front-end?"

## Teaching a friend to build an app on day one ([6m11s](https://www.youtube.com/watch?v=UO6SD-7XDQg&t=371s))

A Twitter rant ("documents are dead") came from watching a friend start learning the web with the goal of building an app, only to be told to begin years behind where her goal actually lived — until they sat down with Create React App and built her first app inside ten minutes.

> "if her goal was to build an app, why was she being told to focus on these things? They weren't the basics of app development"

> "I learned in this really roundabout way with years of frustration and years of throwing out knowledge"

> "in minutes, we created her first app. It was a really positive experience"

## Learning in passes, not foundations ([7m43s](https://www.youtube.com/watch?v=UO6SD-7XDQg&t=463s))

The house-building analogy for learning is exactly wrong — you cannot lay a foundation without knowing what house is going on top of it, so a learner needs a blueprint of the whole thing before they go deep on any one piece.

> "you can't build a house until you've fully conceptualised it"

> "I believe that learning complex topics like web development should be done in passes"

> "if my goal is to teach my friend how to build apps, I should get her building her first app as fast as possible, so that she can see all the pieces"

## A super-tiny compiler taught me about teaching ([9m48s](https://www.youtube.com/watch?v=UO6SD-7XDQg&t=588s))

His Super Tiny Compiler — 200 lines of code with 800 lines of comments — proved the point: people with no compiler background and people with a degree in compilers both said it finally made compilers click for them, and the loud minority who said *you're teaching it wrong* are exactly the people the book wasn't written for.

> "I'm going to cover all of this shit as quickly as I can — I'm going to implement an actual compiler as a way to teach people"

> "there were people who were just learning JavaScript and had no computer science education... and went out and wrote their own Babel plugins in a matter of weeks"

> "I don't think that covering a topic quickly and giving imprecise definitions does harm to future learning... not if you're just optimising for comprehension"

## Components are what apps are made of ([13m53s](https://www.youtube.com/watch?v=UO6SD-7XDQg&t=833s))

The web was built around documents, but the web we ship now is made of apps — and the operational difference between a document and an app is the presence of components. Loosely defined: anything that lets you reuse an element, from a Rails partial to a React component, is a component.

> "the difference between a document and an app is components"

> "anything that makes your elements reusable — and by this definition we haven't been building documents for a really long time"

> "documents can exist in a web designed for apps, but apps cannot exist within a web designed for documents — not without adding something else on"

## How JavaScript tooling got to here ([19m04s](https://www.youtube.com/watch?v=UO6SD-7XDQg&t=1144s))

A short history: concatenation, then minification, then RequireJS, then npm with Bower, then Browserify, then Webpack with code-splitting. Every transition was well-motivated, and the tools aren't going away — but the friction they add is now a structural problem.

> "every new thing you add needs to work with all the other things — Webpack needs to work with Babel, which needs to work with Jest, which needs to work with ESLint"

> "Create React app gave her a pretty ideal set up — she got Webpack, Babel, and all these other tools all packed together with a fantastic developer experience"

> "if you accidentally cause an error or break an important lint rule, it will pop up with a message right in your browser telling you exactly what you did wrong"

## Tools deserve a seat at the standards table ([22m42s](https://www.youtube.com/watch?v=UO6SD-7XDQg&t=1362s))

Webpack's loaders and `require.context` have no equivalent in JavaScript or the web platform, and Webpack has to implement the JS module system slightly wrong because doing it right would slow everyone's apps down — meaning every Webpack-based app is quietly incompatible with the rest of the ecosystem.

> "when you use any of these features, suddenly you're not writing JavaScript anymore, you're writing something Webpack-specific"

> "Webpack will be forced to implement some things incorrectly according to the JavaScript specification... it can't, because it would blow everyone's code"

> "why can't we design standards for tools to implement? Spec out Webpack and Babel so we can innovate and compete with new implementations while maintaining standards that keep us all compatible"

## Design for the next billion users ([26m17s](https://www.youtube.com/watch?v=UO6SD-7XDQg&t=1577s))

The web is still a privilege; the next billion users mostly don't speak English and have little to no access to a computer. Teaching has to start from empathy; tools have to be forgiving by default; and accessibility, performance and education are all interconnected facets of a single problem.

> "we should be designing the web for the next billion people, not for the people that are already here"

> "you cannot teach someone effectively without empathising with them, otherwise you come off like a jerk, expecting them to know things they wouldn't possibly know"

> "two years apart, across jobs, I got to improve the accessibility of our apps using the same exact code, and that felt really good"

## Where the talk leaves me, honestly ([30m54s](https://www.youtube.com/watch?v=UO6SD-7XDQg&t=1854s))

A surprisingly raw ending: even after a year of trying to talk to the people who could actually move the standards, James says he feels hopeless and doesn't know what to do next — and explicitly throws the problem to the audience.

> "the web is not as competitive as we like to think it is — the web is owned by just a few companies these days"

> "being perfectly honest, I don't have any clue what to do about it, and after a year of trying to find common ground with the people who can change things, I feel really hopeless"

> "be brave enough to be kind"

---

James Kyle, the Babel and Yarn maintainer, delivers a raw, candid manifesto about why front-end keeps eating its young. He recounts years of learning frameworks only to throw them away, contrasts that with the rare stability he found in Node tooling, and watches a friend build her first React app in ten minutes. The central claim is sharp: the web was made for documents but we ship apps, and the missing primitive is *components*. He then makes the case that Webpack and Babel deserve a seat at the standards table, and ends, vulnerably, by handing the unsolved problem straight to the audience.
