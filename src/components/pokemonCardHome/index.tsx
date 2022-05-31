import React, { useState } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { styles } from './index.styles';
import axios from 'axios';
import { ActivityIndicator } from 'react-native'
import { SvgUri } from 'react-native-svg';
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
interface IPokemonDataProps {
    abilities: any[];
    forms: any[];
    base_experience: number;
    height: number;
    id: number;
    location_area_encounters: string;
    name: string;
    species: any;
    sprites: IDataSpritesProps;
    past_types: any[];
    url: string; // 
    types: any
}
interface IDataSpritesProps {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: IOtherDataSpritesProps;
}

interface IOtherDataSpritesProps {
    dream_world: any;
}
const PokemonCardHome = ({ item }: any): JSX.Element => {
    const [pokemonData, setPokemonData] = useState<IPokemonDataProps>()
    const { name, url } = item
    const loadPokemonData = async () => {
        try {
            const response = await axios.get(url)
            setPokemonData(response.data)
        } catch (_err) {
            console.log('erro');
        }
    }

    const [isLoaded] = useFonts({ Roboto_500Medium, Roboto_400Regular });

    const renderCardPokemon = () => {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.cardView}>
                    {isLoaded ? <Text style={{
                        fontFamily: 'Roboto_500Medium',
                        color: "black",
                        fontSize: 18,
                    }}>{name} {pokemonData?.types.map((type: any) => {
                        return <Text
                            style={{ fontFamily: 'Roboto_400Regular', fontSize: 12 }}
                        > {type.type.name}</Text>
                    })}</Text> : <ActivityIndicator />}

                    <SvgUri
                        width="70%"
                        height="70%"
                        uri={pokemonData?.sprites.other.dream_world.front_default}
                        style={{
                            alignSelf: "center"
                        }}
                    />
                </View>

            </View>
        )

    }
    React.useEffect(() => { loadPokemonData() }, []);

    return (
        <View style={styles.container} >
            {pokemonData !== undefined ? renderCardPokemon() : <ActivityIndicator />}
        </View >
    )
}


export default PokemonCardHome;