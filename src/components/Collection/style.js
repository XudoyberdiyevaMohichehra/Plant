import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  justify-content:center;
  margin-top:100px;
  `
export const Wrapper = styled.div`
 display:flex;
 justify-content:space-between;
 width:100%;
 max-width: 1440px;
 gap:62px;
`

export const Section = styled.div`
 
`
export const Header = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  color: #1A1A1A;


`
export const Title = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #4A4A4A;
  margin-top:40px;

`

export const ImgWrapper = styled.div`
   display:flex;
   gap:25px;
`
export const ImgBox = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   width: 220px;
   height: 220px;
   background:var(--lightBlue);
`

export const Img = styled.img`
   width: 173px;
   height: 163px;
`
