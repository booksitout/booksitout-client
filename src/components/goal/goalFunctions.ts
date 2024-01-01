import urls from '../settings/urls'
import utils from '../../functions/utils'
import { booksitoutServer } from '../../config/axios'

const getGoalList = (duration = 5) => {
	return booksitoutServer
		.get(urls.api.goal.get.duration(duration))
		.then((res) => res.data)
}

const getGoal = (year) => {
	return booksitoutServer
		.get(urls.api.goal.get.year(year))
		.then((res) => res)
}

const addGoal = (year, goal) => {
	return booksitoutServer
		.post(urls.api.goal.add(year, goal), null)
		.then((res) => res.status.toString().startsWith('2'))
}

const deleteGoal = (year) => {
	return booksitoutServer
		.delete(urls.api.goal.delete(year))
		.then((res) => res.status.toString().startsWith('2'))
}

export { getGoal, addGoal, deleteGoal, getGoalList }
