import Posts from "@/components/posts";

export const revalidate = 0;

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="text-[steelblue] my-16 text-center text-4xl lg:text-8xl ">
        Our Planet Earth Articles
      </h1>
      <Posts />
    </div>
  );
}
