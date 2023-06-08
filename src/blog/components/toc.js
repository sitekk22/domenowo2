import React from "react";
import { Link } from "gatsby";
export default ({ headings }) => (
  <div className="toc">
    <p className="tocP">Spis treści</p>
    <ol>
      {" "}
      {headings.items.map((item) => (
        <li key={item.title}>
          {" "}
          <Link to={item.url}>{item.title}</Link>{" "}
        </li>
      ))}
    </ol>
  </div>
);
