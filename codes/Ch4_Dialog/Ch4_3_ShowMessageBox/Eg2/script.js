/**
 * 1. Using differnt showMessageBox.
 */
'use strict';

const remote = require('electron').remote;
const dialog = remote.dialog;

document.getElementById('infoMsgBox').addEventListener('click', function() {

  /**
   * Info message box.
   * Notes:
   * On Windows, "question" displays the same icon as "info",
   * unless you set an icon using the "icon" option.
   */
  dialog.showMessageBox({
    type: 'info',
    buttons: ['Ok'],
    title: 'Hello World!',
    message: 'Hello World! My name is Ashwin Hegde',
    detail: 'I work as Software Engineer and Open Source Contributor!'
  });

});

document.getElementById('errorMsgBox').addEventListener('click', function() {

  /**
   * Error message box.
   */
  dialog.showMessageBox({
    type: 'error',
    buttons: ['Ok'],
    title: 'Hello World!',
    message: 'Hello World! My name is Ashwin Hegde',
    detail: 'I work as Software Engineer and Open Source Contributor!'
  });

});

document.getElementById('questionMsgBox').addEventListener('click', function() {

  /**
   * Question message box.
   */
  dialog.showMessageBox({
    type: 'question',
    buttons: ['Ok'],
    title: 'Hello World!',
    message: 'Hello World! My name is Ashwin Hegde',
    detail: 'I work as Software Engineer and Open Source Contributor!'
  });

});

document.getElementById('warningMsgBox').addEventListener('click', function() {

  /**
   * Warning message box.
   */
  dialog.showMessageBox({
    type: 'warning',
    buttons: ['Ok'],
    title: 'Hello World!',
    message: 'Hello World! My name is Ashwin Hegde',
    detail: 'I work as Software Engineer and Open Source Contributor!'
  });

});
