import { Mongo } from "meteor/mongo";

const Players = new Mongo.Collection('player');

export default Players;