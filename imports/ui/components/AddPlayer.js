import React from "react";
import {Players} from "./../../api/players";

export default class AddPalyer extends React.Component{
    handleSubmit (e) {
        let playerName = e.target.playerName.value;
        e.preventDefault();
        if (playerName) {
            e.target.playerName.value = '';

            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }
    render(){
        return (
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="input" type="text" name="playerName" placeholder="Player Name" />
                    <input type="submit" value="Add Player" className="button" />
                </form>
            </div>
        )
    }
}