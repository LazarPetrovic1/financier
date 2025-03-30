import { useContext } from "react";
import { allRegisteredCountries, selectIndication } from "../utils";
import Plot from "react-plotly.js";
import { DataContext } from '../contexts/DataContext'

function Search() {
  const { country, setCountry, startDate, setStartDate, endDate, setEndDate, countryData, getData, graph, setGraph } = useContext(DataContext)
  const onSubmit = async e => { e.preventDefault(); await getData(); }
  return (
    <div className="py-3">
      <form onSubmit={onSubmit}>
        <div className="form-control d-flex justify-content-between align-items-baseline">
          <label htmlFor="search" className="me-4">Search country <i>(optional)</i></label>
          <select onChange={e => setCountry(e.target.value)} name="search" id="search" className="form-select me-4" style={{ flex: 1 }}>
            <option className="text-center" selected value="" disabled>-- Choose one --</option>
            {allRegisteredCountries.map((count, i) => (
              <option className="text-center" key={`${count.code}-${i}`} value={count.name}>{count.name}</option>
            ))}
          </select>
          <button type="submit" className="btn btn-secondary">Go</button>
        </div>
        <div className="form-control d-flex justify-content-between align-items-baseline">
          <div>
            <label htmlFor="startDate" className="me-4">Start date <i>(optional)</i></label>
            <input
              onChange={e => setStartDate(() => e.target.value)}
              value={startDate}
              name="startDate"
              id="startDate"
              type="date"
            />
          </div>
          <div>
            <input
              onChange={e => setEndDate(() => e.target.value)}
              value={endDate}
              name="endDate"
              id="endDate"
              type="date"
            />
            <label htmlFor="endDate" className="ms-4">End date <i>(optional)</i></label>
          </div>
        </div>
      </form>
      <div className="">
        {Object.keys(countryData).length > 0 && (
          <div>
            <h2 className="text-center mt-3 mb-2">
              <span>Extracted information for: </span>
              <span className="text-primary">{country}</span>
            </h2>
            <div className="my-3">
              <select className="form-select" onChange={e => setGraph(() => e.target.value)} name="selectIndication" id="selectIndication">
                {selectIndication.map((si, i) => (
                  <option key={i} value={si.code}>{si.value}</option>
                ))}
              </select>
            </div>
            <div className="text-center">
              <Plot
                data={[
                  {
                    x: countryData[graph].map(x => x.date),
                    y: countryData[graph].map(x => x.value),
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'lightblue'},
                  },
                ]}
                layout={{
                  title: { text: (selectIndication.find(x => x.code === graph)).value, font: { color: 'white' }, },
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
          </div>
        )}
      </div>
    </div>
  )
}

export default Search;