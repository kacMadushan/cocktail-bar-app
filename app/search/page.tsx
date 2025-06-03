"use client"
import { useContext, useState } from "react";
import { FavouriteContext } from "@/lib/context/FavouriteContext";
import useSearchCocktail from "@/lib/hooks/useSearchCocktail";
import { hero } from "@/lib/utils/constants";
import { Cocktail } from "@/types/cocktail";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";
import Title from "../components/ui/Title";
import CocktailCollection from "../components/widgets/CocktailCollection";
import EmptyResults from "../components/widgets/EmptyResults";
import Hero from "../components/widgets/Hero";
import SectionBlock from "../components/widgets/SectionBlock";
import Spinner from "../components/ui/Spinner";

const Search = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [loading, error, response] = useSearchCocktail(searchQuery);
    const { favourites, addToFavourite } = useContext(FavouriteContext)

    // search form submit
    const onSubmitSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchQuery(searchText)
    }

    const handleAddToFavourite = (cocktail: Cocktail) => {
        // check exist cocktail in favourites 
        const existCocktail = favourites.some((item: Cocktail) => item.idDrink === cocktail.idDrink);
        if (!existCocktail) {
            addToFavourite(cocktail)
        }
    }

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return (
            <SectionBlock wrapper="narrow">
                <p className="text-paragraph text-urgent">{error}</p>
            </SectionBlock>
        )
    }

    const collections = response ? response : [];
    return (
        <>
            <SectionBlock wrapper="narrow">
                <Hero>
                    <Title title={hero.search} />
                    <form className="flex w-full flex-col items-center gap-3 lg:flex-row" onSubmit={onSubmitSearchForm}>
                        <InputField
                            placeholder="Search..."
                            value={searchText}
                            onChange={setSearchText}
                        />
                        <Button variant="primary" size="default">Search flavour</Button>
                    </form>
                </Hero>
            </SectionBlock>

            <SectionBlock wrapper="wide">
                {collections && collections.length > 0 ? (
                    <CocktailCollection
                        actionLabel="Add To Favourite"
                        onClick={handleAddToFavourite}
                        collections={collections}
                    />
                ) : (
                    <EmptyResults />
                )}

            </SectionBlock>
        </>
    );
}

export default Search;