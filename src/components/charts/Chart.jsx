import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import "./Chart.scss";

class ChartBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      chartData1: {},
      chartData2: {},
    }
  }
  static defaultProps = {
    displayTitle: true,

    location: 'City'
  }
  componentWillMount() {
    this.getChartData()
  }




  getChartData() {

    this.setState({
      chartData: {
        labels: ['Mumbai, India', 'Dhaka, Bangladesh', 'Chiang Mai, Thailand', 'Beijing, China', 'Shanghai, China'],
        datasets: [
          {
            label: 'AQI',
            data: [
              176,
              173,
              172,
              170,
              159,
              0
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },



      chartData1: {
        labels: ['New York, USA', 'Tokyo, Japan', 'Melbourne, Australia', 'Bern, Switzerland', 'Paris, France'],
        datasets: [
          {
            label: 'AQI',
            data: [
              4,
              8,
              8,
              12,
              16,
              0
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },



      chartData2: {
        labels: ['Do not pollute the environment', 'Use environmentally friendly fuels', 'Live a healthy life', 'Planting trees', 'Use transport less often'],
        datasets: [
          {
            label: '',
            data: [
              47.5,
              37.5,
              20,
              11.25,
              21.25,
              0
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }


  render() {
    return (
      <div className="chart">
        <div className="container">
          <div className="chart-item">
            <Bar
              data={this.state.chartData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: 'Big cities with the most polluted air',
                  fontSize: 25,
                  fontColor: "#f1f1f1",
                },

              }}
            />
          </div>

          <Bar
            data={this.state.chartData1}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Big cities with the cleanest air',
                fontSize: 25,
                fontColor: "#f1f1f1",
              },

            }}
          />

          <Pie
            data={this.state.chartData2}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Human influence on air condition, % ',
                fontSize: 25,
                fontColor: "#f1f1f1",
              },

            }}
          />
        </div>
      </div>
    )
  }
}






export default ChartBar;