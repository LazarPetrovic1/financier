import { HashRouter as Router , Routes, Route } from 'react-router-dom';
import { Nav } from './components'
import { Search, Tracker, Welcome, Results, About, PatchNotes, History } from './pages'
import { DataProvider } from './contexts/DataContext';
import { TrackerProvider } from './contexts/TrackerContext';
import { CALC_HEIGHT_MINUS } from './utils';

function App() {
  return (
    <DataProvider>
      <TrackerProvider>
        <Router>
          <Nav />
          <div className="container-fluid" style={{ height: `calc(100vh - ${CALC_HEIGHT_MINUS}px)` }}>
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/results' element={<Results />} />
              <Route path='/search' element={<Search />} />
              <Route path='/tracker' element={<Tracker />} />
              <Route path='/about' element={<About />} />
              <Route path='/history' element={<History />} />
              <Route path='/patch-notes' element={<PatchNotes />} />
            </Routes>
          </div>
        </Router>
      </TrackerProvider>
    </DataProvider>
  );
}

export default App;

