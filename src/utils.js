export const intro = `
  To calculate a person's net worth, you need to subtract all liabilities from all assets.

  Assets include anything you own that has financial value, such as:
  1. money in bank accounts,
  2. investment accounts,
  3. retirement plans,
  4. the value of your home and other real estate
  5. the resale value of your car and valuable property like jewelry and furniture
  6. the market value of your small business.

  Liabilities are your:
  1. outstanding debts,
  2. including credit card balances,
  3. mortgage,
  4. auto loans,
  5. student loans,
  6. any other money you need to repay to others.
  
  The net worth formula is: Assets - Liabilities = Net worth.
`;
export const WORLD_BANK_API_INIT_YEAR = 1960;
export const jsonf = `format=json`;
export const perPage = 500;
export const initPage = 1;
// REGION_API = https://api.worldbank.org/v2/country?region=LCN
export const allRegions = [
	{"name":"Africa Eastern and Southern","id":"AFE"},
	{"name":"Africa Western and Central","id":"AFW"},
  {"name":"Africa","id":"AFR"},
	{"name":"East Asia & Pacific (IBRD-only countries)","id":"BEA"},
  {"name":"Europe & Central Asia (IBRD-only countries)","id":"BEC"},
  {"name":"IBRD countries classified as high income","id":"BHI"},
  {"name":"Latin America & the Caribbean (IBRD-only countries)","id":"BLA"},
  {"name":"Middle East & North Africa (IBRD-only countries)","id":"BMN"},
  {"name":"Sub-Saharan Africa (IBRD-only countries)","id":"BSS"},
  {"name":"Sub-Saharan Africa (IFC classification)","id":"CAA"},
  {"name":"East Asia and the Pacific (IFC classification)","id":"CEA"},
  {"name":"Central Europe and the Baltics","id":"CEB"},
  {"name":"Europe and Central Asia (IFC classification)","id":"CEU"},
  {"name":"Latin America and the Caribbean (IFC classification)","id":"CLA"},
  {"name":"Middle East and North Africa (IFC classification)","id":"CME"},
  {"name":"South Asia (IFC classification)","id":"CSA"},
	{"name":"East Asia & Pacific (IDA-eligible countries)","id":"DEA"},
  {"name":"Europe & Central Asia (IDA-eligible countries)","id":"DEC"},
  {"name":"Latin America & the Caribbean (IDA-eligible countries)","id":"DLA"},
  {"name":"Middle East & North Africa (IDA-eligible countries)","id":"DMN"},
  {"name":"IDA countries in Sub-Saharan Africa not classified as fragile situations ","id":"DNS"},
  {"name":"South Asia (IDA-eligible countries)","id":"DSA"},
  {"name":"IDA countries in Sub-Saharan Africa classified as fragile situations ","id":"DSF"},
  {"name":"Sub-Saharan Africa (IDA-eligible countries)","id":"DSS"},
	{"name":"East Asia & Pacific (excluding high income)","id":"EAP"},
  {"name":"Early-demographic dividend","id":"EAR"},
  {"name":"East Asia & Pacific","id":"EAS"},
  {"name":"Europe & Central Asia (excluding high income)","id":"ECA"},
  {"name":"Europe & Central Asia","id":"ECS"},
  {"name":"Caribbean small states","id":"CSS"},
  {"name":"Fragile and conflict affected situations","id":"FCS"},
  {"name":"IDA countries classified as fragile situations, excluding Sub-Saharan Africa","id":"FXS"},
	{"name":"Heavily indebted poor countries (HIPC)","id":"HPC"},
  {"name":"IBRD, including blend","id":"IBB"},
  {"name":"IBRD only","id":"IBD"},
  {"name":"IDA & IBRD total","id":"IBT"},
  {"name":"IDA total","id":"IDA"},
  {"name":"IDA blend","id":"IDB"},
  {"name":"IDA only","id":"IDX"},
  {"name":"Not classified","id":"INX"},
  {"name":"Latin America & Caribbean ","id":"LCN"},
  {"name":"Least developed countries: UN classification","id":"LDC"},
	{"name":"Latin America & Caribbean (excluding high income)","id":"LAC"},
	{"name":"Lower middle income","id":"LMC"},
  {"name":"Low & middle income","id":"LMY"},
  {"name":"Late-demographic dividend","id":"LTE"},
  {"name":"Middle East (developing only)","id":"MDE"},
  {"name":"Middle East & North Africa","id":"MEA"},
  {"name":"Middle East & North Africa (excluding high income)","id":"MNA"},
  {"name":"High income","id":"HIC"},
	{"name":"Non-resource rich Sub-Saharan Africa countries","id":"NRS"},
  {"name":"IDA countries not classified as fragile situations, excluding Sub-Saharan Africa","id":"NXS"},
  {"name":"Other small states","id":"OSS"},
  {"name":"Pre-demographic dividend","id":"PRE"},
  {"name":"West Bank and Gaza","id":"PSE"},
  {"name":"Pacific island small states","id":"PSS"},
  {"name":"Post-demographic dividend","id":"PST"},
  {"name":"Resource rich Sub-Saharan Africa countries","id":"RRS"},
  {"name":"Sub-Saharan Africa (excluding high income)","id":"SSA"},
  {"name":"Sub-Saharan Africa excluding South Africa","id":"SXZ"},
  {"name":"East Asia & Pacific (IDA & IBRD countries)","id":"TEA"},
  {"name":"Europe & Central Asia (IDA & IBRD countries)","id":"TEC"},
  {"name":"Latin America & the Caribbean (IDA & IBRD countries)","id":"TLA"},
  {"name":"Middle East & North Africa (IDA & IBRD countries)","id":"TMN"},
  {"name":"Sub-Saharan Africa (IDA & IBRD countries)","id":"TSS"},
  {"name":"South Asia (IDA & IBRD)","id":"TSA"},
  {"name":"Upper middle income","id":"UMC"},
  {"name":"Sub-Saharan Africa excluding South Africa and Nigeria","id":"XZN"},
]
export const allRegisteredCountries = [
  {"name":"Global information","id":"all"},
  {"name":"Aruba","id":"ABW"},
  {"name":"Afghanistan","id":"AFG"},
  {"name":"Angola","id":"AGO"},
  {"name":"Albania","id":"ALB"},
  {"name":"Andorra","id":"AND"},
  {"name":"Arab World","id":"ARB"},
  {"name":"United Arab Emirates","id":"ARE"},
  {"name":"Argentina","id":"ARG"},
  {"name":"Armenia","id":"ARM"},
  {"name":"American Samoa","id":"ASM"},
  {"name":"Antigua and Barbuda","id":"ATG"},
  {"name":"Australia","id":"AUS"},
  {"name":"Austria","id":"AUT"},
  {"name":"Azerbaijan","id":"AZE"},
  {"name":"Burundi","id":"BDI"},
  {"name":"Belgium","id":"BEL"},
  {"name":"Benin","id":"BEN"},
  {"name":"Burkina Faso","id":"BFA"},
  {"name":"Bangladesh","id":"BGD"},
  {"name":"Bulgaria","id":"BGR"},
  {"name":"Bahrain","id":"BHR"},
  {"name":"Bahamas, The","id":"BHS"},
  {"name":"Bosnia and Herzegovina","id":"BIH"},
  {"name":"Belarus","id":"BLR"},
  {"name":"Belize","id":"BLZ"},
  {"name":"Bermuda","id":"BMU"},
  {"name":"Bolivia","id":"BOL"},
  {"name":"Brazil","id":"BRA"},
  {"name":"Barbados","id":"BRB"},
  {"name":"Brunei Darussalam","id":"BRN"},
  {"name":"Bhutan","id":"BTN"},
  {"name":"Botswana","id":"BWA"},
  {"name":"Central African Republic","id":"CAF"},
  {"name":"Canada","id":"CAN"},
  {"name":"Switzerland","id":"CHE"},
  {"name":"Channel Islands","id":"CHI"},
  {"name":"Chile","id":"CHL"},
  {"name":"China","id":"CHN"},
  {"name":"Cote d'Ivoire","id":"CIV"},
  {"name":"Cameroon","id":"CMR"},
  {"name":"Congo, Dem. Rep.","id":"COD"},
  {"name":"Congo, Rep.","id":"COG"},
  {"name":"Colombia","id":"COL"},
  {"name":"Comoros","id":"COM"},
  {"name":"Cabo Verde","id":"CPV"},
  {"name":"Costa Rica","id":"CRI"},
  {"name":"Cuba","id":"CUB"},
  {"name":"Curacao","id":"CUW"},
  {"name":"Cayman Islands","id":"CYM"},
  {"name":"Cyprus","id":"CYP"},
  {"name":"Czechia","id":"CZE"},
  {"name":"Germany","id":"DEU"},
  {"name":"Djibouti","id":"DJI"},
  {"name":"Dominica","id":"DMA"},
  {"name":"Denmark","id":"DNK"},
  {"name":"Dominican Republic","id":"DOM"},
  {"name":"Algeria","id":"DZA"},
  {"name":"Ecuador","id":"ECU"},
  {"name":"Egypt, Arab Rep.","id":"EGY"},
  {"name":"Euro area","id":"EMU"},
  {"name":"Eritrea","id":"ERI"},
  {"name":"Spain","id":"ESP"},
  {"name":"Estonia","id":"EST"},
  {"name":"Ethiopia","id":"ETH"},
  {"name":"European Union","id":"EUU"},
  {"name":"Finland","id":"FIN"},
  {"name":"Fiji","id":"FJI"},
  {"name":"France","id":"FRA"},
  {"name":"Faroe Islands","id":"FRO"},
  {"name":"Micronesia, Fed. Sts.","id":"FSM"},
  {"name":"Gabon","id":"GAB"},
  {"name":"United Kingdom","id":"GBR"},
  {"name":"Georgia","id":"GEO"},
  {"name":"Ghana","id":"GHA"},
  {"name":"Gibraltar","id":"GIB"},
  {"name":"Guinea","id":"GIN"},
  {"name":"Gambia, The","id":"GMB"},
  {"name":"Guinea-Bissau","id":"GNB"},
  {"name":"Equatorial Guinea","id":"GNQ"},
  {"name":"Greece","id":"GRC"},
  {"name":"Grenada","id":"GRD"},
  {"name":"Greenland","id":"GRL"},
  {"name":"Guatemala","id":"GTM"},
  {"name":"Guam","id":"GUM"},
  {"name":"Guyana","id":"GUY"},
  {"name":"Hong Kong SAR, China","id":"HKG"},
  {"name":"Honduras","id":"HND"},
  {"name":"Croatia","id":"HRV"},
  {"name":"Haiti","id":"HTI"},
  {"name":"Hungary","id":"HUN"},
  {"name":"Indonesia","id":"IDN"},
  {"name":"Isle of Man","id":"IMN"},
  {"name":"India","id":"IND"},
  {"name":"Ireland","id":"IRL"},
  {"name":"Iran, Islamic Rep.","id":"IRN"},
  {"name":"Iraq","id":"IRQ"},
  {"name":"Iceland","id":"ISL"},
  {"name":"Israel","id":"ISR"},
  {"name":"Italy","id":"ITA"},
  {"name":"Jamaica","id":"JAM"},
  {"name":"Jordan","id":"JOR"},
  {"name":"Japan","id":"JPN"},
  {"name":"Kazakhstan","id":"KAZ"},
  {"name":"Kenya","id":"KEN"},
  {"name":"Kyrgyz Republic","id":"KGZ"},
  {"name":"Cambodia","id":"KHM"},
  {"name":"Kiribati","id":"KIR"},
  {"name":"St. Kitts and Nevis","id":"KNA"},
  {"name":"Korea, Rep.","id":"KOR"},
  {"name":"Kuwait","id":"KWT"},
  {"name":"Lao PDR","id":"LAO"},
  {"name":"Lebanon","id":"LBN"},
  {"name":"Liberia","id":"LBR"},
  {"name":"Libya","id":"LBY"},
  {"name":"St. Lucia","id":"LCA"},
  {"name":"Low income","id":"LIC"},
  {"name":"Liechtenstein","id":"LIE"},
  {"name":"Sri Lanka","id":"LKA"},
  {"name":"Lesotho","id":"LSO"},
  {"name":"Lithuania","id":"LTU"},
  {"name":"Luxembourg","id":"LUX"},
  {"name":"Latvia","id":"LVA"},
  {"name":"Macao SAR, China","id":"MAC"},
  {"name":"St. Martin (French part)","id":"MAF"},
  {"name":"Morocco","id":"MAR"},
  {"name":"Monaco","id":"MCO"},
  {"name":"Moldova","id":"MDA"},
  {"name":"Madagascar","id":"MDG"},
  {"name":"Maldives","id":"MDV"},
  {"name":"Mexico","id":"MEX"},
  {"name":"Marshall Islands","id":"MHL"},
  {"name":"Middle income","id":"MIC"},
  {"name":"North Macedonia","id":"MKD"},
  {"name":"Mali","id":"MLI"},
  {"name":"Malta","id":"MLT"},
  {"name":"Myanmar","id":"MMR"},
  {"name":"Montenegro","id":"MNE"},
  {"name":"Mongolia","id":"MNG"},
  {"name":"Northern Mariana Islands","id":"MNP"},
  {"name":"Mozambique","id":"MOZ"},
  {"name":"Mauritania","id":"MRT"},
  {"name":"Mauritius","id":"MUS"},
  {"name":"Malawi","id":"MWI"},
  {"name":"Malaysia","id":"MYS"},
  {"name":"North America","id":"NAC"},
  {"name":"North Africa","id":"NAF"},
  {"name":"Namibia","id":"NAM"},
  {"name":"New Caledonia","id":"NCL"},
  {"name":"Niger","id":"NER"},
  {"name":"Nigeria","id":"NGA"},
  {"name":"Nicaragua","id":"NIC"},
  {"name":"Netherlands","id":"NLD"},
  {"name":"Norway","id":"NOR"},
  {"name":"Nepal","id":"NPL"},
  {"name":"Nauru","id":"NRU"},
  {"name":"New Zealand","id":"NZL"},
  {"name":"OECD members","id":"OED"},
  {"name":"Oman","id":"OMN"},
  {"name":"Pakistan","id":"PAK"},
  {"name":"Panama","id":"PAN"},
  {"name":"Peru","id":"PER"},
  {"name":"Philippines","id":"PHL"},
  {"name":"Palau","id":"PLW"},
  {"name":"Papua New Guinea","id":"PNG"},
  {"name":"Poland","id":"POL"},
  {"name":"Puerto Rico","id":"PRI"},
  {"name":"Korea, Dem. People's Rep.","id":"PRK"},
  {"name":"Portugal","id":"PRT"},
  {"name":"Paraguay","id":"PRY"},
  {"name":"French Polynesia","id":"PYF"},
  {"name":"Qatar","id":"QAT"},
  {"name":"Romania","id":"ROU"},
  {"name":"Russian Federation","id":"RUS"},
  {"name":"Rwanda","id":"RWA"},
  {"name":"South Asia","id":"SAS"},
  {"name":"Saudi Arabia","id":"SAU"},
  {"name":"Sudan","id":"SDN"},
  {"name":"Senegal","id":"SEN"},
  {"name":"Singapore","id":"SGP"},
  {"name":"Solomon Islands","id":"SLB"},
  {"name":"Sierra Leone","id":"SLE"},
  {"name":"El Salvador","id":"SLV"},
  {"name":"San Marino","id":"SMR"},
  {"name":"Somalia","id":"SOM"},
  {"name":"Serbia","id":"SRB"},
  {"name":"South Sudan","id":"SSD"},
  {"name":"Sub-Saharan Africa ","id":"SSF"},
  {"name":"Small states","id":"SST"},
  {"name":"Sao Tome and Principe","id":"STP"},
  {"name":"Suriname","id":"SUR"},
  {"name":"Slovak Republic","id":"SVK"},
  {"name":"Slovenia","id":"SVN"},
  {"name":"Sweden","id":"SWE"},
  {"name":"Eswatini","id":"SWZ"},
  {"name":"Sint Maarten (Dutch part)","id":"SXM"},
  {"name":"Seychelles","id":"SYC"},
  {"name":"Syrian Arab Republic","id":"SYR"},
  {"name":"Turks and Caicos Islands","id":"TCA"},
  {"name":"Chad","id":"TCD"},
  {"name":"Togo","id":"TGO"},
  {"name":"Thailand","id":"THA"},
  {"name":"Tajikistan","id":"TJK"},
  {"name":"Turkmenistan","id":"TKM"},
  {"name":"Timor-Leste","id":"TLS"},
  {"name":"Tonga","id":"TON"},
  {"name":"Trinidad and Tobago","id":"TTO"},
  {"name":"Tunisia","id":"TUN"},
  {"name":"Turkiye","id":"TUR"},
  {"name":"Tuvalu","id":"TUV"},
  {"name":"Tanzania","id":"TZA"},
  {"name":"Uganda","id":"UGA"},
  {"name":"Ukraine","id":"UKR"},
  {"name":"Uruguay","id":"URY"},
  {"name":"United States","id":"USA"},
  {"name":"Uzbekistan","id":"UZB"},
  {"name":"St. Vincent and the Grenadines","id":"VCT"},
  {"name":"Venezuela, RB","id":"VEN"},
  {"name":"British Virgin Islands","id":"VGB"},
  {"name":"Virgin Islands (U.S.)","id":"VIR"},
  {"name":"Viet Nam","id":"VNM"},
  {"name":"Vanuatu","id":"VUT"},
  {"name":"Samoa","id":"WSM"},
  {"name":"Kosovo","id":"XKX"},
  {"name":"Yemen, Rep.","id":"YEM"},
  {"name":"South Africa","id":"ZAF"},
  {"name":"Zambia","id":"ZMB"},
  {"name":"Zimbabwe","id":"ZWE"}
]
export const getCountryValue = (country) => {
  if (!country) return null;
  const countryItem = allRegisteredCountries.find(ctr => ctr.name.toLowerCase().startsWith(country.toLowerCase()));
  if (!countryItem) return null;
  return countryItem;
}
export const indicators = [
  "NY.GDP.MKTP.CD",
  "NY.GDP.PCAP.CD", 
  "SP.POP.TOTL",
  "FP.CPI.TOTL.ZG",
  "SL.UEM.TOTL.ZS",
  "SH.XPD.CHEX.GD.ZS",
  "SE.XPD.TOTL.GD.ZS",
  "SI.POV.NAHC",
	"IC.TAX.TOTL.CP.ZS",
	"SP.DYN.LE00.IN", // life expectancy
	"EG.ELC.ACCS.ZS", // access to electricity
	"SH.H2O.BASW.ZS", // access to water
	"SI.POV.GINI", // GINI coefficient
	"PA.NUS.FCRF", // exchange rate against USD
	"BN.CAB.XOKA.CD", // current account balance (in usd)
	"IC.REG.PROC", // business-procedures
	// Implement these later
	// RL.PER.RNK.UPPER, // Rule of Law: Percentile Rank, Upper Bound of 90% Confidence Interval
	// RL.PER.RNK.LOWER, // Rule of Law: Percentile Rank, Lower Bound of 90% Confidence Interval
	"RL.PER.RNK", // Rule of Law: Percentile Rank
	"RL.EST", // Rule of Law: Estimate
];
export const selectIndication = [
  {
    code: "gdp",
    value: "Gross Domestic Product",
  },
  {
    code: "gdpPerCapita",
    value: "Gross Domestic Product Per Capita",
  },
  {
    value: "Total Population",
    code: "totalPopulation"
  },
  {
    code: "percentInflation",
    value: "Annual Inflation Percentage",
  },
  {
    code: "percentUnemployment",
    value: "Annual Unemployment Percentage",
  },
  {
    code: "healthSpending",
    value: "Healthcare Expenditure (as % of GDP)",
  },
  {
    code: "educationSpending",
    value: "Edication Expenditure (as % of GDP)",
  },
  {
    code: "povertyHeadcount",
    value: "Poverty Headcount (as % of national population)",
  },
	{
		code: "taxRatePercentage",
		value: "Total Tax Rate"
	},
	{
		code: "lifeExpectancy",
		value: "Life Expectancy"
	},
	{
		code: "electricityAccess",
		value: "Access to electricity"
	},
	{
		code: "waterAccess",
		value: "Access to drinking water"
	},
	{
		code: "gini",
		value: "GINI coefficient"
	},
	{
		code: "exchangeRate",
		value: "Exchange rate (against the USD)"
	},
	{
		code: "currentBalance",
		value: "Current balance (in USD)"
	},
	{
		code: "businessRegistrationSteps",
		value: "How many procedures to register a business"
	},
	{
		code: "ruleOfLawPercentile",
		value: "Rule of Law: Percentile Rank"
	},
	{
		code: "ruleOfLawEstimate",
		value: "Rule of Law: Estimate"
	},
];
export const buildURL = (ctr, { from, to }) => {
	let dates = [];
	if (from && to) dates = [from, to];
	else if (from && !to) dates = [from, (new Date()).getFullYear()]
	else if (!from && to) dates = [WORLD_BANK_API_INIT_YEAR, to];
	else if (!from && !to) dates = [WORLD_BANK_API_INIT_YEAR, (new Date()).getFullYear()]
  let url = `https://api.worldbank.org/v2/country/`
	console.log("DEJC", { dates, from, to });
  const country = getCountryValue(ctr);
  if (country) url += country.id;
  else if (!country) url += "all";
  let urls = indicators.map((ind) => `${url}/indicator/${ind}`)
  return urls.map(url => `${url}?${jsonf}&date=${dates[0]}:${dates[1]}&per_page=100`)
}
// Threshholds in USD
export const classSystem = [
  { className: "Lower Class", lowerThreshhold: 0, upperThreshhold: 1045, percentage: 10 },
  { className: "Working Class", lowerThreshhold: 1045, upperThreshhold: 3085, percentage: 20 },
  { className: "Lower-Middle Class", lowerThreshhold: 3085, upperThreshhold: 4515, percentage: 30 },
  { className: "Middle Class", lowerThreshhold: 4516, upperThreshhold: 14005, percentage: 25 },
  { className: "Upper-Middle Class", lowerThreshhold: 14006, upperThreshhold: 24665, percentage: 8 },
  { className: "Upper Class", lowerThreshhold: 24666, upperThreshhold: 74000, percentage: 5 },
  { className: "Owner Class", lowerThreshhold: 74000, upperThreshhold: 200000, percentage: 2 }
]
export const classAdvice = (name) => {
	if (name === "Lower Class") return { res: "You require all the help you can get, so seek it as soon as possible.", msgType: "danger" }
	if (name === "Working Class") return { res: "You are in a tough financial situation; you might alleviate your financial issues by developing an in-demand skill, cutting down on all liabilities and vices, as well as abstinence from having children.", msgType: "danger" }
	if (name === "Lower-Middle Class") return { res: "You are in an inenviable financial situation; better budgeting, prioritizing public transportation over personal vehicles as well as consolidating belongings might improve your standing.", msgType: "warning" }
	if (name === "Middle Class") return { res: "You can't rest on your laurels just yet. In order to do that, you should increase your savings by either taking on more work or developing a passive income stream.", msgType: "info" }
	if (name === "Upper-Middle Class") return { res: "You can easily retire by moving to a poorer country relative to your own. Should you choose to stay, removing yourself from the workforce and starting your own business (or expanding it if you already have one) would propel you up the ladder.", msgType: "info" }
	if (name === "Upper Class") return { res: "You've arrived! Put your feet on the table", msgType: "success" }
	if (name === "Owner Class") return { res: "If you're here, chances are you don't need me to tell you what to do.", msgType: "success" }
}
export const extractPlotData = (arrs) => 
  arrs.map(arr => ({ date: parseInt(arr.date), value: arr.value }));
