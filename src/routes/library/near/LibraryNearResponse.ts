export default interface LibraryResponse {
    id: number;
    name: string;
    phone?: string;
    homepage?: string;
    bookCount?: number;
    openHour?: string;
    openDay?: string;
    location: LibraryLocation;
}

interface LibraryLocation {
    name: LibraryLocationName;
    address: string;
    latitude: number;
    longitude: number;
    logo: string;
    distance?: number;
}

interface LibraryLocationName {
    displayName: string;
    regionEnglishName: string;
    regionDetailEnglishName: string;
}