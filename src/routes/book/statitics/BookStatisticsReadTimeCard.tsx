import { Card } from 'react-bootstrap'
import CardTitle from '../../../common/styles/CardTitle'
import DateLineChart from './DateLineChart'
import DateLineChartLoading from './DateLineChartLoading'
import useBookStatisticsReadTime from './useBookStatisticsReadTime'

const BookStatisticsReadTimeCard = () => {
    const [readTimeList, isLoading] = useBookStatisticsReadTime(30)

    return (
        <Card>
            <Card.Body>
                <CardTitle icon={<></>} title={'최근 30일 독서시간'} url={''} />

                {
                    isLoading ?
                        <DateLineChartLoading
                            startDate={new Date().setDate(new Date().getDate() - 30)}
                            duration={30}
                        />
                        :
                        <DateLineChart
                            startDate={new Date().setDate(new Date().getDate() - 30)}
                            data={readTimeList}
                        />
                }
            </Card.Body>
        </Card>
    )
}

export default BookStatisticsReadTimeCard