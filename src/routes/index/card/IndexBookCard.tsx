import styled from 'styled-components';
import { Card } from 'react-bootstrap'
import CardTitle from '../../../common/styles/CardTitle';
import booksitoutIcon from '../../../config/BooksitoutIcon';
import CardBodyContainer from '../../../common/styles/CardBodyContainer';
import NoContent from '../../../common/NoContent';

const IndexBookCard = () => {
    return (
        <Card>
            <CardBodyContainer>
                <CardTitle 
                    icon={<booksitoutIcon.book />} 
                    title={'서재 구경하기'} 
                    subTitle={'다른 사람의 서재를 구경할 수 있어요'}
                    url='/book'
                />

                <NoContent message={'유저들의 서재가 없어요'} />
            </CardBodyContainer>
        </Card>
    )
}

export default IndexBookCard