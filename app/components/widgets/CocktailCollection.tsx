import { useMemo } from "react";
import { Cocktail } from "@/types/cocktail";
import CocktailCard from "./CocktailCard";

type CocktailCollectionProps = {
    collections: Cocktail[];
    actionLabel?: string;
    onClick?: (cocktail: Cocktail) => void;
}

const CocktailCollection = ({ collections, actionLabel, onClick }: CocktailCollectionProps) => {
    const renderCocktailCollection = useMemo(() => {
        return collections.map((item) => (
            <CocktailCard
                key={item.idDrink}
                cocktail={item}
                actionLabel={actionLabel}
                onClick={onClick}
            />
        ))
    }, [collections, actionLabel, onClick])
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{renderCocktailCollection}</div>
    );
}

export default CocktailCollection;