import { createContext, useState } from "react";
import { classSystem, incomeTaxRate } from "../utils";
export const TrackerContext = createContext();

export const TrackerProvider = ({ children }) => {
  const [warning, setWarning] = useState(() => []);
  const [salary, setSalary] = useState(() => "");
  const [ownSavings, setOwnSavings] = useState(() => "");
  const [foreignSavings, setForeignSavings] = useState(() => ({ savings: [], currency: "CHF", amount: "" }));
  const [unemployed, setUnemployed] = useState(() => false);
  const [currency, setCurrency] = useState(() => "USD");
  const [passiveIncome, setPassiveIncome] = useState(() => "");
  const [hasPassiveIncome, setHasPassiveIncome] = useState(() => false);
  const [countryWithCurrency, setCountryWithCurrency] = useState(() => ({}));
  const [calculatedFinancialData, setCalculatedFinancialData] = useState(() => null);
  const processSavings = e => {
    e.preventDefault();
    setForeignSavings((prev) => ({
      savings: [
        ...prev.savings,
        { currency: foreignSavings.currency, amount: foreignSavings.amount },
      ],
      currency: "",
      amount: ""
    }))
  };
  const calculateTaxData = async () => {
    // Required country
    // Required local currency
    // Net monthly earnings
    // gross = net + (taxRate * net)
    // savings untaxed
    // passive income stream untaxed || 0
    let allMoney = 0, passiveIncomeVal = 0;
    if (!countryWithCurrency || !countryWithCurrency?.name) { setWarning((prev) => ([...prev, "The country of residence must be provided."])); return; }
    if (!currency || countryWithCurrency.currency.toUpperCase() !== currency.toUpperCase()) { setWarning((prev) => ([...prev, "The local currency must be provided."])); return; }
    const net = isNaN(parseInt(salary)) ? 0 : parseInt(salary);
    const taxRate = (incomeTaxRate.find(itr => itr.name.toLowerCase().includes(countryWithCurrency.name.toLowerCase()))).rate / 100;
    const gross = net + (net * taxRate);
    const savings = [...foreignSavings.savings, { currency: countryWithCurrency.currency, amount: ownSavings }]
    for (const stash of savings) {
      if (stash.currency !== "USD") {
        const convRate = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${stash.currency.toLowerCase()}.json`).then(x => x.json()).then(x => x[stash.currency.toLowerCase()]["usd"]);
        allMoney += (stash.amount * convRate)
      } else allMoney += stash.amount;
    }
    const classVal = classSystem.find(cs => allMoney >= cs.lowerThreshhold && allMoney <= cs.upperThreshhold);
    if (passiveIncome) {
      if (countryWithCurrency.currency !== "USD") {
        const convRate = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${countryWithCurrency.currency.toLowerCase()}.json`).then(x => x.json()).then(x => x[countryWithCurrency.currency.toLowerCase()]["usd"]);
        passiveIncomeVal += passiveIncome * convRate;
      }
    }
    const localToUSD = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${countryWithCurrency.currency.toLowerCase()}.json`).then(x => x.json()).then(x => x[countryWithCurrency.currency.toLowerCase()]["usd"]);
    const data = {
      savings, taxRate,
      tangibleCashInUSD: allMoney,
      class: classVal,
      net, gross,
      passiveIncomeInUSD: passiveIncomeVal,
      localToUSD
    }
    return data;
  }
  return (
    <TrackerContext.Provider value={{
      salary, setSalary, ownSavings, setOwnSavings,
      foreignSavings, setForeignSavings, unemployed, setUnemployed,
      currency, setCurrency, passiveIncome, setPassiveIncome,
      hasPassiveIncome, setHasPassiveIncome, processSavings,
      countryWithCurrency, setCountryWithCurrency, calculateTaxData,
      warning, setWarning, calculatedFinancialData, setCalculatedFinancialData
    }}>{children}</TrackerContext.Provider>
  )
}