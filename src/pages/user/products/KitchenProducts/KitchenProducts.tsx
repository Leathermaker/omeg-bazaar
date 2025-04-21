import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cosmetic, juicer } from "../../../../constants/imagePath";
import { useEffect, useRef, useState } from "react";

import Button from "../../../../components/common/Button";

const KitchenProducts = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const Products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "This is product 1",
      image: juicer
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "This is product 2",
      image: juicer
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      description: "This is product 3",
      image: cosmetic
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      description: "This is product 4",
      image: juicer
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      description: "This is product 5",
      image: juicer
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      description: "This is product 5",
      image: juicer
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      description: "This is product 5",
      image: juicer
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      description: "This is product 5",
      image: juicer
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      description: "This is product 5",
      image: juicer
    }
  ];
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

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
      container.addEventListener("scroll", checkScrollPosition);

      // Initial check
      checkScrollPosition();

      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, []);
  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="h-auto w-full  relative">
      <div className="flex justify-between items-center p-4">
        <h1 className="lg:text-3xl sm:text-xl font-semibold text-primary">
          Kitchen Products
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
          className="flex overflow-x-auto scroll-smooth py-4 gap-6 px-1"
          style={{ scrollbarWidth: "none" }}
        >
          {Products.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-white lg:p-4 p-10 rounded-lg shadow-md flex-shrink-0 w-72 h-[18rem] hover:shadow-lg justify-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-48 h-38 p-4 object-cover mx-auto"
              />
              <h2 className="text-xl font-semibold mt-2 text-start">
                {item.name}
              </h2>
              <p className="text-gray-600 text-start">{item.description}</p>
              <p className="text-amber-600 font-bold text-start">
                ${item.price}
              </p>
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

export default KitchenProducts;
