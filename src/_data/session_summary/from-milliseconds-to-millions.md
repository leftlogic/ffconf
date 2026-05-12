## Running a web-perf consultancy ([1m32s](https://www.youtube.com/watch?v=SVt7bjTwCMM&t=92s))

Harry Roberts opens by flagging this as a deliberately non-technical talk. He's a one-person consultancy — CEO, CFO, cleaner, janitor — and recently switched focus from CSS architecture to web performance, which dramatically changed the shape, urgency and budget of the projects on his desk.

> "I'm not a very good businessman. I'm not really driven by money"

> "any client who sort of kicks off a design systems project has to be a visionary client... whereas web perf has pretty much immediate returns"

> "I've had to learn kind of quite quickly how to adapt to that"

## Ask the right questions ([2m05s](https://www.youtube.com/watch?v=SVt7bjTwCMM&t=125s))

He keeps a private GitHub repo of his best business questions, because *he doesn't have all the answers*. The four that matter most: how do you know the site is slow, which areas should I look at, what will being faster mean for the business, and how do you intend to measure it.

> "I thought I can't ask my client questions, 'cause they'll think I'm a fraud — incredibly naive of me"

> "there are certain things I could never possibly know without asking the client for the answers"

> "how do I know when to stop? How do I know when we've won?"

## Nobody wants a faster website ([4m08s](https://www.youtube.com/watch?v=SVt7bjTwCMM&t=248s))

The dirty secret: nobody hires him to make a *faster* site, they hire him to make a *more effective* one. If clients literally wanted maximum speed he'd delete all their CSS and JavaScript and ship Times-New-Roman pages. The actual goal is conversions, sign-ups, donations, engagement — performance is just the lever.

> "if my clients genuinely just wanted the fastest website, I'd go in and delete all their CSS, remove all the JavaScript"

> "they want a site that's gonna make them the most money, get them most donations, raise the most awareness"

> "this newspaper... made a shit-tonne of money off of ads, but we're worried that there are too many — find the inflexion point"

## The Venezuela story ([7m41s](https://www.youtube.com/watch?v=SVt7bjTwCMM&t=461s))

A Bitcoin company in Tallinn hired him to focus on South-East Asia. Wandering off-piste in Google Analytics, he spotted Venezuela glowing dark blue — and discovered Venezuela's hyper-inflation, government-subsidised free electricity (so people could mine Bitcoin overnight for free) and a population predisposed to cryptocurrency. The client made several million by improving load times there alone — enough to hire a full-time Latin America success manager.

> "do you know about your Venezuela problem?"

> "huge government subsidies coupled with hyper-inflation means that Venezuelans don't pay for electricity — so you've got an entire country just printing money, and they want to go and spend it somewhere"

> "this client made so much cash, they had to hire a person to look after it all"

## Follow the numbers, even when they surprise you ([14m23s](https://www.youtube.com/watch?v=SVt7bjTwCMM&t=863s))

Squarespace example: he prescribed a theoretically optimal `<head>` order, they shipped it, and every metric got *worse*. He didn't argue with the theory — he reverted the change. Numbers in production trump theory.

> "numbers very, very rarely lie. They're usually telling the truth"

> "theory goes out the window — as soon as you get into prod, as soon as you go live, always follow the numbers"

> "we proved the point that OK, that doesn't work for us"

## Move slowly, ship incrementally ([15m55s](https://www.youtube.com/watch?v=SVt7bjTwCMM&t=955s))

Web-perf projects have no real urgency — the site has been slow for months already — so take the onboarding time to set up proper tooling (SpeedCurve months before the project starts). And once you do start shipping, release *one thematic change per day or week* so you can attribute the impact of each change separately.

> "the site's been slow for a while, it doesn't need fixing immediately"

> "I've never once regretted the amount of data I've had — I've only regretted not having enough"

> "day one optimise images, day two sort the heads out, day three deal with third parties — drip-feed these changes live slowly. It allows you to work out what was most effective"

## Maximise the work not done ([17m57s](https://www.youtube.com/watch?v=SVt7bjTwCMM&t=1077s))

The Vitamix case study makes the point: they already had the fastest load times among competitors but were third on start-render. The right move was to *stop optimising load* and spend an entire week in the `<head>` tags — work the customer never sees, but the metric they actually paid for.

> "maximise the work not done — be lazy, but be smart about it. Not lazy-lazy, like good-lazy"

> "their load times were already the best... so there's no point improving load any more"

> "we spent a full week... we basically spent a week working on the one bit of the site a customer never sees"

## Reading Apple's homepage from a single benchmark graph ([22m03s](https://www.youtube.com/watch?v=SVt7bjTwCMM&t=1323s))

A live performance reading of apple.com without touching the source code. From a graph of five pages × six milestones he infers: focus on the PDP, back-end is fine, there's a font-loading problem, two images need attention, JavaScript is heavy on the PDP, and the last two pages are on a different tech stack (because their start-render is offset). He confirms this last guess only after he writes it down.

> "without even looking at a single line of source code, I know exactly what my project is gonna look like"

> "knowing there's a delta between [first paint and first contentful paint] tells me we've probably got a font loading problem"

> "these two pages must have different head tags for some reason — I'm obsessed with head tags!"

## Value-based pricing ([26m08s](https://www.youtube.com/watch?v=SVt7bjTwCMM&t=1568s))

Trainline's own data showed 0.3 seconds was worth £8M a year — and Harry billed them a flat day rate. *What a mug*. The fix is value-based pricing: a *phase zero* where you set up free SpeedCurve, gather real data, run A/B tests, and put numbers against the project together with the client. Then propose a fee as a percentage of the value, not an hourly rate.

> "if I can find you 0.3 seconds, can I keep 0.3 mil?"

> "don't do it for the money, but never do it for no money"

> "if we can start rendering in a 0.9 second time frame, you stand to make around 8% more conversions a year. Across the year, that's worth one to 1.2 million, and I'll take whatever percentage I decide is appropriate"

## Budgets, normalisation, and knowing when to stop ([33m16s](https://www.youtube.com/watch?v=SVt7bjTwCMM&t=1996s))

Pragmatic performance budgets: set the budget to *the worst point in the last two weeks*, not an aspirational target. Then *normalise* perf — talk about it in standups and retros, build different dashboards for business / marketing / engineering teams. Know when to stop, because the last 50 ms of latency is rarely worth the week of work it takes, and Apple Pay at checkout could improve conversions by 17%.

> "set your performance budget to what the worst point in the last two weeks was"

> "you can just change the test so that it passes. You can't change your performance budget so that you're within it"

> "you can do all the low-hanging fruit, then you're scraping around now for milliseconds that's gonna take weeks to claw back time that is never really gonna be gained or felt"

---

Harry Roberts pulls back the curtain on running a one-person web-performance consultancy and reveals the unsettling truth: nobody actually wants a faster website, they want a more effective one. The centrepiece is the Venezuela story — a Bitcoin client in Estonia, a glowing dark-blue patch on a Google Analytics map, hyper-inflation plus free state electricity, and a week of focused work that earned the client enough to hire a full-time success manager. He reads apple.com's stack from a single benchmark graph, prescribes value-based pricing instead of day rates, sets performance budgets to the *worst recent observation* and explains, brilliantly, when to stop. *Don't do it for the money, but never do it for no money.*
