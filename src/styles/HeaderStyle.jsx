import styled from 'styled-components';

export const Header = styled.div`
    position:fixed;
    top: 0;
    justify-content: center;
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width:100%;
    height: 2rem;
    padding: 1rem;
    transition: transform 0.3s ease-in-out;
    -webkit-box-shadow:0px 4px 4px rgba(0, 0, 0, 0.54);
    -moz-box-shadow:0px 4px 4px rgba(0, 0, 0, 0.54);
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.54);
`;