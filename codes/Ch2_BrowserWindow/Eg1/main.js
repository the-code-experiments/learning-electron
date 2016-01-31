/**
 * 1. Setting BrowserWindow width, height, minWidth, minHeight, maxWidth and maxHeight
 * 2. Setting BrowserWindow center, resizable
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
   */
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    maxWidth: 1000,
    maxHeight: 500,
    resizable: true,
    center: true
  });

  /**
   * Load the index.html of the app.
   */
  mainWindow.loadURL('file://' + __dirname + '/index.html');

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
