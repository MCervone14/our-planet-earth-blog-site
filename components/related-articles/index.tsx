import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

interface RelatedArticleProps {
  article: Meta;
}

const RelatedArticles = ({ article }: RelatedArticleProps) => {
  return (
    <section className="flex gap-4 items-center justify-center">
      <Image
        key={article.id}
        src={`${process.env.NEXT_PUBLIC_GITHUB_IMAGE_URL}${article.image}`}
        alt={article.title}
        width={300}
        height={600}
        className=" object-center object-cover rounded"
      />

      <div>
        <Link
          href={`/articles/${article.id}`}
          className="my-3"
          key={article.id}
        >
          <h2 className="text-sm md:text-lg lg:text-2xl">
            <span className="hover:underline">{article.title}</span>
          </h2>
        </Link>
        <span className="text-base">
          {format(new Date(article.date), "MMMM dd, yyyy")}
        </span>
        <p className="line-clamp-4 mt-2">{article.excerpt}</p>
      </div>
    </section>
  );
};

export default RelatedArticles;
