import React from 'react';
import ReactDOM from "react-dom";
import {cards} from "./card_deck.js";

const Cards = React.createClass({
  shuffle: function(cards) {
    let shuffled = [];
    let keys = Object.keys(cards);
    for(let i = keys.length; i > 0; i--) {
      let randomInd = Math.floor(Math.random()*keys.length);
      let randomCard = cards[keys[randomInd]];
      shuffled.push(randomCard);
      keys.splice(randomInd, 1);
    }
    return shuffled;
  }
})

export {Cards}