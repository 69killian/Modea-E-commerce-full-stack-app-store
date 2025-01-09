import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

export const revalidator = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
        <div className="overflow-hidden bg-black">
            <div className="py-2 animate-marquee flex whitespace-nowrap text-white">
                <div className="flex items-center mx-4">
                <span className="font-bold">Dépêchez-vous :</span>&nbsp; Jusqu&apos;à demain, profitez de -50 sur notre sélection d&apos;articles
                </div>
                <div className="flex items-center mx-4">
                <span className="font-bold">Dépêchez-vous :</span>&nbsp; Jusqu&apos;à demain, profitez de -50 sur notre sélection d&apos;articles
                </div>
                <div className="flex items-center mx-4">
                <span className="font-bold">Dépêchez-vous :</span>&nbsp; Jusqu&apos;à demain, profitez de -50 sur notre sélection d&apos;articles
                </div>
                {/* Duplicate content for smooth infinite scroll */}
                <div className="flex items-center mx-4">
                <span className="font-bold">Dépêchez-vous :</span>&nbsp; Jusqu&apos;à demain, profitez de -50 sur notre sélection d&apos;articles
                </div>
                <div className="flex items-center mx-4">
                <span className="font-bold">Dépêchez-vous :</span>&nbsp; Jusqu&apos;à demain, profitez de -50 sur notre sélection d&apos;articles
                </div>
            </div>
        </div>

      <Container>
        {/* Logo */}
        <div className="flex items-center justify-center pt-4 sm:pt-6 lg:pt-8 h-8">
          <Link href="/" className="">
            <p className="font-bold text-[35px]">MODEA</p>
          </Link>
        </div>

        {/* Navbar layout */}
        <div className="relative px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center sm:justify-between h-auto sm:h-20">
          {/* MainNav centered */}
          <div className="flex justify-center sm:flex-1 sm:ml-10 md:ml-12 mt-2">
            <MainNav data={categories} />
          </div>

          {/* NavbarActions below MainNav on small screens */}
          <div className="mt-2 sm:mt-0 sm:ml-auto">
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
