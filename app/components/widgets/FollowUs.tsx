import Link from "next/link";
import { RiFacebookLine, RiInstagramLine,RiTwitterXLine } from "react-icons/ri";

const FollowUs = () => {
    return (
        <ul className="flex items-center gap-x-4 text-header5">
            <li className="size-9 border border-secondary bg-primary p-2 text-center text-urgent hover:bg-secondary hover:text-primary lg:size-10">
                <Link href="#">
                    <RiFacebookLine />
                </Link>
            </li>
            <li className="size-9 border border-secondary bg-primary p-2 text-center text-urgent hover:bg-secondary hover:text-primary lg:size-10">
                <Link href="#">
                    <RiTwitterXLine />
                </Link>
            </li>
            <li className="size-9 border border-secondary bg-primary p-2 text-center text-urgent hover:bg-secondary hover:text-primary lg:size-10">
                <Link href="#">
                    <RiInstagramLine />
                </Link>
            </li>
        </ul>
    );
}

export default FollowUs;