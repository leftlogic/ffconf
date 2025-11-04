/* eslint-env browser */
const appleIframe =
  '<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/gb/playlist/future-friends-conference-ffconf/pl.u-e98lyp5tq8Wky"></iframe>';
const spotifyIframe =
  '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4eyy74RPZNl0fSk6DysvzM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
const iframeDiv = document.getElementById('playlist-iframe');
const tabs = document.querySelectorAll('.playlist-tab');
const radios = document.querySelectorAll('input[name="playlist-service"]');

function updateIframeTab(setHash = true) {
  const selected = document.querySelector(
    'input[name="playlist-service"]:checked'
  ).value;
  iframeDiv.innerHTML = selected === 'apple' ? appleIframe : spotifyIframe;
  tabs.forEach((tab) => {
    tab.classList.toggle('selected', tab.querySelector('input').checked);
  });
  if (setHash) {
    window.location.hash = selected;
  }
}

function setTabFromHash() {
  let hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash !== 'apple' && hash !== 'spotify') {
    hash = 'apple';
  }
  radios.forEach((radio) => {
    radio.checked = radio.value === hash;
  });
  updateIframeTab(true);
}

// Listen for tab changes
radios.forEach((radio) => {
  radio.addEventListener('change', () => updateIframeTab(true));
});

// Listen for hash changes (if user changes hash manually)
window.addEventListener('hashchange', setTabFromHash);

// On page load, set tab from hash
setTabFromHash();
