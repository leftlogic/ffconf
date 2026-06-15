# FFConf archive site

The site also shows when the tickets are live. The date of the conference has automatically worked out based on the second Friday of November. But when a new event goes live, we have to update the ticket URL and the launch date for the tickets. We also need to add the year.

There's two key files for each year. One of them is the tickets.js, which includes the URL to bind tickets. It's about it. The second file is next.js, which is the next conference, which dynamically works out the URL, the date to the event based on the second Friday of November.

And it has the whether the CFP is open, and the ticket launch date, which probably should be in the ticket file. But the ticket file is more code than it is data. It feels a bit split over the different places, but that's what needs to be updated.

After the event is finished, manually add the data to the event sessions and speakers, JSON files, which drives the rendering of the talk pages.

## Adding new years

- ./graphql/data/events.json