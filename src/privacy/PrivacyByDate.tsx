import React from 'react'
import { useParams } from 'react-router-dom'
import privacyData from './privacyData'
import NoContent from '../common/NoContent'
import RouteTitle from '../common/RouteTitle'
import booksitoutIcon from '../common/icons/booksitoutIcon';
import parser from 'html-react-parser'
import { Container } from 'react-bootstrap'

const PrivacyByDate = () => {
    const { date } = useParams()

    const [content, setContent] = React.useState<string>('')

    React.useEffect(() => {
        if (date == null) return

        setContent(privacyData.get(date) ?? '')
    }, [date])


    if (content === '') return <NoContent move={0} mt={100} message='해당 날짜의 약관이 없어요'/>

    return (
		<Container>
			<RouteTitle icon={<booksitoutIcon.privacy />} title={'개인정보처리방침'} />

			{parser(content)}
		</Container>
	)
}

export default PrivacyByDate