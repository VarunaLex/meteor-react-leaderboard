import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import Players from './../imports/api/players';
import TitleBar from "./../imports/ui/components/TitleBar";
import AddPlayer from "./../imports/ui/components/AddPlayer";
import PlayerList from "./../imports/ui/components/PlayerList";


Meteor.startup(function () {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = "React Meteor Leader-board app";
        let jsx = (
            <div>
                <TitleBar title={title} />
                <PlayerList players={players} />
                <AddPlayer />
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    
    });
});