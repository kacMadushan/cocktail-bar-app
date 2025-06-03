"use client"
import { useContext } from "react";
import { FavouriteContext } from "@/lib/context/FavouriteContext";
import { hero } from "@/lib/utils/constants";
import Title from "../components/ui/Title";
import CocktailCollection from "../components/widgets/CocktailCollection";
import EmptyResults from "../components/widgets/EmptyResults";
import Hero from "../components/widgets/Hero";
import SectionBlock from "../components/widgets/SectionBlock";

const Favourites = () => {
    const { favourites, removeFavourite } = useContext(FavouriteContext)
    const collections = favourites ? favourites : [];
    return (
        <>
            <SectionBlock wrapper="narrow">
                <Hero>
                    <Title title={hero.favourites} />
                </Hero>
            </SectionBlock>

            <SectionBlock wrapper="wide">
                {collections && collections.length > 0 ? (
                    <CocktailCollection
                        actionLabel="Remove"
                        onClick={removeFavourite}
                        collections={collections}
                    />
                ) : (
                    <EmptyResults />
                )}

            </SectionBlock>
        </>
    );
}

export default Favourites;