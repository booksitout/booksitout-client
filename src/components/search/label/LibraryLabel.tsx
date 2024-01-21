import search from '../../../functions/search'

const LibraryLabel = ({locationName}) => {

	if (locationName !== null && locationName !== undefined) {
		return (
			<div className='text-secondary'>
				{locationName}
			</div>
		)
	}

	return (
		<div className='text-secondary'>
			{search.local.settings.library.isConfigured() &&
				`${search.local.settings.library.display.region()} ${search.local.settings.library.display.regionDetail()}`}
		</div>
	)
}

export default LibraryLabel
