import { useEffect, useState } from "react"
import LibraryMembershipResponse from "./membership/LibraryMembershipResponse"
import { booksitoutServer } from "../../config/booksitoutServer"
import ApiUrls from "../../ApiUrls"
import PagedResponse from "../../common/response/PagedResponse"
import Paging from '../../common/hooks/Paging';

const useLibraryMembershipList = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [page, setPage] = useState<number>(1)
    const [isLast, setIsLast] = useState<boolean>(false)
    const [totalPages, setTotalPages] = useState<number>(0)

    const [libraryMemberships, setLibraryMemberships] = useState<LibraryMembershipResponse[]>([])

    useEffect(() => {
        booksitoutServer
            .get(ApiUrls.Library.Membership.GET_LIST(page))
            .then((res) => {
                const pagedResponse: PagedResponse<LibraryMembershipResponse> = res.data
                setLibraryMemberships([...libraryMemberships, ...pagedResponse.contents])
                setIsLast(pagedResponse.isLast)
                setTotalPages(pagedResponse.totalPages)
            })
            .finally(() => setIsLoading(false))
    }, [page])

    const fetchNext = () => {
        setPage(page + 1)
    }

    const paging: Paging = { hasMore: !isLast, totalPages: totalPages, fetchNext }

    return [isLoading, libraryMemberships, paging] as const
}

export default useLibraryMembershipList