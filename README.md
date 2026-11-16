# saga-redirect

Sends visitors of the old address **saga.godvig.com** to [Släktsagan](https://släktsagan.se/) at **släktsagan.se**, and helps them move a family archive saved in their browser under the old address.

Browsers keep saved data per address, so the archive can't follow by itself. This page hands it over to the new address inside the browser (`postMessage`); nothing passes a server and nothing is deleted here. Visitors with nothing saved are redirected at once, with the path and shared links kept intact.

The source and tests live in the app's repository, under `move/`: https://github.com/godvig/family-saga. Copy `move/old-address/*` here to update, and keep this repository's own `CNAME`. The same pages are published on klansagan.godvig.com from `godvig/klansagan-redirect`.
