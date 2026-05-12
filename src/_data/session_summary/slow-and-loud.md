## Why we need to go slow ([0m30s](https://www.youtube.com/watch?v=lQMcZtiaD0A&t=30s))

Remy opens by acknowledging the rest of the conference programme — machine learning, virtual DOM, service workers, accessibility, performance — and proposes a counter-project: deliberately make something old, slow and crappy.

> "today we have seen talks on machine learning in the browser, the web animation stuff... it is exciting time to be working with the web — it is exhausting"

> "I want to go back to a time that was simpler, where everything was just smaller and simpler and crappier"

> "there is some flashing imagery on the screen... there is some disorientating sounds... and there is also some questionable JavaScript"

## Loading a ZX Spectrum game ([3m07s](https://www.youtube.com/watch?v=lQMcZtiaD0A&t=187s))

The ZX Spectrum launched in 1982 at £120, came with a programming manual rather than a user manual, and loaded its games from cassette tapes — a magnetic medium that screeched data into the machine for several minutes per program.

> "the manual that came with the Spectrum, it wasn't actually a manual on how to use the Spectrum — it was a manual on how to programme"

> "this is a cassette tape — for those of the little bit younger, this is like a crap USB stick"

> "the only way to get my games to load is I would literally sit there going 'please load, please load, please load'"

## Recreating the pilot tone and the data tone ([7m48s](https://www.youtube.com/watch?v=lQMcZtiaD0A&t=468s))

The Spectrum's loading audio is three things: a steady pilot tone, a short sync blip, and the actual data. The pilot is a single Web Audio oscillator at 830Hz; the data is a generated waveform written into an AudioBuffer.

> "I'm gonna get my web audio context and create an oscillator wave... I'm gonna set the frequency to 830"

> "I had to programmatically make this sound — I can't just chuck random data into an audio buffer, because it just makes white noise"

> "I was able to make this quite horrible experience for you all, because of the kindness of others"

## Pulses, T-states and turning a website into sound ([10m52s](https://www.youtube.com/watch?v=lQMcZtiaD0A&t=652s))

A "pulse" is a wave going from -1 to +1 and back. The Spectrum's CPU runs at 3.5MHz and a binary 0 takes two short 855-T-state pulses, a binary 1 takes two long pulses. With those constants and a `fetch()` for the FFconf homepage, Remy turns the page's bytes into the data sound the Spectrum would have heard.

> "a single T-state is the amount of time it takes the Spectrum to do one operation"

> "0.0002442 something something seconds... two of these pulses together would make a binary zero, and the short pulses, and two of the long pulses together would give me a binary one"

> "now I can take the FFconf website, or website, and turn it into sound"

## Loading bars: a happy accident ([14m26s](https://www.youtube.com/watch?v=lQMcZtiaD0A&t=866s))

The ZX80's 8-pin chip used a single pin for both the display and audio input, which meant reading data visibly corrupted the screen — engineers shipped that as a feature, and the loading bar pattern was copied by the Amstrad, the Commodore and the rest of the era's home computers.

> "they used one pin for the display, but they also used it to read all of the audio... it would just corrupt the display"

> "but engineers being engineers, they're like 'that's a feature'"

> "they could kind of see what the baud rate of the data was going into the Spectrum... so that's user experience from the early days"

## ScriptProcessor and typed arrays for speed ([15m59s](https://www.youtube.com/watch?v=lQMcZtiaD0A&t=1055s))

Rendering the bars requires reading every audio sample as it plays — `AnalyserNode` filters too much, `AudioWorklet` isn't shipped, and `ScriptProcessorNode` is *officially deprecated since August 2014* but the only thing that actually works. The Performance panel showed that ordinary array `shift()` was costing 3.5 seconds; switching to typed arrays dropped it to 10ms.

> "the AudioWorklet... is the recommended API. In fact, ScriptProcessor is marked as deprecated as of August 2014, and it's recommended that you use the AudioWorklet, which doesn't work in any browser"

> "it was taking like three and a half seconds on that last line, the buffer dot shift"

> "I moved to typed arrays and it completely flattened the performance profile... down to like ten milliseconds"

## Spectrum images: file format and attribute clash ([20m41s](https://www.youtube.com/watch?v=lQMcZtiaD0A&t=1241s))

A Spectrum `.SCR` image is exactly 6196 bits split into three pixel-data thirds and an attribute block; each 8×8 block can hold only two colours plus a brightness flag and the blink flag (which predates the HTML `<blink>` element). The visible *attribute clash* is colours bleeding across those 8×8 boundaries.

> "the file format... is exactly 6196 bits long, so just under 6k... and it's kind of broken into these four parts"

> "we had a brightness flag... and we had a blink flag long before the blink element in HTML"

> "if I did a right shift eleven times you work out exactly where it belongs in that quarter — types of arrays, bit shifting, super fast, also super hax0r credit points there"

## Turning any photo into a Spectrum image ([25m24s](https://www.youtube.com/watch?v=lQMcZtiaD0A&t=1524s))

Run a modern photo through canvas pixel data, apply Atkinson dither against the Spectrum's 15-colour palette, then for each 8×8 block pick the two most common colours and rewrite the block to use only those — recreating the Spectrum's attribute clash exactly.

> "we can make, now we can restore crap image formats. But what about all the pictures of cats and dogs on the Internet? We should fix that too"

> "I apply that map, which is easy-ish if you know how to copy and paste as well as I do"

> "go through, work out the most popular colours, create this nightmare mask, and then I end up with a compatible image format"

## Plugging a phone into a real 1982 Spectrum ([27m29s](https://www.youtube.com/watch?v=lQMcZtiaD0A&t=1649s))

The full pipeline: phone takes a photo of the audience → JavaScript "oldifies" the image to the Spectrum's palette and 8×8 grid → audio output streams the bytes as Spectrum-format pulses → audio cable plugs straight into a real 1982 ZX Spectrum's tape input → Spectrum loads the image like it was 1985.

> "I'm gonna play the audio and start listening to it on the computer... it would play and then start getting really distorted... the computer's like 'you don't wanna hear that, I'll get rid of it for you'"

> "luckily I found a flag — that was echo-cancellation false — and it would get rid of the smart technology, and basically go back to old, crap audio, and it worked"

> "should I plug my phone into the Spectrum, and pretend to be a tape, or should I do it on my computer?"

## Why bother ([34m14s](https://www.youtube.com/watch?v=lQMcZtiaD0A&t=2054s))

The closing answer: nostalgia, twelve months of dipping in and out, and the joy of making something that took one machine 35 years old and another modern browser to collaborate. JavaScript in the browser is the cheap, accessible playground that makes that kind of pointless project possible.

> "I love that old machine, my brain just went straight into nostalgia when I first heard that sound again"

> "this project didn't pay me anything... there's no tangible benefit to having this thing. It cost me a Spectrum"

> "what I personally, the reason I gravitate towards JavaScripts in the browser, is that I didn't need any expensive technology to be able to make something"

---

Remy Sharp spends a year teaching a modern browser to impersonate a 1982 cassette deck, and the result is a love letter to the ZX Spectrum disguised as a Web Audio masterclass. He builds the pilot tone from a single oscillator, generates the data waveform from `fetch()`'d bytes, recreates the side-of-screen loading bars by reading samples back through a `ScriptProcessorNode`, and discovers along the way that typed arrays save 3.5 seconds and `echo-cancellation: false` saves the whole demo. It ends with a phone playing audio straight into a real Spectrum's tape socket. Pointless, personal, glorious.
