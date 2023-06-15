import './App.css';
// import breadData from './data';

function Bread() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1620921568790-c1cf8984624c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
        alt="Brioche Bread"
      />
      <h2>Brioche</h2>
      <p>Light and slighly puffy bread</p>
      <p>$18</p>
    </div>
  );
}

function Header() {
  return <h1>Quick React Baking Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Bread />
      <Bread />
      <Bread />
    </div>
  );
}

function Footer() {
  return <footer>Right now it is {new Date().toLocaleTimeString()}. We're currently open!</footer>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
