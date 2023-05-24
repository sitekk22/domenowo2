import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import axios from "axios";
import * as styles from "./styles/cennik.module.scss";
import Ceny from "./components/Ceny";
import loading from "./images/loading.gif";
import { Link } from "gatsby";
import left from "./images/left.svg";
import right from "./images/right.svg";

export default function Cennik({ data }) {
  const [isLoading, setLoading] = useState(false);

  var [domain, setDomain] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("domain");
      let initialValue = "";
      try {
        initialValue = JSON.parse(saved);
      } catch (e) {
        console.log(e);
      }

      return initialValue || "";
    }
  });

  var [prices, setPrices] = useState("");

  function checkPrices() {
    setLoading(true);
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(
        "https://domenowo.org:8080/ceny.php?domena=" + domain,
        { headers: { "Access-Control-Allow-Origin": "*" } },
        { headers }
      )
      .then((response) => {
        const result = response.data;
        setPrices(result);
        setLoading(false);

        //console.log(prices);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    checkPrices();
  }

  var [clicked, setClicked] = useState("ren");

  function switchButton(event) {
    let reg = document.getElementById("reg");
    let ren = document.getElementById("ren");

    reg.className = styles.sortButton;
    ren.className = styles.sortButton;

    event.currentTarget.className = styles.clicked;
    setClicked(event.currentTarget.id);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("startSearch") == "true") {
        checkPrices();
        localStorage.setItem("startSearch", "false");
      }
    }
  });

  return (
    <main>
      <Layout>
        <div className={styles.container}>
          <img src={left} className={styles.left} alt="left vector" />
          <div className={styles.centerContainer}>
            <div className={styles.searchContainer}>
              <p className={styles.searchSpan}>
                Wpisz nazwę swojej wymarzonej domeny
              </p>
              <div className={styles.searchBG}>
                <form onSubmit={handleSubmit} className={styles.searchForm}>
                  <input
                    htmlFor="domainValue"
                    type="text"
                    className={styles.searchInput}
                    placeholder="twojadomena.tld"
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

            <div className={styles.sortContainer}>
              <p className={styles.sortText}>Sortowanie:</p>
              <button
                id="reg"
                onClick={switchButton}
                className={styles.sortButton}
              >
                <span>Cena rejestracji</span>
              </button>
              <button
                id="ren"
                onClick={switchButton}
                className={styles.sortButton}
                clicked
              >
                <span>Cena odnowienia</span>
              </button>
            </div>

            <div className={styles.pricesContainer}>
              {isLoading ? (
                <div className={styles.loading}>
                  <img src={loading}></img>
                </div>
              ) : (
                <Ceny prices={prices} sort={clicked} />
              )}
            </div>
          </div>

          <img src={right} className={styles.right} alt="right vector" />
        </div>
        <div className={styles.faqText}>
          <h3>FAQ</h3>
          <p>Najczęściej Zadawane Pytania</p>
        </div>
        <div class={styles.faqContainer}>
          <div className={styles.faqBox}>
            <h3 className={styles.faqTitle}>Jakiego rejestratora wybrać?</h3>
            <p>
              Wybór zależy od indywidualnych preferencji i potrzeb. Warto jednak
              sugerować się następującymi kryteriami:
            </p>
            <ul>
              <li>Cena rejestracji i odnowienia</li>
              <li>
                Zakres oferowanych funkcji i narzędzi, takich jak ochrona WHOIS,
                zarządzanie DNS, certyfikaty SSL.
              </li>
              <li>Opinie innych użytkowników</li>
            </ul>
          </div>
          <div className={styles.faqBox}>
            <h3 className={styles.faqTitle}>
              Czy istnieje możliwość zwrotu pieniędzy w przypadku rezygnacji z
              domeny?
            </h3>
            <p>
              W przypadku większości rejestratorównie ma możliwości zwrotu
              pieniędzy po dokonaniu rejestracji. Jest to spowodowane tym, że
              rejestratorzy ponoszą koszty operacyjne związane z rejestracją
              domeny w rejestrze. Dlatego ważne jest, aby dokładnie przemyśleć i
              potwierdzić wybór domeny przed dokonaniem płatności.
            </p>
          </div>
          <div className={styles.faqBox}>
            <h3 className={styles.faqTitle}>
              Czy można przenieść domenę do innego rejestratora?
            </h3>
            <p>
              Tak, istnieje możliwość przeniesienia domeny. Proces ten nazywa
              się transferem domeny. W celu przeniesienia musisz spełnić
              określone warunki i zastosować się do procedur transferowych
              ustalonych przez obu rejestratorów. Transfer domeny może być
              korzystny, jeśli chcesz skonsolidować swoje domeny w jednym
              miejscu, lub jeśli znajdziesz lepsze warunki u innego
              rejestratora.
            </p>
          </div>
        </div>
        <Link to={"faq"} className={styles.faqButton}>
          Zobacz więcej pytań
        </Link>
      </Layout>
    </main>
  );
}
