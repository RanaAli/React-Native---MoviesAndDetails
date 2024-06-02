import {ActivityIndicator, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {API_HEADER, THUMB_BASE_URL} from "../../data/ApiConstants";
import {GENRE} from "../../data/dataSore/remote/InfrastructureDataStore";

export default function MoviesDetailsScreen({route}) {
    const {movie} = route.params;

    return (
        <ScrollView style={{
            flex: 1,
            padding: 16
        }}>
            {ImageAndTagsSection(movie)}

            {overviewSection(movie)}
        </ScrollView>
    )
}

function overviewSection(movie) {
    return <>
        <Text style={{
            fontWeight: "bold",
            marginTop: 16,
        }}>Overview</Text>
        <Text style={{marginTop: 8}}> {movie.title + " (" + movie.overview + ")"}</Text>
    </>;
}

function ImageAndTagsSection(movie) {
    return <View style={{flexDirection: "row"}}>
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
            > {movie.title}</Text>
            <Text style={{marginTop: 8}}> {"(" + movie.release_date + ")"}</Text>


            <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                {
                    movie.genre_ids.map((genre_id) => {
                            return <Text style={{
                                borderWidth: 1,
                                borderColor: "black",
                                margin:4,
                                padding:4
                            }}>{GENRE.find(value => value.id === genre_id).name}</Text>
                        }
                    )

                }
            </View>

        </View>
    </View>;
}