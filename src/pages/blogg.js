import React, { Component } from "react";
import Page from "../components/Page";
import { Grid, GridItem } from "styled-grid-responsive";
import styled from "styled-components";
import Card from "../components/Blog/Card"

const Tag = styled.button`
  font-family: "Raleway";
  background: transparent;
  border-radius: 4px;
  border: 4px solid #fecc02;
  color: #fecc02;
  margin: 0 0.3em;
  padding: 0.25em 1em;
`;

const SelectedTag = styled(Tag)`
  background: #fecc02;
  color: white;
`;


class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      keywords: [
        { name: "Stockholm", slug: "stockholm", active: false },
        { name: "Göteborg", slug: "goteborg", active: false },
        { name: "Luleå", slug: "lulea", active: false },
        { name: "Umeå", slug: "umea", active: false }
      ]
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

  makeSelected(slug, i) {
    if (this.state.keyword === slug) {
      this.setState(state => {
        const keywords = state.keywords.map((item, j) => {
          if (j === i) {
            return (item.active = false);
          } else {
            return item;
          }
        });
        return keywords;
      });
      // get list
      // make list
      // sätt till inaktiv
      this.setState({ keyword: "" });
    } else {
      //sätt till aktiv
      this.setState(state => {
        const keywords = state.keywords.map((item, j) => {
          if (j === i) {
            return (item.active = true);
          } else {
            return item;
          }
        });
        return keywords;
      });
      this.setState({ keyword: slug });
    }
  }

  render() {
    return (
      <Page>
        {this.state.keywords.map((keyword, i) => {
          const NecessaryButton = keyword.active ? SelectedTag : Tag;
          return (
            <NecessaryButton
              onClick={() => this.makeSelected(keyword.slug, i)}
              key={keyword.slug}
            >
              {keyword.name}
            </NecessaryButton>
          );
        })}
        <Grid full>
          {this.getPosts().map(({ node }) => (
            <GridItem col={1 / 3} key={node.slug}>
             <Card post={node}/>
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
