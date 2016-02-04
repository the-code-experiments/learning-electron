/**
 * 1. Using default showMessageBox.
 * 2. Setting message box title, message and detail.
 * 3. Setting and triggering buttons with index and taking actions.
 */
'use strict';

const remote = require('electron').remote;
const dialog = remote.dialog;

document.getElementById('noneMsgBox').addEventListener('click', function() {

  /**
   * Buttons is required field.
   */
  dialog.showMessageBox({
    type: 'none',
    buttons: ['Ok', 'Cancel'],
    title: 'Hello World!', // message box title
    message: 'Hello World! My name is Ashwin Hegde', // message box content title
    detail: 'I work as Software Engineer and Open Source Contributor!' // message box content
  }, function(index) {

    /**
     * Shows a message box, it will block the process until the message box is closed.
     * It returns the index of the clicked button.
     */
    switch (index) {
      case 0:
        alert("You clicked 'ok'!");
        break;

      case 1:
        alert("You clicked 'Cancel'!");
        break;
    }

  });

});
