import React from 'react';
import { Button, View, Text } from 'react-native';

const Home = ({ navigation, route }: any) => {
    return (
        <View style={{ flex: 1 }}>
            <Button title="search" onPress={() => navigation.navigate("Search", { title: 'teste' })} />
            <Text>Salve</Text>
        </View>
    )
}

export default Home;