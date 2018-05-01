import React from "react";
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import {Players} from "./../../api/players";
import Player from "./Player";


export default class PlayerList extends React.Component{
    renderPlayers() {
        if (this.props.players.length === 0){
            return (
                <div className="item">
                    <p className="message"> - Add first player -</p>
                </div>
            )
        }
        else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player} />
            });
        }
    }

    render(){
        return (
            <div>
                <FlipMove duration={300} easing="ease-out">
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        )
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}
