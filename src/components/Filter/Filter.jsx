import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { searchByName } from 'redux/contacts/slices/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Box, Label, InputSearch } from 'components/Filter/Filter.styled';
import { Section } from 'components/UI/Section/Section.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const inputID = nanoid();
  return (
    <Section>
      <Box>
        <Label htmlFor={inputID}>
          <InputSearch
            id={inputID}
            type="text"
            value={filter}
            name="filter"
            placeholder="Filter Phonebook by name"
            onChange={e => dispatch(searchByName(e.target.value))}
          />
        </Label>
      </Box>
    </Section>
  );
};
