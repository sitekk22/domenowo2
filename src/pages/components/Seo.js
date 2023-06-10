import * as React from "react";
import { Helmet } from "react-helmet";

import { useStaticQuery, graphql, Script } from "gatsby";

const Seo = ({ title, description, image, url }) => {
  const { site } = useStaticQuery(
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

  const seo = [
    {
      name: "title",
      content: title ? title : site.siteMetadata.title,
    },
    {
      name: "description",
      content: description ? description : site.siteMetadata.description,
    },
    {
      name: "keywords",
      content: site.siteMetadata.keywords,
    },
    {
      property: "og:title",
      content: title ? title : site.siteMetadata.title,
    },
    {
      property: "og:description",
      content: description ? description : site.siteMetadata.description,
    },
    {
      property: "og:image",
      content: image ? image : site.siteMetadata.image,
    },
    {
      property: "og:type",
      content: "website",
    },
    ,
    {
      property: "og:url",
      content: url ? url : site.siteMetadata.url,
    },
    {
      name: "twitter:creator",
      content: site.siteMetadata.author,
    },
    {
      name: "twitter:title",
      content: title ? title : site.siteMetadata.title,
    },
    {
      name: "twitter:description",
      content: description ? description : site.siteMetadata.description,
    },
  ];

  return (
    <Helmet
      title={title ? title : site.siteMetadata.title}
      meta={seo}
      htmlAttributes={{ lang: "pl" }}
    ></Helmet>
  );
};
export default Seo;
