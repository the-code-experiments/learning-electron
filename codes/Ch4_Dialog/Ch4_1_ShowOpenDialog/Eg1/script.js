/**
 * 1. Using showOpenDialog to open the "Open dialog box".
 * 2. Setting showOpenDialog to get the directory path.
 */
'use strict';

const remote = require('electron').remote;
const dialog = remote.dialog;

document.getElementById('openDirectory').addEventListener('click', function() {

  /**
   * Notes:
   * On Windows and Linux an open dialog can not be both a file selector and a directory selector,
   * so if you set properties to ['openFile', 'openDirectory'] on these platforms,
   * a directory selector will be shown.
   */
  dialog.showOpenDialog({
    properties: ['openDirectory'], // Open Directory Parameter,
    title: 'Select your project directory ...', // Set opendialog title.
    defaultPath: '/home/hegdeashwin/Downloads' // Set the default path for opendialog box.
  }, function(path) {

    /**
     * On success this method returns an array of file paths chosen by the user,
     * otherwise it returns undefined.
     */
    document.getElementById('openDirectoryInput').value = path;
  });

});
