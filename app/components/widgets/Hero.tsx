import { motion } from "motion/react";

type HeroProps = {
    children: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
    return (
        <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            className="flex flex-col flex-wrap items-center justify-center gap-2"
        >
            {children}
        </motion.div>
    );
}

export default Hero;