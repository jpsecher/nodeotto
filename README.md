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

Production setup:

    $ otto  infra

Production deployment:

    $ otto build
    $ otto deploy

Now the deployed app should run on

    $ otto deploy info

