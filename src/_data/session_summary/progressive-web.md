## What's a Progressive Web App ([0m41s](https://www.youtube.com/watch?v=5ylZbXelPMA&t=41s))

Ada Rose Cannon from Samsung Internet opens with her own working definition — a website so good you want to save it to your home screen — and points out that the pattern has actually been around for years but only just started taking off.

> "a progressive web app is a website that is so good you want to save it to your home screen"

> "it's fast, it starts quickly... each click or tap on the page will immediately start an interaction"

> "it will work offline, you can have an icon on the home screen, and you've usually replaced some of the default web styling"

## Content vs context: where progressive enhancement lives ([2m47s](https://www.youtube.com/watch?v=5ylZbXelPMA&t=167s))

Text, video, images and audio are the content layer that works almost everywhere. The styling, scripts, manifest and service worker are the *context* layer — fine to be missing on older browsers as long as the content layer still does its job.

> "your content probably looks a bit like this — it's text and videos, images, audio — usually like the stuff which is very well supported on the web"

> "you can build a web app which works extremely well on devices which support these new features, but where they're not supported you're still going to have a great web experience"

> "the long tail of support is going to be very long indeed"

## Native is programmatic, web is interpreted ([6m55s](https://www.youtube.com/watch?v=5ylZbXelPMA&t=415s))

Native code targets a known platform and breaks catastrophically when one assumption fails; web content is interpreted by the user agent on the user's behalf, which is why the train from Clapham to Staines can deliver you only the HTML and the page still works.

> "this leads me on to the difference between really native content and web content — web content is decorative, it's meant to be interpreted, as opposed to native content which is programmatic"

> "if you're running JavaScript and one of the functions you're relying on hasn't arrived... sometimes your script will just end right there, which can leave your content totally stranded"

> "who has been on the train, loaded up a web page, and only had the HTML arrived?"

## What the web gives you for free ([10m31s](https://www.youtube.com/watch?v=5ylZbXelPMA&t=631s))

Web standards are written with privacy, security, accessibility, implementability and performance as first-class concerns — and the *extensible web manifesto* keeps the platform future-proof by letting new patterns build on existing primitives without waiting for a new standard.

> "with great power comes great responsibility, and when it comes to that, remember to re-implement what the web gives you"

> "the web is by default mostly accessible — you can make it better but by default it takes you 95% of the way there"

> "we can't build the web for the majority of people, we build the web for everybody"

## Performance, responsive design and URLs ([17m20s](https://www.youtube.com/watch?v=5ylZbXelPMA&t=1040s))

Wikipedia scrolls at sixty frames per second because the browser was built to. HTML renders progressively — you can start reading a many-megabyte HTML spec a second or two after clicking — and URLs are the most under-appreciated sharing primitive of the last twenty-five years.

> "the browser goes through great lengths to cache what it can and to make it as fast as possible — and it's one of the things that's very very easy to break"

> "you can click on the link to that page and start reading it in a few seconds, because even though your browser hasn't downloaded the whole thing, you've only downloaded maybe the first few hundred K"

> "URLs are a powerful pattern, and progressive web apps give you the ability to hide the URL of your current page, which means people don't know how to share it"

## Security and durability ([22m37s](https://www.youtube.com/watch?v=5ylZbXelPMA&t=1357s))

Let's Encrypt and Cloudflare made HTTPS free and the new generation of APIs are HTTPS-only; a Content Security Policy reduces XSS exposure further. And on top of that, the web's HTML-deprecation discipline means the first webpage ever made still works twenty-five years later.

> "with tools like Let's Encrypt... [HTTPS is] free — you can use services like Cloudflare just to stick it in front of your service"

> "HTML content is made to be archived, and you can access sites which have long since fallen off the internet"

> "I'm worried in this world of programmatic websites that in many years, when that JavaScript is broken, there's just going to be this big blank spot in 2015, 2016, 2017 where half the websites just don't work anymore"

## How native pulled content away ([26m17s](https://www.youtube.com/watch?v=5ylZbXelPMA&t=1577s))

When smartphones arrived, the industry's first reaction was to amputate the mobile web — redirect users to *m-dot* sites, throw up interstitials pushing the native app, and break the trust users had built up. The reaction since has been to imitate native's instant feel with single-page web apps.

> "we kind of cut it off from the web, and we started trying to push different content to different users either by redirecting to some m-dot website... or we would throw up an interstitial and tell them, yeah, you don't want this content, you want our app"

> "both of these patterns really trashed user engagement and trust in the web"

> "we still need to work on building this trust back up in the mobile web"

## The web app manifest and service workers ([31m25s](https://www.youtube.com/watch?v=5ylZbXelPMA&t=1885s))

The manifest describes how your app looks on the home screen (icon, background colour, theme colour); the service worker intercepts and rewrites any network request, bringing offline support, push notifications and Background Sync along with it.

> "this allows you to describe the app — how the icon on the home screen looks, the background colour when you bring it up, the colour of the status bar"

> "[the service worker is] a very, very powerful API that I think we're only beginning to scratch the surface of"

> "push notifications allow you to engage with your user without them having to unlock their phone or bring up a web browser or open your app"

## Performance: SPAs and the PRPL pattern ([35m04s](https://www.youtube.com/watch?v=5ylZbXelPMA&t=2104s))

Single-page web apps win the *instant feel* battle but lose on robustness when JavaScript fails to arrive. The Chrome team's PRPL pattern — Push minimum, Render, Pre-cache for next, Lazy-load — is the bridge between the two worlds.

> "the single-page web app pattern is actually very, very powerful here"

> "some frameworks require you to download several hundred kilobytes of JavaScript before anything loads, and if you're one of those people... where your content won't work for you at all"

> "you put down the minimum content you need to actually get something displayed to the user, and you render it... and then any further clicks will be very quick"

## Webby but feel native ([39m13s](https://www.youtube.com/watch?v=5ylZbXelPMA&t=2353s))

The closing summary: embrace progressive enhancement, do not silo your PWA on a separate domain, do not break accessibility, restore the controls you took away (back button, share, exposed URL), and remember that "if we build a website that will last, together we'll build a web that will last."

> "think webby but feel native"

> "don't be siloed — if I start seeing pwa-dot websites, don't do that, because then we're just going back to 2007"

> "by building a website that will last, together we will build a web that will last"

---

Ada Rose Cannon makes the case that the *progressive* in Progressive Web App matters more than the *app*. She inventories everything the web hands you free of charge — progressive HTML rendering, shareable URLs, accessibility, security, the fact that the first webpage still works — and shows how single-page apps quietly throw it all away. Then she layers what's worth adding: the Web App Manifest for home-screen polish, service workers for offline and push, and the PRPL pattern for instant feel without the framework tax. The takeaway lands cleanly: *think webby but feel native*, and build a web that lasts.
