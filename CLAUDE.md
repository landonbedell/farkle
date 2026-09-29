# Farkle Scorekeeper

Single-file offline web app (`index.html`), installed on an iPhone via GitHub Pages
(`https://landonbedell.github.io/farkle/`, repo `landonbedell/farkle`). Push to `main` to deploy.

- Every change that ships: bump `APP_VERSION` in `index.html` **and** `CACHE` in `sw.js` to the
  same number. The version shows at the bottom of the Players & settings screen.
- No build step and no external libraries; everything (dice physics, 3D dice, sounds) must keep
  working offline.
- Test at iPhone 16 Pro standalone size: 402×778. The game screen should fit without scrolling.
- AI players (`players[].ai` = easy/medium/hard) drive the same actions a person uses via
  `aiSchedule`/`aiStep`. Hard uses `hardPolicy()`, an exact expected-value table over all rolls.
  To test AI quickly, call `aiStep()` and `tick(ui.t0 + 1e7, ui.play)` directly instead of waiting.
- The Browser pane can't register service workers, so offline caching can only be checked on a
  real browser or the phone.
