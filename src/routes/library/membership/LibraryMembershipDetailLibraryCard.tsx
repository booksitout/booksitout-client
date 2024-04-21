import React from 'react'
import { Card, Modal } from 'react-bootstrap'
import { ImLibrary as LibraryIcon } from 'react-icons/im'
import NoContent from '../../../common/NoContent'
import CardBodyBackgroundContainer from '../../../common/styles/CardBodyBackgroundContainer'
import CardTitle from '../../../common/styles/CardTitle'
import booksitoutIcon from '../../../config/booksitoutIcon';
import LibraryTextWithIcon from '../find/LibraryTextWithIcon'
import utils from '../../../common/utils'
import LibraryCard from '../find/LibraryCard'
import AllButton from '../../../common/button/AllButton'

const LibraryMembershipDetailLibraryCard = ({ libraryList }) => {
	const [modalOpen, setModalOpen] = React.useState<boolean>(false)
	const openModal = () => {
		setModalOpen(true)
	}

	return (
		<Card style={{ minHeight: '450px' }}>
			<LibraryMembershipDetailModal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				libraryList={libraryList}
			/>

			<CardBodyBackgroundContainer>
				<CardTitle 
					icon={<LibraryIcon />} 
					title={`사용할 수 있는 도서관 (${libraryList.length}곳)`} 
					subTitle={undefined} 
					textSize={2} 
					url={''} 
				/>

				{libraryList.length === 0 ? (
					<NoContent message='아직 추가중이에요' />
				) : (
					<div className='row'>
						{libraryList.slice(0, 12).map((library) => {
							return (
								<div className='col-12 col-sm-6 col-md-4'>
									<LibraryMembershipDetailLibraryCardCard library={library} />
								</div>
							)
						})}
					</div>
				)}

				{libraryList.length > 6 && <AllButton url='' onClick={openModal} />}
			</CardBodyBackgroundContainer>
		</Card>
	)
}

const LibraryMembershipDetailLibraryCardCard = ({ library }) => {
	return (
		<a href={`/library/${library.id}`}>
			<Card className='mb-3' style={{ minHeight: '125px' }}>
				<CardBodyBackgroundContainer>
					<div className='row'>
						<div className={library.location.distance !== 0 ? 'col-8' : 'col-12'}>
							<h4 className='clamp-1-line'>{library.name}</h4>
						</div>

						{library.location.distance !== 0 && (
							<div className='col-4'>
								<h5 className='text-end text-secondary'>{library.location.distance?.toFixed(2) ?? '-'} km</h5>
							</div>
						)}
					</div>

					<div className='ms-4'>
						<LibraryTextWithIcon icon={<booksitoutIcon.location />} text={library.location.address} />
						<LibraryTextWithIcon icon={<booksitoutIcon.book />} text={`${library.bookCount === 0 ? '?' : utils.insertCommas(library.bookCount)} 권` ?? '?'} />
					</div>
				</CardBodyBackgroundContainer>
			</Card>
		</a>
	)
}

const LibraryMembershipDetailModal = ({ modalOpen, setModalOpen, libraryList }) => {
	return (
		<Modal show={modalOpen} onHide={() => setModalOpen(false)} fullscreen='md-down' size='xl' centered className='pt-5'>
			<Modal.Header closeButton>
				<div className='d-flex flex-wrap align-items-center'>
					<h1 className='me-2 text-book h2'>
						<LibraryIcon />
					</h1>

					<div className='h3 m-0'>사용할 수 있는 도서관</div>
				</div>
			</Modal.Header>

			<Modal.Body style={{ minHeight: '500px' }}>
				<div className='row'>
					{libraryList.map((library) => {
						return (
							<div className='col-12 col-sm-6'>
								<LibraryCard library={library} />
							</div>
						)
					})}
				</div>
			</Modal.Body>
		</Modal>
	)
}

export default LibraryMembershipDetailLibraryCard