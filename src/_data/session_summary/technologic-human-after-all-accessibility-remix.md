## Daft Punk and the accessibility remix ([0m12s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=12s))

Léonie Watson frames the talk around the lyrics of *Technologic* — "use it, break it, fix it, trash it" — using each line as the heading for a different aspect of building accessible interfaces.

> "I'm going to use one of my favourite tracks, a song called Technologic by Daft Punk"

> "it has some lyrics that sort of helped me think about accessibility, and I hope they'll do the same for you"

> "this is how a lot of people feel about accessibility, I think — do we buy it in? Do we have the skills in-house?"

## HTML gives you accessibility for free ([1m14s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=74s))

Most HTML elements come with a role, a built-in way to compute an accessible name, and meaningful state information; `<div>` and `<span>` are the conspicuous exceptions and are precisely the building blocks framework authors love to reuse.

> "if you just use languages like HTML, you get a lot of accessibility for free"

> "the anchor element has a role of 'link' and it also has something called an accessible name; in this case, that's the link text"

> "anything you put inside a div or a span pretty much just appears as plain text and nothing more interesting"

## DOM order is keyboard order ([5m57s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=357s))

The browser hands you keyboard focusability for anchors, buttons and form controls — and tabs through them in the order they appear in the source, which sets up the relationship that flexbox is about to break later in the talk.

> "if you're using the tab key to move through a page from one focusable element to the next, you get them in the order they appear in the DOM"

> "you also get expected interactions provided by the browser when you use these things"

> "the expectation is that you can use the space key to activate something that looks like a button"

## The accessibility tree ([7m31s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=451s))

When the browser builds the DOM it also builds a parallel accessibility tree — that's what assistive technologies query through platform accessibility APIs, and an emerging Accessibility Object Model spec will eventually let us read and write the same tree from JavaScript.

> "the accessibility tree contains accessibility information that assistive technologies like screen readers and speech recognition tools can query to find out what things on screen actually are"

> "when we manipulate the DOM through scripting or user interaction, the DOM gets updated, that triggers an update to the accessibility tree"

> "the accessible object model... will give us as developers access to the accessibility tree in the browser"

## ARIA: filling in the gaps ([10m31s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=631s))

ARIA does not change the DOM but it does let you overwrite the accessibility tree — adding roles where there aren't any, providing accessible names with `aria-label` and `aria-labelledby`, and signalling state with attributes like `aria-pressed`, `aria-expanded` and the newer `aria-current`.

> "it's a very screen-reader-specific technology — it's great at doing what it does for screen readers but it has a fairly limited application outside of that particular user group"

> "you can provide the accessibility role for the benefit of assistive technologies"

> "aria-current is reasonably new in ARIA 1.1, and that's for indicating something that's the current thing or the selected thing inside a set"

## Fixing a disclosure widget the hard way ([12m35s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=755s))

A worked example: start with a `<span>` and a `<div>` and rebuild a fully accessible disclosure widget — `tabindex="0"`, `role="button"`, `aria-expanded`, `aria-controls`, hidden-icon noise removed with `aria-hidden`, and keyboard activation scripted for both Space and Enter.

> "if your keyboard user and you can't focus on a thing to interact with it, that's pretty much game over player one"

> "if something is a button and it's collapsed, you start to get the impression that if I hit this button, maybe something will expand or be revealed"

> "had we used a button element instead of a span, we wouldn't have had to worry about the tabindex, the role of button, we wouldn't have had to provide the JavaScript to provide the keyboard functionality — it's something like 25% less code"

## Testing with Tenon and the framework toolkits ([20m45s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=1245s))

Karl Groves' Tenon API plugs into Grunt or Gulp, runs WCAG checks at the certainty level and breakpoint you specify, and tests against the actual rendered page rather than static source; Ember and React both have accessibility test suites, and Angular has the `ngAria` module.

> "a lot of accessibility sometimes can feel very subjective and hand-wavy... Tenon tries very hard to make it as rational and logical as possible"

> "it's really good to have your tool actually look at code once it's being displayed in the browser, because that's the accessibility experience that someone using an assistive technology is going to receive"

> "if you're using Ember, it's worth pinging the Ember community — there's some guys doing some really serious work to make Ember itself as accessible as possible"

## Try it yourself ([25m20s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=1520s))

The least technical and most useful test: unplug your mouse and try the keyboard, then turn on whichever screen reader you already own — triple-click home on iOS, Windows+Enter for Narrator on Windows 10, Cmd+F5 on macOS, TalkBack on Android.

> "unplug your mouse and see if the thing you're building works with a keyboard"

> "you all have screen readers whether you knew this or not"

> "don't go making any huge decisions based on your experiences because you'll get lost and you'll get really confused — and that's okay"

## CSS pseudo-content and the accessible name ([26m20s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=1580s))

The 1996 Space Jam website (still online) is the inverse of separation of concerns; CSS gave us style overrides and pseudo-content, and despite the CSS spec saying generated content never reaches the DOM, every major browser quietly folds `::before` and `::after` content into the accessible-name computation.

> "this is what the spec says about generated content: if you add content using CSS, the CSS spec says it doesn't get as far as the DOM"

> "against all the odds and certainly against all the spec advice, you actually get all the information"

> "somewhere in the depths of that algorithm it says that if there is CSS generated content, add it to the existing accessible name"

## Flexbox, the order property and the keyboard disconnect ([32m04s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=1924s))

Flexbox's `order` property reflows visual content but the keyboard still tabs through DOM order — and none of the workarounds (positive `tabindex`, `aria-flowto`) really fix it. Firefox has a "bug" that re-orders the tab sequence to match flex order, which may be the right answer.

> "we start getting this flex / keyboard disconnect — things don't really make sense in terms of the way someone who's using a keyboard interacts"

> "when you start using positive numbers for tabindex you have to take ownership of the entire keyboard interaction for the application"

> "Firefox has done all the heavy lifting for us... maybe give us as developers a way to turn this feature on and off"

## We are human after all ([38m45s](https://www.youtube.com/watch?v=spxT2CmHoPk&t=2325s))

The closing message: accessibility does not have to be perfect, just a little bit better than yesterday — and a remix of the entire *Technologic* sample list maps the whole talk back to the song.

> "we just have to make it a little bit better than we did yesterday, and if you can kind of stick to that idea, I think we'll all be heading in the right direction"

> "the people we're trying to make things better for are human after all"

> "if we can do just one thing to make it a little bit better than we did yesterday, then I think we can call that a win"

---

Léonie Watson paces accessibility theory against the cut-up vocal of Daft Punk's *Technologic*, and the lyrics map cleanly onto the discipline: *use it, break it, fix it, trash it*. She installs the mental model most developers are missing — the accessibility tree as a parallel structure to the DOM — then walks a `<span>` and `<div>` all the way up to a fully accessible disclosure widget before delivering the punchline that a `<button>` would have saved 25% of the code. Surprises land late, from CSS generated content sneaking into accessible names to the Flexbox order/tabindex disconnect, closing on a bar low enough to actually clear.
