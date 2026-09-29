# vendor/

Robot voice for AI trash talk.

- `mespeak.js`: meSpeak 1.9.6 (npm package `mespeak` 2.0.2, <https://github.com/mikolalysenko/mespeak>),
  a JavaScript build of the eSpeak speech synthesizer by N. Landsteiner, based on speak.js.
  The two original files (`src/ESpeak.js`, `src/index.js`) are concatenated unmodified inside a small
  wrapper that exposes `window.meSpeak` for use without a bundler.
- `mespeak_config.json`, `en-us.json`: the matching eSpeak data and US English voice from the same package.

eSpeak and meSpeak are licensed under the GNU General Public License (GPL); see
<https://www.gnu.org/licenses/gpl-3.0.html>. Source: <https://github.com/mikolalysenko/mespeak> and
<http://www.masswerk.at/mespeak/>.
