import { Card } from "react-bootstrap"
import logo from '../../images/logo.png'
import RouteContainer from "../../common/styles/RouteContainer"
import CardTitle from "../../common/styles/CardTitle"
import RowSpacer from "../../common/styles/RowSpacer"
import booksitoutIcon from '../../config/booksitoutIcon';
import RouteTitle from "../../common/RouteTitle/RouteTitle"
import { useEffect } from "react"
import { RouteButtonGroupType } from "../../common/RouteTitle/RouteButtonGroupType"
import CardBodyBackgroundContainer from "../../common/styles/CardBodyBackgroundContainer"

const CommunityRoute = () => {

    useEffect(() => {
        document.title = '커뮤니티 | 책잇아웃'
    }, [])

    const buttons: RouteButtonGroupType[] = [
        {
            url: '/community/tips?range=all',
			key: 'tips',
			label: '책잇아웃의 꿀팁'
        },
        {
            url: '/community/popular-book',
            key: 'popular',
            label: '인기 책'
        },
	]

    return (
        <RouteContainer>
            <RouteTitle 
				icon={<booksitoutIcon.community />} 
				title={'커뮤니티'} 
				subTitle={'책에 관한 다양한 소식과 사람들을 알아갈 수 있어요'} 
				currentKey={'summary'} 
				buttons={buttons} 
				rightUi={undefined} 
			/>

            <RowSpacer />
            <Card>
                <CardBodyBackgroundContainer height={600}>
                    <CardTitle 
                        icon={<img src={logo} alt="" className="img-fluid rounded" style={{ width: '35px', height: '35px' }} />} 
                        title='책잇아웃의 꿀팁' 
                        url='/community/tips' 
                    />
                </CardBodyBackgroundContainer>
            </Card>

            <RowSpacer />
            <Card>
                <CardBodyBackgroundContainer height={600}>
                    <CardTitle 
                        icon={<booksitoutIcon.popular />} 
                        title='인기책' 
                        url='/community/tips' 
                    />
                </CardBodyBackgroundContainer>
            </Card>

            <RowSpacer />
        </RouteContainer>
    )
}

export default CommunityRoute