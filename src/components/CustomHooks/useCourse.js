import {useState, useEffect} from 'react'
import axios from 'axios'

const useCourse = (id) => {
    const [state, setState] = useState({})
    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/ItachiMtz/json/cursos/${id}`)
        .then(res => setState(res.data)
        )
    }, [])
    return state
}
export default useCourse