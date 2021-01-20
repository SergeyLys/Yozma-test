import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border-radius: 50px;
  border: 1px solid rgba(0,0,0, 0.5);
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  
  &:focus {
    outline: none;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  border: 1px solid rgba(0,0,0, 0.5);
  background-color: transparent;
  padding: 10px;
  border-radius: 10px;
  
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ResultList = styled.div`
  margin-top: 15px;
  width: 100%;
  
  span {
    display: inline-block;
    margin: 0 10px;
  }
`;
