import { Card } from 'react-bootstrap'
import CardBodyBackgroundContainer from '../../common/styles/CardBodyBackgroundContainer'
import logo from '../../images/logo.png'
import CardTitle from '../../common/styles/CardTitle'
import IndexContentContainer from '../index/IndexContentContainer';
import { useTipsList } from './tips/useTipsList';
import TipsListRow from './tips/TipsListRow';
import TipsLIstRowLoading from './tips/TipsLIstRowLoading';

const CommunityRouteTipsCard = () => {
    const [isLoading, tips] = useTipsList(6)

    return (
        <Card>
            <CardBodyBackgroundContainer height={600}>
                <CardTitle
                    icon={<img src={logo} alt="" className="img-fluid rounded" style={{ width: '35px', height: '35px' }} />}
                    title='책잇아웃의 꿀팁'
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
            </CardBodyBackgroundContainer>
        </Card>
    )
}

export default CommunityRouteTipsCard