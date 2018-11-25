import React, { Component } from "react";
import Link from "gatsby-link";
import Page from "../components/Page";
import Img from "gatsby-image";
import P from '../components/Typography/P'
import { Grid, GridItem } from "styled-grid-responsive";

class Blog extends Component {
  render() {
    const data = this.props.data;
    return (
      <Page>
        <Grid>
          {data.allWordpressPost.edges.map(({ node }) => (
            <GridItem col={1 / 3}>
              <div
                key={node.slug}
                className={"post"}
                style={{ margin: 20 }}
              >
                <Link to={"blogg/" + node.slug}>
                  <Img
                    fluid={
                      node.featured_media.localFile.childImageSharp.fluid
                    }
                    style={{height: '160px'}}
                  />
                  <P>{node.title}</P>
                  <div
                    className={"post-content"}
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  />
                </Link>
              </div>
            </GridItem>
          ))}
        </Grid>
      </Page>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          slug
          status
          template
          format
          title
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
