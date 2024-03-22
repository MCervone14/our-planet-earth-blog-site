import { Skeleton } from "@/components/ui/skeleton";

const ArticleLoadingPage = () => {
  return (
    <div className="prose prose-xl mx-auto">
      {Array.from({ length: 10 }).map((_, idx) => (
        <li
          key={idx}
          className="mt-4 text-2xl flex flex-col items-center justify-center lg:flex-row w-full gap-5"
        >
          <Skeleton className="w-full h-[300px] rounded mr-2" />
          <div className="flex flex-col w-full">
            <Skeleton className="w-full mb-2 h-12" />
            <Skeleton className="w-[100px] mb-2 h-2" />
            <div className="space-y-1 mb-5">
              {Array.from({ length: 9 }).map((_, idx) => (
                <Skeleton key={idx} className="w-full h-4" />
              ))}
              <Skeleton className="w-1/2 h-4" />
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ArticleLoadingPage;
