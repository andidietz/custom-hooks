// Editted
import {useState} from 'react'
import axios from 'axios'

const useAxios = (url) => {
	const [state, setState] = useState(null)

	const fetchData = async (url) => {
		const res = await axios.get(url)
		console.log('res.data', res.data)
		setState(res.data)
	}	

	const handleClick = () => {
		fetchData(url)
	}
	  
	return {state, handleClick}
}

export default useAxios;