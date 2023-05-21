import React from "react";
import { v4 } from "uuid";
import * as styles from "../styles/priceTable.module.scss";

export default function Ceny(prices) {
  var cennik = [];

  let ceny = prices;
  if (typeof ceny.prices !== "undefined") {
    if (ceny.prices.length > 0) {
      //const sorted = [...ceny.prices].sort((a, b) => a.cena_rej - b.cena_rej);
      let sort = ceny.sort;
      let sorted = ceny.prices;
      if (sorted[0].dostepna === true) {
        if (sort === "ren") {
          sorted = [...ceny.prices].sort((a, b) => a.cena_odn - b.cena_odn);
        } else if (sort === "reg") {
          sorted = [...ceny.prices].sort((a, b) => a.cena_rej - b.cena_rej);
        }

        cennik.push(
          <thead key={v4()}>
            <tr key={v4()} className={styles.theadTr}>
              <th key={v4()} className={styles.th}>
                Rejestrator
              </th>
              <th key={v4()} className={styles.th}>
                Cena Odnowienia
              </th>
              <th key={v4()} className={styles.th}>
                Cena Rejestracji
              </th>
              <th key={v4()} className={styles.th}>
                Sklep
              </th>
            </tr>
          </thead>
        );

        for (const cena of sorted) {
          let sklep = "https://" + cena.rejestrator;
          cennik.push(
            <tbody key={v4()}>
              <tr key={v4()} className={styles.tr}>
                <td key={v4()}> {cena.rejestrator}</td>
                <td key={v4()}> {`${cena.cena_odn}zł`}</td>
                <td key={v4()}> {`${cena.cena_rej}zł`}</td>
                <td>
                  {" "}
                  <a className={styles.link} target="_blank" href={sklep}>
                    Przejdź
                    <svg
                      className={styles.arrow}
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 96 960 960"
                      width="48"
                    >
                      <path
                        d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          );
        }
      } else if (
        sorted[0].dostepna === false &&
        sorted[0].prawidloweTLD === false
      ) {
        cennik.push(
          <div className={styles.unavailable}>
            <span>Nieprawidłowe TLD</span>
          </div>
        );
      } else if (
        sorted[0].dostepna === false &&
        sorted[0].prawidloweTLD === true
      ) {
        return (
          <div className={styles.unavailable}>
            <span>Domena niedostępna</span>
          </div>
        );
      }
    }
  }
  return <table className={styles.pricesTable}>{cennik}</table>;
}
