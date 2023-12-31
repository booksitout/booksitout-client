import React from 'react'
import { ButtonGroup, Card, ToggleButton } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import booksitoutLogo from '../../../images/logo.png'

import TipsListGroup from './TipsListGroup'
import RouteContainer from '../../common/RouteContainer'

const TipsRoute = () => {
	const { range } = useParams()

	React.useEffect(() => {
		document.title = '꿀팁 | 책잇아웃'
	}, [])

    return (
		<RouteContainer>
			<Card style={{ minHeight: '200px' }} className='mb-4'>
				<Card.Body>
					<div className='d-flex align-items-center mb-2'>
						<img src={booksitoutLogo} alt='' style={{ width: '35px', height: '35px' }} className='me-2'/>
						<h2 className='m-0'>책잇아웃 꿀팁</h2>
					</div>

					<h5 className='text-secondary'>책에 관한 여러 꿀팁을 얻어 갈 수 있어요</h5>

					<ButtonGroup className='w-100 mt-4'>
						<a href='/tips/all' className='w-100'>
							<ToggleButton variant={range === 'all' ? 'book' : 'light'} type='radio' className='w-100' value='all'>
								전체
							</ToggleButton>
						</a>

						<a href='/tips/library' className='w-100'>
							<ToggleButton variant={range === 'library' ? 'book' : 'light'} type='radio' className='w-100' value='native'>
								도서관
							</ToggleButton>
						</a>

						<a href='/tips/bookstore' className='w-100'>
							<ToggleButton variant={range === 'bookstore' ? 'book' : 'light'} type='radio' className='w-100' value='integration'>
								책 구입
							</ToggleButton>
						</a>
					</ButtonGroup>

					<ButtonGroup className='w-100 mt-1'>
						<a href='/tips/booksitout' className='w-100'>
							<ToggleButton variant={range === 'booksitout' ? 'book' : 'light'} type='radio' className='w-100' value='library'>
								책잇아웃 사용법
							</ToggleButton>
						</a>

						<a href='/tips/reading' className='w-100'>
							<ToggleButton variant={range === 'reading' ? 'book' : 'light'} type='radio' className='w-100' value='search'>
								독서법
							</ToggleButton>
						</a>

						<a href='/tips/community' className='w-100 force-1-line'>
							<ToggleButton variant={range === 'community' ? 'book' : 'light'} type='radio' className='w-100' value='forum'>
								커뮤니티
							</ToggleButton>
						</a>
					</ButtonGroup>
				</Card.Body>
			</Card>

			<TipsListGroup range={range} />
		</RouteContainer>
	)
}

export default TipsRoute