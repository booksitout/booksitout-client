interface SearchBookSourceLibraryOnlineResponse {
	link: string | null
	provider:
		| 'LIBRARY_ONLINE_SEOUL'
		| 'LIBRARY_ONLINE_SEOUL_EDUCATION'
		| 'LIBRARY_ONLINE_NATIONAL_ASSEMBLY'
		| 'LIBRARY_ONLINE_GYEONGGI_EDUCATION'
		| 'LIBRARY_ONLINE_GWANGHWAMUN'
		| 'LIBRARY_ONLINE_SEOUL_CONGRESS'
	loanPossible: boolean
	reservationPossible: boolean
}

interface SearchBookSourceLibraryOfflineResponse {
    link: string | null
    provider: 'REGION' | null,
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