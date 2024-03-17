import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

const Posts = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }

  return (
    <section className="mt-6 mx-auto max-w-8xl">
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
