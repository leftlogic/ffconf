## A brief history of the web ([3m10s](https://www.youtube.com/watch?v=WYXSck7TyVM&t=190s))

Charlie Owen opens with a Jeremy-Keith-shaped potted history of the web — telegraph to telephone to modem to packet networks to the application protocols on top of them — and frames Tim Berners-Lee's invention as the result of a long chain of simple layered technologies.

> "I'm going to steal some things here from Jeremy Keith... he does a wonderful talk about how the web was invented and how it's made of layered technologies working together"

> "TCP and UDP and IP all working together to allow common communication standards"

> "the foundation of everything else that we built on top of"

## HTML's flirty robustness ([6m15s](https://www.youtube.com/watch?v=WYXSck7TyVM&t=375s))

HTML survives because it's declarative — *flirty*, in Charlie's framing — rather than imperative. You can rip pieces out of a live page and the rest still works. The web's dominance is built on that robustness, which a strict language could never have given it.

> "HTML likes to call up the browser late at night and say things like 'I've been thinking about you, yeah... maybe we could get some paragraphs onto the page'"

> "you can pull a page apart as it is running, you can pull chunks of code out of a living document, and at the end of it you will still be able to use the remaining items"

> "some kind of very strict language, an imperative language, would have fallen over and died in the kind of conditions the web was born in"

## The web's summer of love, and how it ended ([9m52s](https://www.youtube.com/watch?v=WYXSck7TyVM&t=592s))

What was free and weird in 1995 was balkanised by 1999 (Netscape vs IE), restarted by the iPhone in 2007 (which forced responsive web design as a discipline), then settled into a brief period of *progressive enhancement* where the community embraced diversity.

> "at one point the web got split between these two browsers... users had to kind of pick their loyalty to browsers"

> "[the first iPhone] was our first great lesson in diversity"

> "it was the web's summer of love. We embraced diversity. We embraced all the different things that were out there"

## We're back to excluding people ([14m06s](https://www.youtube.com/watch?v=WYXSck7TyVM&t=846s))

Average page weight is over 2MB, average mobile load time on 3G is 12 seconds, and 53% of users bail after 3 seconds. The Moto G4 is the world's *median* phone. Half the rural USA is on 3G, and rural land-line connections are still dominated by dial-up.

> "53% of users will abandon a site that takes more than 3 seconds to load... and yet the average load time on a 3G connection... is 12 seconds"

> "that's a Moto G4. That is the most average phone on the planet"

> "if you go outside a major metropolitan area, 50% of the USA is on a 3G connection"

## The pyramid is upside down ([21m20s](https://www.youtube.com/watch?v=WYXSck7TyVM&t=1280s))

We've inverted the robustness pyramid. The robust content layer used to sit at the bottom (HTML), with progressively more brittle things stacked above (CSS, then JS). Today, the entire site is JavaScript and there is nothing underneath it — so a script-blocker, an ad-extension or a dropped CDN connection takes the whole thing down.

> "we've turned that pyramid of robustness upside down and suddenly we've got the table at the top and we put the delicate vase at the bottom"

> "the thing that's most likely to shatter should not be at the bottom"

> "I'm building JavaScript first... it's like building your own home-built flying car... wouldn't it have been better to buy a fucking bicycle?"

## Slow down and move at appropriate speed ([23m27s](https://www.youtube.com/watch?v=WYXSck7TyVM&t=1407s))

The Facebook "move fast and break things" model gave us a near-broken Western democracy. The actual essence of agility is "make things work" — release something simple, refine it, layer on, repeat — and that requires giving up *complexity-from-day-one* and the resume-driven development that goes with it.

> "Facebook has almost broken Western democracy. Facebook really seriously has been complicit in a genocide in Myanmar"

> "agility is about producing working products at the end of each one of your sprints — but how often do we do that?"

> "code on a pedestal... rockstar developers, ten-times engineers, JavaScript ninjas. It's ridiculous that we think in this way"

## The web isn't a platform, it's chaos ([27m36s](https://www.youtube.com/watch?v=WYXSck7TyVM&t=1656s))

The framing of *the web as a platform* misleads us. Platforms have known APIs and known runtime conditions; the web has a million different platforms, screen sizes, input modes and network conditions. Embracing the chaos is the only honest engineering response to it.

> "a platform is a set of known conditions, a set of known APIs, an unknown situations where it's used"

> "the web is bonkers and chaos and just all these kind of swirly things going on"

> "we're the only industry that craves complexity"

## Designing progressively, in practice ([30m11s](https://www.youtube.com/watch?v=WYXSck7TyVM&t=1811s))

Springer Nature's working flow: ship a server-rendered HTML page first and user-test it; then add simple CSS; then more complex CSS gated on a media query; then JavaScript gated on `matchMedia` so the IE5.5-on-a-time-machine user still gets the content.

> "this is just an HTML page rendered on the server and sent to the client. Do you know why we do this? We do this to make sure that this is what the users want"

> "this media query... captures all modern browsers. Really simple one to do. The older ones we just give the simple bits of HTML to"

> "if something can be built with the technology lower down in the tech stack, then it should be built with the technology lower down in the tech stack"

## Edge cases are stress cases ([33m20s](https://www.youtube.com/watch?v=WYXSck7TyVM&t=2000s))

People are not edge cases. *Your technology* can suffer an edge case, but every time it does it produces a *stress case for a real human*. The remedy is to actually use the products yourself — with a screen reader, with only a keyboard, on a phone with a cracked screen in direct sunlight wearing gloves.

> "people are not edge cases. I really want to drive this home — your technology can suffer an edge case, but what that does is produce a stress case for a human every single time"

> "how often have you tested your website on a phone with a cracked screen?"

> "Das Leben ist kein Ponyhof — life is not a field of ponies"

## Stop being a front-end developer if you don't care ([36m30s](https://www.youtube.com/watch?v=WYXSck7TyVM&t=2190s))

The closing line: if you don't want to deal with the people who actually use your sites, you are in the wrong job. Front-end work is not about the code — it's about how the code works for people, every single time.

> "if you don't want to deal with people in the browser, go away and stop being a front-end developer, because that is your job"

> "it's not about the code, it's about how does it work for people each and every time"

> "the web is strong because it is robust, and its robustness comes from simplicity"

---

Charlie Owen delivers the closest thing FFconf has to a manifesto, and it lands like one. She walks from telegraph wires to HTML's flirty, declarative robustness, then turns the room cold with the numbers: 2MB pages, 12-second 3G loads, the Moto G4 as the world's median phone, half of rural America still on dial-up. The pyramid of robustness is upside down, *move fast and break things* helped break democracy, and resume-driven rockstar culture has us building flying cars when a bicycle would do. People are *not* edge cases, they are stress cases. If you do not care how your code lands on real humans, front-end is the wrong job.
