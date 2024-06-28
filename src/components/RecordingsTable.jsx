import { recordings } from '../data';
import RecordingsRow from './RecordingsRow';

function RecordingsTable() {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th colspan="3" class="bg-primary-subtle">
            WEEK 1
          </th>
        </tr>
        <tr>
          <th>DAY</th>
          <th>TIME</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        {recordings.map((recording) => (
          <RecordingsRow key={recording.link} recording={recording} />
        ))}
      </tbody>
    </table>
  );
}

export default RecordingsTable;
