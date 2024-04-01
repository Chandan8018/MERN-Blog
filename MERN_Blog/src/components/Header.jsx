import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { FcSearch } from "react-icons/fc";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-gray-100 border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg text-white">
          ThinkBig's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={FcSearch}
          className="hidden lg:inline text-2xl"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <FcSearch className="text-2xl" />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" color="gray" pill outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
