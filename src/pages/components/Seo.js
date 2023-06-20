import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description }) => {
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
      <title>{title ? title : site.title}</title>
      <html lang="pl" e></html>
      <meta name="title" content={title ? title : site.title} />
      <meta
        name="description"
        content={description ? description : site.description}
      />
      <meta name="author" content={site.author} />
      <meta name="keywords" content={site.keywords} />
      <meta name="og:url" content={site.url} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={site.image} />
      <meta name="twitter:title" content={title ? title : site.title} />
      <meta
        name="twitter:description"
        content={description ? description : site.description}
      />
      <meta name="twitter:creator" content={site.author} />
    </>
  );
};

export default Seo;
