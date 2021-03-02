import React, {Component} from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'

class Graph extends Component {
	render() {
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
					{ x: 2021, y: 11532.00 },
					{ x: 2022, y: 12289.49 },
					{ x: 2023, y: 14652.40 },
					{ x: 2024, y: 16089.65 },
					{ x: 2025, y: 16786.33 },
					{ x: 2026, y: 20501.64 },
					{ x: 2027, y: 26464.97 },
					{ x: 2028, y: 29953.73 },
					{ x: 2029, y: 36323.80 },
					{ x: 2030, y: 40275.31 },
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