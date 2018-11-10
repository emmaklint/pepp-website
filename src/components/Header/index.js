import React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import styled from "styled-components";

const LogoLink = styled.div`
  max-width: 100px;
  margin: 0 auto;

`;
const Background = styled.div`
  background: white;
  margin-bottom: 1.45rem;
`;
const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const LinkContainer = styled.div`
padding: 20px;
margin: 0 auto;
display: flex;
justify-content: center;
`

const HeaderLink = styled(Link)`
color: black;
font-family: Raleway;
text-decoration: none;
padding: 10px;
:hover {
  color: #FECC02;
}
`

const Header = ({ siteTitle }) => (
  <Background>
    <Content>
      <LogoLink>
        <Link to="/">
          <Logo />
        </Link>
      </LogoLink>
      <LinkContainer>
        <HeaderLink to="om-pepp">Om Pepp</HeaderLink>
        <HeaderLink to="blogg">Blogg</HeaderLink>
        <HeaderLink to="ansok">Ansök</HeaderLink>
      </LinkContainer>
    </Content>
  </Background>
);

export default Header;
