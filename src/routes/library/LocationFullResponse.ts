interface LocationFullResponse {
    id: number
    depth1: Depth
    depth2: Depth
}

interface Depth {
    koreanName: string
    englishName: string
    logo: string
}

export default LocationFullResponse