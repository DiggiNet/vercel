import './index.css';

function App() {
  return (
    <main className="container">
      <img src="/logo.png" alt="Appeddy Logo" className="logo" />
      <h1>Demnächst bei Appeddy.de</h1>
      <p className="intro">PWAs direkt über Subdomains – keine App Store Pflicht!</p>

      <section className="apps">
        <AppCard name="Lotto App" />
        <AppCard name="Terminplaner" />
        <AppCard name="Elternsprecher App" />
        <AppCard name="Anzeigen App" />
      </section>

      <footer>© 2025 Appeddy.de</footer>
    </main>
  );
}

function AppCard({ name }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>In Arbeit – bald verfügbar</p>
    </div>
  );
}

export default App;