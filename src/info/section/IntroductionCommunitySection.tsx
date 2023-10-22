import React from 'react'
import IntroductionSection from './IntroductionSection'
import boardingImage from '../community.svg'

const IntroductionCommunitySection = ({ reversed }) => {
	const head = ['좋은 책은 나눠야죠']
	const subHead = [
		'책을 다 읽으면 요약 / 감상을 다른 사람과 나눌 수 있어요',
		'책잇아웃의 프로필을 이용해 독서모임을 찾을 수 있어요',
		'인기책 랭킹을 볼 수 있어요',
	]

	return (
		<IntroductionSection
			head={head}
			subHead={subHead}
			image={boardingImage}
			color={'#d1e7de'}
			reversed={reversed}
		/>
	)
}

export default IntroductionCommunitySection