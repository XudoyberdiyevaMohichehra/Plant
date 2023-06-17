import styled from "styled-components";
import NormalButton from "../Button";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  margin-top:30px;
  padding: 0 140px ;

   @media (max-width: 600px) {
   padding: 0 ;
   margin-top:10px;
    
}
  `
export const Wrapper = styled.div`
 display:flex;
 justify-content:space-between;
 width:100%;
 max-width: 1440px;

 @media (max-width: 600px) {
  flex-direction:column;  
  padding-left:15px;
}
`

export const Section = styled.div`
 
`
export const ImgDiv = styled.div`
 position: absolute;
 top:500px;
 left:550px;

 @media (max-width: 600px) {
  display:none;
 }
`
export const Header = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 92px;
  color: #1A1A1A;
  width:90%;
  margin-top: 90px;

  @media (max-width: 600px) {
  font-size: 40px;
  margin-top: 20px;
  line-height: 50px;
  text-align:center;
    
}

`
export const Title = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #4A4A4A;
  padding: 35px 0;
  width:85%;

  @media (max-width: 600px) {
  font-size: 16px;
  line-height: 160%;
  text-align:center;  
}

`
export const NormalButton1 = styled(NormalButton)`
  @media (max-width: 600px) {
  margin-left:130px;
`

export const PlusBoxes = styled.div`
  display:flex;
  gap:90px;
  margin-top:50px;

 @media (max-width: 600px) {
   margin-left:50px;
    gap:20px;  
}
`
export const PlusBox = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  gap:10px;
`
export const Number = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  color: #001B04;

  @media (max-width: 600px) {
  font-size: 30px;
  line-height: 40px;
 }
`
export const NumberTitle = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #1A1A1A;
`

export const Img = styled.img`
 @media (max-width: 600px) {
  width:370px;
  height:500px;
}
`
export const Div = styled.div`
 display:flex;
 align-items:center;
 position: absolute;
 top:195px;
 right:115px;
 @media (max-width: 600px) {
  display:none;
}
`
export const Div2 = styled.div`
 display:flex;
 align-items:center;
 position: absolute;
 top:295px;
 right:480px;
  @media (max-width: 600px) {
  display:none;
}
`
export const Div3 = styled.div`
 display:flex;
 align-items:center;
 position: absolute;
 top:695px;
 right:90px;
  @media (max-width: 600px) {
  display:none;
}
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
export const Line = styled.div`
 width: 100px;
 height:4px;
 background:var(--lightgreen);
`
export const Line3 = styled.div`
 width: 80px;
 height:4px;
 background:var(--lightgreen);
`
