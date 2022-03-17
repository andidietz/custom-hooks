// Editted
import {useState} from 'react'
import axios from 'axios'

const useAxios = (url) => {
	const [state, setState] = useState([])

	const fetchData = async () => {
		const res = await axios.get(url)
		setState(data => [...data, res.data])
	}	
	  
	return [state, fetchData]
}

export default useAxios