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

const getBookSourceIcon = (
	source:
		| 'SEOUL_LIBRARY'
		| 'SEOUL_EDUCATION_LIBRARY'
		| 'NATIONAL_ASSEMBLY_LIBRARY'
		| 'GYEONGGI_EDUCATION_LIBRARY'
		| 'GWANGHWAMUN_LIBRARY'
		| 'SEOUL_CONGRESS_LIBRARY'
		| 'MILLIE'
		| 'YES24'
		| 'RIDI'
		| 'KYOBO'
		| 'ONLINE_ALADIN'
		| 'ONLINE_YES24'
		| 'ONLINE_KYOBO'
		| 'ONLINE_INTERPARK'
		| 'OFFLINE_ALADIN'
		| 'OFFLINE_YES24',
) => {
    switch (source)  {
        case 'SEOUL_LIBRARY':
            return seoulLibrary
        case 'SEOUL_EDUCATION_LIBRARY':
            return seoulEducationLibrary
        case 'NATIONAL_ASSEMBLY_LIBRARY':
            return nationalAssemblyLibrary
        case 'GYEONGGI_EDUCATION_LIBRARY':
            return geonggiEducationLibrary
        case 'GWANGHWAMUN_LIBRARY':
            return gwanghwamumLibrary
        case 'SEOUL_CONGRESS_LIBRARY':
            return seoulCongressLibrary
        case 'MILLIE':
            return millie
        case 'YES24':
        case 'ONLINE_YES24':
            return yes24
        case 'RIDI':
            return ridi
        case 'KYOBO':
        case 'ONLINE_KYOBO':
            return kyobo
        case 'ONLINE_ALADIN':
        case 'OFFLINE_ALADIN':
            return aladin
        case 'ONLINE_INTERPARK':
            return interpark
        default:
            return ''
    }
}

export default getBookSourceIcon