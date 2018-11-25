import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from 'gatsby-image'


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const img = post.featured_media.localFile.childImageSharp.fluid

    console.log(post)

    return (
    <>
      {img &&
        <div>
          <Img src={img.src} fluid={img}/>
        </div> 
        }
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content,
      featured_media{
        localFile{
            childImageSharp{
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
`