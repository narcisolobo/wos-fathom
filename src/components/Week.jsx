import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useRecordings } from '../context/RecordingsContext';
import { getTitle } from '../utils/get-title';
import RecordingCard from './RecordingCard';
import Breadcrumb from './Breadcrumb';

function Week() {
  const { week } = useParams();
  const title = getTitle(week);
  const { recordings } = useRecordings();
  const filteredRecordings = recordings.filter(
    (recording) => recording.week === Number(week)
  );
  console.log(filteredRecordings);

  return (
    <Fragment>
      <Breadcrumb title={title} week={week} />
      <div className="d-grid gap-3 recordings-grid">
        {filteredRecordings.map((recording) => (
          <RecordingCard key={recording.link} recording={recording} />
        ))}
      </div>
    </Fragment>
  );
}

export default Week;
