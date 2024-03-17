import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import CategoryTags from "@/components/misc/category-tags";

interface FeaturedIndividualCardProps {
  article: Meta;
}

const FeaturedIndividualCard = ({ article }: FeaturedIndividualCardProps) => {
  return (
    <div className="w-[50vw] h-[25vh] inline-block overflow-hidden rounded-xl">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-white via-black to-black w-full z-0 opacity-40 rounded" />
      <Image
        key={article.id}
        src={`${process.env.NEXT_PUBLIC_GITHUB_IMAGE_URL}${article.image}`}
        alt={article.title}
        fill
        className="w-full h-full object-center object-cover rounded -z-10"
      />
      <div className="absolute  bottom-0 p-10 z-20 w-full">
        {article.categories.map((category) => (
          <CategoryTags key={category} id={category} className="px-1" />
        ))}
        <Link
          href={`/articles/${article.id}`}
          className="my-3"
          key={article.id}
        >
          <h2 className="font-bold text-md md:text-xl lg:text-3xl">
            <span className="bg-gradient-to-r line-clamp-4 md:line-clamp-none text-white hover:underline">
              {article.title}
            </span>
          </h2>
        </Link>
        <span className="text-white text-base">
          {format(new Date(article.date), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default FeaturedIndividualCard;
