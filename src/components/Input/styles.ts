import styled from 'styled-components';

export const Container = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0.4rem;

  svg {
    display: block;
    margin: auto;
    color: #acacac;
    font-size: 1.1rem;
  }

  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1.rem;
    color: #333;

    ::placeholder {
      color: #aaa;
      font-weight: 500;
    }
  }
`;
