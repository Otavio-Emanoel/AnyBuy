import React, { useState } from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faUserPlus, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
        <img src="/HeaderIcon.png" alt="AnyBuy" />
      </div>
      <form className="header-search" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Buscar produtos..." />
        <button type="submit" aria-label="Buscar">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>Início</a>
        <a href="/produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
        <a href="/contato" onClick={() => setMenuOpen(false)}>Contato</a>
        <div className="header-actions mobile">
          <button className="header-btn">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: 6 }} />
            Login
          </button>
          <button className="header-btn">
            <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 6 }} />
            Cadastro
          </button>
        </div>
      </nav>
      <div className="header-actions desktop">
        <button className="header-btn">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: 6 }} />
          Login
        </button>
        <button className="header-btn">
          <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 6 }} />
          Cadastro
        </button>
      </div>
      <button
        className="header-hamburger"
        aria-label="Abrir menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>
      {/* Overlay para fechar o menu ao clicar fora */}
      {menuOpen && <div className="header-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}