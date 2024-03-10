import { useEffect } from 'react'
import { useToasterStore, toast } from 'react-hot-toast'

const ToastSettings = () => {
	const { toasts } = useToasterStore()
	useEffect(() => {
		toasts
			.filter((t) => t.visible)
			.filter((_, i) => i >= 1)
			.forEach((t) => toast.dismiss(t.id))
	}, [toasts])

	return <></>
}

export default ToastSettings
