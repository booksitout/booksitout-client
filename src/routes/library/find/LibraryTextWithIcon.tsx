const LibraryTextWithIcon = ({ icon, text }) => {
	return (
		<div className='d-flex'>
			<h5 className='text-book me-2'>{icon}</h5>
			<h6 className='text-secondary pt-1 clamp-1-line'>{text}</h6>
		</div>
	)
}

export default LibraryTextWithIcon