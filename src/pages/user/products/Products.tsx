import { useCallback, useEffect, useState } from "react";
import ScreenHandler from "../../../components/wrappers/ScreenHandler";
import ProductCard from "./components/ProductCard";
import SearchAndFilter from "./components/SearchAndFilter";
import { useCategoryStore } from "../../../store/Cart/Product.store";
import { useQuery } from "@tanstack/react-query";
import { getProductsQuery } from "../../../services/queries";
import { Product } from "../../../types/Product";

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
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-pulse text-lg">Loading products...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-red-500">Error loading products. Please try again later.</div>
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
        <div className="w-full">
          <SearchAndFilter search={search} onSearchChange={handleSearchChange} />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Category Filter */}
          <div className="lg:w-1/4">
            <div className="w-full p-3 rounded-lg bg-white">
          
              <select
                id="category-select"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none" 
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
                <option value="sports">Sports</option>
                <option value="kitchen">Kitchen</option>
                <option value="toys">Toys</option>
                <option value="health">Health</option>
                <option value="books">Books</option>
              </select>
            </div>
          </div>

          {/* Product List */}
          <div className="lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-14">
                {filteredProducts.map((product: Product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="w-full py-12 flex flex-col items-center justify-center bg-gray-50 rounded-lg">
                <svg
                  className="w-16 h-16 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-700">No products found</h3>
             
              </div>
            )}
          </div>
        </div>
      </div>
    </ScreenHandler>
  );
};

export default Products;