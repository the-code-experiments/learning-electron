/**
 * 1. Create BrowserWindow instance and loadURL
 * 2. How to enable DevTools.
 */
'use strict';

const electron = require('electron');

/**
 * Module to control application life cycle.
 */
const app = electron.app;

/**
 * Module to create native browser window.
 */
const BrowserWindow = electron.BrowserWindow;

/**
 * mainWindow keep a global reference of the window object, if you don't then window
 * will be closed automatically when the JavaScript object is garbage collected.
 */
var mainWindow = null;

/**
 * Quit when all windows are closed.
 */
app.on('window-all-closed', function() {

  /**
   * It is common for applications and their menu bar
   * to stay active until the user quits explicitly with Cmd + Q
   */
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

/**
 * 'ready' method will be called when Electron has finished initialization and
 * is ready to create browser window.
 */
app.on('ready', function() {

  /**
   * Create the new browser window.
   */
  mainWindow = new BrowserWindow({
    resizable: false,
    center: true,
    title: "Calculator",
    width: 275,
    height: 285
  });

  /**
   * Load the index.html of the app.
   */
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  /**
   * Open the DevTools for debugging.
   */
  mainWindow.webContents.openDevTools();

  /**
   * Emitted when the window is closed.
   */
  mainWindow.on('closed', function() {

    /**
     * Derefeence the window object
     */
    mainWindow = null;
  });

});
