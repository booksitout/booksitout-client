import ApiUrls from '../../../ApiUrls'
import SearchHistoryResponse from '../../../common/response/SearchHistoryResponse'
import { booksitoutServer } from '../../../config/booksitoutServer'

class searchCache {
	static updateCache(key: string | null, query: string, url: string): void {
        if (key == null) {
            return
        }

        const historiesCache = localStorage.getItem(key)
        if (historiesCache != null)  {
            const historiesCacheParsed = JSON.parse(key)
    
            const currentQuery: SearchHistoryResponse = {
                id: 0,
                query: query,
                date: new Date(),
                url: url,
                imageUrl: '',
            }
    
            localStorage.setItem(key, JSON.stringify(currentQuery + historiesCacheParsed))
        }
	}

    static syncCacheWithServer(key: string): void {
        const historiesCache = localStorage.getItem(key)
        if (historiesCache != null)  {
            const historiesCacheParsed = JSON.parse(key).filter(history => history.id === 0)
            if (historiesCacheParsed.length !== 0) {
                booksitoutServer.post(ApiUrls.Search.BookHistory.Sync.POST, historiesCacheParsed)
            }
        }
    }
}

export default searchCache
