import styled from 'styled-components';

export const Button = styled.button`
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
    margin: 1.5rem;
    padding: 0.5rem;
    border-radius:6px;
    -webkit-box-shadow:0px 4px 4px rgba(0, 0, 0, 0.54);
    -moz-box-shadow:0px 4px 4px rgba(0, 0, 0, 0.54);
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.54);
    width:200px;
    height:50px;
    outline: none;
    &:hover{
        cursor:pointer;
        background: #000428;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #004e92, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    };
    &:active{
        background: #0f0c29;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
`;