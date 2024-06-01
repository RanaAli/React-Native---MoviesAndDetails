import {View, Text, ActivityIndicator} from 'react-native';
import {useEffect} from "react";
import {useState} from "react";
import {fetchGenre} from "../../data/dataSore/remote/InfrastructureDataStore";


export default function ({navigation}) {
    const [isLoading, setIsLoading] = useState(false);
    const [onSuccess, setOnSuccess] = useState(false);
    const [onError, setOnError] = useState('');

    useEffect(() => {
        fetchGenre(setIsLoading, setOnError)
            .then(navigation.navigate('MoviesList'));
    }, [])

    return (
        isLoading ?
            <View style={{
                flex: 1,
                backgroundColor: 'Red'
            }}>
                <ActivityIndicator visible={isLoading} size="large"/>
                <Text>Loading...</Text>
            </View>
            :
            onError !== '' ?
                <View style={{flex: 1, backgroundColor: 'yellow'}}>
                    <Text>{onError}</Text>
                </View>
                : <View style={{flex: 1,}}>
                    <Text>Success</Text>
                </View>

    );
}