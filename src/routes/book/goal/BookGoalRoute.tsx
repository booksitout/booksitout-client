import styled from 'styled-components';

import ContentContainer from "../../../common/styles/ContentContainer"
import RouteContainer from "../../../common/styles/RouteContainer"
import RowSpacer from "../../../common/styles/RowSpacer"
import BookGoalCard from "./BookGoalCard"
import RouteTitle from '../../../common/RouteTitle/RouteTitle';
import booksitoutIcon from '../../../config/booksitoutIcon';
import RouteTitleConfig from '../../../config/RouteTitleConfig';
import breakpoints from '../../../config/breakpoints';
import AddDeleteButton from '../../../common/button/AddDeleteButton';
import BookGoalAddModal from './BookGoalAddModal';
import { useState } from 'react';
import BookGoalResponse from './BookGoalResponse';

const BookGoalRoute = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

    const onAdd = (year: number)=> {
        setIsAddModalOpen(true)
        setSelectedYear(year)
    }

    const onDelete = (year: number) => {

    }

    const onHide = (goal: BookGoalResponse | null = null) => {
        setIsAddModalOpen(false)
    } 

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.book />}
                title={'내 서재'}
                subTitle={'내가 등록한 책을 확인하고 관리할 수 있어요'}
                currentKey={'mine'}
                buttons={RouteTitleConfig.Book}
                rightUi={undefined}
            />

            <BookGoalAddModal 
                isOpen={isAddModalOpen} 
                onHide={() => setIsAddModalOpen(false)} 
                year={selectedYear}
            />

            <RowSpacer />
            <Row>
                {
                    Array
                        .from({ length: 5 })
                        .map((_, index) => new Date().getFullYear() - index)
                        .map(year => (
                            <Col key={year}>
                                <TitleContainer>
                                    <YearText>{year}년</YearText>
                                    <AddDeleteButton 
                                        state={'ADD'} 
                                        onAdd={() => onAdd(year)}
                                        onDelete={() => onDelete(year)}
                                    />
                                </TitleContainer>

                                <ContentContainer>
                                    <BookGoalCard year={year} />
                                </ContentContainer>
                            </Col>
                        ))
                }
            </Row>
        </RouteContainer>
    )
}

const Row = styled.div`
    width: 100%;
`;

const Col = styled.div.attrs({
    className: 'col-12 col-xl-4'
})`
    margin-bottom: 50px;
    
    @media screen and (min-width: ${breakpoints.md}){
        max-width: 350px;
    }

    @media screen and (min-width: ${breakpoints.xl}) {
        max-width: 400px;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const YearText = styled.h1`
    font-size: 35px;
`;

export default BookGoalRoute