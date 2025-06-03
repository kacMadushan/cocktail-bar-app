"use client"
import SectionBlock from "./components/widgets/SectionBlock";

const Error = () => {
    return (
        <SectionBlock wrapper="narrow">
            <div className="flex flex-col flex-wrap items-center justify-center gap-3">
                <h4 className="text-center text-header4 uppercase text-secondary">Something went wrong</h4>
                <p className="text-paragraph text-urgent">Please check again.</p>
            </div>
        </SectionBlock>
    );
}

export default Error