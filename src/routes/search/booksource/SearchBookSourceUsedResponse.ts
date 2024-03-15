interface SearchBookSourceUsedOnlineResponse {
    link?: string
    provider: 'ONLINE_ALADIN' | 'ONLINE_KYOBO' | 'ONLINE_YES24' | 'ONLINE_INTERPARK'
    minPrice: number
    stockCount: number
    locationList: string[]
}

interface SearchBookSourceUsedOfflineResponse {
    link?: string
    provider: 'OFFLINE_ALADIN' | 'OFFLINE_YES24'
    minPrice: number
    stockCount: number
    locationList: string[]
}

export type { SearchBookSourceUsedOnlineResponse, SearchBookSourceUsedOfflineResponse }