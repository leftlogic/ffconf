## The t-shirt riddle ([0m29s](https://www.youtube.com/watch?v=-QZSJx8oXus&t=29s))

Martin opens by walking through the three Full Frontal t-shirt designs he sent Remy — each version of the conference logo is actually executable JavaScript, with the final attempt written entirely in six characters of JSFuck.

> "I'm trying to pack code in a shape... I took the Full Frontal logo and tried to like make it executable by placing symbols in there"

> "this is actually like JavaScript code that you can execute"

> "it uses only like six different characters... to write JavaScript and you can actually execute all of the examples"

## What code calligrams are ([3m38s](https://www.youtube.com/watch?v=-QZSJx8oXus&t=218s))

He defines code golf — solving a programming problem in as few characters as possible — and the related practice of code calligrams: arranging code into a meaningful shape so that the source itself is also an image.

> "code golfing is like a kind of sport where you try to solve a programming problem in a shortest amount of characters"

> "a calligram is usually something drawn or like written and it has a nice shape and also like a kind of picture"

> "it's a mix of picture, words and like type"

## Quines and code that draws itself ([4m42s](https://www.youtube.com/watch?v=-QZSJx8oXus&t=282s))

A quine is a program that prints its own source code, and Martin shows two: a block of JavaScript whose comments form a 3D globe that then spins inside the rendered page, and the "M-code" fractal that zooms until JavaScript's float precision falls apart.

> "a quine is a program that will output its own source code"

> "you have a spinning 3D globe that rotates inside of this code... no external libraries, no external resources"

> "it zooms in into this fractal until like a point where the resolution or like the float precision of JavaScript is not enough anymore"

## JSFuck and the six-character JavaScript ([6m45s](https://www.youtube.com/watch?v=-QZSJx8oXus&t=405s))

The JSFuck project answers an old forum question — what is the smallest set of characters needed to write any JavaScript? — with `()[]+!`, and Martin's jsfuck.com tool turns any source into a runnable string of those six symbols.

> "how many different symbols do I need in JavaScript to execute any code that you like"

> "you only have to use brackets, plus sign, square brackets... it's parenthesis, plus sign, square brackets"

> "there's no need for other transpilers or stuff, so it's valid JavaScript that executes"

## Writing code in other alphabets ([7m46s](https://www.youtube.com/watch?v=-QZSJx8oXus&t=466s))

For conferences in Russia, Israel, Japan and Singapore he made HTML pages whose entire `<script>` is written in Cyrillic, Hebrew (right-to-left source code, like the rendered text), Katakana, or a Matrix-style rain of mixed Asian alphabets.

> "it's only using like Cyrillic letters and... a special Unicode in the middle, the star"

> "in Hebrew... it's written from right to left, and not as we used to from left to right"

> "the question for you would be: how the hell do I write JavaScript without Latin characters?"

## How to write JavaScript without Latin ([10m54s](https://www.youtube.com/watch?v=-QZSJx8oXus&t=654s))

The trick has two halves. Unicode and hex escape sequences (`a`, `\x61`) let you swap any letter for its codepoint inside a string; octal escapes (`\141`) survive nearly anywhere except ES2015 template literals; and `[].map.constructor` recovers a `Function` constructor you can call as a quiet replacement for `eval`.

> "back slash u and then it has a four-digit hexadecimal code for the character"

> "this is called the octal escaping... just a backslash and a sequence of numbers from zero to seven"

> "if you have a function and get a constructor, then you get back like a function constructor... it's kind of a replacement for eval"

## Invisible code with control characters ([18m38s](https://www.youtube.com/watch?v=-QZSJx8oXus&t=1118s))

Stripping the trick further, he hides programs inside a one-line HTML file where the apparently-empty string contains C0 device-control characters that take up zero visual width, then decodes them at runtime with `escape().replace()` and `\x` prefixes.

> "the idea was quite simple... using whitespace... but the problem is that it still takes up some space"

> "the device control characters... are not visible at all because they have no width"

> "the real Game of Life that's behind, it's only 25 characters"

## Combining characters and Mona Lisa in 500 bytes ([23m52s](https://www.youtube.com/watch?v=-QZSJx8oXus&t=1432s))

For an Israeli conference he hid an entire program inside two stacked aleph characters using Unicode combining marks that overlap rather than stack; for Singapore he compressed the Mona Lisa to a 244-byte WebP, then wrapped an HTML page that loads itself as an image so the page-as-document and page-as-bitmap share the same bytes.

> "they are called chants... they don't take up space, they're still visible, but you can like overlap them"

> "the ALF is the one symbol that contains all other letters or all other numbers, and I was able to put everything in one place"

> "this HTML page has an image that loads the HTML page as the image source"

## A 168-byte Star Wars and a JS calligram of the FFConf logo ([31m32s](https://www.youtube.com/watch?v=-QZSJx8oXus&t=1892s))

Inspired by a 3KB starfield demo, he rebuilds the whole effect — CSS `translate3d` perspective, animation and all — into 168 bytes, then reshapes its source into the Full Frontal logo so the code is a quine of its own silhouette.

> "I came up with is this... it's 168 bytes... full HTML page with all things"

> "this is the [ie-style] DOCTYPE thing — bgcolor zero makes it black and text will define the text color"

> "it will not actually a quine because it doesn't show its own source, but it shows its own shape"

## Why do this? ([35m10s](https://www.youtube.com/watch?v=-QZSJx8oXus&t=2110s))

The justification is creativity under constraint: setting a byte limit forces you deeper into the language, the constraint is self-imposed rather than client-driven, and the focus required to fit an idea into 1K is exactly the focus most useful in everyday work.

> "it forces you to go over the limits that you're used to"

> "you have to learn the language and discover new parts and you have to use your curiosity"

> "if I want to create a project and finish a project I have to focus on the most important task to get it done"

---

Martin Kleppe writes JavaScript that doubles as visual art, and each demo strips away another thing you thought you needed. The whole talk reads like a magic act: lose multiple files, lose ASCII, lose the Latin alphabet, lose visible characters, lose kilobytes, and somehow a spinning 3D globe still renders, a Game of Life still ticks inside a Hebrew aleph, and the *Mona Lisa* still loads from 244 bytes. The technical heart is a walkthrough of writing executable JS using hex escapes, octal sequences, `Function` constructors and zero-width control characters. The takeaway is sharper than any tip: pick a constraint nobody asked for, then make it smaller.
