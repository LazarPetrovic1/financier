import { createContext, useContext } from "react";
import { buildFullReport, convertToUSD, incomeClassSystem, incomeTaxRate, LS_DATA_KEY, LS_HISTORY_KEY, wealthClassSystem } from "../utils";
import { useLocalStorage } from "../hooks";
import { DataContext } from "./DataContext";
export const TrackerContext = createContext();

// Formulae

/*
const totalAssetsUSD =
  cashAssets +
  investmentAssets +
  realEstateAssets +
  alternativeAssets +
  businessAssets;

const totalLiabilitiesUSD =
  mortgage +
  creditCards +
  autoLoans +
  studentLoans +
  personalLoans +
  otherObligations;

const netWorthUSD = totalAssetsUSD - totalLiabilitiesUSD;
*/

export const TrackerProvider = ({ children }) => {
  const LS = LS_DATA_KEY;
  const [warning, setWarning] = useLocalStorage(`${LS}warning`, []);
  const [history, setHistory] = useLocalStorage(LS_HISTORY_KEY, []);
  const [countryWithCurrency, setCountryWithCurrency] = useLocalStorage(`${LS}country`, {});
  const [currency, setCurrency] = useLocalStorage(`${LS}currency`, "USD");
  const [householdSize, setHouseholdSize] = useLocalStorage(`${LS}householdSize`, 1);
  const [salary, setSalary] = useLocalStorage(`${LS}salary`, "");
  const [passiveIncome, setPassiveIncome] = useLocalStorage(`${LS}passiveIncome`, "");
  const { countryData, wealthIndicators } = useContext(DataContext)
  const [assets, setAssets] = useLocalStorage(`${LS}assets`, {
    checkingAccount: "",
    savingsAccount: "",
    foreignCurrencyHoldings: [],
    stocks: "",
    etfs: "",
    bonds: "",
    mutualFunds: "",
    primaryResidence: "",
    rentalProperties: "",
    crypto: "",
    preciousMetals: "",
    collectibles: "",
    businessValue: ""
  });

  const [liabilities, setLiabilities] = useLocalStorage(`${LS}liabilities`, {
    mortgage: "",
    creditCards: "",
    autoLoans: "",
    studentLoans: "",
    personalLoans: "",
    otherObligations: ""
  });

  const [foreignHoldingDraft, setForeignHoldingDraft] = useLocalStorage(`${LS}foreignDraft`, { currency: "EUR", amount: "" });
  const [calculatedFinancialData, setCalculatedFinancialData] = useLocalStorage(`${LS}calculated`, null);

  const addForeignHolding = (e) => {
    e.preventDefault();
    if (!foreignHoldingDraft.currency || !foreignHoldingDraft.amount) return;

    setAssets(prev => ({
      ...prev,
      foreignCurrencyHoldings: [
        ...prev.foreignCurrencyHoldings,
        { currency: foreignHoldingDraft.currency, amount: foreignHoldingDraft.amount }
      ]
    }));

    setForeignHoldingDraft({ currency: "EUR", amount: "" });
  };

  const saveReportSnapshot = (report) => {
    const snapshot = {
      id: crypto.randomUUID?.() ?? String(Date.now()),
      timestamp: new Date().toISOString(),
      report
    };

    setHistory(prev => {
      const updated = [...prev, snapshot];
      // optional safety cap (prevents localStorage explosion)
      if (updated.length > 100) updated.shift();
      return updated;
    });
  };

  const calculateFinancialData = async () => {
    setWarning([]);
    if (!countryWithCurrency?.name) {
      setWarning(["Country of residence is required."]);
      return null;
    }

    let totalAssetsUSD = 0;
    let totalLiabilitiesUSD = 0;

    const assetFields = [
      assets.checkingAccount,
      assets.savingsAccount,
      assets.stocks,
      assets.etfs,
      assets.bonds,
      assets.mutualFunds,
      assets.primaryResidence,
      assets.rentalProperties,
      assets.crypto,
      assets.preciousMetals,
      assets.collectibles,
      assets.businessValue
    ];

    for (const value of assetFields) totalAssetsUSD += await convertToUSD(value, currency);
    for (const holding of assets.foreignCurrencyHoldings) totalAssetsUSD += await convertToUSD(holding.amount, holding.currency);
    for (const value of Object.values(liabilities)) totalLiabilitiesUSD += await convertToUSD(value, currency);

    const netWorthUSD = totalAssetsUSD - totalLiabilitiesUSD;
    const netIncome = Number(salary) || 0;
    const passiveIncomeValue = Number(passiveIncome) || 0;
    const monthlyIncomeUSD = await convertToUSD(netIncome + passiveIncomeValue, currency);
    const incomeClass = incomeClassSystem.find(cls => monthlyIncomeUSD >= cls.lower && monthlyIncomeUSD < cls.upper);
    const wealthClass = wealthClassSystem.find(cls => netWorthUSD >= cls.lower && netWorthUSD < cls.upper);
    const taxRate = (incomeTaxRate.find(itr => itr.name.toLowerCase().includes(countryWithCurrency.name.toLowerCase()))?.rate || 0) / 100;

    const grossIncome = taxRate >= 1 ? netIncome : netIncome / (1 - taxRate);

    const result = {
      taxRate,
      netIncome,
      grossIncome,
      monthlyIncomeUSD,
      totalAssetsUSD,
      totalLiabilitiesUSD,
      netWorthUSD,
      incomeClass,
      wealthClass,
      householdSize,
      localCurrency: currency,
      assets,
      liabilities
    };

    setCalculatedFinancialData(result);
    const fullReport = buildFullReport({
      calculatedFinancialData: result,
      countryWithCurrency,
      countryData,
      wealthIndicators
    });

    saveReportSnapshot(fullReport);
    return result;
  };

  return (
    <TrackerContext.Provider
      value={{
        warning,
        setWarning,

        countryWithCurrency,
        setCountryWithCurrency,

        currency,
        setCurrency,

        householdSize,
        setHouseholdSize,

        salary,
        setSalary,

        passiveIncome,
        setPassiveIncome,

        assets,
        setAssets,

        liabilities,
        setLiabilities,

        foreignHoldingDraft,
        setForeignHoldingDraft,

        addForeignHolding,

        calculatedFinancialData,
        setCalculatedFinancialData,

        calculateFinancialData,

        history, setHistory, saveReportSnapshot
      }}
    >
      {children}
    </TrackerContext.Provider>
  );
};