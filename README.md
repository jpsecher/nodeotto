# Minimal Node app for testing Otto

Initial setup:

    $ otto compile

Development test:

    $ otto dev
    $ otto dev ssh

Then inside the local virtual machine:

    $ npm install
    $ sudo npm start

Now you should be able to connect to the app from outside:

    $ curl http://`otto dev address`/status
