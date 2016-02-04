/**
 * 1. Building application contextmenu.
 * 2. Setting menu shortcuts.
 * 3. Adding separator between submenu.
 * 4. Using MenuItem and to use menu append method.
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
  label: 'File',
  click: function() {
    console.log('item 1 clicked');
  }
}));

menu.append(new MenuItem({
  type: 'separator'
}));

menu.append(new MenuItem({
  label: 'Help',
  type: 'checkbox',
  checked: true
}));

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);
