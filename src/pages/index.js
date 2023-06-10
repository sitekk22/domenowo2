import * as React from "react";
import Layout from "./components/Layout";
import * as styles from "./styles/index.module.scss";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import { useState, useEffect } from "react";
import SearchForm from "./components/searchForm";

import leftHero from "../images/leftHero.svg";
import rightHero from "../images/rightHero.svg";
import purposeBG from "../images/purposeBG.avif";

import az from "../images/az.avif";
import dhosting from "../images/dhosting.avif";
import domenypl from "../images/domenypl.avif";
import homepl from "../images/homepl.avif";
import krupl from "../images/krupl.avif";
import netmark from "../images/netmark.avif";
import ovhcloud from "../images/ovhcloud.avif";
import seohost from "../images/seohost.avif";
import thecamels from "../images/thecamels.avif";

import Seo from "./components/Seo";

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
  /* const [domain, setDomain] = useState("");
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
  } */
  //console.log({ data });
  return (
    <main style={styles}>
      <Layout>
        <div className={styles.hero}>
          <img src={leftHero} className={styles.heroLeft} alt="blob" />
          <h1 className={styles.heroText}>
            Porównaj ceny domen u różnych rejestratorów, i wybierz najlepszą
            ofertę
          </h1>
          <img src={rightHero} className={styles.heroRight} alt="blob" />
          <div className={styles.jail}>
            <SearchForm />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoBox}>
            <h2 className={styles.infoTitle}>9</h2>
            <p className={styles.infoParagraph}>Wspieranych rejestratorów</p>
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
          {/* <img className={styles.purposeBG} src={purposeBG} alt="background" /> */}
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
            <SearchForm />
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
              Jest to adres internetowy, który umożliwia użytkownikom
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
        {/* <Link to={"faq"} className={styles.faqButton}>
          Zobacz więcej pytań
        </Link> */}
      </Layout>
    </main>
  );
};
export function Head() {
  return <Seo />;
}
export default IndexPage;

export const query = graphql`
  query images {
    purposeBG: file(relativePath: { eq: "purposeBG.webp" }) {
      childImageSharp {
        fluid(maxHeight: 800, maxWidth: 1728, quality: 100) {
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
