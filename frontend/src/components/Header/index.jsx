import "./Header.css";
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import { isLogged, doLogout, getUser } from "../../lib/authHandler"
import { useAuth } from "../../contexts/AuthContext"



export default function Header() {

  const { logged, user, setLogged, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      const checkLogin = () => {
      const loggedIn = isLogged();
      setLogged(loggedIn);
      if (loggedIn) {
        const userData = getUser();
        setUser(userData);
      } else {
        setUser(null);
      }
    }
      checkLogin();
      const handleStorageCharge = (e) => {
        if (e.key === "token" || e.key === "user") {
          checkLogin();
        }

      }
      window.addEventListener("storage", handleStorageCharge);

      return () => {
        window.removeEventListener("storage", handleStorageCharge);
    }
}, [setLogged, setUser]);

  const handleLogout = () => {
    doLogout();
    setLogged(false);
    setUser(null);
    navigate("/signin");
  }

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <span className="logo-1">C</span>
          <span className="logo-2">♡</span>
          <span className="logo-3">A</span>
        </Link>
      </div>

      {/* Busca*/}

      <div className="search-bar">
        <input type="text" placeholder='Buscar "Apartamentos" ' />
        <div className="location">
          <button className="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>

        {/* Botoes*/}
        <nav className="navbar">
          <ul>
            { logged ?(
              <>
                <li>
                  <Link to='/' className="anuncio">
                  Meus Anúncios
                  </Link>
                </li>
                <li>
                  <Link to='/post-an-ad'
                  className="anunciarBtn">
                    Postar um anúncio
                  </Link>
                </li>
                <li className="profileContainer">
                  <button
                  className="profileBtn"
                  onClick={() => setMenuOpen(!menuOpen)}>

                  <img 
                  src={user.photoURL}
                  alt={user.name}
                  className='profileImg'
                  />

                  <span>{user.name?.split(' ') [0]} </span> 
                  <FaAngleDown size={16}
                  className="arrow" />

                  </button>
                  {menuOpen && (
                    <div className='dropdown'>
                      <button>Minha Conta</button>
                      <button>Favoritos</button>
                      <button onClick={handleLogout}>
                        Sair
                        </button>
                    </div>
                  )}
                </li>
              
              </>
            ) : (
              <>
              <li>
                <Link to='/'
                className="entrarBtn">Anunciar grátis
                </Link>
              </li>

              <li>
                <Link to='/signin'
                className="entrarBtn">Entar
                </Link>
              </li>
              </>
            )}
            </ul>
        </nav>

    </header>
  );
}



