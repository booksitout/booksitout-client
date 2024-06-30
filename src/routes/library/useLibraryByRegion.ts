import { useEffect, useState } from "react"
import { BooksitoutServer } from "../../config/BooksitoutServer"
import LibraryResponse from "./near/LibraryNearResponse"
import ApiUrls from "../../ApiUrls"

const useLibraryByRegion = (region: string) => {
	const [libraries, setLibraries] = useState<LibraryResponse[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		BooksitoutServer
			.get(ApiUrls.Library.Region.GET(region))
			.then((res) => setLibraries(res.data))
			.finally(() => setIsLoading(false))
	}, [region])

	return [libraries, isLoading] as const
}

export default useLibraryByRegion