import Pagination from "@/components/Pagination";
import Posts from "@/components/posts";
import { getPostsMeta } from "@/lib/posts";

export const revalidate = 0;

interface HomeProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const posts = await getPostsMeta();
  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "10";

  const start = parseInt(page) * parseInt(per_page) - parseInt(per_page);
  const end = start + parseInt(per_page);

  const entries = posts.slice(start, end);

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-[steelblue] my-16 text-center text-4xl lg:text-8xl ">
        Our Planet Earth Articles
      </h1>
      <Posts posts={entries} />
      <Pagination
        numberOfPages={Math.ceil(posts.length / parseInt(per_page))}
        hasNextPage={end < posts.length}
        hasPreviousPage={start > 0}
      />
    </div>
  );
}
