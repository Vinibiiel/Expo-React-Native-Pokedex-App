import React, { createContext, useState } from 'react';
import axios from 'axios';
export const AuthContext = createContext({})
const loadData = async () => {
    await axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
        return response.data
    });
}

export const AuthProvider = ({ children }: any) => {

    const [data, setData] = useState({})
    React.useEffect(() => {
        setData(loadData())
    }, [])
    return (
        <AuthContext.Provider value={{ data: { ...data } }}>
            {children}
        </AuthContext.Provider>
    )
}