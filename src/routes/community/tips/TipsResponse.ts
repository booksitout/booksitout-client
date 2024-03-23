interface TipsResponse {
    id: number
    title: string
    content: string
    summary: string
    estimatedReadTime: number
    displayImageUrl: string
    type: Type
    createdDate: string
    lastModifiedDate: string
}

interface Type {
    raw: string
    displayName: string
}

export default TipsResponse