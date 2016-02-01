/**
 * 1. Setting BrowserWindow Instance Methods - 'set'.
 * 2. How to use remote module.
 */

'use strict';

var remote = require('remote');

/**
 * Maximizes the window.
 */
document.getElementById('maximizes').addEventListener("click", function() {
  var window = remote.getCurrentWindow();
  window.maximize();
});

/**
 * Minimize the window.
 */
document.getElementById('minimize').addEventListener("click", function() {
  var window = remote.getCurrentWindow();
  window.minimize();
});

/**
 * Set window size.
 * @params: width, height [, animation]
 */
document.getElementById('setSize').addEventListener("click", function() {
  var window = remote.getCurrentWindow();
  window.setSize(500, 400);
});

/**
 * Set window position.
 * @params: x, y [, animation]
 */
document.getElementById('setPosition').addEventListener("click", function() {
  var window = remote.getCurrentWindow();
  window.setPosition(200, 200);
});

/**
 * Set window position to center.
 */
document.getElementById('centerWindow').addEventListener("click", function() {
  var window = remote.getCurrentWindow();
  window.center();
});

/**
 * Set window resize
 * @params: boolean (true = enable)
 */
document.getElementById('enableResize').addEventListener("click", function() {
  var window = remote.getCurrentWindow();
  window.setResizable(true);
});

/**
 * Set window resize
 * @params: boolean (false = disable)
 */
document.getElementById('disableResize').addEventListener("click", function() {
  var window = remote.getCurrentWindow();
  window.setResizable(false);
});

/**
 * Set window title
 * @params: string
 */
document.getElementById('setTitle').addEventListener("click", function() {
  var window = remote.getCurrentWindow();
  window.setTitle("Hello World!");
});
