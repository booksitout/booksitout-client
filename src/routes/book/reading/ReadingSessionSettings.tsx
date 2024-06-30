import React, {useEffect} from 'react'
import useReadingSessionStore from "./useReadingSessionStore"

const ReadingSessionSettings = () => {
    const { isTimerOn, incrementTimer } = useReadingSessionStore()

    useEffect(() => {
        let interval: number | null = null

        if (isTimerOn) {
            interval = window.setInterval(() => {
                incrementTimer()
            }, 1000)
        } else if (!isTimerOn && interval !== null) {
            clearInterval(interval)
        }

        return () => {
            if (interval !== null) {
                clearInterval(interval)
            }
        }
    }, [isTimerOn])

    return (<></>)
}

export default ReadingSessionSettings
