import { Link } from "react-router-dom";
import OnlineCheckWrapper from "../ConnectionWrapper";
import { TrackerContext } from "../contexts/TrackerContext";
import { useContext } from 'react'

function HistoryPanel() {
  const { history } = useContext(TrackerContext);
  console.log("HISTORY", history);

  return (
    <div className="form-control mt-4">
      <h3 className="text-info text-center">Calculation History</h3>
      {history.length ? history.slice().reverse().map(item => (
        <div key={item.id} className="border p-2 my-2">
          <div className="d-flex justify-content-between">
            <strong>{item.report.meta.country}</strong>
            <span>{new Date(item.timestamp).toLocaleString()}</span>
          </div>
          <div>Net Worth: ${item.report.financial.netWorthUSD.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
          <div>Income Class: {item.report.financial.incomeClass?.className}</div>
        </div>
      )) : (
        <div className="text-center p-2 my-2">
          You don't seem to have created a snapshot yet. You can do that <Link to="/tracker">here</Link>.
        </div>
      )}
    </div>
  );
}

const History = () => (
  <OnlineCheckWrapper>
    <HistoryPanel />
  </OnlineCheckWrapper>
)

export default History;