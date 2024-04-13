import React from 'react'
import { useParams } from 'react-router-dom'
import privacyData from './privacyData'
import parser from 'html-react-parser'
import NoContent from '../../common/NoContent';
import RouteTitle from '../../common/RouteTitle/RouteTitle';
import booksitoutIcon from '../../config/booksitoutIcon'
import RouteContainer from '../../common/styles/RouteContainer'
import { Card } from 'react-bootstrap';
import CardBodyContainer from '../../common/styles/CardBodyContainer';
import RowSpacer from '../../common/styles/RowSpacer';

const PrivacyByDate = () => {
    const { date } = useParams()

    const [content, setContent] = React.useState<string>('')

    React.useEffect(() => {
        if (date == null) return

        setContent(privacyData.get(date) ?? '')
    }, [date])


    if (content === '') return <NoContent message='해당 날짜의 약관이 없어요'/>

    return (
		<RouteContainer>
            <RouteTitle icon={<booksitoutIcon.privacy />} title={`${date?.split("-")[0]}년 ${date?.split("-")[1]}월 ${date?.split("-")[1]}일부터 시행되는 개인정보처리방침`}/>
            <RowSpacer />
            
            <Card>
                <CardBodyContainer>
                    {parser(content)}
                </CardBodyContainer>
            </Card>

            <RowSpacer />
		</RouteContainer>
	)
}

export default PrivacyByDate