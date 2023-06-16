function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closedHour}:00. Drop by or order online.</p>
          <button className="btn">Order Now</button>
        </div>
      )}
    </footer>
  );
}

export default Footer;
