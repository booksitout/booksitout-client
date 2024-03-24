import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { BsGeoAltFill as LocationIcon, BsBrowserChrome as HomePageIcon, BsBookHalf as BookIcon, BsAlarmFill as TimeIcon } from 'react-icons/bs'
import { GiPhone as PhoneIcon } from 'react-icons/gi'
import toast from 'react-hot-toast'
import { useEffect, useRef } from 'react'
import useLibrary from '../useLibrary'
import RouteContainer from '../../../common/styles/RouteContainer'
import utils from '../../../common/utils'
import CardBodyContainer from '../../../common/styles/CardBodyContainer'
import RowSpacer from '../../../common/styles/RowSpacer'
import breakpoints from '../../../config/breakpoints';
import RouteTitle from '../../../common/RouteTitle/RouteTitle';
import booksitoutIcon from '../../../config/booksitoutIcon';
import RouteTitleConfig from '../../../config/RouteTitleConfig';

const LibraryDetailRoute = () => {
	const { libraryId } = useParams()
	const library = useLibrary(parseInt(libraryId ?? ''))
	const mapElement = useRef(null)

	useEffect(() => {
		document.title = `${library?.name ?? '도서관'} | 책잇아웃`

		if (library != null) {
			const { naver } = window
			if (!mapElement.current || !naver) return

			const location = new naver.maps.LatLng(library.location.latitude, library.location.longitude)
			const mapOptions: naver.maps.MapOptions = {
				center: location,
				zoom: 16,
				zoomControl: true,
				zoomControlOptions: { position: naver.maps.Position.TOP_RIGHT },
			}

			const map = new naver.maps.Map(mapElement.current, mapOptions)
			new naver.maps.Marker({ position: location, map })
		}
	}, [library])

	const copyText = (text: string) => {
		var tempTextarea = document.createElement('textarea')
		tempTextarea.value = text
		document.body.appendChild(tempTextarea)

		tempTextarea.select()
		document.execCommand('copy')

		document.body.removeChild(tempTextarea)

		toast.success('주소를 복사했어요')
	}

	if (library == null) return <></>

	return (
		<RouteContainer>
			<RouteTitle
				icon={<booksitoutIcon.library />}
				title={'도서관 찾기'}
				subTitle={'여러 조건으로 도서관을 찾을 수 있어요'}
				currentKey={'library'}
				buttons={RouteTitleConfig.Library}
			/>

			<RowSpacer />

			<Card>
				<CardBodyContainer>
					<TitleContainer>
						<h2 className='p-3'>{library.name}</h2>

						<RegionContainer>
							<CardBodyContainer height={80}>
								<a
									href={`/library/by-region/${library.location.name.regionEnglishName.toLowerCase()}/${library.location.name.regionDetailEnglishName.toLowerCase()}`}
									className="d-flex align-items-center"
								>
									<img
										src={library.location.logo}
										alt=""
										style={{ height: '40px' }}
										className="rounded"
									/>
									<h5 className="ms-2 w-100 text-center mb-0">
										{library.location.name.displayName}
									</h5>
								</a>
							</CardBodyContainer>
						</RegionContainer>
					</TitleContainer>

					<InfoContainer>
						<LibraryTextWithIcon
							icon={<LocationIcon />}
							text={
								<div onClick={() => copyText(library.location.address)} className="clickable hover-primary clamp-1-line">
									{library.location.address}
								</div>
							}
						/>

						<LibraryTextWithIcon
							icon={<PhoneIcon />}
							text={
								<a href={`tel:${library.phone}`} className="a-secondary">
									{library.phone}
								</a>
							}
						/>

						<LibraryTextWithIcon
							icon={<HomePageIcon />}
							text={
								<a href={library.homepage} target="_blank" rel="noreferrer" className="a-secondary">
									{library.homepage?.substring(library.homepage.indexOf('://') + 3)}
								</a>
							}
						/>

						<LibraryTextWithIcon
							icon={<BookIcon />}
							text={`${utils.insertCommas(library.bookCount)} 권` ?? '?'}
						/>

						<LibraryTextWithIcon icon={<TimeIcon />} text={`휴무) ${library.openDay}`} />
					</InfoContainer>

					<RowSpacer />

					<Map ref={mapElement} />
				</CardBodyContainer>
			</Card>
		</RouteContainer>
	)
}

const LibraryTextWithIcon = ({ icon, text }) => {
	return (
		<div className='d-flex'>
			<h5 className='text-book me-2'>{icon}</h5>
			<h6 className='text-secondary pt-1 clamp-1-line'>{text}</h6>
		</div>
	)
}

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
    }
`;

const InfoContainer = styled.div.attrs({
	className: 'ms-md-5'
})`
`;

const RegionContainer = styled(Card).attrs({
	className: 'm-3'
})`
    width: 200px;
    height: 80px;
`;

const Map = styled.div.attrs({
	className: 'rounded-'
})`
    width: 100%;
    height: 400px;
    z-index: 1;
`;

export default LibraryDetailRoute