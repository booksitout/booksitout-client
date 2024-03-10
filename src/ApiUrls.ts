// @ts-ignore
class ApiUrls {
	static BASE = process.env.REACT_APP_API_URL

	static User = class {
		static Public = class {
			static GET = ''
		}

		static Login = class {
			static POST = ''
		}
	}

	// use q to add query, source to add source
	static Search = class {
		static AutoComplete = class {
			static GET = ''
		}

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

export default ApiUrls
