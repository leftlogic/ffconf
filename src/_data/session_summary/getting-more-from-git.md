## My old commits, as a cautionary tale ([1m04s](https://www.youtube.com/watch?v=FQ4IdcrOUz0&t=64s))

Alice Bartlett opens by digging up her own decade-old commits at the FT — a 204-line diff with the message "only SQLite stuff", and a one-line workaround with the message "fixes to download" that nobody, including her, can now explain.

> "my process is, try stuff until it works and then don't ask any questions and shove it into Git"

> "the commit message is only SQLite stuff, and I haven't even bothered to capitalise the S there"

> "the commit message only reads 'fixes to download', so we'll never know why I did that — and neither will my colleagues"

## What we're aiming for ([4m07s](https://www.youtube.com/watch?v=FQ4IdcrOUz0&t=247s))

The goal is *atomic* commits — one commit per logical unit of change, each making sense in isolation — and *meaningful* messages with a scannable summary line and a body that explains *why*. The why is what your future self and your colleagues actually need.

> "they should make sense as a sort of single unit of code, and they should make sense in isolation"

> "fix background download — there is a bug in the window.history.pushState implementation in Android Honeycomb, so always use the location hash instead until that is fixed"

> "your Git history when you work like this becomes the story of your project, sort of added to incrementally"

## Why you should care ([6m12s](https://www.youtube.com/watch?v=FQ4IdcrOUz0&t=372s))

Commit history is unique in a way no other artefact is: it never changes, it lives with the code, it's `git grep`-able, and it's hosting-independent. PR descriptions vanish when you migrate from GitHub to Bitbucket. Linked tickets vanish when you move ticket systems or off-board access. Commit messages survive.

> "if you put all of your information about a change in a pull request, that can be good... but it's also bad because when your company is like, 'we're too poor to use GitHub, we're gonna move to Bitbucket', all of that stuff is gone"

> "ticket hosting services can change, and not everybody has the same access to the ticketing system that you have"

> "in order to write down why you made a change, you have to actually know — explaining why is an important thing to do because it forces you to actually understand the thing you did"

## The history of Git ([10m53s](https://www.youtube.com/watch?v=FQ4IdcrOUz0&t=653s))

Git was born when Linus Torvalds called Linux contributor Andrew Tridgell "stupid and ugly" for writing an open-source BitKeeper client, BitKeeper revoked Linux's free licence, and Torvalds wrote Git in about two weeks. The first commit message is *initial revision of git, the information manager from hell.*

> "Git was described as a tool expressly designed to make you feel less intelligent than you thought you were — which is not, in my opinion, a great design principle"

> "in about two weeks Linus creates Git"

> "the world's first Git commit message... initial revision of git, the information manager from hell"

## Distributed version control as paradigm shift ([14m29s](https://www.youtube.com/watch?v=FQ4IdcrOUz0&t=869s))

In 2005 CVS and Subversion required a central server, branches lived in global scope, and *committing was effectively pushing to master*. Git's distributed model — full repo on every clone, no privileged location, fast local commits, private branches you can throw away — was so radical that a 2007 Linus-at-Google talk got three different questions asking variations of *isn't distribution actually bad?*

> "in CVS and SVN, when you check out some files... you don't get the whole repository, you don't get the history, you just get some things"

> "in CVS and SVN, branching is incredibly tedious... they're considered a really advanced technique, so actually most people don't use them"

> "in 2010, Joel Spolsky said that distributed version control was possibly the biggest advance in software development in the past 10 years"

## Why Git is hard ([20m17s](https://www.youtube.com/watch?v=FQ4IdcrOUz0&t=1217s))

Git is a brilliant engineering achievement with a UI written by and for Linus Torvalds. The terminal isn't discoverable, the jargon is unique to it (*you are in a detached head state*), and the man page for `git push` reads *update remote refs along with associated objects* when it could just say *upload your changes*. There's a parody man-page generator that produces infinite plausible nonsense.

> "you are in a detached head state — that's just so unnecessary, that wording for that thing that it's trying to describe"

