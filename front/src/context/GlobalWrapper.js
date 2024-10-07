
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create the context
export const GlobalContext = createContext();

// Wrapper Component for providing context
export default function Wrapper({ children }) {
    const [users , setUsers] =useState([])
    const FetchUsers = () => {
        axios.get('http://localhost:5000/api/users')
            .then(res => {
                setUsers(res.data)
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };
    const Search =(query)=>{
           axios.post(`http://localhost:5000/api/users/search?key=${query}`)
           .then(res => {
            setUsers(res.data)
        })
        .catch((err) => {
            console.log(err.response.data);
        });
    }

    return (
        <GlobalContext.Provider value={{ FetchUsers ,users,Search }}>
            {children}
        </GlobalContext.Provider>
    );
}