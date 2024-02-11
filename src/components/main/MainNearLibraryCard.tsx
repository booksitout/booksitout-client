import React from 'react'
import LibraryNearCard from '../library/near/LibraryNearCard'
import AllButton from '../common/AllButton'

const MainNearLibraryCard = () => {
	return (
		<div className='h-100' style={{ minHeight: '525px' }}>
			<a href='/library/membership/all' className='text-black h-100'>
				<LibraryNearCard moreButton={true} size={8} mt={3} />
			</a>
		</div>
	)
}

export default MainNearLibraryCard