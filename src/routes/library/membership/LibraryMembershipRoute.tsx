import { useEffect } from 'react'
import RouteContainer from '../../../common/styles/RouteContainer'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import { RouteButtonGroupType } from '../../../common/RouteTitle/RouteButtonGroupType'

const LibraryMembershipRoute = () => {
    useEffect(() => {
        document.title = '도서관 회원증 | 책잇아웃'
    }, [])
    
    const buttons: RouteButtonGroupType[] = [
        {
            url: '/library',
            key: 'library',
            label: '도서관 찾기',
        },
        {
            url: '/library/membership',
            key: 'membership',
            label: '회원증',
        },
        {
            url: '/library/near',
            key: 'library-near',
            label: '내 주변 도서관',
        },
    ]

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.membership />}
                title={'도서관 회원증'}
                subTitle={'여러 도서관 회원증을 쉽게 관리할 수 있어요'}
                currentKey={'membership'}
                buttons={buttons}
            />
        </RouteContainer>
    )
}

export default LibraryMembershipRoute