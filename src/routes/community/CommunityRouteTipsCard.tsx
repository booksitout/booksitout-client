import { Card } from 'react-bootstrap'
import CardBodyContentContainer from '../../common/styles/CardBodyContentContainer'
import CardTitle from '../../common/styles/CardTitle'
import IndexContentContainer from '../index/IndexContentContainer';
import { useTipsList } from './tips/useTipsList';
import TipsListRow from './tips/TipsListRow';
import TipsLIstRowLoading from './tips/TipsLIstRowLoading';
import BooksitoutLogo from '../../common/BooksitoutLogo';

const CommunityRouteTipsCard = () => {
    const [isLoading, tips] = useTipsList(6)

    return (
        <Card>
            <CardBodyContentContainer height={600}>
                <CardTitle
                    icon={<BooksitoutLogo />}
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
            </CardBodyContentContainer>
        </Card>
    )
}

export default CommunityRouteTipsCard