import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/components/posts/ListItem";
import Link from "next/link";

export const revalidate = 0;

interface categoriesPageProps {
  params: {
    category: string;
  };
}

// export const getCategories = async () => {
//   const posts = await getPostsMeta();

//   if (!posts) return [];

//   const categories = new Set(posts.map((post) => post.categories).flat());

//   return Array.from(categories).map((category) => ({ categories }));
// };

export const generateMetadata = async ({
  params: { category },
}: categoriesPageProps) => {
  return {
    title: `Articles related to ${category}`,
  };
};

const CategoriesPostList = async ({
  params: { category },
}: categoriesPageProps) => {
  const posts = await getPostsMeta();

  if (!posts) return <p className="mt-10 text-center">Sorry, no posts</p>;

  const filteredPosts = posts.filter((post) =>
    post.categories.includes(category)
  );

  if (!filteredPosts.length)
    return (
      <div className="text-center">
        <p className="mt-10">
          Sorry, no posts related to <strong>{category}</strong>
          <Link href="/">Back to Home</Link>
        </p>
      </div>
    );

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">Articles related to {category}</h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {filteredPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
        <p className="mb-10">
          <Link href="/articles">Back to articles page</Link>
        </p>
      </section>
    </>
  );
};

export default CategoriesPostList;
