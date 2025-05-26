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
