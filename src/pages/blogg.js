import React, { Component } from "react";
import Link from "gatsby-link";
import Page from "../components/Page";
import Img from "gatsby-image";
import P from "../components/Typography/P";
import { Grid, GridItem } from "styled-grid-responsive";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  getPosts() {
    const data = this.props.data;

    if (this.state.keyword !== "") {
      return data.allWordpressPost.edges.filter(({ node }) => {
        return node.categories.some(
          category => category.slug === this.state.keyword
        );
      });
    } else {
      return data.allWordpressPost.edges;
    }
  }

  setKeyword(keyword) {
    if (this.state.keyword === keyword) {
      this.setState({ keyword: "" });
    } else {
      this.setState({ keyword: keyword });
    }
  }

  render() {
    return (
      <Page>
        Filter: {this.state.keyword}
        <button onClick={() => this.setKeyword("stockholm")}>Stockholm</button>
        <button onClick={() => this.setKeyword("goteborg")}>Göteborg</button>
        <Grid>
          {this.getPosts().map(({ node }) => (
            <GridItem col={1 / 3} key={node.slug}>
              <div className={"post"} style={{ margin: 20 }}>
                <Link to={"blogg/" + node.slug}>
                  <Img
                    fluid={node.featured_media.localFile.childImageSharp.fluid}
                    style={{ height: "160px" }}
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
          categories {
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
