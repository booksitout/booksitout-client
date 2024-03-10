import React from 'react'
import { Card } from 'react-bootstrap'
import CardBodyContainer from '../../../common/styles/CardBodyContainer'
import CardTitle from '../../../common/styles/CardTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'

const IndexLibraryCard = () => {
    return (
        <Card>
            <CardBodyContainer>
                <CardTitle 
                    icon={<booksitoutIcon.library/>} 
                    title={'내 근처 도서관'} 
                    subTitle={'내 주변 도서관을 간단히 찾을 수 있어요'}
                />
            </CardBodyContainer>
        </Card>
    )
}

export default IndexLibraryCard