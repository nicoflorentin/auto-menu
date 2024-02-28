import axios from 'axios'
import { LOCAL_URL } from './const'
// import { delay } from '../utilities/delay';

const getDishes = async (token, filters) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params: filters
	};
	try {
		const response = await axios.get(`${LOCAL_URL}/dish`, axiosConfig);
		const { data } = response;
		// if (filters.archived) {
		// 	data.data = data.data.filter(element => !!element.archived)
		// 	return data
		// }
		// await delay();
		// data.data = data.data.filter(element => element.archived === false)
		return data;
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

	console.log('input al servicio ', id, body, token)
	try {
		const response = await axios.put(`${LOCAL_URL}/dish/${id}`, body, axiosConfig)
		console.log('response del servicio', response.data)
		return response.data
	} catch (error) {
		throw new Error('Edit dish error')
	}
}

const createDish = async (body, token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: body
	};
	// await delay()
	try {
		console.log('cuerpo en el servicio:', body)
		const response = await axios.post(`${LOCAL_URL}/dish`, axiosConfig)
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
		return await axios.delete(`${LOCAL_URL}/dish/${id}`, axiosConfig)
	} catch (error) {
		throw new Error(error.message)
	}
}

const getCategories = async (token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		// await delay()
		const response = await axios.get(`${LOCAL_URL}/categories`)
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
		const response = await axios.get(`${LOCAL_URL}/dish/${id}`, axiosConfig)
		return response.data
	} catch (error) {
		throw new Error(error.message)
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
		archived: !dish.archived
	}

	try {
		const response = await axios.get(`${LOCAL_URL}/dish/${dish.id}`, toEditData, axiosConfig)
		return response.data
	} catch (error) {
		throw new Error(error.message)
	}
}
export default { getDishes, createDish, editDish, deleteDish, getCategories, getOneDish, archiveDish }