import React from 'react'
import IntroductionSection from './IntroductionSection'
import boardingImage from '../notification.svg'

const IntroductionNotificationSection = ({reversed}) => {
	const head = ['읽고 싶은 책,', '알림 받기']
	const subHead = [
		'내가 읽고 싶은 책이 원하는 곳에 등록되면 알림을 받을 수 있어요',
	]

	return (
		<IntroductionSection
			head={head}
			subHead={subHead}
			image={boardingImage}
			color={'#F6EDD9'}
			reversed={reversed}
		/>
	)
}

export default IntroductionNotificationSection