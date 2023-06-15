import styled from "styled-components";


const checkPx = (type) => {
  return `${parseFloat(type)}px`;
};


export const Container = styled.button`
   background:  ${({ background }) => (background ? "var(--lightgreen) " : "var(--green)")};
   color: var(--white);
   font-size: ${({ fontsize }) => (fontsize ? "14px" : "18px")};
   padding: ${({ padding }) => (padding ? "12px 16px " : "16px 32px")};
   border-radius: ${({ borderRadius }) =>borderRadius ? checkPx(borderRadius) : "4px"};
   cursor: pointer;
   border:none;
   :active {
     transform: scale(0.97);
   }
   :hover{
     box-shadow: 0 0 10px var(--lightgreen);
     cursor:pointer;
  }
  
  
`;








































