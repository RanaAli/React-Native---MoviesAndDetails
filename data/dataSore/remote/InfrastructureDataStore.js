import {API_HEADER} from "../../ApiConstants";

export let GENRE = {}

export const fetchGenre = async (onLoading, onError) => {
    onLoading(true)
    console.log("Fetching Genre")
    await fetch("https://api.themoviedb.org/3/genre/movies/list?language=en", API_HEADER)
        .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                } else {
                   throw "response.statusText"
                }
            }
        ).then(json => {
            sleep(10000)
            console.log("on Json")
            console.log(json)
            GENRE = json
            console.log("OnSuccess")
        })
        .catch(err => {
            console.log("error = " + err)
            onError(err)
        })
        .finally(() => {
            onLoading(false)
            console.log("Fetching Genre finish")
        })
}

const processResponse = (response) => {
    if (response.status === 200) {
        return response.json();
    } else {
        return response.json().then((data) => {
            let error = new Error(response.status);
            error.response = data;
            error.status = response.status;
            throw error;
        });
    }
}