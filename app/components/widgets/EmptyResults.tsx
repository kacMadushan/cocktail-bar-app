import { results } from "@/lib/utils/constants";

const EmptyResults = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <h4 className="text-center text-header4 uppercase text-secondary">{results.title}</h4>
            <p className="text-paragraph text-urgent">{results.message}</p>
        </div>
    );
}

export default EmptyResults;