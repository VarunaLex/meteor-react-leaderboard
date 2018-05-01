import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import {Players, calculatePlayerPosition} from './../imports/api/players';
import App from "./../imports/ui/components/App";

Meteor.startup(function () {
    Tracker.autorun(() => {
        let players = Players.find({}, {sort: {score: -1}}).fetch();
        let positionedPlayers = calculatePlayerPosition(players);
        let title = "React Meteor Leader-board app";
        ReactDOM.render(<App title={title} players={positionedPlayers} />, document.getElementById('app'));
    });
});