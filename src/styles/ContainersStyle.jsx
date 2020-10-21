import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 5rem 5rem 2rem 5rem;
  padding-right:7rem;
  padding-left:7rem;
  @media only screen and (max-width: 1000px) {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
`;

export const DetailsContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  border-radius: 1em;
  margin: 2rem 5rem 2rem 5rem;
  padding-right:7rem;
  padding-left:7rem;
  -webkit-box-shadow:0px 4px 4px #757575;
  -moz-box-shadow:0px 4px 4px #757575;
  box-shadow:0px 4px 4px #757575;
  @media only screen and (max-width: 768px) {
    margin: 5rem 1rem 1rem 1rem;
    padding: 1rem 1rem 1rem 1rem;
  }
`;

export const TableContainer = styled.div`
  @media only screen and (max-width: 768px) {
    margin-top:20px;
  }
`;