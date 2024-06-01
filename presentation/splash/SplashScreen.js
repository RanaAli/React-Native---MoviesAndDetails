import {View, Text, ActivityIndicator} from 'react-native';
import {useEffect} from "react";
import {useState} from "react";
import {fetchGenre} from "../../data/dataSore/remote/InfrastructureDataStore";


export default function ({navigation}) {
    const [isLoading, setIsLoading] = useState(false);
    const [onSuccess, setOnSuccess] = useState(false);
    const [onError, setOnError] = useState('');

    useEffect(() => {
        fetchGenre(setIsLoading, setOnError, setOnSuccess).then(() => {
            if (onSuccess) navigation.navigate('MoviesList')
        })
    }, [onSuccess])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'Red'
            }}>

            {isLoading && <ActivityIndicator visible={isLoading} size="large"/>}

            {onError.trim() === '' && <Text style={{padding: 16}}>{onError}</Text>}

        </View>
    );
}



