interface SearchBookSourceUsedOnlineResponse {
    link?: string
    provider: 'USED_ONLINE_ALADIN' | 'USED_ONLINE_KYOBO' | 'USED_ONLINE_YES24' | 'USED_ONLINE_INTERPARK'
    minPrice: number
    stockCount: number
    locationList: string[]
}

interface SearchBookSourceUsedOfflineResponse {
    link?: string
    provider: 'USED_OFFLINE_ALADIN' | 'USED_OFFLINE_YES24'
    minPrice: number
    stockCount: number
    locationList: string[]
}

export type { SearchBookSourceUsedOnlineResponse, SearchBookSourceUsedOfflineResponse }