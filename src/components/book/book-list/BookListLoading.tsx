import HorizontalBookViewDoneLoading from './HorizontalBookViewDoneLoading'
import HorizontalBookViewLoading from './HorizontalBookViewLoading'
import styled from 'styled-components';

const BookListLoading = ({ range, mt = true }) => {
    return (
		<div className="row">
			{
				range === 'done' && mt && <MarginTop />
			}

			{Array.from({ length: 12 }).map(() => {
				return (
					<div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4">
						{range === 'done' ? <HorizontalBookViewDoneLoading /> : <HorizontalBookViewLoading />}
					</div>
				)
			})}
		</div>
	)
}

const MarginTop = styled.div`
	margin-top: 57.5px;
`;

export default BookListLoading