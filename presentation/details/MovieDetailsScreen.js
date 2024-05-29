import {ActivityIndicator, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {API_HEADER, THUMB_BASE_URL} from "../../data/ApiConstants";

export default function MoviesDetailsScreen({route}) {
    const {movie} = route.params;

    return (
        <ScrollView style={{
            flex: 1,
            padding: 16
        }}>
            <View style={{flexDirection: "row"}}>
                <Image
                    style={{
                        height: 180,
                        width: 120
                    }}
                    source={{
                        uri: THUMB_BASE_URL + movie.poster_path,
                        API_HEADER
                    }}/>

                <View style={{
                    width: 0,
                    flexGrow: 1,
                    marginStart: 16,
                }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold"
                        }}
                    > {movie.title + " (" + movie.release_date + ")"}</Text>
                </View>
            </View>


            <Text style={{
                fontWeight: "bold",
                marginTop:16,
            }}>Overview</Text>
            <Text style={{marginTop:8}}> {movie.title + " (" + movie.overview + ")"}</Text>
        </ScrollView>
    )
}