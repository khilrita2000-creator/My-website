import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <section className="card">
        <h1>React + GitHub Pages</h1>
        <p>This is a simple React page deployed via GitHub Actions.</p>
        <p>Edit <code>src/App.jsx</code> and push to <code>main</code> to see changes.</p>

        <button className="primary-button" onClick={() => setCount((c) => c + 1)}>
          You clicked {count} time{count === 1 ? '' : 's'}
        </button>
      </section>
    </main>
  );
}

