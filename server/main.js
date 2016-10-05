/**
 * Created by TomasDePomas.
 * Using: PhpStorm
 * On: 5-10-16 - 16:22
 */

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    Notifier.GCMAPIKey = "<ADD API KEY HERE>";
});
