function Breadcrumb({ title, week }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">{title}</li>
        <li className="breadcrumb-item active" aria-current="page">
          Week {week}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
