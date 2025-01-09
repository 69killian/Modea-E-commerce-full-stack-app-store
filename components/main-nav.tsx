"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { useRouter } from 'next/navigation';



interface MainNavProps {
    data: Category[]
};

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
            <Link
                key={route.href}
                href={route.href}
                className={cn(
                    "text-[13px] sm:text-[16px] md:text-[16px] lg:text-lg xl:text-lg font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                )}
            >
                {route.label}
            </Link>
        ))}
        <div className="text-[13px] sm:text-[16px] md:text-[16px] lg:text-lg xl:text-lg text-sm text-neutral-500 font-medium transition-colors hover:text-black">
            <button
                onClick={() => router.push("/faq")}
                className=""
            >
                FAQ
            </button>
        </div>

    </nav>
  )
}

export default MainNav;