## What Suz works on at Stripe ([1m01s](https://www.youtube.com/watch?v=AAFIJaxuHeg&t=61s))

Suz Hinton opens by reframing her reputation. She works on hardware at Stripe (the Terminal product) and at home, and worries her previous talks made hardware sound like impenetrable witchcraft — *API, magic, hardware*. This talk is about removing the magic step in the middle.

> "I sort of go, 'oh this is API, and you just code it in JavaScript, and then something in between, and then magic, right?'"

> "it's kind of given me this reputation that I'm some hardware witch"

> "I don't want it to be this impenetrable knowledge"

## Designing a printer protocol from scratch ([2m04s](https://www.youtube.com/watch?v=AAFIJaxuHeg&t=124s))

A thought exercise: your boss asks you to design a brand-new protocol for a text-printing robot — must support text, line feed, bold, strikethrough, underline, fonts and justification, can't reuse any existing protocol, due in 24 hours. The audience walks through ASCII-as-protocol, the ESC character as a command introducer, and multi-byte commands like `ESC M 0` for font.

> "what is the simplest thing we could do? Let's break this right down"

> "it would be the ESC character and then E and then followed by just regular text will come out as bold hello world"

> "we'll just throw complete caution to the wind and use a hyphen for underline, because yeah, that makes sense"

## ESC/P all along ([10m41s](https://www.youtube.com/watch?v=AAFIJaxuHeg&t=641s))

The protocol the audience just invented is, of course, *Epson Standard Code for Printers* — patented by Epson in the 80s, still used in every receipt printer, every barcode label printer, and a sizable chunk of older office printers. Hardware protocols are not magic; they were made up by people exactly like the audience.

> "this is actually an existing protocol — we're gonna be using it today, it's called ESC/P"

> "it is the worst acronym that Epson has come up with"

> "it was widely supported in software, and it was also patented"

## Game Boy Camera and Printer ([12m13s](https://www.youtube.com/watch?v=AAFIJaxuHeg&t=733s))

A 90s aside: the Nintendo Game Boy Camera and its thermal printer were the first selfie-and-print device most people her age ever owned. Modern thermal printers ship the same ESC/P-derived protocols, mostly over USB or Bluetooth — and the web platform now has the APIs needed to talk to them.

> "before its time selfies, but the camera also swivelled, so you could actually turn it and then take pictures of other stuff"

> "what if we could make this with the web? Let's look at all of the tools that we have in the browser now"

> "most thermal printers use either USB or Bluetooth — some of them actually use serial"

## Media Stream API + Web USB ([13m44s](https://www.youtube.com/watch?v=AAFIJaxuHeg&t=824s))

The webcam half: `navigator.mediaDevices.getUserMedia({ video: true })` plus a `<video>` element. The printer half: `navigator.usb.requestDevice(...)` filtered by vendor/product ID, then `device.open()`, `selectConfiguration(0)`, build a `Uint8Array` of ASCII bytes and `device.transferOut(endpoint, payload)`.

> "we can create a stream by asking our navigator object to, under the media devices, to get the user media"

> "if you don't know what the configuration is, just start at zero, and just keep refreshing the page, and eventually the errors will go away — I'm deadly serious"

> "these are just the vehicles for getting our payload over there. It's probably the least important bit"

## Web Bluetooth and the GATT model ([18m18s](https://www.youtube.com/watch?v=AAFIJaxuHeg&t=1098s))

Web Bluetooth uses GATT (Generic Attribute Profile): you `requestDevice()`, then `gatt.connect()` to get a server, then iterate through *services* (each is a logical group of related functionality, like *battery* or *heart rate*) to find the *characteristics* that read and write — and you just enumerate IDs until the device does what you want.

> "Bluetooth devices these days are split into these things called services — so a service can be something like a battery level thing or a heartbeat thing if it's a medical device"

> "again, you kind of just enumerate all the IDs until the thing does what you want"

