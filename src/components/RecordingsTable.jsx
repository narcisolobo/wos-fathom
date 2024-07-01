import { recordings } from '../data';
import RecordingsRow from './RecordingsRow';

function RecordingsTable() {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th colspan="4" class="bg-primary-subtle">
            WEEK 1
          </th>
        </tr>
        <tr>
          <th>DAY</th>
          <th>DATE</th>
          <th>TIME</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        {recordings
          .filter((r) => r.week === 1)
          .map((recording) => (
            <RecordingsRow key={recording.link} recording={recording} />
          ))}
        <tr>
          <th colspan="4" class="bg-primary-subtle">
            WEEK 2
          </th>
        </tr>
        <tr>
          <th>DAY</th>
          <th>DATE</th>
          <th>TIME</th>
          <th>DESCRIPTION</th>
        </tr>
        {recordings
          .filter((r) => r.week === 2)
          .map((recording) => (
            <RecordingsRow key={recording.link} recording={recording} />
          ))}
      </tbody>
    </table>
  );
}

export default RecordingsTable;
