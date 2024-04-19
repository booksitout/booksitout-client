import { Card } from 'react-bootstrap'
import CardBodyContainer from '../../../common/styles/CardBodyContainer'
import CardTitle from '../../../common/styles/CardTitle'
import logo from '../../../images/logo.png'
import { useTipsList } from '../../community/tips/useTipsList'
import IndexContentContainer from '../IndexContentContainer';
import TipsListRow from '../../community/tips/TipsListRow';
import TipsLIstRowLoading from '../../community/tips/TipsLIstRowLoading'

const IndexTipsCard = () => {
    const [isLoading, tips] = useTipsList(6)

    return (
        <Card>
            <CardBodyContainer>
                <CardTitle
                    icon={<img src={logo} alt="" className="img-fluid rounded me-2 mt-0 mt-md-1" style={{ width: '40px', height: '40px' }} />}
                    title={'책잇아웃의 꿀팁'}
                    subTitle={'책에 관한 여러 유용한 정보를 얻어갈 수 있어요'}
                    url='/community/tips'
                />

                {
                    isLoading ?
                        <>
                            {
                                [1, 2, 3, 4, 5, 6].map((tip, _) => {
                                    return (
                                        <IndexContentContainer>
                                            <TipsLIstRowLoading />
                                        </IndexContentContainer>
                                    )
                                })
                            }
                        </>
                        :
                        Array.isArray(tips) && tips.map((tip) => {
                            return (
                                <IndexContentContainer href={`/community/tips/${tip.id}`}>
                                    <TipsListRow tip={tip} />
                                </IndexContentContainer>
                            )
                        })
                }
            </CardBodyContainer>
        </Card>
    )
}

export default IndexTipsCard