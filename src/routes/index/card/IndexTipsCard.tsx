import { Card } from 'react-bootstrap'
import CardBodyContainer from '../../../common/styles/CardBodyContainer'
import CardTitle from '../../../common/styles/CardTitle'
import logo from '../../../images/logo.png'

const IndexTipsCard = () => {
    return (
        <Card>
            <CardBodyContainer>
                <CardTitle 
                    icon={<img src={logo} alt="" className="img-fluid rounded me-2 mt-0 mt-md-1" style={{ width: '40px', height: '40px' }}/>} 
                    title={'책잇아웃의 꿀팁'} 
                    subTitle={'책에 관한 여러 유용한 정보를 얻어갈 수 있어요'} 
                />
            </CardBodyContainer>
        </Card>
    )
}

export default IndexTipsCard