import { LinkIcon } from "@heroicons/react/20/solid";
import { UserGroupIcon, HomeIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { link } from "fs";
import Link from "next/link";
import { ROUTES, PAGE_NAME } from "../../shared/constants/routes"
import styles from "./navLinks.module.scss"

const links = [
    { name: PAGE_NAME.HOME, href: ROUTES.HOME, icon: HomeIcon },
    { name: PAGE_NAME.BLOG_DETAILS, href: ROUTES.BLOG_DETAILS, icon: DocumentIcon },
    { name: PAGE_NAME.ABOUT, href: ROUTES.ABOUT, icon: UserGroupIcon }
]

const NavLinks = () => {
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
           >
                        <LinkIcon className="w-6" />
                        <p >{link.name}</p>
                    </Link>
                )

            })}

        </>
    )

}

export default NavLinks