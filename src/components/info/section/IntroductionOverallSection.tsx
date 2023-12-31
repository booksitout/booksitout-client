import React from 'react'
import boardingImage from '../people-waving.svg'
import IntroductionSection from './IntroductionSection'
import styled from 'styled-components';

const IntroductionOverallSection = ({reversed}) => {
	const head = ['독서생활,', '이제는 더 간편하게']
	const subHead = [
		'나만의 디지털 서재를 만들어, 내 독서활동을 관리해요',
		'독서활동을 기록하고 통계로 볼 수 있어요',
	]

	return (
		<Container>
			<IntroductionSection
				head={head}
				subHead={subHead}
				image={boardingImage}
				color={'#d1e7de'}
				reversed={reversed}
			/>
		</Container>
	)
}

const Container = styled.div`
	overflow: hidden;
`


export default IntroductionOverallSection