import { Dispatch, SetStateAction } from 'react';

export type FiltersProps = {
  setSelectedCategory: Dispatch<SetStateAction<FilterItem[]>>;
  selectedCategory: string[];
  items: FilterItem[];
};

export type FilterItem = string;
