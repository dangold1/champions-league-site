import styled from 'styled-components';

export const Table = styled.table`
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border-radius: 1rem;
    overflow: hidden;
    width: 100%;
    text-align:center;
    -webkit-box-shadow:0px 4px 4px #757575;
    -moz-box-shadow:0px 4px 4px #757575;
    box-shadow:0px 4px 4px #757575;
    @media only screen and (max-width:768px){
        font-size:0.8rem;
    }
`;

export const TableHeader = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
    text-align:center;
    &:hover{cursor:auto;} 
`;

export const TableRow = styled.tr`
    padding: 8px;
    &:nth-child(even){background-color: #f2f2f2;}
    &:hover{background-color: #ddd; cursor:pointer;}
`;

export const TableCell = styled.td`
    border: 1px solid #ddd;
    padding: 1rem;
`;