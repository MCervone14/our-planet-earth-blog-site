"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

interface PaginationProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  numberOfPages: number;
}

const Pagination = ({
  hasNextPage,
  hasPreviousPage,
  numberOfPages,
}: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? 1;
  const per_page = searchParams.get("per_page") ?? 10;

  return (
    <div className="flex gap-2 justify-center items-center mt-16">
      <Button
        onClick={() =>
          router.push(
            `/articles/?page=${Number(page) - 1}&per_page=${per_page}`
          )
        }
        disabled={!hasPreviousPage}
        size={"lg"}
      >
        Previous Page
      </Button>
      <div className="text-lg mx-2">
        {page} / {numberOfPages}
      </div>
      <Button
        size={"lg"}
        disabled={!hasNextPage}
        onClick={() =>
          router.push(
            `/articles/?page=${Number(page) + 1}&per_page=${per_page}`
          )
        }
      >
        Next Page
      </Button>
    </div>
  );
};

export default Pagination;
