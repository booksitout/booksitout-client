import React from 'react'

const MainRouteAd = () => {
    React.useEffect(() => {
		try {
			const script = document.createElement('script')
			script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6463692283021206'
			script.async = true
			script.crossOrigin = 'anonymous'
			document.body.appendChild(script)

			const pushScript = document.createElement('script')
			pushScript.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({});`
			document.body.appendChild(pushScript)
		} catch (err) {
			console.error(err)
		}
	}, [])

    return (
		<ins
			className="adsbygoogle"
			style={{ display: 'block' }}
			data-ad-client="ca-pub-6463692283021206"
			data-ad-slot="3108234554"
			data-ad-format="auto"
			data-full-width-responsive="true"
		></ins>
	)

}

export default MainRouteAd