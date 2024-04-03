import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function DashSideBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlPharse = new URLSearchParams(location.search);
    const tabFromUrl = urlPharse.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56" aria-label="Sidebar">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={"User"}
              className="cursor-pointer"
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={FaSignOutAlt} className="cursor-pointer">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
