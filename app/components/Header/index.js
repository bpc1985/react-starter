import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/* component styles */
import s from './styles.css';

function Header(props) {
  const { loggedIn, logout } = props;
  return (
    <div className={s.root}>
      <ul className={s.menu}>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/quotes">
            Quotes
          </Link>
        </li>
        { !loggedIn &&
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
        }
        { loggedIn &&
          <li>
            <Link to="/tasks">
              Tasks
            </Link>
          </li>
        }
        { loggedIn &&
          <li>
            <a href="/logout" onClick={(e) => { e.preventDefault(); logout(); }}>
              Logout
            </a>
          </li>
        }
      </ul>
    </div>
  );
}

Header.propTypes = { loggedIn: PropTypes.bool, logout: PropTypes.func };

export default Header;
