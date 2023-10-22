import React from 'react'
import { useParams } from 'react-router-dom'

import MembershipAddMethodButtonGroup from './MembershipAddMethodButtonGroup'
import MembershipAddFormImage from './MembershipAddFormImage'
import MembershipAddFormManual from './manual/MembershipAddFormManual'
import ScrollToTop from '../../../common/topnav/ScrollToTop'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import Error from '../../../common/Error'

const MembershipAddForm = () => {
	const isLogin = useSelector((state: RootState) => state.user.isLogin)

    const { method } = useParams()

    return (
		<>
			<ScrollToTop />

			<MembershipAddMethodButtonGroup method={method} />

			<div className="mt-4" />

			{!isLogin ? (
				<Error message="도서관 회원증을 추가하시려면 로그인 해 주세요" move={0} />
			) : method === 'image' ? (
				<MembershipAddFormImage />
			) : method === 'manual' ? (
				<MembershipAddFormManual />
			) : (
				<></>
			)}
		</>
	)
}

export default MembershipAddForm