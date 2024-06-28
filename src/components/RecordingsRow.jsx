const clickable = {
  cursor: 'pointer',
};

function RecordingsRow({ recording }) {
  const viewLink = () => {
    window.open(recording.link, '_blank').focus();
  };

  return (
    <tr style={clickable} onClick={viewLink}>
      <td>{recording.day}</td>
      <td>{recording.date}</td>
      <td>{recording.time}</td>
      <td>{recording.description}</td>
    </tr>
  );
}

export default RecordingsRow;
