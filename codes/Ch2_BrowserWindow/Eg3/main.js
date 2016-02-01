/**
 * 1. Setting BrowserWindow Instance Methods - 'Is' and 'Get'
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
  mainWindow = new BrowserWindow({
    title: "Hello World!"
  });

  /**
   * Load the index.html of the app.
   */
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  console.log("Is window maximized: ", mainWindow.isMaximized());

  console.log("Is window minimized: ", mainWindow.isMinimized());

  console.log("Is window fullscreen: ", mainWindow.isFullScreen());

  console.log("Is window resizable: ", mainWindow.isResizable());

  console.log("Get current window size: ", mainWindow.getSize());

  console.log("Get window position: ", mainWindow.getPosition());

  console.log("Get window title: ", mainWindow.getTitle());

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
