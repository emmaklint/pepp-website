import React from "react";

import Link from "gatsby-link";
import Img from "gatsby-image";
import styled from "styled-components";
import P from "../Typography/P"

const BlogPost = styled.div`
  width: 100%;
  background-color: #fecc02;
  position: relative;
  text-align: center;
`;

const BlogPostImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 1;
  z-index: 999;

  :hover {
    opacity: 0;
  }
`;
const BlogLink = styled(P)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.4rem;
  color: white;
`;

const Card = ({ post }) => {
  return (
    <Link to={"blogg/" + post.slug}>
      <BlogPost>
        <BlogPostImage
          fluid={post.featured_media.localFile.childImageSharp.fluid}
        />
        <BlogLink>{post.title}</BlogLink>
      </BlogPost>
    </Link>
  );
};

export default Card;
