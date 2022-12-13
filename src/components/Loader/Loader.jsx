import { BallTriangle } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
    return (
        <Wrapper>
        <BallTriangle
            heigth="200"
            width="200"
            color='blue'
            ariaLabel='loading'
        />
        </Wrapper>
    );
};
