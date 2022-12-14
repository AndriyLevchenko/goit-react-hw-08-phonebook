import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/UI/Section/Section.styled';
import { Container } from './Register.styled';

export default function Register() {
  return (
    <Section>
      <Container>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </Container>
    </Section>
  );
}
