import { RouteButtonGroupType } from "../../common/RouteButtonGroupType";
import { ImLibrary as LibraryIcon} from 'react-icons/im'

const libraryRouteButtons: RouteButtonGroupType[] = [
	{
		url: '/library/membership/all',
		key: 'membership',
		label: '회원증',
	},
	{
		url: '/library/near',
		key: 'library-near',
		label: '내 주변 도서관',
	},
	// {
	// 	url: '/library/near',
	// 	key: 'library-search',
	// 	label: '도서관 검색',
	// },
	// {
	// 	url: '/library/near',
	// 	key: 'library-region',
	// 	label: '지역별 도서관',
	// },
]

export { libraryRouteButtons, LibraryIcon }