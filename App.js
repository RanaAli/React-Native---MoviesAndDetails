import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react'
// import {fetchMoviesList} from "./data/ApiService";
import {API_HEADER, API_TOKEN} from "./data/ApiConstants";
import {MovieItemView} from "./presentation/list/MovieItemView";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
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

    return <NavigationContainer>{
        isLoading ? (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <ActivityIndicator visible={isLoading} size='large'/>
                    <Text>Loading...</Text>
                </View>
            </SafeAreaView>
        ) : (
            <SafeAreaView style={{flex: 1, backgroundColor: "grey"}}>
                <FlatList
                    style={{paddingVertical: 48, gap: 16}}
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
            </SafeAreaView>
        )
    }
    </NavigationContainer>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
