import { Link, useLocation } from "react-router-dom";
import { Bag } from "../../../constants/imagePath";
import { ReactElement } from "react";
import { MdDashboard, MdOutlinePercent } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { Package } from "lucide-react";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

type OptionTypes = {
  href: string;
  title: string;
  Icon: ReactElement;
};

const Sidebar: React.FC = () => {
  const location = useLocation();

  const SidebarOptions: OptionTypes[] = [
    {
      title: "Dashboard",
      href: "dashboard",
      Icon: <MdDashboard  size={20}/>
    },
    {
      title: "Orders",
      href: "order",
      Icon: <TiShoppingCart size={20} />
    },
    {
      title: "Products",
      href: "products",
      Icon: <Package  size={20}/>
    },
    {
      title: "Customers",
      href: "customers",
      Icon: <LiaUserFriendsSolid size={22} />
    },
    {
      title: " Profile",
      href: "/profile",
      Icon: <FaUser size={20} />
    },

    {
      title: "Reports",
      href: "/reports",
      Icon: <FaSquarePollHorizontal size={20}/>
    },

    {
      title: "Discounts",
      href: "/discounts",
      Icon: <MdOutlinePercent size={20}/>
    }
  ];

  return (
    <div className="w-[18rem] bg-[#FFFFFF] shadow-lg h-full py-4">
      {/* Logo */}
      <div className="w-full flex justify-center mt-5">
      <h1 className="text-primary text-2xl font-bold">Omeg Bazaar</h1>
      </div>

      {/* Navigation Options */}
      <div className="flex flex-col space-y-4 mt-4 mb-4">
        {SidebarOptions.map((option) => {
          const isActive = location.pathname === option.href;

          return (
            <Link
              key={option.title}
              to={option.href}
              className={`flex items-center px-4 py-3 rounded-lg text-xs text-[#4D4D4D] font-medium transition-colors ${
                isActive
                  ? "bg-primary/80 text-white font-bold w-[14rem]"
                  : "hover:bg-gray-50 hover:text-primary text-[#333333] w-[14rem]"
              }`}
            >
              <div className="mr-6 flex items-center justify-center">
                {option.Icon}
              </div>
              <span className="text-md">{option.title}</span>
            </Link>
          );
        })}
      </div>

     <hr className="text-gray-300"/>

      {/* Settings & Support Section */}
      <div className="flex flex-col gap-2 mt-6">
        <Link
          to="/settings"
          className={`flex items-center px-4 py-3 rounded-lg text-xs font-medium text-[#4D4D4D] transition-colors ${
            location.pathname === "/settings"
              ? "bg-blue-100 text-blue-500 font-bold"
              : "hover:bg-gray-100 hover:text-blue-500 text-[#333333]"
          }`}
        >
          <div className="w-6 h-6 mr-4 flex items-center justify-center">
            <img src={Bag} />
          </div>
          <span>Settings</span>
        </Link>

        <Link
          to="/supportandfeedback"
          className={`flex items-center px-4 py-3 rounded-lg text-xs font-medium  text-[#4D4D4D] transition-colors ${
            location.pathname === "/supportandfeedback"
              ? "bg-blue-100 text-blue-500 font-bold"
              : "hover:bg-gray-100 hover:text-blue-500 text-[#333333]"
          }`}
        >
          <div className="w-6 h-6 mr-4 flex items-center justify-center">
            <img src={Bag} />
          </div>
          <span>Support & Feedback</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
