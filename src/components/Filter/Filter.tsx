import { FilterWrapper, FilterCatTag } from './Filter.styled';
import { FiltersProps } from '../../types/filter';

export default function Filter({
    setSelectedCategories,
    selectedCategories,
    items
}: FiltersProps) {
    return (
        <FilterWrapper
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}>
            <FilterCatTag key={'all'} $selected={selectedCategories.length === 0} onClick={() => setSelectedCategories([])} >All</FilterCatTag>
            {items.map((item: string, i) => {
                return <FilterCatTag $selected={selectedCategories.length > 0 && selectedCategories.includes(item)} key={i} onClick={() => {
                    const newCats = [...selectedCategories, item]
                    setSelectedCategories(newCats)
                }} >{item}</FilterCatTag>
            })}
        </FilterWrapper>

    );
}