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
import useBookGoalsAll from './useBookGoals';
import { booksitoutServer } from '../../../config/booksitoutServer';
import toast from 'react-hot-toast';

const BookGoalRoute = () => {
    const [goals, isLoading] = useBookGoalsAll()

    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

    const onAdd = (year: number) => {
        setIsAddModalOpen(true)
        setSelectedYear(year)
    }

    const onDelete = (year: number) => {
        if (!window.confirm(`${year}년도 목표를 삭제할까요?`)) {
            return
        }

        booksitoutServer
            .delete(`/v1/book/goals/${year}`)
            .then(() => toast.success('목표가 삭제되었습니다.'))
            .catch(() => toast.error('오류가 발생했어요. 잠시 후 다시 시도해 주세요.'))
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
                                        state={goals.find(g => g.year === year) === undefined ? 'ADD' : 'DELETE'}
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