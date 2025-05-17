/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import './index.css';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.4 }}>
    <nav className="navbar navbar-expand-lg navbar-dark mt-4">
      <div className="container-fluid">
        <a id="logo" className="navbar-brand" href="#"><img src="/willzer0.png" alt="Logo" className='logo' /></a>
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
              <a id="home-nav" className="nav-link active fw-semibold" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a id="home-nav" className="nav-link active fw-semibold" href="/">Skill</a>
            </li>
            <li className="nav-item">
              <a id="home-nav" className="nav-link active fw-semibold" href="/">Project</a>
            </li>
            <li className="nav-item">
              <a id="home-nav" className="nav-link active fw-semibold" href="/">About</a>
            </li>
          </ul>
        </div>
        <a href="https://github.com/willzer0" className="git" ><img src="https://th.bing.com/th?q=GitHub+PNG+White&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-ID&cc=ID&setlang=en&adlt=strict&t=1&mw=247" alt="Github" className='gitimage' /></a>
      </div>
    </nav>
    </motion.div>
  );
}
