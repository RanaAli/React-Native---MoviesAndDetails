import {API_GET_POPULAR, API_TOKEN} from "./ApiConstants";

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': API_TOKEN
    }
}

export const fetchMoviesList = async (setLoading, setError, setData) => {
    setLoading = true
    await fetch(API_GET_POPULAR, options)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setData = json
        })
        .catch(err => {
            console.log(err)
            setError(err)
        })
        .finally({
            setLoading: false
        })

}