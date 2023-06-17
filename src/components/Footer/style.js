import styled from "styled-components";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";


export const Container = styled.div`
  display:flex;
  justify-content:center;
  margin-top:128px;
  `
export const Wrapper = styled.div`
 display:flex;
 justify-content:space-between;
 width:100%;
 max-width: 1440px;

  @media (max-width: 400px) {
   padding-left:20px;
  }
`

export const Section = styled.div`
 flex:1;
`
export const Div = styled.div`
 display:flex;
 gap:16px;

 @media (max-width: 400px) {
  flex-direction:column;
   padding-left:70px;

}
`
export const Div3 = styled.div`
//  flex:2;
//  display:flex;
//  justify-content:space-evenly;

 @media (max-width: 400px) {
  flex-direction:column;
 flex:2;

}
`

export const Header = styled.h3`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #1A1A1A;
  padding-bottom: 10px;
`
export const Title = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #4A4A4A;
  padding: 16px 0 20px 0;
  width:90%;

  @media (max-width: 400px) {
  display:none;
}
`
export const Text = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #5A5A5A;
  padding: 8px 0 ;
   :hover{
     text-shadow: 0 0 20px orange;
     color:blue;
     cursor:pointer;
  }

  @media (max-width: 400px) {
  display:none;
}
  
`

export const Div2 = styled.a`
 display:flex;
 justify-content:center;
 align-items:center;
 width:48px;
 height:48px;
 background: #EDFFDD;
 border-radius: 4px;
 :hover{
   transition: .5s;
    box-shadow: 0 0 10px grey;
  }
`
export const Icon = styled.div`

`
Icon.Facebook = styled(Facebook)`
  :hover{
     path{
      fill: blue;
     }
  }
`
Icon.Instagram = styled(Instagram)`
  :hover{
     path{
      fill: blue;
     }
  }
`
Icon.Twitter = styled(Twitter)`
  :hover{
     path{
      fill: blue;
     }
  }
`

