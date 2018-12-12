import React, { Component } from "react";
import Page from "../components/Page";
import Text from "../components/Typography/Text";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Grid, GridItem } from "styled-grid-responsive";
import Card from "../components/Blog/Card";
import {P, H1, H2} from '../components/Typography'

const Person = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Img)`
  width: 10rem;
  height: 10rem;
  background-size: cover;
  display: block;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  color: #fecc02;
  font-family: Raleway;
  font-weight: 700;
  margin: 0;
`;

const Role = styled.p`
  font-family: Raleway;
  margin: 0;
`;

const Study = styled.p`
  font-family: Raleway;
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.5;
`;

class Stockholm extends Component {
  render() {
    const data = this.props.data;
    const persons = data.allWordpressWpPerson.edges;
    const posts = data.allWordpressPost.edges;

    return (
      <Page>
        <Text>
          <H1>Stockholm</H1>
          <P>
            Pepp har funnits i Stockholm sedan starten 2013 och drivs av
            projektgruppen med studenter från KTH. 2018 års mentorskapsprogram
            utgörs av 54 mentorspar med adepter från gymnasier runt om Stockholm
            och studenter på KTH som i sin tur har mentorer ute på
            teknikföretagen. Tillsammans skapar vi en mötesplats för interaktion
            och innovation. Genom att samla gymnasietjejer*, studenter och
            näringsliv vill Pepp skapa sammanhang där tankar och erfarenheter
            utbyts, samtidigt som mångfalden ökar.
          </P>
          <H2>Senaste nytt</H2>
          <Grid full>
            {posts.map(({ node }) => (
              <GridItem col={1 / 3} key={node.slug}>
                <Card post={node} />
              </GridItem>
            ))}
          </Grid>
          <H2>Samarbete</H2>

          <P>
            Som partnerföretag till Pepp erbjuder vi er att vara med och påverka
            framtiden genom att se till att unga människors framtidsval inte
            begränsas av fördomar, familjebakgrund eller brist på förebilder och
            på så sätt bidrar ni till att förse arbetsmarknaden med ﬂer
            kvinnliga ingenjörer.
          </P>
          <P>
            Vår ambition är att Pepp tillsammans med sina partnerföretag kan
            visa gymnasiestuderande bredden av ingenjörsyrket. Om ert företag är
            målmedvetna och vill se en mer jämställd ingenjörsbransch är ni
            varmt välkomna att kontakta oss på stockholm@blipepp.nu
          </P>
          <H2>Kontakta oss</H2>
          <p>
            Stockholms projektgrupp består av studenter från KTH med varierande
            bakgrunder, studieinriktningar och intressen. Projektgruppen driver
            mentorskapsprogrammet samt representerar och sprider Pepps
            värderingar och budskap ut i samhället och teknikbranschen.
            Tillsammans med olika företag och organisationer sätter de agendan
            för de event och aktiviteter som utgör kärnan av programmets aktiva
            arbete för en mer jämställd teknikvärld.
          </p>
          <Grid>
            {persons.map(person => (
              <GridItem col={1 / 3} key={person.node.acf.name}>
                <Person>
                  <Image
                    fluid={
                      person.node.acf.image.localFile.childImageSharp.fluid
                    }
                  />
                  <Name>{person.node.acf.name}</Name>
                  <Role>{person.node.acf.role}</Role>
                  <Study>{person.node.acf.program}</Study>
                </Person>
              </GridItem>
            ))}
          </Grid>
        </Text>
      </Page>
    );
  }
}

export default Stockholm;

export const pageQuery = graphql`
  query {
    allWordpressWpPerson(filter: { acf: { town: { eq: "Stockholm" } } }) {
      edges {
        node {
          id
          slug
          status
          template
          title
          date
          acf {
            name
            role
            town
            program
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1024, maxHeight: 1024) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "Stockholm" } } } }
    ) {
      edges {
        node {
          id
          slug
          status
          template
          format
          title
          categories {
            name
            slug
          }
          content
          date
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1024, maxHeight: 1024) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
