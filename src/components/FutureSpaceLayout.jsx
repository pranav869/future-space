import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../futurespace_scoped.css';

export default function FutureSpaceLayout({ children }) {
  return (
    <div className="futurespace-layout">
      <Navbar />
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
