import { Dispatch, SetStateAction } from 'react';

export type FiltersProps = {
  setSelectedCategories: Dispatch<SetStateAction<FilterItem[]>>;
  selectedCategories: string[];
  items: FilterItem[];
};

export type FilterItem = string;
