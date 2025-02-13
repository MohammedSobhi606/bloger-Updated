import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { toggleTheme } from "../store/slices/user/userAction";
import { toast } from "react-toastify";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  const handleThemeChange = () => {
    if (!user) {
      toast.error("please login first");
      return;
    }
    if (user.theme === "light") {
      dispatch(toggleTheme("dark"));
    } else {
      dispatch(toggleTheme("light"));
    }
  };
  if (error) {
    toast.error(error);
  }
  return (
    <Navbar className="border-b-2 bg-slate-200 shadow-md">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          El-Sahar
        </span>
        Blog😎
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={user.profilePicture} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">@{user.username}</span>
              <span className="block text-sm font-medium truncate">
                {user.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard/index"}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>

            <Dropdown.Divider />
            <Link to={"/dashboard/profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
          </Dropdown>
        ) : (
          <Link to="/login">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}{" "}
        <button
          className="size-12 border border-slate-700 rounded-full justify-center items-center hidden sm:flex"
          onClick={() => handleThemeChange()}
        >
          {user && user.theme === "light" ? (
            <FaMoon className="text-blue-500" />
          ) : (
            <FaSun className="text-yellow-300" />
          )}
        </button>
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
