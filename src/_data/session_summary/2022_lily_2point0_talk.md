## Crochet is hidden programming ([0m34s](https://www.youtube.com/watch?v=mcbg_mCQOHs&t=34s))

Lily Madar, software engineer and crochet crafter, opens with the observation that started the talk: as she made flower after flower from instructions, she realised she was doing a computer's job — running an algorithm, parsing a programming language — just with yarn and a hook instead of CPU and RAM.

> "I was basically doing a computer's job, passing instructions at runtime and following an algorithm"

> "crochet and all the yarn crafts more broadly were maybe a form of programming hidden in plain sight"

> "tech, after all, is more about people than computers"

## Open-source crochet and Mademoiselle Riego ([4m10s](https://www.youtube.com/watch?v=mcbg_mCQOHs&t=250s))

Mademoiselle Riego, an Irish lace and crochet pioneer, published dozens of pattern books from a young age in the 19th century — but because crochet terms hadn't been standardised yet, the books contained *actual stitched samples*. People reproduced and modified those samples the way developers fork a repo today. Ravelry is the modern GitHub-equivalent.

> "she was a pioneer in open source. Open-source crochet, of course"

> "people would easily reproduce and amend those patterns, a bit like reverse-engineering them by exploring the source code"

> "in Ireland, it's said that you leave a bit of your soul trapped in everything you crochet — so to avoid this, you should always work a hidden mistake so that your soul can escape... it sounds very much like the all-too-familiar 'this is a feature, not a bug'"

## Jacquard looms, punch cards and Ada Lovelace ([7m15s](https://www.youtube.com/watch?v=mcbg_mCQOHs&t=435s))

Jacques de Vaucanson designed a punch-card system for weaving in 1745. The Jacquard loom (1801) used it. Ada Lovelace and Charles Babbage's analytical engine (1842) borrowed both the punch cards and the textile terminology — yarns brought to the *store* from the *mill* became numbers brought to the store from the arithmetic mill.

> "the analytical engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves"

> "in textile, the yarns are brought to the store from the mill, where they're woven into fabrics... in the analytical engine, it isn't yarn but numbers"

> "Mademoiselle Riego created crochet patterns to be computed by humans"

## What counts as crochet software ([11m01s](https://www.youtube.com/watch?v=mcbg_mCQOHs&t=661s))

If software is *the programs and information used by computers*, and crocheters are human computers, then crochet patterns are software — self-replicating information passed from one crocheter to the next. Early crochet stitches were simple enough to become muscle memory, so people could crochet while talking, praying, travelling — automation in human computers.

> "there is such thing as crochet software"

> "people would start crocheting while talking, praying, travelling, eating... so there is a form of automation in both mechanical and human computers"

> "today, we see a multiplication of code clubs, Women Who Code initiatives, spreading coding techniques far and wide"

## Stitches as the standard library ([12m35s](https://www.youtube.com/watch?v=mcbg_mCQOHs&t=755s))

The basic stitches are the language primitives, and they were finally standardised in the UK in 1950 — except a *UK double crochet* is a *US single crochet* and a *US double crochet* is a *UK treble*, so the same identifier means different operations across dialects. The symbol charts that crochet patterns now use are effectively the universal IR.

> "no matter how complex the crochet stitch, it always starts with one loop on the hook and ends with one"

> "fundamentally different stitches can share the same name in distinct languages"

> "each symbol on this chart will correspond to the same stitch for you to crochet — no matter what language you speak"

## A live crochet demo as a human compiler ([16m12s](https://www.youtube.com/watch?v=mcbg_mCQOHs&t=972s))

She crochets on stage, reading the pattern from her screen as a "human computer with a compiler in my hand". Colour changes mean handling two yarn strands at once — *literal multi-threading*. Running out of yarn before the colour change is *thread chicken*. Mis-counting is a race condition.

> "I'm a human computer with a compiler in my hand, interpreting a pattern at runtime"

> "as I come to a change of colour in the pattern, I will have to deal with literal multi-threading"

> "I can sometimes encounter race conditions, either if I run out of yarn before I'm done using it — that's also known as thread chicken — or if my mind jumps ahead and I miscount"

## Debugging and weaving in the ends ([17m44s](https://www.youtube.com/watch?v=mcbg_mCQOHs&t=1064s))

*Blocking* in software suspends a thread; *blocking* in yarn crafts fixes a finished panel to the right shape and size. You debug by stepping through row by row, pulling out incorrect rows is cheap, and the mandatory post-production step is *weaving in the ends* — without it, your work is in beta.

> "the only acceptable form of blocked chain is with yarn"

> "you can put break points and step through your code — meaning you can wait until the next row to see if things align properly"

> "if you haven't done [the weaving-in], it's a bit as if you've left lorem ipsum in your content and hit publish"

## Hacking with yarn ([19m16s](https://www.youtube.com/watch?v=mcbg_mCQOHs&t=1156s))

Yarn crafts have been a hacker medium for centuries — Phyllis Latour hid coded messages in her knitting as a British secret agent in WWII (and is now 101). Eden Cottage Yarns made a cardigan with a Morse-code message in tribute to Bletchley Park's human computers. Google's Project Jacquard turned woven fabric into a capacitive touch interface.

> "Phyllis Latour... used her knitting needles to hide coded messages she sent from Normandy during World War II — and she turned 101 last year"

> "yarn crafters have been experimenting with cryptography, hiding secret codes and messages in their items from very early on"

> "Google and their Project Jacquard transform woven fabric into a touch interface"

## Pixel patterns and accessibility ([22m48s](https://www.youtube.com/watch?v=mcbg_mCQOHs&t=1368s))

She built her own pattern-generator app for *corner-to-corner* crochet because the manual stitch-by-stitch counting was the bottleneck. The app speaks the pattern aloud diagonally, which both unlocked a personal performance optimisation *and* would be the path to crochet for users who can't read a chart — much as accessibility unlocks software for many more people.

> "the most tedious part was to stop and count tiny squares on the sheet of paper and cross out the ones I had done — so I fixed it"

> "having a voice reading out patterns could also unlock access to crochet for a wider range of people"

> "Mademoiselle Riego received a certificate of merit in 1871 for teaching crochet to a blind lady who then went on to make items for the Pope"

---

Crochet isn't *like* programming, it *is* programming, and this talk defends that claim with surprising rigour. Lily traces a real lineage from Mademoiselle Riego's reverse-engineerable stitched samples through Jacquard's punch cards to Ada Lovelace's analytical engine, then drops developer-grade rhymes that actually work: managing two yarn strands is literal multi-threading, *thread chicken* is a race condition, blocking a panel matches blocking a thread, weaving in the ends is your lorem-ipsum check. She crochets live while interpreting a pattern at runtime, then flips the whole talk: programming is what crocheters have always done.
