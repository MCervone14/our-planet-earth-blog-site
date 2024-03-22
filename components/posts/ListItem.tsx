import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

type ListItemProps = {
  post: Meta;
};

const ListItem = ({ post }: ListItemProps) => {
  const { id, excerpt, title, date } = post;
  return (
    <li className="mt-4 text-2xl flex flex-col items-center justify-center lg:flex-row w-full gap-5">
      <Image
        src={`https://raw.githubusercontent.com/MCervone14/our-planet-earth-articles/main${post.image}`}
        alt={post.id}
        width={550}
        height={350}
        className="rounded-md mr-2 h-[350px] min-w-[500px]"
      />
      <div className="flex flex-col space-y-4">
        <Link
          href={`articles/${id}`}
          className="text-3xl hover:text-black/70 hover:underline"
        >
          {title}
        </Link>
        <small className="">{format(new Date(date), "PPPP")}</small>
        <p className="flex-1 line-clamp-6">{excerpt}</p>
      </div>
    </li>
  );
};

export default ListItem;
