import React from 'react';
import { Link } from 'react-router';

/* component styles */
import s from './styles.css';

function Header() {
  return (
    <div className={s.root}>
      <ul className={s.menu}>
        <li>
          <Link to="/example">
            example
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
