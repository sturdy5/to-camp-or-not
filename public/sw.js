importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.


// Change this to your repository name
var GHPATH = '/to-camp-or-not';

// Choose a different app prefix name
var APP_PREFIX = 'tcontc_';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…).
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);