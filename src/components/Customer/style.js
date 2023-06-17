import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  justify-content:center;
  margin-top:128px;

  @media (max-width: 400px) {
  margin-top:90px;
}
  `
export const Wrapper = styled.div`
 display:flex;
 justify-content:space-between;
 width:100%;
 max-width: 1440px;

 @media (max-width: 400px) {
  padding:0 40px;
  flex-direction:column;
}
`

export const Section = styled.div`
 
`

export const Header = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #1A1A1A;
  
   @media (max-width: 400px) {
  text-align:center;
  padding-bottom:10px;
  margin:0;
}
`
export const Title = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #4A4A4A;
  padding: 20px 0 40px 0;
  width:85%;

  @media (max-width: 400px) {
  display:none;
}

`
export const Title2 = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #FFFFFF;
  padding: 20px 0 40px 0;
  width:85%;
  display:none;
  
   @media (max-width: 400px) {
  display:block;
}

`

export const Img = styled.img`
@media (max-width: 400px) {
  padding-top:210px;
`
export const Div = styled.div`
  width: 647px;
  height:204px;
  background:var(--green);
  padding:30px;
  position: relative;
  position: absolute;
  
  @media (max-width: 400px) {
  width: 305px;
  height:204px;
}
`

export const Div2 = styled.div`
 display:flex;
 gap:10px; 
 
`
export const Text = styled.p`
 font-family: 'Nunito';
 font-style: normal;
 font-weight: 600;
 font-size: 18px;
 line-height: 25px;
 color: #FFFFFF;

`
export const Text2 = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #D9D9D9;
  padding-top:6px;
`
export const ArrowWrapper = styled.div`
  display:flex;
  width: 48px;
  height:24px;
  position: relative;
  top:-43px;
  left:568px;
  
  @media (max-width: 400px) {
    display:none;
}
`
export const ArrowDiv = styled.div`
  width: 24px;
  height:24px;
  background: #143B19;
  display:flex;
  align-items:center;
  justify-content:center;
  @media (max-width: 400px) {
    display:none;
}
`