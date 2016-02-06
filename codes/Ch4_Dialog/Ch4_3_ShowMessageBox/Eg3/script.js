/**
 * 1. Using custom icon in showMessageBox.
 * 2. This example will only run on Windows.
 */
'use strict';

const remote = require('electron').remote;
const dialog = remote.dialog;
const nativeImage = require('electron').nativeImage;

var image = nativeImage.createFromPath(__dirname + 'documents.png');

document.getElementById('msgBox').addEventListener('click', function() {

  /**
   * On Windows, “question” displays the same icon as “info”,
   * unless you set an icon using the “icon” option.
   */
  dialog.showMessageBox({
    type: 'info',
    buttons: ['Ok', 'Cancel'],
    title: 'Hello World!', // message box title
    message: 'Hello World! My name is Ashwin Hegde', // message box content title
    detail: 'I work as Software Engineer and Open Source Contributor!', // message box content
    icon: image
  });

});
