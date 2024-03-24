const RouteTitleConfig = {
	Book: [
        {
            url: '/book',
			key: 'index',
			label: '둘러보기'
        },
        {
            url: '/book/mine',
			key: 'mine',
			label: '내 서재'
        },
        {
            url: '/book/statistics',
            key: 'statistics',
            label: '통계'
        },
    ],
	Library: [
		{
			url: '/library',
			key: 'library',
			label: '도서관 찾기',
		},
		{
			url: '/library/membership',
			key: 'membership',
			label: '회원증',
		},
		{
			url: '/library/near',
			key: 'library-near',
			label: '주변 도서관',
		},
	],
	Community: [
        {
            url: '/community',
			key: 'community',
			label: '둘러보기'
        },
        {
            url: '/community/tips?range=all',
			key: 'tips',
			label: '책잇아웃 꿀팁'
        },
        {
            url: '/community/popular-books',
            key: 'popular',
            label: '인기 책'
        },
    ],
}

export default RouteTitleConfig
