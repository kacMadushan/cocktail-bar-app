import Link from "next/link";
import { notFound } from "@/lib/utils/constants";
import Title from "./components/ui/Title";
import SectionBlock from "./components/widgets/SectionBlock";

const NotFound = () => {
    return (
        <SectionBlock wrapper="narrow">
            <div className="flex flex-col flex-wrap items-center justify-center gap-3 text-center">
                <Title title={notFound.title} />
                <p className="text-paragraph text-urgent">{notFound.description}</p>
                <Link
                    className="border border-secondary bg-primary px-4 py-3 text-paragraph uppercase text-secondary"
                    href="/"
                >
                    Go back home
                </Link>
            </div>
        </SectionBlock>
    );
}

export default NotFound;