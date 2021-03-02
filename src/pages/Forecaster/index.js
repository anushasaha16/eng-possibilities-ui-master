import React, {Component} from "react";
import Graph from '../../components/Graph/Graph'
import ForecastService from '../../services/ForecastServer'
import './index.css'

class ForecasterHome extends Component {
  state = {
    options: [],
    allocations: [],
    forecast: [],
  };

  componentDidMount() {
    ForecastService.getInvestmentOptions().then((response) => {
      this.setState({options: response.data})      
    })
  }
  
  handleSubmit = async e => {
    ForecastService.getForecast().then((response) => {
      this.setState({forecast: response.data})      
    })
  };

  render() {
    return (
      <>
        <div>
          <h3>Investment Forecaster</h3>
          <p>Customize your investments and and view the potential growth of $10,000 over a period of 10 years</p>
        </div>
        <Graph/>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Investment Allocations</strong>
          </p>
          <p>
            <strong>$10,000 available</strong>
          </p>  
          <table>
            <thead>
              <tr>
                <th>Investment Category</th>
                <th>Minimum</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.options.map(
                  option =>
                  <tr key = {option.category}>
                    <td>{option.category}</td>
                    <td>{option.minimum}%</td>
                    <td><input type = "text"></input></td>  
                  </tr>
                ) 
              }
            </tbody>
          </table>
          <input id = "submit-button" type="submit" value="Update"></input>
        </form>

      </>
    );  
  }
}

export default ForecasterHome;
