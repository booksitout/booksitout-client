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
    timerInSeconds: parseInt(localStorage.getItem('timerSeconds') || '0', 10),
    isTimerOn: localStorage.getItem('isTimerOn') === 'true',
    isModalOpen: false,
    lastRecordedTime: localStorage.getItem('lastRecordedTime'),

    startTimer: () => {
        const now = new Date();
        const lastRecordedTime = get().lastRecordedTime ? new Date(get().lastRecordedTime!) : new Date();
        const differenceInSeconds = Math.floor((now.getTime() - lastRecordedTime.getTime()) / 1000);

        set((state) => ({
            timerInSeconds: state.timerInSeconds + differenceInSeconds,
            isTimerOn: true,
            lastRecordedTime: now.toISOString(),
        }));

        localStorage.setItem('isTimerOn', 'true');
        localStorage.setItem('lastRecordedTime', now.toISOString());
    },

    resumeTimer: () => {
        set({isTimerOn: true})

        localStorage.setItem('isTimerOn', 'true')
        localStorage.setItem('lastRecordedTime', new Date().toISOString());
    },

    pauseTimer: () => {
        set({isTimerOn: false})

        localStorage.setItem('isTimerOn', 'false')
        localStorage.setItem('lastRecordedTime', new Date().toISOString());
    },

    resetTimer: () => {
        set({timerInSeconds: 0})
        set({isTimerOn: false})
        set({bookId: null})
        set({readingSessionId: null})
        set({lastRecordedTime: null})
        set({isModalOpen: false})
        set({isEndModalOpen: false})

        localStorage.removeItem('timerSeconds')
        localStorage.removeItem('isTimerOn')
        localStorage.removeItem('lastRecordedTime')
        localStorage.removeItem('bookId')
        localStorage.removeItem('readingSessionId')
    },

    incrementTimer: () => {
        if (!get().isTimerOn) return

        const now = new Date()
        set((state) => {
            const newTimerInSeconds = state.timerInSeconds + 1;
            localStorage.setItem('timerSeconds', newTimerInSeconds.toString());
            localStorage.setItem('lastRecordedTime', now.toISOString());
            return {
                timerInSeconds: newTimerInSeconds,
                lastRecordedTime: now.toISOString(),
            };
        });
    },

    isShowingTimer: () => {
        return get().bookId != null && get().readingSessionId != null
    },

    openModal: (bookId: number) => {
        set({isModalOpen: true})
        set({bookId: bookId})
        localStorage.setItem('bookId', bookId.toString())
    },

    closeModal: () => {
        set({isModalOpen: false})
    },

    bookId: localStorage.getItem('bookId') ? parseInt(localStorage.getItem('bookId')!, 10) : null,
    readingSessionId: localStorage.getItem('readingSessionId') ? parseInt(localStorage.getItem('readingSessionId')!, 10) : null,
    setBookId: (bookId: number) => {
        localStorage.setItem('bookId', bookId.toString())
        set({bookId})
    },
    setReadingSessionId: (readingSessionId: number) => {
        localStorage.setItem('readingSessionId', readingSessionId.toString())
        set({readingSessionId})
    },

    isEndModalOpen: false,
    openEndModal: () => {
        set({isEndModalOpen: true})
    },
    closeEndModal: () => {
        set({isEndModalOpen: false})
    },
}))

export default useReadingSessionStore