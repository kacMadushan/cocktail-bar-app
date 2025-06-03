import { memo } from "react";
import { Cocktail } from "@/types/cocktail";
import Button from "../ui/Button";
import Thumbnail from "../ui/Thumbnail";

interface CardActionProps {
    cocktail: Cocktail;
    actionLabel?: string;
    onClick?: (cocktail: Cocktail) => void;
}

const CocktailCard = memo(({ cocktail, actionLabel, onClick }: CardActionProps) => {
    return (
        <div className="flex flex-col flex-wrap gap-3 p-2">
            <Thumbnail
                src={cocktail.strDrinkThumb}
                alt="Thumb"
                width={400}
                height={380}
            />
            <div className="text-center leading-tight text-secondary">
                <h5 className="text-header5 text-urgent">{cocktail.strCategory}</h5>
                <h4 className="font-heading text-header4">{cocktail.strDrink}</h4>
                {onClick && actionLabel && (
                    <div className="mt-2">
                        <Button
                            variant="primary"
                            size="default"
                            onClick={() => onClick(cocktail)}
                        >
                            {actionLabel}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
})

CocktailCard.displayName = "CocktailCard"

export default CocktailCard;