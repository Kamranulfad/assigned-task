import React, { useEffect, useState } from 'react';
import './home.css';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>My App</h1>
      </header>

      <main className="home-main">
        <h2>Welcome to Home Page</h2>
        {user ? (
          <h3>Hello, {user.displayName || user.email}!</h3>
        ) : (
          <h3>No user found. Please login.</h3>
        )}
      </main>

      <footer className="home-footer">
        <p> Assigned Task
            
        </p>
      </footer>
    </div>
  );
}
