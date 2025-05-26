export type Post = {
  id: number;
  author: Author;
  categories: Category[];
  publishedDate: string;
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
