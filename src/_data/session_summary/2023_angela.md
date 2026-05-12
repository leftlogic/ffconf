## What makes the web special ([1m35s](https://www.youtube.com/watch?v=r3DEHo6YZeY&t=95s))

Angela Ricci, who has been building for the web since 1995, opens by reminding an audience born after the web's invention what's actually distinctive about it: it's an *open, living standard* with no central owner, content is universal (any device, any connection, any language), and the separation of HTML, CSS and JavaScript gives us a uniquely resilient medium.

> "the web doesn't belong to a private company that one day will just say, 'well, it's not making enough money, just sell it'"

> "we own the web because it's open, it's a standard, and it's ours"

> "this separation of layers of content, style and behaviour allows for a loosely coupled system that if one piece fails, the others won't"

## The first descent: tag soup of tables ([7m16s](https://www.youtube.com/watch?v=r3DEHo6YZeY&t=436s))

The first time we *tampered with the front web* was when frustrated visual designers repurposed `<table>` for layout. We got columns, but we lost separation of content and style, we lost semantics, and we got the proprietary `style` attributes that nailed the coffin shut.

> "somebody had the great idea to deviate table tags to create layouts, because we are so frustrated as visual designers"

> "we added some spice to our soup — style attributes"

> "this was the first time that I saw that we started tampering with the front web"

## Div-and-span soup, then class soup ([9m52s](https://www.youtube.com/watch?v=r3DEHo6YZeY&t=592s))

In 2004 browsers finally supported CSS properly, and we cleaned up the styling layer — but we just switched the flavour of the soup to `<div>` and `<span>`. Now the *class soup* on every Medium paragraph carrying an identical list of utility classes is the worst version of the same anti-pattern.

> "we just changed the flavour of the soup"

> "all the paragraphs have exactly the same infinite list of classes... why we are polluting HTML with utility classes if we just use the damn selector?"

> "we give one step forward and two backwards, and now we are backwards"

## HTML is the foundation of the house ([12m27s](https://www.youtube.com/watch?v=r3DEHo6YZeY&t=747s))

Her central metaphor: CSS is the paint and the wallpaper, JavaScript is how the doors and windows open, and *HTML is the foundation of the house*. You can repaint or rearrange furniture cheaply; you can't fix a cracked foundation without a great deal of money and time.

> "HTML is the very foundation of our house — and of course, if you have a problem with the foundations of your house, you jeopardise the very structure"

> "you can change the wallpaper every year if you want... but you cannot change the very foundation of your house or fix it without lots, lots of time and lots of money"

> "that's the matrix of what you're building on"

## The decaying Dorian Gray picture behind the looks ([14m01s](https://www.youtube.com/watch?v=r3DEHo6YZeY&t=841s))

The front web today is Dorian Gray's portrait: beautiful designs in the gallery, decaying prolix code behind them. Perceived performance is terrible — *I'm counting Mississippis when I load pages* — and the cost is paid by mobile users, by users on slow connections, by users with accessibility needs, and by the next developer who has to maintain it.

> "the final users are noticing the decay behind the looks"

> "I am really starting to count Mississippis when I load pages — 10 Mississippi, 11 Mississippi, it's really terrible"

> "thousands of abstractions and dependencies, thousands of tools and frameworks... we simply broke the web with this one"

## Why we tamper with the front web ([16m37s](https://www.youtube.com/watch?v=r3DEHo6YZeY&t=997s))

The first cause: we develop for ourselves. Young, no physical constraints, fast hardware, fast connection, no accessibility needs. The second: we work far from designers, content strategists and actual users. The third: nobody learnt the foundations — semantics, accessibility, separation of concerns — so the *abstractions on top of HTML* feel like the real platform.

> "the problem is that we develop for ourselves"

> "we work very far from the user experience experts, the designers, the client, and even the final user — so we're completely in our bubble, in our dome, and we don't see anybody else"

> "we as developers, we don't understand those three basic strengths that the web has"

## We despise HTML and CSS ([20m21s](https://www.youtube.com/watch?v=r3DEHo6YZeY&t=1221s))

We treat HTML as a *compiled target, an implementation detail*. CSS is the *easy* one nobody bothers to actually learn — until they start, get frustrated by it, and reach for a tool that *deals with that for them*. And the underlying cultural pattern is that front-end is gendered as *feminine* and paid less, which is precisely why the *full-stack* job title was invented.

> "a developer told me, 'now we're going to start working with a new framework — and with this new framework, we won't need to write HTML anymore'"

> "we treat HTML as a compiled target, an implementation detail"

> "you cannot be a cool kid if you're working with not-real programming languages, with secondhand languages, feminine languages"

## End the full-stack myth, train people properly ([28m06s](https://www.youtube.com/watch?v=r3DEHo6YZeY&t=1686s))

Her concrete fixes. Proper training that includes HTML, CSS and accessibility (and that isn't taught by people from the same flawed curriculum). End the *full-stack* job title — *the reason it exists is to pay one person to do the work of two*, and the side that suffers under deadline pressure is always the front. Move developers physically closer to designers and users, so they actually see who they're building for.

> "the very reason for the existence of the full-stack is contempt for the front"

> "I am very optimistic and naive — but at least let's try to see what we can do to fix those problems"

> "let's avoid it to become the monster we're starting to think is coming"

---

Angela Ricci has been building for the web since 1995 and argues twenty years of *progress* has just walked us in a circle. Table-layout tag soup gave way to div-and-span soup, which gave way to today's class soup where every Medium paragraph carries the same fifty utility classes. Behind the polished designs sits a Dorian Gray picture: mobile users counting Mississippis, accessibility traded for abstractions, HTML treated as a compiled target. The diagnosis is cultural too — front-end is gendered *easy* and *feminine*, the *full-stack* job title exists to pay one person for two roles, and the fix is to retrain, separate the roles, and put developers back in the room with real users.
