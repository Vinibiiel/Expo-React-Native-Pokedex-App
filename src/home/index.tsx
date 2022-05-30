import React from 'react';
import { Button, View, Text } from 'react-native';
import BottomNav from '../../navigation/bottomNavigate';


const Home = ({ navigation, route }: any) => {
    return (
        <View>
            <Button title="search" onPress={() => navigation.navigate("Search", { title: 'teste' })} />
            <Text>Salve</Text>
            <BottomNav />
        </View>
    )
}

export default Home;