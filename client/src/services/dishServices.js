import axios from 'axios'
import { delay } from '../utilities/delay';

const getDishes = async (token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	try {
		const response = await fetch('http://localhost:3001/api/dish', axiosConfig);
		const data = await response.json();
		await delay()
		return data;
	} catch (error) {
		console.error(error.message)
		throw error
	}
}

const createDish = async (body, token) => {
	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios.post('http://localhost:3001/api/dish', { body }, axiosConfig)
		return response.data
	} catch (error) {
		console.log(error.message)
	}
}

export default { getDishes, createDish }