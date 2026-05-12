## TC39 proposals: how to engage ([1m05s](https://www.youtube.com/watch?v=hQNjLrPA410&t=65s))

Willian Martins opens with the disclaimer that everything he is about to show is in active proposal form, and the call to action is concrete: go to the proposals repo, star the ones you like, file an issue on the ones you don't.

> "the proposals I'm about to show here are under construction"

> "the main intention here is to help you understand the use case... and put to you some awareness about the huge amount of work that the TC39 committee is doing"

> "if you have some concern, open an issue, or if you have a better idea, the process is open for us"

## What is `this`, really ([2m41s](https://www.youtube.com/watch?v=hQNjLrPA410&t=161s))

JavaScript's `this` depends on the *call site*, not the lexical scope. In the global scope it's `window`/`global`; inside a regular function it depends on how the function was called; in strict mode it's `undefined` unless explicitly set; `call`, `apply`, `bind` and `new` all bind it differently.

> "in ECMAScript this has different syntax and semantics from other programming languages, where most often this relates to the lexical scope"

> "I assigned something to this inside a function, I thought that would stay inside that function — it turns out that I assigned something to the global object"

> "when you have a function in strict mode, the this doesn't carry implicitly any value from the outer scope — you should set it. It defaults to undefined"

## When you still need bind ([9m06s](https://www.youtube.com/watch?v=hQNjLrPA410&t=546s))

Arrow functions solve most cases by inheriting `this` from the enclosing scope, but they can't help when you want to call an unbound method like `Object.prototype.hasOwnProperty` against an object that doesn't extend `Object.prototype`, or when you're adding a class instance method as an event listener.

> "if x is part of that object using the method hasOwnProperty... it will return a Type Error, because I'm not extending this object from the Object.prototype"

> "when you call the function inside the event, the target is bound to the function, so when I console.log this.paw, actually this is the button, not the class"

> "although arrow function can solve the majority of use cases, we still have to use cases that explicit bind is needed"

## The bind operator (`::`) ([10m42s](https://www.youtube.com/watch?v=hQNjLrPA410&t=642s))

The bind-operator proposal introduces two forms — a unary `::` that binds the base reference, and a binary `obj::fn` that binds the left side as `this` for the right side — making method extraction and "virtual method" patterns much cleaner than today's `Function.prototype.bind` chains.

> "it bounds the base reference to the method you're calling"

> "the binary syntax binds the left side as a `this` context to the right side"

> "the developers sometimes doesn't need to double the whole library just to use a small stuff, and it makes easier to extend the framework without extending the prototype chain"

## The case for pipelines ([19m39s](https://www.youtube.com/watch?v=hQNjLrPA410&t=1179s))

A worked example: sanitise an input, extract digits, convert to textual form. The "nice" version uses three intermediate variables purely to thread data through; the "compact" version inverts the reading order so the data flows inside-out. Pipelines are the proposed sugar to fix this.

> "we end up with a lot of these intermediary variables — it looks a little verbose, because we are just using this variable just to carry the value to the next one"

> "it's not natural the way the data flow... because the data flows from the inner to the outer"

> "the value as a topic for the next step, and the result of the next step will be the topic for the following step"

## Smart pipelines vs F#-style pipelines ([23m20s](https://www.youtube.com/watch?v=hQNjLrPA410&t=1400s))

Two competing TC39 proposals. *Smart pipelines* introduce a topic token (`#`) for cases with multiple arguments or parentheses, and a *bare style* for simple unary calls. *F#-style pipelines* extend the minimal proposal with an explicit `await` step. Each addresses the same corner cases (multi-arg functions, async steps) differently.

> "whenever you need parentheses or square brackets, we use the Topic Style, which has this `#` as a token, which points to the topic of the previous step"

> "if you use a curry function, you need to use the topic style — otherwise you will have a syntax error"

> "the F-sharp pipeline proposal... extends the minimal proposal with an await step"

## Partial application by example ([29m38s](https://www.youtube.com/watch?v=hQNjLrPA410&t=1778s))

Partial application takes a function of arity *n* and returns one of arity *<n* with some arguments pre-filled. JavaScript can already do this with `Function.prototype.bind`'s second-onwards arguments, but only in left-to-right order — you can't pre-fill the first and third while leaving the second open.

> "we forget that the bind receives more parameters... from the second parameter on, you can bind the arguments to that function"

> "the bind only binds the arguments in order from left to right"

> "although we can achieve the same result as partial application using curry, curry is not equal to partial application"

## The partial application proposal (`?`) ([33m47s](https://www.youtube.com/watch?v=hQNjLrPA410&t=2027s))

The proposal introduces two new tokens inside a call expression: `?` marks a *missing* argument that will be filled later, and `...` spreads the remaining arguments. `myFunc(1, ?, 3)` returns a function expecting only the second argument; `myFunc(1, ...)` returns one taking everything else.

> "you just bound the fixed parameters to that function, and then you have this `?` token to postpone the call with that specific parameter"

> "it's easier to the developer to figure out whether that call, how many parameters it's missing, and whether the next call will call the function or not"

> "we can use the spread token, ellipsis token, to spread the unbound parameter — useful when you just want to bound the first or only the last parameter"

## Should we use this in production? Not yet ([37m29s](https://www.youtube.com/watch?v=hQNjLrPA410&t=2249s))

The honest answer: pipelines and partial application are stage 1, the bind operator is stage 0, and the proposals can reshape each other. Engage with the proposals, file issues, but don't ship code that depends on them.

> "there are a lot of aspects or missing pieces of this proposal that should be settled"

> "the adoption of one proposal could reshape or remove completely the other one"

> "partial application is in stage one. Pipeline operator as well. And bind operator's just on stage zero"

---

Willian Martins tours three in-flight TC39 proposals — the bind operator `::`, the pipeline operator `|>` in two competing flavours, and partial application `?` — anchored by a refresher on why `this` is JavaScript's most slippery runtime semantic. The bind operator pitches virtual methods that extend objects without polluting prototypes, the pipeline operator rescues the *sanitise-then-textualise* code from inside-out unreadability, and partial application fills the gaps `bind` cannot reach when arguments are non-adjacent. The smart-pipeline versus F#-style comparison goes unusually deep for the runtime, then the closing ask is simple: star the repos, file issues, and don't ship Babel plugins to production yet.
