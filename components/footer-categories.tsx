"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Category } from "@/types";


interface MainNavProps {
    data: Category[]
};

const FooterNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }));

  return (
    <ul className="space-y-2 text-gray-500 text-sm">
        {routes.map((route) => (
            <li key={route.href}>
            <Link
                href={route.href}
                className="hover:underline"
            >
                {route.label}
            </Link>
            </li>
        ))}
    </ul>
  )
}

export default FooterNav;