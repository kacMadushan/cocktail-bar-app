import { copyright } from "@/lib/utils/constants";
import FollowUs from "../widgets/FollowUs";

const Footer = () => {
    return (
        <footer className="flex items-center">
            <div className="mx-auto w-full px-4 lg:px-6">
                <div className="flex flex-col flex-wrap items-center justify-center gap-2">
                    <FollowUs />
                    <p className="text-helperText text-urgent">{copyright}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;