import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Product } from "../../../../types/Product";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

const ProductDisplay = () => {
  const Base_url = import.meta.env.VITE_BASE_URL;
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (!product) {
    return (
      <div className="min-h-screen w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-14 flex justify-center items-center">
        <div className="text-lg">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full  py-12 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex ">
          {/* Left side - product images */}
            <ProductImage product={product} />
          {error && <p className="text-red-700">{error}</p>}
          {loading && <p>Loading...</p>}

          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
