## A rant that turned into a talk ([0m23s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=23s))

The speaker introduces himself as a Berlin JS organiser, helicopter pilot and eHealth Africa engineer, and explains that this whole talk started life as an internal rant that Remy convinced him to bring on stage.

> "I was working at ES Africa together with Remy and gave like this quick internal I wouldn't call it a talk, it was actually more of a rant"

> "give this talking like you're very German, very dry, very crumpy vein"

> "if you hate it, blame Remy"

## ES6 is ES2015, and a love letter to the community ([2m24s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=144s))

He frames the talk around the language he loves and the community even more so, then clears up the ES6/ES2015/ES.Next naming confusion that trips so many people up.

> "JavaScript runs nearly everywhere without even installing the ask toolbar"

> "I really really really love the community for being host to so much creativity"

> "it just simply was renamed to ES 2015. So basically when people talk about ES6 they mean years 2015"

## Template literals ([3m59s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=239s))

Back-ticked strings finally bring multi-line text and interpolation to JavaScript, with the caveat that you really do want an editor that highlights them so you spot a missing closing tick.

> "ES5 strings are kind of annoying. You can't have multiple lines and like having variables in the string is super annoying"

> "it's not innovative but it's super helpful and it just makes things easier"

> "I was just simply missing a closing back tape. So if you have an editor, please make sure that it actually is able to syntax highlight the whole thing"

## Default, rest and spread parameters ([6m40s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=400s))

Three closely related upgrades replace the old `arguments` defensive boilerplate with method signatures that finally reveal intent, and as a bonus give us a tidy way to make immutable copies in Redux reducers.

> "this still doesn't reveal the intention. And you have no idea of default parameters and what it says with just looking at the method definition"

> "with a feature called rest parameters, you simply say dot dot dot storages and you have the notion of that you can have multiple storages as arguments"

> "the cool thing about this is it doesn't mutate the data it creates a new object"

## const, let and the temporal dead zone ([9m27s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=567s))

`const` and `let` introduce block-scoped declarations, a useful "temporal dead zone" error when you reach for them too early, and a helpful nudge towards declaring intent rather than habitually using `var`.

> "even it says costs, it doesn't make the variable immutable. Just make sure that you don't reassign the variable"

> "this feature has a total metal name called temporal dead song"

> "I would go as far as use basically whenever I declare memory, I always declare it as constant"

## Classes — controversial, but use them anyway ([13m43s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=823s))

Classes are the most argued-about ES2015 feature, but his stance is pragmatic: use them when they make your intent clearer, prefer functions and composition first, and never inherit so deeply that tracking `super` calls eats your hair.

> "while some people still argue if it's like prototypal or prototypical, it's just like people just get this new keyword"

> "tracking super calls through a class hierarchy is the reason why I don't have that much air anymore"

> "use functions and simple objects. Because most often you don't need like the full class with its state"

## Destructuring ([17m30s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=1050s))

Pulling values out of objects and arrays by shape, especially for those magic-boolean third arguments that nobody can read, makes parameter lists self-documenting in a way ES5 options objects never quite managed.

> "you don't need to keep track of like random variable isn't and your immediate memory"

> "without looking at function definition, it's not possible to see what this does"

> "ES2015, this is just this. So there's no more wildbit"

## Object shorthand and arrow functions ([20m44s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=1244s))

Property and method shorthand, computed property names, and the fat-arrow function — all of which he warns to use with restraint, especially the arrow form, which is wonderful for one-liners and miserable when stretched into a multi-line function.

> "a word of warning, don't use it too much. I mean in this case it's kind of good, but usually clear method names a bit"

> "with arrow functions I can actually write like this... there's an implicit return because it's only one expression"

> "as soon as this function gets like two lines or something or it's reusable, please don't use that"

## Modules and the small additions ([23m54s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=1434s))

Native `import`/`export` lands (with the module loader still implementation-specific), alongside an assortment of quietly useful additions — `Array.find`, `Object.assign`, string `includes`, and Unicode-aware everything.

> "you can also pick methods that you want to import, in this case plug and reject"

> "import statements have to be at top level... so you can open up the file and see immediately what you're driving"

> "object assign which does object merging because of the bin display"

## Should I use ES2015 today? Babel and tooling ([26m29s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=1589s))

The pragmatic answer: yes — but only where ES2015 actually makes the code clearer, transpiled through Babel, bundled with Webpack, linted with Standard or an ESLint plug-in, and edited with something that knows the new syntax.

> "don't use ES2015 to use ES2015. If the ES5 way is more readable, please use ES5"

> "the code that is produced is actually kind of really human readable. So it's most of the time it's the code that you write by hand in ES5 to get the same thing"

> "at ES Africa we declared an end to the semicolon war and just use standard"

## ES2016 and async/await ([34m28s](https://www.youtube.com/watch?v=4NmkIjUBZmU&t=2068s))

Looking forward, async/await turns deeply nested promise chains into something that reads like plain top-to-bottom code, complete with proper `try/catch` error handling.

> "in ES5 you don't have to read the code, it's just like it's the private of Doom right there"

> "this makes the whole thing way more readable... it's basically just makes the code like in a straight line"

> "you can actually use try catch like a normal JavaScript beam, which is super super nice"

---

A working engineer's deliberately dry, deliberately funny tour through ES2015 that started life as an internal rant and ended up as the most useful single-talk catalogue of *which new feature actually helps*. Each beat follows the same shape: here's the ES5 pain, here's the ES2015 fix, here's the honest caveat. Template literals, default and rest parameters, `const` and `let`, classes with restraint, destructuring, arrow functions you should never stretch past one line, modules, and the small wins like `Array.find` and `Object.assign`. The closing third is the tooling story: Babel, Webpack, Standard, and async/await as the future that finally makes asynchronous JavaScript readable.
