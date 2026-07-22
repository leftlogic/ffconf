---
title: "Meet our 2026 speakers: Niels on CSS is DOOMed"
date: 2026-07-22
---

We are welcoming Niels Leenheer with his talk: ["CSS is DOOMed"](https://2026.ffconf.org/#niels) at FFConf 2026.

We wanted to also thank Niels for taking the time to answer our questions so we can all get to know them a little bit more before [Friday 13th November](https://2026.ffconf.org).

## About Niels and their talk

![Under vibrant purple stage lighting, a bearded man wearing LED-illuminated matrix glasses that reads "NIN" and a dark zip-up hoodie over a graphic t-shirt presents animatedly with both hands raised.](/images/articles/meet-speakers/2026-niels.avif){.mini-pic}

- **Title:** CSS is DOOMed
- **About the talk:**  Let's take CSS where it has not gone before. What would happen if you took the classic game DOOM and tried to recreate it in CSS? Every wall, floor, ceiling, barrel, imp and fireball is a `<div>`. Thousands of them in total, all positioned in 3D space using CSS 3D transforms that will almost bring browsers to their knees. Sprinkle on a good dose of CSS trigonometry functions, animations, filters, clipping paths, animations and transitions… and a bit of JavaScript too, and you'll get a fully playable game - even with network multiplayer support.

- **Niels's origin story:** I created my first website in 1994. More than 30 years later I am still creating stuff for the web – with slightly more divs and JavaScript, and a bit less tables, frames and image maps. The web has taken an amazing journey and I am so happy to be a part of it.

## The warm up questions

**What's the most cursed thing you've ever built in CSS just to see if you could?**

> Somehow that shouldn't be a difficult question to answer, but I'm afraid in my case it is. I've been experimenting with CSS for almost 30 years, and pretty much everything we did in those early years was about finding new ways to make CSS do increasingly difficult layouts with ever more convoluted techniques.
>
> Beyond that, a few projects come to mind. CSS DOOM is certainly a top contender. Drawing SVG with CSS animation on a vintage oscilloscope was up there too – right until the moment the scope exploded. But in the end I'd have to give it to the CSS Flamethrower: a project that let me use CSS custom properties and animations to control a real-life flamethrower.

**You built your first website in 1994: tables, frames and image maps and all. What's something today's CSS lets you do that would have felt like pure magic back then?**

> The last 30 years on the web have been a constant onslaught of pure magic. If you'd asked me 20 years ago, I would have said absolute and relative positioning. Fifteen years ago, it would have been media queries and flexbox. Then came custom properties, and Grid, and :has(). But right now? I still can't believe we finally have container queries and anchor positioning.
>
> And while we complain about the web being overshadowed by frameworks and held back by the whims of browser vendors, the reality is that developing for the web has never been as amazing as it is today.

## About the work and the talk

**You even got network multiplayer running. How much JavaScript did you have to "sprinkle on" before it stopped being a CSS project?**

> Define 'sprinkle'... When I started the CSS DOOM project earlier this year, I originally wanted to use as little JavaScript as possible. But that is, of course, relative. While the rendering is fully in CSS, the actual game loop is a somewhat loose port of the original game, and we need JavaScript for that. In the original game the renderer and game loop were intertwined, and a lot of work went into separating the two — so that the renderer could just take simple commands from the game loop and translate them immediately into CSS by setting classes or custom properties. For example, when you walk around the level, the game loop does all kinds of calculations in JavaScript, but all the renderer does is update four CSS custom properties, and the browser just renders the scene for you.
>
> That's also what made network multiplayer relatively easy to bolt on. Yes, it involved a lot of extra JavaScript for the WebRTC connections, but the renderer just worked.

**After 30+ years on the web, what still makes you want to try something as gloriously impractical as this?**

> I think the only appropriate answer here is "because I can." I love the web. It's been fundamental to everything I've created, and I simply can't imagine not building new things for the web platform — or exploring new directions for it, no matter how impractical or ridiculous.

---

Find out more about Niels online on their [website](https://nielsleenheer.com/) or [BlueSky](https://bsky.app/profile/html5test.com).

Join us in November to see Niels's talk: [2026.ffconf.org](https://2026.ffconf.org)