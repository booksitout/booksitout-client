import { useEffect } from "react"
import { RouteButtonGroupType } from "../../../common/RouteTitle/RouteButtonGroupType"
import RouteContainer from "../../../common/styles/RouteContainer"
import RouteTitle from "../../../common/RouteTitle/RouteTitle"
import booksitoutIcon from "../../../config/booksitoutIcon"
import RouteTitleConfig from "../../../config/RouteTitleConfig"

const CommunityPopularBooksRoute = () => {
    useEffect(() => {
        document.title = '꿀팁 | 책잇아웃'
    }, [])

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.community />}
                title={'인기책'}
                subTitle={'지금 책잇아웃에서 인기 있는 책이나 '}
                currentKey={'popular'}
                buttons={RouteTitleConfig.Community}
                rightUi={undefined}
            />
        </RouteContainer>
    )
}

export default CommunityPopularBooksRoute