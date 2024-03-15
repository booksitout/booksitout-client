// @ts-ignore
class ApiUrls {
	static BASE = process.env.REACT_APP_API_URL

	static User = class {
		static Public = class {
			static GET = ''
		}

		static Login = class {
			static POST = (
				provider: 'KAKAO' | 'NAVER' | 'GOOGLE' | 'FACEBOOK', 
				code: string | null = null ,
				state: string | null = null,
				scope: string | null = null,
			) => {
				if (provider === 'KAKAO')  {
					return `${ApiUrls.BASE}/v1/login/oauth2/kakao?code=${code}`
				} else if (provider === 'NAVER')  {
					return `${ApiUrls.BASE}/v1/login/oauth2/naver?code=${code}&state=${state}`
				} else if (provider === 'GOOGLE')   {
					return `${ApiUrls.BASE}/v1/login/oauth2/google?code=${code}&scope=${scope}`
				} else if (provider === 'FACEBOOK')   {
					return `${ApiUrls.BASE}/v1/login/oauth2/facebook?code=${code}`
				} else {
					return ''
				}
			}
		}
	}

	// use q to add query, source to add source
	static Search = class {
		static AutoComplete = class {
			static GET = `${ApiUrls.BASE}/v1/book/search/auto-complete`
		}

		static Book = class {
			static GET = (q: string) => `${ApiUrls.BASE}/v1/book/search/by-query?q=${q}`
		}

		static BookSource = class {
			static Library = class {
				static Online = class {
					static GET = ''
				}
	
				static Offline = class {
					static GET = ''
				}
			}
	
			static Subscription = class {
				static GET = ''
			}
	
			static MyBook = class {
				static GET = ''
			}

			static Used = class {
				static Online = class {
					static GET = ''
				}
		
				static Offline = class {
					static GET = ''
				}
			}
		}
	}

	static Tips = class {
		static Single = (tipsId: number) => `${ApiUrls.BASE}/v1/tips/${tipsId}`
		static List = (page: number, size: number) => `${ApiUrls.BASE}/v1/tips?page=${page}&size=${size}`
	}

	static Library = class {
		static Near = (lat: number, long: number, radius: number) => `${ApiUrls.BASE}/v1/library/available-library/by-radius?lat=${lat}&long=${long}&radius=${radius}&size=10`
	}

	static Admin = class {
		static Tips = class {
			static List = () => ``
			static Single = (id: number) => `${ApiUrls.BASE}/v1/tips/${id}`
			static Edit = (id: number) => `${ApiUrls.BASE}/v1/tips/${id}`
		}
	}
}

export default ApiUrls
