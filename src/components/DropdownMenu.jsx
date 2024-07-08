import WeekLink from './WeekLink';

function DropdownMenu({ weeks }) {
  return (
    <ul className="dropdown-menu">
      {weeks.map((week) => (
        <li>
          <WeekLink key={week} week={week} />
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
