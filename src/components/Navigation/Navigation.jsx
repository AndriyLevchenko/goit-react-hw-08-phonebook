import { useSelector } from 'react-redux';
import { HomePageLink } from './Navigation.styled';
import { ContactsLink } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <HomePageLink to="/home" >
        Home page
      </HomePageLink>
      {isLoggedIn && (
        <ContactsLink to="/contacts">
          Contacts
        </ContactsLink>
      )}
    </div>
  );
};