> "if you can understand ESC/P, I think that it's not too much of a jump for you to understand things like libusb and Web Bluetooth"

## Progressive Web Boy live demo ([19m52s](https://www.youtube.com/watch?v=AAFIJaxuHeg&t=1192s))

She demos *Progressive Web Boy* — a recreation of the Game Boy Camera and Printer in the browser, built in 90 minutes on a live-stream with her friend Soma. The camera output gets piped through the same printer over both USB and Bluetooth, with Bluetooth's 20-byte MTU producing visible pauses in the printout that USB doesn't have.

> "I had this ridiculous idea to recreate Game Boy Camera and Game Boy Printer with web technologies"

> "in 90 minutes we had a very crappy looking prototype and some very funny pictures of ourselves"

> "Bluetooth is actually limited to being able to send only a certain amount of bytes at a time — you can see that divider where it's had to pause and then receive more Bluetooth"

## Web Serial: uploading Arduino blink in the browser ([27m32s](https://www.youtube.com/watch?v=AAFIJaxuHeg&t=1652s))

Using Chrome Canary's Web Serial implementation, she uploads a precompiled `blink.cpp.hex` straight from a webpage to an Arduino — no Arduino IDE, no driver install, just `avrgirl-arduino` running in the browser. With CodeMirror and cloud compilation that's a full Arduino IDE on a URL.

> "I have this library that I wrote years ago called avrgirl-arduino, and it allows me to just take pre-compiled code for the Arduino and upload it"

> "this is so new and the spec is so incomplete that it only works in Canary"

> "if you add a CodeMirror to this and a little bit of cloud compilation, this is a full IDE"

## Why bring hardware to the browser ([31m35s](https://www.youtube.com/watch?v=AAFIJaxuHeg&t=1895s))

Hardware interfaces should be fast to make, cross-platform out of the box, attractive, and accessible — and that combination is essentially impossible outside the browser. Browsers are already installed, CSS makes interfaces friendly, the accessibility tree is better than any native OS-level equivalent, and Web USB can even host a URL on the device itself that Chrome will offer to open.

> "in my opinion, hardware interfaces should be fast to make, cross-platform out of the box, look good and accessible"

> "it's worse than configuring webpack, I promise you — sorry, John"

> "instead of waiting for a new kind of device to be popular enough, we can just take 10-year-old, 20-year-old devices and we can just be like — no, actually, this is what we think we should do with it on the web"

## Amazon Sidewalk and the politics of devices ([33m35s](https://www.youtube.com/watch?v=AAFIJaxuHeg&t=2015s))

The closing third turns political. In 1985 the FCC reserved 902–928 MHz for amateur, scientific and medical use. In 2019 they proposed sweeping changes to that allocation; Amazon then quietly tested *Sidewalk*, a private low-bandwidth 900 MHz IoT network that 700 employees deployed across most of the Los Angeles basin in a week. Her plea: less mass-produced surveillance hardware, more Harry-Potter-magic personal devices like Samantha Goldstein's stained-glass weather window or Simone Giertz's beautiful one-task-a-day device.

> "sidewalks can be owned, operated, and controlled by a single company, and frequency jammers are currently illegal in many countries"

> "tech has 100% lost its way — we are pretending that these devices are actually supposed to be helping people, and these people have no idea they are actually contributing to a privately owned network"

> "less mass-produced surveillance bullshit, and more Harry Potter magic"

---

Suz Hinton refuses to be the hardware witch and walks the audience through inventing a printer protocol from scratch, then drops the punchline that they've just rediscovered ESC/P, patented by Epson in the 80s and still shipping in every thermal printer. From there she rebuilds the Game Boy Camera and Printer in the browser using Media Stream, Web USB and Web Bluetooth, then uploads an Arduino sketch over Web Serial. The closing third turns political, naming Amazon Sidewalk's quiet capture of the 900MHz band and leaving you with a slogan worth tattooing: *less mass-produced surveillance bullshit, more Harry Potter magic*.
