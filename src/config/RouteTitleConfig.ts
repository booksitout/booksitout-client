const RouteTitleConfig = {
	Book: [
        {
            url: '/book',
			key: 'index',
			label: '둘러보기'
        },
        {
            url: '/book/mine?range=READING',
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

	AddMembership: [
		{
            url: '/add/membership/image',
            key: 'image',
            label: '사진으로 추가'
        },
		{
            url: '/add/membership/manual',
            key: 'manual',
            label: '직접 추가'
        },
	]
}

export default RouteTitleConfig
