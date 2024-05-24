import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {useEffect, useState} from 'react'
import {fetchMoviesList} from "./data/ApiService";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true)
        fetchMoviesList()
        setIsLoading(false)
    }, [])


    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator visible={isLoading} size='large'/>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>This is a The Movie and Details app</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
