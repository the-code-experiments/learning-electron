/**
 * 1. Building application menu.
 * 2. Setting menu shortcuts.
 * 3. Adding separator between submenu.
 * 4. Build application menu with template.
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
    label: 'New',
    accelerator: 'CmdOrCtrl+N'
  }, {
    label: 'Open',
    accelerator: 'CmdOrCtrl+O'
  }, {
    type: 'separator'
  }, {
    label: 'Save',
    accelerator: 'CmdOrCtrl+S'
  }, {
    label: 'Save As'
  }, {
    type: 'separator'
  }, {
    label: 'Print',
    accelerator: 'CmdOrCtrl+P'
  }, {
    label: 'Quit',
    accelerator: 'CmdOrCtrl+Q'
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
