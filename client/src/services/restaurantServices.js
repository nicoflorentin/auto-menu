import axios from 'axios'
import { LOCAL_URL } from './const'
import dishServices from './dishServices';

const getRestaurantByName = async (name) => {

	console.log('service rest executed');

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

export const restaurantServices = { getRestaurantByName }