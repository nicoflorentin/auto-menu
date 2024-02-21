import axios from 'axios'
import { delay } from '../utilities/delay';
import { LOCAL_URL } from './const'

const getDishes = async (token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	try {
		const response = await axios.get(`${LOCAL_URL}/dish`, axiosConfig);
		const data = await response.data
		await delay()
		return data;
	} catch (error) {
		throw new Error(error.message)
	}
}
const editDish = async (body, token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	try {
		const response = await axios.put(`${LOCAL_URL}/dish`, { body }, axiosConfig)
		return response.data
	} catch (error) {
		throw new Error(error.message)
	}
}

const createDish = async (body, token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	await delay()
	try {
		const response = await axios.post(`${LOCAL_URL}/dish`, body, axiosConfig)
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
		await delay()
		// return await axios.get(`${LOCAL_URL}/dish/categories`, axiosConfig)
		return {
			data: [
				{
					value: "acompañamientos",
					label: "Acompañamientos"
				},
				{
					value: "bebidas",
					label: "Bebidas"
				},
				{
					value: "entradas",
					label: "Entradas"
				},
				{
					value: "platosPrincipales",
					label: "Platos principales"
				},
				{
					value: "postres",
					label: "Postres"
				},
			]
		}

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

export default { getDishes, createDish, editDish, deleteDish, getCategories, getOneDish }