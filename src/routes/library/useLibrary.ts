import { useEffect, useState } from "react"
import LibraryResponse from "./LibraryNearResponse"
import { booksitoutServer } from "../../config/axios"
import toast from "react-hot-toast"

const useLibrary = (libraryId: number) => {
    const [library, setLibrary] = useState<LibraryResponse | null>(null)
    useEffect(() => {
        booksitoutServer
            .get(`/v1/library/${libraryId}`)
            .then((res) => setLibrary(res.data))
            .catch(() => toast.error(`오류가 났어요. 잠시 후 다시 시도해 주세요.`))
    }, [libraryId])

    return library
}

export default useLibrary