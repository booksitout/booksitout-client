import { useEffect, useState } from "react"
import LibraryMembershipResponse from "./membership/LibraryMembershipResponse"
import { booksitoutServer } from "../../config/booksitoutServer"
import ApiUrls from "../../ApiUrls"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const useLibraryMembership = (id: number) => {
    const navigate = useNavigate()

    const [membership, setMembership] = useState<LibraryMembershipResponse | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isNotFound, setIsNotFound] = useState<boolean>(false)
    
    useEffect(() => {
        booksitoutServer
            .get(ApiUrls.Library.Membership.GET(id))
            .then((res) => {
                if (res.status === 204) throw new Error('Not Found')

                setMembership(res.data)
            })
            .catch(() => setIsNotFound(true))
            .finally(() => setIsLoading(false))
    }, [id])

    const deleteMembership = () => {
        if (window.confirm('정말 도서관 회원증을 삭제할까요?')) {
            booksitoutServer
                .delete(`v1/library/membership/${id}`)
                .then(() => {
                    toast.success('회원증을 삭제했어요')
                    navigate('/library/membership')
                })
                .catch(() => toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요'))
        }
    }

    return [membership, isLoading, isNotFound, deleteMembership] as const
}

export default useLibraryMembership