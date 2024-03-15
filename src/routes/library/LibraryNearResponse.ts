export default interface LibraryNearResponse {
    id: number;
    name: string;
    phone?: string;
    homepage?: string;
    bookCount?: number;
    openHour?: string;
    openDay?: string;
    location: LibraryTypeLocation;
}

interface LibraryTypeLocation {
    name: LibraryTypeLocationName;
    address: string;
    latitude: number;
    longitude: number;
    logo: string;
    distance?: number;
}

interface LibraryTypeLocationName {
    displayName: string;
    regionEnglishName: string;
    regionDetailEnglishName: string;
}