import React from 'react'
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'

const DateLineChart = ({ startDate, data }) => {
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

	// @ts-ignore
	const chartRef = React.useRef<Line | null>(null)

	const focusOnGreatestIndex = () => {
		if (data == null) return

		const greatestIndex = data.lastIndexOf(Math.max(...data))
		const chart = chartRef.current
		if (data[greatestIndex] !== 0) {
			chart?.tooltip?.setActiveElements([{ datasetIndex: 0, index: greatestIndex }], { x: 0, y: 0 })
		}
	}

	React.useEffect(() => {
		focusOnGreatestIndex()
	}, [])

	return (
		<LineChart
			ref={chartRef}
			onMouseOut={() => focusOnGreatestIndex()}
			data={{
				labels: [
					...Array.from({ length: data.length }, (_, i) => {
						let day = new Date(startDate).setDate(new Date(startDate).getDate() + i + 1)
						return new Date(day).getDate() + '일'
					}),
				],

				datasets: [
					{
						backgroundColor: '#1cb15a',
						borderColor: '#1cb15a',
						data: data,
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

export default DateLineChart
