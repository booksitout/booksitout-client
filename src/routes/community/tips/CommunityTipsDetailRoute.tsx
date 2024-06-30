import React from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import parse from 'html-react-parser'
import styled from 'styled-components';
import Loading from "../../../common/Loading"
import TipsTimeIcon from "./TipsTimeIcon"
import useTips from "./useTips"
import CardBodyContainer from "../../../common/styles/CardBodyContainer";
import RowSpacer from "../../../common/styles/RowSpacer";
import RouteTitle from "../../../common/RouteTitle/RouteTitle";
import booksitoutIcon from "../../../config/BooksitoutIcon";
import RouteTitleConfig from "../../../config/RouteTitleConfig";
import RouteContainer from "../../../common/styles/RouteContainer";

const CommunityTipsDetailRoute = () => {
    const { tipsId } = useParams()

    const [tip, isLoading] = useTips(Number(tipsId) ?? 0)

    if (isLoading) return <Loading size={0} message={""} />

    return (
        <TipsDetailContainer>
            <RouteTitle
                icon={<booksitoutIcon.community />}
                title={'커뮤니티'}
                subTitle={'책에 관한 다양한 소식과 사람들을 알아갈 수 있어요'}
                currentKey={'tips'}
                buttons={RouteTitleConfig.Community}
                rightUi={undefined}
            />

            <RowSpacer />
            <CardBodyContainer>
                <Card style={{ minHeight: '200px' }} className='mb-4'>
                    <TitleContainer>
                        <div className='row'>
                            <div className='col-12 col-md-10 mb-2'>
                                <ImageContainer>
                                    <Image src={tip?.displayImageUrl} alt='' />
                                </ImageContainer>

                                <h2 className="mt-5">{tip?.title}</h2>
                            </div>

                            <div className='col-12 col-md-2 pt-2'>
                                <TipsTimeIcon time={tip?.estimatedReadTime} size='h4' />

                                <h6 className='text-end text-secondary'>{`
                                ${tip?.createdDate?.split('-')[0].slice(2)}년 
                                ${tip?.createdDate?.split('-')[1]}월`}</h6>
                            </div>
                        </div>

                        <p className='text-secondary'>{tip?.summary}</p>
                    </TitleContainer>
                </Card>

                <hr />

                <Card style={{ minHeight: '500px' }} className="mb-5">
                    <ContentContainer>
                        <p>{parse(tip?.content ?? '')}</p>
                    </ContentContainer>
                </Card>
            </CardBodyContainer>
        </TipsDetailContainer>
    )
}

const TipsDetailContainer = styled(RouteContainer).attrs({
})`
	b {
		background-color: #ECECEA;
		color: #CE5858;
		padding: 2.5px;
	}

	.title {
		margin-top: 20px;
		text-align: center;
	}

	.content {
	}

	hr {
		margin-bottom: 50px;
	}
`;

const TitleContainer = styled(Card.Body)`
	padding-top: 50px;
	padding-left: 100px;
	padding-right: 100px;

	font-family: 'Nanum Gothic', sans-serif;
`;

const ContentContainer = styled(Card.Body)`
	padding-top: 50px;
	padding-left: 100px;
	padding-right: 100px;

	font-size: 1.1rem;
	font-family: 'Nanum Gothic', sans-serif;
`;

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

export default CommunityTipsDetailRoute