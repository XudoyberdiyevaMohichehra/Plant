import styled from "styled-components";


const checkPx = (type) => {
  return `${parseFloat(type)}px`;
};


export const Container = styled.button`
  background:  ${({ background }) => (background ? "var(--lightgreen) " : "var(--green)")};
  color: var(--white);
  font-size: ${({ fontSize }) => (fontSize ? "14px" : "18px")};
  padding: ${({ padding }) => (padding ? "12px 16px " : "16px 32px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? checkPx(borderRadius) : "4px"};
  border: ${({ border }) => (border ? border : "var(--border)")};
  cursor: pointer;
  transition: box-shadow 0.2s linear infinite;
  :active {
    transform: scale(0.97);
  }
  :hover{
    box-shadow: 0 0 10px #d7dbe0cd;
    cursor:pointer;
  }
  
    // opacity: ${({ opacity }) => (opacity ? "0.7" : '0.9')};
  
`;








































