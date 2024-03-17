import ListItem from "@/components/posts/ListItem";
import { getPostsMeta } from "@/lib/posts";

const RecentArticles = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }

  const recentPosts = posts.slice(1, 11);

  return (
    <section className="mt-6 mx-auto max-w-8xl">
      <h1 className="text-4xl lg:text-8xl text-[steelblue] text-center mb-16">
        Recent Articles
      </h1>
      <ul className="w-full list-none p-0">
        {recentPosts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default RecentArticles;
