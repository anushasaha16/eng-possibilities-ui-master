import React, {Component} from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'

class Graph extends Component {
	render() {
		var forecast = this.props.data
		
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Value of Investments"
			},
			axisY: {
				title: "Value ($)",
				suffix: "",
				valueFormatString: "##,###.##",
			},
			axisX: {
				title: "Year",
				prefix: "",
                interval: 1,
				valueFormatString: "####",
			},
			data: [{
				type: "line",
				toolTipContent: "Year {x}: ${y}",
				dataPoints: [
					{ x: 2021, y: forecast[0] },
					{ x: 2022, y: forecast[1] },
					{ x: 2023, y: forecast[2] },
					{ x: 2024, y: forecast[3] },
					{ x: 2025, y: forecast[4] },
					{ x: 2026, y: forecast[5] },
					{ x: 2027, y: forecast[6] },
					{ x: 2028, y: forecast[7] },
					{ x: 2029, y: forecast[8] },
					{ x: 2030, y: forecast[9] },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Graph;  
