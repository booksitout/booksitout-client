import seoulLibrary from '../../../images/search/seoul-library.png'
import seoulEducationLibrary from '../../../images/search/seoul-education-library.png'
import nationalAssemblyLibrary from '../../../images/search/national-assembly-library.png'
import geonggiEducationLibrary from '../../../images/search/gyeonggi-education-library.png'
import gwanghwamumLibrary from '../../../images/search/gwanghwamun-library.jpg'
import seoulCongressLibrary from '../../../images/search/seoul-congress-library.png'
import millie from '../../../images/search/millie.png'
import aladin from '../../../images/search/aladin.png'
import yes24 from '../../../images/search/yes24.png'
import ridi from '../../../images/search/ridi.png'
import kyobo from '../../../images/search/kyobo.jpg'
import interpark from '../../../images/search/interpark.png'

type BookSource =
	| 'LIBRARY_ONLINE_SEOUL'
	| 'LIBRARY_ONLINE_SEOUL_EDUCATION'
	| 'LIBRARY_ONLINE_NATIONAL_ASSEMBLY'
	| 'LIBRARY_ONLINE_GYEONGGI_EDUCATION'
	| 'LIBRARY_ONLINE_GWANGHWAMUN'
	| 'LIBRARY_ONLINE_SEOUL_CONGRESS'

	| 'SUBSCRIPTION_MILLIE'
	| 'SUBSCRIPTION_RIDI'
	| 'SUBSCRIPTION_YES24'
	| 'SUBSCRIPTION_KYOBO'

    | 'USED_ONLINE_YES24'
	| 'USED_ONLINE_ALADIN'
	| 'USED_ONLINE_INTERPARK'
	| 'USED_ONLINE_KYOBO'
	
	| 'USED_OFFLINE_ALADIN'
	| 'USED_OFFLINE_YES24'
	
const getBookSourceIcon = (source: BookSource): string => {
	switch (source) {
		case 'LIBRARY_ONLINE_SEOUL':
			return seoulLibrary
		case 'LIBRARY_ONLINE_SEOUL_EDUCATION':
			return seoulEducationLibrary
		case 'LIBRARY_ONLINE_NATIONAL_ASSEMBLY':
			return nationalAssemblyLibrary
		case 'LIBRARY_ONLINE_GYEONGGI_EDUCATION':
			return geonggiEducationLibrary
		case 'LIBRARY_ONLINE_GWANGHWAMUN':
			return gwanghwamumLibrary
		case 'LIBRARY_ONLINE_SEOUL_CONGRESS':
			return seoulCongressLibrary
		case 'SUBSCRIPTION_MILLIE':
			return millie
		case 'USED_ONLINE_YES24':
		case 'USED_OFFLINE_YES24':
		case 'SUBSCRIPTION_YES24':
			return yes24
		case 'SUBSCRIPTION_RIDI':
			return ridi
		case 'SUBSCRIPTION_KYOBO':
		case 'USED_ONLINE_KYOBO':
			return kyobo
		case 'USED_ONLINE_ALADIN':
		case 'USED_OFFLINE_ALADIN':
			return aladin
		case 'USED_ONLINE_INTERPARK':
			return interpark
		default:
			return ''
	}
}

export default getBookSourceIcon
