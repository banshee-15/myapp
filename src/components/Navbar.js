import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <ul className={`nav nav-tabs navbar-${props.mode} bg-${props.mode}`}>
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Contact</a>
        </li>
      </ul>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={props.toggleMode}
          value=""
          id="flexCheckIndeterminate"
        />
        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
          Enable Dark Mode
        </label>
      </div>
    </>
  );
}

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  mode: 'light', // Default mode set to 'light'
};
