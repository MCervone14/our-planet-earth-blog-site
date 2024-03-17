import Link from "next/link";
import RecentIndividualCard from "./recent-individual-card";

interface RecentCardsProps {
  articles: Meta[];
}

const RecentArticles = ({ articles }: RecentCardsProps) => {
  return (
    <article className="w-full mt-32">
      <div className="flex w-full justify-between items-center">
        <h2 className="inline-block font-bold text-4xl">Recent Articles</h2>
        <Link
          href={"/articles"}
          className="whitespace-nowrap text-purple-700 hover:underline"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
        {articles.map((article, idx) => (
          <RecentIndividualCard key={idx} article={article} />
        ))}
      </div>
    </article>
  );
};

export default RecentArticles;
