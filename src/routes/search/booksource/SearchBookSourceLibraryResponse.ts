interface SearchBookSourceLibraryOnlineResponse {
    link: string | null
    provider: 'SEOUL_LIBRARY'|'SEOUL_EDUCATION_LIBRARY'|'NATIONAL_ASSEMBLY_LIBRARY'|'GYEONGGI_EDUCATION_LIBRARY'|'GWANGHWAMUN_LIBRARY'|'SEOUL_CONGRESS_LIBRARY'
    loanPossible: boolean
    reservationPossible: boolean
}

interface SearchBookSourceLibraryOfflineResponse {
    link: string | null
    provider: string,
    loanPossible: boolean
    reservationPossible: boolean
    library: Library
}

interface Library {
    name: string,
    logo: string,
    link: string,
}

export type { SearchBookSourceLibraryOnlineResponse, SearchBookSourceLibraryOfflineResponse }