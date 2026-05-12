## Why this talk: winning, not warning ([0m23s](https://www.youtube.com/watch?v=Jp6-9X-ZClk&t=23s))

Marcy Sutton, accessibility engineer at Adobe, frames the talk around a deliberately positive angle — mobile accessibility usually gets left behind, so the only way it improves is if people start treating it as a thing you can win at rather than something to feel guilty about.

> "winning to me is rolling around on the ground being smothered by puppies because I'm sort of dog obsessed"

> "it sort of gets left behind, and so if we position it as something positive in some way that we can make the experience better we can actually win at this"

> "I'm also wearing a sparkly jacket because why not"

## Who actually needs accessibility ([3m26s](https://www.youtube.com/watch?v=Jp6-9X-ZClk&t=206s))

The 15–20% global figure for people with disabilities covers vision, hearing, motor and cognitive needs — and the Microsoft Inclusive Design Toolkit's "permanent, temporary, situational" framing brings most people in the room into scope at some point in their lives.

> "estimates that accessibility represents 15 to 20% of the global population"

> "if you had an arm injury that would take you from all of a sudden you didn't have a disability to you have a temporary disability"

> "I bet you're one degree away or it could affect you in the future"

## Reasons that finally land ([4m29s](https://www.youtube.com/watch?v=Jp6-9X-ZClk&t=269s))

She lists the four arguments she uses to push accessibility up the chain — sales dollars currently being left on the floor, real legal risk, the innovation opportunity, and the simple fact that it is the right thing to do.

> "you are potentially leaving sales dollars on the floor by not making your apps accessible"

> "it's really freaking cool to make something that's well designed and technically awesome that's accessible"

> "I have a lot of friends with disabilities and so it means a lot to me to put out work that my friends can actually see and use"

## The mobile screen-reader landscape ([7m02s](https://www.youtube.com/watch?v=Jp6-9X-ZClk&t=422s))

WebAIM's screen-reader survey shows iOS overwhelmingly ahead of Android in accessibility use, and nearly half of respondents already use a mobile screen reader as much or more than a desktop one — so VoiceOver, TalkBack, switch control and the various magnification modes are not niche use cases.

> "overwhelmingly on mobile, iOS is winning"

> "just under half of the people who responded to this saying that they actually use mobile screen readers"

> "yes, mobile screen readers are a thing"

## The barriers: locked zoom, visual clutter, ambiguous icons ([11m35s](https://www.youtube.com/watch?v=Jp6-9X-ZClk&t=695s))

Real-world friction comes from disabled pinch-zoom (which forces users into OS-level magnification), microscopic type, overcrowded pages with no visual hierarchy, and unlabelled icons that demand cultural context — a floppy disk, a hamburger, a house — that not everyone has.

> "the text just ends up being so small to try and fit everything into one column... that the text is so small that you can barely read it"

> "if there's so much crammed into a small space it makes it really hard to look at anything"

> "a house that looks like a house might mean home here, but to our refugee... how does that mean home?"

## When gestures collide with screen readers ([15m43s](https://www.youtube.com/watch?v=Jp6-9X-ZClk&t=943s))

A walkthrough of an Ionic swipe-card demo on iOS shows how custom gestures fight VoiceOver's own gesture grammar to the point where the screen reader user simply cannot operate the interface — the only safe fix is to add real on-screen controls alongside the gesture.

> "the screen reader has gesture support, it has its own set of gestures, they conflict with what's happening on the screen"

> "if you're blind, how do you figure that out?"

> "add some affordances to the UI so that a user can actually navigate still without using the swipe"

## Use HTML buttons, label everything, fatten touch targets ([21m22s](https://www.youtube.com/watch?v=Jp6-9X-ZClk&t=1282s))

Reach for native semantics first (CNN's hamburger is a `<div>` with no text — invisible to a screen reader), reach for `aria-label` second, and grow your tap targets so a screen-reader user who cannot see the focus outline still lands on the button rather than just to the side of it.

> "you can use Aria, but a lot of work has gone into creating semantic HTML elements that have accessibility built in"

> "this is probably the biggest or the easiest win in mobile accessibility — would be to actually label things"

> "when I fire up mobile VoiceOver and it actually outlines the target, it's just the width of the X. That's not very big for human fingers"

## Crafting mobile tab order ([25m27s](https://www.youtube.com/watch?v=Jp6-9X-ZClk&t=1527s))

A common but invisible failure mode: VoiceOver lets the user swipe through every link, heading and button on the page — including the ones you have only visually scrolled off-screen — so huge.com's panel-snapping homepage leaks all the supposedly-hidden panels into the screen-reader's tab order.

> "we have that same affordance actually, you just swipe left or right and you can go through every link in a mobile site"

> "I'm cycling through content that's visually hidden, that's super confusing"

> "the content that's visually hidden has not actually been hidden"

## Hiding content properly with `aria-hidden` and `tabindex` ([29m32s](https://www.youtube.com/watch?v=Jp6-9X-ZClk&t=1772s))

`display: none` correctly hides things from screen readers but you cannot animate it, and it nukes content the dialog backdrop actually needs to dim rather than remove — the production-grade pattern is `aria-hidden="true"` on the region plus `tabindex="-1"` on each interactive child.

> "display none in CSS will properly hide something from a screen reader, but it's not animatable"

> "any buttons or links or form controls that are inside of that, we have to actually pull out of the tab order"

> "the tab index goes on the actual interactive item like a link or a button, and then aria-hidden will also hide it from a screen reader completely"

## The state of mobile-accessibility tooling ([32m38s](https://www.youtube.com/watch?v=Jp6-9X-ZClk&t=1958s))

Desktop has decent tooling (the Chrome accessibility developer tools, the `aXe` extension), iOS Safari only has a node inspector and badly needs an audit, and the closest existing experience to "audit your live mobile site" is tethering an Android device and running Chrome accessibility devtools against it.

> "we don't however have anything that actually runs a screen reader and tests against that"

> "there's actually an item in the WebKit bug tracker to add an accessibility audit in Safari — this is a huge deal"

> "if you're wanting to get into accessibility and looking for a good tool, I would highly recommend getting the axe extension"

---

Marcy Sutton reframes mobile accessibility as something you can *win* at rather than something to feel guilty about, and then loads you up with the patterns to do it. She opens with the headline numbers — 15–20% of the global population, mobile screen-reader use much higher than developers assume — and links them to four arguments you can take to the next budget meeting. The middle is the actionable core: pair every barrier with its fix. Use `<button>` not `<div>`, label icons, fatten touch targets, give swipe carousels real controls, and remember that *visually hidden* is not the same as *hidden from a screen reader*. The huge.com and Ionic walkthroughs are sharp, generous and immediately useful.
