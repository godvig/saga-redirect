/* global self, caches */
// Replaces the old app's service worker on an old address (klansagan.godvig.com, saga.godvig.com): it removes
// itself and its caches, so returning visitors get the page that sends them to släktsagan.se.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
