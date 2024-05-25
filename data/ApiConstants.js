export const API_BASE_URL = 'https://api.themoviedb.org/3/'
export const API_SECURE_BASE_URL = 'https://image.tmdb.org/t/p/'

export const THUMB_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

export const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTcwM2UwZDBjNWQzZmVhNTM4YmEyMjU0NjMyMDBkMyIsInN1YiI6IjU3YmExMGQ1YzNhMzY4NDVkNTAwMWU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wj8VqhNq1_MJYwblRWyXovqxbPPhRksZPK5jUelBJI8'

export const API_GET_POPULAR = API_BASE_URL + 'movie/popular'

export const API_HEADER = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': API_TOKEN
    }
}

