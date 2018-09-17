import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    // console.log(event)
    drawChromeBoiAtCoords(event.clientX, event.clientY)

    toggleCycling();
  }

  keyThing = (event) => {
    console.log(event.key)
    if (event.key === 'a') {
      resize('+')
    }
    if (event.key == 's') {
      resize('-')
    }
  }


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.toggleCycling}
        onKeyPress={this.keyThing}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
