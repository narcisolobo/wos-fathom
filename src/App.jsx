import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Week from './components/Week';
import Home from './components/Home';
import OffCanvasContent from './components/OffCanvasContent';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="d-flex">
        <aside className="p-3 d-none d-lg-block">
          <OffCanvasContent />
        </aside>
        <main className="p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weeks/:week" element={<Week />} />
          </Routes>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
