import { useEffect, useState } from 'react'
import RouteContainer from '../../../common/styles/RouteContainer'
import booksitoutIcon from '../../../config/booksitoutIcon'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import { useNavigate, useParams } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import NoContent from '../../../common/NoContent'
import LibraryCard from '../find/LibraryCard'
import LibraryCardLoading from '../find/LibraryCardLoading'
import useCurrentLocation from '../useCurrentLocation'
import useLibraryNear from '../useLibraryNear'
import ReloadButton from '../../../common/styles/ReloadButton'
import { RouteButtonGroupType } from '../../../common/RouteTitle/RouteButtonGroupType'
import RowSpacer from '../../../common/styles/RowSpacer'
import RouteTitleConfig from '../../../config/RouteTitleConfig'

const LibraryNearRoute = () => {
	const { range } = useParams()
	const [currentRange, setCurrentRange] = useState<number>(Number(range ?? 3))

	const [lat, long, locationName, locationError, refreshLocation] = useCurrentLocation()
	const [libraries, isLoading] = useLibraryNear(lat, long, currentRange, true)

	useEffect(() => {
		document.title = '주변 도서관 | 책잇아웃'
	}, [])

	return (
		<RouteContainer>
			<RouteTitle
				icon={<booksitoutIcon.location />}
				title={'내 주변 도서관'}
				subTitle={locationName ?? '위치 알 수 없음'}
				currentKey={'library-near'}
				buttons={RouteTitleConfig.Library}
				rightUi={
					<>
						<DistanceSelect currentRange={currentRange} setCurrentRange={setCurrentRange} />
						<ReloadButton onClick={refreshLocation} top={30} />
					</>
				}
			/>

			<RowSpacer size={10} />
			{locationError ? (
				<></>
			) :  isLoading ? (
				Array.from({ length: 6 }).map(() => <LibraryCardLoading />)
			) : libraries.length === 0 ? (
				<NoContent message={`${currentRange}km 내에 도서관이 없어요`} />
			) : (
				libraries.map(library => <LibraryCard library={library} />)
			)}
		</RouteContainer>
	)
}

const DistanceSelect = ({ currentRange, setCurrentRange }) => {
	const navigate = useNavigate()

	return (
		<Form className='pe-md-5 me-md-3'>
			<Form.Select
				onChange={e => {
					navigate(`/library/near?range=${e.target.value}`)
					setCurrentRange(Number(e.target.value))
				}}
			>
				{[1, 2, 3, 4, 5].map(r => {
					return (
						<option selected={r === currentRange} value={r}>
							{r}km 근처까지
						</option>
					)
				})}
			</Form.Select>
		</Form>
	)
}

export default LibraryNearRoute