/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import myaxios from "../myaxios";
import WaterDropGrid from "../components/waterGrid";
import RevealAnimation from "../components/RevealAnimation";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await myaxios.get("/post/getPosts");

      setPosts(res.data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="">
      <div className="flex overflow-hidden flex-col gap-6 p-28  px-3 max-w-6xl mx-auto ">
        <div className="flex relative py-8  items-center">
          <div className="flex flex-col gap-6 z-10">
            <RevealAnimation>
              {" "}
              <h1 className="text-6xl  font-bold lg:text-8xl">
                Welcome to my <span className="text-teal-400"> Blog</span>
              </h1>
              <p className="text-gray-200 text-xs sm:text-sm">
                Here you'll find a variety of articles and tutorials on topics
                such as web development, software engineering, and programming
                languages.
              </p>
            </RevealAnimation>
          </div>
          <div className="   absolute right-0 ">
            <WaterDropGrid />
          </div>
        </div>
        <div className=" z-10">
          <Link
            to="/search"
            className="text-xs sm:text-sm border rounded-md p-4 z-10 text-teal-500 font-bold hover:bg-teal-400 hover:text-white"
          >
            View all posts
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
