export type Post = {
  id: string;
  author: Author;
  categories: Category[];
  publishDate: string;
  summary: string;
  title: string;
};

export type Author = {
  avatar: string;
  name: string;
};

export type Category = {
  id: number;
  name: string;
};
