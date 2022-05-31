import React, { useContext } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { View, Text, SafeAreaView, TextInput, FlatList, Modal } from 'react-native';
import { styles } from './index.styles';
import PokemonCardHome from '../../components/pokemonCardHome/index'
import { AuthContext } from '../../auth'
import { IDataPokemonRequestProps } from '../../auth'
const Home = ({ navigation, route }: any): JSX.Element => {
    const { data, endFlatList, loading } = useContext(AuthContext)
    const renderFlatList = (data: IDataPokemonRequestProps) => {
        const { results } = data
        return (
            <FlatList
                data={data.results}
                renderItem={({ item }) => <PokemonCardHome item={item} />}
                keyExtractor={item => item.name}
                numColumns={2}
                onEndReached={() => endFlatList()}
            />
        )
    }
    const [modalVisibility, setModalVisibility] = React.useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => setModalVisibility(oldVisibility => !oldVisibility)}
                style={styles.textInput}
            >
                <Text>Digite o Nome do pokemon</Text>
            </TouchableOpacity>
            <Modal style={styles.modalStyle}
                animationType="slide"
                visible={modalVisibility}
                onRequestClose={() => setModalVisibility(oldVisibility => !oldVisibility)}
                transparent={true}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}></View>
                <TouchableOpacity
                    style={{
                        height: 20,
                        width: '100%',
                        backgroundColor: 'red'
                    }}
                />
                <View style={{
                    marginTop: 'auto',
                    height: '90%',
                    paddingTop: 50,
                    justifyContent: "center",
                    flexDirection: "row",
                    backgroundColor: 'white'
                }}>
                    <TextInput style={styles.textInputModal} placeholder="Digite o nome do pokemon"></TextInput>
                </View>
            </Modal>
            {loading ? <ActivityIndicator size={20} color="#333" /> : renderFlatList(data)}
        </SafeAreaView>
    )
}





export default Home;