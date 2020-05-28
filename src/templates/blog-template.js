import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default () => {
  // const getMarkdownPosts = useStaticQuery(graphql`
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div>
        <h1 style={{ display: "inlineBlock", borderBottom: "1px solid" }}>
          Gatsby Garb Blog
        </h1>
        <>
          <h4>{data.allMarkdownRemark.totalCount} Posts </h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>
                <Link to={`/posts${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>{" "}
                <span style={{ color: "#bbb" }}>- {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </>
      </div>
    </Layout>
  )
}
