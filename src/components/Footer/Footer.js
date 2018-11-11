import React from "react";
import styled from "styled-components";
import { Grid, GridItem } from "styled-grid-responsive";
import * as feather from "styled-icons/feather";
import { Link } from "gatsby";
import Meta from "../Typography/Meta";

const Container = styled.div`
  background-color: #fecc02;
  padding: 20px;
`;
const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;
const Heading = styled.h2`
  color: white;
  font-size: 24px;
  font-family: "Raleway";
  font-weight: 800;
`;

const FooterLink = styled(Link)`
  color: white;
  display: block;
  font-family: "Raleway";
  font-weight: 500;
  text-decoration: none;
  padding: 10px 0;
  font-size: 20px;
`;
const SocialLink = styled.a`
  padding: 20px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = () => (
  <Container>
    <Inner>
      <Heading>Vi skapar nya förebilder och förändrar synen på teknik</Heading>
      <Grid>
        <GridItem col={1 / 3}>
          <Heading>Om Pepp</Heading>
          <FooterLink to="om-pepp">Bakgrund och vision</FooterLink>
          <FooterLink to="organisation">Organisation</FooterLink>
          <FooterLink to="kontakt">Kontakt</FooterLink>
          <FooterLink to="press">Press</FooterLink>
          <FooterLink to="grafisk-profil">Grafisk profil</FooterLink>
          <FooterLink to="in-english">In English</FooterLink>
        </GridItem>
        <GridItem col={1 / 3}>
          <Heading>Var finns vi?</Heading>
          <FooterLink to="stockholm">Stockholm</FooterLink>
          <FooterLink to="goteborg">Göteborg</FooterLink>
          <FooterLink to="lulea">Luleå</FooterLink>
          <FooterLink to="uppsala">Uppsala</FooterLink>
          <FooterLink to="linkoping">Linköping</FooterLink>
          <FooterLink to="umea">Umeå</FooterLink>
        </GridItem>
        <GridItem col={1 / 3}>
          <Heading>Vill du vara med?</Heading>
          <FooterLink to="adept">Gymnasietjej</FooterLink>
          <FooterLink to="mentor">Mentor</FooterLink>
          <FooterLink to="projektgrupp">Projektgrupp</FooterLink>
          <FooterLink to="ingenjor">Ingenjör</FooterLink>
          <FooterLink to="foretag">Företag</FooterLink>
        </GridItem>
      </Grid>
      <Center>
        <SocialLink href="http://www.facebook.com/blipepp">
          <feather.Facebook size="48" color="white" />
        </SocialLink>
        <SocialLink>
          <feather.Instagram size="48" color="white" />
        </SocialLink>
        <SocialLink>
          <feather.Linkedin size="48" color="white" />
        </SocialLink>
      </Center>
      <Center>
        <Meta>Acceptera dataskyddspolicy osv.</Meta>
      </Center>
      <Center>
        <Meta>
          Pepp välkomnar alla som identifierar sig som tjejer och som går i
          gymnasiet.
        </Meta>
      </Center>
    </Inner>
  </Container>
);

export default Footer;
