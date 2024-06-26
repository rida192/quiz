import PostsList from "@/components/PostsList";
import { fetchPosts } from "@/lib";

const Home = async () => {
  const posts = await fetchPosts();

  return (
    <div className="flex flex-col items-center min-h-screen gap-10 px-4">
      <div className="p-10 mt-20 bg-white bg-opacity-30 rounded-lg shadow-lg mb-8 w-full text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4  text-white">
          Welcome to the Home Page!
        </h1>
      </div>
      <h2 className="text-white">
        This website is about rendering a list of mock posts using Server Side
        Rendering (SSR) with Next.js
      </h2>

      <PostsList posts={posts} />
    </div>
  );
};

export default Home;
