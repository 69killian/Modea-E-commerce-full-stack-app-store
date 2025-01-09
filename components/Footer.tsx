import { Truck, Globe, Handshake } from "lucide-react"; 
import Container from "./ui/container";
import Image from "next/image";
import stripe from '@/components/ui/images/stripe.svg';
import mastercard from '@/components/ui/images/mastercard.svg';
import visa from '@/components/ui/images/visa-svgrepo-com.svg';
import paypal from "@/components/ui/images/paypal-color-svgrepo-com.svg";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="border-t border-gray-200 py-6">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Truck className="h-6 w-6 text-blue-600" />
              <span>Livraison sous 48h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <span>Présent dans toute la Francophonie</span>
            </div>
            <div className="flex items-center space-x-2">
              <Handshake className="h-6 w-6 text-blue-600" />
              <span>Partenaires Agréés</span>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gray-200">
        <Container>
          <div className="flex justify-center items-center space-x-20">
            {/* Stripe */}
            <div className="flex items-center space-x-2">
              <Image src={stripe} alt="Stripe Logo" width={40} height={10} />
            </div>
            {/* Visa */}
            <div className="flex items-center space-x-2">
              <Image src={visa} alt="Visa Logo" width={40} height={10} />
            </div>
            {/* Mastercard */}
            <div className="flex items-center space-x-2">
              <Image src={mastercard} width={40} height={10} alt="Mastercard Logo" />
            </div>
            {/* PayPal */}
            <div className="flex items-center space-x-2">
              <Image src={paypal} width={25} height={10} alt="Paypal Logo" />
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gray-200 text-black border-t">
        <div className="container mx-auto px-6 py-10">
          {/* Footer Content */}
          <div className="flex flex-wrap justify-between">
            {/* Categories Section */}
            <div className="w-full md:w-1/3 mb-6 md:mb-5">
              <h3 className="text-lg font-bold mb-4 text-gray-500">Catégories</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><Link href="/category/1" className="hover:underline">Homme</Link></li>
                <li><Link href="/category/2" className="hover:underline">Femme</Link></li>
                <li><Link href="/category/4" className="hover:underline">Accessoires</Link></li>
                <li><Link href="/category/2" className="hover:underline">Chaussures</Link></li>
                <li><Link href="/category/4" className="hover:underline">T-shirts</Link></li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4 text-gray-500">FAQ</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><Link href="/category/1" className="hover:underline">Comment passer une commande ?</Link></li>
                <li><Link href="/category/2" className="hover:underline">Quels sont les délais de livraison ?</Link></li>
                <li><Link href="/category/4" className="hover:underline">Puis-je retourner un Produit ?</Link></li>
                <li><Link href="/category/2" className="hover:underline">Quels sont vos partenariats ?</Link></li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4 text-gray-500">Personnel</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><Link href="/category/1" className="hover:underline">Modea Admin</Link></li>
                <li><Link href="/category/1" className="hover:underline">Vue d&apos;ensemble</Link></li>
                <li><Link href="/category/1" className="hover:underline">Boutique</Link></li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4 text-gray-500">Suivez-nous sur les Réseaux</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>Rejoignez-nous sur les réseaux sociaux pour ne rien manquer : actus, nouveautés, bons plans...</li>
              </ul>

              <ul className="flex space-x-4">
                <li>
                  <Link className="hover:text-gray-500" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54v-2.2c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.629.772-1.629 1.562v1.87h2.773l-.444 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.194 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.903 4.903 0 01-2.229-.616v.062a4.915 4.915 0 003.946 4.817 4.92 4.92 0 01-2.224.084 4.917 4.917 0 004.59 3.417A9.868 9.868 0 010 21.542a13.941 13.941 0 007.548 2.212c9.056 0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
                      </svg>
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-500" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.5 0h9A7.5 7.5 0 0124 7.5v9A7.5 7.5 0 0116.5 24h-9A7.5 7.5 0 010 16.5v-9A7.5 7.5 0 017.5 0zm0 2A5.5 5.5 0 002 7.5v9A5.5 5.5 0 007.5 22h9A5.5 5.5 0 0022 16.5v-9A5.5 5.5 0 0016.5 2h-9zm7.5 3a.5.5 0 010 1 .5.5 0 010-1zM12 5a7 7 0 11-.001 14.001A7 7 0 0112 5z" />
                      </svg>

                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-200 pl-[30px] sm:pl-[80px] md:pl-[70px] lg:pl-[86px] xl:pl-[138px]">
            <p className=" font-bold text-[35px] sm:text-[55px] md:text-[75px] lg:text-[95px] xl:text-[135px]">MODEA <span className='text-blue-600'>*</span></p>
      </div>
      

      <div className="text-center text-gray-500 text-xs py-4 border-t bg-gray-300">
        <p>&copy; 2025 Modea. Tous droits réservés. - KillianCodes</p>
      </div>
    </>
  );
}

export default Footer;
