import { fetcheRecipes } from "../services/api";
import {useEffect, useState} from "react"

const useFetchRecipes = (query) => {
    const [recipes,setRecipes] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {
        if(!query) return;

        const getRecipes = async () => {
            setLoading(true);
            setError(null);
            const data = await fetcheRecipes(query);
            setRecipes(data);
            setLoading(false);

        }
        
        getRecipes();
    },[query]);

    return {recipes,loading,error}

};

export default useFetchRecipes;