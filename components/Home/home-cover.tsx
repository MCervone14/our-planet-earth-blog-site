import Image from "next/image";

import CategoryTags from "../misc/category-tags";
import Link from "next/link";

interface HomeCoverProps {
  article: Meta;
}

const HomeCover = ({ article }: HomeCoverProps) => {
  return (
    <article className="flex relative flex-col h-[60vh]">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-white via-black to-black w-full z-0 opacity-40" />
      <Image
        src={`${process.env.NEXT_PUBLIC_GITHUB_IMAGE_URL}${article.image}`}
        alt={article.title}
        fill
        className="w-full h-full object-center object-cover rounded -z-10"
      />
      <div className="w-[50vw] m-6 p-6 flex flex-col items-start absolute bottom-0 z-10 text-secondary bg-slate-900 opacity-80">
        <Link href={`/articles/${article.id}`} className="my-3">
          <h1 className="font-bold text-lg md:text-2xl lg:text-4xl">
            <span className="bg-gradient-to-r line-clamp-4 md:line-clamp-none hover:underline">
              {article.title}
            </span>
          </h1>
        </Link>
        <p className="text-md md:text-lg lg:text-xl rounded-xl line-clamp-3 lg:line-clamp-none">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
};

export default HomeCover;
