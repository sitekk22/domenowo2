import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "./styles/blog.module.scss";

const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <div className={styles.blogContainer}>
          <h3 className={styles.recommended}>Polecane</h3>
        </div>
      </Layout>
    </main>
  );
};
export default IndexPage;
