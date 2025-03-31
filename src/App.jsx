import { HashRouter as Router , Routes as Switch, Route } from 'react-router-dom';
import { Nav } from './components'
import { Search, Tracker, Welcome, Results, About, PatchNotes } from './pages'
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
              <Route path='/about' element={<About />} />
              <Route path='/patch-notes' element={<PatchNotes />} />
            </Switch>
          </div>
        </Router>
      </TrackerProvider>
    </DataProvider>
  );
}

export default App;

