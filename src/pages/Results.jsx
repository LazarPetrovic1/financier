import { useContext, useEffect } from "react"
import { TrackerContext } from "../contexts/TrackerContext"
import { useNavigate } from "react-router-dom"
import SavingsBlock from "../components/SavingsBlock";
import Alert from "../components/Alert";
import { classAdvice, classSystem } from "../utils";
import Plot from "react-plotly.js";
import { useLawData } from '../hooks'
import OnlineCheckWrapper from "../ConnectionWrapper";

function ResultsComponent() {
  const { calculatedFinancialData, countryWithCurrency } = useContext(TrackerContext)
  const { isBarbarian, isLoading, getData } = useLawData();
  useEffect(() => {
    (async function() {
      await getData(countryWithCurrency.name);
    })()
    // eslint-disable-next-line
  }, [])
  const navigate = useNavigate();
  if (!calculatedFinancialData) return navigate(-1);
  const x = [...classSystem.map(x => x.className), "You"], y = [...classSystem.map(x => x.upperThreshhold), calculatedFinancialData.tangibleCashInUSD];
  const isLast = y.map((_, i) => i === y.length - 1)
  const { res, msgType } = classAdvice(calculatedFinancialData.class.className);
  const RuleOfLawText = isLoading ? (
    <span className="text-info"><em>Gathering overview of legal framework in your country...</em></span>
  ) : isBarbarian ? (
    <span className="text-danger"><b>Unfortunately, the rule of law is not respected in your country. Run as far and wide as your legs can carry you!</b></span>
  ) : !isBarbarian ? (
    <span className="text-success"><b>Luckily, you seem to have that on lock! Huddle down and protect your democracy!</b></span>
  ) : null;
  return (
    <div className="pt-4 pb-5">
      <h1 className="text-primary text-center text-decoration-underline mb-4">
        Socio-economic status overview for {countryWithCurrency.name}
      </h1>
      {calculatedFinancialData.savings.map((sd, i) => (
        <SavingsBlock key={i} id={i} savings={sd} currency={countryWithCurrency.currency} />
      ))}
      <h2 className="mt-2 d-flex justify-content-between">
        <span className="text-secondary">Total savings in global currency ($)</span>
        <span>{calculatedFinancialData.tangibleCashInUSD.toFixed(2)}</span>
      </h2>
      <div className="border p-2">
        <p className="mt-2 d-flex justify-content-between">
          <span className="text-secondary">Net salary in global currency</span>
          <span>{(calculatedFinancialData.net * calculatedFinancialData.localToUSD).toFixed(2)}</span>
        </p>
        <p className="mt-2 d-flex justify-content-between">
          <span className="text-secondary">Projected gross salary in global currency</span>
          <span>{(calculatedFinancialData.gross * calculatedFinancialData.localToUSD).toFixed(2)}</span>
        </p>
        <Alert msg="The result is a projection of data available and might not be accurate." msgType="info" />
      </div>
      <div className="my-3 text-center">
        <Plot
          data={[
            {
              x, y,
              type: 'bar',
              mode: 'lines+markers',
              marker: { color: isLast.map(x => x ? 'lightgreen' : 'lightblue') },
            },
          ]}
          layout={{
            width: 700,
            height: 450,
            title: { text: "Socio-economic wealth data & you", font: { color: 'white' }, },
            plot_bgcolor: 'rgb(33, 37, 41)',
            paper_bgcolor: 'rgb(33, 37, 41)',
            xaxis: {
              color: 'white',
              tickfont: { color: 'white' },
              title: { text: 'Date', font: { color: 'white' } },
            },
            yaxis: {
              color: 'white',
              tickfont: { color: 'white' },
              title: { text: 'Value', font: { color: 'white' } },
            },
          }}
        />
      </div>
      <div className="my-3">
        Given the data you've provided, and assuming you're living alone,
        without any help from anyone, you would be considered a member of the global
        <span className="text-info">&nbsp;{calculatedFinancialData.class.className}</span>.
      </div>
      <div className={`text-${msgType} text-center`}>{res}</div>
      <div className="lead text-center">
        Since your country has {calculatedFinancialData.taxRate > 0.1 ? "an abysmal" : "a phenomenal"} tax rate,
        I would advise you to {calculatedFinancialData.taxRate > 0.1 ? <span className="text-danger text-decoration-underline">move immediately</span> : <span className="text-decoration-underline text-success">stay for now</span>},
        in order to build up your wealth.
      </div>
      <div>
        It is also important to consider the rule of law, which is the #1 indicator of building long-lasting wealth. <br />
        <div className="text-center my-3" style={{ fontSize: '1.5rem' }}>
          {RuleOfLawText}
        </div>
      </div>
    </div>
  )
}

const Results = () => (
  <OnlineCheckWrapper>
    <ResultsComponent />
  </OnlineCheckWrapper>
)

export default Results