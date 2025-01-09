import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("e5d43e61-e8f7-47c7-a27e-955bb1aa16e7");

  return (
    
        <div className="space-y-10 pb-10">
            <Billboard data={billboard}/>
            <Container>
            <div className="flex flex-xol gap-x-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products}/>
            </div>
            </Container>

        </div>
    
  )
}

export default HomePage;