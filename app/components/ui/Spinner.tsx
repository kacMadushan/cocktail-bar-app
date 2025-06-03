import { LucideLoaderCircle } from "lucide-react";
import SectionBlock from "../widgets/SectionBlock";

const Spinner = () => {
    return (
        <SectionBlock wrapper="narrow">
            <div className="flex flex-col flex-wrap items-center justify-center gap-2">
                <LucideLoaderCircle className="size-16 animate-spin text-secondary" />
            </div>
        </SectionBlock>
    );
}

export default Spinner;