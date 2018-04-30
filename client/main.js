import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import Players from './../imports/api/players';
import TitleBar from "./../imports/ui/components/TitleBar";

let renderPlayers = (playerList) => {
    return playerList.map((player) => {
        return (
        <div key={player._id}>
            <p>
                Player Name : {player.name} has scored : {player.score} 
                <button onClick={() => Players.update(player._id, {$inc : {score: 1}})}> +1 </button>
                <button onClick={() => Players.update(player._id, {$inc: {score: -1} })}> -1 </button>
                <button onClick={() => Players.remove(player._id)}> &times; </button>
            </p>
        </div>);
    })
};

const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if (playerName) e.target.playerName.value = '';

    Players.insert({
        name: playerName,
        score: 0
    });
};

Meteor.startup(function () {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = "React Meteor Leader-board app";
        let jsx = (
            <div>
                <TitleBar title={title} />
                Dinamic Render : {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player Name" />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    
    });
});