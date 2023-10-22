import React from 'react'
import IntroductionSection from './IntroductionSection'
import boardingImage from '../library.svg'

const IntroductionLibrarySection = ({reversed}) => {
	const head = ['도서관,', '더 똑똑하게 이용하기']
	const subHead = [
		'지도에 검색해도 잘 안 나오는 주변 도서관, 쉽게 찾아요',
		'항상 어디 있는지 찾는 회원증, 쉽게 관리해요',
		'복잡한 도서관 정보, 쉽게 정리해서 알려줘요',
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

export default IntroductionLibrarySection