type Meta = {
  id: string;
  title: string;
  date: string;
  categories: string[];
  image: string;
  excerpt: string;
};

type ArticlePost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
