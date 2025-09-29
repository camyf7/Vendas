import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      {/* Logo */}
      <div className='logo'>
        <Link to='/'>
          <span className='logo-1'>M</span>
          <span className='logo-2'>D</span>
          <span className='logo-3'>C</span>
        </Link>
      </div>

      {/* Navegação visível */}
      <nav className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Barra de busca */}
      <div className='search-bar'>
        <input type='text' placeholder='Digite sua busca...' />
        <button className='search-btn'>
          <ion-icon name="search"></ion-icon>
        </button>
      </div>
    </header>
  );
}


