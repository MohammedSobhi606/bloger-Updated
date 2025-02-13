import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/dashboarPages/Profile";
import CreatePost from "./pages/dashboarPages/CreatePost";
import DashPosts from "./pages/dashboarPages/DashPosts";
import UpdatePost from "./pages/dashboarPages/UpdatePost";
import DashUsers from "./pages/dashboarPages/DashUsers";
import PostPage from "./pages/PostPage";
import AdminRoutes from "./components/AdminRoutes";
import DashComments from "./pages/dashboarPages/Comments";
import DashboardComp from "./pages/dashboarPages";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import About from "./pages/About";
import Projects from "./pages/Projects";
import AdminLogin from "./pages/AdminLogin";
import { Spinner } from "flowbite-react";

function App() {
  // add loading indicator
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop /> */}

        <ToastContainer />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route element={<AdminRoutes />}>
                <Route path="index" element={<DashboardComp />} />
                <Route path="createpost" element={<CreatePost />} />
                <Route path="posts" element={<DashPosts />} />
                <Route path="users" element={<DashUsers />} />
                <Route path="comments" element={<DashComments />} />
                <Route path="update-post/:postId" element={<UpdatePost />} />
              </Route>
            </Route>
          </Route>
          <Route path="/post/:postSlug" element={<PostPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
