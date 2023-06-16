import './footer.css';

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closedHour}:00. Drop by or order online.</p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>
          We're happy to take your orders between {openHour}:00 and {closedHour}:00!
        </p>
      )}
    </footer>
  );
}

export default Footer;
