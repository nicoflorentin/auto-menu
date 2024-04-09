import axios from 'axios'
import { LOCAL_URL } from './const'
import dishServices from './dishServices';

const getRestaurantByName = async (name) => {

	console.log('get restaurant by name service');

	try {
		const response = await axios.get(`${LOCAL_URL}/menu/${name}`,);
		const categories = await dishServices.getCategories()
		const { data } = response
		data.data[0].categories = categories.data
		console.log(data);
		return data
	} catch (error) {
		throw new Error(error.message)
	}
}

const getRestaurantById = async (id, token) => {

	console.log('get restaurant by ID service');

	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	try {
		const response = await axios.get(`${LOCAL_URL}/api/restaurant/${id}`, axiosConfig);
		const { data } = response
		console.log(data);
		return data
	} catch (error) {
		throw new Error(error.message)
	}
}

const editRestaurant = async (id, body, token) => {

	console.log('edit restaurant by ID service with body --->', body);

	const axiosConfig = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	try {
		const response = await axios.put(`${LOCAL_URL}/restaurant/edit/${id}`, body, axiosConfig);
		const { data } = response
		console.log(data);
		return data
	} catch (error) {
		throw new Error(error.message)
	}
}

export const restaurantServices = { getRestaurantByName, getRestaurantById, editRestaurant }