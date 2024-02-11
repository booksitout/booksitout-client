import { RouteButtonGroupType } from "../../common/RouteButtonGroupType";
import { ImLibrary as LibraryIcon} from 'react-icons/im'

const libraryRouteButtons: RouteButtonGroupType[] = [
	{
		url: '/library',
		key: 'library',
		label: '요약',
	},
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
]

export { libraryRouteButtons, LibraryIcon }