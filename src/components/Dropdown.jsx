import DropdownMenu from './DropdownMenu';

function Dropdown({ title, weeks }) {
  return (
    <div className="button-group dropend">
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        {title}
      </button>
      <DropdownMenu weeks={weeks} />
    </div>
  );
}

export default Dropdown;
