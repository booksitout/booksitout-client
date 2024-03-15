import { useEffect, useState } from "react";
import LibraryNearResponse from "./LibraryNearResponse";
import { booksitoutServer } from "../../config/axios";
import toast from "react-hot-toast";
import ApiUrls from "../../ApiUrls";

const useLibraryNear = (lat: number | null, long: number | null, radiusInKm: number = 3) => {
	const [libraries, setLibraries] = useState<LibraryNearResponse[]>([])

	useEffect(() => {
        if (lat !== null&& long !== null) {
			booksitoutServer
				.get(ApiUrls.Library.Near(lat, long, radiusInKm * 1000))
				.then((res) => setLibraries(res.data))
				.catch(() => toast.error('도서관 정보를 가져오는 동안 오류가 났어요. '))
		}
    }, [lat, long, radiusInKm])

	return libraries
}

export default useLibraryNear