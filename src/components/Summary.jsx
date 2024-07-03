import { Fragment } from 'react';

function Summary({ summary }) {
  return (
    <Fragment>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#summary"
        aria-expanded="false"
        aria-controls="summary">
        Summary
      </button>
      <div className="collapse" id="summary">
        <div className="card card-body">{summary}</div>
      </div>
    </Fragment>
  );
}

export default Summary;
