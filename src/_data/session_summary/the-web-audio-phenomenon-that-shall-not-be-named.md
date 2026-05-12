## Welcome to the whirlwind tour ([0m24s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=24s))

John Paul opens by flagging that the next forty minutes will weave between his recreational obsession with human languages, a head-bending psycholinguistic illusion and the Web Audio API.

> "this talk is going to be a little bit of a whirlwind tour for for all of you for me to talk about both exploration around my interest in linguistics as well as some really really interesting phenomenon"

> "I am extremely extremely addicted... if I lost this I would cry like a baby"

> "I also wrote some little note app with twilio to text me multiple times during the day in case i forget"

## Hunting down Malayalam ([2m56s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=176s))

His family speaks the south Indian language Malayalam, which he can understand but not speak, and the only learning material in existence is a sixties-era Peace Corps textbook he had to bribe a university library to photocopy.

> "Malayalam has 38 million speakers... Swedish has about 9 million native speakers. I can walk down the street from my apartment in two minutes and get twenty dollars an hour class to learn Swedish there is absolutely no classes from Molly"

> "I called him and he was basically like I'm retired man I have no idea what you're talking about"

> "they will photocopy it for me and they will mail me a photocopy"

## Mouth diagrams and four 'na' sounds ([7m04s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=424s))

The book's painstaking diagrams of tongue position open his eyes to the phonemes English collapses together, and lead him to realise that linguistics and programming share a surprising amount of DNA.

> "English has one na n sound malayalam has nuh nuh nuh nuh it's for different sound"

> "na na na and na are all described in excruciating detail including tongue position in words not just in pictures in this book"

> "linguistics and programming are really brothers from another mother"

## Syntax: programmer versus linguist ([9m08s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=548s))

Both disciplines mean roughly the same thing by *syntax* — breaking input into structured tokens — illustrated through a missing JavaScript parenthesis and the different subject-verb-object orderings of natural languages.

> "if you were fortunate enough to be working in Internet Explorer you have seen something like this beautiful error message that says online 86 well right there there is an expected parenthesis"

> "english is subject verb object you say like i am john i eat fish... whereas other languages you actually say the object before the the verb so I fish eat"

> "realizing that the language that my parents are speaking to me in does not match at all how things work in English"

## Semantics and Chomsky's nonsense sentence ([11m46s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=706s))

A piece of code or a sentence can be syntactically perfect yet semantically empty, as Chomsky's famous *colourless green ideas sleep furiously* demonstrates, and the same ambiguity creeps into sentences like "Sherlock saw the man using binoculars".

> "the semantics of a piece of code is what it actually means"

> "Sherlock saw the man using binoculars... Sherlock is seeing a man using binoculars"

> "colorless green ideas sleep furiously... it intrinsically feels like a sentence that's let's legit"

## Pragmatics, the missing third leg ([14m20s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=860s))

Natural language has a layer above syntax and semantics — what the speaker actually intends by uttering something — captured perfectly by the polite host who looks at his watch and says "it's getting late".

> "what is my actual pragmatic intention here it's to say go home just go home it's late I gotta go to sleep"

> "pragmatics is about impact... not just what you are saying is syntactically valid not just about the meaning"

> "I've never thought about how human languages natural languages have this completely new and different concept called pragmatics"

## Grice's maxims and conversational implicature ([16m53s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=1013s))

Paul Grice's cooperative principle and its four maxims — quality, quantity, relevance and manner — explain how listeners reliably infer meaning that was never explicitly stated, something programming languages cannot yet do.

> "we are all in... most situations trying to convey meaning in good faith to other people by the way we communicate"

> "if I say I like some cookies I'm implying to you there are some cookies I don't like"

> "Remy stole my Cheetos because his fingers are orange"

## The McGurk effect, live ([22m30s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=1350s))

A live demonstration: the same clip is heard as "vase" with eyes open and as something else entirely with eyes shut, revealing that vision can override hearing by as much as a 200 millisecond delay.

> "the entire video I was actually saying the word vase... most people I think it's like ninety percent or something of the population hear the word base"

> "our brains interpret more what our eyes are seeing then necessarily what our ears are hearing"

> "this is completely screwing with my head as to how oh how all of this will work"

## Building makemcgurk.com ([27m49s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=1669s))

He wanted anyone to record their own McGurk video in the browser, but the pure-web stack — getUserMedia, MediaRecorder and an Emscripten build of ffmpeg — turned out to be far too slow, so he reluctantly shelled out to native ffmpeg from Node.

> "ffmpeg as a JavaScript file that turns out to be roughly 50 megabytes of JavaScript"

> "to actually convert a 10 second video to encode a 10 second video it takes about two minutes"

> "eventually what I ended up doing was using a little bit more convoluted Rube Goldberg like style... I shelled out to ffmpeg and I got it done really quickly"

## Wrestling with Web Audio's clocks ([33m36s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=2016s))

Web Audio's internal clock is extraordinarily accurate, but synchronising it with `setTimeout`, `requestAnimationFrame` and a metronome to splice audio between two recordings turned out to be the hardest part of the build.

> "the libraries in Web Audio make me sort of feel like 2007 web dev where it is jQuery prototype mootools dojo and something else"

> "web audios timer is actually immensely accurate it is 14 significant digits on the millisecond or something... but set timeout... is not nearly as good"

> "this is a project that is continuing to grow and build for me"

## Side projects and gratitude ([38m12s](https://www.youtube.com/watch?v=ztZ3fFlShmg&t=2292s))

John closes with a nudge to chase the overlap between programming and your other interests, plus a heartfelt thank-you to his fiancée for two months of putting up with him muttering "base… face… vase" into a webcam.

> "I encourage all of you to explore the things that you were actually interested outside of programming"

> "my my fiance has had to deal with me randomly saying base"

> "she's done a lot of listening to this and i'll be marrying her in 28 days"

---

John Paul stitches together three obsessions: hunting down Malayalam learning materials, the brain-bending McGurk effect, and the Web Audio API. Along the way he sneaks in a programmer-friendly tour of syntax, semantics, Chomsky's colourless green ideas and Grice's cooperative principle, then flips the script with a live demo where your eyes overrule your ears and the same clip becomes a different word. The technical payoff is a postmortem of [makemcgurk.com](https://makemcgurk.com), where Emscripten-compiled ffmpeg collapses, a Node shell-out rescues the build, and Web Audio's freakishly accurate clock refuses to play nicely with `setTimeout`.
