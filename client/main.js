/**
 * Created by TomasDePomas.
 * Using: PhpStorm
 * On: 5-10-16 - 15:03
 */

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// START THE REQUIRED PROCESSES
Meteor.startup(() => {
    Notifier.start();
});

// SEND A NOTIFICATION ON A BUTTON CLICK
Template.body.events({
    'click button'(event, instance) {

        if (Meteor.userId() !== null) {

            Notifier.send(
                'Hello human',
                Meteor.userId(),
                {
                    title: 'Message',
                    link: 'www.google.com',
                    icon: '/img/icon.png',
                    tag: 'meteorserver',
                    archive: true,
                    sticky: false
                }
            );
        }
    }
});



Template.body.helpers({
    userAvailable: () => {
        return Meteor.userId() !== null;
    }
});