export default interface LoginSuccessResponse {
    name: string
    profileImage: string
    ttl: Date
    accessToken: string
    refreshToken: string
}