---
id: playlist
layout: layouts/simple
js: playlist.mjs
css:
  - simple-page.css
  - playlist.css
---

# The event playlist

Due to having spent his youth in the 80s, Remy has always run the same playlist at FFConf. If you enjoyed it, or wanted to re-live those Rick Rollin' days, the playlist is available below to enjoy again.

<div class="playlist-tabs" id="playlist-tabs">
	<label class="playlist-tab" id="tab-apple">
		<input type="radio" name="playlist-service" value="apple" checked>
		<img src="/images/apple-icon.svg" alt="Apple Music" />
		Apple Music
	</label>
	<label class="playlist-tab" id="tab-spotify">
		<input type="radio" name="playlist-service" value="spotify">
		<img src="/images/spotify-icon.svg" alt="Spotify" />
		Spotify
	</label>
</div>
<div id="playlist-iframe"></div>
<script src="/assets/playlist.mjs" type="module"></script>
