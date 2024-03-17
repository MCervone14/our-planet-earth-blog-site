import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import RelatedArticle from "@/components/related-articles";

export const revalidate = 0;

interface ArticlesPageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params: { slug },
}: ArticlesPageProps) => {
  const post = await getPostByName(`${slug}.mdx`);

  if (!post) {
    return notFound();
  }

  return {
    title: post.meta.title,
  };
};

const ArticlesPage = async ({ params: { slug } }: ArticlesPageProps) => {
  const post = await getPostByName(`${slug}.mdx`);
  const articles = await getPostsMeta();

  if (!articles) return [];

  if (!post) notFound();

  const { meta, content } = post;

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

export default ArticlesPage;
