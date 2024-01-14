import React from 'react'
import { booksitoutServer } from '../../config/axios'
import { UserModel } from '../../types/UserType'
import { useNavigate } from 'react-router-dom'
import ApiUrls from '../../ApiUrls'

const UserProfileRedirectRoute = () => {

    const navigate = useNavigate()

    React.useEffect(() => {
        booksitoutServer
            .get(ApiUrls.User.GET_PUBLIC)
            .then((res) => {
                let user = res.data as UserModel
                navigate(`/user/${user.name}`)
            })
    }, [navigate])

    return (
        <></>
    )
}

export default UserProfileRedirectRoute