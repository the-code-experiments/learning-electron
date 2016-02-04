/**
 * 1. Using showOpenDialog to open the "Open dialog box".
 * 2. Setting showOpenDialog to get the file path.
 * 3. Appling filter while opening dialog box.
 */
'use strict';

const remote = require('electron').remote;
const dialog = remote.dialog;

document.getElementById('openFile').addEventListener('click', function() {

  /**
   * Open file
   */
  dialog.showOpenDialog({
    properties: ['openFile']
  }, function(path) {

    /**
     * On success this method returns an array of file paths chosen by the user,
     * otherwise it returns undefined.
     */
    document.getElementById('openFileInput').value = path;
  });

});

document.getElementById('openFileByFilter').addEventListener('click', function() {

  /**
   * Open file by filter. The filters specifies an array of file types that can be displayed or selected
   * when you want to limit the user to a specific type.
   *
   * Notes:
   * The extensions array should contain extensions without wildcards or
   * dots (e.g. 'png' is good but '.png' and '*.png' are bad).
   * To show all files, use the '*' wildcard (no other wildcard is supported).
   */
  dialog.showOpenDialog({
    properties: ['openFile'],
    filter: [{
      name: 'images',
      extensions: ['jpg', 'png', 'gif']
    }, {
      name: 'videos',
      extensions: ['mkv', 'mp4', 'avi']
    }, {
      name: 'All Files',
      extensions: ['*']
    }]
  }, function(path) {

    /**
     * On success this method returns an array of file paths chosen by the user,
     * otherwise it returns undefined.
     */
    document.getElementById('openFileInputByFilter').value = path;
  });

});
