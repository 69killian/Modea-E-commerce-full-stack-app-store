import { Truck, Globe, Handshake } from "lucide-react"; 
import Container from "./ui/container";
import Image from "next/image";
import stripe from '@/components/ui/images/stripe.svg';
import mastercard from '@/components/ui/images/mastercard.svg';
import visa from '@/components/ui/images/visa-svgrepo-com.svg';
import paypal from "@/components/ui/images/paypal-color-svgrepo-com.svg";

const Footer = () => {
  return (
    <>
    
    <div className="border-t border-gray-200 py-6 mt-6">
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
            <Image  src={stripe} alt="Stripe Logo" width={40} height={10} />
          </div>
          {/* Visa */}
          <div className="flex items-center space-x-2">
            <Image src={visa} alt="Visa Logo" width={40} height={10}/>
          </div>
          {/* Mastercard */}
          <div className="flex items-center space-x-2">
            <Image src={mastercard} width={40} height={10} alt="Mastercard Logo" />
          </div>
          {/* PayPal */}
          <div className="flex items-center space-x-2">
            <Image src={paypal} width={25} height={10} alt="Paypal Logo"/> {/* PayPal icon from lucide-react */}
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
          <li><a href="/category/1" className="hover:underline">Homme</a></li>
          <li><a href="/category/2" className="hover:underline">Femme</a></li>
          <li><a href="/category/4" className="hover:underline">Accessoires</a></li>
          <li><a href="/category/2" className="hover:underline">Chaussures</a></li>
          <li><a href="/category/4" className="hover:underline">T-shirts</a></li>
        </ul>
      </div>


      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h3 className="text-lg font-bold mb-4 text-gray-500">FAQ</h3>
        <ul className="space-y-2 text-gray-500 text-sm">
          <li><a href="/category/1" className="hover:underline">Comment passer une commande ?</a></li>
          <li><a href="/category/2" className="hover:underline">Quels sont les délais de livraison ?</a></li>
          <li><a href="/category/4" className="hover:underline">Puis-je retourner un Produit ?</a></li>
          <li><a href="/category/2" className="hover:underline">Quels sont vos partenariats ?</a></li>
        </ul>
      </div>

      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h3 className="text-lg font-bold mb-4 text-gray-500">Personnel</h3>
        <ul className="space-y-2 text-gray-500 text-sm">
          <li><a href="/category/1" className="hover:underline">Modea Admin</a></li>
          <li><a href="/category/1" className="hover:underline">Vue d&apos;ensemble</a></li>
          <li><a href="/category/1" className="hover:underline">Boutique</a></li>
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54v-2.2c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.629.772-1.629 1.562v1.87h2.773l-.444 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.194 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.903 4.903 0 01-2.229-.616v.062a4.915 4.915 0 003.946 4.817 4.92 4.92 0 01-2.224.084 4.917 4.917 0 004.59 3.417A9.868 9.868 0 010 21.542a13.941 13.941 0 007.548 2.212c9.056 0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.425.415a4.92 4.92 0 011.75 1.152 4.92 4.92 0 011.152 1.75c.175.455.361 1.255.415 2.425.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.415 2.425a4.92 4.92 0 01-1.152 1.75 4.92 4.92 0 01-1.75 1.152c-.455.175-1.255.361-2.425.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.425-.415a4.92 4.92 0 01-1.75-1.152 4.92 4.92 0 01-1.152-1.75c-.175-.455-.361-1.255-.415-2.425C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.415-2.425a4.92 4.92 0 011.152-1.75 4.92 4.92 0 011.75-1.152c.455-.175 1.255-.361 2.425-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07c-1.302.06-2.212.271-3.014.573a6.941 6.941 0 00-2.546 1.678A6.941 6.941 0 00.875 4.938c-.302.802-.513 1.712-.573 3.014C.012 8.332 0 8.735 0 12c0 3.265.012 3.668.07 4.948.06 1.302.271 2.212.573 3.014a6.941 6.941 0 001.678 2.546 6.941 6.941 0 002.546 1.678c.802.302 1.712.513 3.014.573 1.28.058 1.683.07 4.948.07 3.265 0 3.668-.012 4.948-.07 1.302-.06 2.212-.271 3.014-.573a6.941 6.941 0 002.546-1.678 6.941 6.941 0 001.678-2.546c.302-.802.513-1.712.573-3.014.058-1.28.07-1.683.07-4.948 0-3.265-.012-3.668-.07-4.948-.06-1.302-.271-2.212-.573-3.014a6.941 6.941 0 00-1.678-2.546A6.941 6.941 0 0019.95.875c-.802-.302-1.712-.513-3.014-.573C15.668.012 15.265 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-8 3.999 3.999 0 010 8zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>

      
    </div>
    <div className="bg-white border-t bg-gray-300">
        <div className="mx-auto py-5 ">
            <p className="text-center text-sm text-black">
                &copy; 2023 Modea Store, Inc. All rights reserved - KillianCodes
            </p>
        </div>
    </div>
    </>
  )
}

export default Footer