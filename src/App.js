import './App.css';
// import breadData from './data';

function Bread() {
  return (
    <div className="bread">
      <img
        src="https://images.unsplash.com/photo-1620921568790-c1cf8984624c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
        alt="Brioche Bread"
      />
      <div>
        <h3>Brioche</h3>
        <p>Light and slighly puffy bread</p>
        <p>$18</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Quick Rise Baking Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Bread />
      <Bread />
      <Bread />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  // if (isOpen) {
  //   console.log("We're currently open!");
  // } else {
  //   console.log("We're currently closed. See you tomorrow!");
  // }

  return <footer className="footer">Right now it is {new Date().toLocaleTimeString()}. We're currently open!</footer>;
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
