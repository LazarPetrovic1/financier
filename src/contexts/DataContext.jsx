import { createContext, useState } from "react";
import { buildURL, extractPlotData } from "../utils";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [country, setCountry] = useState(() => "");
  const [startDate, setStartDate] = useState(() => "");
  const [endDate, setEndDate] = useState(() => "");
  const [countryData, setCountryData] = useState(() => ({}));
  const [graph, setGraph] = useState(() => "gdp")
  const [isBarbarian, setIsBarbarian] = useState(() => null);
  const getData = async () => {
    try {
      const urls = buildURL(country, {
        from: startDate ? new Date(startDate).getFullYear() : null,
        to: endDate ? new Date(endDate).getFullYear() : null
      });
      await Promise.all(urls.map(url => fetch(url).then(x => x.json()).then(x => x[1]))).then((values) => {
        const gdp = extractPlotData(values[0]);
        const gdpPerCapita = extractPlotData(values[1]);
        const totalPopulation = extractPlotData(values[2]);
        const percentInflation = extractPlotData(values[3]);
        const percentUnemployment = extractPlotData(values[4]);
        const healthSpending = extractPlotData(values[5]);
        const educationSpending = extractPlotData(values[6]);
        const povertyHeadcount = extractPlotData(values[7]);
        const taxRatePercentage = extractPlotData(values[8]);
        const lifeExpectancy = extractPlotData(values[9]);
        const electricityAccess = extractPlotData(values[10]);
        const waterAccess = extractPlotData(values[11]);
        const gini = extractPlotData(values[12]);
        const exchangeRate = extractPlotData(values[13]);
        const currentBalance = extractPlotData(values[14]);
        const businessRegistrationSteps = extractPlotData(values[15]);
        const ruleOfLawPercentile = extractPlotData(values[16]);
        const ruleOfLawEstimate = extractPlotData(values[17]);
        const isBarbarianVal = (ruleOfLawEstimate.reduce((a, b) => b.value !== null ? a + b.value : a + 0, 0) / ruleOfLawEstimate.length) < 0 ? true : false;
        setIsBarbarian(() => isBarbarianVal);
        setCountryData(() => ({
          gdp,
          gdpPerCapita,
          totalPopulation,
          percentInflation,
          percentUnemployment,
          healthSpending,
          educationSpending,
          povertyHeadcount,
          taxRatePercentage,
          lifeExpectancy,
          electricityAccess,
          waterAccess,
          gini,
          exchangeRate,
          currentBalance,
          businessRegistrationSteps,
          ruleOfLawPercentile,
          ruleOfLawEstimate
        }))
      })
    } catch (e) {
      console.warn("ERROR", e);
    }
  }
  return (
    <DataContext.Provider value={{
      country, setCountry, startDate, setStartDate,
      endDate, setEndDate, countryData, setCountryData,
      getData, graph, setGraph, isBarbarian
    }}>
      {children}
    </DataContext.Provider>
  )
}