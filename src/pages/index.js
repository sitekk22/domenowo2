import * as React from "react";
import Layout from "./components/Layout";
import * as styles from "./styles/index.module.scss";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useState, useEffect } from "react";

import az from "../images/az.avif";
import dhosting from "../images/dhosting.avif";
import domenypl from "../images/domenypl.avif";
import homepl from "../images/homepl.avif";
import krupl from "../images/krupl.avif";
import netmark from "../images/netmark.avif";
import ovhcloud from "../images/ovhcloud.avif";
import seohost from "../images/seohost.avif";
import thecamels from "../images/thecamels.avif";

const loga = [
  az,
  dhosting,
  domenypl,
  homepl,
  krupl,
  netmark,
  ovhcloud,
  seohost,
  thecamels,
];

const logasrc = loga.map((loga) => {
  return <img src={loga.toString()} alt="logo rejestratora" />;
});

const IndexPage = ({ data }) => {
  const [domain, setDomain] = useState("");
  const [search, setSearch] = useState("true");
  function cennik(event) {
    event.preventDefault();
    window.location.href = "/cennik";
  }

  useEffect(() => {
    localStorage.setItem("domain", JSON.stringify(domain));
  });

  if (typeof window !== "undefined") {
    localStorage.setItem("domain", "");
    localStorage.setItem("startSearch", search);
  }
  console.log({ data });
  return (
    <main style={styles}>
      <Layout>
        <div className={styles.hero}>
          <Img
            className={styles.heroBG}
            fadeIn={false}
            alt="background"
            fluid={data.heroBG.childImageSharp.fluid}
          />
          <h1 className={styles.heroText}>
            Porównaj ceny domen u różnych rejestratorów z Domenowo, i wybierz
            najlepszą ofertę
          </h1>

          <div className={styles.searchContainer}>
            <span className={styles.searchSpan}>
              Wpisz nazwę swojej wymarzonej domeny
            </span>
            <div className={styles.searchBG}>
              <form
                onSubmit={(event) => cennik(event)}
                className={styles.searchForm}
              >
                <input
                  autocomplete="off"
                  htmlFor="domainValue"
                  type="text"
                  className={styles.searchInput}
                  placeholder="np. mojadomena.tld"
                  value={domain}
                  onChange={(event) => setDomain(event.target.value)}
                />
                <button type="submit" className={styles.searchButton}>
                  <span>Szukaj</span>
                  <svg
                    className={styles.search}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 96 960 960"
                    width="48"
                  >
                    <path
                      d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoBox}>
            <h2 className={styles.infoTitle}>9</h2>
            <p className={styles.infoParagraph}>Obsługiwanych rejestratorów</p>
          </div>
          <div className={styles.infoBox}>
            <p className={styles.infoTitle}>70%</p>
            <p className={styles.infoParagraph}>
              Cen sprawdzanych jest na żywo, pozostałe 30% co 12 godzin
            </p>
          </div>
          <div className={styles.infoBox}>
            <h2 className={styles.infoTitle}>897</h2>
            <p className={styles.infoParagraph}>Obsługiwanych TLD</p>
          </div>
        </div>

        <div className={styles.purposeContainer}>
          <Img
            className={styles.purposeBG}
            objectPosition="10% 50%"
            fadeIn={false}
            alt="background"
            fluid={data.purposeBG.childImageSharp.fluid}
          />
          <div className={styles.purposeBox1}>
            <h2 className={styles.purposeTitle1}>
              Chcesz zaoszczędzić na domenie internetowej?
            </h2>
            <p className={styles.purposeParagraph1}>
              Porównaj ceny domen u popularnych rejestratorów na Domenowo!
              Znajdziesz tu aktualne oferty na domeny .com, .pl i inne
              rozszerzenia. Sprawdź, gdzie kupisz domenę najtaniej!
            </p>
          </div>
          <div className={styles.purposeBox2}>
            <h2 className={styles.purposeTitle2}>
              Porównuj ceny domen szybko i łatwo!
            </h2>
            <p className={styles.purposeParagraph2}>
              W jednym miejscu szybko i łatwo zapewnimy Ci zestawienie wielu
              ofert, dzięki czemu oszczędzisz czas i unikniesz przeszukiwania
              wielu stron internetowych w poszukiwaniu najlepszej oferty.
            </p>
          </div>
        </div>
        <div className={styles.listContainer}>
          <h2>Sprawdź oferty wielu renomowanych firm rejestrujących domeny</h2>
          <p>
            Oto lista popularnych rejestratorów domen, których oferty możesz
            porównać na Domenowo. Wspieramy wiele renomowanych firm, aby
            zapewnić Ci dostęp do najlepszych cen domen w jednym miejscu.{" "}
          </p>
          <div className={styles.loga}>{logasrc}</div>
        </div>

        <div className={styles.ctaContainer}>
          <Img
            className={styles.ctaBG}
            fadeIn={false}
            alt="cta background"
            fluid={data.ctaBG.childImageSharp.fluid}
          />
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              Wprowadź nazwę domeny, którą chcesz zarejestrować lub przenieść.{" "}
              <p className={styles.ctaParagraph}>
                Porównaj oferty wielu sprawdzonych rejestratorów i wybierz
                najlepszą dla siebie!
              </p>
            </h3>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.searchBG}>
              <form
                onSubmit={(event) => cennik(event)}
                className={styles.searchForm}
              >
                <input
                  autocomplete="off"
                  htmlFor="domainValue"
                  type="text"
                  className={styles.searchInput}
                  placeholder="np. mojadomena.tld"
                  value={domain}
                  onChange={(event) => setDomain(event.target.value)}
                />
                <button type="submit" className={styles.searchButton}>
                  <span>Szukaj</span>
                  <svg
                    className={styles.search}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 96 960 960"
                    width="48"
                  >
                    <path
                      d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.faqText}>
          <h3>FAQ</h3>
          <h2>Najczęściej Zadawane Pytania</h2>
        </div>
        <div class={styles.faqContainer}>
          <div className={styles.faqBox}>
            <h3 className={styles.faqTitle}>Co to jest domena internetowa?</h3>
            <p>
              Jest to  adres internetowy, który umożliwia użytkownikom
              odnalezienie Twojej strony w internecie. Domeny składają się z
              nazwy oraz rozszerzenia, na przykład .com, .net, .org, itp.
            </p>
          </div>
          <div className={styles.faqBox}>
            <h3 className={styles.faqTitle}>
              Jakie rozszerzenia mogę sprawdzić w wyszukiwarce na Domenowo?
            </h3>
            <p>
              Oferujemy sprawdzanie mnóstwa rozszerzeń domen, m.in domeny
              krajowe, domeny funkcjonalne, domeny globalne, domeny polskie,
              domeny regionalne
            </p>
          </div>
          <div className={styles.faqBox}>
            <h3 className={styles.faqTitle}>
              Jak mogę wybrać odpowiednią nazwę domeny?
            </h3>
            <p>
              Nazwa domeny powinna być związana z Twoim biznesem lub branżą, a
              jednocześnie łatwa do zapamiętania i wpisywania. Warto unikać nazw
              trudnych do pisania lub zbyt skomplikowanych.
            </p>
          </div>
          <div className={styles.faqBox}>
            <h3 className={styles.faqTitle}>
              Jak długo trwa rejestracja domeny?
            </h3>
            <p>
              Zazwyczaj trwa kilka minut, lecz w zależności od tego gdzie
              kupujemy domenę, może trwać do kilku dni, w zależności od
              sprawności obsługi, oraz procesów weryfikacyjnych.
            </p>
          </div>
        </div>
        <Link to={"faq"} className={styles.faqButton}>
          Zobacz więcej pytań
        </Link>
      </Layout>
    </main>
  );
};
export default IndexPage;

export const query = graphql`
  query images {
    heroBG: file(relativePath: { eq: "heroBG.png" }) {
      childImageSharp {
        fluid(maxHeight: 859, maxWidth: 1728, quality: 100, pngQuality: 100) {
          ...GatsbyImageSharpFluid
        }
        id
      }
    }
    purposeBG: file(relativePath: { eq: "purposeBG.png" }) {
      childImageSharp {
        fluid(maxHeight: 800, maxWidth: 1728, quality: 100, pngQuality: 100) {
          ...GatsbyImageSharpFluid
        }
        id
      }
    }
    ctaBG: file(relativePath: { eq: "ctaBG.avif" }) {
      childImageSharp {
        fluid(maxHeight: 856, maxWidth: 1728, quality: 100) {
          ...GatsbyImageSharpFluid
        }
        id
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;
