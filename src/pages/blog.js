import React from 'react';
import Layout from '../components/layout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from "../components/head"


const BlogPage = () => {
  const posts = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields: publishedDate,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate (formatString:"MMMM Do YYYY")
        }
      }
    }
  }
    `);
  return (
    <Layout>
      <Head title="Blog"/>
      <h1>My blog</h1>
      <p>Posts will show up here</p>
      <ol className={blogStyles.posts}>
        {posts.allContentfulBlogPost.edges.map((edge, index) => (
          <li key={index} className={blogStyles.post}>
            <Link to={edge.node.slug}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
}

export default BlogPage;