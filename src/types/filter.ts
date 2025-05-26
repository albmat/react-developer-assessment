export type FiltersProps = {
  setSelectedCategories: (filters: FilterItem[]) => void;
  selectedCategories: string[];
  items: FilterItem[];
};

export type FilterItem = string;
