import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BooksitoutServer } from "../../config/BooksitoutServer";
import ApiUrls from "../../ApiUrls";
import LibraryResponse from "./near/LibraryNearResponse";

const useLibraryNear = (lat: number | null, long: number | null, radiusInKm: number = 3, isShowingAlert: boolean = false) => {
	const [libraries, setLibraries] = useState<LibraryResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
	const prevLibrariesCount = useRef<number>(0);

	useEffect(() => {
        if (lat !== null && long !== null && lat !== undefined && long !== undefined) {
            setIsLoading(true)

			BooksitoutServer
				.get(ApiUrls.Library.Near(lat, long, radiusInKm * 1000))
				.then(res => {
                    const newlyFoundLibrariesCount = res.data.length - prevLibrariesCount.current;

                    if (isShowingAlert) {
                        if (newlyFoundLibrariesCount > 0) {
                            toast.success(`도서관 ${newlyFoundLibrariesCount}곳을 ${prevLibrariesCount.current === 0 ? '' : '더 '}찾았어요`);
                        } else if (newlyFoundLibrariesCount < 0) {
                            toast.success(`도서관 ${-newlyFoundLibrariesCount}곳이 없어졌어요`);
                        } else if (prevLibrariesCount.current !== 0) {
                            toast.success('새로 찾은 도서관은 없어요');
                        }
                    }

                    prevLibrariesCount.current = res.data.length;
                    setLibraries(res.data);
				})
				.catch(() => toast.error('도서관 정보를 가져오는 동안 오류가 났어요. '))
                .finally(() => setIsLoading(false))
		}
    }, [lat, long, radiusInKm, isShowingAlert])

	return [libraries, isLoading] as const
}

export default useLibraryNear