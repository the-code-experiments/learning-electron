/**
 * 1. Using showOpenDialog to open the directory.
 */
'use strict';

const remote = require('electron').remote;
const dialog = remote.dialog;

document.getElementById('openDirectory').addEventListener('click', function() {

  dialog.showOpenDialog({
    properties: ['openDirectory']
  }, function(data) {
    document.getElementById('openDirectoryInput').value = data;
  });

});
