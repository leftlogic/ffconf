## Two things to keep in mind ([0m33s](https://www.youtube.com/watch?v=Ij-GLix2QUQ&t=33s))

Léonie Watson opens by anchoring the talk in two truths the rest of the AI industry would prefer you forget: the current models are trained on our data without consent, and they consume an obscene amount of electricity and water. We can opt out individually, but the real lever is government policy.

> "they've all been trained on our data — they've used our information indiscriminately, without permission, without respect for copyright law"

> "their excessive consumption of electricity and water has to change"

> "it's only at the level of policy, law and regulation that we've got any hope of bringing the companies behind these tools to heel"

## Discriminative AI: speech, object and character recognition ([3m36s](https://www.youtube.com/watch?v=Ij-GLix2QUQ&t=216s))

Setting up the distinction: *discriminative AI* classifies (is this picture a cat?), *generative AI* produces (here's a new cat). Accessibility has been using discriminative AI for decades — Dragon NaturallySpeaking, Apple's Seeing AI app for distinguishing identical US dollar bills, Face ID on the iPhone, optical character recognition that turns printed pricing labels into screen-reader-friendly text.

> "speech recognition is one of the earliest forms... people with disabilities have been using speech recognition for a very long time"

> "every single dollar bill over there is exactly the same size — but there's an app on my phone called Seeing AI... it will use object recognition to tell me that something's a $1 bill"

> "pretty much every email provider out there is using AI now and has done for some time to get rid of spam before it hits our inboxes"

## Generative AI: image descriptions ([9m17s](https://www.youtube.com/watch?v=Ij-GLix2QUQ&t=557s))

The unambiguously transformational use of generative AI for blind users is image description. *Be My Eyes* and the same Seeing AI app now use ChatGPT and Claude to produce detailed descriptions — *the legs of a sculpture sticking out from the roof against a bright blue sky* rather than the human-given *it's a building with legs on it*. Blind people are going back through decades of family albums.

> "this is really quite something — the level of detail that you can get at now independently on your own is really quite something"

> "I know people who are blind who are going back through decades' worth of family albums, because the picture they knew as 'Auntie Jean and Uncle Bob at Christmas dinner', they can now work out what Auntie Jean was wearing"

> "the truth is, when you ask the average human to describe an image like this one, they'll probably say 'well, it's a building, there's some legs on the roof'"

## Real-time and wearable description ([13m52s](https://www.youtube.com/watch?v=Ij-GLix2QUQ&t=832s))

Seeing AI now offers pre-processed video description (upload a video, get a screen-reader-rate-matched audio description back). iOS 18 beta offers *real-time* description of whatever your camera is looking at. And Meta's Ray-Ban partnership is going to make the camera wearable — Léonie expects to walk down the street being described to her, naturally.

> "this is new, and what really makes that remarkable is that because it's my screen reader on my phone that's actually reading the text that gets shown up, this works no matter how fast or slow you have your screen reader set to"

> "imagine that when you're just walking around looking for signs, street signs, in a hotel, looking for your hotel room number — this is really a huge step forward in terms of independent navigation"

> "before very long, I won't need to wave my phone around to get that real-time description"

## Easy Speak and voice cloning ([15m23s](https://www.youtube.com/watch?v=Ij-GLix2QUQ&t=923s))

*Easy Speak* by Pearl Hilbert generates conversational responses for nonverbal users, customisable so the AI knows to use British English rather than the default Americanism. The next step is voice cloning — three to four minutes of training data is enough to reproduce a user's voice, so people newly diagnosed with ALS can bank their voice before they lose it.

> "you could put in there that, you know, British — don't use those kind of slang words — so it can personalise the responses"

> "imagine that you're someone with autism who experiences being nonverbal, or someone recently diagnosed with ALS who knows they may soon lose their ability to speak"

> "imagine that you could record and bank your voice so that when you find yourself unable to speak for yourself, your technology sounds just like you"

## Sign-language translation ([17m55s](https://www.youtube.com/watch?v=Ij-GLix2QUQ&t=1075s))

A research project combining a Kinect-style sensor with discriminative AI for posture and trajectory recognition translates between any two sign languages — or between sign language and any spoken language. It's one of the cleanest cases of *AI breaking down a real human communication barrier*.

> "this project is a sign language translator — it translates from one sign language to another"

> "you can communicate between American sign language and Chinese sign language, or potentially any sign language to any other natural language"

> "as someone who has got no hope of ever learning sign language, I'd love to but I've never got myself to do it, [this] is really quite amazing"

## Image generation: stereotypes and bias ([19m59s](https://www.youtube.com/watch?v=Ij-GLix2QUQ&t=1199s))

This is where the talk turns. AI image generation of disabled people produces a parade of stereotypes — broken-looking wheelchairs, bionic limbs with fingers on the wrong side, the "generic disability symbol", and the blind-person-with-white-cane-and-dark-glasses cliché that doesn't represent the speaker in any way.

> "image generation of humans is problematic from beginning to end for a whole bunch of reasons"

> "it's coming up with stereotypes, racism, ethnic bias, all of those horrible things"

> "the one that drives me up the wall is when you get a blind person who is invariably wearing sunglasses, almost always got either a white cane or a guide dog — as someone who's never owned a guide dog, has a black cane, and only tries to wear sunglasses if they're the Meta Ray-Bans"

## Overlays and the lawsuits they've earned ([22m34s](https://www.youtube.com/watch?v=Ij-GLix2QUQ&t=1354s))

Accessibility overlay tools (AccessiBe, UserWay et al.) promise *ADA compliance* for a few dollars a month and cannot deliver it. They literally cannot detect a `<div>` with click handlers acting as a button — the browser doesn't expose JS event listeners to third-party scripts. Adrian Roselli's careful evidence-based criticism got him sued for defamation; the case was dropped. AccessiBe is now itself being sued by a New York dermatology clinic who installed the overlay, was sued anyway, and discovered that the overlay didn't protect them.

> "every single one of the companies that provides one of these tools makes promises they simply can't keep"

> "these tools can't fix that, simply because to fix it, they have to work out which elements on a page have JavaScript event listeners, and the browser won't let you do that — and there's a very good reason why we don't let third-party scripts bugger around with stuff like that"

> "they took him to court for defamation... eventually they dropped the case against him, because as it happens, an opinion — no matter how well-researched, evidenced, documented and shared — is still just an opinion"

## Code generation and hallucinations ([27m50s](https://www.youtube.com/watch?v=Ij-GLix2QUQ&t=1670s))

Tested on the same code snippet against the WCAG 2.2 AA criteria, Gemini gave a confident wrong answer, ChatGPT focused on the wrong issue, and Fix My Code (a UserWay product trained "exclusively on accessibility data") confidently asserted the code was fine when it wasn't. Asked to generate accessible tabs, two of the three produced ARIA attributes but missed keyboard support entirely.

> "Fix My Code's response was confident but incorrect — it missed the fact that the code snippet failed a success criterion"

> "generative AI can help write accessible code if used wisely — always verify AI-generated code with trusted sources"

> "ChatGPT's code lacked ARIA roles, making it inaccessible for screen readers"

## Verify everything, especially in accessibility ([32m27s](https://www.youtube.com/watch?v=Ij-GLix2QUQ&t=1947s))

The shelf-in-my-office hallucination — three correctly-identified objects, with a *pencil-sized pencil* completely missing — is the live demonstration. ChatGPT confidently confirmed every detail of the wrong description and then politely denied the existence of the pencil it had missed. Use the tools, especially for image description where the alternative is no description at all, but never let them make a decision on your behalf and always verify against a trusted source before shipping.

> "I'm not gonna stop using these for image description. It's just too valuable, and it gives me too much. But I am smart enough to know that I should not be making any kind of big decisions on what I'm being told"

> "knowing that you can't trust what they say, and knowing how and where and when to verify, is probably the most important thing of all"

> "if we're taking shortcuts without verifying what we're being told, then that's on us really at the end of the day"

---

Léonie Watson takes the audience on an evidence-led tour of AI and accessibility from inside the technology, starting with the unflinching context that the models were trained without consent and burn obscene amounts of power. The genuinely transformational use case lands first: blind users revisiting decades of family photographs with the same incidental visual detail as their sighted relatives, real-time scene description through wearable Meta Ray-Bans, voice banking for people newly diagnosed with ALS. Then the prosecution: AI-generated stereotypes of disabled people, predatory accessibility overlays that *cannot* detect a clickable div, and a shelf full of objects with a hallucinated missing pencil. Use the tools, verify everything.
