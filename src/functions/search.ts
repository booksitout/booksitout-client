import urls from '../components/settings/urls'
import utils from './utils'

import aladin from '../resources/images/search/aladin.png'
import interpark from '../resources/images/search/interpark.png'
import kyobo from '../resources/images/search/kyobo.jpg'
import millie from '../resources/images/search/millie.png'
import ridi from '../resources/images/search/ridi.png'
import yes24 from '../resources/images/search/yes24.png'

import seoulLibrary from '../resources/images/search/seoul-library.png'
import seoulEducationLibrary from '../resources/images/search/seoul-education-library.png'
import nationalAssemblyLibrary from '../resources/images/search/national-assembly-library.png'
import gyeonggiEducationLibrary from '../resources/images/search/gyeonggi-education-library.png'
import gyeonggiLibrary from '../resources/images/search/gyeonggi-library.png'
import gwanghwamunLibrary from '../resources/images/search/gwanghwamun-library.jpg'
import seoulCongressLibrary from '../resources/images/search/seoul-congress-library.png'
import { booksitoutServer } from '../config/axios'

const isKeyPresent = {
	libraryOnline: (apiKey: string) => {
		const keys = localStorage.getItem('search-library-online-api')
		if (keys == null) return false

		return typeof keys.split(',').find((k) => k === apiKey) !== 'undefined'
	},

	subscription: (apiKey: string) => {
		const keys = localStorage.getItem('search-subscription-api')
		if (keys == null) return false

		return typeof keys.split(',').find((k) => k === apiKey) !== 'undefined'
	},

	usedOnline: (apiKey: string) => {
		const keys = localStorage.getItem('search-used-online-api')
		if (keys == null) return false

		return typeof keys.split(',').find((k) => k === apiKey) !== 'undefined'
	},

	usedOffline: (apiKey: string) => {
		const keys = localStorage.getItem('search-used-offline-api')
		if (keys == null) return false

		return typeof keys.split(',').find((k) => k === apiKey) !== 'undefined'
	},
}

