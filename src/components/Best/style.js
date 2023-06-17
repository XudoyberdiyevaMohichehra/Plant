import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  justify-content:center;
  margin-top:100px;
  `
export const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 width:100%;
 max-width: 1440px;
 gap:30px;
`

export const Section = styled.div`
 display:flex;
 gap:24px;
`
export const Header = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #1A1A1A;
`
export const Title = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #4A4A4A;
  :hover{
    color:var(--green);
    text-shadow:0 0 5px var(--lightgreen);
  }
`

export const ImgWrapper = styled.div`
   display:flex;
   gap:25px;
   margin: 15px 0;

  @media (max-width: 600px) {
  flex-direction:column;
}
`
export const ImgBox = styled.div`
   padding:10px 32px;
   width: 270px;
   height: 283px;
   background:var(--lightBlue);
`
export const Box = styled.div`
   display:flex;
   justify-content:center;
   width: 200px;
`

export const Img = styled.img`
   width: 173px;
   height: 163px;
`
export const Text = styled.div`
   font-family: 'Nunito';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 28px;
   color: #1A1A1A;
   padding:8px 0;
   
`
export const Cost = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1A1A1A;
  padding:8px 0;
  
`
