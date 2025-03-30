import { HashRouter as Router , Routes as Switch, Route } from 'react-router-dom';
import { Nav, Search, Tracker, Welcome, Results } from './components'
import { DataProvider } from './contexts/DataContext';
import { TrackerProvider } from './contexts/TrackerContext';

function App() {
  return (
    <DataProvider>
      <TrackerProvider>
        <Router>
          <Nav />
          <div className="container">
            <Switch>
              <Route path='/' element={<Welcome />} />
              <Route path='/results' element={<Results />} />
              <Route path='/search' element={<Search />} />
              <Route path='/tracker' element={<Tracker />} />
            </Switch>
          </div>
        </Router>
      </TrackerProvider>
    </DataProvider>
  );
}

export default App;

