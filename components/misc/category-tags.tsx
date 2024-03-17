import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface CategoriesProps {
  id: string;
  className?: string;
}

const CategoriesTag = ({ id, className }: CategoriesProps) => {
  return (
    <Badge variant={"default"} className="my-2 p-0">
      <Link
        href={`/categories/${id}`}
        className={cn("whitespace-nowrap", className)}
      >
        {id.replace(/-/g, " ")}
      </Link>
    </Badge>
  );
};
export default CategoriesTag;
