import React from "react";

import Page from "../components/Page";
import { H1, P } from "../components/Typography";
import { Grid, GridItem } from "styled-grid-responsive";
import styled from "styled-components";
import Link from "gatsby-link";

const links = [
  {
    linkTo: "/adept",
    linkText: "Adept"
  },
  {
    linkTo: "/mentor",
    linkText: "Mentor"
  },
  {
    linkTo: "/projektgrupp",
    linkText: "Projektgrupp"
  },
  {
    linkTo: "/styrelsen",
    linkText: "Styrelsen"
  }
];

const Box = styled.div`
  background-color: #fecc02;
  width: 100%;
  padding-top: 75%;
  position: relative;
  border: 20px solid white;
`;

const BoxContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxContentText = styled(P)`
  color: white;
  font-family: Raleway;
  font-weight: 700;
  font-size: 2em;
`;

const Apply = () => (
  <Page>
    <H1>Ansök</H1>
    <Grid full>
      {links.map((link) => (
        <GridItem col={1 / 2}>
          <Link to={link.linkTo}>
            <Box>
              <BoxContent>
                <BoxContentText>{link.linkText}</BoxContentText>
              </BoxContent>
            </Box>
          </Link>
        </GridItem>
      ))}
   
    </Grid>
  </Page>
);

export default Apply;
