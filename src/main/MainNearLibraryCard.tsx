import React from 'react'
import LibraryNearCard from '../library/near/LibraryNearCard'

const MainNearLibraryCard = () => {
	return (
		<div className='h-100' style={{ minHeight: '525px' }}>
			<a href='/library/membership/all' className='text-black h-100'>
				<LibraryNearCard col='col-12' moreButton={false} size={8} mt={3} />
			</a>
		</div>
	)
}

export default MainNearLibraryCard