import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import toast from 'react-hot-toast'
import user from '../user/user'
import messages from './messages'

const EditNameModal = ({ show, setShow }) => {
	const [newName, setNewName] = React.useState<string>('')

	const handleChangeName = (e) => {
		e.preventDefault()

		if (newName === '') {
			toast.error('새로운 이름을 입력해 주세요')
			return
		}

		user.change.name(newName).then((success) => {
			if (success) {
				toast.success(`이름을 ${newName}으로 변경했어요`)
				setShow(false)
				user.localStorage.update.name(newName)
				setNewName('')
			} else {
				toast.error(messages.error)
			}
		})
	}

	return (
		<Modal show={show} onHide={() => setShow(false)} fullscreen='md-down' centered backdrop='static'>
			<Modal.Header className='text-center' closeButton>
				<h4 className='w-100'>이름 변경하기</h4>
			</Modal.Header>

			<Modal.Body>
				<Form onSubmit={(e) => handleChangeName(e)}>
					<Form.Control placeholder='변경할 이름을 입력해 주세요' onChange={(e) => setNewName(e.target.value)} autoFocus />

					<div className='row'>
						<div className='col-12 col-md-6'>
							<Button variant='book-danger' className='mt-3 w-100' onClick={() => setShow(false)}>
								취소
							</Button>
						</div>

						<div className='col-12 col-md-6'>
							<Button type='submit' variant='book' className='mt-3 w-100'>
								변경하기
							</Button>
						</div>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	)
}

export default EditNameModal
