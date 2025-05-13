import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <div style={styles.left}>
          <NavLink to="/" style={{ ...styles.logo, textDecoration: 'none' }}>
            Paddock
          </NavLink>
        </div>

        <div style={styles.center}>
          <input
            type="text"
            placeholder="Search drivers, teams..."
            style={styles.search}
          />
        </div>

        <div style={styles.right}>
          <NavLink to="/calendar" style={navLinkStyle}>Calendar</NavLink>
          <NavLink to="/garage" style={navLinkStyle}>Garage</NavLink>
          <NavLink to="/news" style={navLinkStyle}>News</NavLink>
        </div>
      </div>
    </nav>
  );
};

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? '#fff' : '#ccc',
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: 'none',
  borderBottom: isActive ? '2px solid #ff4d4d' : 'none',
});

const styles = {
  nav: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: '1rem 2rem',
    boxSizing: 'border-box',
  },
  left: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1.5rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ff4d4d',
  },
  search: {
    width: '100%',
    maxWidth: '300px',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '1px solid #444',
    backgroundColor: '#222',
    color: '#fff',
    fontSize: '1rem',
  },
  inner: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
  },
};

export default NavBar;