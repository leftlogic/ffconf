---
title: 🚂 Fast web apps, password rants, a look back on HTML5
date: 2026-10-29
---

## Latest Event News

Introducing our final speaker: Matthew Somerville who will be sharing with us: "The journey of a fast accessible web app: lessons from 25 years of traintimes.org.uk".

***Did you know there's 2 weeks left until [FFConf](https://2026.ffconf.org/)!***

In his talk, Matthew show how he's been running and supporting (the excellent) traintimes web site, that's always been accessible and fast - and importantly why you should care too.

In the interview, we asked: **What made you want to build your own train times site back in 2001?**

> […] I frequented newsgroups (the Discord of the 90s), where National Rail's live departure board rubbishness was being discussed, and as a frequent train traveller myself, I decided to use my web/programming skills to let me transform the information from a website into a more usable form.

Read [Matthew's full interview](https://ffconf.org/articles/2026-meet-the-speaker-matthew/) and meet him and [all our speakers on 13th November](https://2026.ffconf.org/).

## From Our Archive

Some of our favourite talks at FFConf are those that were conceived from a rant and Blaine Cook tells us [His Password Doesn't Work!](https://ffconf.org/talks/my-password-doesnt-work/)

He says we live in a broken world (and that was back in 2017!) and we have internalised living in this broken world. A main takeaway is always secure your primary email address!

He highlights Martin Paul Eve from his book 'Password'.

> the reason the term 'identify theft' is favoured over any of the alternatives is that it absolves institutions in the digital world of responsibility for the inherent flaws in their authentication systems

![Blaine looks on at the screen where the user is prompted to pick their favourite colour from a full 360 degree colour wheel](https://assets.ffconf.org/img/2026/10/e79TnMb1nv-37617510634-blaine-cook-ffconf-2017-day-2.avif "Reminds us a little of the https://neal.fun/password-game/")

## Community News

Yesterday, 12 years ago on 28 October, HTML5 moved to W3C Recommendation stage. Something, I suspect, we all use in some way in our work.

So to mark that date, here's some HTML5 "fun" facts (we're such dweebs):

- HTML5 become a recommendation specification on [28 October 2014](https://en.wikipedia.org/wiki/HTML5#Timeline), and yet HTML5 was "retired" in 2021 (but became a _living standard_)
- HTML5 started life as two specifications: [Web Applications 1.0](https://www.w3.org/2004/04/webapps-cdf-ws/) and Web Forms 2.0 - but was proposed to [rename and merge](https://lists.w3.org/Archives/Public/public-html/2007Apr/0429.html) around 2007
- Parsing recovery has always been in browser, but along with leaving off `</p>` tags, and auto conversion of `</br>` to simply `<br>` - did you know the `<image>` tag is quietly rewritten to `<img>`? From the spec: ["don't ask"](https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inbody) 😂
- `document.all` is a "host exotic" object, that is apparently obsolete, and `typeof document.all` is `undefined` [yet it still works](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) (a quirk that was moved to ECMAScript) - because backward compatibility is the backbone of the web 💪
