import { useEffect } from 'react'
import styled from 'styled-components';
import RouteContainer from '../../../common/styles/RouteContainer'
import { RouteButtonGroupType } from '../../../common/RouteTitle/RouteButtonGroupType'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import useLoginStore from '../../login/useLoginStore';
import RouteTitleConfig from '../../../config/RouteTitleConfig';

const BookMineRoute = () => {
    useEffect(() => {
        document.title = '내 서재 | 책잇아웃'
    }, [])

    const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

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
            {
                isLoggedIn
                    ?
                    <YesLoggedInCase />
                    :
                    <NoLoggedInCase />
            }
        </RouteContainer>
    )
}

const YesLoggedInCase = () => {
    return (
        <></>
    )
}

const NoLoggedInCase = () => {
    return (
        <></>
    )
}

export default BookMineRoute