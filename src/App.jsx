import RecordingsTable from './components/RecordingsTable';

function App() {
  return (
    <main className="container my-3">
      <h1 className="display-1 mb-3">Fathom Recordings</h1>
      <p className="lead">
        Fathom recording links for Programming Basics and Web Fundamentals, WOS
        2024 cohort.
      </p>
      <RecordingsTable />
    </main>
  );
}

export default App;
