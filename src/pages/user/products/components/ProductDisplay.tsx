import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Product } from "../../../../types/Product";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import { getProductsQuery } from "../../../../services/queries";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

const ProductDisplay = () => {
  const Base_url = import.meta.env.VITE_BASE_URL;
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { data: products } = useQuery(
    getProductsQuery(product?.category || "electronics")
  );

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${Base_url}/api/v2/product/getsingleproduct/${id}`,
          {
            headers: { "Content-Type": "application/json" }
          }
        );

        const productData = response?.data?.product;

        if (!productData) {
          setError("Product not found");
          return;
        }

        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [Base_url, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-14 flex justify-center items-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-14 flex justify-center items-center">
        <div className="text-lg">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left side - product images */}
          <ProductImage product={product} />
          {error && <p className="text-red-700">{error}</p>}

          {/* Right side - product details */}
          <ProductDetails product={product} />
        </div>
      </div>
      <div className="p-4 w-full mt-18">
        <h1 className="text-2xl font-bold mb-4 text-primary">Related Products</h1>
        <div className="col-span-12 lg:col-span-4  sm:col-span-6 flex  items-center">
          {products?.map((product: Product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
        {products?.length === 0 && (
          <p className="text-gray-500">No related products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
