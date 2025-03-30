import { useEffect, useState } from "react";

function SavingsBlock({ id, savings, currency }) {
  const [conversion, setConversion] = useState(() => ({
    localToForeign: 0,
    foreignToLocal: 0
  }));
  useEffect(() => {
    (async function() {
      if (currency !== savings.currency) {
        const ltf = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`).then(x => x.json()).then(x => x[currency.toLowerCase()][savings.currency.toLowerCase()])
        const ftl = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${savings.currency.toLowerCase()}.json`).then(x => x.json()).then(x => x[savings.currency.toLowerCase()][currency.toLowerCase()])
        setConversion(() => ({ localToForeign: ltf, foreignToLocal: ftl }));
      } else setConversion(() => ({ localToForeign: 1, foreignToLocal: 1 }));
    }())
    // eslint-disable-next-line
  }, []);
  return (
    <div>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col-1">{id}</div>
            <div className="col">{currency}</div>
            <div className="col">{savings.currency}</div>
            <div className="col">{savings.amount}</div>
            <div className="col">
              {!!conversion.localToForeign && !!conversion.foreignToLocal ? (
                <div className="d-flex flex-column">
                  <span style={{ fontSize: "0.8rem" }}>1 {currency} ≈ {conversion.foreignToLocal.toFixed(2)} {savings.currency} </span>
                  <span style={{ fontSize: "0.8rem" }}>1 {savings.currency} ≈ {conversion.localToForeign.toFixed(2)} {currency} </span>
                </div>
              ) : <span>Conversion data unavailable</span>}
            </div>
            <hr />
          </div>
        </div>
    </div>
  )
}

export default SavingsBlock;