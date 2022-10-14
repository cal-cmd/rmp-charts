import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Axios from 'axios';

class Boosters extends Component {

  constructor(props) {
    super(props);

    let items = [];
    let names = ["tier_1_b_booster", "tier_2_b_booster", "tier_3_b_booster", "tier_1_e_booster", "tier_2_e_booster", "tier_3_e_booster"];

    for(let i=0; i < names.length; i++) {
      // hello :(
      Axios.get(`http://164.90.145.109:3001/api/get/${names[i]}`).then((response) => {

      let cPrices = [];
      let cDates = [];

        for(let x=0; x < response.data.length; x++) {
          cPrices.push(response.data[x]['PRICE']);
          cDates.push(response.data[x]['DATE']);
        }

        let item = {
          "name": response.data[0]['ITEM'],
          "data": cPrices
        }

        let cOptions = {
          stroke: {
            curve: 'smooth'
          },
          markers: {
            size: 0
          },
          xaxis: {
            categories: cDates
          }
        }

        items.push(item); 

        if(i === names.length-1) {
          this.setState({series : items});
          this.setState({options : cOptions});
        }
      });
    }

    this.state = {
      options: {
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 0
        }
        // xaxis: {
        //   categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        // }
      },
      series: [{
        name: '',
        data: []
      }]
    }
  }

  render() {

    return (
      <div className="line">
        <center><Chart options={this.state.options} series={this.state.series} type="line" width="1700" height="850" /></center>
      </div>
    );
  }
}

export default Boosters;
