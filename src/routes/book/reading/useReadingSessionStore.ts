import {create} from "zustand";

interface ReadingSessionState {
    timerInSeconds: number
    isTimerOn: boolean
    lastRecordedTime: string | null

    startTimer: () => void
    resumeTimer: () => void
    pauseTimer: () => void
    resetTimer: () => void
    incrementTimer: () => void
    isShowingTimer: () => boolean

    isModalOpen: boolean
    openModal: (bookId: number) => void
    closeModal: () => void

    isEndModalOpen: boolean
    openEndModal: () => void
    closeEndModal: () => void

    bookId: number | null
    readingSessionId: number | null
    setBookId: (bookId: number) => void
    setReadingSessionId: (readingSessionId: number) => void
}

const useReadingSessionStore = create<ReadingSessionState>((set, get) => ({
    timerInSeconds: parseInt(localStorage.getItem('timerInSeconds') || '0', 10),
    isTimerOn: localStorage.getItem('isTimerOn') === 'true',
    isModalOpen: false,
    lastRecordedTime: localStorage.getItem('lastRecordedTime'),
    bookId: localStorage.getItem('bookId') ? parseInt(localStorage.getItem('bookId')!, 10) : null,
    readingSessionId: localStorage.getItem('readingSessionId') ? parseInt(localStorage.getItem('readingSessionId')!, 10) : null,
    isEndModalOpen: false,

    startTimer: () => {
        const isAlreadyStarted = get().timerInSeconds > 0
        if (isAlreadyStarted) return
        const now = new Date()

        set({isTimerOn: true})
        localStorage.setItem('isTimerOn', 'true');

        set({lastRecordedTime: now.toISOString()})
        localStorage.setItem('lastRecordedTime', now.toISOString());

        set({timerInSeconds: 1})
        localStorage.setItem('timerInSeconds', '1')
    },

    resumeTimer: () => {
        set({isTimerOn: true})
        localStorage.setItem('isTimerOn', 'true')

        set({lastRecordedTime: new Date().toISOString()})
        localStorage.setItem('lastRecordedTime', new Date().toISOString());
    },

    pauseTimer: () => {
        set({isTimerOn: false})
        localStorage.setItem('isTimerOn', 'false')

        set({lastRecordedTime: null})
        localStorage.removeItem('lastRecordedTime')
    },

    resetTimer: () => {
        set({timerInSeconds: 0})
        localStorage.removeItem('timerSeconds')

        set({isTimerOn: false})
        localStorage.removeItem('isTimerOn')

        set({bookId: null})
        localStorage.removeItem('bookId')

        set({readingSessionId: null})
        localStorage.removeItem('readingSessionId')

        set({lastRecordedTime: null})
        localStorage.removeItem('lastRecordedTime')

        set({isModalOpen: false})

        set({isEndModalOpen: false})
    },

    incrementTimer: () => {
        if (!get().isTimerOn) return

        const now = new Date()
        const lastRecordedTime = get().lastRecordedTime ? new Date(get().lastRecordedTime!) : now
        const differenceInSeconds = Math.floor((now.getTime() - lastRecordedTime.getTime()) / 1000)
        const differenceToAdd = differenceInSeconds < 3 ? 0 : differenceInSeconds

        set({lastRecordedTime: now.toISOString()})
        localStorage.setItem('lastRecordedTime', now.toISOString())

        set({timerInSeconds: get().timerInSeconds + differenceToAdd + 1})
        localStorage.setItem('timerInSeconds', (get().timerInSeconds + differenceToAdd + 1).toString())
    },

    isShowingTimer: () => {
        return get().bookId != null && get().readingSessionId != null
    },

    setBookId: (bookId: number) => {
        localStorage.setItem('bookId', bookId.toString())
        set({bookId})
    },
    setReadingSessionId: (readingSessionId: number) => {
        localStorage.setItem('readingSessionId', readingSessionId.toString())
        set({readingSessionId})
    },

    openModal: (bookId: number) => {
        set({isModalOpen: true})

        set({bookId: bookId})
        localStorage.setItem('bookId', bookId.toString())
    },
    closeModal: () => {
        set({isModalOpen: false})
    },

    openEndModal: () => {
        set({isEndModalOpen: true})
    },
    closeEndModal: () => {
        set({isEndModalOpen: false})
    },
}))

export default useReadingSessionStore