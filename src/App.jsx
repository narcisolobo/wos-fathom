import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Week from './components/Week';
import Home from './components/Home';
import OffCanvasContent from './components/OffCanvasContent';
import OffCanvasContainer from './components/OffCanvasContainer';
import RecordingsProvider from './context/RecordingsContext';

function App() {
  return (
    <RecordingsProvider>
      <Header />
      <OffCanvasContainer />
      <div className="d-flex">
        <aside className="p-3 d-none d-lg-block">
          <h5>Stacks</h5>
          <OffCanvasContent />
        </aside>
        <main className="p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weeks/:week" element={<Week />} />
          </Routes>
        </main>
      </div>
    </RecordingsProvider>
  );
}

export default App;
