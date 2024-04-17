import axios from 'axios'

const getUsers = () => {
	axios.get('http://localhost:3001/api/user')
		.then(res => console.log(res.data))
}

export default getUsers

