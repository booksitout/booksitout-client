import { useEffect, useState } from 'react'
import RouteContainer from '../common/RouteContainer'
import { Card } from 'react-bootstrap'
import CardTitle from '../common/CardTitle'
import styled from 'styled-components';
import { booksitoutServer } from '../../config/axios';
import TipsType from '../../types/TipsType';
import TipsCard from '../community/tips/TipsCard';

const AdminRoute = () => {
    const [tipPost, setTipPost] = useState<TipsType[] | null>(null)
	useEffect(() => {
		booksitoutServer
			.get(`/v4/forum/tips?type=all&size=100`)
			.then(res => setTipPost(res.data.content))
    }, [])

    return (
        <RouteContainer>
            <CardTips>
                <Card.Body>
                    <CardTitle icon={undefined} title={'책잇아웃의 꿀팁 편집'} />

                    <div className="row">
							{
                                tipPost == null ?
                                <></>
                                :
                                        tipPost.map((tip) => {
                                            return (
                                                <TipsCard tip={tip} isAdmin={true} />
                                            )
                                        })
                        }
						</div>

                </Card.Body>
            </CardTips>
        </RouteContainer>
    )
}

const CardTips = styled(Card)`
    min-height: 1000px;
`;

export default AdminRoute