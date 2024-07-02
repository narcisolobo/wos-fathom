import { recordings } from '../data';
import { createContext, useContext } from 'react';

const RecordingsContext = createContext(recordings);

function RecordingsProvider({ children }) {
  return (
    <RecordingsContext.Provider value={{ recordings }}>
      {children}
    </RecordingsContext.Provider>
  );
}

function useRecordings() {
  const context = useContext(RecordingsContext);
  if (!context) {
    console.error('useRecordings must be used inside of RecordingsProvider.');
  }
  return context;
}

export { RecordingsContext, useRecordings };
export default RecordingsProvider;
