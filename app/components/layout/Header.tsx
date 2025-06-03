"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/classNames";
import { routes } from "@/lib/utils/constants";

const Header = () => {
    const activePathName = usePathname();
    return (
        <header className="flex items-center">
            <nav className="mx-auto w-full px-4 lg:max-w-[--wrapper-max-width-wide]">
                <ul className="flex flex-wrap justify-center gap-2 text-paragraph font-light uppercase text-primary">
                    {routes.map((route) => (
                        <li
                            key={route.label}
                            className={cn(
                                "relative px-2 py-2 lg:px-6 hover:text-secondary",
                                {
                                    "text-secondary": activePathName === route.path,
                                    "text-urgent": activePathName !== route.path
                                }
                            )}
                        >
                            <Link href={{ pathname: route.path }}>
                                {route.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;