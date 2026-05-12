## Holy wars and the CSS-in-JS fight ([2m38s](https://www.youtube.com/watch?v=jhJGs2MUTb4&t=158s))

Bruce Lawson opens with a list of generational holy wars — Beatles or Stones, vinyl or CD, tabs or spaces — to set up the current one: writing CSS in stylesheets versus writing CSS in JavaScript, an argument he summarises by impersonating both sides.

> "I'm not talking about the holy wars that we have — every industry has them"

> "basically one side says, CSS is completely unsuitable for styling modern web applications... and the other side say, oh yeah, well you're just a backend developer with no idea how the web is meant to work"

> "thus opinions are divided, ideas are entrenched, and everybody has a fight"

## Why working with CSS in components is hard ([6m19s](https://www.youtube.com/watch?v=jhJGs2MUTb4&t=379s))

CSS in components hurts because everything is globally namespaced, the cascade order is fragile, and your CSS is silently coupled to your HTML — change either side and something somewhere on a page nobody visited will quietly break.

> "everything in CSS is globally namespaced, which means that you always have a problem worrying about whether styles are going to leak"

> "HTML doesn't care about your CSS, but your CSS cares deeply about your HTML structure"

> "the scariest thing in the world for me was changing the CSS of the Law Society website... something would break because I changed the CSS — always, but it might take weeks before somebody actually went to that page"

## Wix's Stylable preprocessor ([10m29s](https://www.youtube.com/watch?v=jhJGs2MUTb4&t=629s))

Working with Wix, his colleague Ido prototyped Stylable — a CSS preprocessor that gives you a TypeScript-style type system over CSS, scoped pseudo-classes for component state, chained pseudo-elements for nested parts, and build-time rule-shaking so unused styles are removed.

> "we needed it to be performant. We wanted to be able to use all the capabilities that CSS offers — the whole spec, all the cool great stuff like flexbox and grid"

> "we deliberately chose this syntax so that it feels like CSS, so that people who are designers and not engineers will be able to grok this instantly"

> "ruleset-shaking, which is similar to tree-shaking — so any CSS that's not being used in this particular page... is removed at build time"

## Frameworks, artisanship and *Shokunin* ([20m52s](https://www.youtube.com/watch?v=jhJGs2MUTb4&t=1252s))

Bruce welcomes the industry professionalising and explicitly refuses the Luddite framing — frameworks are fine, just please make the websites you ship with them genuinely better — but borrows the Japanese concept of *shokunin* to argue that an artisan attitude needs to survive the toolchain.

> "if you want to React-Ember-Angular-Backbone-Strap-Hub-Pack.js, knock yourself out"

> "shokunin... it means not only having technical skill but implies an attitude and social consciousness, social obligation to work his or her best for the general welfare of people"

> "we shouldn't lose that artisan mentality... another computer science term, giving a shit about the end product"

## Bangkok, MS, and Jooly's Joint ([23m28s](https://www.youtube.com/watch?v=jhJGs2MUTb4&t=1408s))

A pivot into autobiography: in 1999, working in Bangkok, Bruce was diagnosed with multiple sclerosis, the only English-language information he was given was photocopied autopsy photographs, and he went to an internet café and discovered Jooly's Joint — a global support network for people living with MS that ended up changing his life.

> "the only English language information they could give me was xeroxed from a medical textbook, and the illustrations were encouraging photographs of autopsied brains"

> "I typed in 'multiple sclerosis' into AltaVista... and I found this — Jooly's Joint, a global support network for people who live with MS"

> "I'm talking through the computer with people from the UK, US, Australia, Canada, Germany, New Zealand, Sweden, Switzerland... this blew my mind"

## The web is people ([26m36s](https://www.youtube.com/watch?v=jhJGs2MUTb4&t=1596s))

The follow-up: he eventually met Jooly herself when commissioning an accessibility book back in the UK, and the friendship that followed crystallised what the web actually is — not computers, not clouds, not tubes, but a network for connecting human beings.

> "what is the web? It's not computers — it's powered by computers, but it's not computers"

> "the web is people. It's about communicating with people"

> "my degree is English literature and drama, and I got into the web because I'm interested in communicating"

## Asia, Africa and where growth actually is ([28m12s](https://www.youtube.com/watch?v=jhJGs2MUTb4&t=1692s))

Half the world's population lives inside the circle bounded by Asia and that's where the customers actually are — China's Double 11 took $9.2 billion online to Black Friday's $2.9 billion — and by 2100 Africa is projected to have five billion people on its way to becoming the bigger story.

> "more than 50% of the population of the world live inside this circle"

> "Black Friday and Cyber Monday in the US took 2.9 billion dollars online. On Double 11 day... in China... they took 9.2 billion online"

> "by 2100... when global population will peak at 11 billion people... there will be five billion people living in Africa"

## Digital divides and locally relevant content ([33m30s](https://www.youtube.com/watch?v=jhJGs2MUTb4&t=2010s))

The biggest barriers to web access in 12 of 13 surveyed African countries aren't affordability or coverage — they're awareness, digital skills and the lack of locally relevant content. 50% of websites are in English; only 0.1% are in Hindi.

> "lack of awareness of locally relevant content"

> "50% of the websites are in English, although that's only spoken by 10% of the population"

> "seven of ten people in Africa who do not use the internet say they don't know how to use it, and four of ten don't know what it is"

## PWAs, responsive images and the cost to users ([41m00s](https://www.youtube.com/watch?v=jhJGs2MUTb4&t=2460s))

Ship a PWA, not a native app — a 20MB binary download takes 30 minutes on a flaky Indian connection and competes with the user's family photos for space — and shrink your images, because the average 3.3MB page costs a Nigerian 28 hours of work to download on entry-level mobile broadband.

> "downloading a typical native app of 20MB takes 30 minutes in India and is most likely to fail because of flaky network connections"

> "25% of new Android devices ship with only 512MB of RAM and limited storage space. With space that's limited, the user is comparing their personal photo collection with the adoption of a new app"

> "in Germany... you work for one hour. In the States you work for six hours. In Nigeria you work for 28 hours"

## Guardians of the web ([44m39s](https://www.youtube.com/watch?v=jhJGs2MUTb4&t=2679s))

The closing call: the YouTube child-abuse generators, Amazon's bot-generated scam products, Facebook's amplification of violence in Myanmar — the big platforms profit and the developers who build for them are the only people in a position to keep calling out what their tools are being used for.

> "these big companies — Google, Apple, Facebook, Amazon, Twitter — these are not neutral platforms. If you have these platforms that you're making money from, you have an ethical duty and a responsibility"

> "you are the Thomas Telfords and the Isambard Kingdom Brunels of this new industrial revolution — do it wisely"

> "if my hippie bullshit has offended you, let's look at some money"

---

Bruce Lawson opens with a defence of CSS, a pitch for Wix's Stylable preprocessor and a sharp parody of the CSS-in-JS holy war, then pivots into the talk's real argument via a Bangkok MS diagnosis, AltaVista, and a global support group called Jooly's Joint. *The web is people.* The people are increasingly not in San Francisco — they are in Asia and Africa, where a 20MB native app takes 30 minutes to download, where a 3.3MB page costs a Nigerian 28 hours of work, and where most of the content is in the wrong language. Ship a PWA, ship lighter, ship localised, and remember you are the Brunels of this industrial revolution.
