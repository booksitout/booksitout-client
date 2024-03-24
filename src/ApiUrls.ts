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
					return `/v1/login/oauth2/kakao?code=${code}`
				} else if (provider === 'NAVER')  {
					return `/v1/login/oauth2/naver?code=${code}&state=${state}`
				} else if (provider === 'GOOGLE')   {
					return `/v1/login/oauth2/google?code=${code}&scope=${scope}`
				} else if (provider === 'FACEBOOK')   {
					return `/v1/login/oauth2/facebook?code=${code}`
				} else {
					return ''
				}
			}
		}
	}

	// use q to add query, source to add source
	static Search = class {
		static AutoComplete = class {
			static GET = `/v1/book/search/auto-complete`
		}

		static Book = class {
			static GET = (q: string) => `/v1/book/search/by-query?q=${q}`
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
		static Single = (tipsId: number) => `/v1/tips/${tipsId}`
		static List = (page: number, size: number) => `/v1/tips?page=${page}&size=${size}`
	}

	static Library = class {
		static Near = (lat: number, long: number, radius: number) => `/v1/library/available-library/by-radius?lat=${lat}&long=${long}&radius=${radius}&size=10`

		static Membership = class {
			static GET_LIST = (page: number) => `/v1/library/membership?page=${page}`
			static GET= (libraryId: number) => `/v1/library/membership/${libraryId}`
			static POST = ``
			static PATCH = ``
			static DELETE = ``
		}

		static Search = class {
			static AUTO_COMPLETE = `/v1/library/search/auto-complete`
		}
	}

	static Book = class {
		static LastRead = () => `/v1/book/last`

		static Statistics = class {
			static Summary = (year: number) => `/v1/book/statistics/year/${year}`
			static ReadTime = (duration: number) => `/v1/statistics/read-time/${duration}`
		}

		static Goal = class {
			static GET = (year: number) => `/v1/book/goals/${year}`
		}
	}

	static Admin = class {
		static Tips = class {
			static List = () => ``
			static Single = (id: number) => `/v1/tips/admin/${id}`
			static Edit = (id: number) => `/v1/tips/admin/${id}`
		}
	}
}

export default ApiUrls
