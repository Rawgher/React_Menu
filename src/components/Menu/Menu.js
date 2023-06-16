import Bread from '../Bread/Bread';
import breadData from '../../data';
import './menu.css';

function Menu() {
  const breads = breadData;
  const breadLength = breads.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {breadLength > 0 ? (
        <>
          <p>Elevate your baking experience with our delectable treats that rise in record time!</p>
          <ul className="breads">
            {breads.map((bread) => (
              <Bread breadObj={bread} key={bread.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're currently out of stock of our breads. Please come back later to see what we've made!</p>
      )}
    </main>
  );
}

export default Menu;
