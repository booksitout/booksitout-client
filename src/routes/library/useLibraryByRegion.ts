import { useEffect, useState } from "react"
import { booksitoutServer } from "../../config/axios"
import LibraryResponse from "./near/LibraryNearResponse"
import ApiUrls from "../../ApiUrls"

const useLibraryByRegion = (region: string) => {
	const [libraries, setLibraries] = useState<LibraryResponse[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		booksitoutServer
			.get(ApiUrls.Library.Region.GET(region))
			.then((res) => setLibraries(res.data))
			.finally(() => setIsLoading(false))
	}, [region])

	return [libraries, isLoading] as const
}

export default useLibraryByRegion