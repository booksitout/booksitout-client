interface CommunitySettingsType {
    type: 'TIPS' | 'POST_NEW' | 'POST_LIKE' | 'GATHERING_NEW' | 'GATHERING_REQUEST' | 'COMMENT' | 'COMMENT_REPLY'
    typeId: number
    appUserId: number
}

export default CommunitySettingsType