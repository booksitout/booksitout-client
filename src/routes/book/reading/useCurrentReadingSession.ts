import {useEffect, useState} from "react";
import {BooksitoutServer} from "../../../config/BooksitoutServer";
import CurrentReadingSessionResponse from "./CurrentReadingSessionResponse";

const useCurrentReadingSession = () => {
    const [currentReadingSession, setCurrentReadingSession] = useState<CurrentReadingSessionResponse | null>(null)
    useEffect(() => {
        BooksitoutServer
            .get(`/v1/book/reading-session/current`)
            .then((res) => setCurrentReadingSession(res.data))
    }, [])

    return {currentReadingSession}
}

export default useCurrentReadingSession