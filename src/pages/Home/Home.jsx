import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { HomePageContainer, WelcomeMessage, LoginLink, TextContainer, Text } from './Home.styled';

export const HomePageView = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <main>
      <HomePageContainer>
      <WelcomeMessage> Welcome to Phonebook! </WelcomeMessage>
      {!isLoggedIn && <TextContainer> <p> Please,
        <LoginLink to="/register">
          sign up
        </LoginLink>
        or
        <LoginLink to="/login">
          sign in
        </LoginLink>
        to continue.
        </p>
      </TextContainer>}
      {isLoggedIn && <Text> You can manage your phonebook <LoginLink to="/contacts">
          here.
        </LoginLink> </Text>}
        </HomePageContainer>
    </main>
  );
};
