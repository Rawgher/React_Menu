import './App.css';
import breadData from './data';

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
      <Bread
        name="Brioche"
        description="Light and slighly puffy bread"
        price={18}
        img="https://images.unsplash.com/photo-1620921568790-c1cf8984624c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      />
      <Bread
        name="Foccacia"
        description="Oven backed bread with vegetable toppings"
        price={10}
        img="https://images.unsplash.com/photo-1636367989765-db1ebdae1408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      />
    </main>
  );
}

function Bread(props) {
  return (
    <div className="bread">
      <img src={props.img} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>${props.price}</span>
      </div>
    </div>
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
