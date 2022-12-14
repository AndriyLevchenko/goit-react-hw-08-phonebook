import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Formik } from 'formik';
import schema from 'validation/validationContactForm';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  Input,
  FormWrap,
  Label,
  Button,
  Error,
} from 'components/ContactForm/ContactForm.styled';
import { Section } from 'components/UI/Section/Section.styled';

export const ContactForm = () => {
  const nameId = nanoid();
  const numberId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const hasContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (hasContact)
      return Notiflix.Notify.failure(`${name} is already in contacts`);

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Section>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormWrap autoComplete="off">
          <Label htmlFor={nameId}>
            Name
            <Input type="text" name="name" id={nameId} />
          </Label>
          <Error name="name" compononet="span" />
          <Label htmlFor={numberId}>
            Number
            <Input type="tel" name="number" id={numberId} />
          </Label>
          <Error name="number" compononet="span" />
          <Button type="submit">Add contact</Button>
        </FormWrap>
      </Formik>
    </Section>
  );
};
