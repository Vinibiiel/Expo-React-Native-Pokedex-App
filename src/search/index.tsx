import React from 'react';
import { Button, View, Text } from 'react-native';
import BottomNav from '../../navigation/bottomNavigate'




const Search = ({ navigation, route }: any) => {
    const payload = route.params;

    return (
        <View>
            <Button title="search" onPress={() => navigation.navigate("Home")} />
            <Text>SEARCH WINDOW</Text>
            <BottomNav />
        </View>
    )
}

export default Search;