export const currencies = {
	"USD": {
		"symbol": "$",
		"name": "US Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "USD",
		"name_plural": "US dollars"
	},
	"CAD": {
		"symbol": "CA$",
		"name": "Canadian Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "CAD",
		"name_plural": "Canadian dollars"
	},
	"EUR": {
		"symbol": "€",
		"name": "Euro",
		"symbol_native": "€",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "EUR",
		"name_plural": "euros"
	},
	"AED": {
		"symbol": "AED",
		"name": "United Arab Emirates Dirham",
		"symbol_native": "د.إ.‏",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "AED",
		"name_plural": "UAE dirhams"
	},
	"AFN": {
		"symbol": "Af",
		"name": "Afghan Afghani",
		"symbol_native": "؋",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "AFN",
		"name_plural": "Afghan Afghanis"
	},
	"ALL": {
		"symbol": "ALL",
		"name": "Albanian Lek",
		"symbol_native": "Lek",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "ALL",
		"name_plural": "Albanian lekë"
	},
	"AMD": {
		"symbol": "AMD",
		"name": "Armenian Dram",
		"symbol_native": "դր.",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "AMD",
		"name_plural": "Armenian drams"
	},
	"ARS": {
		"symbol": "AR$",
		"name": "Argentine Peso",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "ARS",
		"name_plural": "Argentine pesos"
	},
	"AUD": {
		"symbol": "AU$",
		"name": "Australian Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "AUD",
		"name_plural": "Australian dollars"
	},
	"AZN": {
		"symbol": "man.",
		"name": "Azerbaijani Manat",
		"symbol_native": "ман.",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "AZN",
		"name_plural": "Azerbaijani manats"
	},
	"BAM": {
		"symbol": "KM",
		"name": "Bosnia-Herzegovina Convertible Mark",
		"symbol_native": "KM",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "BAM",
		"name_plural": "Bosnia-Herzegovina convertible marks"
	},
	"BDT": {
		"symbol": "Tk",
		"name": "Bangladeshi Taka",
		"symbol_native": "৳",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "BDT",
		"name_plural": "Bangladeshi takas"
	},
	"BGN": {
		"symbol": "BGN",
		"name": "Bulgarian Lev",
		"symbol_native": "лв.",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "BGN",
		"name_plural": "Bulgarian leva"
	},
	"BHD": {
		"symbol": "BD",
		"name": "Bahraini Dinar",
		"symbol_native": "د.ب.‏",
		"decimal_digits": 3,
		"rounding": 0,
		"code": "BHD",
		"name_plural": "Bahraini dinars"
	},
	"BIF": {
		"symbol": "FBu",
		"name": "Burundian Franc",
		"symbol_native": "FBu",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "BIF",
		"name_plural": "Burundian francs"
	},
	"BND": {
		"symbol": "BN$",
		"name": "Brunei Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "BND",
		"name_plural": "Brunei dollars"
	},
	"BOB": {
		"symbol": "Bs",
		"name": "Bolivian Boliviano",
		"symbol_native": "Bs",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "BOB",
		"name_plural": "Bolivian bolivianos"
	},
	"BRL": {
		"symbol": "R$",
		"name": "Brazilian Real",
		"symbol_native": "R$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "BRL",
		"name_plural": "Brazilian reals"
	},
	"BWP": {
		"symbol": "BWP",
		"name": "Botswanan Pula",
		"symbol_native": "P",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "BWP",
		"name_plural": "Botswanan pulas"
	},
	"BYN": {
		"symbol": "Br",
		"name": "Belarusian Ruble",
		"symbol_native": "руб.",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "BYN",
		"name_plural": "Belarusian rubles"
	},
	"BZD": {
		"symbol": "BZ$",
		"name": "Belize Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "BZD",
		"name_plural": "Belize dollars"
	},
	"CDF": {
		"symbol": "CDF",
		"name": "Congolese Franc",
		"symbol_native": "FrCD",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "CDF",
		"name_plural": "Congolese francs"
	},
	"CHF": {
		"symbol": "CHF",
		"name": "Swiss Franc",
		"symbol_native": "CHF",
		"decimal_digits": 2,
		"rounding": 0.05,
		"code": "CHF",
		"name_plural": "Swiss francs"
	},
	"CLP": {
		"symbol": "CL$",
		"name": "Chilean Peso",
		"symbol_native": "$",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "CLP",
		"name_plural": "Chilean pesos"
	},
	"CNY": {
		"symbol": "CN¥",
		"name": "Chinese Yuan",
		"symbol_native": "CN¥",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "CNY",
		"name_plural": "Chinese yuan"
	},
	"COP": {
		"symbol": "CO$",
		"name": "Colombian Peso",
		"symbol_native": "$",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "COP",
		"name_plural": "Colombian pesos"
	},
	"CRC": {
		"symbol": "₡",
		"name": "Costa Rican Colón",
		"symbol_native": "₡",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "CRC",
		"name_plural": "Costa Rican colóns"
	},
	"CVE": {
		"symbol": "CV$",
		"name": "Cape Verdean Escudo",
		"symbol_native": "CV$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "CVE",
		"name_plural": "Cape Verdean escudos"
	},
	"CZK": {
		"symbol": "Kč",
		"name": "Czech Republic Koruna",
		"symbol_native": "Kč",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "CZK",
		"name_plural": "Czech Republic korunas"
	},
	"DJF": {
		"symbol": "Fdj",
		"name": "Djiboutian Franc",
		"symbol_native": "Fdj",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "DJF",
		"name_plural": "Djiboutian francs"
	},
	"DKK": {
		"symbol": "Dkr",
		"name": "Danish Krone",
		"symbol_native": "kr",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "DKK",
		"name_plural": "Danish kroner"
	},
	"DOP": {
		"symbol": "RD$",
		"name": "Dominican Peso",
		"symbol_native": "RD$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "DOP",
		"name_plural": "Dominican pesos"
	},
	"DZD": {
		"symbol": "DA",
		"name": "Algerian Dinar",
		"symbol_native": "د.ج.‏",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "DZD",
		"name_plural": "Algerian dinars"
	},
	"EEK": {
		"symbol": "Ekr",
		"name": "Estonian Kroon",
		"symbol_native": "kr",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "EEK",
		"name_plural": "Estonian kroons"
	},
	"EGP": {
		"symbol": "EGP",
		"name": "Egyptian Pound",
		"symbol_native": "ج.م.‏",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "EGP",
		"name_plural": "Egyptian pounds"
	},
	"ERN": {
		"symbol": "Nfk",
		"name": "Eritrean Nakfa",
		"symbol_native": "Nfk",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "ERN",
		"name_plural": "Eritrean nakfas"
	},
	"ETB": {
		"symbol": "Br",
		"name": "Ethiopian Birr",
		"symbol_native": "Br",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "ETB",
		"name_plural": "Ethiopian birrs"
	},
	"GBP": {
		"symbol": "£",
		"name": "British Pound Sterling",
		"symbol_native": "£",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "GBP",
		"name_plural": "British pounds sterling"
	},
	"GEL": {
		"symbol": "GEL",
		"name": "Georgian Lari",
		"symbol_native": "GEL",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "GEL",
		"name_plural": "Georgian laris"
	},
	"GHS": {
		"symbol": "GH₵",
		"name": "Ghanaian Cedi",
		"symbol_native": "GH₵",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "GHS",
		"name_plural": "Ghanaian cedis"
	},
	"GNF": {
		"symbol": "FG",
		"name": "Guinean Franc",
		"symbol_native": "FG",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "GNF",
		"name_plural": "Guinean francs"
	},
	"GTQ": {
		"symbol": "GTQ",
		"name": "Guatemalan Quetzal",
		"symbol_native": "Q",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "GTQ",
		"name_plural": "Guatemalan quetzals"
	},
	"HKD": {
		"symbol": "HK$",
		"name": "Hong Kong Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "HKD",
		"name_plural": "Hong Kong dollars"
	},
	"HNL": {
		"symbol": "HNL",
		"name": "Honduran Lempira",
		"symbol_native": "L",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "HNL",
		"name_plural": "Honduran lempiras"
	},
	"HRK": {
		"symbol": "kn",
		"name": "Croatian Kuna",
		"symbol_native": "kn",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "HRK",
		"name_plural": "Croatian kunas"
	},
	"HUF": {
		"symbol": "Ft",
		"name": "Hungarian Forint",
		"symbol_native": "Ft",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "HUF",
		"name_plural": "Hungarian forints"
	},
	"IDR": {
		"symbol": "Rp",
		"name": "Indonesian Rupiah",
		"symbol_native": "Rp",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "IDR",
		"name_plural": "Indonesian rupiahs"
	},
	"ILS": {
		"symbol": "₪",
		"name": "Israeli New Sheqel",
		"symbol_native": "₪",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "ILS",
		"name_plural": "Israeli new sheqels"
	},
	"INR": {
		"symbol": "₹",
		"name": "Indian Rupee",
		"symbol_native": "रुपया",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "INR",
		"name_plural": "Indian rupees"
	},
	"IQD": {
		"symbol": "IQD",
		"name": "Iraqi Dinar",
		"symbol_native": "د.ع.‏",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "IQD",
		"name_plural": "Iraqi dinars"
	},
	"IRR": {
		"symbol": "IRR",
		"name": "Iranian Rial",
		"symbol_native": "﷼",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "IRR",
		"name_plural": "Iranian rials"
	},
	"ISK": {
		"symbol": "Ikr",
		"name": "Icelandic Króna",
		"symbol_native": "kr",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "ISK",
		"name_plural": "Icelandic krónur"
	},
	"JMD": {
		"symbol": "J$",
		"name": "Jamaican Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "JMD",
		"name_plural": "Jamaican dollars"
	},
	"JOD": {
		"symbol": "JD",
		"name": "Jordanian Dinar",
		"symbol_native": "د.أ.‏",
		"decimal_digits": 3,
		"rounding": 0,
		"code": "JOD",
		"name_plural": "Jordanian dinars"
	},
	"JPY": {
		"symbol": "¥",
		"name": "Japanese Yen",
		"symbol_native": "￥",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "JPY",
		"name_plural": "Japanese yen"
	},
	"KES": {
		"symbol": "Ksh",
		"name": "Kenyan Shilling",
		"symbol_native": "Ksh",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "KES",
		"name_plural": "Kenyan shillings"
	},
	"KHR": {
		"symbol": "KHR",
		"name": "Cambodian Riel",
		"symbol_native": "៛",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "KHR",
		"name_plural": "Cambodian riels"
	},
	"KMF": {
		"symbol": "CF",
		"name": "Comorian Franc",
		"symbol_native": "FC",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "KMF",
		"name_plural": "Comorian francs"
	},
	"KRW": {
		"symbol": "₩",
		"name": "South Korean Won",
		"symbol_native": "₩",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "KRW",
		"name_plural": "South Korean won"
	},
	"KWD": {
		"symbol": "KD",
		"name": "Kuwaiti Dinar",
		"symbol_native": "د.ك.‏",
		"decimal_digits": 3,
		"rounding": 0,
		"code": "KWD",
		"name_plural": "Kuwaiti dinars"
	},
	"KZT": {
		"symbol": "KZT",
		"name": "Kazakhstani Tenge",
		"symbol_native": "тңг.",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "KZT",
		"name_plural": "Kazakhstani tenges"
	},
	"LBP": {
		"symbol": "L.L.",
		"name": "Lebanese Pound",
		"symbol_native": "ل.ل.‏",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "LBP",
		"name_plural": "Lebanese pounds"
	},
	"LKR": {
		"symbol": "SLRs",
		"name": "Sri Lankan Rupee",
		"symbol_native": "SL Re",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "LKR",
		"name_plural": "Sri Lankan rupees"
	},
	"LTL": {
		"symbol": "Lt",
		"name": "Lithuanian Litas",
		"symbol_native": "Lt",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "LTL",
		"name_plural": "Lithuanian litai"
	},
	"LVL": {
		"symbol": "Ls",
		"name": "Latvian Lats",
		"symbol_native": "Ls",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "LVL",
		"name_plural": "Latvian lati"
	},
	"LYD": {
		"symbol": "LD",
		"name": "Libyan Dinar",
		"symbol_native": "د.ل.‏",
		"decimal_digits": 3,
		"rounding": 0,
		"code": "LYD",
		"name_plural": "Libyan dinars"
	},
	"MAD": {
		"symbol": "MAD",
		"name": "Moroccan Dirham",
		"symbol_native": "د.م.‏",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "MAD",
		"name_plural": "Moroccan dirhams"
	},
	"MDL": {
		"symbol": "MDL",
		"name": "Moldovan Leu",
		"symbol_native": "MDL",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "MDL",
		"name_plural": "Moldovan lei"
	},
	"MGA": {
		"symbol": "MGA",
		"name": "Malagasy Ariary",
		"symbol_native": "MGA",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "MGA",
		"name_plural": "Malagasy Ariaries"
	},
	"MKD": {
		"symbol": "MKD",
		"name": "Macedonian Denar",
		"symbol_native": "MKD",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "MKD",
		"name_plural": "Macedonian denari"
	},
	"MMK": {
		"symbol": "MMK",
		"name": "Myanma Kyat",
		"symbol_native": "K",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "MMK",
		"name_plural": "Myanma kyats"
	},
	"MOP": {
		"symbol": "MOP$",
		"name": "Macanese Pataca",
		"symbol_native": "MOP$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "MOP",
		"name_plural": "Macanese patacas"
	},
	"MUR": {
		"symbol": "MURs",
		"name": "Mauritian Rupee",
		"symbol_native": "MURs",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "MUR",
		"name_plural": "Mauritian rupees"
	},
	"MXN": {
		"symbol": "MX$",
		"name": "Mexican Peso",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "MXN",
		"name_plural": "Mexican pesos"
	},
	"MYR": {
		"symbol": "RM",
		"name": "Malaysian Ringgit",
		"symbol_native": "RM",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "MYR",
		"name_plural": "Malaysian ringgits"
	},
	"MZN": {
		"symbol": "MTn",
		"name": "Mozambican Metical",
		"symbol_native": "MTn",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "MZN",
		"name_plural": "Mozambican meticals"
	},
	"NAD": {
		"symbol": "N$",
		"name": "Namibian Dollar",
		"symbol_native": "N$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "NAD",
		"name_plural": "Namibian dollars"
	},
	"NGN": {
		"symbol": "₦",
		"name": "Nigerian Naira",
		"symbol_native": "₦",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "NGN",
		"name_plural": "Nigerian nairas"
	},
	"NIO": {
		"symbol": "C$",
		"name": "Nicaraguan Córdoba",
		"symbol_native": "C$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "NIO",
		"name_plural": "Nicaraguan córdobas"
	},
	"NOK": {
		"symbol": "Nkr",
		"name": "Norwegian Krone",
		"symbol_native": "kr",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "NOK",
		"name_plural": "Norwegian kroner"
	},
	"NPR": {
		"symbol": "NPRs",
		"name": "Nepalese Rupee",
		"symbol_native": "नेरू",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "NPR",
		"name_plural": "Nepalese rupees"
	},
	"NZD": {
		"symbol": "NZ$",
		"name": "New Zealand Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "NZD",
		"name_plural": "New Zealand dollars"
	},
	"OMR": {
		"symbol": "OMR",
		"name": "Omani Rial",
		"symbol_native": "ر.ع.‏",
		"decimal_digits": 3,
		"rounding": 0,
		"code": "OMR",
		"name_plural": "Omani rials"
	},
	"PAB": {
		"symbol": "B/.",
		"name": "Panamanian Balboa",
		"symbol_native": "B/.",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "PAB",
		"name_plural": "Panamanian balboas"
	},
	"PEN": {
		"symbol": "S/.",
		"name": "Peruvian Nuevo Sol",
		"symbol_native": "S/.",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "PEN",
		"name_plural": "Peruvian nuevos soles"
	},
	"PHP": {
		"symbol": "₱",
		"name": "Philippine Peso",
		"symbol_native": "₱",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "PHP",
		"name_plural": "Philippine pesos"
	},
	"PKR": {
		"symbol": "PKRs",
		"name": "Pakistani Rupee",
		"symbol_native": "₨",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "PKR",
		"name_plural": "Pakistani rupees"
	},
	"PLN": {
		"symbol": "zł",
		"name": "Polish Zloty",
		"symbol_native": "zł",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "PLN",
		"name_plural": "Polish zlotys"
	},
	"PYG": {
		"symbol": "₲",
		"name": "Paraguayan Guarani",
		"symbol_native": "₲",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "PYG",
		"name_plural": "Paraguayan guaranis"
	},
	"QAR": {
		"symbol": "QR",
		"name": "Qatari Rial",
		"symbol_native": "ر.ق.‏",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "QAR",
		"name_plural": "Qatari rials"
	},
	"RON": {
		"symbol": "RON",
		"name": "Romanian Leu",
		"symbol_native": "RON",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "RON",
		"name_plural": "Romanian lei"
	},
	"RSD": {
		"symbol": "din.",
		"name": "Serbian Dinar",
		"symbol_native": "дин.",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "RSD",
		"name_plural": "Serbian dinars"
	},
	"RUB": {
		"symbol": "RUB",
		"name": "Russian Ruble",
		"symbol_native": "₽.",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "RUB",
		"name_plural": "Russian rubles"
	},
	"RWF": {
		"symbol": "RWF",
		"name": "Rwandan Franc",
		"symbol_native": "FR",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "RWF",
		"name_plural": "Rwandan francs"
	},
	"SAR": {
		"symbol": "SR",
		"name": "Saudi Riyal",
		"symbol_native": "ر.س.‏",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "SAR",
		"name_plural": "Saudi riyals"
	},
	"SDG": {
		"symbol": "SDG",
		"name": "Sudanese Pound",
		"symbol_native": "SDG",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "SDG",
		"name_plural": "Sudanese pounds"
	},
	"SEK": {
		"symbol": "Skr",
		"name": "Swedish Krona",
		"symbol_native": "kr",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "SEK",
		"name_plural": "Swedish kronor"
	},
	"SGD": {
		"symbol": "S$",
		"name": "Singapore Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "SGD",
		"name_plural": "Singapore dollars"
	},
	"SOS": {
		"symbol": "Ssh",
		"name": "Somali Shilling",
		"symbol_native": "Ssh",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "SOS",
		"name_plural": "Somali shillings"
	},
	"SYP": {
		"symbol": "SY£",
		"name": "Syrian Pound",
		"symbol_native": "ل.س.‏",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "SYP",
		"name_plural": "Syrian pounds"
	},
	"THB": {
		"symbol": "฿",
		"name": "Thai Baht",
		"symbol_native": "฿",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "THB",
		"name_plural": "Thai baht"
	},
	"TND": {
		"symbol": "DT",
		"name": "Tunisian Dinar",
		"symbol_native": "د.ت.‏",
		"decimal_digits": 3,
		"rounding": 0,
		"code": "TND",
		"name_plural": "Tunisian dinars"
	},
	"TOP": {
		"symbol": "T$",
		"name": "Tongan Paʻanga",
		"symbol_native": "T$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "TOP",
		"name_plural": "Tongan paʻanga"
	},
	"TRY": {
		"symbol": "TL",
		"name": "Turkish Lira",
		"symbol_native": "TL",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "TRY",
		"name_plural": "Turkish Lira"
	},
	"TTD": {
		"symbol": "TT$",
		"name": "Trinidad and Tobago Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "TTD",
		"name_plural": "Trinidad and Tobago dollars"
	},
	"TWD": {
		"symbol": "NT$",
		"name": "New Taiwan Dollar",
		"symbol_native": "NT$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "TWD",
		"name_plural": "New Taiwan dollars"
	},
	"TZS": {
		"symbol": "TSh",
		"name": "Tanzanian Shilling",
		"symbol_native": "TSh",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "TZS",
		"name_plural": "Tanzanian shillings"
	},
	"UAH": {
		"symbol": "₴",
		"name": "Ukrainian Hryvnia",
		"symbol_native": "₴",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "UAH",
		"name_plural": "Ukrainian hryvnias"
	},
	"UGX": {
		"symbol": "USh",
		"name": "Ugandan Shilling",
		"symbol_native": "USh",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "UGX",
		"name_plural": "Ugandan shillings"
	},
	"UYU": {
		"symbol": "$U",
		"name": "Uruguayan Peso",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "UYU",
		"name_plural": "Uruguayan pesos"
	},
	"UZS": {
		"symbol": "UZS",
		"name": "Uzbekistan Som",
		"symbol_native": "UZS",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "UZS",
		"name_plural": "Uzbekistan som"
	},
	"VEF": {
		"symbol": "Bs.F.",
		"name": "Venezuelan Bolívar",
		"symbol_native": "Bs.F.",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "VEF",
		"name_plural": "Venezuelan bolívars"
	},
	"VND": {
		"symbol": "₫",
		"name": "Vietnamese Dong",
		"symbol_native": "₫",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "VND",
		"name_plural": "Vietnamese dong"
	},
	"XAF": {
		"symbol": "FCFA",
		"name": "CFA Franc BEAC",
		"symbol_native": "FCFA",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "XAF",
		"name_plural": "CFA francs BEAC"
	},
	"XOF": {
		"symbol": "CFA",
		"name": "CFA Franc BCEAO",
		"symbol_native": "CFA",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "XOF",
		"name_plural": "CFA francs BCEAO"
	},
	"YER": {
		"symbol": "YR",
		"name": "Yemeni Rial",
		"symbol_native": "ر.ي.‏",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "YER",
		"name_plural": "Yemeni rials"
	},
	"ZAR": {
		"symbol": "R",
		"name": "South African Rand",
		"symbol_native": "R",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "ZAR",
		"name_plural": "South African rand"
	},
	"ZMK": {
		"symbol": "ZK",
		"name": "Zambian Kwacha",
		"symbol_native": "ZK",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "ZMK",
		"name_plural": "Zambian kwachas"
	},
	"ZWL": {
		"symbol": "ZWL$",
		"name": "Zimbabwean Dollar",
		"symbol_native": "ZWL$",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "ZWL",
		"name_plural": "Zimbabwean Dollar"
	}
}
export const currencyKeys = [
  "USD", "CAD", "EUR", "AED", "AFN", "ALL", "AMD", "ARS", "AUD", "AZN", "BAM", "BDT", "BGN",
  "BHD", "BIF", "BND", "BOB", "BRL", "BWP", "BYN", "BZD", "CDF", "CHF", "CLP", "CNY", "COP",
  "CRC", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EEK", "EGP", "ERN", "ETB", "GBP", "GEL",
  "GHS", "GNF", "GTQ", "HKD", "HNL", "HRK", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK",
  "JMD", "JOD", "JPY", "KES", "KHR", "KMF", "KRW", "KWD", "KZT", "LBP", "LKR", "LTL", "LVL",
  "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MOP", "MUR", "MXN", "MYR", "MZN", "NAD", "NGN",
  "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PHP", "PKR", "PLN", "PYG", "QAR", "RON",
  "RSD", "RUB", "RWF", "SAR", "SDG", "SEK", "SGD", "SOS", "SYP", "THB", "TND", "TOP", "TRY",
  "TTD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VEF", "VND", "XAF", "XOF", "YER", "ZAR",
  "ZMK", "ZWL"
]
export const incomeTaxRate = [
	{
		name: "Denmark",
		code:	"DNK",
		rate: 55.9
	},
	{
		name: "Finland",
		code:	"FIN",
		rate: 55
	},
	{
		name: "Luxembourg",
		code:	"LUX",
		rate: 51
	},
	{
		name: "Luxembourg",
		code:	"LUX",
		rate: 51
	},
	{
		name: "Austria",
		code:	"AUT",
		rate: 50
	},
	{
		name: "Belgium",
		code:	"BEL",
		rate: 50
	},
	{
		name: "Israel",
		code:	"ISR",
		rate: 50
	},
	{
		name: "Slovenia",
		code:	"SVN",
		rate: 50
	},
	{
		name: "the Netherlands",
		code:	"NLD",
		rate: 49.5
	},
	{
		name: "Portugal",
		code:	"PRT",
		rate: 48
	},
	{
		name: "Norway",
		code:	"NOR",
		rate: 47.4
	},
	{
		name: "Spain",
		code:	"ESP",
		rate: 47
	},
	{
		name: "Switzerland",
		code:	"CHE",
		rate: 45.5
	},
	{
		name: "Australia",
		code:	"AUS",
		rate: 45
	},
	{
		name: "China",
		code:	"CHN",
		rate: 45
	},
	{
		name: "Germany",
		code:	"DEU",
		rate: 45
	},
	{
		name: "France",
		code:	"FRA",
		rate: 45
	},
	{
		name: "United Kingdom",
		code:	"UK",
		rate: 45
	},
	{
		name: "Japan",
		code:	"JPN",
		rate: 45
	},
	{
		name: "South Korea",
		code:	"KOR",
		rate: 45
	},
	{
		name: "South Africa",
		code:	"ZAF",
		rate: 45
	},
	{
		name: "Greece",
		code:	"GRC",
		rate: 44
	},
	{
		name: "Italy",
		code:	"ITA",
		rate: 43
	},
	{
		name: "Senegal",
		code:	"SEN",
		rate: 43
	},
	{
		name: "Papua New Guinea",
		code:	"PNG",
		rate: 42
	},
	{
		name: "Chile",
		code:	"CHL",
		rate: 40
	},
	{
		name: "Democratic Republic of Congo",
		code:	"DRC",
		rate: 40
	},
	{
		name: "Congo",
		code:	"COG",
		rate: 40
	},
	{
		name: "Gabon",
		code:	"GAB",
		rate: 40
	},
	{
		name: "Guyana",
		code:	"GUY",
		rate: 40
	},
	{
		name: "Ireland",
		code:	"IRL",
		rate: 40
	},
	{
		name: "Mauritania",
		code:	"MRT",
		rate: 40
	},
	{
		name: "New Caledonia",
		code:	"NCL",
		rate: 40
	},
	{
		name: "Türkiye",
		code:	"TUR",
		rate: 40
	},
	{
		name: "Taiwan",
		code:	"TWN",
		rate: 40
	},
	{
		name: "Uganda",
		code:	"UGA",
		rate: 40
	},
	{
		name: "Colombia",
		code:	"COL",
		rate: 39
	},
	{
		name: "India",
		code:	"IND",
		rate: 39
	},
	{
		name: "New Zealand",
		code:	"NZL",
		rate: 39
	},
	{
		name: "Cameroon",
		code:	"CMR",
		rate: 38.5
	},
	{
		name: "Morocco",
		code:	"MAR",
		rate: 38
	},
	{
		name: "Ecuador",
		code:	"ECU",
		rate: 37
	},
	{
		name: "Namibia",
		code:	"NAM",
		rate: 37
	},
	{
		name: "United States of America",
		code:	"USA",
		rate: 37
	},
	{
		name: "Zambia",
		code:	"ZMB",
		rate: 37
	},
	{
		name: "Uruguay",
		code:	"URY",
		rate: 36
	},
	{
		name: "Croatia",
		code:	"HRV",
		rate: 35.4
	},
	{
		name: "Argentina",
		code:	"ARG",
		rate: 35
	},
	{
		name: "Cyprus",
		code:	"CYP",
		rate: 35
	},
	{
		name: "Algeria",
		code:	"DZA",
		rate: 35
	},
	{
		name: "Ethiopia",
		code:	"ETH",
		rate: 35
	},
	{
		name: "Ghana",
		code:	"GHA",
		rate: 35
	},
	{
		name: "Indonesia",
		code:	"IDN",
		rate: 35
	},
	{
		name: "Kenya",
		code:	"KEN",
		rate: 35
	},
	{
		name: "Mexico",
		code:	"MEX",
		rate: 35
	},
	{
		name: "Malta",
		code:	"MLT",
		rate: 35
	},
	{
		name: "Pakistan",
		code:	"PAK",
		rate: 35
	},
	{
		name: "the Philippines",
		code:	"PHL",
		rate: 35
	},
	{
		name: "Thailand",
		code:	"THA",
		rate: 35
	},
	{
		name: "Tunisia",
		code:	"TUN",
		rate: 35
	},
	{
		name: "Vietnam",
		code:	"VNM",
		rate: 35
	},
	{
		name: "Venezuela",
		code:	"VEN",
		rate: 34
	},
	{
		name: "Canada",
		code:	"CAN",
		rate: 33
	},
	{
		name: "Latvia",
		code:	"LVA",
		rate: 33
	},
	{
		name: "Puerto Rico",
		code:	"PRI",
		rate: 33
	},
	{
		name: "Eswatini",
		code:	"SWZ",
		rate: 33
	},
	{
		name: "Ivory Coast",
		code:	"CIV",
		rate: 32
	},
	{
		name: "Lithuania",
		code:	"LTU",
		rate: 32
	},
	{
		name: "Mozambique",
		code:	"MOZ",
		rate: 32
	},
	{
		name: "Poland",
		code:	"POL",
		rate: 32
	},
	{
		name: "Iceland",
		code:	"ISL",
		rate: 31.35
	},
	{
		name: "Bangladesh",
		code:	"BGD",
		rate: 30
	},
	{
		name: "Jamaica",
		code:	"JAM",
		rate: 30
	},
	{
		name: "Jordan",
		code:	"JOR",
		rate: 30
	},
	{
		name: "Saint Lucia",
		code:	"KNA",
		rate: 30
	},
	{
		name: "Malaysia",
		code:	"MYS",
		rate: 30
	},
	{
		name: "Nicaragua",
		code:	"NIC",
		rate: 30
	},
	{
		name: "Peru",
		code:	"PER",
		rate: 30
	},
	{
		name: "Rwanda",
		code:	"RWA",
		rate: 30
	},
	{
		name: "El Salvador",
		code:	"SLV",
		rate: 30
	},
	{
		name: "Chad",
		code:	"TCD",
		rate: 30
	},
	{
		name: "Tanzania",
		code:	"TZA",
		rate: 30
	},
	{
		name: "Barbados",
		code:	"BRB",
		rate: 28.5
	},
	{
		name: "Brazil",
		code:	"BRA",
		rate: 27.5
	},
	{
		name: "Cabo Verde",
		code:	"CPV",
		rate: 27.5
	},
	{
		name: "Egypt",
		code:	"EGY",
		rate: 27.5
	},
	{
		name: "Angola",
		code:	"AGO",
		rate: 25
	},
	{
		name: "Azerbeijan",
		code:	"AZE",
		rate: 25
	},
	{
		name: "Botswana",
		code:	"BWA",
		rate: 25
	},
	{
		name: "Costa Rica",
		code:	"CRI",
		rate: 25
	},
	{
		name: "Dominican Republic",
		code:	"DOM",
		rate: 25
	},
	{
		name: "Gibraltar",
		code:	"GIB",
		rate: 25
	},
	{
		name: "Equatorial Guinea",
		code:	"GNQ",
		rate: 25
	},
	{
		name: "Honduras",
		code:	"HND",
		rate: 25
	},
	{
		name: "Laos",
		code:	"LAO",
		rate: 25
	},
	{
		name: "Lebanon",
		code:	"LBN",
		rate: 25
	},
	{
		name: "Myanmar",
		code:	"MMR",
		rate: 25
	},
	{
		name: "Panama",
		code:	"PAN",
		rate: 25
	},
	{
		name: "Slovakia",
		code:	"SVK",
		rate: 25
	},
	{
		name: "Trinidad & Tobago",
		code:	"TTO",
		rate: 25
	},
	{
		name: "Nigeria",
		code:	"NGA",
		rate: 24
	},
	{
		name: "Singapore",
		code:	"SGP",
		rate: 24
	},
	{
		name: "Albania",
		code:	"ALB",
		rate: 23
	},
	{
		name: "the Czech Republic",
		code:	"CZE",
		rate: 23
	},
	{
		name: "Liechtenstein",
		code:	"LIE",
		rate: 22.4
	},
	{
		name: "Isle of Man",
		code:	"IMN",
		rate: 22
	},
	{
		name: "Armenia",
		code:	"ARM",
		rate: 20
	},
	{
		name: "Estonia",
		code:	"EST",
		rate: 20
	},
	{
		name: "Georgia",
		code:	"GEO",
		rate: 20
	},
	{
		name: "Guernsey",
		code:	"GGY",
		rate: 20
	},
	{
		name: "Jersey",
		code:	"JEY",
		rate: 20
	},
	{
		name: "Cambodia",
		code:	"KHM",
		rate: 20
	},
	{
		name: "Madagascar",
		code:	"MDG",
		rate: 20
	},
	{
		name: "Mongolia",
		code:	"MNG",
		rate: 20
	},
	{
		name: "Mauritius",
		code:	"MUS",
		rate: 20
	},
	{
		name: "Serbia",
		code:	"SRB",
		rate: 20
	},
	{
		name: "Sweden",
		code:	"SWE",
		rate: 20
	},
	{
		name: "Ukraine",
		code:	"UKR",
		rate: 18
	},
	{
		name: "Hong Kong",
		code:	"HKG",
		rate: 16
	},
	{
		name: "Hungary",
		code:	"HUN",
		rate: 15
	},
	{
		name: "Iraq",
		code:	"IRQ",
		rate: 15
	},
	{
		name: "Montenegro",
		code:	"MNE",
		rate: 15
	},
	{
		name: "Palestinian Territories",
		code:	"PSE",
		rate: 15
	},
	{
		name: "Russian Federation",
		code:	"RUS",
		rate: 15
	},
	{
		name: "Bolivia",
		code:	"BOL",
		rate: 13
	},
	{
		name: "Libya",
		code:	"LBY",
		rate: 13
	},
	{
		name: "Macau",
		code:	"MAC",
		rate: 12
	},
	{
		name: "Moldova",
		code:	"MDA",
		rate: 12
	},
	{
		name: "Uzbekistan",
		code:	"UZB",
		rate: 12
	},
	{
		name: "Bulgaria",
		code:	"BGR",
		rate: 10
	},
	{
		name: "Bosnia & Herzegovina",
		code:	"BIH",
		rate: 10
	},
	{
		name: "Greenland",
		code:	"GRL",
		rate: 10
	},
	{
		name: "Kazakhstan",
		code:	"KAZ",
		rate: 10
	},
	{
		name: "North Macedonia",
		code:	"MKD",
		rate: 10
	},
	{
		name: "Paraguay",
		code:	"PRY",
		rate: 10
	},
	{
		name: "Romania",
		code:	"ROU",
		rate: 10
	},
	{
		name: "Timor-Leste",
		code:	"TLS",
		rate: 10
	},
	{
		name: "Guatemala",
		code:	"GTM",
		rate: 7
	},
	{
		name: "United Arab Emirates",
		code:	"UAE",
		rate: 0
	},
	{
		name: "Bahrain",
		code:	"BHR",
		rate: 0
	},
	{
		name: "Bermuda",
		code:	"BMU",
		rate: 0
	},
	{
		name: "Cayman Islands",
		code:	"CYM",
		rate: 0
	},
	{
		name: "Kuwait",
		code:	"KWT",
		rate: 0
	},
	{
		name: "Oman",
		code:	"OMN",
		rate: 0
	},
	{
		name: "Qatar",
		code:	"QAT",
		rate: 0
	},
	{
		name: "Saudi Arabia",
		code:	"SAU",
		rate: 0
	},
]
export const countriesWithCurrency = [
  { name: 'Afghanistan', currency: 'AFN' },
  { name: 'Albania', currency: 'ALL' },
  { name: 'Algeria', currency: 'DZD' },
  { name: 'Andorra', currency: 'EUR' },
  { name: 'Angola', currency: 'AOA' },
  { name: 'Antigua and Barbuda', currency: 'XCD' },
  { name: 'Argentina', currency: 'ARS' },
  { name: 'Armenia', currency: 'AMD' },
  { name: 'Australia', currency: 'AUD' },
  { name: 'Austria', currency: 'EUR' },
  { name: 'Azerbaijan', currency: 'AZN' },
  { name: 'Bahamas', currency: 'BSD' },
  { name: 'Bahrain', currency: 'BHD' },
  { name: 'Bangladesh', currency: 'BDT' },
  { name: 'Barbados', currency: 'BBD' },
  { name: 'Belarus', currency: 'BYN' },
  { name: 'Belgium', currency: 'EUR' },
  { name: 'Belize', currency: 'BZD' },
  { name: 'Benin', currency: 'XOF' },
  { name: 'Bhutan', currency: 'BTN' },
  { name: 'Bolivia', currency: 'BOB' },
  { name: 'Bosnia and Herzegovina', currency: 'BAM' },
  { name: 'Botswana', currency: 'BWP' },
  { name: 'Brazil', currency: 'BRL' },
  { name: 'Brunei', currency: 'BND' },
  { name: 'Bulgaria', currency: 'BGN' },
  { name: 'Burkina Faso', currency: 'XOF' },
  { name: 'Burundi', currency: 'BIF' },
  { name: 'Cambodia', currency: 'KHR' },
  { name: 'Cameroon', currency: 'XAF' },
  { name: 'Canada', currency: 'CAD' },
  { name: 'Central African Republic', currency: 'XAF' },
  { name: 'Chad', currency: 'XAF' },
  { name: 'Chile', currency: 'CLP' },
  { name: 'China', currency: 'CNY' },
  { name: 'Colombia', currency: 'COP' },
  { name: 'Comoros', currency: 'KMF' },
  { name: 'Congo', currency: 'XAF' },
  { name: 'Costa Rica', currency: 'CRC' },
  { name: 'Côte d\'Ivoire', currency: 'XOF' },
  { name: 'Croatia', currency: 'HRK' },
  { name: 'Cuba', currency: 'CUP' },
  { name: 'Cyprus', currency: 'EUR' },
  { name: 'Czech Republic', currency: 'CZK' },
  { name: 'Denmark', currency: 'DKK' },
  { name: 'Djibouti', currency: 'DJF' },
	{ name: 'Dominica', currency: 'XCD' },
  { name: 'Dominican Republic', currency: 'DOP' },
  { name: 'Ecuador', currency: 'USD' },
  { name: 'Egypt', currency: 'EGP' },
  { name: 'El Salvador', currency: 'USD' },
  { name: 'Equatorial Guinea', currency: 'XAF' },
  { name: 'Eritrea', currency: 'ERN' },
  { name: 'Estonia', currency: 'EUR' },
  { name: 'Ethiopia', currency: 'ETB' },
  { name: 'Fiji', currency: 'FJD' },
  { name: 'Finland', currency: 'EUR' },
  { name: 'France', currency: 'EUR' },
  { name: 'Gabon', currency: 'XAF' },
  { name: 'Gambia', currency: 'GMD' },
  { name: 'Georgia', currency: 'GEL' },
  { name: 'Germany', currency: 'EUR' },
  { name: 'Ghana', currency: 'GHS' },
  { name: 'Greece', currency: 'EUR' },
  { name: 'Grenada', currency: 'XCD' },
  { name: 'Guatemala', currency: 'GTQ' },
  { name: 'Guinea', currency: 'GNF' },
  { name: 'Guinea-Bissau', currency: 'GWP' },
  { name: 'Guyana', currency: 'GYD' },
  { name: 'Haiti', currency: 'HTG' },
  { name: 'Honduras', currency: 'HNL' },
  { name: 'Hungary', currency: 'HUF' },
  { name: 'Iceland', currency: 'ISK' },
  { name: 'India', currency: 'INR' },
  { name: 'Indonesia', currency: 'IDR' },
  { name: 'Iran', currency: 'IRR' },
  { name: 'Iraq', currency: 'IQD' },
  { name: 'Ireland', currency: 'EUR' },
  { name: 'Israel', currency: 'ILS' },
  { name: 'Italy', currency: 'EUR' },
  { name: 'Jamaica', currency: 'JMD' },
  { name: 'Japan', currency: 'JPY' },
  { name: 'Jordan', currency: 'JOD' },
  { name: 'Kazakhstan', currency: 'KZT' },
  { name: 'Kenya', currency: 'KES' },
  { name: 'Kiribati', currency: 'AUD' },
  { name: 'North Korea', currency: 'KPW' },
  { name: 'South Korea', currency: 'KRW' },
  { name: 'Kosovo', currency: 'EUR' },
  { name: 'Kuwait', currency: 'KWD' },
  { name: 'Kyrgyzstan', currency: 'KGS' },
  { name: 'Laos', currency: 'LAK' },
  { name: 'Latvia', currency: 'EUR' },
  { name: 'Lebanon', currency: 'LBP' },
  { name: 'Lesotho', currency: 'LSL' },
  { name: 'Liberia', currency: 'LRD' },
  { name: 'Libya', currency: 'LYD' },
  { name: 'Lithuania', currency: 'EUR' },
	{ name: 'Luxembourg', currency: 'EUR' },
  { name: 'Macedonia', currency: 'MKD' },
  { name: 'Madagascar', currency: 'MGA' },
  { name: 'Malawi', currency: 'MWK' },
  { name: 'Malaysia', currency: 'MYR' },
  { name: 'Maldives', currency: 'MVR' },
  { name: 'Mali', currency: 'XOF' },
  { name: 'Malta', currency: 'EUR' },
  { name: 'Marshall Islands', currency: 'USD' },
  { name: 'Mauritania', currency: 'MRO' },
  { name: 'Mauritius', currency: 'MUR' },
  { name: 'Mexico', currency: 'MXN' },
  { name: 'Micronesia', currency: 'USD' },
  { name: 'Moldova', currency: 'MDL' },
  { name: 'Monaco', currency: 'EUR' },
  { name: 'Mongolia', currency: 'MNT' },
  { name: 'Montenegro', currency: 'EUR' },
  { name: 'Morocco', currency: 'MAD' },
  { name: 'Mozambique', currency: 'MZN' },
  { name: 'Myanmar', currency: 'MMK' },
  { name: 'Namibia', currency: 'NAD' },
  { name: 'Nauru', currency: 'AUD' },
  { name: 'Nepal', currency: 'NPR' },
  { name: 'Netherlands', currency: 'EUR' },
  { name: 'New Zealand', currency: 'NZD' },
  { name: 'Nicaragua', currency: 'NIO' },
  { name: 'Niger', currency: 'XOF' },
  { name: 'Nigeria', currency: 'NGN' },
  { name: 'Norway', currency: 'NOK' },
  { name: 'Oman', currency: 'OMR' },
  { name: 'Pakistan', currency: 'PKR' },
  { name: 'Palau', currency: 'USD' },
  { name: 'Panama', currency: 'PAB' },
  { name: 'Papua New Guinea', currency: 'PGK' },
  { name: 'Paraguay', currency: 'PYG' },
  { name: 'Peru', currency: 'PEN' },
  { name: 'Philippines', currency: 'PHP' },
  { name: 'Poland', currency: 'PLN' },
  { name: 'Portugal', currency: 'EUR' },
  { name: 'Qatar', currency: 'QAR' },
  { name: 'Romania', currency: 'RON' },
  { name: 'Russia', currency: 'RUB' },
  { name: 'Rwanda', currency: 'RWF' },
  { name: 'Saint Kitts and Nevis', currency: 'XCD' },
  { name: 'Saint Lucia', currency: 'XCD' },
  { name: 'Saint Vincent and the Grenadines', currency: 'XCD' },
  { name: 'Samoa', currency: 'WST' },
  { name: 'San Marino', currency: 'EUR' },
  { name: 'São Tomé and Principe', currency: 'STN' },
  { name: 'Saudi Arabia', currency: 'SAR' },
  { name: 'Senegal', currency: 'XOF' },
	{ name: 'Serbia', currency: 'RSD' },
  { name: 'Seychelles', currency: 'SCR' },
  { name: 'Sierra Leone', currency: 'SLL' },
  { name: 'Singapore', currency: 'SGD' },
  { name: 'Sint Maarten', currency: 'ANG' },
  { name: 'Slovakia', currency: 'EUR' },
  { name: 'Slovenia', currency: 'EUR' },
  { name: 'Solomon Islands', currency: 'SBD' },
  { name: 'Somalia', currency: 'SOS' },
  { name: 'South Africa', currency: 'ZAR' },
  { name: 'South Sudan', currency: 'SSP' },
  { name: 'Spain', currency: 'EUR' },
  { name: 'Sri Lanka', currency: 'LKR' },
  { name: 'Sudan', currency: 'SDG' },
  { name: 'Suriname', currency: 'SRD' },
  { name: 'Swaziland', currency: 'SZL' },
  { name: 'Sweden', currency: 'SEK' },
  { name: 'Switzerland', currency: 'CHF' },
  { name: 'Syria', currency: 'SYP' },
  { name: 'Tajikistan', currency: 'TJS' },
  { name: 'Tanzania', currency: 'TZS' },
  { name: 'Thailand', currency: 'THB' },
  { name: 'Timor-Leste', currency: 'USD' },
  { name: 'Togo', currency: 'XOF' },
  { name: 'Tonga', currency: 'TOP' },
  { name: 'Trinidad and Tobago', currency: 'TTD' },
  { name: 'Tunisia', currency: 'TND' },
  { name: 'Turkey', currency: 'TRY' },
  { name: 'Turkmenistan', currency: 'TMT' },
  { name: 'Tuvalu', currency: 'AUD' },
  { name: 'Uganda', currency: 'UGX' },
  { name: 'Ukraine', currency: 'UAH' },
  { name: 'United Arab Emirates', currency: 'AED' },
  { name: 'United Kingdom', currency: 'GBP' },
  { name: 'United States', currency: 'USD' },
  { name: 'Uruguay', currency: 'UYU' },
  { name: 'Uzbekistan', currency: 'UZS' },
  { name: 'Vanuatu', currency: 'VUV' },
  { name: 'Vatican City', currency: 'EUR' },
  { name: 'Venezuela', currency: 'VEF' },
  { name: 'Vietnam', currency: 'VND' },
  { name: 'Yemen', currency: 'YER' },
  { name: 'Zambia', currency: 'ZMW' },
  { name: 'Zimbabwe', currency: 'ZWL' }
];
