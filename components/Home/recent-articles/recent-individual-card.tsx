import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import CategoryTags from "@/components/misc/category-tags";

interface RecentIndividualCardProps {
  article: Meta;
}

const RecentIndividualCard = ({ article }: RecentIndividualCardProps) => {
  return (
    <section>
      <Image
        key={article.id}
        src={`${process.env.NEXT_PUBLIC_GITHUB_IMAGE_URL}${article.image}`}
        alt={article.title}
        width={500}
        height={500}
        className="aspect-[4/3] object-center object-cover rounded"
      />

      <div>
        {article.categories.map((category) => (
          <CategoryTags
            key={category}
            id={category}
            className="p-1 rounded-xl text-xs md:text-sm lg:text-md"
          />
        ))}
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

export default RecentIndividualCard;
