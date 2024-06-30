import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components';
import { BooksitoutServer } from '../../config/BooksitoutServer';
import RouteContainer from '../../common/styles/RouteContainer';
import TipsResponse from '../community/tips/TipsResponse';
import CardTitle from '../../common/styles/CardTitle';
import AdminTipsCard from './AdminTipsCard';

const AdminRoute = () => {
    const [tipPost, setTipPost] = useState<TipsResponse[]>([])
	useEffect(() => {
		BooksitoutServer
			.get(`/v1/tips?page=0&size=100`)
			.then(res => setTipPost(res.data.contents))
    }, [])

    return (
        <RouteContainer>
            <CardTips>
                <Card.Body>
                    <CardTitle 
                        icon={undefined}
                        title={'관리자용'} 
                        url={''}                    
                    />

                    <div className="row">
                        {
                            tipPost == null ?
                                <></>
                            :
                            tipPost.map((tip) => {
                                return (
                                    <AdminTipsCard tip={tip} isAdmin={true} />
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