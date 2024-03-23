import React from 'react'
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'

const DateLineChartLoading = ({ startDate, duration = 1 }) => {
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

	// @ts-ignore
	const chartRef = React.useRef<Line | null>(null)

	return (
		<LineChart
			ref={chartRef}
			data={{
				labels: [
					...Array.from({ length: duration }, (_, i) => {
						let day = new Date(startDate).setDate(new Date(startDate).getDate() + i + 1)
						return new Date(day).getDate() + '일'
					}),
				],

				datasets: [
					{
						backgroundColor: '#aaaaaa',
						borderColor: '#aaaaaa',
						data: Array.from({ length: duration }).map(() => 30),
					},
				],
			}}
		/>
	)
}

const LineChart = styled(Line).attrs({
	options: {
		plugins: { legend: { display: false } },
		scales: { y: { min: 0, suggestedMax: 60 } },
		interaction: {
			mode: 'nearest',
			axis: 'x',
			intersect: false,
		},
	}
})`
	width: 100%;
	height: 600px;
`;

export default DateLineChartLoading
