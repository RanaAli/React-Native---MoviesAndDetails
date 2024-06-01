import {callApi} from "../../MyApiCallExecutor";

export let GENRE = {}

export const fetchGenre = async (onLoading, onError, onSuccess) =>
    callApi(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        onLoading,
        onError,
        (res) => {
            GENRE = res
            console.log("GENRE = " + GENRE.genres.length)
            onSuccess(true)
        }
    )
