/**
 * 1. Building application menu.
 * 2. Adding separator between submenu.
 * 3. Build application menu with template.
 */
'use strict';

const remote = require('electron').remote;
const Menu = remote.Menu;

/**
 * Create menu instance.
 */
var menu = new Menu();

/**
 * Create menu template.
 */
var template = [{
  label: 'File',
  submenu: [{
    label: 'New'
  }, {
    label: 'Open'
  }, {
    type: 'separator'
  }, {
    label: 'Save'
  }, {
    label: 'Save As'
  }, {
    type: 'separator'
  }, {
    label: 'Print'
  }, {
    label: 'Quit'
  }]
}, {
  label: 'Help',
  submenu: [{
    label: 'Documentation'
  }, {
    label: 'About'
  }]
}];

/**
 * Provide template to buildFromTemplate method.
 */
menu = Menu.buildFromTemplate(template);

/**
 * Provide menu to setApplicationMenu method.
 */
Menu.setApplicationMenu(menu);
