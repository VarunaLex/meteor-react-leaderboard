import { Meteor } from "meteor/meteor";
import Players from './../imports/api/players';

Meteor.startup(function () {
    // Players.insert(
    //     {
    //         name: "Panasara",
    //         score: 11
    //     }
    // );
    // console.log(Players.find().fetch());
    console.log(Players.find().fetch());
    
});