## How I got here: music, teaching, comedy, code ([1m10s](https://www.youtube.com/watch?v=_PTW_gTkZUE&t=70s))

Salma opens with a careful career walk: composition degree in 2008, folk-band gigs, terrible album-art websites, then the *School of Rock and Pop* she founded in Manchester to teach kids to be in bands. Musical comedy followed. Software in 2014. The connective thread the whole time: *putting theory into practice in front of an audience*.

> "as a musician, in order to pay the bills, you usually end up being a teacher"

> "it was about helping them put music into a real, tangible context, rather than practising alone in their rooms"

> "unlike HTML, JavaScript and CSS, some comedy is not evergreen"

## Twitch during the pandemic ([5m17s](https://www.youtube.com/watch?v=_PTW_gTkZUE&t=317s))

In 2020 she started watching Twitch and discovered the *Software and Game Development* category — small (about 1.6K average viewers at any moment), male-dominated, mostly backend, and largely C# and Rust. She decided to fill the gap: a woman, front-end-focused, who could be the niche-of-a-niche.

> "people were writing code live on stream, and people were watching. It sounds like madness"

> "the channels I saw were mainly backend development... and they were also being streamed by mainly men"

> "I thought, maybe I could fill a gap in the market — I am not a man, and I'm a front-end developer"

## The Fretinator, my first live-coded app ([7m21s](https://www.youtube.com/watch?v=_PTW_gTkZUE&t=441s))

Her first stream project was *The Fretinator* — an interactive scales-and-modes app for guitarists, built in Angular, with backing tracks her husband Mark sourced for every key/mode combination. The point wasn't Angular; the point was the same as the School of Rock: *theory in tangible context.*

> "I learn best by building stuff and putting things into real context"

> "160 jam tracks for every note and scale combination were painstakingly, manually sourced — not using ChatGPT — for your entertainment"

> "it's about putting the theory into practice in tangible and meaningful ways"

## You are the most valuable element of your stream ([12m26s](https://www.youtube.com/watch?v=_PTW_gTkZUE&t=746s))

In seven days she had enough average viewers for Twitch affiliate status. The lesson she took from those first days: the code is incidental. Viewers come to hang out with someone they like, feel safe around people with shared interests, and be entertained — the technical content is a side effect.

> "the most valuable element to your stream, whatever you stream, is you"

> "viewers don't actually watch you to learn how to code — that's just a side effect"

> "they come to hang out with you, to feel safe in the presence of people with similar interests, and to be entertained"

## A Twitch bot for community participation ([16m33s](https://www.youtube.com/watch?v=_PTW_gTkZUE&t=993s))

She built *Panther Bot* live on stream over three years. Architecture: an Express+TypeScript backend talking to the Twitch API, MongoDB for state, a websocket connection to two React frontends that listen for events, OBS browser sources to overlay the frontends on the stream, and a desktop app called *ATUM* to send Twitch events back into OBS control.

> "building stuff for your stream live on stream with viewers, for viewers, is the best way to test functionality, get the QA going, crowdsource ideas, and again make people feel part of that process"

> "here is some probably very over-engineered architecture for your entertainment"

> "the whole thing did used to be open source, but it got too bespoke, far too silly"

## Follow alerts, profile images and stream interactivity ([19m41s](https://www.youtube.com/watch?v=_PTW_gTkZUE&t=1181s))

The follow alert is the load-bearing piece of viewer-onboarding. The Twitch EventSub API notifies the bot of a follow, the bot dedupes against the database, looks up the user's profile image, and broadcasts a websocket event. A queued React component on the OBS overlay shows the image with a custom sound. *Make viewers feel welcome and part of something* is the rule.

> "the event contains the follower name and their profile image, which is how we'll put the viewer into the stream"

> "my Twitch viewers DDoS'd Google — so that was fun"

> "everyone wants to be part of it — this is gonna become a running theme later on"

## Giveaways, backseat drivers, and the chat-as-input pattern ([25m23s](https://www.youtube.com/watch?v=_PTW_gTkZUE&t=1523s))

The pattern that powers most of the bot: TMI.js listens for chat commands like `!win` to enter a giveaway or `!bs` to put another viewer's avatar in a literal cartoon *backseat-driver car* that drives across the stream. Each command writes the viewer's profile image into a websocket event that an OBS overlay renders.

> "back-seating has always been a thing — new viewers come into the stream and just tell me what to do with no context about the problem we're solving"

> "we send the event over the websocket — again, making sure to send the profile image URL"

> "the point of the car now is to be as offensively obtrusive as possible, like back-seaters"

## Silly projects: GeoCities-themed Style Stage, the Claw web-ring, the random-code generator ([29m30s](https://www.youtube.com/watch?v=_PTW_gTkZUE&t=1770s))

A tour of stream-built nonsense: a Style Stage submission that recreates a 1999 GeoCities page entirely from CSS (data-URL pseudo-element gifs, 100-keyframe visitor counter animations, papyrus marquees), the *Claw Web Ring* as a web component with progressive-enhancement fallback, and a *random code generator* that mashes random verbs and nouns together to produce gibberish JavaScript and gets 105 npm downloads a week.

> "I did manually specify 100 keyframes live on stream — much to the frustration of my viewers, who were forced to watch me do it"

> "the aim of the Claw web-ring was to make it as easy as possible to display the web-ring widget on any website, built with any or no framework"

> "if you search for 'build test release node module' on Google, it's the top result with a featured snippet — which is one of my biggest achievements that came out of writing stupid, pointless, silly nonsense code"

## Ship your silly side projects ([44m50s](https://www.youtube.com/watch?v=_PTW_gTkZUE&t=2690s))

The closing thesis: silly side projects stick because *silly things stick*. Her primary-school teacher who taught the dangers of alcohol by wobbling around the classroom slurring his words got the lesson into a generation of pupils that has never forgotten it. Ship the dumb thing. Write the blog post about the problem you had. The audience is closer than you think.

> "the best things you can write about are the things that were difficult and the problems you solved — the chances are someone else has experienced this too"

> "ship your silly side projects — have fun, like this stupid piece of website. It just tells you whether I'm live on Twitch or not"

> "silly things stick — but we learned, and I've never forgotten this lesson"

---

Salma Alam-Naylor traces a single thread from her *School of Rock and Pop* in Manchester through musical comedy to three years of live-coding on Twitch: theory only sticks when you put it into practice in front of an audience. She opens up Panther Bot's full architecture — EventSub to websocket to OBS overlays, profile images as the load-bearing payload — then keeps escalating with backseat-driver cars, GeoCities Style Stage recreations, a web ring, an npm package that accidentally tops Google. The thesis lands hard at the end: the streamer is the product, viewers want to be *in* the show, and silly things stick.
