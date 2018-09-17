import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  makeToggleCycling = () => {
    toggleCycling()
  }

  keyDowned = (event) => {
    let arg
    if (event.key === "a")
      {arg = "+"}
    if (event.key ==="s")
      {arg = "-"};
    resize(arg)
  }

  render() {
    // debugger
    return (
      <canvas
        onKeyDown={this.keyDowned}
        onClick={this.makeToggleCycling}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
