import React from 'react'
import LibraryNearCard from '../library/near/LibraryNearCard'

const MainNearLibraryCard = () => {
	return (
		<div className='h-100' style={{ minHeight: '525px' }}>
			<LibraryNearCard moreButton={true} size={8} mt={3} />
		</div>
	)
}

export default MainNearLibraryCard