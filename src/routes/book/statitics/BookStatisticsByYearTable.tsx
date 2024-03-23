import { Card } from 'react-bootstrap'
import CardTitle from '../../../common/styles/CardTitle'
import BookStatisticsTable from './BookStatisticsTable'

const BookStatisticsByYearTable = () => {
    const currentYear = new Date().getFullYear()

    return (
        <Card className='h-100' style={{ minHeight: '360px' }}>
            <Card.Body className='h-100'>
                <a href='/statistics' className='text-decoration-none text-black h-100'>
                    <CardTitle icon={<></>} title={`${currentYear}년 독서 요약`} iconSize={2} url={''} />

                    <div className='h-100 '>
                        <div className='d-flex align-items-center' style={{ marginBottom: '10px' }}>
                            <BookStatisticsTable year={currentYear} />
                        </div>
                    </div>
                </a>
            </Card.Body>
        </Card>
    )
}

export default BookStatisticsByYearTable
