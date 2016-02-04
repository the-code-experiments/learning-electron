/**
 * 1. Using showSaveDialog to open the "Save dialog box".
 */
'use strict';

const remote = require('electron').remote;
const dialog = remote.dialog;

document.getElementById('saveInDirectoryByFilter').addEventListener('click', function() {

  dialog.showSaveDialog({
    filter: [{
      name: 'images',
      extensions: ['jpg', 'png', 'gif']
    }, {
      name: 'videos',
      extensions: ['mkv', 'avi', 'mp4']
    }, {
      name: 'All Files',
      extensions: ['*']
    }],
    title: 'Select your project directory ...', // Set opendialog title.
    defaultPath: '/home/hegdeashwin/Downloads' // Set the default path for opendialog box.
  }, function(path) {

    /**
     * On success this method returns an array of file paths chosen by the user,
     * otherwise it returns undefined.
     */
    document.getElementById('saveInDirectoryInput').value = path;
  });

});
