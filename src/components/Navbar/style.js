import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  `
export const Wrapper = styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
 width:100%;
 max-width: 1440px;
`

export const Section = styled.div`
  display:flex;
  align-items:center;
  gap:50px;
`
export const LogoTitle = styled.h3`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #1A1A1A;
`

export const Ul = styled.ul`
  display:flex;
  gap: 50px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #1A1A1A;
`
export const Li = styled.li`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #1A1A1A;
  list-style:none;
  padding:7px;
  position:relative;
  :hover{
    text-shadow: 0 0 15px var(--lightgreen);
    color:var(--green);
    cursor:pointer;
  }
  

`
