import React, { Component } from "react";
import Page from "../components/Page";
import PageHeader from "../components/Typography/PageHeader";
import Text from "../components/Typography/Text";
import Img from "gatsby-image";
import { graphql } from "gatsby";

class Stockholm extends Component {
  render() {
    const data = this.props.data;
    const persons = data.allWordpressWpPerson.edges;
    const posts = data.allWordpressPost.edges;

    return (
      <Page>
        <Text>
          <PageHeader>Stockholm</PageHeader>
          {persons.map(person => (
            <div key={person.node.acf.name}>
              <Img
                fluid={person.node.acf.image.localFile.childImageSharp.fluid}
              />
              <p>{person.node.acf.name}</p>
              <p>{person.node.acf.role}</p>
              <p>{person.node.acf.town}</p>
              <p>{person.node.acf.program}</p>
            </div>
          ))}
          {posts.map(post => (
            <div key={post.node.title}>
              <Img
                fluid={post.node.featured_media.localFile.childImageSharp.fluid}
              />
            </div>
          ))}
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
                  fluid(maxWidth: 1024) {
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
                fluid(maxWidth: 1024) {
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
