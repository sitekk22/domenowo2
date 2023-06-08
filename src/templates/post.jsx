import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../pages/components/Layout"
import "../pages/styles/blog.scss"
import Toc from '../blog/components/toc'


function PostTemplate({ data: { mdx }, children }) { 
  console.log(mdx.fields.timeToRead); 
  return (
    <>
    <main className="blog">
      <Layout>
            <div className="contentContainer">
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
query PostTemplate($id: String) {
  mdx(id: { eq: $id }) {
    frontmatter {
      title
      beginning
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
}
`

export default PostTemplate