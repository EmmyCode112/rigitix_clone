// Sidebar.jsx

import React from "react";

// Import Font Awesome's core and icon components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icons from the free-solid-svg-icons package
import {
  faGauge, // for Dashboard
  faTicket, // for My Tickets
  faMoneyBillTransfer, // for Transaction History
  faHeart, // for My Likes
  faUserFriends, // for Following
  faCheckCircle, // for Confirm Design
  faGear, // for Settings
  faCircleQuestion, // for Help Center
  faUsers, // for Refer friends
  faRightFromBracket, // for Logout
} from "@fortawesome/free-solid-svg-icons";
import rigitixBlueLogo from "../../assets/icons/rigitix-blue-logo.png";
import userImage from "../../assets/icons/user-image.jpeg";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 shrink-0 h-screen bg-white border-r sticky top-0">
      <div className="py-1 px-4">
        <img src={rigitixBlueLogo} alt="Logo" />
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col mt-4 px-2 space-y-2 text">
        <div className="flex items-center bg-[#F87B0733] rounded-md px-2 py-2 cursor-pointer">
          <FontAwesomeIcon icon={faGauge} className="text-[#FE9B51] mr-2" />
          <span className="text-[#FE9B51] font-medium">Dashboard</span>
        </div>
        <div className="flex items-center cursor-pointer px-2 py-2 rounded">
          <FontAwesomeIcon icon={faTicket} className="text-gray-400 mr-3" />
          <span className="text-gray-900">My Tickets</span>
        </div>
        <div className="flex items-center cursor-pointer px-2 py-2 rounded">
          <FontAwesomeIcon
            icon={faMoneyBillTransfer}
            className="text-gray-400 mr-3"
          />
          <span className="text-gray-900">Transaction History</span>
        </div>
        <div className="flex items-center cursor-pointer px-2 py-2 rounded">
          <FontAwesomeIcon icon={faHeart} className="text-gray-400 mr-3" />
          <span className="text-gray-900">My Likes</span>
        </div>
        <div className="flex items-center cursor-pointer px-2 py-2 rounded">
          <FontAwesomeIcon
            icon={faUserFriends}
            className="text-gray-400 mr-3"
          />
          <span className="text-gray-900">Following</span>
        </div>
        <div className="flex items-center cursor-pointer px-2 py-2 rounded">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-gray-400 mr-3"
          />
          <span className="text-gray-900">Confirm Design</span>
        </div>
      </nav>

      {/* Spacer to push the bottom section down */}
      <div className="flex-1" />

      {/* Bottom Navigation */}
      <div className="px-3 pb-3 space-y-2 text">
        <div className="flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faGear} className="text-gray-400 mr-3" />
          <span className="text-gray-900">Settings</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="text-gray-400 mr-3"
          />
          <span className="text-gray-900">Help Center</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faUsers} className="text-gray-400 mr-3" />
          <span className="text-gray-900">Refer family & friends</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-3 py-3 border-t flex items-center justify-between">
        {/* Left: Profile info */}
        <div className="flex items-center">
          {/* You can replace the img src with your actual user avatar */}
          <img
            src={userImage}
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-3"
          />
          <div className="max-w-36">
            <p className="font-semibold text-sm">Tena Opregha</p>
            <p className="text-xs text-gray-500 truncate">
              tenagopregha@gmail.com
            </p>
          </div>
        </div>

        {/* Right: Logout Icon */}
        <button className="text-gray-400 hover:text-gray-600">
          <FontAwesomeIcon size="lg" icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
