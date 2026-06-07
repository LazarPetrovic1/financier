import { useContext } from "react";
import { countriesWithCurrency, currencies, currencyKeys, toHumanReadable } from "../utils";
import { TrackerContext } from "../contexts/TrackerContext";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import OnlineCheckWrapper from "../ConnectionWrapper";

function TrackerComponent() {
  const {
    salary,
    setSalary,
    passiveIncome,
    setPassiveIncome,
    householdSize,
    setHouseholdSize,
    currency,
    setCurrency,
    countryWithCurrency,
    setCountryWithCurrency,
    assets,
    setAssets,
    liabilities,
    setLiabilities,
    foreignHoldingDraft,
    setForeignHoldingDraft,
    addForeignHolding,
    warning,
    calculateFinancialData,
    setCalculatedFinancialData
  } = useContext(TrackerContext);

  const navigate = useNavigate();
  const execCalculation = async () => {
    const data = await calculateFinancialData();
    if (!data) return;
    setCalculatedFinancialData(data);
    navigate("/results");
  };

  const updateAsset = (key, value) => setAssets(prev => ({ ...prev, [key]: value }));
  const updateLiability = (key, value) => setLiabilities(prev => ({ ...prev, [key]: value }));

  return (
    <div className="pt-4 pb-5">
      <h1 className="text-primary text-center text-decoration-underline mb-4">Money Tracker</h1>
      {warning.map(w => (
        <Alert key={w} msg={w} msgType="warning" />
      ))}

      {/* COUNTRY */}

      <div className="form-control mb-3">
        <h4 className="text-info">Country & Currency</h4>
        <hr />
        <select
          className="form-select"
          value={countryWithCurrency?.name || ""}
          onChange={(e) =>
            setCountryWithCurrency(countriesWithCurrency.find(c => c.name.toLowerCase() === e.target.value.toLowerCase()))
          }
        >
          <option value="" disabled>-- Choose a country --</option>
          {countriesWithCurrency.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
        </select>
        <hr />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="form-select">
          {currencyKeys.sort().map(code => (
            <option key={code} value={code}>{currencies[code].name}{" "}({currencies[code].symbol})</option>
          ))}
        </select>
        <hr />
        <label className="mb-2">Household Size</label>
        <input
          className="form-control"
          type="number"
          min="1"
          value={householdSize}
          onChange={(e) => setHouseholdSize(Number(e.target.value))}
        />
      </div>

      {/* INCOME */}
      <div className="form-control mb-3">
        <h4 className="text-success">Income</h4>
        <hr />
        <label>Monthly Salary</label>
        <input
          className="form-control"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder={`Salary in ${currency}`}
        />
        <hr />
        <label>Passive Income</label>
        <input
          className="form-control"
          value={passiveIncome}
          onChange={(e) => setPassiveIncome(e.target.value)}
          placeholder={`Passive income in ${currency}`}
        />
      </div>

      {/* CASH */}
      <div className="form-control mb-3">
        <h4 className="text-primary">Cash & Banking</h4>
        <hr />
        <label>Checking Account</label>
        <input
          className="form-control"
          value={assets.checkingAccount}
          onChange={(e) => updateAsset("checkingAccount", e.target.value)}
        />
        <hr />
        <label>Savings Account</label>
        <input
          className="form-control"
          value={assets.savingsAccount}
          onChange={(e) => updateAsset("savingsAccount", e.target.value)}
        />
        <hr />
        <h5>Foreign Currency Holdings</h5>
        <div className="d-flex gap-2">
          <select
            className="form-select"
            style={{ maxWidth: 120 }}
            value={foreignHoldingDraft.currency}
            onChange={(e) => setForeignHoldingDraft(prev => ({ ...prev, currency: e.target.value}))}
          >
            {currencyKeys.map(code => <option key={code} value={code}>{code}</option>)}
          </select>
          <input
            className="form-control"
            value={foreignHoldingDraft.amount}
            onChange={(e) => setForeignHoldingDraft(prev => ({ ...prev, amount: e.target.value }))}
            placeholder="Amount"
          />
          <button className="btn btn-secondary" onClick={addForeignHolding}>Add</button>
        </div>

        {assets.foreignCurrencyHoldings.length > 0 && (
          <>
            <hr />
            {assets.foreignCurrencyHoldings.map((item, i) => (
              <div key={i} className="d-flex justify-content-between">
                <span>{item.currency}</span>
                <span>{item.amount}</span>
              </div>
            ))}
          </>
        )}
      </div>

      {/* INVESTMENTS */}
      <div className="form-control mb-3">
        <h4 className="text-warning">Investments</h4>
        <hr />
        {["stocks", "etfs", "bonds", "mutualFunds"].map(field => (
          <div key={field} className="mb-3">
            <label>{toHumanReadable(field)}</label>
            <input
              className="form-control"
              value={assets[field]}
              onChange={(e) => updateAsset(field, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* REAL ESTATE */}
      <div className="form-control mb-3">
        <h4 className="text-info">Real Estate</h4>
        <hr />
        <label>Primary Residence</label>
        <input
          className="form-control mb-3"
          value={assets.primaryResidence}
          onChange={(e) => updateAsset("primaryResidence", e.target.value)}
        />
        <label>Rental Properties</label>
        <input
          className="form-control"
          value={assets.rentalProperties}
          onChange={(e) => updateAsset("rentalProperties", e.target.value)}
        />
      </div>

      {/* ALTERNATIVE */}
      <div className="form-control mb-3">
        <h4 className="text-secondary">Alternative Assets</h4>
        <hr />
        {["crypto", "preciousMetals", "collectibles", "businessValue"].map(field => (
          <div key={field} className="mb-3">
            <label>{toHumanReadable(field)}</label>
            <input
              className="form-control"
              value={assets[field]}
              onChange={(e) => updateAsset(field, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* LIABILITIES */}
      <div className="form-control mb-3">
        <h4 className="text-danger">Liabilities</h4>
        <hr />
        {["mortgage", "creditCards", "autoLoans", "studentLoans", "personalLoans", "otherObligations"].map(field => (
          <div key={field} className="mb-3">
            <label>{toHumanReadable(field)}</label>
            <input
              className="form-control"
              value={liabilities[field]}
              onChange={(e) => updateLiability(field, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button className="btn btn-primary btn-lg w-100 mt-3" onClick={execCalculation}>Calculate Net Worth</button>
    </div>
  );
}

const Tracker = () => (
  <OnlineCheckWrapper>
    <TrackerComponent />
  </OnlineCheckWrapper>
)

export default Tracker;