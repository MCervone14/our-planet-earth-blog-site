import FeaturedPosts from "@/components/Home/featured-articles";
import HomeCover from "@/components/Home/home-cover";
import RecentPosts from "@/components/Home/recent-articles";
import { getPostsMeta } from "@/lib/posts";

export default async function Home() {
  const articles = await getPostsMeta();
  if (!articles) return [];
  return (
    <>
      <HomeCover article={articles[0]} />
      <FeaturedPosts articles={articles.slice(1, 4)} />
      <RecentPosts articles={articles.slice(5, 11)} />
    </>
  );
}
