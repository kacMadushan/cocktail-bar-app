"use client"
import { createContext, useState } from "react";
import { Cocktail } from "@/types/cocktail";

interface FavouriteContextType {
    favourites: Cocktail[];
    removeFavourite: (cocktail: Cocktail) => void;
    addToFavourite: (cocktail: Cocktail) => void;
}

export const FavouriteContext = createContext<FavouriteContextType | any>(undefined);

const FavouriteContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [favourites, setFavourites] = useState<Cocktail[]>([]);

    const removeFavourite = (cocktail: Cocktail) => {
        const removeItem = favourites.filter((item) => item !== cocktail);
        setFavourites(removeItem)
    }

    const addToFavourite = async (cocktail: Cocktail) => {
        setFavourites((prevFavourites) => [...prevFavourites, cocktail]);
    };

    return (
        <FavouriteContext.Provider value={{ favourites, removeFavourite, addToFavourite }}>
            {children}
        </FavouriteContext.Provider>
    );
}

export default FavouriteContextProvider;