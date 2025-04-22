import { IoMenu } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";

import useCartStore from "../../../store/Cart/Cart.store";

const Navbar = () => {
  const navigate = useNavigate();
  const [IsCardVisible, setIsCardVisible] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/";
  const { cartCountValue } = useCartStore();

  useEffect(() => {
    const data = localStorage.getItem("productIds");
    const array = JSON.parse(data || "[]");
    setCartCount(array.length);
  }, [cartCountValue]);
  
 return (
    <div className="relative">
      <div
        className={`h-14 w-full flex justify-between items-center fixed top-0 left-0 right-0 z-[100] backdrop-blur-lg  ${
          isHomePage ? "bg-red-200" : "bg-transparent"
        } md:px-12 px-4`}
      >
        <div>
          <Link
            to="/"
            className="text-black font-serif lg:text-3xl sm:text-2xl"
          >
            OMEG BAZAAR
          </Link>
        </div>
        <div>
          <NavLinks />
        </div>

        <div className="lg:gap-6 gap-4 flex ml-34 sm:ml-[24rem] md:ml-[32rem]">
          <button className="text-primary hover:opacity-80 transition-opacity relative">
            <p className="bg-red-600 w-4 h-4 rounded-full flex justify-center items-center  text-xs text-white absolute -top-1 left-4 ">
              {cartCount}
            </p>
            <BsCartPlus size={28} onClick={() => navigate("/cart")} />
          </button>
          <Link
            to="/login"
            className="text-primary hover:opacity-80 transition-opacity"
          >
            <FaUserPlus size={32} />
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          onClick={() => setIsCardVisible(true)}
          className="lg:hidden flex justify-center items-center text-color w-10 h-10 p-2 rounded-full hover:bg-gray-100"
        >
          <IoMenu size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isCardVisible={IsCardVisible}
        setIsCardVisible={setIsCardVisible}
      />
    </div>
  );
};

export default Navbar;
