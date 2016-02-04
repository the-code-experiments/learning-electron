/**
 * 1. Building application contextmenu.
 * 2. Setting menuitem role.
 */
'use strict';

const remote = require('electron').remote;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

/**
 * Create menu instance.
 */
var menu = new Menu();

/**
 * Pass MenuItem instance as a menu append parameter.
 */
menu.append(new MenuItem({
  label: 'Minimize',
  role: 'minimize'
}));

menu.append(new MenuItem({
  type: 'separator'
}));

menu.append(new MenuItem({
  label: 'Close',
  role: 'close'
}));

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);
