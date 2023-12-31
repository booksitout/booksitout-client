interface TipsType {
    id: number;
    title: string;
    content?: string;
    summary?: string;
    estimatedReadTime: number;
    
    type: TipsTypeResponse;

    createdDate?: string;
    lastModifiedDate?: string;
}
interface TipsTypeResponse {
    raw: string;
    displayName: string;
}

export default TipsType;