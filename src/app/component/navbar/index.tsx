/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import './index.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mt-4">
      <div className="container-fluid">
        <a id="logo" className="navbar-brand" href="#"><img src="/willzer0.png" alt="Logo" height="40" /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a id="home-nav" className="nav-link active text-black fw-semibold fs-6" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a id="home-nav" className="nav-link active text-black fw-semibold fs-6" href="/">About</a>
            </li>
            <li className="nav-item">
              <a id="home-nav" className="nav-link active text-black fw-semibold fs-6" href="/">Skill</a>
            </li>
            <li className="nav-item">
              <a id="home-nav" className="nav-link active text-black fw-semibold fs-6" href="/">Project</a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}
