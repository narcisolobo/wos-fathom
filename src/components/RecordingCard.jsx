function RecordingCard({ recording }) {
  const handleClick = () => {
    window.open(recording.link, '_blank');
  };

  return (
    <div className="card shadow clickable" onClick={handleClick}>
      <img
        src={recording.image}
        alt={recording.description}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title mb-3">{recording.description}</h5>
        <p className="card-text mb-0">
          <strong>Week: </strong>
          {recording.week}
          <strong>, Day: </strong>
          {recording.day}
        </p>
        <p className="card-text">
          <strong>Time: </strong>
          {recording.time}
        </p>
      </div>
    </div>
  );
}

export default RecordingCard;
