import { Skeleton } from "@/components/ui/skeleton";

const ArticleLoadingPage = () => {
  return (
    <div className="prose prose-xl mx-auto">
      <h1 className="mb-4">
        <Skeleton className="h-16" />
      </h1>
      <p>
        <Skeleton className="w-36 h-10" />
      </p>
      <div className="mb-8">
        <Skeleton className="w-full h-[34rem]" />
      </div>
      <div className="mb-4 space-y-2">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Skeleton key={idx} className="w-full h-6" />
        ))}
        <Skeleton className="w-1/2 h-6" />
      </div>
      <div className="space-y-2">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Skeleton key={idx} className="w-full h-6" />
        ))}
        <Skeleton className="w-1/2 h-6" />
      </div>
    </div>
  );
};

export default ArticleLoadingPage;
