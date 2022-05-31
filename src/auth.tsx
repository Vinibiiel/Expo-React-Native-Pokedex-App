import React, { createContext, useState } from 'react';
import axios from 'axios';
export const AuthContext = createContext({} as IContextProps)

interface IDataPokemon {
    name: string //Nome do pokemon
    url: string // Url para pegar as info do pokemon
}
interface IContextProps {
    data: IDataPokemonRequestProps;
    endFlatList(): Promise<void>;
    loading: boolean;
}
export interface IDataPokemonRequestProps {
    count: number; // Contagem de pokemon existentes
    // Paginação entre os pokemons:
    next: string // A proxima url para pegar os 20 pokemons seguintes
    previous: string // A url anterior para pegar os 20 pokemons anteriores
    results: IDataPokemon[]
}
export const AuthProvider = ({ children }: any) => {
    const [data, setData] = useState<IDataPokemonRequestProps>({} as IDataPokemonRequestProps)
    const [loading, setLoading] = useState<boolean>()
    const loadData = async (): Promise<void> => {
        setLoading(loading => true)
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        setData(response.data)
        setLoading(loading => false)
    }
    const endFlatList = async () => {
        const response = await axios.get(data.next)
        setData((oldData: IDataPokemonRequestProps) => {
            return {
                ...response.data, results: [...oldData.results, ...response.data.results]
            } as IDataPokemonRequestProps
        })
    }
    React.useEffect(() => {
        loadData()
    }, [])
    return (
        <AuthContext.Provider value={{ data, endFlatList, loading } as IContextProps}>
            {children}
        </AuthContext.Provider>
    )
}