# FFConf archive site

The site also shows when the tickets are live. The date of the conference has automatically worked out based on the second Friday of November. But when a new event goes live, we have to update the ticket URL and the launch date for the tickets. We also need to add the year.

There's two key files for each year. One of them is the [tickets.js](./src/_data/tickets.js), which includes the URL to bind tickets. It's about it. The second file is [next.js](./src/_data/next.js), which is the next conference, which dynamically works out the URL, the date to the event based on the second Friday of November.

It also has the whether the CFP is open, and the ticket launch date, (which probably should be in the ticket file). But the ticket file is more code than it is data.

It feels a bit split over the different places, but that's what needs to be updated.

After the event is finished, manually add the data to the event sessions and speakers, JSON files, which drives the rendering of the talk pages.

## Adding new years

- [events.json](./graphql/data/events.json) - set `live: false` and only set to `live` once the event has passed.
- Each speaker is individually added to [speakers.json](./graphql/data/speakers.json). The `websites` property is an object with the label mapped to the URL. `id` is a unique identifier (though I don't handle speakers repeating yet). Photos should be `.avif` (actually across the board unless being used for social cards).
- The talks themselves are stored in [sessions.json](./graphql/data/sessions.json). The `speakerId` maps to the `speakers.id` from above. The `video` URL should point to the YouTube playlist for the year, and not the individual video (so "play next" works).
- The sessions have a tag which are exclusively picked from this list:

```
[
  "accessibility",
  "ai",
  "audio",
  "betterment",
  "big web ideas",
  "creativity",
  "css",
  "development & ops",
  "fun",
  "history",
  "iot",
  "javascript",
  "mobile",
  "offline",
  "performance",
  "standards",
  "svg",
  "testing"
]
```

## Related talks

The talk pages have related talks. This is done by creating embeddings for the talk description (which isn't much text) and then calculating nearby embedding vectors to get suggestions.

When a new year is added, the embeddings should be re-run via `npm run related`.