"use client";
import { Post } from "../lib/index";
import { motion } from "framer-motion";

const PostsList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col gap-20 p-10 overflow-hidden">
      {posts.map((post) => (
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: "all" }}
          transition={{ duration: 0.5 }}
          key={post.id}
        >
          <h2 className="text-lg md:text-2xl font-bold mb-4">
            Post {post.id}: {post.title}
          </h2>
          <p className="text-sm md:text-base">{post.body}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default PostsList;
