import { intro } from '../utils'
function Welcome() {
  return (
    <div>
      <h1 className="text-center text-primary my-2">
        Welcome to FinTracker Financier
      </h1>
      <h6 className="text-info text-center my-3">
        <pre className='text-break'>{intro}</pre>
      </h6>
    </div>
  )
}

export default Welcome