import RouteContainer from '../../../common/styles/RouteContainer'
import RowSpacer from '../../../common/styles/RowSpacer'
import LibraryLocationSummaryCard from './LibraryLocationSummaryCard'
import LibraryRegionListCard from './LibraryRegionListCard'
import { useParams } from 'react-router-dom'
import useLibraryByRegion from '../useLibraryByRegion'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import RouteTitleConfig from '../../../config/RouteTitleConfig'

const LibraryRegionRoute = () => {
    const { region, regionDetail } = useParams()
    const [libraries, isLoading] = useLibraryByRegion(regionDetail ?? region ?? '')

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.library />}
                title={'도서관'}
                subTitle={''}
                currentKey={'library-region'}
                buttons={RouteTitleConfig.Library}
            />

            <RowSpacer />
            <LibraryLocationSummaryCard regionName={regionDetail ?? region ?? ''} libraryCount={libraries.length} />

            <RowSpacer />
            <LibraryRegionListCard libraries={libraries} />

            <RowSpacer />
        </RouteContainer>
    )
}

export default LibraryRegionRoute