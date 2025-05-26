import { useMemo } from 'react';
import { Post } from '../types/post';

export function useFilter(posts: Post[], selectedCategories: string[]) {
  return useMemo(() => {
    if (selectedCategories.length === 0) return posts;

    return posts.filter((post) =>
      selectedCategories.every((selected) => post.categories.some((cat) => cat.name === selected)),
    );
  }, [posts, selectedCategories]);
}

export function useId(posts: Post[], id: string | undefined) {
  return useMemo(() => {
    if (!id) return null;

    return posts.filter((post) => post.id === id)[0];
  }, [posts, id]);
}
