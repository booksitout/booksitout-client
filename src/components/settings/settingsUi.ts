import { RouteButtonGroupType } from "../common/RouteButtonGroupType";

const settingsRouteButtons: RouteButtonGroupType[] = [
    {
        url: '/settings',
        label: '전체',
        key: 'all',
    },
    {
        url: '/settings/public-profile',
        label: '내 공개 프로필 설정',
        key: 'profile',
    },
    {
        url: '/settings/search',
        label: '검색 설정',
        key: 'search',
    },
]

export { settingsRouteButtons }