const search = {

	getLink: (label: string) => {
		switch (label) {
			case 'ALADIN':
				return 'https://www.aladin.co.kr/home/welcome.aspx'
			case 'YES24':
				return 'http://www.yes24.com/Main/default.aspx'
			case 'KYOBO':
				return 'https://www.kyobobook.co.kr/'
			case 'INTERPARK':
				return 'https://book.interpark.com/bookPark/html/book.html'
			case 'MILLIE':
				return 'https://www.millie.co.kr/'
			case 'RIDI':
				return 'https://ridibooks.com/webtoon/recommendation'
			case 'SEOUL_LIBRARY':
				return 'https://elib.seoul.go.kr/main'
			case 'SEOUL_EDUCATION_LIBRARY':
				return 'https://lib.sen.go.kr/lib/index.do'
			case 'NATIONAL_ASSEMBLY_LIBRARY':
				return 'https://dl.nanet.go.kr/index.do'
		}
	},

	local: {
		settings: {
			myBook: {
				range: (): string => {
					return localStorage.getItem('search-my-book-range') ?? 'ALL'
				},
			},

			library: {
				isConfigured: (): boolean => {
					const regionKey = localStorage.getItem('search-library-region-api')
					const regionDetailKey = localStorage.getItem('search-library-region-detail-api')
					
					return regionKey !== '' && regionDetailKey !== '' && regionKey !== null && regionDetailKey !== null
				},

				display: {
					region: () => {
						const apiKey = localStorage.getItem('search-library-region-api')
						if (apiKey === '' || apiKey === null) return ''

						return search.data.region.find((r) => r.value === apiKey)?.displayName ?? ''
					},
					regionDetail: () => {
						const regionApiKey = localStorage.getItem('search-library-region-api')
						const apiKey = localStorage.getItem('search-library-region-detail-api')
						if (regionApiKey === '' || apiKey === '' || regionApiKey == null || apiKey == null) return ''

						return search.data.regionDetail.get(regionApiKey!)?.find((r) => r.value === apiKey)?.displayName ?? ''
					},
				},

				api: {
					region: (): string => {
						return localStorage.getItem('search-library-region-api') ?? ''
					},

					regionDetail: (): string => {
						return localStorage.getItem('search-library-region-detail-api') ?? ''
					},
				},

				update: {
					region: (apiRegion: string) => {
						localStorage.setItem('search-library-region-api', apiRegion)
					},
					regionDetail: (apiRegionDetail: string) => {
						localStorage.setItem('search-library-region-detail-api', apiRegionDetail)
					},
				},
			},

			onlineLibrary: {
				isConfigured: (): boolean => {
					const key = localStorage.getItem('search-library-online-api')
					return key !== '' && key !== null
				},
				display: () => {
					return localStorage.getItem('search-library-online-display') ?? ''
				},
				api: () => {
					return localStorage.getItem('search-library-online-api') ?? ''
				},
			},

			subscription: {
				isConfigured: (): boolean => {
					const key = localStorage.getItem('search-subscription-api')
					return key !== '' && key !== null
				},
				display: () => {
					return localStorage.getItem('search-subscription-display') ?? ''
				},
				api: () => {
					return localStorage.getItem('search-subscription-api') ?? ''
				},
			},

			usedOnline: {
				isConfigured: (): boolean => {
					const key = localStorage.getItem('search-used-online-api')
					return key !== '' && key !== null
				},
				display: () => {
					return localStorage.getItem('search-used-online-display') ?? ''
				},
				api: () => {
					return localStorage.getItem('search-used-online-api') ?? ''
				},
			},

			usedOffline: {
				isConfigured: (): boolean => {
					const key = localStorage.getItem('search-used-offline-api')
					return key !== '' && key !== null
				},
				display: () => {
					return localStorage.getItem('search-used-offline-display') ?? ''
				},
				api: () => {
					return localStorage.getItem('search-used-offline-api') ?? ''
				},
			},
		},
	},

	api: {
		search: {
			myBook: (query: string) => {
				return booksitoutServer
					.get(urls.api.search.myBook(query))
					.then((res) => res.data)
					.catch(() => {
						return null
					})
			},

			used: (query: string, includeOnline: string, includeOffline: string) => {
				return booksitoutServer
					.get(urls.api.search.used(query, includeOnline, includeOffline))
					.then((res) => res.data)
			},

			library: (query: string, region: string, regionDetail: string) => {
				return booksitoutServer
					.get(urls.api.search.libraryByRegion(query, region, regionDetail))
					.then((res) => res.data)
					.catch(() => {
						return null
					})
			},

			libraryOnline: (query: string, include: string) => {
				return booksitoutServer
					.get(urls.api.search.libraryOnline(query, include))
					.then((res) => res.data)
					.catch(() => { return null })
			},

			subscription: (query: string, include: string) => {
				return booksitoutServer
					.get(urls.api.search.subscription(query, include))
					.then((res) => res.data)
					.catch(() => {
						return null
					})
			},
		},

		settings: {
			myBook: {
				changeSearchRange: (range: string) => {
					return booksitoutServer
						.put(urls.api.search.settings.myBook.changeRange(), { range: range })
						.then((res) => {
							return res.status
						})
						.catch(() => {
							return 500
						})
				},
			},

			library: {
				changeRegion: (region: string | null, regionDetail: string | null) => {
					return booksitoutServer
						.put(
							urls.api.search.settings.changeRegion(),
							{ region: region, regionDetail: regionDetail },
							{ headers: { Authorization: utils.getToken() } }
						)
						.then((res) => {
							return res.status
						})
						.catch(() => {
							return 500
						})
				},

				deleteRegion: () => {
					return booksitoutServer
						.delete(urls.api.search.settings.changeRegion())
						.then((res) => {
							return res.status
						})
						.catch(() => {
							return 500
						})
				},
			},

			libraryOnline: {
				changeSearchRange: (range: string) => {
					return booksitoutServer
						.put(urls.api.search.settings.libraryOnline.searchRange(), { range: range })
						.then((res) => {
							return res.status
						})
						.catch(() => {
							return 500
						})
				},
			},

			subscription: {
				changeSearchRange: (range: string) => {
					return booksitoutServer
						.put(urls.api.search.settings.subscription.searchRange(), { range: range })
						.then((res) => {
							return res.status
						})
						.catch(() => {
							return 500
						})
				},
			},

			usedOnline: {
				changeSearchRange: (range: string) => {
					return booksitoutServer
						.put(urls.api.search.settings.usedOnline.searchRange(), { range: range })
						.then((res) => {
							return res.status
						})
						.catch(() => {
							return 500
						})
				},
			},

			usedOffline: {
				changeSearchRange: (range: string) => {
					return booksitoutServer
						.put(urls.api.search.settings.usedOffline.searchRange(), { range: range })
						.then((res) => {
							return res.status
						})
						.catch(() => {
							return 500
						})
				},
			},
		},
	},

	data: {
		onlineLibrary: [
			{
				icon: seoulLibrary,
				name: '서울도서관',
				key: 'SEOUL_LIBRARY',
				included: isKeyPresent.libraryOnline('SEOUL_LIBRARY'),
			},
			// {
			// 	icon: seoulEducationLibrary,
			// 	name: '서울교육청',
			// 	key: 'SEOUL_EDUCATION_LIBRARY',
			// 	included: isKeyPresent.libraryOnline('SEOUL_EDUCATION_LIBRARY'),
			// },
			// {
			// 	icon: nationalAssemblyLibrary,
			// 	name: '국회도서관',
			// 	key: 'NATIONAL_ASSEMBLY_LIBRARY',
			// 	included: isKeyPresent.libraryOnline('NATIONAL_ASSEMBLY_LIBRARY'),
			// },
			{
				icon: gyeonggiEducationLibrary,
				name: '경기교육도서관',
				key: 'GYEONGGI_EDUCATION_LIBRARY',
				included: isKeyPresent.libraryOnline('GYEONGGI_EDUCATION_LIBRARY'),
			},
			// {
			// 	icon: gyeonggiLibrary,
			// 	name: '경기사이버도서관',
			// 	key: 'GYEONGGI_LIBRARY',
			// 	included: isKeyPresent.libraryOnline('GYEONGGI_LIBRARY'),
			// },
			{
				icon: gwanghwamunLibrary,
				name: '광화문읽거늘',
				key: 'GWANGHWAMUN_LIBRARY',
				included: isKeyPresent.libraryOnline('GWANGHWAMUN_LIBRARY'),
			},
			// {
			// 	icon: seoulCongressLibrary,
			// 	name: '서울시의회',
			// 	key: 'SEOUL_CONGRESS_LIBRARY',
			// 	included: isKeyPresent.libraryOnline('SEOUL_CONGRESS_LIBRARY'),
			// },
		],

		usedOnline: [
			{
				icon: aladin,
				name: '알라딘',
				key: 'ALADIN',
				included: isKeyPresent.usedOnline('ALADIN'),
			},
			{
				icon: yes24,
				name: 'YES24',
				key: 'YES24',
				included: isKeyPresent.usedOnline('YES24'),
			},
			// {
			// 	icon: kyobo,
			// 	name: '교보문고',
			// 	key: 'KYOBO',
			// 	included: isKeyPresent.usedOnline('KYOBO'),
			// },
			// {
			// 	icon: interpark,
			// 	name: '인터파크',
			// 	key: 'INTERPARK',
			// 	included: isKeyPresent.usedOnline('INTERPARK'),
			// },	
		],

		usedOffline: [
			{
				icon: aladin,
				name: '알라딘 우주점',
				key: 'ALADIN',
				included: isKeyPresent.usedOffline('ALADIN'),
			},
			{
				icon: yes24,
				name: 'YES24',
				key: 'YES24',
				included: isKeyPresent.usedOffline('YES24'),
			},	
		],

		subscription: [
			{
				icon: millie,
				name: '밀리의 서재',
				key: 'MILLIE',
				included: isKeyPresent.subscription('MILLIE'),
			},
			{
				icon: ridi,
				name: '리디 셀렉트',
				key: 'RIDI',
				included: isKeyPresent.subscription('RIDI'),
			},
			{
				icon: yes24,
				name: 'YES24 북클럽',
				key: 'YES24',
				included: isKeyPresent.subscription('YES24'),
			},
			{
				icon: kyobo,
				name: '교보문고 SAM',
				key: 'KYOBO',
				included: isKeyPresent.subscription('KYOBO'),
			},	
		],

		region: [
			{ displayName: '서울', value: 'SEOUL' },
			{ displayName: '부산', value: 'BUSAN' },
			{ displayName: '대구', value: 'DAEGU' },
			{ displayName: '인천', value: 'INCHEON' },
			{ displayName: '광주', value: 'GWANGJU' },
			{ displayName: '대전', value: 'DAEJEON' },
			{ displayName: '울산', value: 'ULSAN' },
			{ displayName: '세종', value: 'SEJONG' },
			{ displayName: '경기도', value: 'GYEONGGIDO' },
			{ displayName: '강원도', value: 'GANGWONDO' },
			{ displayName: '충청북도', value: 'CHUNGCHEONGBUKDO' },
			{ displayName: '충청남도', value: 'CHUNGCHEONGNAMDO' },
			{ displayName: '전라북도', value: 'JEOLLABUKDO' },
			{ displayName: '전라남도', value: 'JEOLLANAMDO' },
			{ displayName: '경상북도', value: 'GYEONGSANGBUKDO' },
			{ displayName: '경상남도', value: 'GYEONGSANGNAMDO' },
			{ displayName: '제주', value: 'JEJU' },	
		],

		regionDetail: new Map([
			['SEOUL', [
				{ value: 'JONGNOGU', displayName: '종로구' },
				{ value: 'JUNGGU', displayName: '중구' },
				{ value: 'YONGSANGU', displayName: '용산구' },
				{ value: 'SEONGDONGGU', displayName: '성동구' },
				{ value: 'GWANGJINGU', displayName: '광진구' },
				{ value: 'DONGDAEMUNGU', displayName: '동대문구' },
				{ value: 'JUNGNANGGU', displayName: '중랑구' },
				{ value: 'SEONGBUKGU', displayName: '성북구' },
				{ value: 'GANGBUKGU', displayName: '강북구' },
				{ value: 'DOBONGGU', displayName: '도봉구' },
				{ value: 'NOWONGU', displayName: '노원구' },
				{ value: 'EUNPYEONGGU', displayName: '은평구' },
				{ value: 'SEODAEMUNGU', displayName: '서대문구' },
				{ value: 'MAPOGU', displayName: '마포구' },
				{ value: 'YANGCHEONGU', displayName: '양천구' },
				{ value: 'GANGSEOGU', displayName: '강서구' },
				{ value: 'GUROGU', displayName: '구로구' },
				{ value: 'GEUMCHEONGU', displayName: '금천구' },
				{ value: 'YEONGDEUNGPOGU', displayName: '영등포구' },
				{ value: 'DONGJAKGU', displayName: '동작구' },
				{ value: 'GWANAKGU', displayName: '관악구' },
				{ value: 'SEOCHOGU', displayName: '서초구' },
				{ value: 'GANGNAMGU', displayName: '강남구' },
				{ value: 'SONGPAGU', displayName: '송파구' },
				{ value: 'GANGDONGGU', displayName: '강동구' },		
			]]
		])

	},

}

export default search
