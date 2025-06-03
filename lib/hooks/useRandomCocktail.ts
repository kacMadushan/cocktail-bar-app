import { useEffect, useState } from "react";
import { Cocktail } from "@/types/cocktail";
import { getCocktail } from "../services/cocktailServices";

const useRandomCocktail = (count: number, refresh: boolean): [boolean, string | null, Cocktail[] | null] => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<Cocktail[] | null>(null);

    const fetchRandomCocktail = async () => {
        const drinksList = [];
        const ids = new Set<string>();

        try {
            setLoading(true);
            setError(null);
            while (drinksList.length < count) {
                const response = await getCocktail();
                const data = await response.data;
                const drink = data.drinks[0];

                if (!ids.has(drink.idDrink)) {
                    drinksList.push(drink);
                    ids.add(drink.idDrink);
                }
            }

            setResponse(drinksList);
            setLoading(false)
            setError(null)
        } catch (error) {
            setError((error as Error).message);
            setLoading(false)
            setResponse(null)
        }
    };

    useEffect(() => {
        fetchRandomCocktail();
    }, [count, refresh])
    return [loading, error, response];
};

export default useRandomCocktail;