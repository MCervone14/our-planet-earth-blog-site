import { compileMDX } from "next-mdx-remote/rsc";
import Video from "@/components/video";
import CustomImage from "@/components/custom-image";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export const getPostByName = async (
  fileName: string
): Promise<ArticlePost | undefined> => {
  const res = await fetch(
    `https://raw.githubusercontent.com/mcervone14/our-planet-earth-articles/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2024-02-25",
      },
    }
  );

  if (!res.ok) {
    return undefined;
  }

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") {
    return undefined;
  }

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    categories: string[];
    image: string;
    excerpt: string;
  }>({
    source: rawMDX,
    components: { Video, CustomImage },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            rehypeHighlight,
            rehypePrettyCode,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const articlePostObj: ArticlePost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      categories: frontmatter.categories,
      image: frontmatter.image,
      excerpt: frontmatter.excerpt,
    },
    content,
  };

  return articlePostObj;
};

export const getPostsMeta = async (): Promise<Meta[] | undefined> => {
  const res = await fetch(
    "https://api.github.com/repos/mcervone14/our-planet-earth-articles/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) {
    console.error(
      `Failed to fetch data. Status: ${res.status}, Message: ${res.statusText}`
    );
    return undefined;
  }

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
};
