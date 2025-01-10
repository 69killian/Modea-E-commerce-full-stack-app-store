import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Section from "@/components/sectionavantages";
import Button from "@/components/ui/button";
import Marquee from "@/components/marquee";
import Link from "next/link";

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("e5d43e61-e8f7-47c7-a27e-955bb1aa16e7");
    const billboard2 = await getBillboard("d9381f00-d115-4cff-98d0-16f29029c91b");

  return (
    
        <div className="space-y-10 pb-10">
            <Billboard data={billboard}/>
              <Container>
              <p className="font-bold text-[25px] sm:text-[45px] md:text-[65px] lg:text-[85px] xl:text-[95px]">NOS MEILLEURS PRODUITS<span className='text-blue-600'>*</span></p>
              <div className="flex flex-xol gap-x-8 px-4 sm:px-6 lg:px-8">
                  <ProductList title="" items={products}/>
              </div>
              <div className="gap-x-8 px-4 sm:px-6 lg:px-8 my-[250px]">
                <Section/>
              </div>
              </Container>

              <Marquee/>

              <div className="relative">
                <Billboard data={billboard2} />
                <div className="absolute top-[300px] sm:top-[420px] md:top-[240px] lg:top-[320px] xl:top-[420px] left-1/2 transform -translate-x-1/2">
                  <Button className="py-2">
                    <Link href="https://modea-e-commerce-full-stack-app-store.vercel.app/category/79c2b383-515c-473d-9bd9-9204ca4cfd1c">
                    Découvrez ici
                    </Link>
                  </Button>
              </div>
            </div>


        </div>
    
  )
}

export default HomePage;