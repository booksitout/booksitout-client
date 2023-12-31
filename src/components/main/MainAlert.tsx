import React from 'react'
import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getAlertMessage } from '../../functions/alert'

const MainAlert = () => {
    	const isLogin = useSelector((state: RootState) => state.user.isLogin)

  return (
		<div className="container">
			<Alert variant="success" className="mb-0 mt-2">
				{isLogin ? getAlertMessage() : '책잇아웃에 어서오세요! 독서생활을 좀 더 편하게 만들어 드릴게요'}
			</Alert>
		</div>
  )
}

export default MainAlert