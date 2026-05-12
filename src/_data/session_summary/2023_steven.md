## Who am I and why am I telling this story ([1m37s](https://www.youtube.com/watch?v=Y7yIeYXrIoY&t=97s))

Steve opens with a self-deprecating CV — Linux nerd, retro-computing volunteer at the Cambridge computer museum, Theremin-builder — and a clear thesis: *everything I'm about to tell you, I taught myself. If I can do this, anyone can.*

> "I'm not doing that because I'm a professor of computer science. I'm not doing that because I have a doctorate in history"

> "all of this is a very long-winded way of saying, 'if I can do this, anyone can'"

> "this is the ego slide — this is where the speaker brags about themselves for 10 minutes while everyone checks their email"

## The first computer program: Bernoulli numbers ([5m13s](https://www.youtube.com/watch?v=Y7yIeYXrIoY&t=313s))

Luigi Menabrea wrote a flawed Italian book about Babbage's analytical engine. Ada Lovelace translated it, added enough notes to triple its length, and in one appendix laid out the program that calculated *Bernoulli numbers* — the algorithm that has stood as *the first computer program* ever since.

> "in the process of just translating the book, she made it three times bigger"

> "back in the day, these numbers would be computed by hand by a person who would be called, quite literally, a computer"

> "if anyone's seen the film *Hidden Figures*... the women in that film were known as computers"

## How Ada's program is laid out ([8m49s](https://www.youtube.com/watch?v=Y7yIeYXrIoY&t=529s))

The program is a tabular sequence: an operation number (line number), the operation (one of four: ×, ÷, +, −), the two variable operands, a *destination* column that allows writing the result into multiple cells at once (because moving the mill's cogs once was cheaper than moving them twice), and a comment-like column for "how many times has this variable changed" as a self-check against transcription errors.

> "for people that remember BASIC and remember typing '10 PRINT Thomas is an idiot, 20 GOTO 10' — it's a line number"

> "I said there were four instructions; add, subtract, divide and multiply. Where's equals? Well, it wasn't there at all"

> "this is almost like a self-check — as you work through the program, you can say 'I've seen V2 three times now, but this is telling me it's only been changed twice'"

## The first computer bug (in the comments) ([13m29s](https://www.youtube.com/watch?v=Y7yIeYXrIoY&t=809s))

Walking through the first six lines, Steve spots that the printed comment says *2n − 1 divided by 2n + 1* while the actual operation column says the opposite. The arithmetic in the code is correct; the explanatory note describing it is wrong. *Comments and code don't match → everything is wrong.* The first computer bug is, fittingly, a documentation bug.

> "not only did she create the first computer program, she's created the first computer bug — well done Ada"

> "the mistake she made was actually in the comments"

> "if comments and code don't match, everything is wrong. That's the very first example on line four of the first program"

## Translating it to JavaScript ([15m32s](https://www.youtube.com/watch?v=Y7yIeYXrIoY&t=932s))

The simulator is the smallest viable interpreter: an array of `{ line, op, a, b, destinations[] }` instructions, a switch on `op` that performs the arithmetic in the *mill* (what we'd now call the accumulator), then a loop that writes the result into each destination. The Manchester Baby of 1947 had the same constraint — *no add instruction, only subtract* — borrowed almost directly from Ada's design.

> "I'm using a nice variable name *state*, because it's a nice generic term"

> "back in the forties and even the fifties and sixties, people were still using the word *mill* to mean accumulator"

> "the Manchester Baby does not have an add instruction — the only thing it can do is subtract"

## The loop that could never work ([22m13s](https://www.youtube.com/watch?v=Y7yIeYXrIoY&t=1333s))

Between lines 23 and 24 Ada writes *"Here follows a repetition of operations 13 to 23"*. She invented the loop concept. But the loop is broken — operations only reference variables by literal index (V2, V3, V4...), so there's no way to *use the value of N* as the variable index inside the loop body. To run the program in his simulator Steve had to invent an indirection layer (essentially `V[n]`) that didn't exist in Ada's notation.

> "she's created the very first loop. Well done"

> "there is absolutely no way in her designation of programming languages where it would say 'go to an arbitrary variable'"

> "essentially you need an array index — this loop would never have worked"

## Was Ada really the first programmer? ([26m24s](https://www.youtube.com/watch?v=Y7yIeYXrIoY&t=1584s))

The arguments Steve has spent years arguing with online: *the code has a bug* (every programmer writes bugs), *the notation is non-standard* (it conveyed her idea across 180 years to him, so it worked), *the loop is broken* (the intent of the algorithm is clear), *she was just a translator* (she added two-thirds of the final book), *Babbage must have written programs already* (he was a mechanical engineer, he didn't).

> "the very first example on line four of the first program... Anyone here not written a bug? It's like a rite of passage"

> "her document from the 1840s conveyed an idea to me nearly 200 years later — if it does the job of conveying an idea across centuries from someone who's now long dead, then it's done a pretty good job at communicating"

> "labelling it as 'just a translator' would say 'well, you're not a computer programmer if you use a compiler'"

## What I think the real argument is ([30m57s](https://www.youtube.com/watch?v=Y7yIeYXrIoY&t=1857s))

Ada didn't just write a program. She introduced *variables*, *operations*, *loops*, *bugs*, a *notation for storing a program*, and the conceptual leap that *the same machine could be used for poetry, music or images by treating numbers as symbols*. She effectively foresaw ChatGPT, MIDI and computer art, in 1843. The question Steve poses: *if a man had done all of that, would he have been considered the first programmer?*

> "she invented ChatGPT just 200 years early"

> "or it could be a dot, a colour, which you could then arrange in a nice sequence — thanks for inventing Photoshop"

> "if a man had done all of that, would he have been considered the first programmer? And I think he would've done — so if he would've been considered the first programmer, then she should be considered the first programmer"

---

Everyone in tech knows the name Ada Lovelace, and almost nobody has actually read her 1843 notes. Steve does, then translates the tabular Bernoulli-numbers program directly into JavaScript so the four-operation instruction set, the *mill* accumulator, the write-into-many-destinations trick and the self-checking variable-change column all click into place as the *deliberate engineering choices* they are. He pinpoints the first computer bug on line four as a documentation mismatch, surfaces the loop she invented but couldn't quite express, then dismantles every *was she really the first programmer?* objection by cataloguing what she foresaw: generative text, music, computer art.
