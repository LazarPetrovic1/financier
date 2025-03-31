import { intro } from '../utils'
function Welcome() {
  return (
    <div>
      <h1 className="text-center text-primary my-2">
        Welcome to FinTracker Financier
        <div className='m-0 p-0 d-flex justify-content-end'>
          <span style={{ fontSize: '0.7rem' }}>v{process.env.REACT_APP_VERSION}</span>
        </div>
      </h1>
      <h6 className="text-info text-center my-3">
        <pre className='text-break'>{intro}</pre>
      </h6>
      
    </div>
  )
}

export default Welcome