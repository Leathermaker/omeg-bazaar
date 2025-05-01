import { useState } from "react";


import { FaBell } from "react-icons/fa";
import UserProfile from "../../../components/common/admin/UserProfile";

const Header: React.FC = () => {
  const [notifications ] = useState(1); // Example: 3 notifications

  return (
    <div className="relative flex items-center justify-end gap-4 p-4">
      {/* Notification Icon with Red Dot */}
      <div className="relative mr-40 top-5 cursor-pointer">
        <FaBell className="text-blue-600 w-10 h-10" /> {/* Blue Notification Bell */}

        {/* Red Dot for Unread Notifications */}
        {notifications > 0 && (
          <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 flex  items-center justify-center rounded-full">
            {notifications}
          </div>
        )}
      </div>

      {/* User Profile Component */}
      <UserProfile
        name="Jane Cooper"
        email="cooper02@example.com"
        role="Super admin"
        imageUrl="../../../../public/assets/user.png"
      />
    </div>
  );
};

export default Header;
