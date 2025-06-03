"use client"
import { useState } from "react";
import useRandomCocktail from "@/lib/hooks/useRandomCocktail";
import { cocktail_count, hero } from "@/lib/utils/constants";
import Button from "./components/ui/Button";
import Title from "./components/ui/Title";
import CocktailCollection from "./components/widgets/CocktailCollection";
import Hero from "./components/widgets/Hero";
import SectionBlock from "./components/widgets/SectionBlock";
import Spinner from "./components/ui/Spinner";

const Home = () => {
    const [isRefresh, setIsRefresh] = useState<boolean>(false);
    const [loading, error, response] = useRandomCocktail(cocktail_count, isRefresh);

    // refresh cocktails
    const handleIsRefresh = () => {
        setIsRefresh((prevState) => !prevState)
    }

    if (loading) {
        return (<Spinner />)
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
                    <Title title={hero.home} />
                    <div>
                        <Button size="lg" onClick={handleIsRefresh}>Shake Cocktails</Button>
                    </div>
                </Hero>
            </SectionBlock>
            <SectionBlock wrapper="wide">
                <CocktailCollection collections={collections} />
            </SectionBlock>
        </>
    );
}

export default Home;