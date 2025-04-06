import { extractPlotData, getCountryValue, indicators, WORLD_BANK_API_INIT_YEAR } from "../utils";
import { useState } from "react";

function useLawData() {
  const [isBarbarian, setIsBarbarian] = useState(() => null);
  const [isLoading, setIsLoading] = useState(() => false);
  const getData = async (ctr, dateValues) => {
    try {
      const from = dateValues?.from || 0;
      const to = dateValues?.to || 0;
      setIsLoading(() => true);
      let dates = [];
      if (from && to) dates = [from, to];
      else if (from && !to) dates = [from, (new Date()).getFullYear()]
      else if (!from && to) dates = [WORLD_BANK_API_INIT_YEAR, to];
      else if (!from && !to) dates = [WORLD_BANK_API_INIT_YEAR, (new Date()).getFullYear()]
      let url = `https://api.worldbank.org/v2/country/`
      const country = getCountryValue(ctr);
      if (country) url += country.id;
      else if (!country) url += "all";
      // This is the main URL
      const http = `${url}/indicator/${indicators[17]}?format=json&date=${dates[0]}:${dates[1]}&per_page=100`
      const resp = await fetch(http);
      const data = await resp.json()
      const ruleOfLawEstimate = extractPlotData(data[1])
      const isBarbarianVal = (ruleOfLawEstimate.reduce((a, b) => b.value !== null ? a + b.value : a + 0, 0) / ruleOfLawEstimate.length) < 0 ? true : false;
      setIsBarbarian(() => isBarbarianVal);
    } catch (e) {
      setIsLoading(() => false);
      console.warn("ERROR", e);
    } finally { setIsLoading(() => false); }
  }

  return { isBarbarian, isLoading, getData }
}

export default useLawData;