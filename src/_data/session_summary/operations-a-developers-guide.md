## From publishing to GDS infrastructure ([0m24s](https://www.youtube.com/watch?v=y6hbrS3DheU&t=24s))

Anna Shipman frames the talk with her own career arc — a self-taught developer who went from publishing to Java to the Government Digital Service, and then talked her way onto the infrastructure team specifically because their emails made no sense to her.

> "I had no idea what I was doing"

> "these these emails seem to be written in English but I didn't understand them at all and I wanted to understand them"

> "what I did learn while I was working on that team made me a better developer"

## Where are your servers? ([3m00s](https://www.youtube.com/watch?v=y6hbrS3DheU&t=180s))

After dispatching the "series of tubes" joke she runs a quick audience poll across five hosting options — owning hardware, renting rack space, shared hosting, cloud and PaaS — to ground the rest of the talk in where everyone actually deploys.

> "this is one of those tubes. This is an undersea cable"

> "the thing I really like about this picture is that the person holding the undersea cable has a perfect French manicure"

> "most of you using the cloud"

## Cattle, not pets ([5m04s](https://www.youtube.com/watch?v=y6hbrS3DheU&t=304s))

Hand-crafting servers leaves you panicking when AWS sends the termination email; configuration management — Puppet, Chef, Ansible, CFEngine — turns server setup into reliable, repeatable code so you can stop being emotionally attached to any individual box.

> "What happens if AWS sends you an email and says, 'We're going to switch off your server in 24 hours.'"

> "if nothing else, just write a script and then you can run that and then you don't need to panic. Do you feel better already?"

> "your servers should be cattle, not pets"

## Virtualisation and the hypervisor ([8m09s](https://www.youtube.com/watch?v=y6hbrS3DheU&t=489s))

She defines the term that floored her on day one — *hypervisor* — and draws a clean mental model of a host machine running a hypervisor running one or more virtual machines, each with its own full operating system.

> "hypervisor is another term I'd never heard before I joined the infrastructure team and then as soon as I was on the team everyone started banding it around like it was the most common thing in the world"

> "a hypervisor is the software that runs the virtual machines"

> "looks to you like a little computer. It's running full operating system"

## Cloud is just someone else's computer ([9m40s](https://www.youtube.com/watch?v=y6hbrS3DheU&t=580s))

The cloud is virtualisation plus a UI — a layer of abstraction that hides the underlying hardware so your VM can be moved between servers, billed only for what you use, and provisioned in minutes rather than weeks.

> "there's a browser plugin that replaces cloud with someone else's computers, which is basically that is what the cloud is"

> "your virtual machines could be on different servers on the same server. They could be in different data centers. You don't know you don't need to know about that"

> "you can't just like send it back for a refund for the unused time"

## Local development with Vagrant ([11m46s](https://www.youtube.com/watch?v=y6hbrS3DheU&t=706s))

Once Intel and AMD shipped hardware-accelerated virtualisation in 2005, VMs became practical for local dev — and Vagrant makes spinning one up a two-line affair, ideal for case-sensitivity bugs, open-source onboarding and picking up an old project months later.

> "the simplest vagrant file you could write looks like this. That is just basically just an ubuntu trusty 64-bit machine"

> "you're not writing code on your Mac and then deploying it to a Linux server somewhere and it might work differently... if it's case sensitive"

> "instead of having like a sort of step by step, this is what you should need to do to set up your development environment, you just write a vagrant file"

## Containerisation, and "don't worry about Docker yet" ([16m51s](https://www.youtube.com/watch?v=y6hbrS3DheU&t=1011s))

Docker repackages decades-old Linux container tech into something usable — an immutable snapshot of your dependencies that you both test against and deploy — but immutability fights local iteration, support is patchy, and her honest take is that you don't need to spend your weekend on it yet.

> "the technology is not new but what Docker has done is like made it much more usable, much more user friendly"

> "it's exactly the snapshot that you are testing against is a snapshot that you deploy to production"

> "I wouldn't necessarily give up your weekend to make sure you understand Docker"

## Make over Grunt and Gulp ([23m27s](https://www.youtube.com/watch?v=y6hbrS3DheU&t=1407s))

For task running she gently picks a fight with the JavaScript audience: `make` has been on every Unix box for twenty years, does dependency tracking for free, and only re-runs the tasks whose inputs have actually changed.

> "Remy asked me, should all my tools be rewritten in JavaScript? And warned me that if the answer was no, there might be a revolution"

> "this will only run if styles.scss is newer than styles.css... it doesn't waste time rebuilding stuff that doesn't need rebuilding"

> "it has everything you need. It's just not written in Java"

## Unix tools, and reading the output ([26m31s](https://www.youtube.com/watch?v=y6hbrS3DheU&t=1591s))

She walks through Knuth's "n most-frequent words" challenge done in six piped Unix commands, then closes with the cheapest productivity tip in the talk — when grep, git or any other tool prints an error or hint, actually read it before panicking.

> "each tool does one thing very well. It does it very fast, but it just does one thing. And then the tools are composable"

> "you can do pretty complex things by composing these tools that only just do one thing at a time"

> "I just see the error and go, 'Oh, no, I don't know what to do.' And with these tools, like it's probably written there what you should do"

---

Anna Shipman demystifies operations for developers who feel locked out by its vocabulary, drawing on her own leap from publishing into the Government Digital Service's infrastructure team. She makes hypervisors, virtual machines and the cloud feel obvious, lands the *cattle, not pets* mindset that survives an AWS shutdown notice, and shows why Vagrant belongs in your repo today and Docker probably doesn't need your weekend yet. Then she pivots to the Unix toolbox sitting on every server already, picking a friendly fight for `make` over Gulp, and closes on the cheapest productivity tip going: actually read the error message.
