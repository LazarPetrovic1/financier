import { useContext, useEffect } from "react"
import { TrackerContext } from "../contexts/TrackerContext"
import { DataContext } from "../contexts/DataContext"
import { useNavigate } from "react-router-dom"
import Alert from "../components/Alert";
import { buildFullReport, buildLocalWealthClasses, exportToCSV, exportToJSON, exportToPDF, getLatestValue, getWealthEnvironmentLabel, incomeClassSystem, wealthClassSystem } from "../utils";
import Plot from "react-plotly.js";
import OnlineCheckWrapper from "../ConnectionWrapper";

function ResultsComponent() {
  const { calculatedFinancialData, countryWithCurrency } = useContext(TrackerContext);
  const { countryData, wealthIndicators } = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => { if (!calculatedFinancialData) navigate(-1); }, [calculatedFinancialData, navigate]);
  if (!calculatedFinancialData) return null;

  const {
    netIncome,
    grossIncome,
    monthlyIncomeUSD,
    totalAssetsUSD,
    totalLiabilitiesUSD,
    netWorthUSD,
    incomeClass,
    wealthClass,
    taxRate,
    householdSize,
    localCurrency
  } = calculatedFinancialData;

  const graphX = [...wealthClassSystem.map(x => x.className), "You"];
  // const graphY = [...wealthClassSystem.map(x => x.upper), netWorthUSD];
  const graphY = wealthClassSystem.map(x => {
    if (x.upper === Infinity) return wealthClassSystem[wealthClassSystem.length - 2].upper * 1.2;
    return x.upper;
  }).concat(netWorthUSD);
  const colors = graphY.map((_, i) => i === graphY.length - 1 ? "lightgreen" : "lightblue");
  const score = Number(wealthIndicators.wealthEnvironmentScore || 0);

  const countryAssessment = score >= 85 ?
    { text: "Excellent country for wealth creation and capital accumulation.", color: "success" } :
    score >= 70 ? { text: "Strong economic environment with good long-term prospects.", color: "info" } :
    score >= 55 ? { text: "Moderate environment. Wealth creation is possible but requires planning.", color: "warning" } :
    { text: "Challenging environment for wealth building.", color: "danger" };
  
  const assessment = getWealthEnvironmentLabel(score);

  const localWealthClasses = buildLocalWealthClasses(getLatestValue(countryData.gniPerCapita), wealthIndicators.wealthEnvironmentScore);
  const localWealthClass = localWealthClasses.find(cls => netWorthUSD >= cls.lower && netWorthUSD < cls.upper);
  const localGraphX = [...localWealthClasses.map(x => x.className), "You"];
  // const localGraphY = [...localWealthClasses.map(x => x.upper), netWorthUSD];
  const localGraphY = localWealthClasses.map(x => {
    if (x.upper === Infinity)
      return localWealthClasses[localWealthClasses.length - 2].upper * 1.2;
    return x.upper;
  }).concat(netWorthUSD);
  const localColors = localGraphY.map((_, i) => i === localGraphY.length - 1 ? "lightgreen" : "orange");

  const incomeGraphX = [...incomeClassSystem.map(x => x.className), "You"];
  const incomeGraphY = incomeClassSystem.map(x => {
    if (x.upper === Infinity)
      return incomeClassSystem[incomeClassSystem.length - 2].upper * 1.2;
    return x.upper;
  }).concat(monthlyIncomeUSD);

  const report = buildFullReport({ calculatedFinancialData, countryWithCurrency, countryData, wealthIndicators });

  return (
    <div className="pt-4 pb-5">
      <h1 className="text-primary text-center text-decoration-underline mb-4">Wealth Report for {countryWithCurrency.name}</h1>
      <div className="border p-3 mb-3">
        <h3 className="text-info mb-3">Income Overview</h3>
        <p className="d-flex justify-content-between">
          <span>Monthly Net Income</span>
          <span>{localCurrency} {netIncome.toLocaleString()}</span>
        </p>

        <p className="d-flex justify-content-between">
          <span>Estimated Gross Income</span>
          <span>{localCurrency} {grossIncome.toFixed(2)}</span>
        </p>

        <p className="d-flex justify-content-between">
          <span>Monthly Income (USD)</span>
          <span>${monthlyIncomeUSD.toLocaleString(undefined, {maximumFractionDigits: 2 })}</span>
        </p>

        <p className="d-flex justify-content-between">
          <span>Tax Rate</span>
          <span>{(taxRate * 100).toFixed(1)}%</span>
        </p>
      </div>

      <div className="border p-3 mb-3">
        <h3 className="text-success mb-3">Net Worth Overview</h3>

        <p className="d-flex justify-content-between">
          <span>Total Assets</span>
          <span>${totalAssetsUSD.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </p>

        <p className="d-flex justify-content-between">
          <span>Total Liabilities</span>
          <span className="text-danger">
            ${totalLiabilitiesUSD.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
        </p>
        <hr />
        <h4 className="d-flex justify-content-between">
          <span>Net Worth</span>
          <span className={netWorthUSD >= 0 ? "text-success" : "text-danger"}>
            ${netWorthUSD.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
        </h4>
      </div>

      <div className="border p-3 mb-3">
        <h3 className="text-warning">Classification</h3>
        <p className="d-flex justify-content-between">
          <span>Income Class</span>
          <strong className="text-info">{incomeClass?.className}</strong>
        </p>

        <p className="d-flex justify-content-between">
          <span>Global Wealth Class</span>
          <strong className="text-success">{wealthClass?.className}</strong>
        </p>

        <p className="d-flex justify-content-between">
          <span>Local Wealth Class</span>
          <strong className="text-warning">{localWealthClass?.className}</strong>
        </p>

        <p className="d-flex justify-content-between">
          <span>Household Size</span>
          <span>{householdSize}</span>
        </p>
      </div>

      <div className="my-4 text-center">
        <Plot
          data={[ { x: graphX, y: graphY, type: "bar", marker: { color: colors } } ]}
          layout={{
            width: 700,
            height: 450,
            title: { text: "Global Wealth Classes vs You", font: { color: "white" } },
            plot_bgcolor: "rgb(33,37,41)",
            paper_bgcolor: "rgb(33,37,41)",
            xaxis: { color: "white", tickfont: { color: "white" } },
            yaxis: { color: "white", tickfont: { color: "white" }, title: { text: "USD Net Worth", font: { color: "white" } } }
          }}
        />
      </div>

      <div className="my-4 text-center">
        <Plot
          data={[ { x: localGraphX, y: localGraphY, type: "bar", marker: { color: localColors } } ]}
          layout={{
            width: 700,
            height: 450,
            title: { text: `Local Wealth Classes (${countryWithCurrency.name})`, font: { color: "white" } },
            plot_bgcolor: "rgb(33,37,41)",
            paper_bgcolor: "rgb(33,37,41)",
            xaxis: { color: "white", tickfont: { color: "white" } },
            yaxis: { color: "white", tickfont: { color: "white" }, title: { text: "Adjusted Local Wealth", font: { color: "white" } } }
          }}
        />
      </div>

      <div className="my-4 text-center">
        <Plot
          data={[{
            x: incomeGraphX, y: incomeGraphY, type: "bar",
            marker: { color: incomeGraphY.map((_, i) => i === incomeGraphY.length - 1 ? "lightgreen" : "lightblue") }
          }]}
          layout={{
            width: 700,
            height: 450,
            title: { text: "Global Income Classes vs You", font: { color: "white" } },
            plot_bgcolor: "rgb(33,37,41)",
            paper_bgcolor: "rgb(33,37,41)",
            xaxis: { color: "white", tickfont: { color: "white" } },
            yaxis: { color: "white", tickfont: { color: "white" }, title: { text: "Monthly Income (USD)", font: { color: "white" } } }
          }}
        />
      </div>
      
      <Alert msg="All values are estimates. Asset valuations, business ownership, real estate values, and exchange rates can materially affect the final result." msgType="info" />
      <div className="lead mt-4 text-center">
        Based on the information provided, your estimated
        net worth places you in the
        <span className="text-success">{" "}{wealthClass?.className}</span>
        {" "}while your current income places you in the
        <span className="text-info">{" "}{incomeClass?.className}</span>.
      </div>

      <div className="text-center mt-3">
        {netWorthUSD < 0 && (
          <Alert msg="Your liabilities currently exceed your assets. Prioritizing high-interest debt repayment will generally have the greatest impact on net worth growth." msgType="danger" />
        )}

        {netWorthUSD >= 0 &&
          netWorthUSD < 100000 && (
            <Alert msg="You're building wealth. Focus on increasing income, maintaining savings discipline, and investing surplus capital." msgType="warning" />
          )}

        {netWorthUSD >= 100000 && (
          <Alert msg="Your asset base is becoming substantial. Asset allocation, diversification, and tax efficiency become increasingly important." msgType="success" />
        )}
      </div>

      <hr className="my-4" />
      <h2 className="text-success text-center mb-3">National Wealth Environment</h2>

      <div className="form-control">
        <div className="row">
          <div className="col-md-6">
            <p className="d-flex justify-content-between">
              <span>GDP</span>
              <span>${getLatestValue(countryData.gdp).toLocaleString()}</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>GDP Per Capita</span>
              <span>${getLatestValue(countryData.gdpPerCapita).toLocaleString()}</span>
            </p>

            <p className="d-flex justify-content-between">
              <span>Population</span>
              <span>{getLatestValue(countryData.totalPopulation).toLocaleString()}</span>
            </p>

            <p className="d-flex justify-content-between">
              <span>Inflation Rate</span>
              <span>{getLatestValue(countryData.percentInflation).toFixed(2)}%</span>
            </p>

            <p className="d-flex justify-content-between">
              <span>Unemployment</span>
              <span>{getLatestValue(countryData.percentUnemployment).toFixed(2)}%</span>
            </p>

            <p className="d-flex justify-content-between">
              <span>Poverty Rate</span>
              <span>{getLatestValue(countryData.povertyHeadcount).toFixed(2)}%</span>
            </p>
          </div>

          <div className="col-md-6">
            <p className="d-flex justify-content-between">
              <span>Life Expectancy</span>
              <span>{getLatestValue(countryData.lifeExpectancy).toFixed(1)}</span>
            </p>

            <p className="d-flex justify-content-between">
              <span>Gini Coefficient</span>
              <span>{getLatestValue(countryData.gini).toFixed(1)}</span>
            </p>

            <p className="d-flex justify-content-between">
              <span>GNI Per Capita</span>
              <span>${getLatestValue(countryData.gniPerCapita).toLocaleString()}</span>
            </p>

            <p className="d-flex justify-content-between">
              <span>Internet Users</span>
              <span>{getLatestValue(countryData.internetUsers).toFixed(1)}%</span>
            </p>

            <p className="d-flex justify-content-between">
              <span>Labour Participation</span>
              <span>{getLatestValue(countryData.labourForceParticipation).toFixed(1)}%</span>
            </p>

            <p className="d-flex justify-content-between">
              <span>Gross Savings Rate</span>
              <span>{getLatestValue(countryData.grossSavingsRate).toFixed(1)}%</span>
            </p>
          </div>
        </div>

        <div className="form-control mt-3">
          <h4 className="text-center text-info">Wealth Environment Score</h4>
          <h1 className={`text-center`} style={{ color: assessment.color }}>
            <span>{wealthIndicators.wealthEnvironmentScore}/100</span> - <span>{assessment.res}</span>
          </h1>

          <div className="progress mb-3">
            <div
              className={`progress-bar progress-bar-striped bg-${assessment.class}`}
              role="progressbar"
              style={{ width: `${wealthIndicators.wealthEnvironmentScore}%` }}
            />
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>Inflation Score: {wealthIndicators.inflationScore?.toFixed(1)}</p>
              <p>Unemployment Score: {wealthIndicators.unemploymentScore?.toFixed(1)}</p>
              <p>Poverty Score: {wealthIndicators.povertyScore?.toFixed(1)}</p>
              <p>Gini Score: {wealthIndicators.giniScore?.toFixed(1)}</p>
              <p>Life Score: {wealthIndicators.lifeScore?.toFixed(1)}</p>
              <p>Internet Score: {wealthIndicators.internetScore?.toFixed(1)}</p>
            </div>

            <div className="col-md-6">
              <p>GNI Score: {wealthIndicators.gniScore?.toFixed(1)}</p>
              <p>Adjusted Income Score: {wealthIndicators.adjustedIncomeScore?.toFixed(1)}</p>
              <p>Credit Score: {wealthIndicators.creditScore?.toFixed(1)}</p>
              <p>Savings Score: {wealthIndicators.savingsScore?.toFixed(1)}</p>
              <p>Labour Score: {wealthIndicators.labourScore?.toFixed(1)}</p>
              <p>Secure Server Score: {wealthIndicators.secureServerScore?.toFixed(1)}</p>
            </div>
          </div>

        </div>

        <Alert msg={countryAssessment.text} msgType={countryAssessment.color} />
      </div>

      <h2 className="text-success text-center my-3">Generate Report</h2>
      <div className="d-flex gap-2 justify-content-center my-4">
        <button className="btn btn-outline-primary" onClick={() => exportToJSON(report)}>Export JSON</button>
        <button className="btn btn-outline-success" onClick={() => exportToCSV(report)}>Export CSV</button>
        <button className="btn btn-outline-danger" onClick={() => exportToPDF(report)}>Export PDF</button>
      </div>
    </div>
  );
}

const Results = () => (
  <OnlineCheckWrapper>
    <ResultsComponent />
  </OnlineCheckWrapper>
)

export default Results