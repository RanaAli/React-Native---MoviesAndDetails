import {Text, View, Image, StyleSheet} from "react-native";
import {API_HEADER, THUMB_BASE_URL} from "../../data/ApiConstants";

export function MovieItemView(item) {
    return (
        <View
            style={{
                width: 120,
                alignItems: "stretch",
                marginVertical: 8,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffset: {x: 0, y: 10},
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 20,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 4,
                alignSelf: 'stretch',
                backgroundColor: 'white',
            }}>
            <Image
                style={{
                    height: 180,
                    flex: 1,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                }}
                source={{
                    uri: THUMB_BASE_URL + item.poster_path,
                    API_HEADER
                }}
            />

            <View style={{
                flex: 1,
                height: 28,
                alignSelf: "flex-start",
                marginTop: -16,
                marginStart: 8,
                borderRadius: 40,
                justifyContent: "center",
                padding: 4,
                borderColor: "black",
                borderWidth: 1,
                borderCurve: "circular",
                backgroundColor: "black"
            }}>
                <View style={{flexDirection: "row", alignSelf: "center"}}>
                    <Text style={{color: "white", fontSize: 10, marginBottom: 4}}>10</Text>
                    <Text style={{color: "white", fontSize: 6}}>%</Text>
                </View>
            </View>

            <View style={{paddingHorizontal: 8, height: 56}}>
                <Text numberOfLines={2} style={{fontSize: 12, fontWeight: "bold",}}>{item.title}</Text>
                <Text style={{fontSize: 10}}>{item.release_date}</Text>
            </View>
        </View>
    );
}