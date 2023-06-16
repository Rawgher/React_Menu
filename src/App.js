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
      <ul className="breads">
        {breadData.map((bread) => (
          <Bread breadObj={bread} key={bread.name} />
        ))}
      </ul>
    </main>
  );
}

const Bread = ({ breadObj }) => {
  const { img, name, description, price } = breadObj;

  return (
    <li className="bread">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>${price}</span>
      </div>
    </li>
  );
};

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
