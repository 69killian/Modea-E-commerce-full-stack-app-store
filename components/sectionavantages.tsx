import React from 'react'
import Image from 'next/image'
import photo from '@/components/ui/images/sectionphoto.png';
import Link from 'next/link'; // Importation de Link

const Section = () => {
  return (
    <>
      <p className="font-bold text-[35px] sm:text-[55px] md:text-[75px] lg:text-[95px] xl:text-[105px]">
        QUALITÉ<span className='text-blue-600'>*</span> &gt; QUANTITÉ
      </p>
      <div className='flex flex-col xl:flex-row gap-x-20 items-center'>
        <Image src={photo} height={1000} width={700} alt='photo'/>
        <div>
          Entamez un voyage shopping qui redéfinit votre expérience avec des offres imbattables. Des sélections de premier choix aux économies incroyables, nous offrons une valeur inégalée qui nous distingue. <br /> <br />
          Naviguez dans un royaume de possibilités conçu pour satisfaire vos désirs uniques, surpassant les attentes les plus élevées. Votre aventure avec Modea est tout simplement exceptionnelle.
          <div className='flex gap-x-2 mt-5'>
            <Link href="https://modea-e-commerce-full-stack-app-store.vercel.app/category/79c2b383-515c-473d-9bd9-9204ca4cfd1c">
              <button className='p-2 border border-gray-600 hover:bg-blue-600 hover:text-white hover:border-white transition-all duration-300'>
                Découvrez Homme
              </button>
            </Link>
            <Link href="https://modea-e-commerce-full-stack-app-store.vercel.app/category/7dcc3934-d47d-4028-a365-933d75ffdb25">
              <button className='p-2 border border-gray-600 hover:bg-blue-600 hover:text-white hover:border-white transition-all duration-300'>
                Découvrez Femme
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
