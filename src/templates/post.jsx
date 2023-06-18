import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../pages/components/Layout"
import "../pages/styles/blog.scss"
import Toc from '../blog/components/toc'
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Seo from "../pages/components/Seo";


const PostTemplate = ({ data: { mdx },data, children }) => { 
  return (
    <>
    <main className="blog">
      <Layout>
            <div className="contentContainer">
              <img className="thumbnail" src={data.thumb.publicURL} />
              <h1 className="title"> 
                {mdx.frontmatter.title}
                <p className="ttr">artykuł przeczytasz w {" "}
                  <span className="minutes">
                    {Math.ceil(mdx.fields.timeToRead.minutes) + " min"}
                  </span>
                </p>
                </h1>
                <p>
                {mdx.frontmatter.beginning}
                </p>
              <Toc headings={mdx.tableOfContents}></Toc>
              {children}
            </div>
      </Layout>
    </main>
    </>
  )
}

export const pageQuery = graphql`
query PostTemplate($id: String, $thumbnail: String) {
  mdx(id: { eq: $id }) {
    frontmatter {
      title
      beginning
      thumbnail {
        relativePath
      }
    }
    fields {
      timeToRead {
        minutes
        text
        time
        words
      }
    }
    tableOfContents
    excerpt
  }
  thumb: file(relativePath: { eq: $thumbnail }) {
    publicURL
    
  }
}
`
export function Head({ data: { mdx }}) {
  return( 
    <>
    <Seo title={mdx.frontmatter.title}/>
    </>)
}

export default PostTemplate;
