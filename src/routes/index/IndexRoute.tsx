import RouteContainer from '../../common/styles/RouteContainer';
import IndexPreReleaseCard from './card/IndexPreReleaseCard';
import IndexSearchBar from './card/IndexSearchBar';
import IndexBookCard from './card/IndexBookCard';
import IndexTipsCard from './card/IndexTipsCard';
import IndexLibraryCard from './card/IndexLibraryCard';
import IndexSummaryCard from './card/IndexSummaryCard';
import RowSpacer from '../../common/styles/RowSpacer';

const IndexRoute = () => {
    return (
        <RouteContainer>
            <RowSpacer size={10} />
            
            <IndexPreReleaseCard />
            <RowSpacer size={20} />

            <IndexSearchBar />
            <RowSpacer size={60} />

            <IndexSummaryCard />
            <RowSpacer size={20}/>

            <IndexBookCard />
            <RowSpacer size={20} />

            <IndexTipsCard />
            <RowSpacer size={20} />

            <IndexLibraryCard />
            <RowSpacer size={20} />
        </RouteContainer>
    )
}

export default IndexRoute