import urls from '../components/settings/urls'
import { booksitoutServer } from '../config/axios'

const getReadTime = (duration) => {
	return booksitoutServer
		.get(urls.api.statistics.get.readTime(duration))
		.then((res) => res.data)
}

const getStatisticsSummary = (year) => {
	return booksitoutServer
		.get(urls.api.statistics.get.summary(year))
		.then((res) => res)
}

const getLangaugeStatistics = () => {
	return booksitoutServer
	.get(urls.api.statistics.get.language)
	.then((res) => res.data)
}

const getCategoryStatistics = () => {
	return booksitoutServer
	.get(urls.api.statistics.get.category)
	.then((res) => res.data)
}

export { getReadTime, getStatisticsSummary, getLangaugeStatistics, getCategoryStatistics }
