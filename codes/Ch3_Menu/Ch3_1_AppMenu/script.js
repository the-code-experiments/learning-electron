'use strict';

const remote = require('electron').remote;
const Menu = remote.Menu;

var menu = new Menu();

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);

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

menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
