// components/FooterStyles.js

import styled from 'styled-components'

export const Box = styled.div`
  padding: 2px;
  background: black;
  // position: absolute;
  bottom: 0;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-left: 60px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

export const FooterLink = styled.a`
  color: #fff;
  //   margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  margin-left: 30px;

  &:hover {
    color: red;
    transition: 200ms ease-in;
  }
`
