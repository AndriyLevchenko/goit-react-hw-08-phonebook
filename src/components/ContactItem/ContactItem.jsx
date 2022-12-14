import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  Contact,
  Button,
  ContactWrap,
} from 'components/ContactItem/ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactWrap>
      <Contact id={id}>
        {name} : {number}
      </Contact>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Del
      </Button>
    </ContactWrap>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
