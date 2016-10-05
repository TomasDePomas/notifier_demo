Notifier DEMO
=============
*You've got mail.* - Elwood Edwards

Introduction
------------

This package is made as a simple demo of the [tomasdepomas:notifier](https://github.com/TomasDePomas/notifier) package.
This demo runs version 0.8.1 of the package.

Getting it running
------------------

The manifest and service worker file have already been added to the correct location.

1. Get your API key and project number for the GCM service ( how to get this is explained [here](https://github.com/TomasDePomas/notifier/blob/master/docs/GCM-Configuration.md) )
2. Add the API key to the ``/server/main.js`` file on line 10
3. Add your project number to the ``public/notification-manifest.json`` file on line 2
4. Run the application with the ``meteor`` command

Important files
---------------

The files that are interesting to have a look at:
- __server/main.js__ - shows how to set the API key
- __public/__ - this entire folder shows where the manifest and service worker should be located
- __client/main.js__ - shows how to start the required processes and send a message to the current user
- __client/main.html__ - shows how to include the notifier UI elements to your application