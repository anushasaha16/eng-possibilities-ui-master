import React, {Component} from "react";
import Graph from '../../components/Graph/Graph'
import ForecastService from '../../services/ForecastServer'
import './index.css'

class ForecasterHome extends Component {
  state = {
    options: [],
    allocations: { request: {
      Retail: 0.0,
      FinancialServices: 0.0,
      Energy: 0.0,
      Technology: 0.0,
      Airline: 0.0,        
      RealEstate: 0.0,
      Gaming: 0.0,
      Pharmaceuticals: 0.0
    }},
    forecast: [11532.00, 12289.49, 14652.40, 16089.65, 16786.33, 20501.64, 26464.97, 29953.73, 36323.80, 40275.31],
  };

  componentDidMount() {
    ForecastService.getInvestmentOptions().then((response) => {
      this.setState({
        ...this.state,
        options: response.data
      })      
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();

    ForecastService.getForecast(this.state.allocations).then((res) => {
      this.setState({
        ...this.state,
        forecast: res.data.response
      })   
      console.log(this.state.forecast)   
    })

    
  };

  handleChange = event =>{
    this.setState({
      ...this.state,
      allocations: { request: {
        ...this.state.allocations.request,
        [event.target.name.replace(/\s/g, '')]: event.target.value
      }}
    });
  }

  render() {
    return (
      <>
        <div>
          <h3>Investment Forecaster</h3>
          <p>Customize your investments and and view the potential growth of $10,000 over a period of 10 years</p>
        </div>
        <Graph data={this.state.forecast}/>
        <form onSubmit={this.handleSubmit}>
          <h4>
            Investment Allocations
          </h4>
          <p>
            <strong>You have $10,000 available to invest</strong>
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
                    <td><input type = "number" name={option.category} min="0" max="100" onChange= {this.handleChange}></input></td>  
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
