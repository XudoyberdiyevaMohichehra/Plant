import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  justify-content:center;
  margin-top:164px;

   @media (max-width: 400px) {
   margin-top:134px;

 }
  `
export const Wrapper = styled.div`
 display:flex;
 justify-content:center;
 width:100%;
 max-width: 1440px;
`

export const Section = styled.div`
  display:flex;
  justify-content:space-between;
  width: 1040px;
  height: 320px;
  background:var(--aquaBlue);
  padding:60px;
  position:relative;

   @media (max-width: 400px) {
   width: 400px;
   height: 300px;
 }
`
export const Div2 = styled.div`
   width:60%;

   @media (max-width: 400px) {
      width:100%;
 }
`
export const Header = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #1A1A1A;

  @media (max-width: 400px) {
    font-size: 30px;
    line-height: 40px;
    width:100%;

 }
`
export const Title = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #4A4A4A;
  margin:30px 0;

  @media (max-width: 400px) {
   display:none;
 }
`


export const ImgBox = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
  
`

export const Img = styled.img`
   width: 262px;
   height: 356px;
   position:absolute;
   bottom: 0px;
   right:30px;
    @media (max-width: 400px) {
   display:none;
 }
`
export const Div3 = styled.div`
   display:flex;
   @media (max-width: 400px) {
     margin-top:30px;
 }
`
export const Input = styled.input`
   width: 340px; 
   height: 56px;
   padding: 8px 8px 8px 20px;
   background: #FFFFFF;
   border-radius:  4px 0 0 4px ;
   border:none;
   outline:none;
   font-size: 14px;

  
`
export const Div = styled.div`
   width: 100px;
   height: 56px;
   background: #FFFFFF;
   border-radius: 0 4px 4px 0;
   padding: 8px;
   
`
export const Button = styled.button`
   width: 80px;
   height: 40px;
   background: var(--green);
   border-radius: 4px;
   color:white;
   cursor: pointer;
   border:none;
   :active {
     transform: scale(0.97);
   }
   :hover{
     box-shadow: 0 0 10px var(--lightgreen);
     cursor:pointer;
  }   
`