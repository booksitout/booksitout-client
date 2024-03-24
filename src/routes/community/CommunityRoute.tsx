import { Card } from "react-bootstrap"
import RouteContainer from "../../common/styles/RouteContainer"
import CardTitle from "../../common/styles/CardTitle"
import RowSpacer from "../../common/styles/RowSpacer"
import booksitoutIcon from '../../config/booksitoutIcon';
import RouteTitle from "../../common/RouteTitle/RouteTitle"
import { useEffect } from "react"
import CardBodyBackgroundContainer from "../../common/styles/CardBodyBackgroundContainer"
import CommunityRouteTipsCard from "./CommunityRouteTipsCard"
import RouteTitleConfig from "../../config/RouteTitleConfig";

const CommunityRoute = () => {

    useEffect(() => {
        document.title = '커뮤니티 | 책잇아웃'
    }, [])

    return (
        <RouteContainer>
            <RouteTitle 
				icon={<booksitoutIcon.community />} 
				title={'커뮤니티'} 
				subTitle={'책에 관한 다양한 소식과 사람들을 알아갈 수 있어요'} 
				currentKey={'community'} 
				buttons={RouteTitleConfig.Community} 
				rightUi={undefined} 
			/>

            <RowSpacer />
            <CommunityRouteTipsCard />

            <RowSpacer />
            <Card>
                <CardBodyBackgroundContainer height={600}>
                    <CardTitle 
                        icon={<booksitoutIcon.popular />} 
                        title='인기책' 
                        url='/community/popular-books' 
                    />
                </CardBodyBackgroundContainer>
            </Card>

            <RowSpacer />
        </RouteContainer>
    )
}

export default CommunityRoute