import { useEffect } from 'react'
import styled from 'styled-components';
import RouteContainer from '../../../common/styles/RouteContainer'
import { RouteButtonGroupType } from '../../../common/RouteTitle/RouteButtonGroupType'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import useLoginStore from '../../login/useLoginStore';

const BookMineRoute = () => {
    useEffect(() => {
        document.title = '내 서재 | 책잇아웃'
    }, [])

    const buttons: RouteButtonGroupType[] = [
        {
            url: '/book',
            key: 'index',
            label: '둘러보기'
        },
        {
            url: '/book/mine',
            key: 'mine',
            label: '내 서재'
        },
        {
            url: '/book/statistics',
            key: 'statistics',
            label: '통계'
        },
    ]

    const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.book />}
                title={'내 서재'}
                subTitle={'내가 등록한 책을 확인하고 관리할 수 있어요'}
                currentKey={'mine'}
                buttons={buttons}
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