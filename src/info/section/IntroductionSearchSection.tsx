import React from 'react'
import IntroductionSection from './IntroductionSection'
import boardingImage from '../search.svg'
import styled from 'styled-components';

const IntroductionSearchSection = ({reversed}) => {
	const head = ['읽고 싶은 책,', '단 1번의 검색으로 찾기']
	const subHead = [
		'흩어져 있는 책들, 간단하게 찾을 수 있어요',
		'도서관, 중고책, 구독 전자책을 지원해요',
		'<a href="/introduction/features" className="text-book">검색 지원하는 곳 모두 보기</a>',
	]

	return (
		<Container>
			<IntroductionSection head={head} subHead={subHead} image={boardingImage} color={''} reversed={reversed} />
		</Container>
	)
}

const Container = styled.div``

export default IntroductionSearchSection