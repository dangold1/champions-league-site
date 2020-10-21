import styled from 'styled-components';

export const PrimaryTitle = styled.h1`
    text-align: center;
    color: white;
    font-size: 1.5rem;
    margin: 1px;
    @media only screen and (max-width: 380px) {
        margin: 0;
        font-size: 1.5rem;
        text-align: left;
    }
`;

export const SecondaryTitle = styled.h2`
    text-align: center;
    color:#162E58;
    margin: 1rem;
`;

export const DeatilsTitle = styled.h5`
    text-align: center;
    color:#162E58;
    margin: 0.3rem;
    padding: 0.2rem;
`;