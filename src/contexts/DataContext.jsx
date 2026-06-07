import { createContext } from "react";
import { buildURL, clamp, extractPlotData, getLatestValue, LS_DATA_KEY } from "../utils";
import { useLocalStorage } from "../hooks";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const LS = LS_DATA_KEY;
  const [country, setCountry] = useLocalStorage(`${LS}countryCode`, "");
  const [startDate, setStartDate] = useLocalStorage(`${LS}startDate`, "");
  const [endDate, setEndDate] = useLocalStorage(`${LS}endDate`, "");
  const [countryData, setCountryData] = useLocalStorage(`${LS}countryData`, {});
  const [graph, setGraph] = useLocalStorage(`${LS}graph`, "gdp");
  const [wealthIndicators, setWealthIndicators] = useLocalStorage(`${LS}wealthIndicators`, {});

  const getData = async () => {
    try {
      const urls = buildURL(country, {
        from: startDate ? new Date(startDate).getFullYear() : null,
        to: endDate ? new Date(endDate).getFullYear() : null
      });

      const values = await Promise.all(urls.map(url => fetch(url).then(x => x.json()).then(x => x[1])));
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
      const gini = extractPlotData(values[10]);
      const exchangeRate = extractPlotData(values[11]);
      const gniPerCapita = extractPlotData(values[12]);
      const adjustedNetIncome = extractPlotData(values[13]);
      const creditToPrivateSector = extractPlotData(values[14]);
      const grossSavingsRate = extractPlotData(values[15]);
      const pppConversionFactor = extractPlotData(values[16]);
      const personalRemittances = extractPlotData(values[17]);
      const labourForceParticipation = extractPlotData(values[18]);
      const internetUsers = extractPlotData(values[19]);
      const secureInternetServers = extractPlotData(values[20]);

      const newCountryData = {
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
        gini,
        exchangeRate,
        gniPerCapita,
        adjustedNetIncome,
        creditToPrivateSector,
        grossSavingsRate,
        pppConversionFactor,
        personalRemittances,
        labourForceParticipation,
        internetUsers,
        secureInternetServers
      };

      setCountryData(newCountryData);

      const inflationScore = clamp(100 - (getLatestValue(percentInflation) * 6));
      const unemploymentScore = clamp(100 - (getLatestValue(percentUnemployment) * 4));
      const povertyScore = clamp(100 - (getLatestValue(povertyHeadcount) * 1.5));
      const giniScore = clamp(100 - ((getLatestValue(gini) - 25) * 2));
      const gniScore = clamp((getLatestValue(gniPerCapita) / 80000) * 100);
      const adjustedIncomeScore = clamp((getLatestValue(adjustedNetIncome) / 80000) * 100);
      const creditScore = clamp((getLatestValue(creditToPrivateSector) / 150) * 100);
      const savingsScore = clamp((getLatestValue(grossSavingsRate) / 40) * 100);
      const labourScore = clamp(getLatestValue(labourForceParticipation));
      const internetScore = clamp(getLatestValue(internetUsers));
      const secureServerScore = clamp(Math.log10(getLatestValue(secureInternetServers) + 1) * 20);
      const lifeScore = clamp(((getLatestValue(lifeExpectancy) - 50) / 35) * 100);

      const wealthEnvironmentScore = (
        gniScore * 0.20 +
        adjustedIncomeScore * 0.10 +
        inflationScore * 0.15 +
        unemploymentScore * 0.10 +
        povertyScore * 0.10 +
        giniScore * 0.10 +
        creditScore * 0.10 +
        savingsScore * 0.05 +
        labourScore * 0.03 +
        internetScore * 0.03 +
        secureServerScore * 0.02 +
        lifeScore * 0.02
      ).toFixed(1);

      const newIndicators = {
        inflationScore,
        unemploymentScore,
        povertyScore,
        giniScore,
        gniScore,
        adjustedIncomeScore,
        creditScore,
        savingsScore,
        labourScore,
        internetScore,
        secureServerScore,
        lifeScore,
        wealthEnvironmentScore
      };

      setWealthIndicators(newIndicators);

    } catch (e) { console.warn("ERROR", e); }
  };

  return (
    <DataContext.Provider
      value={{
        country,
        setCountry,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        countryData,
        setCountryData,
        getData,
        graph,
        setGraph,
        wealthIndicators,
        setWealthIndicators
      }}
    >
      {children}
    </DataContext.Provider>
  );
};