import React, { useContext } from 'react';
import { Button, View, Text, SafeAreaView, TextInput } from 'react-native';
import { styles } from './index.styles';

import { AuthContext } from '../../auth'

const Home = ({ navigation, route }: any): JSX.Element => {

    const [text, onChangeText] = React.useState("Useless Text");
    const { data } = useContext(AuthContext)
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                onChangeText={onChangeText}
                style={styles.textInput}
                placeholder="Digite o nome do Pokemon"
                value={data}
            />
        </SafeAreaView>
    )
}





export default Home;