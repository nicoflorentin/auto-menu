import axios from 'axios'
import { LOCAL_URL } from './const'
import { filterFalsyProperties } from '../utilities/filterFalsyProperties'

const getDishes = async (token, rawFilters) => {
	const filters = filterFalsyProperties(rawFilters)
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params: filters
	}

	try {
		const response = await axios.get(`${LOCAL_URL}/api/dish`, axiosConfig);
		const { data } = response;
		return data
	} catch (error) {
		throw new Error(error.message)
	}
}

const editDish = async (id, body, token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios.put(`${LOCAL_URL}/api/dish/${id}`, body, axiosConfig)
		console.log('response del servicio edit', response.data)
		return response.data
	} catch (error) {
		throw new Error('Edit dish error')
	}
}

const archiveDish = async (dish, token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const toEditData = {
		...dish,
		archived: !dish.archived,
	}

	try {
		const response = await axios.put(`${LOCAL_URL}/api/dish/${dish.id}`, toEditData, axiosConfig)
		return response.data
	} catch (error) {
		console.log(error.message)
		throw new Error('Archive dish error')
	}
}

const createDish = async (body, token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	try {
		const response = await axios.post(`${LOCAL_URL}/api/dish`, body, axiosConfig)
		return response.data
	} catch (error) {
		throw new Error('Create dish error')
	}
}

const deleteDish = async (id, token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		return await axios.delete(`${LOCAL_URL}/api/dish/${id}`, axiosConfig)
	} catch (error) {
		throw new Error(error.message)
	}
}

const getCategories = async () => {
	try {
		const response = await axios.get(`${LOCAL_URL}/api/categories`)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const getOneDish = async (id, token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios.get(`${LOCAL_URL}/api/dish/${id}`, axiosConfig)
		return response.data
	} catch (error) {
		throw new Error(error.message)
	}
}

export default { getDishes, createDish, editDish, deleteDish, getCategories, getOneDish, archiveDish }