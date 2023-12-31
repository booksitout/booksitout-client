import styled from 'styled-components';
import IntroductionOverallSection from './section/IntroductionOverallSection';
import IntroductionSearchSection from './section/IntroductionSearchSection';
import IntroductionLibrarySection from './section/IntroductionLibrarySection';
import IntroductionLoginSection from './section/IntroductionLoginSection';
import IntroductionCommunitySection from './section/IntroductionCommunitySection';
import IntroductionNotificationSection from './section/IntroductionStatisticsSection';

const IntroductionRoute = () => {
	return (
		<Container>
			<IntroductionOverallSection reversed={false} />
			<IntroductionSearchSection reversed={true} />
			<IntroductionLibrarySection reversed={false} />
			<IntroductionCommunitySection reversed={true} />
			<IntroductionNotificationSection reversed={false} />

			<IntroductionLoginSection />
		</Container>
	)
}

const Container = styled.div`
	overflow: hidden;
	transform: translateY(-20px);
`

export default IntroductionRoute
