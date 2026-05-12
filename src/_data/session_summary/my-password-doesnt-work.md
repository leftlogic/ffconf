## Setting up Salim's first email account ([0m45s](https://www.youtube.com/watch?v=xSf5FuwyhB0&t=45s))

Blaine Cook opens with a story from Wadi Rum, Jordan: a Bedouin guide called Salim — same age as the web, two flagship phones, no email address — asks him for help, and the next twenty minutes of failure illustrate everything wrong with how we do auth.

> "I'm sorry for that. I hope that this talk makes it a little bit better"

> "he doesn't understand the difference between his iTunes app store account and his Gmail account because he shouldn't have to"

> "we have totally failed as an industry. This is an epic-level failure"

## The Apple password gauntlet ([6m02s](https://www.youtube.com/watch?v=xSf5FuwyhB0&t=362s))

Apple's rules — eight characters minimum, one digit, mixed case, no spaces, no repeated triples, no Apple ID, no previously used password — collide with the form not being localised, with a "John Appleseed" placeholder address, and with the fact that Salim is only ever going to download free apps.

> "if you like it, you should've put a one on it"

> "we spent all of this effort trying to tell people that they need to have secure passwords with complicated forms, and we don't support Unicode emojis in the passwords"

> "what they needed was a way to identify someone who is downloading an app from the App Store in a repeatable way — that's it"

## The typical password-reset journey ([9m40s](https://www.youtube.com/watch?v=xSf5FuwyhB0&t=580s))

Walking through the experience of a returning user — sign-up form, sign-in form, wrong-password phishing of one's own brain, the reset link, the new password, the *sign in again* — adds up to five minutes of friction for what should be one click of recognition.

> "we've just phished ourselves and all of our passwords that we use, which people do every single day all the time all across the web"

> "they ask us to sign in because they apparently don't know who we are"

> "there are a lot of people who only use email password-reset links to sign into things because they just can't figure out any other way"

## What that journey actually verifies ([12m47s](https://www.youtube.com/watch?v=xSf5FuwyhB0&t=767s))

Strip the journey down to abstractions: the only thing the password-reset flow ever actually proves is that the user has access to their email account. Every layer of password complexity is therefore pointless if 60% of users will reset by email anyway.

> "the only thing that we've done in this entire process is verified that the user has access to their email account"

> "all of that password stuff is irrelevant"

> "if 60% of your users are gonna go and reset their password anyways, it's just annoying"

## Crypto culture has a UX problem ([13m47s](https://www.youtube.com/watch?v=xSf5FuwyhB0&t=827s))

"Security culture has framed security as hard" — and judged success by being good at cryptography rather than by being good for users. Moxie Marlinspike's beautiful Signal contact-discovery work is *haute couture* security; most people need H&M.

> "people who are into cryptography are really into cryptography... but I think a lot of cryptographers think that crypto by itself will have that impact, and that's just wrong"

> "it's a lot like haute couture — it's really, really interesting... but most people want Levi's or H&M"

> "the reason the term *identity theft* is favoured over any of the alternatives is that it absolves institutions in the digital world of their responsibility for the inherent flaws in their authentication systems"

## Why every solution we've tried is wrong ([19m06s](https://www.youtube.com/watch?v=xSf5FuwyhB0&t=1146s))

Security questions are pointless. Password managers lose data, double up accounts on password change, and put your most valuable data on the machine most likely to die. 2FA defeats most laypeople. And we keep blaming the user every time the system fails.

> "yes, that's definitely secure because it's unique"

> "password managers suck. We live in a broken world and they sort of help us deal with that broken world, but they really suck"

> "Danny O'Brien... has been doing online internet security for like 30 years and he can't figure it out — how is anyone who is not in this room going to figure it out?"

## Don't require an account; use long-lived sessions ([22m46s](https://www.youtube.com/watch?v=xSf5FuwyhB0&t=1366s))

Three immediate fixes for anyone running a sign-in form: don't require an account until the user genuinely needs one (Glitch lets you build something in 24 seconds), look users up by their email rather than asking for a "username", and use long-lived sessions so people are not training themselves to type their password into anything that looks like a form.

> "if you don't need the sign-in, don't use it. If you don't need the sign-in right away... just wait, because they're gonna reset their password by email anyways"

> "when we go through that 'what's my username on this site?'... you could just tell them, it would be fine"

> "if someone is entering their password a lot, if they're used to entering their password a lot, then they get phished — and especially for people that are at risk"

## Delegated authentication and the simpler sign-in UI ([25m29s](https://www.youtube.com/watch?v=xSf5FuwyhB0&t=1529s))

Delegated auth (OAuth, OpenID Connect) is structurally the same as the password-reset dance — the only difference is that the user verifies their email at their identity provider with a redirect instead of an inbox round-trip — and the sign-in UI can collapse to a single field with a contextual button.

> "the only difference is the website is now talking to an authentication provider"

> "the user asks the authentication provider 'what's the secret code' using a redirect, rather than going and checking their email and potentially having to sign in to their email and potentially getting phished"

> "when they type in a Gmail address, you say 'hey, I see you have a Gmail address, would you like to sign in with Google?'"

## The conversion-rate argument ([30m06s](https://www.youtube.com/watch?v=xSf5FuwyhB0&t=1806s))

Authentication is fundamentally about money: his own startup hit a 37% sign-up conversion rate on brand-new visitors after simplifying the flow, Jared Spool's "300 million dollar button" came from removing a single required field, and Heap Analytics's data shows third-party sign-in as by far the biggest conversion lever you have.

> "we have a 37% conversion rate on brand-new visitors"

> "by reducing barriers... they were able to, just on the conversion rate change alone, basically generate 300 million dollars more a year of revenue"

> "if you start asking for extra stuff you just decrease your conversion rate"

## Secure your email; the web isn't just ours ([32m42s](https://www.youtube.com/watch?v=xSf5FuwyhB0&t=1962s))

Closing message: in 2017 authentication on the web *is* email security — secure your email and you have most of what you need — and the way out of Google and Facebook's stranglehold on identity is to invent more ways to give users agency, not to keep blaming them when they can't keep up.

> "if there's one thing that you take from the talk, it's that authentication on the web in 2017 means securing your email"

> "if we move to everyone signing in with Gmail, they're only going to have more of a stranglehold on what it means to be online"

> "we're not gonna get there by victim-blaming our users, and by crypto-shaming people"

---

Blaine Cook, one of the architects of OAuth, opens with a Bedouin guide in Jordan, no email address, two phones, and Apple's English-only sign-up form demanding eight characters and no emojis. From that small disaster he builds a ruthless case that every password journey ultimately only verifies one thing: access to your inbox. Security culture has chased cryptographic purity while blaming users for failures the industry baked in. The fix is mundane and lucrative: don't demand accounts upfront, look people up by email, keep sessions long, and let delegated auth collapse the form to a single field.
