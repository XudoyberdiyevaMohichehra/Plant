import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  justify-content:center;
  margin-top:128px;

  @media (max-width: 400px) {
  // padding: 40px 40px ;
 }
  `
export const Wrapper = styled.div`
 display:flex;
 justify-content:space-between;
 width:100%;
 max-width: 1440px;

 @media (max-width: 400px) {
  flex-direction:column;
}

`

export const Section = styled.div`
 width:50%;
 @media (max-width: 400px) {
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
`
export const Text = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #066F14;

  @media (max-width: 400px) {
  text-align:center;
}
`
export const Text2 = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 23px;
  color: #066F14;
  padding-bottom:20px;
  display:none;

  @media (max-width: 400px) {
  text-align:center;
  display:block;

}
`

export const Header = styled.h3`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #1A1A1A;
  width:90%;

  @media (max-width: 400px) {
  font-size: 35px;
  line-height: 45px;
  text-align:center;
  padding-top:20px;
}
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

   @media (max-width: 400px) {
  font-size: 16px;
  line-height: 140%;
  text-align:center;
}
}
`

export const Img = styled.img`
 width:446px;
 height:440px;
 position:relative;
 top:45px;
 left:65px;
 @media (max-width: 400px) {
  width:330px;
  height:330px;
  top:35px;
  left:50px;
}
`
export const Div = styled.div`
 width:380px;
 height:380px;
 position:relative;
`
export const Div2 = styled.div`
 width:450px;
 height:450px;
 background:var(--green);
 @media (max-width: 400px) {
  width:350px;
  height:350px;
}
`

