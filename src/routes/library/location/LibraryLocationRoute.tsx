import RouteContainer from '../../../common/styles/RouteContainer'
import RowSpacer from '../../../common/styles/RowSpacer'
import LibraryLocationSummaryCard from './LibraryLocationSummaryCard'
import LibraryLocationListCard from './LibraryLocationListCard'
import { useParams } from 'react-router-dom'
import useLibraryByRegion from '../useLibraryByRegion'

const LibraryLocationRoute = () => {
    const { region, regionDetail } = useParams()
    const [libraries, isLoading] = useLibraryByRegion(regionDetail ?? region ?? '')

    return (
        <RouteContainer>
            <RowSpacer />
            <LibraryLocationSummaryCard regionName={regionDetail ?? region ?? ''} libraryCount={libraries.length} />

            <RowSpacer />
            <LibraryLocationListCard libraries={libraries} />

            <RowSpacer />
        </RouteContainer>
    )
}

export default LibraryLocationRoute