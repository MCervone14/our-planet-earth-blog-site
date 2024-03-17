import RelatedArticle from "@/components/related-articles";
import { Button } from "@/components/ui/button";
import { getPostByName, getPostsMeta } from "@/lib/posts";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";

const FeaturedArticle = async () => {
  const articles = await getPostsMeta();

  if (!articles) {
    return <p className="mt-10 text-center">Sorry, no articles available</p>;
  }

  const featuredPost = await getPostByName(`${articles[0].id}.mdx`);
  if (!featuredPost) notFound();

  const { meta, content } = featuredPost;

  const relatedArticles = articles.filter((article) => {
    return article.categories.some((category) =>
      meta.categories.includes(category)
    );
  });

  return (
    <article className="prose prose-xl mx-auto">
      <h1 className="mb-4">{meta.title}</h1>
      <p className="">{format(new Date(meta.date), "PPPP")}</p>
      <section>{content}</section>
      <Button className="prose-a:text-white prose-a:no-underline">
        <Link href="/articles">Back to Articles</Link>
      </Button>
      <section>
        <h3>Other Related Articles:</h3>
        {relatedArticles.slice(1, 4).map((article, idx) => (
          <RelatedArticle key={idx} article={article} />
        ))}
      </section>
    </article>
  );
};

export default FeaturedArticle;
