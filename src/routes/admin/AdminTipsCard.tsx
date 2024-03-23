import styled from 'styled-components';
import { BiTime as TimeIcon } from 'react-icons/bi'
import TipsResponse from '../community/tips/TipsResponse';

interface Props {
    tip: TipsResponse
	isAdmin: boolean
}

const AdminTipsCard: React.FC<Props> = ({ tip, isAdmin = false }) => {
    return(
		<a href={`${isAdmin ? `/admin/tips/${tip.id}` : `/tips/detail/${tip.id}`}`} className='mb-3 col-12 col-md-6 col-lg-4'>
            <List>
                <ImageContainer>
                    <Image src={tip.displayImageUrl} alt='' />
                </ImageContainer>

                <div className='text-book mt-3'>
                    <TimeIcon className='mb-1' /> {tip.type.displayName}
                </div>

                <Title>{tip.title}</Title>
            </List>
    </a>
)
}

const List = styled.li.attrs({
	className: 'border p-3 rounded'
})`
	display: flex;
	flex-direction: column;
	padding-right: 0px;
`;

const Title = styled.h5.attrs({
	className: 'clamp-1-line'
})``;

const ImageContainer = styled.div`
	width: 100%; 
	height: 0; 
	padding-top: 56.25%; 
	position: relative; 
`;

const Image = styled.img.attrs({
	className: 'img-fluid rounded'
})`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
`;

export default AdminTipsCard