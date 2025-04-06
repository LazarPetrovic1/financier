import { useContext } from "react";
import { countriesWithCurrency, currencies, currencyKeys } from "../utils";
import SavingsBlock from "../components/SavingsBlock";
import { TrackerContext } from "../contexts/TrackerContext";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import OnlineCheckWrapper from "../ConnectionWrapper";

function TrackerComponent() {
  const { salary, setSalary, ownSavings, setOwnSavings, foreignSavings, setForeignSavings, unemployed, setUnemployed, currency, setCurrency, passiveIncome, setPassiveIncome, hasPassiveIncome, setHasPassiveIncome, processSavings, countryWithCurrency, setCountryWithCurrency, calculateTaxData, warning, setCalculatedFinancialData } = useContext(TrackerContext);
  const navigate = useNavigate();
  const execCalculation = async () => {
    const data = await calculateTaxData();
    if (!data) return;
    setCalculatedFinancialData(() => data);
    navigate('/results');
  }
  return (
    <>
      <div className="pt-4 pb-5">
        <h1 className="text-primary text-center text-decoration-underline mb-4">Money tracker</h1>
        {warning.map(w => <Alert msg={w} key={w} msgType="warning" />)}
        <div className="form-control">
          <div className="mt-2">
            <select
              className="form-select"
              name="countryWithCurrency"
              id="countryWithCurrency"
              value={countryWithCurrency.name}
              onChange={e => setCountryWithCurrency(() => countriesWithCurrency.find(cwc => cwc.name.toLowerCase() === e.target.value.toLowerCase()))}
            >
              <option className="text-center" value="" disabled selected>-- Choose a country --</option>
              {countriesWithCurrency.map(cwc => (
                <option className="text-center" key={cwc.name} value={cwc.name}>{cwc.name}</option>
              ))}
            </select>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <label className="d-inline-block me-2" htmlFor="currency">Local currency: </label>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)} name="currency" id="currency" className="form-select">
              <option value="" disabled>-- Choose one --</option>
              {currencyKeys.sort().map(ck => (
                <option key={ck} value={ck}>{currencies[ck].name} ({currencies[ck].symbol})</option>
              ))}
            </select>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <label htmlFor="salary" className="me-4">Monthly earnings:</label>
              <span>
                <span className="d-inline-block me-2">{currency ? currencies[currency].symbol : "$"}</span>
                <input
                  value={salary}
                  onChange={e => setSalary(e.target.value)}
                  type="text"
                  name="salary"
                  id="salary"
                  placeholder={unemployed ? "Get a job, lol" : `Your net salary (in ${currency ? currencies[currency].symbol : "$"})`}
                  disabled={unemployed}
                />
              </span>
            </div>
            <div className="d-flex align-items-center">
              <input
                onChange={() => setUnemployed((prev) => !prev)}
                value={unemployed}
                type="checkbox"
                name="unemployed"
                className="d-inline-block me-2"
                id="unemployed"
                style={{ height: "20px", width: "20px" }}
              />
              <label htmlFor="unemployed">No source of income</label>
            </div>
          </div>
          <hr />
          <div>
            <label htmlFor="ownsavings" className="me-4">Local currency savings:</label>
            <span>
              <span className="d-inline-block me-2">{currency ? currencies[currency].symbol : "$"}</span>
              <input
                value={ownSavings}
                onChange={e => setOwnSavings(e.target.value)}
                type="text"
                name="ownsavings"
                id="ownsavings"
                placeholder={"Savings in local currency"}
              />
            </span>
          </div>
          <hr />
          <div className="mb-2">
            <label htmlFor="foreignsavings" className="me-4">Foreign currency savings:</label>
            <span className="d-inline-flex gap-1">
              <select style={{ maxWidth: '80px' }} value={foreignSavings.currency} onChange={(e) => setForeignSavings(prev => ({ ...prev, currency: e.target.value }))} name="foreignSavings.currency" id="foreignSavings.currency">
                <option value="" disabled>-- Choose one --</option>
                {currencyKeys.sort().map(ck => (
                  <option key={ck} value={ck}>{currencies[ck].symbol}</option>
                ))}
              </select>
              <input
                className="d-inline-block me-2"
                type="text"
                name="foreignsavings"
                id="foreignsavings"
                value={foreignSavings.amount}
                onChange={(e) => setForeignSavings(prev => ({ ...prev, amount: e.target.value }))}
                placeholder={"Savings in foreign currency"}
              />
            </span>
            <button type="button" className="btn btn-secondary" onClick={processSavings}>Add</button>
          </div>
        </div>
        {foreignSavings.savings.length > 0 && (
          <div className="form-control">
            <h4 className="text-info">Foreign savings</h4>
            <br />
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col-1">#</div>
                <div className="col">Local currency</div>
                <div className="col">Foreign currency</div>
                <div className="col">Amount</div>
                <div className="col">Currency conversion</div>
              </div>
            </div>
            {foreignSavings.savings.map((save, i) => (
              <SavingsBlock id={i + 1} currency={currency} savings={save} key={i} />
            ))}
          </div>
        )}
        <div className="form-control d-flex justify-content-between align-items-center">
          <div className="my-2">
            <label htmlFor="passiveIncome" className="me-4">Passive income stream:</label>
            <span>
              <span className="d-inline-block me-2">{currency ? currencies[currency].symbol : "$"}</span>
              <input
                value={passiveIncome}
                onChange={e => setPassiveIncome(e.target.value)}
                type="text"
                name="passiveIncome"
                id="passiveIncome"
                placeholder={hasPassiveIncome ? "Passive income in $" : "Commit tax fraud, lol"}
                disabled={!hasPassiveIncome}
              />
            </span>
          </div>
          <div className="d-flex align-items-center">
            <input
              onChange={() => setHasPassiveIncome((prev) => !prev)}
              value={hasPassiveIncome}
              type="checkbox"
              name="hasPassiveIncome"
              className="d-inline-block me-2"
              id="hasPassiveIncome"
              style={{ height: "20px", width: "20px" }}
            />
            <label htmlFor="hasPassiveIncome">{hasPassiveIncome ? "Passive income (in $)" : "No source of income"}</label>
          </div>
        </div>
        <button className="btn w-100 btn-primary btn-lg mt-3" onClick={execCalculation}>Calculate</button>
      </div>
    </>
  )

}

const Tracker = () => (
  <OnlineCheckWrapper>
    <TrackerComponent />
  </OnlineCheckWrapper>
)

export default Tracker;