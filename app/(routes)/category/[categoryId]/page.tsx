import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
    params: Promise<{
        categoryId: string;
    }>,
    searchParams: Promise<{
        colorId: string;
        sizeId: string;
    }>
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {
    // Extraction des valeurs avec `await` pour `params` et `searchParams`
    const { categoryId } = await params;
    const { colorId, sizeId } = await searchParams;

    // Appels API
    const products = await getProducts({
        categoryId,
        colorId,
        sizeId
    });
    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(categoryId);

    return (
        <div className="bg-white">
            <Container>
                <Billboard
                    data={category.billboard}
                />
                
                <div className="px-4 sm:px-6 lg:px-8 pb-24 mt-[100px]">
                    <div className="lg:grid-cols-2 lg:gap-x-8 ">
                        <MobileFilters
                            sizes={sizes}
                            colors={colors}
                        />
                        
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Tailles"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Couleurs"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0 ">
                            {products.length === 0 && <NoResults />} 
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                                {products.map((item) => (
                                    <ProductCard 
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </Container>
        </div>
    );
}

export default CategoryPage;
