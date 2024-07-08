import { NavLink } from 'react-router-dom';

function WeekLink({ week }) {
  return (
    <NavLink className="dropdown-item" to={`/weeks/${week}`} end>
      Week {week}
    </NavLink>
  );
}

export default WeekLink;
