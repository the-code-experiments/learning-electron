/**
 * 1. Building application contextmenu.
 * 2. Binding click event
 * 3. Using checkbox option for menuitem
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
    alert('File got clicked');
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
