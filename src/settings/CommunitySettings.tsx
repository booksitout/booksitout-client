import React from "react"
import { Button, Card, Form } from "react-bootstrap"

import { UserType } from '../community/post/PostType'
import SettingsCard from "./SettingsCard"

import { MdPeopleAlt as ProfileIcon } from 'react-icons/md'
import { BsFillPatchCheckFill as PaidIcon, BsFillImageFill as ImageIcon } from 'react-icons/bs'
import { useDropzone } from "react-dropzone"
import urls from "../settings/urls"
import axios from "axios"
import utils from "../functions/utils"

import Loading from "../common/Loading"
import Error from '../common/Error'
import { toast } from "react-hot-toast"
import RouteContainer from "../common/RouteContainer"
import RouteTitle from "../common/RouteTitle"
import booksitoutIcon from '../common/icons/booksitoutIcon';
import CommunityNotificationSettingsCard from "./CommunityNotificationSettingsCard"

const CommunitySettings = () => {
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		multiple: false,
		onDrop: React.useCallback((image) => {
			const reader = new FileReader()
			
			reader.onabort = () => console.log('file reading was aborted')
			reader.onerror = () => console.log('file reading has failed')
			reader.onload = () => {
				const buffer = reader.result as ArrayBuffer
				const blob = new Blob([buffer])
				const imageUrl = URL.createObjectURL(blob);
				
				setProfileImage(imageUrl)
				setImageData(image[0])
			}

			reader.readAsArrayBuffer(image[0])
		}, []),
	})

	const [initialFetch, setInitialFetch] = React.useState<boolean>(true)
	const [loading, setLoading] = React.useState<boolean>(false)
	const [error, setError] = React.useState<boolean>(false)

	const [user, setUser] = React.useState<UserType>()
	const [name, setName] = React.useState('')
	const [imageData, setImageData] = React.useState<Blob>()
	const [profileImage, setProfileImage] = React.useState<string | null>(null)

	React.useEffect(() => {
		setTimeout(() => setInitialFetch(false), 500)

		axios
			.get(`${urls.api.base}/v4/user/public-user/${utils.getUserId()}`)
			.then((res) => {
				if (res.status === 204) {
					setError(true)
				} else {
					setUser(res.data)
					setName(res.data.name)
				}
			})
			.catch(() => setError(true))
			.finally(() => {
				setInitialFetch(false)
				setLoading(false)
			})
	}, [])

	const handleEditUser = (e) => {
		e.preventDefault()

		if (name === '') {
			toast.error('이름을 입력해 주세요.')
			document.getElementById('input-name')?.focus()
			return
		}

		const formData = new FormData()
		formData.append('file', imageData ?? '')
		formData.append('name', name)

		axios
			.put(`${urls.api.base}/v4/user/public-user`, formData, {
				headers: { Authorization: utils.getToken(), 'Content-Type': 'multipart/form-data' },
			})
			.then((res) => {
				setUser(res.data.updated)
				toast.success('프로필을 수정했어요')
			})
			.catch((e) => {
				if (e.response.status === 503) {
					toast.error('서버가 불안정해요. 잠시 후 다시 시도해 주세요')
					return
				}

				toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요.')
			})
	}

	if (initialFetch) return <></>
	if (loading) return <Loading/>
	if (error || user == null) return <Error move={0} mt={200} />

    return (
		<RouteContainer>
			<RouteTitle icon={<booksitoutIcon.settings />} title={'설정 - 커뮤니티'} />

			<SettingsCard
				title="프로필 설정"
				content={
					<div className="row justify-content-center">
						<div className="col-12 col-md-6">
							<ProfileCard user={user} profileImage={profileImage} />
						</div>

						<hr className="mt-5 mb-5" />

						<Form className="row justify-content-center m-0" onSubmit={handleEditUser}>
							<div className="col-12 mb-3">
								<h5 className="mb-2">프로필 사진</h5>
								<Card {...getRootProps()}>
									<Card.Body className="text-center">
										<input {...getInputProps()} />

										<ImageIcon className="text-book h3" />

										<p className="m-0 text-secondary">
											{isDragActive ? (
												<span className="text-book">맞아요! 여기에 올려 주세요</span>
											) : (
												<>여기에 이미지를 올리거나 클릭해서 올릴 이미지를 선택할 수 있어요</>
											)}
										</p>
									</Card.Body>
								</Card>
							</div>

							<div className="col-12 mb-3">
								<h5 className="mb-2">이름</h5>
								<Form.Control onChange={e => setName(e.target.value)} value={name} id="input-name" />
							</div>

							<div className="col-12 col-md-6 mb-3">
								<Button
									type="submit"
									variant="book"
									className="w-100 mt-4 mt-md-3"
									disabled={name === user.name && profileImage == null}
								>
									저장하기
								</Button>
							</div>
						</Form>
					</div>
				}
			/>

			<CommunityNotificationSettingsCard />
		</RouteContainer>
	)
}

const ProfileCard = ({ user, profileImage }) => {
	return (
		<div className='d-flex justify-content-center align-items-center text-center'>
			{profileImage != null && profileImage != '' ? (
				<img src={profileImage} alt='' className='img-fluid rounded border' style={{ width: '100px', height: '100px' }} />
			) : user.profileImage == null || user.profileImage === '' ? (
				<ProfileIcon style={{ width: '100px', height: '100px' }} className='text-book rounded border' />
			) : (
				<img src={user.profileImage} alt='' className='img-fluid rounded border' style={{ width: '100px', height: '100px' }} />
			)}

			<div className='row ms-4 text-start'>
				<h4>{user.name}</h4>
				{/* <h6 className='text-secondary'>{user.email}</h6> */}
			</div>

			<PaidIcon className='text-book h3 ms-3' />
		</div>
	)
}

export default CommunitySettings
