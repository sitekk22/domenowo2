import * as React from "react";

import { useStaticQuery, graphql, Script } from "gatsby";

const Seo = ({ title }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            url
            image
          }
        }
      }
    `
  );
  const site = data.site.siteMetadata;
  return (
    <>
      <title>{site.title}</title>;<html lang="pl"></html>
      <meta name="title" content={site.title} />
      <meta name="description" content={site.description} />
      <meta name="author" content={site.author} />
      <meta name="keywords" content={site.keywords} />
      <meta name="og:url" content={site.url} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={site.image} />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:description" content={site.description} />
      <meta name="twitter:creator" content={site.author} />
    </>
  );
};

export default Seo;
