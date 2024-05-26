import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react'
// import {fetchMoviesList} from "./data/ApiService";
import {API_HEADER} from "../../data/ApiConstants";
import {MovieItemView} from "./MovieItemView";

export default function MoviesListScreen() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const fetchMoviesList = async () => {
        setIsLoading(true)
        await fetch("https://api.themoviedb.org/3/movie/popular", API_HEADER)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    useEffect(() => {
        // setIsLoading(true)
        fetchMoviesList()
        // setIsLoading(false)

    }, [])

    return (isLoading ? (
            <View style={styles.container}>
                <ActivityIndicator visible={isLoading} size='large'/>
                <Text>Loading...</Text>
            </View>
        ) : (
            <View style={{flex: 1, backgroundColor: "grey"}}>
                <FlatList
                    style={{gap: 16}}
                    numColumns={3}
                    data={data.results}
                    renderItem={({item}) => MovieItemView(item)}
                    columnWrapperStyle={{
                        gap: 8,
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        flex: 1,
                        alignItems: "stretch"

                    }}>
                </FlatList>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