> "the Git documentation is so bad that there is a mock-off generator for it"

> "Git gets easier once you understand the basic idea that branches are homeomorphic endofunctors mapping submanifolds of a Hilbert space"

## `git add patch`, `commit amend`, `reset` ([25m31s](https://www.youtube.com/watch?v=FQ4IdcrOUz0&t=1531s))

The three data structures — working directory, staging index, commit history — make sense of the rest. `git add --patch` walks you through your diff hunk by hunk so a messy working file can still produce atomic commits. `git commit --amend` is the gateway-drug rewriter for fixing typos in the most recent commit. `git reset` moves changes back through the structures, with `--hard` reserved for the *actually delete them* case.

> "git add patch... if you're working in a non-linear way, a way that's not atomic, which is quite common, because to work atomically, you have to know what you're going to do before you do it"

> "the gateway drug to revising your history, because it just allows you to change the last commit"

> "if you git reset sha by accident, your changes will still be in something called the reflog... so you haven't lost them forever, but they are gone for a bit"

## `git rebase` and interactive rebase ([30m36s](https://www.youtube.com/watch?v=FQ4IdcrOUz0&t=1836s))

Rebase replays your commits onto a different parent — useful for cleaning up before sharing, with the *golden rule* of only ever rebasing local, unpublished commits. Interactive rebase (`git rebase -i`) opens a text-adventure that lists your commits with verbs (`pick`, `squash`, `reword`, `edit`, `drop`) so you can squash whitespace fixes together and reword bad messages in one pass.

> "rebasing will replay your changes over a branch... it just will take a patch of one commit and apply it to a different commit instead of the one you started from"

> "the golden rule about rebasing is only use it on local and unpublished branches"

> "git rebase interactive... is going to take rebasing and turn it into a very boring text adventure game"

## The "woke Old MacDonald" demo ([35m13s](https://www.youtube.com/watch?v=FQ4IdcrOUz0&t=2113s))

A nursery-rhyme refactor as a deliberately silly rebase example: change *he had some cows* to *she had some cows* and add a `change gender` commit; later realise wheat is more inclusive of vegan farmers; later realise the right pronoun is *they*; finally rebase to delete the `change gender` commit so the final history reads cleanly.

> "we'll start farming wheat, just think it's a bit safer"

> "they is the right thing I should have put there — it's inclusive of non-binary people, it also like, little boys and little girls can also climb under the 'they' umbrella"

> "now we're like, I'm gonna change, delete that change gender commit, and that's because it doesn't help tell the story of my project"

## Abort rebase, have a cup of tea ([37m17s](https://www.youtube.com/watch?v=FQ4IdcrOUz0&t=2237s))

When the dropped `change gender` commit collides with the later `they/them` edit, the rebase throws a merge conflict — and the right move is *abort the rebase, walk away, come back later*. The choice of `<<<<<<<` and `>>>>>>>` as conflict markers is deliberate: they're not valid syntax in any of the languages around at the time, so leaving them in by accident breaks loudly.

> "I'll abort, and you can just, if you get stuck in a rebase, you can just abort it, and you're fine, it's like nothing happened, no one needs to know"

> "I abort rebases a lot when I lose confidence in what I'm doing, and I go away, I have a cup of tea, like get centred, and then I'm gonna come back and I'm gonna actually solve the problem"

> "these little less-than equal-to symbols with HEAD in the bottom there were chosen because they're not valid syntax in any of the languages that were around at the time that Git was created"

---

Alice Bartlett opens by exhuming her own decade-old Financial Times commits with messages like *only SQLite stuff* and *fixes to download*, a confessional hook that lands because nobody is above it. From there she makes the case that commit history is the one artefact that survives the migrations vaporising your PR descriptions and ticket links, then sprints through the BitKeeper drama that birthed Git in two weeks and the impenetrable Linus-shaped UI we inherited. The workshop half covers `add --patch`, `commit --amend`, `reset`, interactive rebase and a gloriously silly woke Old MacDonald demo, closing with the best Git advice you'll hear: abort, have a cup of tea, come back.
