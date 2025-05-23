import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Button from "../../../../components/common/Button";
import { Product } from "../../../../types/Product";
import { getProductsByCategory } from "../../../../services/fetchers";
import ProductCard from "../components/ProductCard";

const BeautyProducts = () => {
  const [Products, setProducts] = useState<Product[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);

  
  useEffect(() => {
    const fetchElectronics = async () => {
      try {
        const data = await getProductsByCategory("fashion");
        setProducts(data);
      } catch (err) {
        console.error("Error fetching beauty products", err);
      }
    };

    fetchElectronics();
  }, []);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftBtn(scrollLeft > 0);
      setShowRightBtn(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
     
      const timeout = setTimeout(() => {
        checkScrollPosition();
      }, 100);

      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);

      return () => {
        clearTimeout(timeout);
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, [Products]);
  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="h-auto w-full  relative">
      <div className="flex justify-between items-center p-4">
        <h1 className="lg:text-3xl sm:text-xl  font-semibold text-primary ">
          Beauty Products
        </h1>
        <Button />
      </div>

      <div className="relative px-6">
        {showLeftBtn && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100 transition bg-white/80 backdrop-blur-sm border border-primary"
          >
            <FaChevronLeft className="w-4 h-4 text-black" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth py-4  px-1 gap-6"
          style={{ scrollbarWidth: "none" }}
        >
          {Products.map((product) => (
            <div className="flex-shrink-0 w-[300px] ">
            <ProductCard key={product._id} product={product} />
          </div>
          ))}
        </div>
        {showRightBtn && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100 transition bg-white/80 backdrop-blur-sm border border-primary"
          >
            <FaChevronRight className="w-4 h-4 text-black" />
          </button>
        )}
      </div>
    </div>
  );
};

export default BeautyProducts;
