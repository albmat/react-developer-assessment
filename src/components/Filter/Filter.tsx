import { FilterWrapper, FilterCatTag } from './Filter.styled';
import { FiltersProps } from '../../types/filter';

export default function Filter({
    setSelectedCategory,
    selectedCategory,
    items
}: FiltersProps) {
    return (
        <FilterWrapper
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}>
            <FilterCatTag key={'all'} $selected={selectedCategory.length === 0} onClick={() => setSelectedCategory([])} >All</FilterCatTag>
            {items.map((item: string, i) => {
                return <FilterCatTag $selected={selectedCategory.length > 0 && selectedCategory.includes(item)} key={i} onClick={() => setSelectedCategory((curr) => [...curr, item])} >{item}</FilterCatTag>
            })}
        </FilterWrapper>

    );
}