import React from 'react';
import { Button, View, Text } from 'react-native';

const Search = ({ navigation, route }: any) => {
    const payload = route.params;

    return (
        <View style={{ flex: 1 }}>
            <Button title="search" onPress={() => navigation.navigate("Home")} />
            <Text>SEARCH WINDOW</Text>
        </View>
    )
}

export default Search;

