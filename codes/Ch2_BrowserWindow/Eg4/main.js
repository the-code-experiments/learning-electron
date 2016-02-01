/**
 * 1. Setting BrowserWindow Instance Methods - 'set'
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
 * 'ready' method will be called when Electron has finished initialization and
 * is ready to create browser window.
 */
app.on('ready', function() {

  /**
   * Create the new browser window.
   * There are lot more options to set please visit: http://electron.atom.io/docs/v0.36.5/api/browser-window/#class-browserwindow
   */
  mainWindow = new BrowserWindow();

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
