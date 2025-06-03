import { memo } from "react";

type SectionBlockProps = {
    wrapper: "wide" | "narrow";
    children: React.ReactNode;
}

const SectionBlock = memo(({ wrapper, children }: SectionBlockProps) => {
    return (
        <section className="py-2 lg:py-4">
            <div className="lg:wrapper mx-auto w-full px-4" data-type={wrapper}>
                {children}
            </div>
        </section>
    );
})

SectionBlock.displayName = "SectionBlock"

export default SectionBlock;