import {API_GET_POPULAR, API_Token} from "./ApiConstants";

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': API_Token
    }
}

export const fetchMoviesList = async () => {
    await fetch(API_GET_POPULAR, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))

}