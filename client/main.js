import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import Players from './../imports/api/players';

let renderPlayers = (playerList) => {
    return playerList.map((player) => {
        return (
        <div key={player._id}>
            <p>
                Player Name : {player.name} has scored : {player.score} 
                <button onClick={() => Players.remove({_id: player._id})}> &times; </button>
            </p>
        </div>);
    })
};

const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    let playerScore = e.target.playerScore.value;
    e.preventDefault();
    if (playerName) e.target.playerName.value = '';
    if (playerScore) e.target.playerScore.value = '';

    Players.insert({
        name: playerName,
        score: playerScore
    });
};

Meteor.startup(function () {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let jsx = (
            <div>
                <p>Hello</p>
                Dinamic Render : {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player Name" />
                    <input type="text" name="playerScore" placeholder="Player Score" />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    
    });
});