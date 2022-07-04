// fkVIY2GVlXfpJn24nxIKCWgahTx1HC8Mccs3d9cd
import React, {useState,useContext,useEffect} from "react"

export const AppContext = React.createContext()

export const ContextProvider = ({children})=> {

    const [Data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('The Godfather')
    const [loading,setLoading] = useState(false)

    const fetchApi = async ( )=>{
        setLoading(true);
        try{
            const resp = await fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=fkVIY2GVlXfpJn24nxIKCWgahTx1HC8Mccs3d9cd&search_value=${searchTerm}&search_type=1`)
            const data = await resp.json();
            setLoading(false);
            setData(data);
        } catch(error){
            console.log(error);
            setLoading(false)
        };
    };
    useEffect(()=>{
        fetchApi();
    },[searchTerm])

    if(searchTerm === ''){
        setSearchTerm('the Godfather')
    }
    return <AppContext.Provider value={{loading,setLoading ,searchTerm, Data,setSearchTerm}}>
        {children}
    </AppContext.Provider>
}
 export const UseGlobalContext = () => {
    return useContext(AppContext);
}