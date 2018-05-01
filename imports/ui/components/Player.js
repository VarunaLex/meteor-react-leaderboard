import React from "react";
import PropTypes from 'prop-types';
import {Players} from "./../../api/players";

export default class Player extends React.Component{
    render(){
        let itemPosition = `item position-${this.props.player.rank}`;

        return (
            <div key={this.props.player._id} className={itemPosition}>
                <div className="player">
                    <div>
                        <h3 className="name">{this.props.player.name}</h3>
                        <p className="stats">
                           {this.props.player.position} place - 
                            Score : {this.props.player.score}
                        </p>
                    </div>
                    <div className="actions">
                        <button onClick={() => Players.update(this.props.player._id, { $inc: { score: 1 } })} className="button round">+1</button>
                        <button onClick={() => Players.update(this.props.player._id, { $inc: { score: -1 } })} className="button round">-1</button>
                        <button onClick={() => Players.remove(this.props.player._id)} className="button round btn-del">&times;</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
};