import FeaturedIndividualFeatureCard from "./featured-individual-card";

interface FeaturedCardProps {
  articles: Meta[];
  className?: string;
}

const FeaturedCard = ({ articles }: FeaturedCardProps) => {
  return (
    <article className="w-full mt-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold text-4xl">
        Featured Articles
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <section className="col-span-1 row-span-2 relative">
          <FeaturedIndividualFeatureCard article={articles[0]} />
        </section>
        {articles.slice(1, 3).map((article) => (
          <section className="col-span-1 row-span-1 relative" key={article.id}>
            <FeaturedIndividualFeatureCard article={article} />
          </section>
        ))}
      </div>
    </article>
  );
};

export default FeaturedCard;
