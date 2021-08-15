import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";

const NavOptions = ({ navigation }) => {
    const data = [
        {
            id: 1,
            title: "Get a ride",
            image: "https://links.papareact.com/3pn",
            screen: "MapScreen",
        },
        {
            id: 2,
            title: "Order food",
            image: "https://links.papareact.com/28w",
            screen: "EatsScreen",
        },
    ];
    return (
        <View>
            <FlatList
                data={data}
                horizontal
                // keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        key={item.id}
                        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                        // onPress={() => navigation.navigate("MapScreen")}
                    >
                        <View>
                            <Image
                                source={{ uri: item.image }}
                                resizeMode="contain"
                                style={{ height: 120, width: 120 }}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>
                                {item.title}
                            </Text>
                            <AntDesign
                                name="arrowright"
                                size={24}
                                color="white"
                                style={[
                                    tw`p-2 bg-black rounded-full w-10 mt-4`,
                                ]}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default NavOptions;

const styles = StyleSheet.create({});
