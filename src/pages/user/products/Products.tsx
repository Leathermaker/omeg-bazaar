import { useCallback, useEffect, useState } from "react";
import ScreenHandler from "../../../components/wrappers/ScreenHandler";
import ProductCard from "./components/ProductCard";
import SearchAndFilter from "./components/SearchAndFilter";
import { useCategoryStore } from "../../../store/product/Product.store";
import { useQuery } from "@tanstack/react-query";
import { getProductsQuery } from "../../../services/queries";
import { Product } from "../../../types/Product";
import Lottie from "lottie-react";
import loader from "../../../../public/assets/loader.json";
import ProductNotFound from "../../../../public/assets/notfounds.json";
import Category from "./components/Category";

const Products = () => {
  const [search, setSearch] = useState("");
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const categoryParam = selectedCategory ? selectedCategory : "all";

  const {
    data: products,
    isError,
    isLoading
  } = useQuery(getProductsQuery(categoryParam));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full min-h-[50rem] flex flex-col items-center justify-center   ">
        <Lottie
          animationData={loader}
          className=" w-[18rem] h-[18rem] lg:w-[25rem] lg:h-[25rem]"
        />
        <p className="text-4xl font-semibold ">Loading Products....</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-red-500">
          Error loading products. Please try again later.
        </div>
      </div>
    );
  }

  const filteredProducts = (products || []).filter((product: Product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScreenHandler>
      <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-6 space-y-6 md:space-y-8">
        {/* Search and Filter Section */}
        <div className="w-full  overflow-hidden">
          <SearchAndFilter search={search}  onSearchChange={handleSearchChange} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Category Filter */}
         <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

          {/* Product List */}
          <div className="lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-12  gap-4 sm:gap-6 justify-center items-center  ">
                {filteredProducts.map((product: Product) => (
                  <div className="col-span-12 lg:col-span-4  sm:col-span-6 flex justify-center items-center">
                    <ProductCard key={product._id} product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-fullflex flex-col items-center  ">
                <Lottie
                  animationData={ProductNotFound}
                  className=" w-[18rem] h-[18rem] lg:w-[25rem] lg:h-[25rem]"
                />
                <p className="text-4xl font-bold">Product Not Found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScreenHandler>
  );
};

export default Products;
