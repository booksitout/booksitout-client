import LibraryResponse from "../near/LibraryNearResponse";

export default interface LibraryMembershipResponse {
    id: number;
    number: string;
    memo?: string;

    logo: string;
    name: string;
    description?: string;

    usableLibrary: LibraryResponse[]
}