import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  margin-top:128px;
  `
export const Wrapper = styled.div`
 display:flex;
 justify-content:space-between;
 width:100%;
 max-width: 1440px;

`

export const Section = styled.div`
 width:50%;
`
export const Text = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #066F14;

`

export const Header = styled.h3`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #1A1A1A;
  width:90%;
`
export const Title = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #4A4A4A;
  padding-top: 16px ;
  width:90%;

`

export const Img = styled.img`
 width:446px;
 height:440px;
 position:relative;
 top:45px;
 left:65px;
`
export const Div = styled.div`
 width:500px;
 height:500px;
 position:relative;
`
export const Div2 = styled.div`
 width:450px;
 height:450px;
 background:var(--green);
 
`

export const Button = styled.button`
 width: 150px;
 height:44px;
 cursor:pointer;
 background:var(--lightgreen);
 border:none;
 border-radius:4px;
 color:white;
 font-size:16px;
  :active {
     transform: scale(0.97);
   }
   :hover{
     box-shadow: 0 0 10px var(--lightgreen);
     cursor:pointer;
  }
`
