import React, { Component } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Page from "../components/Page";

import Img from "gatsby-image";
import Text from "../components/Typography/Text";
import P from "../components/Typography/P";
import styled from "styled-components";

const Summary = styled.p`
font-family: Raleway;
font-weight: 500;
font-size: 1.2rem;
line-height: 1.6rem;
margin: 1em 0;
`;

const BlogImage = styled(Img)`
border-radius: 2px;
margin: 1em 0;
`;


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;
    const summary = post.acf.summary;
    const img = post.featured_media.localFile.childImageSharp.fluid;

    console.log(post);

    return (
      <Page>
        <Text>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          {summary && <Summary dangerouslySetInnerHTML={{ __html: summary }} />}
          {img && <BlogImage src={img.src} fluid={img} />}
          <P dangerouslySetInnerHTML={{ __html: post.content }} />
        </Text>
      </Page>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array
};

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      acf {
        summary
      }
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
    site {
      siteMetadata {
        title
      }
    }
  }
`;
