import React, { useState } from "react";
import Layout from "./components/Layout";
import * as styles from "./styles/contact.module.scss";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import axios from "axios";

const Kontakt = ({ data }) => {
  var [dane, setName] = useState();
  var [email, setEmail] = useState();
  var [temat, setTopic] = useState();
  var [tresc, setContent] = useState();

  var [all, setAll] = useState({});

  function handleChange(event) {
    /* event.preventDefault(); */
    const name = event.target.name;
    const value = event.target.value;
    setAll((values) => ({ ...values, [name]: value }));
    console.log(all);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .post(
        "https://domenowo.org:8080/kontakt.php?",
        all,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
        { headers }
      )
      .then((response) => {
        const result = response.data;

        console.log(result);
        event.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main style={styles.main}>
      <Layout>
        <div className={styles.container}>
          <Img
            className={styles.contactBG}
            fadeIn={false}
            alt="background"
            fluid={data.contactBG.childImageSharp.fluid}
          />
          <div className={styles.left}>
            <h1 className={styles.text}>
              Masz pytania, sugestie lub potrzebujesz dodatkowych informacji?
              <p>
                Chętnie odpowiemy na Twoje zapytania i zapewnimy Ci niezbędne
                wsparcie.
              </p>
            </h1>

            <div className={styles.mailContainer}>
              <h3>
                Właścicielem serwisu jest
                <br />
                <p>Kamil Sitarz</p>
                <p>kontakt@domenowo.org</p>
              </h3>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.heading}>
              <h3>Formularz kontaktowy</h3>
              <p>Napisz w czym możemy Ci pomóc.</p>
            </div>
            <div>
              <form
                onChange={handleChange}
                onSubmit={handleSubmit}
                action=""
                className={styles.inputContainer}
              >
                {/* <h3>Imię i nazwisko</h3> */}
                <input
                  placeholder="Imię i nazwisko"
                  type="text"
                  name="dane"
                  value={dane}
                  className={styles.contactInput}
                ></input>
                {/* <h3>Adres email</h3> */}
                <input
                  placeholder="Adres e-mail"
                  name="email"
                  type="email"
                  value={email}
                  className={styles.contactInput}
                ></input>
                {/* <h3>Temat</h3> */}
                <input
                  placeholder="Temat"
                  name="temat"
                  value={temat}
                  className={styles.contactInput}
                ></input>
                <div className={styles.contentContainer}>
                  <p>Treść wiadomośći</p>
                  <textarea
                    name="tresc"
                    value={tresc}
                    required
                    className={styles.content}
                  ></textarea>
                </div>
                <h4 className={styles.rodo}>
                  <input required type="checkbox"></input>
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych w celu obsługi
                    zgłoszenia, zgodnie z
                    <a href="/rodo.pdf"> polityką prywatności</a>
                  </span>
                </h4>
                <button className={styles.button} type="submit">
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export const query = graphql`
  query images {
    contactBG: file(relativePath: { eq: "contactBG.avif" }) {
      childImageSharp {
        fluid(maxHeight: 1080, maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
        id
      }
    }
  }
`;

export default Kontakt;
