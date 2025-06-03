import { useEffect, useState } from "react";
import { Cocktail } from "@/types/cocktail";
import { getCocktailByName } from "../services/cocktailServices";

const useSearchCocktail = (query: string): [boolean, string | null, Cocktail[] | null] => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<Cocktail[] | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const getSearchDrink = async () => {
            try {
                const response = await getCocktailByName(query);
                const data = await response.data;
                const drinks = data.drinks;
                if (drinks === "no data found") {
                    setResponse([])
                    setLoading(false)
                    setError(null)
                } else {
                    setResponse(drinks)
                    setLoading(false)
                    setError(null)
                }
            } catch (error) {
                setError((error as Error).message)
                setResponse(null)
                setLoading(false)
            }
        }
        getSearchDrink();
    }, [query])

    return [loading, error, response];
};

export default useSearchCocktail;