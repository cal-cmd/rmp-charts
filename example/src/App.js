import React, { Component } from 'react'
import Boosters from './chart-types/Boosters'
import Crafting from './chart-types/Crafting'
import Seeds from './chart-types/Seeds'
import Berries from './chart-types/Berries'
import ChartUpdate from './ChartUpdate'
import './style.css';

class App extends Component {
  constructor (props) {
    super(props)

    this.changeChart = this.changeChart.bind(this)

    this.state = {
      selectedChart: 'seeds'
    }
  }

  changeChart (e) {
    this.setState({selectedChart: e.target.value})
  }

  render () {
    return (
      <div className="app">
        <select id="lang" value={this.state.selectedChart} onChange={this.changeChart}>
          <option value="seeds" >Seeds</option>
          <option value="berries" >Berries</option>
          <option value="crafting" >Crafting</option>
          <option value="boosters" >Boosters</option>
        </select>

        { this.state.selectedChart === 'boosters' ? (<Boosters></Boosters>) : null}
        { this.state.selectedChart === 'seeds' ? (<Seeds></Seeds>) : null}
        { this.state.selectedChart === 'berries' ? (<Berries></Berries>) : null}
        { this.state.selectedChart === 'crafting' ? (<Crafting></Crafting>) : null}
        { this.state.selectedChart === 'updateExample' ? (<ChartUpdate></ChartUpdate>) : null}
        <div className="contact"><center>Have data you want to add? Contact me on Discord @ <b>Alienbyte#1830</b></center></div>
      </div>
    )
  }
}

export default App
