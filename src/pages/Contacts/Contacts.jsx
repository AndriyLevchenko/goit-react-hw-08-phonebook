import { Form } from "components/Form/Form";
import { ListContacts } from "components/ListContacts/ListContacts";
import { Filter } from "components/Filter/Filter";
import { Container } from "./Contacts.styled";
import Typography from '@mui/material/Typography';

export const ContactsView = () => {
    return (
        <Container>
            <Form />
            <Typography component="h1" variant="h5">
          Contacts
        </Typography>
            <Filter />
            <ListContacts />
        </Container>
    )
};