/**
 * 1. Building application Tray.
 * 2. Setting Tray icon.
 * 3. How to set Tray contextMenu.
 */
'use strict';

const remote = require('electron').remote;
const Menu = remote.Menu;
const Tray = remote.Tray;

/**
 * Create tray instance and pass icon image path.
 */
var tray = new Tray(__dirname + '/documents.png');

/**
 * Build application tray context menu.
 */
var trayContextMenu = Menu.buildFromTemplate([
    {
      label: 'File',
      click: function() {
        alert('File got clicked!');
      }
    },
    {
      label: 'Save',
      click: function() {
        alert('Save got clicked!');
      }
    }
  ]);

tray.setContextMenu(trayContextMenu);
