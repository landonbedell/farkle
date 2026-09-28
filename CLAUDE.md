# Farkle Scorekeeper

Single-file offline web app (`index.html`), installed on an iPhone via GitHub Pages
(`https://landonbedell.github.io/farkle/`, repo `landonbedell/farkle`). Push to `main` to deploy.

- Every change that ships: bump `APP_VERSION` in `index.html` **and** `CACHE` in `sw.js` to the
  same number. The version shows at the bottom of the Players & settings screen.
- No build step and no external libraries; everything (dice physics, 3D dice, sounds) must keep
  working offline.
- Test at iPhone 16 Pro standalone size: 402×778. The game screen should fit without scrolling.
- The Browser pane can't register service workers, so offline caching can only be checked on a
  real browser or the phone.
