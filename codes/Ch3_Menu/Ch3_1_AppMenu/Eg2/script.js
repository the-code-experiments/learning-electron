/**
 * 1. Setting menu shortcuts.
 * 2. Build application menu with template.
 * 3. Setting role for menuitem.
 * 4. Binding 'click' menu event and taking action.
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
   label: 'Window',
   submenu: [{
     label: 'Minimize',
     role: 'minimize'
   }, {
     type: 'separator'
   }, {
     label: 'Close',
     role: 'close'
   }]
 }, {
   label: 'Help',
   submenu: [{
     label: 'Repository',
     /**
      * Bind a click event to the menuitem and perform action to open the external URL on browser.
      */
     click: function() {
       require('electron').shell.openExternal('https://github.com/Code-by-practice/learning-electron');
     }
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
