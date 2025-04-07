import { intro } from '../utils'
function Welcome() {
  return (
    <div className="d-flex flex-column">
      <h1 className="text-center text-primary my-2 container">
        Welcome to FinTracker Financier
        <div className='m-0 p-0 d-flex justify-content-end'>
          <span style={{ fontSize: '0.7rem' }}>v{process.env.REACT_APP_VERSION}</span>
        </div>
      </h1>
      <h6 className="text-info text-center mt-3 mb-0">
        <pre className='text-break mb-0' style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem" }}>{intro}</pre>
      </h6>
    </div>
  )
}

export default Welcome